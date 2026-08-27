/* เทียบเคียงหลักสูตรวิศวกรรม AI ระดับปริญญาตรีในประเทศไทย
   ที่มา: Labor_Growth_Report_Vault/05_Benchmark_AI_Programs_TH
          · 00_Benchmark_Home.md (รายชื่อหลักสูตรที่นำมาเทียบ)
          · 06_Comparison_Analysis.md (ตารางเปรียบเทียบรายมิติ)
          · 08_Sources.md (ลิงก์เว็บไซต์ทางการ · สืบค้น 22 ก.ค. 2569 / 2026-07-22)

   หมายเหตุ: ⚠️ = เว็บไซต์ทางการไม่เปิดเผยข้อมูลนี้ต่อสาธารณะ ยังยืนยันไม่ได้
   หน่วยกิตของ มกส. ใช้ 125 ตามโครงสร้างปัจจุบัน (vault ฉบับ benchmark ยังเขียน 130 ซึ่งเป็นตัวเลขก่อนปรับโครงสร้าง) */

export const BENCHMARK_UPDATED = "สืบค้น 22 กรกฎาคม 2569 / 2026-07-22";

export const UNKNOWN = "⚠️ ไม่เปิดเผย";

export const PROGRAMS = [
  {
    id: "ksu",
    self: true,
    mark: "★",
    institution: "มหาวิทยาลัยกาฬสินธุ์",
    campus: "คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม",
    program: "วศ.บ. วิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ",
    programEn: "AI and Intelligent Systems Engineering",
    location: "กาฬสินธุ์ (อีสาน)",
    credits: "125",
    duration: "4 ปี / 8 ภาค",
    language: "ไทย",
    tracks: "3 แขนง",
    trackBasis: "โดเมนอุตสาหกรรม",
    coop: "สหกิจ 6 นก. ≥16 สัปดาห์",
    capstone: "✅ 3 นก. + เตรียม 1 นก.",
    plo: "✅ 7 ข้อ ↔ ABET SO(1)–(7)",
    tuition: "อัตรา ม.รัฐภูมิภาค",
    domain: "เกษตรอุตสาหกรรม",
    highlight: "หลักสูตรของเรา — ออกแบบด้วย OBE เต็มรูปแบบ สอบย้อนกลับได้ตั้งแต่ความต้องการผู้มีส่วนได้ส่วนเสียถึง CLO",
    links: [
      { label: "เว็บหลักสูตร (Curriculum Explorer)", url: "http://localhost:5180/", kind: "ภายใน" }
    ]
  },
  {
    id: "psu",
    mark: "①",
    institution: "ม.สงขลานครินทร์",
    campus: "วิทยาเขตภูเก็ต · วิทยาลัยการคอมพิวเตอร์",
    program: "วศ.บ. วิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ (AISE)",
    programEn: "Artificial Intelligence and System Engineering",
    location: "ภูเก็ต (ใต้)",
    credits: UNKNOWN,
    duration: "4 ปี",
    language: "อังกฤษ ≥ 50%",
    tracks: UNKNOWN,
    trackBasis: "—",
    coop: UNKNOWN,
    capstone: UNKNOWN,
    plo: UNKNOWN,
    tuition: "38,000 บาท/ภาค",
    domain: "เมืองอัจฉริยะ / บริการ",
    highlight: "ชื่อหลักสูตรตรงกับ มกส. เกือบทุกคำ — เป็นคู่เทียบที่ใกล้ที่สุดในเชิงการรับรู้ของผู้สมัคร",
    links: [
      { label: "หน้าหลักสูตร วศ.บ. AISE", url: "https://computing.psu.ac.th/th/b-eng-in-artificial-intelligence-and-system-engineering-aise/", kind: "ทางการ" },
      { label: "หลักสูตร วศ.ม. สาขาเดียวกัน", url: "https://computing.psu.ac.th/th/m-eng-in-artificial-intelligence-and-system-engineering-aise/", kind: "ทางการ" },
      { label: "วิทยาลัยการคอมพิวเตอร์ PSU", url: "https://computing.psu.ac.th/th/", kind: "ทางการ" }
    ]
  },
  {
    id: "kmutt",
    mark: "②",
    institution: "ม.เทคโนโลยีพระจอมเกล้าธนบุรี",
    campus: "วิทยาเขตราชบุรี",
    program: "วศ.บ. วิศวกรรมระบบปัญญาประดิษฐ์ (AISE)",
    programEn: "Artificial Intelligence Systems Engineering",
    location: "ราชบุรี (ตะวันตก)",
    credits: UNKNOWN,
    duration: "4 ปี",
    language: "ไทย",
    tracks: "4 แขนง",
    trackBasis: "ศาสตร์เทคนิค",
    coop: "ยืดหยุ่น 3 แบบ (2/2/6 เดือน)",
    capstone: UNKNOWN,
    plo: UNKNOWN,
    tuition: "26,200 บาท/ภาค",
    domain: "ไม่ผูกโดเมน",
    highlight: "ยืดหยุ่นที่สุดในการฝึกประสบการณ์ — เลือกได้ 3 รูปแบบ รวมการแลกเปลี่ยนต่างประเทศ",
    links: [
      { label: "หลักสูตร AISE มจธ. ราชบุรี", url: "https://ratchaburi.kmutt.ac.th/aise-new/", kind: "ทางการ" }
    ]
  },
  {
    id: "ubu",
    mark: "③",
    institution: "ม.อุบลราชธานี",
    campus: "คณะวิศวกรรมศาสตร์",
    program: "วศ.บ. วิศวกรรมปัญญาประดิษฐ์และการสั่งการ",
    programEn: "Artificial Intelligence and Control Engineering",
    location: "อุบลราชธานี (อีสาน)",
    credits: "125",
    duration: "4 ปี",
    language: "ไทยและอังกฤษ",
    tracks: UNKNOWN,
    trackBasis: "—",
    coop: "สหกิจ I–II 12 นก. เต็มปี 4 + เตรียม 1",
    capstone: UNKNOWN,
    plo: "✅ 7 ข้อ",
    tuition: "~28,000 บาท/ภาค",
    domain: "การผลิต/บริการ + Prompt & GenAI",
    highlight: "คู่แข่งตรงที่สุด — ม.รัฐภาคอีสานเหมือนกัน ค่าเทอมใกล้เคียง และเปิดเผยทั้ง 125 หน่วยกิตและ PLO 7 ข้อแล้ว",
    links: [
      { label: "รายการหลักสูตร คณะวิศวฯ ม.อุบลฯ", url: "https://www.ubu.ac.th/UBU2025/course_faculty.php?id=13", kind: "ทางการ" },
      { label: "เว็บคณะวิศวกรรมศาสตร์ ม.อุบลฯ", url: "https://www.eng.ubu.ac.th/", kind: "ทางการ" },
      { label: "ข้อมูล TCAS สาขาวิศวกรรมปัญญาประดิษฐ์", url: "https://tcas.in.th/department/%E0%B8%A7%E0%B8%B4%E0%B8%A8%E0%B8%A7%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B2%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B4%E0%B8%A9%E0%B8%90%E0%B9%8C.9943/", kind: "รวบรวม" }
    ]
  },
  {
    id: "aiee",
    mark: "④",
    institution: "สจล. × ม.กรุงเทพ",
    campus: "คณะวิศวกรรมศาสตร์ + บริหารธุรกิจ",
    program: "AI Engineering and Entrepreneurship (AIEE)",
    programEn: "วิศวกรรมปัญญาประดิษฐ์และการเป็นผู้ประกอบการ",
    location: "กรุงเทพฯ",
    credits: UNKNOWN,
    duration: "4 ปี",
    language: "อังกฤษ",
    tracks: "3 แขนง",
    trackBasis: "โดเมนอุตสาหกรรม",
    coop: "ต่างประเทศ 2–6 เดือน + ปี 4 ยืดหยุ่น",
    capstone: "✅ (ตั้งบริษัทจริง)",
    plo: UNKNOWN,
    tuition: "~175,000 บาท/ภาค",
    domain: "อาหาร-ชีวภาพ · IoT · EV",
    highlight: "ใช้เกณฑ์แบ่งแขนงตามโดเมนอุตสาหกรรมเหมือน มกส. และมีผู้ประกอบการเป็นผลลัพธ์ ตรงกับ PLO7",
    links: [
      { label: "หน้าหลักสูตร AIEE", url: "https://www.bu.ac.th/en/international-programs/ai-engineering-and-entrepreneurship", kind: "ทางการ" },
      { label: "ข่าวความร่วมมือ สจล. × ม.กรุงเทพ", url: "https://www.bu.ac.th/th/engineering/featured-stories/1596", kind: "ทางการ" }
    ]
  },
  {
    id: "cmkl",
    mark: "⑤",
    institution: "CMKL University",
    campus: "ร่วมกับ Carnegie Mellon University",
    program: "B.Eng. in AI and Computer Engineering (AiCE)",
    programEn: "Artificial Intelligence and Computer Engineering",
    location: "กรุงเทพฯ",
    credits: "360 units (ระบบ CMU)",
    duration: "3–4 ปี",
    language: "อังกฤษ",
    tracks: "3 แขนง",
    trackBasis: "ศาสตร์เทคนิค",
    coop: "โครงงาน + วิจัยระดับ ป.ตรี",
    capstone: "✅ Capstone Design",
    plo: "⚠️ ระบุเป็นองค์ประกอบพันธกิจ",
    tuition: "~302,000 บาท/ภาค",
    domain: "การแพทย์ · การเงิน · เกม",
    highlight: "Competency-based ร่วมกับ Carnegie Mellon — โครงสร้างองค์ประกอบสะท้อนกรอบ ABET ที่ มกส. อ้างอิงอยู่",
    links: [
      { label: "หน้าหลักสูตร B.Eng. AiCE", url: "https://cmkl.ac.th/aice/bachelor/b-eng-overview", kind: "ทางการ" },
      { label: "ภาพรวมหลักสูตร AiCE", url: "https://site.cmkl.ac.th/aice/bachelor/overview", kind: "ทางการ" },
      { label: "หน้ารับสมัคร B.Eng. AiCE", url: "https://cmkl.ac.th/admissions/bachelor/b-eng-in-artificial-intelligence-computer-engineering", kind: "ทางการ" },
      { label: "หลักสูตรสองปริญญา KMITL × CMKL", url: "https://cmkl.ac.th/allnews-allevents/kmitlxcmkl-admission", kind: "ทางการ" }
    ]
  }
];

/* มิติที่นำมาเทียบในตาราง — key ต้องตรงกับฟิลด์ใน PROGRAMS */
export const DIMENSIONS = [
  { key: "location",   label: "ที่ตั้ง" },
  { key: "credits",    label: "หน่วยกิต" },
  { key: "duration",   label: "ระยะเวลา" },
  { key: "language",   label: "ภาษา" },
  { key: "tracks",     label: "จำนวนแขนง" },
  { key: "trackBasis", label: "เกณฑ์แบ่งแขนง" },
  { key: "coop",       label: "ฝึกวิชาชีพ" },
  { key: "capstone",   label: "Capstone" },
  { key: "plo",        label: "เปิดเผย PLO" },
  { key: "tuition",    label: "ค่าเทอม/ภาค" },
  { key: "domain",     label: "โดเมนเป้าหมาย" }
];

/* ข้อค้นพบร่วมจาก 06_Comparison_Analysis.md */
export const FINDINGS = [
  {
    title: "แกนวิชาการเหมือนกันเกือบทั้งหมด",
    desc: "ทุกหลักสูตรมี ML/DL · Computer Vision · Data Engineering · Cloud · IoT และจริยธรรม AI — เนื้อหาทางเทคนิคไม่ใช่จุดสร้างความแตกต่างอีกต่อไป"
  },
  {
    title: "ให้ปริญญาวิศวกรรมศาสตรบัณฑิต ไม่ใช่วิทยาศาสตรบัณฑิต",
    desc: "แม้หลักสูตรที่อยู่ในวิทยาลัยการคอมพิวเตอร์ก็ยังให้ วศ.บ. สะท้อนว่าตลาดต้องการ “วิศวกร AI” มากกว่า “นักวิทยาศาสตร์ข้อมูล”"
  },
  {
    title: "เรียนฐานร่วม 2 ปี แล้วแยกทางปี 3–4",
    desc: "เป็นสถาปัตยกรรมหลักสูตรร่วมของทุกแห่งที่มีการแบ่งแขนง รวมถึง มกส."
  },
  {
    title: "ผูกกับโดเมนใดโดเมนหนึ่งเสมอ",
    desc: "ไม่มีหลักสูตรใดสอน AI แบบลอย ๆ ต่างกันเพียงว่าเลือกโดเมนใดเป็นสนามให้นักศึกษาลงมือทำ"
  },
  {
    title: "ต้นทุนแบ่งตลาดเป็น 2 กลุ่มชัดเจน",
    desc: "กลุ่มเข้าถึงได้ 26,000–38,000 บาท/ภาค (มกส. · มจธ. · ม.อุบลฯ · PSU) กับกลุ่มลงทุนสูง 175,000–302,000 บาท/ภาค (AIEE · CMKL)"
  },
  {
    title: "ช่องว่างที่ชัดที่สุดของ มกส. คือความเป็นสากล",
    desc: "CMKL และ AIEE เป็นนานาชาติเต็มรูปแบบ PSU สองภาษา ≥50% ขณะที่ มกส. สอนภาษาไทยเป็นหลัก — เป็นประเด็นตรงกับ PLO3 การสื่อสารทางเทคนิค"
  }
];
