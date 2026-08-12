/* อาจารย์ผู้รับผิดชอบหลักสูตรและอาจารย์ประจำหลักสูตร
   ที่มา: เล่มหลักสูตรฉบับผ่านคณะ หมวดที่ 1 หัวข้อ 1.3
   บันทึกในวอลต์: Labor_Growth_Report_Vault/08_TQF2_Book_Revisions/19_Approved_Book_Identity_and_Structure.md

   หมายเหตุจากเล่ม: หัวข้อ 1.3 แยกเป็นสองบัญชี (ผู้รับผิดชอบหลักสูตร / ประจำหลักสูตร)
   แต่รายชื่อทั้งสองบัญชีเป็นชุดเดียวกันทั้ง 5 ท่าน คุณสมบัติ "ตรง" ทุกท่าน */

export const FACULTY_SOURCE = {
  book: "เล่มหลักสูตรฉบับผ่านคณะ · หมวดที่ 1 หัวข้อ 1.3",
  vault: "08_TQF2_Book_Revisions/19_Approved_Book_Identity_and_Structure.md",
  note: "เล่มระบุรายชื่อชุดเดียวกันทั้งบัญชีอาจารย์ผู้รับผิดชอบหลักสูตรและอาจารย์ประจำหลักสูตร"
};

export const FACULTY = [
  {
    id: 1,
    rank: "ผู้ช่วยศาสตราจารย์",
    rankShort: "ผศ.",
    name: "นายสรายุทธ กรวิรัตน",
    role: "ประธานหลักสูตร",
    field: "คอมพิวเตอร์และสารสนเทศ",
    qualified: "ตรง",
    degrees: [
      { level: "เอก", abbr: "ปร.ด.", major: "เทคโนโลยีสารสนเทศ", inst: "มหาวิทยาลัยมหาสารคาม", year: 2565 },
      { level: "โท", abbr: "วศ.ม.", major: "วิศวกรรมคอมพิวเตอร์", inst: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", year: 2555 },
      { level: "ตรี", abbr: "วศ.บ.", major: "วิศวกรรมคอมพิวเตอร์", inst: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", year: 2550 }
    ]
  },
  {
    id: 2,
    rank: "ผู้ช่วยศาสตราจารย์",
    rankShort: "ผศ.",
    name: "นายกำธร สารวรรณ",
    role: null,
    field: "คอมพิวเตอร์และสารสนเทศ",
    qualified: "ตรง",
    degrees: [
      { level: "เอก", abbr: "ปร.ด.", major: "วิทยาการคอมพิวเตอร์", inst: "มหาวิทยาลัยมหาสารคาม", year: 2568 },
      { level: "โท", abbr: "วท.ม.", major: "เทคโนโลยีสารสนเทศ", inst: "มหาวิทยาลัยมหาสารคาม", year: 2554 },
      { level: "ตรี", abbr: "วท.บ.", major: "วิทยาการคอมพิวเตอร์", inst: "มหาวิทยาลัยมหาสารคาม", year: 2549 }
    ]
  },
  {
    id: 3,
    rank: "อาจารย์",
    rankShort: "อ.",
    name: "นายบัณฑิต สุริยวงศ์พงศา",
    role: null,
    field: "วิศวกรรมเกษตรและเครื่องจักรกลเกษตร",
    qualified: "ตรง",
    degrees: [
      { level: "เอก", abbr: "ปร.ด.", major: "วิศวกรรมเครื่องจักรกลเกษตร", inst: "มหาวิทยาลัยขอนแก่น", year: 2559 },
      { level: "โท", abbr: "วศ.ม.", major: "เครื่องจักรกลเกษตร", inst: "มหาวิทยาลัยขอนแก่น", year: 2547 },
      { level: "ตรี", abbr: "วศ.บ.", major: "วิศวกรรมเครื่องจักรกลเกษตร", inst: "สถาบันเทคโนโลยีราชมงคล ธัญบุรี", year: 2541 }
    ]
  },
  {
    id: 4,
    rank: "ผู้ช่วยศาสตราจารย์",
    rankShort: "ผศ.",
    name: "นางสาวเกียรติสุดา สุวรรณปา",
    role: null,
    field: "วิศวกรรมเกษตรและเครื่องจักรกลเกษตร",
    qualified: "ตรง",
    degrees: [
      { level: "เอก", abbr: "ปร.ด.", major: "วิศวกรรมเครื่องจักรกลเกษตร", inst: "มหาวิทยาลัยขอนแก่น", year: 2563 },
      { level: "โท", abbr: "วศ.ม.", major: "เครื่องจักรกลเกษตร", inst: "มหาวิทยาลัยขอนแก่น", year: 2548 },
      { level: "ตรี", abbr: "วท.บ.", major: "เกษตรกลวิธาน", inst: "สถาบันเทคโนโลยีราชมงคล วิทยาเขตขอนแก่น", year: 2545 }
    ]
  },
  {
    id: 5,
    rank: "อาจารย์",
    rankShort: "อ.",
    name: "นายอนุวัฒน์ ภาชนะวรรณ์",
    role: null,
    field: "วิศวกรรมเกษตรและเครื่องจักรกลเกษตร",
    qualified: "ตรง",
    degrees: [
      { level: "เอก", abbr: "ปร.ด.", major: "วิศวกรรมเกษตร", inst: "มหาวิทยาลัยขอนแก่น", year: 2564 },
      { level: "โท", abbr: "วศ.ม.", major: "วิศวกรรมเกษตร", inst: "มหาวิทยาลัยขอนแก่น", year: 2561 },
      { level: "ตรี", abbr: "วศ.บ.", major: "วิศวกรรมเกษตร", inst: "มหาวิทยาลัยขอนแก่น", year: 2553 }
    ]
  }
];

/* สรุปตัวเลขจากรายชื่อ — คำนวณสด ไม่ฮาร์ดโค้ด */
export const FACULTY_STATS = (() => {
  const byField = {};
  FACULTY.forEach(f => { byField[f.field] = (byField[f.field] || 0) + 1; });
  return {
    total: FACULTY.length,
    doctorate: FACULTY.filter(f => f.degrees.some(d => d.level === "เอก")).length,
    assocProf: FACULTY.filter(f => f.rank === "ผู้ช่วยศาสตราจารย์").length,
    lecturer: FACULTY.filter(f => f.rank === "อาจารย์").length,
    byField
  };
})();
