/**
 * สร้างตารางหมวดที่ 4 หัวข้อ 4.5 (Curriculum Mapping) และ 4.6 (CLO → YLO → PLO)
 * ในรูปแบบเดียวกับเล่มหลักสูตร โดยครอบคลุมรายวิชาบังคับและ "ตารางเสริม" ของวิชาชีพเลือกครบทุกรายวิชา
 */
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { COURSES, TRACK_NAME, byOrderNo } from "../src/data.js";
import { CLO_COURSES } from "../src/cloData.js";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const OUT = resolve(repo, "Labor_Growth_Report_Vault/08_TQF2_Book_Revisions");

const course = code => COURSES.find(c => c.c === code);
const clo = code => CLO_COURSES.find(x => x.c === code);
const title = code => `${code} ${course(code)?.t ?? ""}`.trim();

/* ระดับการเรียนรู้: หนึ่งรายวิชาอาจแตะ PLO เดียวกันหลาย CLO — แสดงช่วงเมื่อระดับไม่เท่ากัน */
const RANK = { I: 1, R: 2, M: 3 };
function levelsOf(code) {
  const found = {};
  for (const c of clo(code)?.clos ?? [])
    for (const [plo, lv] of c.plo) (found[plo] ||= new Set()).add(lv);
  const cell = {};
  for (const [plo, set] of Object.entries(found)) {
    const sorted = [...set].sort((a, b) => RANK[a] - RANK[b]);
    cell[plo] = sorted.length > 1 ? `${sorted[0]}–${sorted[sorted.length - 1]}` : sorted[0];
  }
  return cell;
}

const mapRow = code => {
  const lv = levelsOf(code);
  return `| ${title(code)} | ${[1, 2, 3, 4, 5, 6, 7].map(p => lv[p] ?? "-").join(" | ")} |`;
};

const mapHead = (label = "ชั้นปี/ภาคการศึกษา/ชื่อรายวิชา") => [
  `| ${label} | PLO1 | PLO2 | PLO3 | PLO4 | PLO5 | PLO6 | PLO7 |`,
  "|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|",
];
const MAP_HEAD = mapHead();

/* ลำดับหมวดวิชาในตาราง: ศึกษาทั่วไป → เฉพาะ */
const SECTOR_ORDER = { ge: 0, eng: 1, ai: 2, track: 3, elec: 4, proj: 5, field: 6 };
const bySector = (a, b) => SECTOR_ORDER[a.g] - SECTOR_ORDER[b.g] || byOrderNo(a, b);

/* ---------- 4.6 ---------- */
const ploCell = c =>
  c.plo.map(([p, lv]) => `PLO${p} (${lv})`).join(", ");

function cloBlock(code) {
  const x = clo(code);
  if (!x) return [`| **${title(code)}** | | |`];
  return [
    `| **${title(code)}** | | |`,
    ...x.clos.map(c => `| CLO${c.n}: ${c.t} | ${c.ylo.join(", ")} | ${ploCell(c)} |`),
  ];
}

const CLO_HEAD = ["| รายวิชา / CLOs | YLOs ที่รับผิดชอบ | PLOs ที่รับผิดชอบ |", "|---|---|---|"];

/* ---------- จัดกลุ่มรายวิชา ---------- */
const required = COURSES.filter(c => c.sem && c.g !== "elec" && (!c.plan || c.plan === "A"));
const planBOnly = COURSES.filter(c => c.plan === "B");
const electives = COURSES.filter(c => c.g === "elec").sort(byOrderNo);
const trackOf = tr =>
  tr === 0 ? "ร่วมทุกแขนง — การเรียนรู้ร่วมการทำงานและหัวข้อพิเศษ" : TRACK_NAME[tr];

function bySemester(render) {
  const parts = [];
  for (let sem = 1; sem <= 8; sem += 1) {
    const list = required.filter(c => c.sem === sem).sort(bySector);
    if (!list.length) continue;
    parts.push(`**ปีที่ ${Math.ceil(sem / 2)} ภาคการศึกษาที่ ${sem % 2 === 1 ? 1 : 2}**`, "");
    parts.push(...render(list.map(c => c.c)), "");
  }
  return parts;
}

function byTrack(render) {
  const parts = [];
  for (const tr of [1, 2, 3, 0]) {
    const list = electives.filter(c => c.tr === tr);
    if (!list.length) continue;
    parts.push(`**${trackOf(tr)}** — ${list.length} รายวิชา`, "");
    parts.push(...render(list.map(c => c.c)), "");
  }
  return parts;
}

/* ---------- 4.5 ---------- */
const doc45 = `# หมวดที่ 4 หัวข้อ 4.5 แผนที่แสดงความเชื่อมโยงระหว่างรายวิชาและผลลัพธ์การเรียนรู้ระดับหลักสูตร

> รูปแบบตารางตรงกับเล่มหลักสูตร มคอ.2 · สร้างจากผลลัพธ์การเรียนรู้รายวิชาฉบับปัจจุบันด้วย \`npm run build:mapping\`
> แก้ไขที่ \`curriculum-graph/src/cloData.js\` แล้วสร้างใหม่ อย่าแก้ไฟล์นี้โดยตรง

**คำอธิบายระดับการเรียนรู้**

- **I (Introduce/ขั้นเริ่มต้น)** ผู้เรียนได้เรียนรู้และทำความเข้าใจเนื้อหาเบื้องต้น
- **R (Reinforce/ขั้นเสริมสร้าง)** ผู้เรียนได้ฝึกฝนและประยุกต์ใช้ในระดับที่สูงขึ้น
- **M (Mastery/ขั้นบรรลุผล)** ผู้เรียนบูรณาการและประยุกต์ใช้ได้ในสถานการณ์ที่ซับซ้อน พร้อมใช้เป็นหลักฐานยืนยันการบรรลุ PLO

เครื่องหมาย **I–R** หมายถึงรายวิชารับผิดชอบ PLO นั้นในหลาย CLO ที่มีระดับต่างกัน · เครื่องหมาย **-** หมายถึงไม่ได้รับผิดชอบเป็นหลักฐานประเมิน

---

## 1. รายวิชาบังคับตามแผนการเรียน

${bySemester(codes => [...MAP_HEAD, ...codes.map(mapRow)]).join("\n")}
**รายวิชาเฉพาะแผน ข การเรียนรู้ร่วมการทำงาน (แทน EN-134-403 ในภาคการศึกษาที่ 7)**

${[...MAP_HEAD, ...planBOnly.map(c => mapRow(c.c))].join("\n")}

---

## 2. ตารางเสริม — กลุ่มวิชาชีพเลือก ${electives.length} รายวิชา

ผู้เรียนเลือก 5 รายวิชา 15 หน่วยกิตจากกลุ่มนี้ ตารางแสดงความรับผิดชอบ PLO ของทุกรายวิชาในคลัง เพื่อให้อาจารย์ที่ปรึกษาใช้ประกอบการแนะนำการเลือกให้ครอบคลุม PLO ที่ผู้เรียนยังมีหลักฐานไม่เพียงพอ

${byTrack(codes => [...mapHead("รหัสและชื่อรายวิชา"), ...codes.map(mapRow)]).join("\n")}
---

[[00_Revision_Home|← หน้าหลักฉบับแก้ไข]] · [[16_Section4_6_CLO_Mapping|4.6 การเชื่อมโยง CLO สู่ YLO และ PLO]]
`;

/* ---------- 4.6 ---------- */
const doc46 = `# หมวดที่ 4 หัวข้อ 4.6 ตารางสรุปการเชื่อมโยงผลลัพธ์การเรียนรู้รายวิชา (CLOs) สู่ผลลัพธ์ระดับสูง

> รูปแบบตารางตรงกับเล่มหลักสูตร มคอ.2 · สร้างจากผลลัพธ์การเรียนรู้รายวิชาฉบับปัจจุบันด้วย \`npm run build:mapping\`
> แก้ไขที่ \`curriculum-graph/src/cloData.js\` แล้วสร้างใหม่ อย่าแก้ไฟล์นี้โดยตรง

ตารางนี้แสดงการเชื่อมโยงผลลัพธ์การเรียนรู้ในแต่ละรายวิชา (CLOs) ไปยังผลลัพธ์การเรียนรู้รายปี (YLOs) และผลลัพธ์การเรียนรู้ระดับหลักสูตร (PLOs) พร้อมระดับการเรียนรู้ในวงเล็บ เพื่อให้เห็นการพัฒนาผู้เรียนอย่างต่อเนื่องตั้งแต่ขั้นเริ่มต้นจนถึงขั้นบรรลุผล

**หลักการเขียน CLO ที่ใช้ทั้งเอกสาร**

- ขึ้นต้นด้วยคำกริยาที่สังเกตและวัดได้ เช่น อธิบาย วิเคราะห์ ออกแบบ พัฒนา ทดสอบ ประเมิน และลงท้ายด้วย "ได้"
- หนึ่ง CLO ผูกกับหลักฐานการประเมินที่ตรวจสอบได้ และรับผิดชอบ PLO ไม่เกินสองข้อ
- รายวิชาทั่วไปกำหนด CLO ไม่เกิน 3 ข้อ ส่วนรายวิชาโครงงานและสหกิจศึกษาที่บูรณาการหลายด้านกำหนดได้ถึง 4 ข้อ
- ระดับในวงเล็บใช้ I ขั้นเริ่มต้น R ขั้นเสริมสร้าง และ M ขั้นบรรลุผล ให้สอดคล้องกับ [[15_Section4_5_Curriculum_Mapping|ตารางหัวข้อ 4.5]]

---

## 1. รายวิชาบังคับตามแผนการเรียน

${bySemester(codes => [...CLO_HEAD, ...codes.flatMap(cloBlock)]).join("\n")}
**รายวิชาเฉพาะแผน ข การเรียนรู้ร่วมการทำงาน**

${[...CLO_HEAD, ...planBOnly.flatMap(c => cloBlock(c.c))].join("\n")}

---

## 2. ตารางเสริม — กลุ่มวิชาชีพเลือก ${electives.length} รายวิชา

${byTrack(codes => [...CLO_HEAD, ...codes.flatMap(cloBlock)]).join("\n")}
---

[[00_Revision_Home|← หน้าหลักฉบับแก้ไข]] · [[15_Section4_5_Curriculum_Mapping|4.5 แผนที่ความเชื่อมโยงรายวิชากับ PLO]]
`;

writeFileSync(resolve(OUT, "15_Section4_5_Curriculum_Mapping.md"), doc45, "utf8");
writeFileSync(resolve(OUT, "16_Section4_6_CLO_Mapping.md"), doc46, "utf8");

const missing = COURSES.filter(c => !clo(c.c)).map(c => c.c);
console.log(
  `เขียน 4.5 และ 4.6 แล้ว · รายวิชาบังคับ ${required.length} · เฉพาะแผน ข ${planBOnly.length} · วิชาชีพเลือก ${electives.length}` +
    (missing.length ? ` · ไม่มี CLO: ${missing.join(", ")}` : " · มี CLO ครบทุกรายวิชา"),
);

/* ---------- 4.7 ภาคผนวก: ชุดทักษะ ↔ รายวิชา ---------- */
const AISK_NAME = {
  AISK01: "แกนวิศวกรรมปัญญาประดิษฐ์: การเรียนรู้ การตัดสินใจ ข้อมูล และซอฟต์แวร์",
  AISK02: "วิศวกรรมเกษตรอัจฉริยะ",
  AISK03: "วิศวกรรมอุตสาหกรรมอัจฉริยะและระบบอัตโนมัติ",
  AISK04: "ระบบตรวจวัด การประมวลผลที่ขอบเครือข่าย และระบบไซเบอร์กายภาพ",
  AISK05: "การรับรู้ การพยากรณ์ และการตัดสินใจด้วยปัญญาประดิษฐ์",
  AISK06: "ปัญญาประดิษฐ์เชิงสร้าง ระบบเอเจนต์ และการทำงานร่วมระหว่างมนุษย์กับปัญญาประดิษฐ์",
  AISK07: "ปัญญาประดิษฐ์ที่รับผิดชอบ ความมั่นคงปลอดภัย ธรรมาภิบาล และการรับรองระบบ",
  AISK08: "การสื่อสาร การทำงานเป็นทีม ภาวะผู้นำ และความเป็นผู้ประกอบการ",
  AISK09: "ข้อกำหนด สถาปัตยกรรม การบูรณาการ และการส่งมอบระบบ",
};
const AISK = Object.keys(AISK_NAME);
const setsOf = code => (clo(code)?.sets ?? []).map(([k]) => k);
const short = code => `${code} ${course(code)?.t ?? ""}`.replace(/:.*$/, "").trim();

const coverRow = key => {
  const req = required.concat(planBOnly).filter(c => setsOf(c.c).includes(key));
  const el = electives.filter(c => setsOf(c.c).includes(key));
  return `| **EN-${key}** ${AISK_NAME[key]} | ${req.length} | ${el.length} | ${req.map(c => c.c).join(", ") || "-"} |`;
};

const doc47 = `# หมวดที่ 4 หัวข้อ 4.7 ภาคผนวก — ความครอบคลุมชุดทักษะรายวิชา

> ภาคผนวกของ [[../05_TQF2_Academic_Drafts/11_Skill_Set_Matrix_and_KSA|ตารางสรุปชุดทักษะและการวิเคราะห์ KSA ส่วน B]] ซึ่งเป็นฉบับหลักของหัวข้อ 4.7
> ส่วนนี้สร้างจากผลลัพธ์การเรียนรู้รายวิชาด้วย \`npm run build:mapping\` — แก้ไขที่ \`curriculum-graph/src/cloData.js\` แล้วสร้างใหม่ อย่าแก้ไฟล์นี้โดยตรง
> เพิ่มขึ้นเพื่อปิดช่องว่างที่ฉบับหลักยังไม่ครอบคลุม คือ **กลุ่มวิชาชีพเลือก ${electives.length} รายวิชา** ซึ่งไม่ปรากฏในตารางชุดทักษะเดิม

## 1. ความครอบคลุมชุดทักษะรายกลุ่ม

| ชุดทักษะ | รายวิชาบังคับ | วิชาชีพเลือก | รายวิชาบังคับที่รองรับ |
|---|--:|--:|---|
${AISK.map(coverRow).join("\n")}

ทุกชุดทักษะมีรายวิชาบังคับรองรับอย่างน้อยหนึ่งรายวิชา จึงไม่มีชุดทักษะใดที่ผู้เรียนจะพลาดหากไม่ได้เลือกวิชาชีพเลือกกลุ่มใดกลุ่มหนึ่ง ส่วนวิชาชีพเลือกทำหน้าที่ยกระดับความลึกของชุดทักษะตามแขนงที่ผู้เรียนเลือก

## 2. ตารางเสริม — วิชาชีพเลือกกับชุดทักษะที่รับผิดชอบ

${[1, 2, 3, 0]
  .filter(tr => electives.some(c => c.tr === tr))
  .map(tr => {
    const list = electives.filter(c => c.tr === tr);
    return [
      `**${trackOf(tr)}** — ${list.length} รายวิชา`,
      "",
      "| รหัสและชื่อรายวิชา | ชุดทักษะที่รับผิดชอบ |",
      "|---|---|",
      ...list.map(c => `| ${short(c.c)} | ${setsOf(c.c).map(k => `EN-${k}`).join(", ")} |`),
      "",
    ].join("\n");
  })
  .join("\n")}
---

[[00_Revision_Home|← หน้าหลักฉบับแก้ไข]] · [[16_Section4_6_CLO_Mapping|4.6 การเชื่อมโยง CLO สู่ YLO และ PLO]]
`;

writeFileSync(resolve(OUT, "17_Section4_7_Skill_Set_Coverage.md"), doc47, "utf8");
console.log("เขียน 4.7 ภาคผนวกความครอบคลุมชุดทักษะแล้ว");
