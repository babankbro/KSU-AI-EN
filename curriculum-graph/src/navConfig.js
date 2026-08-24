/* โครงสร้างเมนูของเว็บ — แหล่งข้อมูลเดียวที่ใช้ทั้ง top nav (พร้อม submenu) และ sidebar
   groups[].items[] = หน้าในกลุ่ม · items[].sections[] = หัวข้อภายในหน้า (anchor) สำหรับ sidebar */

export const NAV_GROUPS = [
  {
    id: "home",
    label: "หน้าแรก",
    to: "/",
    end: true,
    solo: true                       // ไม่มี submenu — เป็นลิงก์เดี่ยวบน top nav
  },
  {
    id: "curriculum",
    label: "หลักสูตร",
    hint: "โครงสร้าง รายวิชา และลำดับการเรียน",
    items: [
      { to: "/structure", label: "โครงสร้างหลักสูตร", desc: "125 หน่วยกิต แยกตามหมวดและกลุ่มวิชา" },
      { to: "/courses",   label: "รายวิชา",           desc: "คำอธิบายรายวิชาและ CLO รายตัว" },
      { to: "/plan",      label: "แผนการเรียน",       desc: "8 ภาคการศึกษา แผน ก และแผน ข" },
      { to: "/graph",     label: "กราฟรายวิชา",       desc: "ลำดับก่อน–หลังและวิชาบังคับก่อน" },
      { to: "/faculty",   label: "อาจารย์ประจำหลักสูตร", desc: "คณาจารย์ 5 ท่านและคุณวุฒิครบทุกระดับ" }
    ]
  },
  {
    id: "outcomes",
    label: "ผลลัพธ์การเรียนรู้",
    hint: "ตั้งแต่ความต้องการผู้มีส่วนได้ส่วนเสียถึงรายวิชา",
    items: [
      {
        to: "/obe", label: "ขั้นตอน OBE", desc: "สายธาร 8 ขั้นจาก Need ถึง CLO",
        sections: [
          { id: "sh",    label: "① ผู้มีส่วนได้ส่วนเสีย" },
          { id: "needs", label: "② ความต้องการ" },
          { id: "ga",    label: "③ ลักษณะบัณฑิต" },
          { id: "skill", label: "④ ทักษะเป้าหมายและฐานวิศวกรรม" },
          { id: "set",   label: "⑤ ชุดทักษะ AISK" },
          { id: "plo",   label: "⑥ ผลลัพธ์หลักสูตร" },
          { id: "ylo",   label: "⑦ ผลลัพธ์รายชั้นปี" },
          { id: "clo",   label: "⑧ ผลลัพธ์รายวิชา + KSEC" }
        ]
      },
      { to: "/plo", label: "PLO",        desc: "ผลลัพธ์ระดับหลักสูตร 7 ข้อ · เทียบ ABET SO" },
      { to: "/ylo", label: "YLO",        desc: "ผลลัพธ์รายชั้นปี 4 ระดับ" },
      { to: "/clo", label: "CLO รายวิชา", desc: "ผลลัพธ์รายวิชาและการเชื่อมสู่ KSEC" }
    ]
  },
  {
    id: "teaching",
    label: "การเรียนการสอน",
    hint: "กลยุทธ์การสอนและการวัดผลที่ผูกกับ PLO",
    items: [
      {
        to: "/teaching", label: "กลยุทธ์การสอน", desc: "5 รูปแบบ และ PLO ที่แต่ละรูปแบบรับผิดชอบ",
        sections: [
          { id: "overview", label: "ความครอบคลุม PLO" },
          { id: "detail",   label: "รายละเอียดรายกลยุทธ์" },
          { id: "perplo",   label: "กลยุทธ์รายข้อ PLO" }
        ]
      },
      {
        to: "/assessment", label: "การวัดและประเมินผล", desc: "วิธีประเมิน หลักฐาน และผู้ประเมินรายข้อ PLO",
        sections: [
          { id: "summary", label: "ตารางสรุป 7 PLO" },
          { id: "perplo",  label: "รายละเอียดรายข้อ PLO" }
        ]
      },
      {
        to: "/ksec-pedagogy", label: "กลยุทธ์รายข้อ KSEC", desc: "วิธีสอน วิธีประเมิน และรายวิชาแกนครบ 61 รหัส",
        sections: [
          { id: "table",   label: "ตารางกลยุทธ์และการประเมิน" },
          { id: "anchors", label: "รายวิชาแกนที่ถูกอ้างมากสุด" }
        ]
      }
    ]
  },
  {
    id: "market",
    label: "ตลาดแรงงาน",
    hint: "หลักฐานอาชีพและทักษะที่ตลาดต้องการ",
    items: [
      { to: "/careers", label: "เส้นทางอาชีพ",  desc: "อาชีพ C01–C26 และการจับคู่กับรายวิชา" },
      { to: "/jobs",    label: "Jobs & Skills", desc: "ข้อมูลประกาศงานจริงและทักษะที่พบ" }
    ]
  },
  {
    id: "refs",
    label: "ข้อมูลอ้างอิง",
    to: "/refs",
    solo: true
  }
];

/* หาว่าเส้นทางปัจจุบันอยู่ในกลุ่มใดและตรงกับรายการใด */
export function findNav(pathname) {
  for (const g of NAV_GROUPS) {
    if (g.solo) {
      if (g.end ? pathname === g.to : pathname.startsWith(g.to)) return { group: g, item: null };
      continue;
    }
    for (const it of g.items) {
      if (pathname === it.to || pathname.startsWith(it.to + "/")) return { group: g, item: it };
    }
  }
  return { group: null, item: null };
}
