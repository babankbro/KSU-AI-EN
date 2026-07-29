import { existsSync } from "node:fs";
import { readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import {
  buildCareerSkillCounts,
  buildSkillCounts,
  inferCareerSkillsFromText
} from "./skill-taxonomy.mjs";
import {
  CAREER_CLASSIFICATION_GUIDE,
  CLASSIFICATION_POLICY
} from "./career-classification-guide.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const RAW_PATH = path.join(ROOT, "data", "jobsdb-careers-raw.json");
const SITE_PATH = path.join(ROOT, "src", "jobsData.json");
const ENV_PATH = path.join(ROOT, ".env.local");
const BATCH_SIZE = Number(process.env.GEMINI_CLASSIFY_BATCH_SIZE || 10);
const CONCURRENCY = Number(process.env.GEMINI_CLASSIFY_CONCURRENCY || 12);
const CLASSIFICATION_VERSION = "semantic-career-v1";
const jobArg = process.argv.find(arg => arg.startsWith("--job="));
const requestedJobId = jobArg?.slice("--job=".length).trim() || "";

async function loadLocalEnv() {
  if (!existsSync(ENV_PATH)) return;
  const text = await readFile(ENV_PATH, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (!match || process.env[match[1]]) continue;
    process.env[match[1]] = match[2].replace(/^['"]|['"]$/g, "");
  }
}

await loadLocalEnv();
const apiKey = process.env.GEMINI_API_KEY;
const model = process.env.GEMINI_CLASSIFY_MODEL || process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";
if (!apiKey) {
  console.error("ไม่พบ GEMINI_API_KEY ใน process environment หรือ .env.local");
  process.exit(1);
}

const raw = JSON.parse(await readFile(RAW_PATH, "utf8"));
const site = JSON.parse(await readFile(SITE_PATH, "utf8"));
const rawById = new Map(raw.jobs.map(job => [String(job.id), job]));
const siteById = new Map(site.jobs.map(job => [String(job.id), job]));
const careers = site.careers || raw.meta.careers || [];
const validSubgroups = new Map(careers.map(career => [
  career.id,
  new Set((career.subcategories || []).map(subgroup => subgroup.id))
]));
const catalog = careers.map(career => ({
  id: career.id,
  name: career.name,
  definition: CAREER_CLASSIFICATION_GUIDE[career.id]?.definition || "",
  positive: CAREER_CLASSIFICATION_GUIDE[career.id]?.positive || "",
  exclude: CAREER_CLASSIFICATION_GUIDE[career.id]?.exclude || "",
  subgroups: (career.subcategories || []).map(subgroup => ({
    id: subgroup.id,
    name: subgroup.name
  }))
}));

const isProcessed = job =>
  String(job.classificationMethod || "").includes(CLASSIFICATION_VERSION);
const pending = site.jobs.filter(job =>
  !isProcessed(job) && (!requestedJobId || job.id === requestedJobId));
if (requestedJobId && !siteById.has(requestedJobId)) {
  throw new Error(`Unknown Job ID: ${requestedJobId}`);
}
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const matchSchema = {
  type: "object",
  properties: {
    careerId: { type: "string" },
    subId: { type: "string" },
    role: { type: "string", enum: ["Primary", "Secondary"] },
    confidence: { type: "number", minimum: 0, maximum: 1 },
    reason: { type: "string" }
  },
  required: ["careerId", "subId", "role", "confidence", "reason"]
};

const schema = {
  type: "object",
  properties: {
    jobs: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          relevant: { type: "boolean" },
          matches: {
            type: "array",
            maxItems: 3,
            items: matchSchema
          }
        },
        required: ["id", "relevant", "matches"]
      }
    }
  },
  required: ["jobs"]
};

async function callGemini(batch, attempt = 1) {
  const prompt = `Classify each job advertisement independently into the career catalog.
The search queries that found a job are deliberately omitted because they are not semantic evidence.
Use only the title, classification, description, extracted summary, and supported skills.
Keep each reason under 180 characters and cite the decisive duty/domain evidence.
Return one result for every supplied job ID.

POLICY:
${CLASSIFICATION_POLICY}

CAREER CATALOG:
${JSON.stringify(catalog)}

JOBS:
${JSON.stringify(batch.map(rawJob => {
    const job = siteById.get(String(rawJob.id)) || {};
    return {
      id: String(rawJob.id),
      title: rawJob.title,
      classification: rawJob.classification,
      subClassification: rawJob.subClassification,
      summary: job.summaryTh || rawJob.summary,
      skills: (job.skills || []).map(skill => skill.name),
      description: (rawJob.description || rawJob.summary || "").slice(0, 5500)
    };
  }))}`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
    {
      method: "POST",
      headers: { "content-type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
          responseJsonSchema: schema,
          temperature: 0,
          maxOutputTokens: 8192
        }
      })
    }
  );
  if ((response.status === 429 || response.status >= 500) && attempt < 6) {
    await sleep(1500 * 2 ** (attempt - 1));
    return callGemini(batch, attempt + 1);
  }
  if (!response.ok) {
    throw new Error(`Gemini HTTP ${response.status}: ${(await response.text()).slice(0, 500)}`);
  }
  const payload = await response.json();
  const text = payload.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Gemini did not return structured output");
  try {
    return JSON.parse(text).jobs;
  } catch (error) {
    if (attempt < 4) {
      await sleep(1000 * attempt);
      return callGemini(batch, attempt + 1);
    }
    throw new Error(`Gemini returned invalid JSON: ${error.message}`);
  }
}

async function classifyBatch(batch) {
  try {
    return await callGemini(batch);
  } catch (error) {
    if (batch.length === 1) throw error;
    const middle = Math.ceil(batch.length / 2);
    const left = await classifyBatch(batch.slice(0, middle));
    const right = await classifyBatch(batch.slice(middle));
    return [...left, ...right];
  }
}

function normalizeMatches(result) {
  const candidates = (result.relevant ? result.matches : [])
    .filter(match =>
      validSubgroups.has(match.careerId) &&
      validSubgroups.get(match.careerId).has(match.subId))
    .map(match => ({
      careerId: match.careerId,
      subId: match.subId,
      role: match.role,
      confidence: Math.round(Number(match.confidence || 0) * 100) / 100,
      reason: String(match.reason || "").slice(0, 240)
    }))
    .sort((a, b) => b.confidence - a.confidence);

  const uniqueCareers = [];
  const seen = new Set();
  for (const match of candidates) {
    if (seen.has(match.careerId)) continue;
    seen.add(match.careerId);
    uniqueCareers.push(match);
  }

  const primaryCandidate =
    uniqueCareers.find(match => match.role === "Primary" && match.confidence >= 0.7) ||
    uniqueCareers.find(match => match.confidence >= 0.7);
  if (!primaryCandidate) return [];

  const primary = { ...primaryCandidate, role: "Primary" };
  const secondary = uniqueCareers
    .filter(match => match.careerId !== primary.careerId && match.confidence >= 0.65)
    .slice(0, 2)
    .map(match => ({ ...match, role: "Secondary" }));
  return [primary, ...secondary];
}

function applyResult(result) {
  const job = siteById.get(String(result.id));
  if (!job) return false;
  job.classifiedMatches = normalizeMatches(result);
  job.primaryCareerId = job.classifiedMatches[0]?.careerId || null;
  job.classificationMethod = `${model} + ${CLASSIFICATION_VERSION}`;
  job.classifiedAt = new Date().toISOString();
  return true;
}

function rebuildDerivedData() {
  for (const job of site.jobs) {
    const rawJob = rawById.get(job.id);
    const classifiedCareerIds = [...new Set(
      (job.classifiedMatches || []).map(match => match.careerId)
    )];
    job.skillsByCareer = Object.fromEntries(classifiedCareerIds.map(careerId => [
      careerId,
      inferCareerSkillsFromText(
        careerId,
        [rawJob?.description, ...(job.skills || []).map(skill => skill.name)].filter(Boolean).join("\n")
      )
    ]));
  }

  const classifiedJobs = site.jobs.filter(job => (job.classifiedMatches || []).length);
  site.skillCounts = buildSkillCounts(classifiedJobs);
  site.skillCountsByCareer = Object.fromEntries(careers.map(career => [
    career.id,
    buildCareerSkillCounts(
      site.jobs.filter(job =>
        (job.classifiedMatches || []).some(match => match.careerId === career.id)),
      career.id
    )
  ]));
  site.careers = careers.map(career => ({
    ...career,
    classifiedJobs: site.jobs.filter(job =>
      (job.classifiedMatches || []).some(match => match.careerId === career.id)).length,
    subcategories: (career.subcategories || []).map(subgroup => ({
      ...subgroup,
      classifiedJobs: site.jobs.filter(job =>
        (job.classifiedMatches || []).some(match => match.subId === subgroup.id)).length
    }))
  }));
  site.meta.rawUniqueJobs = site.jobs.length;
  site.meta.classifiedJobs = classifiedJobs.length;
  site.meta.rejectedJobs = site.jobs.length - classifiedJobs.length;
  site.meta.classifiedRelations = site.jobs.reduce(
    (sum, job) => sum + (job.classifiedMatches || []).length,
    0
  );
  site.meta.careerClassification = `${model} + ${CLASSIFICATION_VERSION}`;
  site.meta.careerClassificationProcessed = site.jobs.filter(isProcessed).length;
  site.meta.careerClassificationAt = new Date().toISOString();
}

async function checkpoint() {
  rebuildDerivedData();
  const serialized = `${JSON.stringify(site, null, 2)}\n`;
  const tempPath = `${SITE_PATH}.classify.tmp`;
  for (let attempt = 1; attempt <= 6; attempt += 1) {
    try {
      await writeFile(tempPath, serialized, "utf8");
      await rename(tempPath, SITE_PATH);
      return;
    } catch (error) {
      if (attempt === 6) throw error;
      await sleep(400 * attempt);
    }
  }
}

await checkpoint();
console.log(
  `Career classification pending: ${pending.length}/${site.jobs.length} jobs · ` +
  `batch ${BATCH_SIZE} · concurrency ${CONCURRENCY}`
);

const batches = [];
for (let offset = 0; offset < pending.length; offset += BATCH_SIZE) {
  batches.push(pending.slice(offset, offset + BATCH_SIZE));
}
let nextBatch = 0;
let processed = 0;
let checkpointQueue = Promise.resolve();

async function runWorker(workerId) {
  while (nextBatch < batches.length) {
    const batchNumber = nextBatch;
    nextBatch += 1;
    const batchJobs = batches[batchNumber];
    const rawBatch = batchJobs.map(job => rawById.get(job.id));
    const results = await classifyBatch(rawBatch);
    const returned = new Set();
    for (const result of results) {
      if (applyResult(result)) returned.add(String(result.id));
    }
    const missing = rawBatch.filter(job => !returned.has(String(job.id)));
    for (const rawJob of missing) {
      const [result] = await classifyBatch([rawJob]);
      applyResult(result);
    }
    processed += batchJobs.length;
    console.log(`Classify: ${processed}/${pending.length} new · worker ${workerId}`);
    if (processed % 100 === 0 || processed === pending.length) {
      checkpointQueue = checkpointQueue.then(checkpoint);
      await checkpointQueue;
      console.log(
        `Checkpoint: ${site.meta.careerClassificationProcessed}/${site.jobs.length} classified`
      );
    }
    await sleep(150);
  }
}

const workerResults = await Promise.allSettled(
  Array.from({ length: Math.min(CONCURRENCY, batches.length) }, (_, index) =>
    runWorker(index + 1))
);
await checkpointQueue;
await checkpoint();
const failedWorker = workerResults.find(result => result.status === "rejected");
if (failedWorker) throw failedWorker.reason;
console.log(
  `Saved ${SITE_PATH} · ${site.meta.careerClassificationProcessed}/${site.jobs.length} classified`
);
