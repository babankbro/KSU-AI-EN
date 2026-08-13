/* Generate src/courseKsaData.js from the vault CLO mapping so course/CLO -> KSA never drifts.
   Source: Labor_Growth_Report_Vault/05_TQF2_Academic_Drafts/10_Course_Learning_Outcomes_CLO_Mapping.md
   Run:    npm run build:ksa (chained)                                                        */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const SRC = path.join(root, "Labor_Growth_Report_Vault/05_TQF2_Academic_Drafts/10_Course_Learning_Outcomes_CLO_Mapping.md");
const COVER = path.join(root, "Labor_Growth_Report_Vault/08_TQF2_Book_Revisions/17_Section4_7_Skill_Set_Coverage.md");
const CODEBOOK = path.join(root, "Labor_Growth_Report_Vault/05_TQF2_Academic_Drafts/18_KSA_Codebook.md");
const OUT = path.join(root, "curriculum-graph/src/courseKsaData.js");
const OUT_MD = path.join(root, "Labor_Growth_Report_Vault/05_TQF2_Academic_Drafts/19_Course_and_CLO_KSA_Tables.md");

/* วอลต์บน Windows อาจถูกบันทึกเป็น CRLF — ปรับให้เป็น LF ก่อน
   ไม่งั้น regex หัวข้อรายวิชาที่ปิดท้ายด้วย $ จะไม่ตรง และจะได้ CLO ของวิชาบังคับเป็น 0 โดยไม่มีข้อความเตือน */
const md = fs.readFileSync(SRC, "utf8").replaceAll("\r\n", "\n");
const num = a => +a.slice(1);
const sortK = arr => [...new Set(arr)].sort((a, b) => num(a) - num(b));

/* ดึงรหัส KSA จากเซลล์ รองรับทั้งรายตัวและช่วง เช่น K10–K13 */
function ksaOf(text) {
  const out = { K: [], S: [], A: [] };
  for (const m of text.matchAll(/\b([KSA])(\d{1,2})\s*[–-]\s*[KSA]?(\d{1,2})\b/g)) {
    for (let i = +m[2]; i <= +m[3]; i++) out[m[1]].push(m[1] + i);
  }
  for (const m of text.matchAll(/\b([KSA])(\d{1,2})\b/g)) out[m[1]].push(m[1] + m[2]);
  return { K: sortK(out.K), S: sortK(out.S), A: sortK(out.A) };
}

const courses = {};
let cur = null;

for (const raw of md.split("\n")) {
  const head = raw.match(/^###\s+(EN-\d{3}-\d{3})\s*(.*)$/);
  if (head) {
    cur = head[1];
    courses[cur] = { code: cur, name: head[2].trim(), clos: [], K: [], S: [], A: [], aisk: [] };
    continue;
  }
  if (!cur || !/^\|\s*CLO\d/.test(raw)) continue;   // ข้ามแถวหัวตาราง "| CLO | YLO | ..."

  const cells = raw.split("|").map(c => c.trim());
  const n = +cells[1].match(/^CLO(\d+)/)[1];
  const ksaCell = cells[4] || "";
  const k = ksaOf(ksaCell.split(";")[0]);          // ตัดส่วน AISK ออกก่อนอ่านรหัส KSA
  const aisk = [...new Set((ksaCell.match(/AISK[\d/]+/g) || [])
    .flatMap(s => {
      const [first, ...rest] = s.replace("AISK", "").split("/");
      return ["AISK" + first, ...rest.map(r => "AISK" + r.padStart(2, "0"))];
    }))];

  courses[cur].clos.push({ n, ...k, aisk });
  courses[cur].K.push(...k.K);
  courses[cur].S.push(...k.S);
  courses[cur].A.push(...k.A);
  courses[cur].aisk.push(...aisk);
}

for (const c of Object.values(courses)) {
  c.K = sortK(c.K); c.S = sortK(c.S); c.A = sortK(c.A);
  c.aisk = [...new Set(c.aisk)].sort();
  c.clos.sort((a, b) => a.n - b.n);
}

/* ── วิชาชีพเลือก: ไม่มี KSA ระบุตรงในเอกสาร จึงอนุมานผ่าน AISK -> KSA (ส่วน 6 ของสมุดรหัส) ── */
const cb = fs.readFileSync(CODEBOOK, "utf8").replaceAll("\r\n", "\n");
const aiskKsa = {};
for (const m of cb.split("# ส่วน 6")[1].split("# ภาคผนวก")[0]
  .matchAll(/^\|\s*\*\*(AISK\d\d)\*\*\s*\|([^|]*)\|([^|]*)\|([^|]*)\|([^|]*)\|/gm)) {
  aiskKsa[m[1]] = { K: sortK(m[3].match(/K\d+/g) || []), S: sortK(m[4].match(/S\d+/g) || []), A: sortK(m[5].match(/A\d+/g) || []) };
}

/* ชื่อและขอบเขตของรหัส K/S/A — ใช้เทียบกับชื่อวิชาเลือกว่ารหัสไหนเป็นแกนของวิชานั้นจริง */
const ksaText = {};
for (const m of cb.matchAll(/^\|\s*\*\*([KSA]\d{1,2})\*\*\s*\|([^|]*)\|([^|]*)\|/gm))
  ksaText[m[1]] = (ksaText[m[1]] || "") + " " + m[2] + " " + m[3];

const grams = (s, n = 4) => {
  const t = (s || "").replace(/[\s·\/,()"'’“”—–-]+/g, "");
  const out = new Set();
  for (let i = 0; i + n <= t.length; i++) out.add(t.slice(i, i + n));
  return out;
};
const sim = (a, b) => {
  if (!a.size || !b.size) return 0;
  let hit = 0;
  for (const g of a) if (b.has(g)) hit++;
  return hit / Math.min(a.size, b.size);
};

const cover = fs.readFileSync(COVER, "utf8").replaceAll("\r\n", "\n");
let derived = 0;
for (const m of cover.matchAll(/^\|\s*(EN-\d{3}-\d{3})\s+([^|]*)\|([^|]*)\|/gm)) {
  const [, code, name, setsCell] = m;
  if (courses[code]) continue;                       // มีข้อมูลจาก CLO อยู่แล้ว ใช้ของจริงก่อนเสมอ
  const aisk = [...new Set((setsCell.match(/AISK\d\d/g) || []))];
  if (!aisk.length) continue;
  /* รวมทุกชุด AISK แล้วจะได้ ~31 รหัสต่อวิชา ซึ่งมากเกินกว่าที่วิชาเลือกตัวเดียวจะรับผิดชอบจริง
     จึงคัดเหลือมิติละไม่เกิน 2 ตามเกณฑ์เดียวกับวิชาบังคับ โดยจัดอันดับจาก
       (1) ชื่อวิชาใกล้กับนิยาม/ขอบเขตของรหัสแค่ไหน — น้ำหนักมากที่สุด ไม่งั้นวิชาควบคุมจะได้รหัสเขียนแบบ
       (2) รหัสนั้นปรากฏในกี่ชุดทักษะของวิชานี้ — ยิ่งหลายชุด ยิ่งเป็นแกนของวิชา
       (3) อยู่ในชุดทักษะแรกที่ระบุไว้ ซึ่งเป็นชุดเจ้าภาพของวิชา
     ผลลัพธ์ยังเป็นค่าอนุมาน (derived) ไม่ใช่รหัสที่เอกสารระบุตรง และไม่ถูกนับเข้าความบรรลุ PLO */
  const CAP = 2;
  const host = aiskKsa[aisk[0]] || { K: [], S: [], A: [] };
  const nameGrams = grams(name);
  const pickTop = dim => {
    const freq = {};
    aisk.forEach(a => (aiskKsa[a]?.[dim] || []).forEach(c => freq[c] = (freq[c] || 0) + 1));
    const rank = c => 60 * sim(nameGrams, grams(ksaText[c] || "")) +
                      3 * freq[c] + (host[dim].includes(c) ? 2 : 0);
    return Object.keys(freq)
      .sort((x, y) => rank(y) - rank(x) || +x.slice(1) - +y.slice(1))  // เสมอกันเรียงตามเลขรหัส ผลจึงคงที่
      .slice(0, CAP);
  };
  courses[code] = {
    code, name: name.trim(), clos: [], aisk,
    K: sortK(pickTop("K")), S: sortK(pickTop("S")), A: sortK(pickTop("A")),
    derivedFrom: "aisk"                              // ป้ายบอกที่มา — ไม่ใช่รหัสที่เอกสารระบุตรง
  };
  derived++;
}
console.log(`  อนุมานจาก AISK (วิชาชีพเลือก): ${derived} วิชา`);

const list = Object.values(courses);
const withKsa = list.filter(c => c.K.length || c.S.length || c.A.length);
if (!list.length) throw new Error("no courses parsed from CLO mapping — aborting");

fs.writeFileSync(OUT,
  `/* AUTO-GENERATED by scripts/build-course-ksa.mjs — do not edit by hand.
   Source of truth: Labor_Growth_Report_Vault/05_TQF2_Academic_Drafts/10_Course_Learning_Outcomes_CLO_Mapping.md
   Regenerate with: npm run build:ksa
   ${list.length} courses · ${list.reduce((n, c) => n + c.clos.length, 0)} CLOs */\n\n` +
  `export const COURSE_KSA = ${JSON.stringify(Object.fromEntries(list.map(c => [c.code, c])), null, 1)};\n\n` +
  `export const courseKsa = code => COURSE_KSA[code] || null;\n` +
  `export const cloKsa = (code, n) => COURSE_KSA[code]?.clos.find(c => c.n === n) || null;\n`,
  "utf8");

console.log(`courseKsaData.js: ${list.length} courses · ${list.reduce((n, c) => n + c.clos.length, 0)} CLOs`);
console.log(`  มีรหัส KSA: ${withKsa.length} วิชา · ไม่มี: ${list.length - withKsa.length}`);
const empty = list.filter(c => !c.K.length && !c.S.length && !c.A.length).map(c => c.code);
if (empty.length) console.log("  วิชาที่ยังไม่มีรหัส KSA:", empty.join(", "));

/* ── ตารางในวอลต์ ── */
const direct = list.filter(c => !c.derivedFrom);
const electiveRows = list.filter(c => c.derivedFrom);
const nClos = direct.reduce((s, c) => s + c.clos.length, 0);
const cell = a => a.join(", ") || "—";

const tblCourse = rows => [
  "| รายวิชา | ชื่อ | Knowledge | Skill | Attitude | AISK |",
  "|---|---|---|---|---|---|",
  ...rows.map(c => `| \`${c.code}\` | ${c.name.slice(0, 52)} | ${cell(c.K)} | ${cell(c.S)} | ${cell(c.A)} | ${c.aisk.join("/")} |`)
].join("\n");

fs.writeFileSync(OUT_MD, `# ตารางรหัส KSA รายวิชาและราย CLO

> ผูก **รายวิชา → KSA** และ **CLO → KSA** ด้วยรหัสจาก [[18_KSA_Codebook|สมุดรหัส KSA]]
>
> **สร้างอัตโนมัติ** จาก \`curriculum-graph/scripts/build-course-ksa.mjs\` · สั่งสร้างใหม่ด้วย \`npm run build:ksa\`
> ห้ามแก้ด้วยมือ — ให้แก้ที่ [[10_Course_Learning_Outcomes_CLO_Mapping|CLO Mapping]] แล้วสร้างใหม่

> [!info] ขอบเขตข้อมูล
> - **${direct.length} รายวิชาบังคับ** มีรหัส KSA ระบุตรงจาก CLO Mapping รวม **${nClos} CLO**
> - **${electiveRows.length} วิชาชีพเลือก** ยังไม่มี KSA ระบุตรง จึง **อนุมานผ่านชุดทักษะ AISK** ([[18_KSA_Codebook#ส่วน 6 — AISK ↔ KSA|ส่วน 6]]) — ใช้เป็นค่าตั้งต้น ต้องให้ผู้รับผิดชอบรายวิชายืนยันก่อนลงเล่ม

---

## 1. รายวิชาบังคับ → KSA

รหัสมาจาก CLO ของรายวิชานั้นโดยตรง เป็นสหภาพของ KSA ที่ CLO ทุกข้ออ้างถึง

${tblCourse(direct)}

---

## 2. วิชาชีพเลือก → KSA *(อนุมานจากชุดทักษะ)*

> [!warning] ตัวเลขชุดนี้เป็นค่าตั้งต้น
> ได้จากการแตกชุดทักษะที่รายวิชารับผิดชอบออกเป็น KSA ไม่ใช่รหัสที่เอกสารระบุตรง จึงกว้างกว่าความเป็นจริง
> เมื่อกำหนด CLO รายวิชาเลือกครบแล้ว ให้แทนที่ด้วยรหัสจริงและย้ายขึ้นตารางที่ 1

${tblCourse(electiveRows)}

---

## 3. CLO → KSA รายข้อ

ใช้เป็นฐานของหมวดที่ 4 หัวข้อ 4.6 และการออกแบบเกณฑ์ประเมินรายวิชา

| รายวิชา | CLO | Knowledge | Skill | Attitude |
|---|:--:|---|---|---|
${direct.flatMap(c => c.clos.map(k =>
  `| \`${c.code}\` | CLO${k.n} | ${cell(k.K)} | ${cell(k.S)} | ${cell(k.A)} |`)).join("\n")}

---

[[10_Course_Learning_Outcomes_CLO_Mapping|← CLO Mapping]] | [[18_KSA_Codebook|สมุดรหัส KSA]] | [[00_TQF2_Drafts_Home|หน้าหลักร่างวิชาการ]]
`, "utf8");
console.log(`  19_Course_and_CLO_KSA_Tables.md: ${direct.length} บังคับ · ${electiveRows.length} เลือก · ${nClos} CLO`);
