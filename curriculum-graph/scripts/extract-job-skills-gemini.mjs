import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { buildSkillCounts, inferSkillsFromText, normalizeSkills } from "./skill-taxonomy.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const RAW_PATH = path.join(ROOT, "data", "jobsdb-ai-engineer-raw.json");
const SITE_PATH = path.join(ROOT, "src", "jobsData.json");
const ENV_PATH = path.join(ROOT, ".env.local");

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
  console.error("ไม่พบ GEMINI_API_KEY — คัดลอก .env.example เป็น .env.local แล้วใส่ key ก่อนรันอีกครั้ง");
  process.exit(1);
}

const raw = JSON.parse(await readFile(RAW_PATH, "utf8"));
const site = JSON.parse(await readFile(SITE_PATH, "utf8"));
const existing = new Map(site.jobs.map(job => [job.id, job]));
const idsArg = process.argv.find(arg => arg.startsWith("--ids="));
const requestedIds = idsArg
  ? new Set(idsArg.slice("--ids=".length).split(",").map(id => id.trim()).filter(Boolean))
  : null;
const sourceJobs = requestedIds ? raw.jobs.filter(job => requestedIds.has(job.id)) : raw.jobs;

if (!sourceJobs.length) {
  console.error("ไม่พบ Job ID ที่ต้องการประมวลผล");
  process.exit(1);
}

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
  const prompt = `You extract labor-market requirements from Thai/English job advertisements.
Return only facts supported by each advertisement. Normalize technology names (e.g. Python, SQL, PyTorch, AWS, RAG, MLOps).
Keep summaryTh concise (maximum 240 Thai characters). Mark a skill required=false when it is explicitly optional/nice-to-have.
Do not infer gender, age, ethnicity, or other sensitive attributes.

JOBS:
${JSON.stringify(batch.map(job => ({
    id: job.id,
    title: job.title,
    description: job.description.slice(0, 10000)
  })))}`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": apiKey
      },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
          responseJsonSchema: schema,
          temperature: 0.1
        }
      })
    }
  );

  if ((response.status === 429 || response.status >= 500) && attempt < 5) {
    await sleep(1500 * 2 ** (attempt - 1));
    return callGemini(batch, attempt + 1);
  }

  if (!response.ok) {
    throw new Error(`Gemini HTTP ${response.status}: ${(await response.text()).slice(0, 500)}`);
  }

  const payload = await response.json();
  const text = payload.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Gemini ไม่ส่ง structured output กลับมา");
  return JSON.parse(text).jobs;
}

const BATCH_SIZE = 5;
const extracted = [];

for (let i = 0; i < sourceJobs.length; i += BATCH_SIZE) {
  const batch = sourceJobs.slice(i, i + BATCH_SIZE);
  const result = await callGemini(batch);
  extracted.push(...result);
  console.log(`Gemini: ${Math.min(i + BATCH_SIZE, sourceJobs.length)}/${sourceJobs.length}`);
  await sleep(250);
}

for (const result of extracted) {
  const current = existing.get(result.id);
  if (!current) continue;
  current.normalizedTitle = result.normalizedTitle;
  current.seniority = result.seniority;
  current.summaryTh = result.summaryTh;
  current.degree = result.education;
  current.experienceYears = result.minExperienceYears;
  const rawJob = raw.jobs.find(job => job.id === result.id);
  current.skills = normalizeSkills([...result.skills, ...inferSkillsFromText(rawJob?.description)]);
  current.skillMethod = `${model} + canonical-taxonomy`;
}

site.jobs = site.jobs.map(job => ({ ...job, skills: normalizeSkills(job.skills) }));
site.skillCounts = buildSkillCounts(site.jobs);

site.meta.skillExtraction = model;
site.meta.geminiProcessedAt = new Date().toISOString();
site.meta.skillGroups = { Technical: 20, Soft: 10 };

await writeFile(SITE_PATH, `${JSON.stringify(site, null, 2)}\n`, "utf8");
console.log(`สำเร็จ: วิเคราะห์ ${extracted.length} งาน และอัปเดต ${SITE_PATH}`);
