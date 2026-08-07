// เอกสารอ้างอิงของหลักสูตร — ซิงก์จาก Vault: 03_OBE_PLO_Design_2570/06_OBE_References.md
// และชุดข้อมูล JobsDB: 07_JobsDB_Semantic_Career_Analysis/{00_Home, 02_Data_and_Methodology}

/* ─── ประเภทและบทบาทของเอกสารที่ศึกษา (ไม่เรียกรวมทั้งหมดว่า “มาตรฐาน”) ─── */
export const REF_KINDS = [
  {
    kind: "เกณฑ์รับรองและกรอบผลลัพธ์การศึกษา",
    docs: "ABET EAC, IEA GAPC, TABEE, AUN-QA",
    use: "กำหนด PLO ลักษณะปัญหาวิศวกรรมที่ซับซ้อน การออกแบบ การทดลอง การทำงานเป็นทีม และระบบประเมิน/ปรับปรุงต่อเนื่อง"
  },
  {
    kind: "มาตรฐานและกรอบธรรมาภิบาล AI",
    docs: "ISO/IEC 42001:2023, NIST AI RMF 1.0 และ GenAI Profile, แนวทาง ETDA/AIGC, AI Verify",
    use: "กำหนด Responsible AI ความเสี่ยง ความปลอดภัย ความเป็นส่วนตัว การทวนสอบ และหลักฐานธรรมาภิบาลใน H7/AISK07/PLO4"
  },
  {
    kind: "กรอบองค์ความรู้และสมรรถนะวิชาชีพ",
    docs: "ACM/IEEE-CS/AAAI CS2023, IMDA Skills Framework for ICT / GenAI TSC",
    use: "ตรวจความครบถ้วนของ AI/ML, Software, Data, Security, GenAI และสมรรถนะการพัฒนาระบบใช้งานจริง"
  },
  {
    kind: "รายงานแนวโน้มและข้อมูลเชิงประจักษ์",
    docs: "WEF, Stanford AI Index/Lightcast, LinkedIn Economic Graph, BLS, NXPO, TDRI, ManpowerGroup, JobsDB และผลสำรวจผู้มีส่วนได้ส่วนเสีย",
    use: "กำหนด H1–H20, S1–S10, อาชีพ C01–C26, รายวิชา และน้ำหนักความสำคัญของทักษะ"
  }
];

/* ─── ABET Student Outcomes ที่ใช้เป็นฐาน PLO ─── */
export const ABET_SO = [
  { so: "SO1", en: "Complex Engineering Problem Solving", plo: 1,
    core: "ระบุ ตั้งโจทย์ และแก้ปัญหาทางวิศวกรรมที่ซับซ้อน โดยประยุกต์หลักวิศวกรรม วิทยาศาสตร์ และคณิตศาสตร์",
    use: "ใช้เป็นฐานการวิเคราะห์ปัญหาเกษตร อุตสาหกรรม และองค์กรร่วมกับ AI" },
  { so: "SO2", en: "Engineering Design", plo: 2,
    core: "ใช้กระบวนการออกแบบวิศวกรรมสร้างคำตอบที่ตรงความต้องการ โดยพิจารณาสุขภาวะ ความปลอดภัย สวัสดิภาพ และปัจจัยโลก วัฒนธรรม สังคม สิ่งแวดล้อม และเศรษฐกิจ",
    use: "ขยายสู่การออกแบบและบูรณาการ AI ข้อมูล ซอฟต์แวร์ อุปกรณ์ตรวจวัด และระบบควบคุม รวม BCG/มาตรฐาน" },
  { so: "SO3", en: "Communication", plo: 3,
    core: "สื่อสารกับผู้รับสารที่หลากหลายอย่างมีประสิทธิผล",
    use: "ครอบคลุมรายงาน การนำเสนอ การแสดงผลข้อมูล และการสื่อสารคุณค่ากับผู้รับสารด้านเทคนิคและทั่วไป" },
  { so: "SO4", en: "Ethics and Professional Responsibility", plo: 4,
    core: "ตระหนักถึงความรับผิดชอบทางจริยธรรมและวิชาชีพ ตัดสินใจโดยพิจารณาผลกระทบระดับโลก เศรษฐกิจ สิ่งแวดล้อม และสังคม",
    use: "ขยายสู่ AI Governance กฎหมายข้อมูล ความมั่นคงปลอดภัย ความปลอดภัยของระบบ และมาตรฐาน" },
  { so: "SO5", en: "Teamwork and Leadership", plo: 5,
    core: "ทำงานเป็นทีมได้อย่างมีประสิทธิผล โดยร่วมกันสร้างภาวะผู้นำ สภาพแวดล้อมร่วมมือ กำหนดเป้าหมาย วางแผนงาน และบรรลุวัตถุประสงค์",
    use: "ใช้กับทีมสหวิทยาการ การบริหารโครงการ ความเสี่ยง ความขัดแย้ง และการส่งมอบงานจริง" },
  { so: "SO6", en: "Experimentation and Engineering Judgment", plo: 6,
    core: "พัฒนาและดำเนินการทดลองที่เหมาะสม วิเคราะห์และตีความข้อมูล และใช้วิจารณญาณทางวิศวกรรมเพื่อสรุปผล",
    use: "ใช้ประเมินสมรรถนะ คุณภาพ ความน่าเชื่อถือ และความปลอดภัยของโมเดล/ระบบ" },
  { so: "SO7", en: "Acquisition and Application of New Knowledge", plo: 7,
    core: "แสวงหาและประยุกต์ใช้ความรู้ใหม่ตามความจำเป็น โดยใช้กลยุทธ์การเรียนรู้ที่เหมาะสม",
    use: "ขยายสู่การเรียนรู้ตลอดชีวิต การติดตามเทคโนโลยี กฎหมายและมาตรฐาน และการสร้างนวัตกรรม/ผู้ประกอบการ" }
];

export const ABET_NOTE =
  "ABET Student Outcomes เป็นผลลัพธ์ขั้นต่ำตาม Criterion 3 ของเกณฑ์รับรองหลักสูตรวิศวกรรมศาสตร์โดย Engineering Accreditation Commission (EAC) of ABET " +
  "ไม่ใช่รายชื่อรายวิชาและไม่ใช่เครื่องมือวัดผลโดยตัวมันเอง หลักสูตรต้องกำหนด Performance Indicators วิธีประเมิน เกณฑ์ผ่าน " +
  "และใช้ผลเพื่อการปรับปรุงอย่างต่อเนื่องตาม Criterion 4 · ข้อความภาษาไทยเป็นการสรุปความหมาย ไม่ใช่คำแปลทางการ";

/* ─── มาตรฐานและกรอบที่ศึกษา ─── */
export const STANDARDS = [
  { n: 1, name: "ABET EAC Criteria for Accrediting Engineering Programs, Criterion 3–5",
    use: "SO1–SO7, Continuous Improvement, โครงสร้างคณิตศาสตร์/วิทยาศาสตร์ วิศวกรรมศาสตร์ และ culminating design experience" },
  { n: 2, name: "IEA Graduate Attributes and Professional Competencies (GAPC), Version 4 (2021)",
    use: "Graduate Attributes, complex engineering problems/activities, knowledge profile และสมรรถนะวิชาชีพสากล" },
  { n: 3, name: "TABEE Accreditation Criteria and Guidelines",
    use: "OBE วิศวกรรมในบริบทไทย การบรรลุผลลัพธ์บัณฑิต โครงงานออกแบบ ข้อจำกัดจริง และการปรับปรุงต่อเนื่อง" },
  { n: 4, name: "มาตรฐานคุณวุฒิระดับอุดมศึกษา พ.ศ. 2565",
    use: "จัด PLO ใน 4 ด้าน: ความรู้ ทักษะ จริยธรรม และลักษณะบุคคล" },
  { n: 5, name: "AUN-QA Programme Level, Version 4.0",
    use: "Expected Learning Outcomes, stakeholder needs, constructive alignment, assessment และ quality enhancement" },
  { n: 6, name: "ACM/IEEE-CS/AAAI Computer Science Curricula 2023 (CS2023)",
    use: "ตรวจองค์ความรู้คอมพิวเตอร์และ AI ทั้ง symbolic/subsymbolic, software, data, systems และ ethics" },
  { n: 7, name: "ISO/IEC 42001:2023",
    use: "ระบบบริหารจัดการ AI ความรับผิดชอบ ความเสี่ยง ความโปร่งใส และการปรับปรุงต่อเนื่อง" },
  { n: 8, name: "NIST AI RMF 1.0 และ Generative AI Profile (NIST AI 600-1)",
    use: "Govern–Map–Measure–Manage, trustworthy AI, การประเมินและจัดการความเสี่ยง AI/GenAI" },
  { n: 9, name: "ETDA/AIGC และ AI Verify",
    use: "ธรรมาภิบาล AI ในบริบทการใช้งานจริง หลักฐานการทดสอบ ความโปร่งใส ความมั่นคงปลอดภัยและความรับผิดชอบ" },
  { n: 10, name: "IMDA Skills Framework for ICT และ GenAI Technical Skills and Competencies",
    use: "สมรรถนะงาน AI/GenAI, model selection/evaluation, application development, security, deployment และการส่งมอบ" }
];

/* ─── รายงานและข้อมูลเชิงประจักษ์ ─── */
export const EVIDENCE = [
  { group: "แนวโน้มงานและทักษะโลก", src: "World Economic Forum — Future of Jobs Report 2025",
    use: "อาชีพและทักษะเติบโตเร็ว เช่น AI and Big Data, Cybersecurity, Technology Literacy, Analytical Thinking และ Lifelong Learning" },
  { group: "เศรษฐกิจและตลาดงาน AI", src: "Stanford HAI — AI Index Report 2026, Economy chapter / Lightcast",
    use: "ความต้องการทักษะและประกาศงาน AI เชิงประจักษ์" },
  { group: "การเปลี่ยนแปลงงานด้วย AI", src: "LinkedIn Economic Graph — AI Labor Market Update 2025",
    use: "การแพร่กระจาย AI literacy และทักษะ AI ในตลาดแรงงาน" },
  { group: "แนวโน้มอาชีพ", src: "U.S. Bureau of Labor Statistics — Employment Projections 2024–2034 / Occupational Outlook Handbook",
    use: "ตรวจแนวโน้มอาชีพ Software, Data, Cybersecurity และวิศวกรรมที่เกี่ยวข้อง" },
  { group: "กำลังคนประเทศไทย", src: "NXPO — Thailand Talent Landscape 2025–2029",
    use: "ความต้องการกำลังคนทักษะสูงของประเทศและอุตสาหกรรมเป้าหมาย" },
  { group: "ตลาดงาน AI ประเทศไทย", src: "TDRI รายงานทีดีอาร์ไอ ฉบับที่ 225 (2568)",
    use: "จำนวนและการเติบโตของตำแหน่ง AI/ML Engineer, Data และ Responsible AI รวมถึงทักษะภาษาอังกฤษ/การสื่อสาร" },
  { group: "ช่องว่างทักษะโลก", src: "ManpowerGroup — Global Talent Shortage 2026",
    use: "ความขาดแคลน AI literacy และทักษะเทคโนโลยี" },
  { group: "เทคโนโลยีเปลี่ยนงานรายภาค", src: "WEF — Jobs of Tomorrow 2025 และ Human–Machine Collaboration for Intelligent Factories 2026",
    use: "AI, Robotics, Sensor Networks, machine oversight, governance และทักษะโรงงานอัจฉริยะ" },
  { group: "ตลาดงานปฐมภูมิของโครงการ", src: "JobsDB Thailand Snapshot 28 กรกฎาคม 2569", to: "/jobs",
    use: "ประกาศไม่ซ้ำ 7,424 งาน · semantic classified 3,278 งาน · 5,377 classifiedMatches ใช้สร้างอาชีพ C01–C17 และ Top Skills" },
  { group: "เสียงผู้มีส่วนได้ส่วนเสีย", src: "ผลสำรวจหลักสูตรรอบเดิม พ.ศ. 2569",
    use: "ผู้ตอบจริง 55 ราย ใช้สังเคราะห์ N1–N11 ส่วน 355 รายเป็นโควตาเป้าหมายรอบขยาย ไม่ใช่ผลตอบจริง" }
];

/* ─── ชุดข้อมูล JobsDB ที่ใช้เป็นหลักฐานปฐมภูมิ ─── */
export const JOBSDB = {
  source: "JobsDB Thailand",
  url: "https://th.jobsdb.com/th",
  snapshot: "28 กรกฎาคม 2569 (2026-07-28)",
  analyzed: "29 กรกฎาคม 2569 (2026-07-29)",
  unit: "ประกาศงานไม่ซ้ำตาม Job ID",
  scope: "อาชีพ C01–C17",
  model: "Gemini 2.5 Flash-Lite",
  ruleVersion: "semantic-career-v1",
  stats: [
    ["ประกาศงานไม่ซ้ำตาม Job ID", "7,424"],
    ["ความสัมพันธ์จากคำค้น (searchMatches)", "19,866"],
    ["งานที่ผ่านการจำแนกอย่างน้อย 1 อาชีพ", "3,278"],
    ["งานที่ไม่เข้าขอบเขต C01–C17", "4,146"],
    ["ความสัมพันธ์หลังจำแนก (classifiedMatches)", "5,377"],
    ["Primary relations", "3,278"],
    ["Secondary relations", "2,099"],
    ["งานที่สัมพันธ์มากกว่า 1 อาชีพ", "2,017"]
  ],
  policy: [
    "จำนวนงานราย C กลุ่มย่อย และสถิติ Skills บนเว็บนี้คำนวณจาก classifiedMatches เท่านั้น",
    "searchMatches เป็นเพียงหลักฐานว่าพบประกาศจากคำค้นใด ไม่ใช้ตัดสินว่าเป็นอาชีพนั้นจริง — การจำแนกใหม่ลดความสัมพันธ์จากคำค้นลง 72.9%",
    "คำค้นที่ทำให้พบงานถูกจงใจไม่นำมาใช้เป็นเหตุผลจำแนก เพื่อลด confirmation bias",
    "แต่ละงานตัดสินจากชื่อตำแหน่ง การจัดหมวดของประกาศ คำอธิบายงาน คุณสมบัติ และ Skills ที่สกัดได้"
  ],
  files: [
    ["curriculum-graph/data/jobsdb-careers-raw.json", "ข้อมูลที่รวบรวมจากผลค้นหา"],
    ["curriculum-graph/src/jobsData.json", "ข้อมูลสำหรับหน้าเว็บและผลจำแนก"]
  ],
  vault: [
    ["07_JobsDB_Semantic_Career_Analysis/02_Data_and_Methodology.md", "ข้อมูลและระเบียบวิธี"],
    ["07_JobsDB_Semantic_Career_Analysis/03_Classification_Policy_C01_C17.md", "เกณฑ์จำแนก C01–C17"],
    ["07_JobsDB_Semantic_Career_Analysis/05_Skills_Evidence.md", "หลักฐาน Technical และ Soft Skills"],
    ["07_JobsDB_Semantic_Career_Analysis/06_Data_Quality_and_Multiple_Relations.md", "คุณภาพข้อมูลและงานที่สัมพันธ์หลายอาชีพ"],
    ["07_JobsDB_Semantic_Career_Analysis/08_Reproducibility_and_Update_Workflow.md", "การทำซ้ำและขั้นตอนอัปเดต"]
  ]
};

/* ─── นโยบายและแผนระดับชาติที่ใช้กำหนดบริบท ─── */
export const NATIONAL = [
  "แผนปฏิบัติการด้านปัญญาประดิษฐ์แห่งชาติเพื่อการพัฒนาประเทศไทย พ.ศ. 2565–2570",
  "แผนพัฒนาเศรษฐกิจและสังคมแห่งชาติ ฉบับที่ 13 พ.ศ. 2566–2570",
  "โมเดลเศรษฐกิจ BCG และเป้าหมายการพัฒนากำลังคน/อุตสาหกรรม เกษตรมูลค่าสูง และดิจิทัลของประเทศ",
  "กฎหมายและแนวทางกำกับที่เกี่ยวข้อง เช่น พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล แนวปฏิบัติจริยธรรม AI และแนวทางธรรมาภิบาล Generative AI"
];

/* ─── บรรณานุกรม [1]–[19] ตามลำดับในเอกสาร Vault ─── */
export const BIB = [
  { g: "มาตรฐานและกรอบสากล", items: [
    { n: 1, text: "International Engineering Alliance. (2021). Graduate Attributes and Professional Competencies (Version 4, 21 June 2021).", url: "https://www.ieagreements.org" },
    { n: 2, text: "ประกาศคณะกรรมการมาตรฐานการอุดมศึกษา เรื่อง รายละเอียดผลลัพธ์การเรียนรู้ตามมาตรฐานคุณวุฒิระดับอุดมศึกษา พ.ศ. 2565. ราชกิจจานุเบกษา." },
    { n: 3, text: "สภาวิศวกร. เกณฑ์การรับรองมาตรฐานคุณภาพการศึกษาวิศวกรรมศาสตร์ (TABEE).", url: "https://tabee.coe.or.th" },
    { n: 4, text: "ABET Engineering Accreditation Commission. Criteria for Accrediting Engineering Programs (Criterion 3: Student Outcomes).", url: "https://www.abet.org" },
    { n: 5, text: "ASEAN University Network. Guide to AUN-QA Assessment at Programme Level (Version 4.0)." }
  ]},
  { g: "รายงานแนวโน้มตลาดแรงงานและทักษะ", items: [
    { n: 6, text: "World Economic Forum. (2025). The Future of Jobs Report 2025.", url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/" },
    { n: 9, text: "Stanford Institute for Human-Centered Artificial Intelligence. (2026). AI Index Report 2026 — Economy. ข้อมูลประกาศงาน AI จาก Lightcast ปี 2025.", url: "https://hai.stanford.edu/ai-index/2026-ai-index-report/economy" },
    { n: 11, text: "LinkedIn Economic Graph. (2025). AI Labor Market Update — September 2025.", url: "https://economicgraph.linkedin.com/content/dam/me/economicgraph/en-us/PDF/ai-labor-market-update-header-sept-2025.pdf" },
    { n: 13, text: "U.S. Bureau of Labor Statistics. (2025). Employment Projections 2024–2034 and Occupational Outlook Handbook.", url: "https://www.bls.gov/ooh/" },
    { n: 14, text: "สำนักงานสภานโยบายการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรมแห่งชาติ. (2568). Thailand Talent Landscape 2025–2029.", url: "https://www.nxpo.or.th/th/en/35982/" },
    { n: 15, text: "World Economic Forum. (2025). Jobs of Tomorrow: Technology and the Future of the World's Largest Workforces.", url: "https://www.weforum.org/press/2025/10/seven-sectors-80-of-workers-four-technologies-driving-the-future-of-work/" },
    { n: 16, text: "World Economic Forum. (2026). Human–Machine Collaboration Framework for Intelligent Factories.", url: "https://www.weforum.org/press/2026/06/new-human-machine-collaboration-framework-to-prepare-industrial-workforce-for-intelligent-factories/" },
    { n: 17, text: "Second Talent. (2026). Top 10 Most In-Demand AI Engineering Skills and Salary Ranges in 2026. (NLP +155% YoY, ค่าตอบแทนสายทักษะ AI)", url: "https://www.secondtalent.com/resources/most-in-demand-ai-engineering-skills-and-salary-ranges/" },
    { n: 18, text: "สถาบันวิจัยเพื่อการพัฒนาประเทศไทย (TDRI). (2568). การวิเคราะห์ตลาดแรงงานออนไลน์ด้วย Big Data — ตลาดงาน AI เติบโตสองตำแหน่งก้าวกระโดด (รายงานทีดีอาร์ไอ ฉบับที่ 225, มิ.ย. 2568). ประกาศงาน AI ~22,800 ตำแหน่ง/ปี; Data Annotator +586%, AI/ML Engineer +277%.", url: "https://tdri.or.th/2025/08/ai-job-market-2tracked-growth/" },
    { n: 19, text: "ManpowerGroup. (2026). 2026 Global Talent Shortage — AI Skills Claim Top Spot. (AI literacy = ทักษะหายากอันดับ 2)", url: "https://www.manpowergroup.com/en/news-releases/news/global-talent-shortage-reaches-turning-point-as-ai-skills-claim-top-spot" }
  ]},
  { g: "นโยบายและแผนระดับชาติ", items: [
    { n: 7, text: "กระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม และกระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม. (2565). แผนปฏิบัติการด้านปัญญาประดิษฐ์แห่งชาติเพื่อการพัฒนาประเทศไทย (พ.ศ. 2565–2570)." },
    { n: 8, text: "สำนักงานสภาพัฒนาการเศรษฐกิจและสังคมแห่งชาติ. (2565). แผนพัฒนาเศรษฐกิจและสังคมแห่งชาติ ฉบับที่ 13 (พ.ศ. 2566–2570). ราชกิจจานุเบกษา." },
    { n: 10, text: "สำนักงานพัฒนาธุรกรรมทางอิเล็กทรอนิกส์ (ETDA), ศูนย์ธรรมาภิบาลปัญญาประดิษฐ์ (AIGC). แนวทางประยุกต์ใช้ Generative AI อย่างมีธรรมาภิบาลสำหรับองค์กร และแนวปฏิบัติจริยธรรมปัญญาประดิษฐ์." }
  ]},
  { g: "ข้อมูลปฐมภูมิของหลักสูตร", items: [
    { n: 12, text: "ผลการสำรวจความคิดเห็นผู้มีส่วนได้ส่วนเสียเพื่อการพัฒนาหลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ (หลักสูตรใหม่ พ.ศ. 2570) มหาวิทยาลัยกาฬสินธุ์, 2569. (n = 55)" },
    { n: 20, text: "ชุดข้อมูลประกาศงาน JobsDB Thailand — Snapshot 28 กรกฎาคม 2569 จำแนกด้วยกฎ semantic-career-v1 (ประกาศไม่ซ้ำ 7,424 รายการ; classifiedMatches 5,377 ความสัมพันธ์).", url: "https://th.jobsdb.com/th" }
  ]}
];

/* ─── ไฟล์ต้นทางใน Vault ─── */
export const SOURCE_FILES = [
  ["03_OBE_PLO_Design_2570/06_OBE_References.md", "เอกสารอ้างอิง OBE / GA / PLO (หน้านี้)"],
  ["01_Labor_Market_Research/06_Report_Sources.md", "แหล่งอ้างอิงตลาดแรงงานฉบับเต็ม"],
  ["07_JobsDB_Semantic_Career_Analysis/00_Home.md", "ชุดหลักฐาน JobsDB Semantic Career Analysis"],
  ["05_Benchmark_AI_Programs_TH/06_Comparison_Analysis.md", "การเทียบเคียงหลักสูตร AI ในประเทศไทย"]
];

export const REF_UPDATED = "ทบทวนหลักฐานตลาดแรงงานเพิ่มเติมล่าสุด 19 กรกฎาคม 2569 (2026-07-19)";
