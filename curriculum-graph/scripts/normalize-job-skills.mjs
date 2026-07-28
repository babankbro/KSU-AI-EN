import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { buildSkillCounts, inferSkillsFromText, normalizeSkills } from "./skill-taxonomy.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const SITE_PATH = path.join(ROOT, "src", "jobsData.json");
const RAW_PATH = path.join(ROOT, "data", "jobsdb-ai-engineer-raw.json");
const site = JSON.parse(await readFile(SITE_PATH, "utf8"));
const raw = JSON.parse(await readFile(RAW_PATH, "utf8"));
const descriptions = new Map(raw.jobs.map(job => [job.id, job.description || ""]));

site.jobs = site.jobs.map(job => ({
  ...job,
  skills: normalizeSkills([...job.skills, ...inferSkillsFromText(descriptions.get(job.id))]),
  skillMethod: `${job.skillMethod.replace(/\s+\+\s+canonical-taxonomy$/, "")} + canonical-taxonomy`
}));
site.skillCounts = buildSkillCounts(site.jobs);
site.meta.skillGroups = {
  Technical: 20,
  Soft: 10
};

await writeFile(SITE_PATH, `${JSON.stringify(site, null, 2)}\n`, "utf8");
console.log(`ปรับ taxonomy สำเร็จ: ${site.jobs.length} งาน · Technical 20 · Soft 10`);
