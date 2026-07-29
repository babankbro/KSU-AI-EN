import { existsSync } from "node:fs";
import { readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import {
  buildCareerSkillCounts,
  buildSkillCounts,
  inferCareerSkillsFromText,
  inferSkillsFromText,
  normalizeSkills
} from "./skill-taxonomy.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const RAW_PATH = path.join(ROOT, "data", "jobsdb-careers-raw.json");
const SITE_PATH = path.join(ROOT, "src", "jobsData.json");
const ENV_PATH = path.join(ROOT, ".env.local");
const BATCH_SIZE = Number(process.env.GEMINI_BATCH_SIZE || 5);
const CONCURRENCY = Number(process.env.GEMINI_CONCURRENCY || 6);

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
const model = process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";
if (!apiKey) {
  console.error("ไม่พบ GEMINI_API_KEY ใน process environment หรือ .env.local");
  process.exit(1);
}

const raw = JSON.parse(await readFile(RAW_PATH, "utf8"));
let previous = { jobs: [] };
if (existsSync(SITE_PATH)) {
  try {
    const text = await readFile(SITE_PATH, "utf8");
    if (text.trim()) previous = JSON.parse(text);
  } catch (error) {
    console.warn(`Ignoring invalid previous checkpoint: ${error.message}`);
  }
}
const previousById = new Map((previous.jobs || []).map(job => [String(job.id), job]));
const isGeminiProcessed = job => {
  const method = String(job?.skillMethod || "").toLowerCase();
  return method.includes("gemini") && !method.startsWith("pending-");
};

const site = {
  meta: {
    ...raw.meta,
    careerClassification: previous.meta?.careerClassification,
    careerClassificationProcessed: previous.meta?.careerClassificationProcessed,
    careerClassificationAt: previous.meta?.careerClassificationAt,
    classifiedJobs: previous.meta?.classifiedJobs,
    classifiedRelations: previous.meta?.classifiedRelations,
    rejectedJobs: previous.meta?.rejectedJobs,
    skillExtraction: model,
    skillGroups: { Technical: 20, Soft: 10 }
  },
  careers: raw.meta.careers || [],
  skillCounts: [],
  skillCountsByCareer: {},
  jobs: raw.jobs.map(rawJob => {
    const old = previousById.get(String(rawJob.id)) || {};
    const oldIsGemini = isGeminiProcessed(old);
    return {
      id: String(rawJob.id),
      title: rawJob.title,
      normalizedTitle: old.normalizedTitle || rawJob.title,
      company: rawJob.company,
      location: rawJob.location,
      salary: rawJob.salary,
      employment: rawJob.employment,
      listed: rawJob.listed,
      listingDate: rawJob.listingDate,
      classification: rawJob.classification,
      subClassification: rawJob.subClassification,
      summary: rawJob.summary,
      summaryTh: old.summaryTh || "",
      requirements: rawJob.description?.slice(0, 1800) || "",
      url: rawJob.url,
      careerIds: rawJob.careerIds || [],
      searchMatches: rawJob.searchMatches || [],
      classifiedMatches: old.classifiedMatches || [],
      primaryCareerId: old.primaryCareerId || null,
      classificationMethod: old.classificationMethod || "",
      classifiedAt: old.classifiedAt || "",
      seniority: old.seniority || "Unspecified",
      degree: old.degree || "",
      experienceYears: old.experienceYears ?? null,
      skills: oldIsGemini
        ? normalizeSkills(old.skills || [])
        : normalizeSkills(inferSkillsFromText(rawJob.description)),
      skillsByCareer: Object.fromEntries((
        old.classifiedMatches?.length
          ? [...new Set(old.classifiedMatches.map(match => match.careerId))]
          : rawJob.careerIds || []
      ).map(careerId => [
        careerId,
        inferCareerSkillsFromText(
          careerId,
          [rawJob.description, ...(old.skills || []).map(skill => skill.name)].filter(Boolean).join("\n")
        )
      ])),
      skillMethod: oldIsGemini ? old.skillMethod : "pending-gemini + canonical-taxonomy"
    };
  })
};
const siteById = new Map(site.jobs.map(job => [job.id, job]));
const rawById = new Map(raw.jobs.map(job => [String(job.id), job]));
const pending = site.jobs.filter(job => !isGeminiProcessed(job));

const schema = {
  type: "object",
  properties: {
    jobs: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          normalizedTitle: { type: "string" },
          seniority: {
            type: "string",
            enum: ["Intern", "Junior", "Mid", "Senior", "Lead/Manager", "Unspecified"]
          },
          summaryTh: { type: "string" },
          education: { type: "string" },
          minExperienceYears: { type: ["integer", "null"] },
          skills: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                category: {
                  type: "string",
                  enum: ["Programming", "AI/ML", "Framework", "Data", "Cloud/DevOps", "Software", "Professional", "Domain"]
                },
                required: { type: "boolean" },
                confidence: { type: "number", minimum: 0, maximum: 1 }
              },
              required: ["name", "category", "required", "confidence"]
            }
          }
        },
        required: ["id", "normalizedTitle", "seniority", "summaryTh", "education", "minExperienceYears", "skills"]
      }
    }
  },
  required: ["jobs"]
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function callGemini(batch, attempt = 1) {
  const prompt = `Extract labor-market requirements from Thai/English job advertisements.
Return only facts supported by each advertisement. Normalize technology names.
Write summaryTh in Thai, maximum 240 characters. Set required=false only for explicitly optional skills.
Do not infer sensitive personal attributes. Return one result for every supplied job ID.

JOBS:
${JSON.stringify(batch.map(job => ({
    id: String(job.id),
    title: job.title,
    description: (job.description || job.summary || "").slice(0, 10000)
  })))}`;

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
          temperature: 0.1,
          maxOutputTokens: 8192
        }
      })
    }
  );
  if ((response.status === 429 || response.status >= 500) && attempt < 6) {
    await sleep(1500 * 2 ** (attempt - 1));
    return callGemini(batch, attempt + 1);
  }
  if (!response.ok) throw new Error(`Gemini HTTP ${response.status}: ${(await response.text()).slice(0, 500)}`);
  const payload = await response.json();
  const text = payload.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Gemini did not return structured output");
  try {
    return JSON.parse(text).jobs;
  } catch (error) {
    if (attempt < 6) {
      await sleep(1200 * attempt);
      return callGemini(batch, attempt + 1);
    }
    throw new Error(`Gemini returned invalid JSON after ${attempt} attempts: ${error.message}`);
  }
}

function applyResult(result) {
  const job = siteById.get(String(result.id));
  const rawJob = rawById.get(String(result.id));
  if (!job || !rawJob) return false;
  job.normalizedTitle = result.normalizedTitle;
  job.seniority = result.seniority;
  job.summaryTh = result.summaryTh;
  job.degree = result.education;
  job.experienceYears = result.minExperienceYears;
  job.skills = normalizeSkills([...result.skills, ...inferSkillsFromText(rawJob.description)]);
  job.skillMethod = `${model} + canonical-taxonomy`;
  return true;
}

function rebuildCounts() {
  for (const job of site.jobs) {
    const rawJob = rawById.get(job.id);
    const careerIds = job.classifiedMatches?.length
      ? [...new Set(job.classifiedMatches.map(match => match.careerId))]
      : job.careerIds || [];
    job.skillsByCareer = Object.fromEntries(careerIds.map(careerId => [
      careerId,
      inferCareerSkillsFromText(
        careerId,
        [rawJob?.description, ...(job.skills || []).map(skill => skill.name)].filter(Boolean).join("\n")
      )
    ]));
  }
  const usesClassifiedMatches = site.jobs.some(job => job.classificationMethod);
  const countedJobs = usesClassifiedMatches
    ? site.jobs.filter(job => job.classifiedMatches?.length)
    : site.jobs;
  site.skillCounts = buildSkillCounts(countedJobs);
  site.skillCountsByCareer = Object.fromEntries(site.careers.map(career => [
    career.id,
    buildCareerSkillCounts(site.jobs.filter(job =>
      usesClassifiedMatches
        ? job.classifiedMatches?.some(match => match.careerId === career.id)
        : job.careerIds.includes(career.id)), career.id)
  ]));
  site.meta.geminiProcessedJobs = site.jobs.filter(isGeminiProcessed).length;
  site.meta.geminiProcessedAt = new Date().toISOString();
}

async function checkpoint() {
  rebuildCounts();
  const serialized = `${JSON.stringify(site, null, 2)}\n`;
  const tempPath = `${SITE_PATH}.tmp`;
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
console.log(`Gemini pending: ${pending.length}/${site.jobs.length} unique jobs · batch size ${BATCH_SIZE} · concurrency ${CONCURRENCY}`);

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
    let results;
    try {
      results = await callGemini(rawBatch);
    } catch (error) {
      console.error(`Worker ${workerId} batch ${batchNumber + 1} failed: ${error.message}`);
      throw error;
    }
    const returned = new Set();
    for (const result of results) {
      if (applyResult(result)) returned.add(String(result.id));
    }
    const missing = rawBatch.filter(job => !returned.has(String(job.id)));
    for (const job of missing) {
      const [result] = await callGemini([job]);
      applyResult(result);
    }
    processed += batchJobs.length;
    console.log(`Gemini: ${processed}/${pending.length} new · worker ${workerId}`);
    if (processed % 50 === 0 || processed === pending.length) {
      checkpointQueue = checkpointQueue.then(checkpoint);
      await checkpointQueue;
      console.log(`Checkpoint: ${site.meta.geminiProcessedJobs}/${site.jobs.length} total`);
    }
    await sleep(250);
  }
}

const workerResults = await Promise.allSettled(
  Array.from({ length: Math.min(CONCURRENCY, batches.length) }, (_, index) => runWorker(index + 1))
);
await checkpointQueue;
await checkpoint();
const failedWorker = workerResults.find(result => result.status === "rejected");
if (failedWorker) throw failedWorker.reason;
console.log(`Saved ${SITE_PATH} · ${site.meta.geminiProcessedJobs} Gemini-processed jobs`);
