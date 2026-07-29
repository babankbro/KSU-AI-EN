import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { CAREER_JOB_QUERIES, CAREER_JOB_SUBQUERIES } from "./career-job-config.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const DATA_DIR = path.join(ROOT, "data");
const OUTPUT_PATH = path.join(DATA_DIR, "jobsdb-careers-raw.json");
const LEGACY_PATH = path.join(DATA_DIR, "jobsdb-ai-engineer-raw.json");
const PAGE_SIZE = Number(process.env.JOBSDB_PAGE_SIZE || 100);
const DETAIL_CONCURRENCY = Number(process.env.JOBSDB_DETAIL_CONCURRENCY || 12);
const BASE = "https://th.jobsdb.com";
const careerArg = process.argv.find(arg => arg.startsWith("--career="));
const requestedCareerId = careerArg?.slice("--career=".length).trim().toUpperCase() || "";
const selectedCareers = requestedCareerId
  ? CAREER_JOB_QUERIES.filter(career => career.id === requestedCareerId)
  : CAREER_JOB_QUERIES;
if (requestedCareerId && !selectedCareers.length) {
  throw new Error(`Unknown career ID: ${requestedCareerId}`);
}
const headers = {
  accept: "text/html,application/xhtml+xml,application/json",
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36"
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const today = () => new Date().toISOString().slice(0, 10);

async function fetchText(url, attempt = 1) {
  const response = await fetch(url, { headers });
  if ((response.status === 429 || response.status >= 500) && attempt < 6) {
    await sleep(800 * 2 ** (attempt - 1));
    return fetchText(url, attempt + 1);
  }
  if (!response.ok) throw new Error(`HTTP ${response.status} ${url}`);
  return response.text();
}

function decodeHtml(text = "") {
  return text
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(?:p|li|div|h[1-6])>/gi, "\n")
    .replace(/<li[^>]*>/gi, "• ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#(\d+);/g, (_, value) => String.fromCodePoint(Number(value)))
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function extractDescription(html) {
  const marker = /data-automation="jobAdDetails"[^>]*>/i;
  const match = marker.exec(html);
  if (!match) return "";
  const start = match.index + match[0].length;
  const tail = html.slice(start);
  const endCandidates = [
    tail.search(/data-automation="jobAdDetailsFooter"/i),
    tail.search(/data-automation="job-detail-footer"/i),
    tail.search(/<aside\b/i),
    tail.search(/<script\b/i)
  ].filter(index => index > 0);
  const end = endCandidates.length ? Math.min(...endCandidates) : Math.min(tail.length, 120000);
  return decodeHtml(tail.slice(0, end));
}

function toJob(item, career, querySpec, rank, page) {
  const classification = item.classifications?.[0];
  return {
    id: String(item.id),
    title: item.title || "",
    company: item.advertiser?.description || item.companyName || item.employer?.name || "",
    location: item.locations?.map(location => location.label).filter(Boolean).join(", ") || "",
    salary: item.salaryLabel || "",
    employment: item.workTypes?.join(", ") || "",
    listed: item.listingDateDisplay || "",
    listingDate: item.listingDate || "",
    classification: classification?.classification?.description || "",
    subClassification: classification?.subclassification?.description || "",
    summary: item.teaser || item.bulletPoints?.join(" · ") || "",
    url: `${BASE}/th/job/${item.id}`,
    careerIds: [career.id],
    searchMatches: [{
      careerId: career.id,
      subId: querySpec.id,
      subName: querySpec.name,
      query: querySpec.query,
      rank,
      page
    }],
    description: "",
    detailStatus: null,
    descriptionLength: 0
  };
}

function mergeJob(target, incoming) {
  target.careerIds = [...new Set([...(target.careerIds || []), ...incoming.careerIds])];
  const matchKey = match => `${match.careerId}:${match.subId || match.query || match.careerId}`;
  const matches = new Map((target.searchMatches || []).map(match => [matchKey(match), match]));
  for (const match of incoming.searchMatches) matches.set(matchKey(match), match);
  target.searchMatches = [...matches.values()].sort((a, b) =>
    a.careerId.localeCompare(b.careerId) || String(a.subId || "").localeCompare(String(b.subId || "")));
  for (const key of ["title", "company", "location", "salary", "employment", "listed", "listingDate",
    "classification", "subClassification", "summary", "url"]) {
    if (!target[key] && incoming[key]) target[key] = incoming[key];
  }
  return target;
}

await mkdir(DATA_DIR, { recursive: true });
const existing = existsSync(OUTPUT_PATH)
  ? JSON.parse(await readFile(OUTPUT_PATH, "utf8"))
  : { jobs: [] };
const legacy = existsSync(LEGACY_PATH)
  ? JSON.parse(await readFile(LEGACY_PATH, "utf8"))
  : { jobs: [] };
const previousById = new Map([...legacy.jobs, ...existing.jobs].map(job => [String(job.id), job]));
const jobsById = new Map();
const careerMeta = requestedCareerId
  ? (existing.meta?.careers || []).filter(career => career.id !== requestedCareerId)
  : [];

if (requestedCareerId) {
  for (const previous of existing.jobs || []) {
    const job = {
      ...previous,
      careerIds: (previous.careerIds || []).filter(id => id !== requestedCareerId),
      searchMatches: (previous.searchMatches || []).filter(match => match.careerId !== requestedCareerId)
    };
    if (job.careerIds.length) jobsById.set(String(job.id), job);
  }
}

for (const career of selectedCareers) {
  const querySpecs = CAREER_JOB_SUBQUERIES[career.id] || [{
    id: career.id,
    name: career.name,
    query: career.query
  }];
  const subcategories = [];

  for (const querySpec of querySpecs) {
    const firstUrl = `${BASE}/api/jobsearch/v5/search?sitekey=TH&keywords=${encodeURIComponent(querySpec.query)}&page=1&pageSize=${PAGE_SIZE}`;
    const first = JSON.parse(await fetchText(firstUrl));
    const total = Number(first.totalCount || first.data?.length || 0);
    const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
    const pageResults = [first];

    for (let page = 2; page <= pages; page += 1) {
      const url = `${BASE}/api/jobsearch/v5/search?sitekey=TH&keywords=${encodeURIComponent(querySpec.query)}&page=${page}&pageSize=${PAGE_SIZE}`;
      pageResults.push(JSON.parse(await fetchText(url)));
      await sleep(100);
    }

    let rank = 0;
    for (let pageIndex = 0; pageIndex < pageResults.length; pageIndex += 1) {
      for (const item of pageResults[pageIndex].data || []) {
        rank += 1;
        const incoming = toJob(item, career, querySpec, rank, pageIndex + 1);
        const current = jobsById.get(incoming.id);
        jobsById.set(incoming.id, current ? mergeJob(current, incoming) : incoming);
      }
    }
    subcategories.push({
      ...querySpec,
      sourceUrl: `${BASE}/th/${querySpec.query.replace(/\s+/g, "-")}-jobs`,
      displayedCount: rank,
      reportedCount: total,
      collectedRows: rank,
      pagesScanned: pages
    });
    console.log(`Search ${querySpec.id}: ${rank}/${total} rows · ${pages} pages`);
  }

  careerMeta.push({
    ...career,
    sourceUrl: subcategories[0].sourceUrl,
    displayedCount: subcategories.reduce((sum, item) => sum + item.displayedCount, 0),
    collectedRows: subcategories.reduce((sum, item) => sum + item.collectedRows, 0),
    pagesScanned: subcategories.reduce((sum, item) => sum + item.pagesScanned, 0),
    subcategories
  });
}

careerMeta.sort((a, b) => a.id.localeCompare(b.id));
const jobs = [...jobsById.values()];
for (const job of jobs) {
  const previous = previousById.get(job.id);
  if (previous?.description) {
    job.description = previous.description;
    job.detailStatus = previous.detailStatus || 200;
    job.descriptionLength = previous.description.length;
  }
}

let completed = jobs.filter(job => job.description).length;
const pending = jobs.filter(job => !job.description);
console.log(`Unique jobs: ${jobs.length} · cached details: ${completed} · pending: ${pending.length}`);

async function collectDetail(job) {
  try {
    const html = await fetchText(job.url);
    job.description = extractDescription(html);
    job.detailStatus = job.description ? 200 : 204;
    job.descriptionLength = job.description.length;
  } catch (error) {
    job.detailStatus = Number(error.message.match(/HTTP (\d+)/)?.[1] || 0);
    job.detailError = error.message.slice(0, 240);
  }
  completed += 1;
  if (completed % 100 === 0 || completed === jobs.length) {
    console.log(`Details: ${completed}/${jobs.length}`);
    await save();
  }
}

async function save() {
  const payload = {
    meta: {
      source: "JobsDB Thailand",
      capturedAt: today(),
      displayedRows: careerMeta.reduce((sum, career) => sum + career.displayedCount, 0),
      collectedRows: careerMeta.reduce((sum, career) => sum + career.collectedRows, 0),
      uniqueJobs: jobs.length,
      jobsWithDescriptions: jobs.filter(job => job.description).length,
      companies: new Set(jobs.map(job => job.company).filter(Boolean)).size,
      jobsWithSalary: jobs.filter(job => job.salary).length,
      careers: careerMeta
    },
    jobs: jobs.sort((a, b) => b.careerIds.length - a.careerIds.length || a.id.localeCompare(b.id))
  };
  const serialized = `${JSON.stringify(payload, null, 2)}\n`;
  for (let attempt = 1; attempt <= 6; attempt += 1) {
    try {
      await writeFile(OUTPUT_PATH, serialized, "utf8");
      return;
    } catch (error) {
      if (attempt === 6) throw error;
      await sleep(400 * attempt);
    }
  }
}

for (let offset = 0; offset < pending.length; offset += DETAIL_CONCURRENCY) {
  await Promise.all(pending.slice(offset, offset + DETAIL_CONCURRENCY).map(collectDetail));
}

await save();
console.log(`Saved ${OUTPUT_PATH}`);
