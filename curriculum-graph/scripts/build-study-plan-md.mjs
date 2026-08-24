/**
 * สร้างตารางแผนการเรียนรายภาคในรูปแบบเดียวกับ มคอ.2 หมวดที่ 4 หัวข้อ 4.4
 * ผลลัพธ์: Labor_Growth_Report_Vault/08_TQF2_Book_Revisions/14_Section4_4_Study_Plan.md
 */
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { COURSES, SEM_TOTALS, SEM_EXTRA, TOTAL_CREDITS, PLANS, byOrderNo } from "../src/data.js";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const PROGRAM = "แผนการศึกษา สาขาวิชาวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ แผนการเรียน 4 ปี";

/* ชื่อหมวดวิชาตามที่ใช้ในเล่มหลักสูตร */
const SECTOR = {
  eng: "หมวดวิชาเฉพาะ พื้นฐานและปฏิบัติการทางวิศวกรรม",
  ai: "หมวดวิชาเฉพาะ แกนปัญญาประดิษฐ์และระบบอัจฉริยะ",
  track: "หมวดวิชาเฉพาะ วิชาชีพบังคับ",
  elec: "หมวดวิชาเฉพาะ กลุ่มวิชาชีพเลือก",
  proj: "หมวดวิชาเฉพาะ โครงงานและสัมมนา",
  field: "หมวดวิชาเฉพาะ ประสบการณ์ภาคสนาม",
};
/* ลำดับหมวดวิชาในตาราง: ศึกษาทั่วไป → เฉพาะ → เลือกเสรี */
const SECTOR_ORDER = { ge: 0, eng: 1, ai: 2, track: 3, elec: 4, proj: 5, field: 6 };
const bySector = (a, b) => SECTOR_ORDER[a.g] - SECTOR_ORDER[b.g] || byOrderNo(a, b);

const sectorOf = c =>
  c.g === "ge"
    ? `หมวดวิชาศึกษาทั่วไป กลุ่มวิชา${c.c.startsWith("GE-010") ? "บังคับ" : "เลือก"}`
    : SECTOR[c.g];

/* รายวิชาที่ยังไม่ระบุตัวจริงในแผน แสดงเป็นรหัสแทน */
const placeholder = e => {
  if (e.s.startsWith("วิชาเลือกเสรี")) return { sector: "หมวดวิชาเลือกเสรี", code: "XX-XXX-XXX", cr: "3(X-X-X)" };
  if (e.s.startsWith("การเรียนรู้ร่วมการทำงาน"))
    return { sector: SECTOR.elec, code: "EN-714-16xxx", cr: "3(2-2-5)", pre: "EN-714-17001" };
  return { sector: SECTOR.elec, code: "EN-714-14xxx", cr: "3(X-X-X)" };
};

const row = (sector, code, name, pre, cr) => `| ${sector} | ${code} | ${name} | ${pre} | ${cr} |`;

function semesterTable(sem, plan, cumulative) {
  const year = Math.ceil(sem / 2);
  const half = sem % 2 === 1 ? 1 : 2;
  const list = COURSES.filter(c => c.sem === sem && (!c.plan || c.plan === plan)).sort(bySector);
  const extra = sem === 7 ? PLANS[plan].extra7 : SEM_EXTRA[sem] || [];

  const rows = [
    ...list.map(c => {
      const pre = [(c.h || []).join(", "), c.preNote].filter(Boolean).join(" ") || "-";
      return row(sectorOf(c), c.c, c.t, pre, c.cr);
    }),
    ...extra.map(e => {
      const p = placeholder(e);
      return row(p.sector, p.code, e.s, p.pre || "-", p.cr);
    }),
  ];

  return [
    `**ปีการศึกษาที่ ${year} · ภาคการศึกษาที่ ${half}**`,
    "",
    PROGRAM,
    "",
    "| หมวดวิชา | รหัสวิชา | ชื่อวิชา | รายวิชาบังคับก่อน | หน่วยกิต (ทฤษฎี-ปฏิบัติ-ศึกษาด้วยตนเอง) |",
    "|---|---|---|---|---|",
    ...rows,
    `| **รวมหน่วยกิตลงทะเบียนเรียน** | | | | **${SEM_TOTALS[sem]}** |`,
    `| **รวมจำนวนหน่วยกิตสะสม** | | | | **${cumulative}** |`,
    "",
    ...(sem === 7 && plan === "B"
      ? [
          "> การเรียนรู้ร่วมการทำงาน 1–3 คือรายวิชาสามโมดูลจาก EN-714-16001 ถึง EN-714-16005 ที่คณะกรรมการหลักสูตรกำหนดร่วมกับสถานประกอบการในแต่ละปีการศึกษา",
          "> เมื่อรวมกับวิชาชีพเลือกในภาคการศึกษาที่ 5 และ 6 ครบ 5 รายวิชา 15 หน่วยกิตตามโครงสร้างข้อ 2.4 และผู้เรียนอยู่กับสถานประกอบการต่อเนื่องถึงภาคการศึกษาที่ 8",
          "",
        ]
      : []),
  ].join("\n");
}

function planSection(plan) {
  const p = PLANS[plan];
  const parts = [`## ${p.name}`, "", `> ${p.sub}`, ""];
  let cum = 0;
  for (let sem = 1; sem <= 8; sem += 1) {
    cum += SEM_TOTALS[sem];
    parts.push(semesterTable(sem, plan, cum));
  }
  return parts.join("\n");
}

const doc = `# หมวดที่ 4 หัวข้อ 4.4 แผนการเรียนตลอดหลักสูตร

> รูปแบบตารางตรงกับที่ใช้ในเล่มหลักสูตร มคอ.2 · สร้างจากข้อมูลรายวิชาฉบับ ${TOTAL_CREDITS} หน่วยกิต
> สร้างด้วย \`npm run build:plan\` ในโฟลเดอร์ curriculum-graph — แก้ไขที่ \`src/data.js\` แล้วสร้างใหม่ อย่าแก้ไฟล์นี้โดยตรง
> หลักสูตรเสนอแผนการเรียน 2 แบบที่มีหน่วยกิตรวมเท่ากัน ต่างกันเฉพาะภาคการศึกษาที่ 7 ดูเหตุผลที่ [[../02_Current_Curriculum_2570/08_CWIE_Integrated_Study_Plan|แผนการเรียนแบบบูรณาการกับสถานประกอบการ]]

---

${planSection("A")}
---

${planSection("B")}
---

[[00_Revision_Home|← หน้าหลักฉบับแก้ไข]] · [[../04_Course_Descriptions_2570/11_Year_Level_Course_Sequence_and_YLO|ลำดับรายวิชาตามชั้นปีและ YLO]]
`;

const out = resolve(repo, "Labor_Growth_Report_Vault/08_TQF2_Book_Revisions/14_Section4_4_Study_Plan.md");
writeFileSync(out, doc, "utf8");
console.log("เขียนแผนการเรียนแล้ว:", out);
