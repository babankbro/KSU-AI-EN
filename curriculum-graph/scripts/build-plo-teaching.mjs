/* Assemble "กระบวนการจัดการเรียนการสอนรายข้อ PLO" for the vault.
   Pulls four existing sources and joins them per PLO — nothing is invented here:
     · หมวด 5 ตารางที่ 5.1  -> teaching strategies that claim each PLO
     · หมวด 6 ตารางที่ 6.1  -> assessment method, evidence, mastery point, assessor
     · ksaData.js           -> K/S/A codes carried by each PLO
     · cloData.js           -> required-course CLOs feeding each PLO (electives excluded)
   Run: npm run build:ksa (chained)                                                     */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { KNOWLEDGE, SKILLS_KSA, ATTITUDES } from "../src/ksaData.js";
import { PLO_ROLLUP } from "../src/cloData.js";
import { PLO_NAME } from "../src/data.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const S5 = path.join(root, "Labor_Growth_Report_Vault/08_TQF2_Book_Revisions/09_Section5_Revised.md");
const S6 = path.join(root, "Labor_Growth_Report_Vault/08_TQF2_Book_Revisions/12_Section6_Revised.md");
const OUT = path.join(root, "Labor_Growth_Report_Vault/08_TQF2_Book_Revisions/20_Teaching_and_Assessment_by_PLO.md");
const OUT_JS = path.join(root, "curriculum-graph/src/teachingData.js");

const clean = s => s.replace(/<br\s*\/?>/g, " · ").replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
const cells = row => row.split("|").map(c => c.trim());

/* ── หมวด 5 ตารางที่ 5.1: กลยุทธ์ -> PLO ที่รับผิดชอบ ── */
const s5 = fs.readFileSync(S5, "utf8").split("### ตารางที่ 5.1")[1].split("## 5.2")[0];
const strategies = [];
for (const row of s5.split("\n")) {
  if (!row.startsWith("| **")) continue;
  const c = cells(row);
  strategies.push({
    name: clean(c[1]),
    how: clean(c[2]),
    tools: clean(c[5]),
    plos: [...new Set((c[4].match(/PLO(\d)/g) || []).map(p => +p.slice(3)))],
    levelOf: Object.fromEntries((clean(c[4]).match(/PLO\d \([^)]+\)/g) || [])
      .map(x => [+x[3], x.match(/\(([^)]+)\)/)[1]]))
  });
}

/* ── หมวด 6 ตารางที่ 6.1: PLO -> การประเมิน ── */
const s6 = fs.readFileSync(S6, "utf8").split("## 6.1")[1].split("## 6.2")[0];
const assess = {};
for (const row of s6.split("\n")) {
  const m = row.match(/^\|\s*(?:\*\*)?PLO(\d)/);
  if (!m) continue;
  const c = cells(row);
  assess[+m[1]] = { method: clean(c[3]), evidence: clean(c[4]), mastery: clean(c[5]), assessor: clean(c[6]) };
}

if (strategies.length !== 5) throw new Error(`expected 5 teaching strategies, parsed ${strategies.length}`);
if (Object.keys(assess).length !== 7) throw new Error(`expected 7 PLO assessment rows, parsed ${Object.keys(assess).length}`);

/* ── ประกอบรายข้อ PLO ── */
const sec = [];
for (let p = 1; p <= 7; p++) {
  const K = KNOWLEDGE.filter(r => r.plo.includes(p));
  const S = SKILLS_KSA.filter(r => r.plo.includes(p));
  const A = ATTITUDES.filter(r => r.plo.includes(p));
  const roll = PLO_ROLLUP.find(r => r.plo === p);
  const strat = strategies.filter(s => s.plos.includes(p));
  const a = assess[p];

  sec.push(`## PLO${p} — ${PLO_NAME[p]}

**ระดับปลายทาง:** ${roll.topRequired || "—"} · **วิชาบังคับที่รับผิดชอบ:** ${roll.courseCountRequired} รายวิชา / ${roll.cloCountRequired} CLO${
  roll.courseCountElective ? ` · *วิชาชีพเลือกเสริมอีก ${roll.courseCountElective} รายวิชา (ไม่นับในการตัดสิน)*` : ""}

### กลยุทธ์การสอนที่รับผิดชอบ PLO นี้

| กลยุทธ์ | ระดับที่พา PLO ไปถึง | วิธีดำเนินการ | เครื่องมือ/กิจกรรม |
|---|:--:|---|---|
${strat.map(s => `| **${s.name}** | ${s.levelOf[p] || "—"} | ${s.how} | ${s.tools} |`).join("\n") || "| — | — | ยังไม่มีกลยุทธ์ใดอ้าง PLO นี้ในตารางที่ 5.1 | — |"}

### การวัดและประเมินผล

| หัวข้อ | รายละเอียด |
|---|---|
| วิธีการประเมินหลัก | ${a.method} |
| หลักฐานการประเมิน | ${a.evidence} |
| จุดประเมินขั้นบรรลุผล | ${a.mastery} |
| ผู้ประเมิน | ${a.assessor} |

### KSA ที่ PLO นี้แบกรับ

| มิติ | รหัส | หัวข้อ |
|---|---|---|
| 🧠 Knowledge | ${K.map(r => r.id).join(", ") || "—"} | ${K.map(r => r.name).join(" · ") || "—"} |
| 🛠️ Skill | ${S.map(r => r.id).join(", ") || "—"} | ${S.map(r => r.name).join(" · ") || "—"} |
| ❤️ Attitude | ${A.map(r => r.id).join(", ") || "—"} | ${A.map(r => r.name).join(" · ") || "—"} |

**หลักฐานที่ยอมรับได้สำหรับทัศนคติ** — ${A.map(r => `\`${r.id}\` ${r.evidence}`).join(" · ") || "—"}

### CLO จากวิชาบังคับที่ป้อนเข้า PLO นี้

| รายวิชา | CLO | ระดับ |
|---|---|:--:|
${roll.rowsRequired.map(r => `| \`${r.c}\` | ${r.clos.map(n => "CLO" + n).join(", ")} | ${r.lv} |`).join("\n")}
`);
}

const totalK = new Set(), totalS = new Set(), totalA = new Set();
KNOWLEDGE.forEach(r => r.plo.length && totalK.add(r.id));
SKILLS_KSA.forEach(r => r.plo.length && totalS.add(r.id));
ATTITUDES.forEach(r => r.plo.length && totalA.add(r.id));

const doc = `# กระบวนการจัดการเรียนการสอนและการประเมิน รายข้อ PLO

> รวบรวม **กลยุทธ์การสอน → การประเมิน → KSA → CLO** ของแต่ละ PLO ไว้ในที่เดียว
> เพื่อให้เห็นว่าผลลัพธ์แต่ละข้อถูกสอนด้วยวิธีใด วัดด้วยหลักฐานอะไร และมีรายวิชาใดรับผิดชอบ
>
> **สร้างอัตโนมัติ** จาก \`curriculum-graph/scripts/build-plo-teaching.mjs\` · สั่งสร้างใหม่ด้วย \`npm run build:ksa\`
> ห้ามแก้ด้วยมือ — ให้แก้ที่แฟ้มต้นทางแล้วสร้างใหม่

> [!info] แฟ้มต้นทาง
> | ส่วน | มาจาก |
> |---|---|
> | กลยุทธ์การสอน | [[09_Section5_Revised|หมวดที่ 5 ตารางที่ 5.1]] — กลยุทธ์ ${strategies.length} รูปแบบ |
> | การวัดและประเมิน | [[12_Section6_Revised|หมวดที่ 6 ตารางที่ 6.1]] |
> | รหัส KSA | [[../05_TQF2_Academic_Drafts/18_KSA_Codebook|สมุดรหัส KSA]] — K${totalK.size} · S${totalS.size} · A${totalA.size} |
> | CLO รายวิชา | [[../05_TQF2_Academic_Drafts/10_Course_Learning_Outcomes_CLO_Mapping|CLO Mapping]] |

> [!warning] วิชาชีพเลือกไม่นับในการตัดสินการบรรลุ
> คลังวิชาชีพเลือกมี 57 รายวิชา แต่ผู้เรียนหนึ่งคนเลือกเพียง 5 วิชา ตาราง CLO ในเอกสารนี้จึงแสดง
> **เฉพาะวิชาบังคับ** ที่ผู้เรียนทุกคนได้เรียนแน่นอน — ตัวเลขวิชาชีพเลือกแสดงไว้เป็นข้อมูลประกอบเท่านั้น

---

## ตารางสรุปภาพรวม

| PLO | ผลลัพธ์ | กลยุทธ์การสอน | วิชาบังคับ | CLO | K | S | A | ระดับปลายทาง |
|---|---|:--:|--:|--:|:--:|:--:|:--:|:--:|
${[1, 2, 3, 4, 5, 6, 7].map(p => {
  const roll = PLO_ROLLUP.find(r => r.plo === p);
  const n = x => x.filter(r => r.plo.includes(p)).length;
  return `| **PLO${p}** | ${PLO_NAME[p]} | ${strategies.filter(s => s.plos.includes(p)).length} | ${roll.courseCountRequired} | ${roll.cloCountRequired} | ${n(KNOWLEDGE)} | ${n(SKILLS_KSA)} | ${n(ATTITUDES)} | ${roll.topRequired || "—"} |`;
}).join("\n")}

---

${sec.join("\n---\n\n")}
---

[[00_Revision_Home|← หน้าหลักการปรับปรุงเล่ม]] | [[09_Section5_Revised|หมวดที่ 5]] | [[12_Section6_Revised|หมวดที่ 6]] | [[../05_TQF2_Academic_Drafts/18_KSA_Codebook|สมุดรหัส KSA]]
`;

fs.writeFileSync(OUT, doc, "utf8");

/* ── ปล่อยข้อมูลชุดเดียวกันให้เว็บใช้ เพื่อไม่ให้หน้าเว็บกับเอกสารหลุดจากกัน ── */
const perPlo = [1, 2, 3, 4, 5, 6, 7].map(p => {
  const roll = PLO_ROLLUP.find(r => r.plo === p);
  const pick = arr => arr.filter(r => r.plo.includes(p)).map(r => ({ id: r.id, name: r.name, evidence: r.evidence }));
  return {
    plo: p, name: PLO_NAME[p],
    top: roll.topRequired, courses: roll.courseCountRequired, clos: roll.cloCountRequired,
    electiveCourses: roll.courseCountElective,
    strategies: strategies.filter(s => s.plos.includes(p)).map(s => ({ name: s.name, level: s.levelOf[p] || null })),
    assess: assess[p],
    K: pick(KNOWLEDGE), S: pick(SKILLS_KSA), A: pick(ATTITUDES),
    rows: roll.rowsRequired.map(r => ({ c: r.c, clos: r.clos, lv: r.lv }))
  };
});

fs.writeFileSync(OUT_JS,
  `/* AUTO-GENERATED by scripts/build-plo-teaching.mjs — do not edit by hand.
   Sources: หมวด 5 ตารางที่ 5.1 · หมวด 6 ตารางที่ 6.1 · ksaData.js · cloData.js
   Regenerate with: npm run build:ksa */\n\n` +
  `export const STRATEGIES = ${JSON.stringify(strategies, null, 1)};\n\n` +
  `export const ASSESSMENT = ${JSON.stringify(assess, null, 1)};\n\n` +
  `export const PLO_TEACHING = ${JSON.stringify(perPlo, null, 1)};\n`,
  "utf8");
console.log(`teachingData.js: ${strategies.length} กลยุทธ์ · 7 PLO`);
console.log(`20_Teaching_and_Assessment_by_PLO.md: 7 PLO · ${strategies.length} กลยุทธ์ · ${Object.keys(assess).length} แถวการประเมิน`);
[1, 2, 3, 4, 5, 6, 7].forEach(p => {
  const s = strategies.filter(x => x.plos.includes(p)).length;
  if (!s) console.log(`  !! PLO${p} ไม่มีกลยุทธ์การสอนใดอ้างถึงในตารางที่ 5.1`);
});
