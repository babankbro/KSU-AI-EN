/* ร่างระดับ Bloom ให้ CLO วิชาชีพเลือก ตามกติกาใน 03_Target_Skills.md §3.3 และ §3.3b
   - B1–B2 มิติความรู้ (ประเมินด้วยข้อสอบ) · B3–B6 มิติทักษะ (ประเมินด้วยชิ้นงาน)
   - วิชาชีพเลือกเปิดปี 3–4 เพดานคือ B5 · สงวน B6 ไว้กับโครงงานและสหกิจที่โจทย์เปิด
   - CLO ในรายวิชาเดียวกันต้องไล่ระดับขึ้น ไม่ลดกลางคัน และใช้อย่างน้อยสองระดับ
   เขียนผลลงคอลัมน์ Bloom ของ 10B_Elective_CLO_Mapping.md */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const here = dirname(fileURLToPath(import.meta.url));
const doc = resolve(here, "../../Labor_Growth_Report_Vault/05_TQF2_Academic_Drafts/10B_Elective_CLO_Mapping.md");

/* คำกริยานำ → ระดับพื้นฐาน (ก่อนปรับด้วยระดับ PLO และกติกาไล่ระดับ) */
const VERB = [
  [/^(อธิบาย|ระบุ|บอก|สรุปแนวคิด)/, 2],
  [/^(ประยุกต์|ใช้|ฝึก|เตรียม|จัดการ|จัดทำ|สร้าง|พัฒนา|ติดตั้ง|ทดลอง|ดำเนินการ|ปรับแต่ง)/, 3],
  [/^(วิเคราะห์|เปรียบเทียบ|ตรวจสอบ|ทวนสอบ|จำแนก|วินิจฉัย|ออกแบบ|บูรณาการ|วางแผน)/, 4],
  [/^(ประเมิน|ตัดสิน|เสนอแนวทาง|เสนอ|คัดเลือก|ให้ข้อเสนอ)/, 5],
];
const baseOf = t => (VERB.find(([re]) => re.test(t.trim())) || [null, 3])[1];

const lines = readFileSync(doc, "utf8").split(/\r?\n/);
let block = [];        // ดัชนีบรรทัด CLO ของรายวิชาที่กำลังอ่าน
let filled = 0, courses = 0;

const flush = () => {
  if (!block.length) return;
  courses++;
  // ระดับพื้นฐานจากคำกริยา แล้วยกขึ้นถ้า PLO เป็น M
  let lv = block.map(({ cells }) => {
    let b = baseOf(cells[0].replace(/^CLO\d+\s*/, ""));
    if (/\(M\)/.test(cells[2])) b = Math.max(b, 4);
    return Math.min(Math.max(b, 2), 5);
  });
  // ไล่ระดับขึ้น ไม่ลดกลางคัน
  for (let i = 1; i < lv.length; i++) if (lv[i] < lv[i - 1]) lv[i] = lv[i - 1];
  // ต้องใช้อย่างน้อยสองระดับ — ถ้าเท่ากันหมดให้ลดข้อแรกลงหนึ่งขั้น
  if (new Set(lv).size === 1 && lv.length > 1) lv[0] = Math.max(2, lv[0] - 1);
  block.forEach(({ i, cells }, k) => {
    cells[3] = `B${lv[k]}`;
    lines[i] = "| " + cells.join(" | ") + " |";
    filled++;
  });
  block = [];
};

for (let i = 0; i < lines.length; i++) {
  const ln = lines[i];
  if (/^###\s+EN-\d{3}-\d{5}/.test(ln)) { flush(); continue; }
  if (!/^\| CLO\d+\s/.test(ln)) continue;   // แถวหัวตารางขึ้นต้น "| CLO |" เหมือนกัน จึงต้องบังคับให้มีเลขข้อ
  const cells = ln.split("|").slice(1, -1).map(c => c.trim());
  if (cells.length < 6) continue;
  block.push({ i, cells });
}
flush();
writeFileSync(doc, lines.join("\n"), "utf8");
console.log(`ร่างระดับ Bloom แล้ว ${filled} CLO ใน ${courses} รายวิชา`);
