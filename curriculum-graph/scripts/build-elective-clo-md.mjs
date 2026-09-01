/* สร้างเอกสาร CLO ของวิชาชีพเลือกลงวอลต์ จาก CLO_COURSES ใน cloData.js
   ใช้ครั้งเดียวเพื่อย้ายต้นทางเข้าวอลต์ · หลังจากนี้ให้แก้ที่เอกสารในวอลต์แล้วสั่ง
   SYNC_CLO=1 npm run sync:curriculum เพื่อสร้าง cloRevisionData.js กลับมา */
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const here = dirname(fileURLToPath(import.meta.url));
const { CLO_COURSES } = await import("../src/cloData.js");
const { COURSES } = await import("../src/data.js");

const GROUPS = [
  ["EN-714-14001", "EN-714-14015", "แขนงที่ 1 เกษตรอัจฉริยะ"],
  ["EN-714-14016", "EN-714-14035", "แขนงที่ 2 อุตสาหกรรมอัจฉริยะ"],
  ["EN-714-14036", "EN-714-14050", "แขนงที่ 3 นวัตกรรมปัญญาประดิษฐ์ระดับองค์กร"],
  ["EN-714-14051", "EN-714-14052", "หัวข้อพิเศษด้านเทคโนโลยีเกิดใหม่"],
  ["EN-714-16001", "EN-714-16005", "การเรียนรู้ร่วมการทำงาน (CWIE)"],
];
const nameOf = c => (COURSES.find(x => x.c === c) || {}).t || "";
const yloCell = ylo => (ylo || []).map(y => y.replace("YLO", "")).join(", ") || "—";
const ploCell = plo => (plo || []).map(([n, lv]) => `PLO${n} (${lv})`).join(" · ") || "—";
const setCell = sets => (sets || []).map(([id]) => id).join(", ") || "—";

const elec = CLO_COURSES.filter(x => x.elec);
const out = [];
out.push("# ผลลัพธ์การเรียนรู้รายวิชาชีพเลือก (CLO)");
out.push("");
out.push("> [!important] เอกสารนี้เป็นแหล่งอ้างอิงหลักของ CLO วิชาชีพเลือก");
out.push("> คำสั่ง `SYNC_CLO=1 npm run sync:curriculum` อ่านตารางในเอกสารนี้ไปสร้าง `cloRevisionData.js`");
out.push("> ซึ่งไปแทนที่ค่าใน `cloData.js` อีกชั้น — แก้ที่นี่แล้วสร้างใหม่ อย่าแก้ไฟล์ปลายทางโดยตรง");
out.push("> คู่กับ [[10_Course_Learning_Outcomes_CLO_Mapping|CLO ของรายวิชาบังคับ]] ซึ่งครอบคลุมรายวิชาบังคับ 34 รายวิชา");
out.push("");
out.push("> [!warning] คอลัมน์ Bloom และหลักฐานยังไม่ครบ");
out.push("> วิชาชีพเลือกส่วนใหญ่ยังไม่ได้กำหนดระดับ Bloom และหลักฐานการประเมินรายข้อ");
out.push("> ช่องที่เว้นไว้ต้องให้คณะกรรมการบริหารหลักสูตรกำหนดก่อนเปิดสอน");
out.push("");
out.push(`รวม **${elec.length} รายวิชา** · รูปแบบตารางตรงกับเอกสาร CLO ของรายวิชาบังคับ`);
out.push("");
let n = 0;
for (const [lo, hi, title] of GROUPS) {
  const list = elec.filter(x => x.c >= lo && x.c <= hi).sort((a, b) => a.c.localeCompare(b.c));
  if (!list.length) continue;
  out.push("---", "", `## ${title}`, "");
  for (const e of list) {
    n++;
    out.push(`### ${e.c} ${nameOf(e.c)}`, "");
    out.push("| CLO | YLO | PLO/ระดับ | Bloom | KSEC–AISK | หลักฐาน |");
    out.push("|---|---|---|---|---|---|");
    for (const c of e.clos)
      out.push(`| CLO${c.n} ${c.t} | ${yloCell(c.ylo)} | ${ploCell(c.plo)} | ${c.bloom || ""} | ${setCell(e.sets)} | ${c.evidence || ""} |`);
    out.push("");
  }
}
const dest = resolve(here, "../../Labor_Growth_Report_Vault/05_TQF2_Academic_Drafts/10B_Elective_CLO_Mapping.md");
writeFileSync(dest, out.join("\n"), "utf8");
console.log(`10B_Elective_CLO_Mapping.md: ${n} รายวิชา · ${elec.reduce((a, x) => a + x.clos.length, 0)} CLO`);
