import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, "../..");
const sourceDir = resolve(repo, "Labor_Growth_Report_Vault/04_Course_Descriptions_2570");
const sources = [
  "02_Engineering_Fundamentals.md",
  "03_AI_Core.md",
  "04_Track_Core.md",
  "05_Electives_Smart_Agriculture.md",
  "06_Electives_Industrial_AI.md",
  "07_Electives_AI_Innovation.md",
];
const cloSource = resolve(
  repo,
  "Labor_Growth_Report_Vault/05_TQF2_Academic_Drafts/10_Course_Learning_Outcomes_CLO_Mapping.md",
);

const courses = {};
const courseLine = /^(EN-\d{3}-\d{3})\s+(.+?)\s+(\d+\(\d+-\d+-\d+\))\s*$/;

for (const filename of sources) {
  const lines = readFileSync(resolve(sourceDir, filename), "utf8")
    .split(/\r?\n/)
    .map(line => line.replace(/\s+$/, ""));

  for (let i = 0; i < lines.length; i += 1) {
    const match = lines[i].match(courseLine);
    if (!match) continue;

    const [, code, thaiTitle, credits] = match;
    const englishTitle = lines[i + 1]?.trim();
    const thaiDescription = lines[i + 2]?.trim();
    const englishDescription = lines[i + 3]?.trim();

    if (!englishTitle || !thaiDescription || !englishDescription) {
      throw new Error(`Incomplete bilingual course block for ${code} in ${filename}`);
    }

    courses[code] = {
      t: thaiTitle,
      e: englishTitle,
      cr: credits,
      d: thaiDescription,
      dEn: englishDescription,
      source: filename,
    };
  }
}

// 27 engineering/AI/track-core courses + 45 professional electives.
const expected = 75;
if (Object.keys(courses).length !== expected) {
  throw new Error(`Expected ${expected} revised courses, found ${Object.keys(courses).length}`);
}

const output = `// Generated from Labor_Growth_Report_Vault/04_Course_Descriptions_2570.
// Do not edit manually; run npm run sync:curriculum after updating the Vault.
export const COURSE_REVISION = ${JSON.stringify(courses, null, 2)};
`;

writeFileSync(resolve(repo, "curriculum-graph/src/courseRevisionData.js"), output, "utf8");

const levelRank = { I: 1, R: 2, M: 3 };
const extractSkillSets = cell => {
  const result = [];
  for (const match of cell.matchAll(/AISK(\d{2})((?:\/\d{2})*)/g)) {
    result.push(`AISK${match[1]}`);
    for (const suffix of match[2].split("/").filter(Boolean)) {
      result.push(`AISK${suffix}`);
    }
  }
  return [...new Set(result)];
};
const normalizeYlos = cell => {
  let currentYear = null;
  const result = [];
  for (const part of cell.split("/").map(value => value.trim())) {
    const full = part.match(/YLO(\d)\.(\d)/);
    if (full) {
      currentYear = full[1];
      result.push(`YLO${full[1]}.${full[2]}`);
      continue;
    }
    const short = part.match(/^(\d)\.(\d)$/);
    if (short) result.push(`YLO${short[1]}.${short[2]}`);
    else if (currentYear && /^\d+$/.test(part)) result.push(`YLO${currentYear}.${part}`);
  }
  return [...new Set(result)];
};

const cloRevision = {};
let currentCode = null;
for (const line of readFileSync(cloSource, "utf8").split(/\r?\n/)) {
  const heading = line.match(/^###\s+(EN-\d{3}-\d{3})\b/);
  if (heading) {
    currentCode = heading[1];
    cloRevision[currentCode] = { clos: [] };
    continue;
  }
  if (!currentCode || !cloRevision[currentCode] || !line.startsWith("| CLO")) continue;

  const cells = line.split("|").slice(1, -1).map(cell => cell.trim());
  if (cells.length < 4) continue;
  const cloHead = cells[0].match(/^CLO(\d+)\s+(.+)$/);
  if (!cloHead) continue;
  const skillCell = cells.length >= 5 ? cells[3] : "";
  const evidenceCell = cells.length >= 5 ? cells[4] : cells[3];

  const plo = [...cells[2].matchAll(/PLO(\d)\s+\(([IRM](?:–[IRM])?)\)/g)].map(match => {
    const levels = match[2].split("–");
    const level = levels.reduce((best, value) =>
      levelRank[value] > levelRank[best] ? value : best, levels[0]);
    return [Number(match[1]), level];
  });
  const sets = extractSkillSets(skillCell);

  cloRevision[currentCode].clos.push({
    n: Number(cloHead[1]),
    t: cloHead[2],
    ylo: normalizeYlos(cells[1]),
    plo,
    sets,
    primarySet: sets[0] || null,
    skill: skillCell,
    evidence: evidenceCell,
  });
  cloRevision[currentCode].primarySets = [...new Set([
    ...(cloRevision[currentCode].primarySets || []),
    ...(sets[0] ? [sets[0]] : []),
  ])];
  cloRevision[currentCode].sets = [...new Set([
    ...(cloRevision[currentCode].sets || []),
    ...sets,
  ])];
}

// The CLO master currently covers required courses/activities only. Elective
// descriptions are synchronized here, but their CLOs remain course-section
// specific and are therefore not required by this validation.
const cloRequiredSources = new Set([
  "02_Engineering_Fundamentals.md",
  "03_AI_Core.md",
  "04_Track_Core.md",
]);
const cloRequiredCodes = Object.entries(courses)
  .filter(([, course]) => cloRequiredSources.has(course.source))
  .map(([code]) => code);

for (const code of cloRequiredCodes) {
  if (!cloRevision[code]?.clos.length) {
    throw new Error(`No CLO rows found for ${code}`);
  }
}
if (Object.keys(cloRevision).length !== 36) {
  throw new Error(`Expected CLO mapping for 36 courses/activities, found ${Object.keys(cloRevision).length}`);
}
const cloCount = Object.values(cloRevision).reduce((sum, item) => sum + item.clos.length, 0);
if (cloCount !== 111) {
  throw new Error(`Expected 111 CLO rows, found ${cloCount}`);
}

const cloOutput = `// Generated from 10_Course_Learning_Outcomes_CLO_Mapping.md.
// Do not edit manually; run npm run sync:curriculum after updating the Vault.
export const CLO_REVISION = ${JSON.stringify(cloRevision, null, 2)};
`;
writeFileSync(resolve(repo, "curriculum-graph/src/cloRevisionData.js"), cloOutput, "utf8");

console.log(
  `Synced ${Object.keys(courses).length} revised bilingual descriptions and ` +
  `${cloCount} CLOs.`,
);
