import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const repo = resolve(import.meta.dirname, "..");
const source = resolve(repo, "src/jobsData.json");
const runtimeRoot = resolve(repo, "src/jobsRuntime");
const legacyPublicRoot = resolve(repo, "public/jobs");
const scopeDir = resolve(runtimeRoot, "scopes");
const detailDir = resolve(runtimeRoot, "details");
const indexTarget = resolve(repo, "src/jobsIndex.json");
const SHARD_COUNT = 32;

const data = JSON.parse(readFileSync(source, "utf8"));
const classifiedJobs = data.jobs.filter(job => job.classifiedMatches?.length);
const careers = data.careers || data.meta.careers || [];

rmSync(runtimeRoot, { recursive: true, force: true });
rmSync(legacyPublicRoot, { recursive: true, force: true });
mkdirSync(scopeDir, { recursive: true });
mkdirSync(detailDir, { recursive: true });

const statsFor = jobs => ({
  jobs: jobs.length,
  companies: new Set(jobs.map(job => job.company).filter(Boolean)).size,
  salary: jobs.filter(job => job.salary).length,
});

const baseJob = (job, skills, matches) => ({
  id: job.id,
  title: job.title,
  company: job.company,
  location: job.location,
  url: job.url,
  salary: job.salary,
  employment: job.employment,
  seniority: job.seniority,
  experienceYears: job.experienceYears,
  listed: job.listed,
  summaryTh: job.summaryTh || job.summary,
  skills: skills || [],
  matches,
});

const primaryMatch = job =>
  job.classifiedMatches.find(match => match.role === "Primary") || job.classifiedMatches[0];

const allScope = classifiedJobs.map(job => baseJob(job, job.skills, [primaryMatch(job)]));
writeFileSync(resolve(scopeDir, "all.json"), JSON.stringify(allScope));

const careerStats = {};
const indexedCareers = careers.map(career => {
  const jobs = classifiedJobs.filter(job =>
    job.classifiedMatches.some(match => match.careerId === career.id));
  const subCounts = Object.fromEntries((career.subcategories || []).map(sub => [
    sub.id,
    jobs.filter(job => job.classifiedMatches.some(match =>
      match.careerId === career.id && match.subId === sub.id)).length,
  ]));
  const scoped = jobs.map(job => {
    const matches = job.classifiedMatches.filter(match => match.careerId === career.id);
    return baseJob(job, job.skillsByCareer?.[career.id] || [], matches);
  });

  writeFileSync(resolve(scopeDir, `${career.id.toLowerCase()}.json`), JSON.stringify(scoped));
  careerStats[career.id] = statsFor(jobs);

  return {
    ...career,
    classifiedCount: jobs.length,
    subcategories: (career.subcategories || []).map(sub => ({
      ...sub,
      classifiedCount: subCounts[sub.id] || 0,
    })),
  };
});

const detailShards = Array.from({ length: SHARD_COUNT }, () => ({}));
for (const job of classifiedJobs) {
  const numericId = Number(String(job.id).replace(/\D/g, "")) || 0;
  const shard = numericId % SHARD_COUNT;
  detailShards[shard][job.id] = {
    requirements: job.requirements,
    degree: job.degree,
    classification: job.classification,
    subClassification: job.subClassification,
    skillMethod: job.skillMethod,
    classificationMethod: job.classificationMethod,
  };
}
detailShards.forEach((shard, index) => {
  writeFileSync(
    resolve(detailDir, `${String(index).padStart(2, "0")}.json`),
    JSON.stringify(shard),
  );
});

const jobsIndex = {
  meta: {
    ...data.meta,
    careers: undefined,
    runtimeFormat: 2,
    detailShards: SHARD_COUNT,
    classifiedJobs: classifiedJobs.length,
  },
  careers: indexedCareers,
  skillCounts: data.skillCounts,
  skillCountsByCareer: data.skillCountsByCareer,
  stats: {
    all: statsFor(classifiedJobs),
    byCareer: careerStats,
  },
};
writeFileSync(indexTarget, `${JSON.stringify(jobsIndex, null, 2)}\n`);

const mb = bytes => (bytes / 1024 / 1024).toFixed(2);
const allBytes = Buffer.byteLength(JSON.stringify(allScope));
const detailBytes = detailShards.reduce((sum, shard) => sum + Buffer.byteLength(JSON.stringify(shard)), 0);
console.log(
  `Generated jobs runtime data: index ${mb(Buffer.byteLength(JSON.stringify(jobsIndex)))} MB, ` +
  `all scope ${mb(allBytes)} MB, details ${mb(detailBytes)} MB across ${SHARD_COUNT} shards.`,
);
