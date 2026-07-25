// ห่วงโซ่การวิเคราะห์ OBE — Stakeholder → Needs → Skills → Skill Set → PLO → YLO → CLO → KSA
// ซิงก์จาก Vault: 03_OBE_PLO_Design_2570/{01_Stakeholder_Needs, 02_Graduate_Attributes, 03_Target_Skills, 04_PLOs_7_OBE}
//                05_TQF2_Academic_Drafts/{09_Yearly_Learning_Outcomes, 10_CLO_Mapping, 11_Skill_Set_Matrix_and_KSA}
// และเล่มหลักสูตรฉบับ OBE v4 (พันธกิจ/ปรัชญา/GA↔WA↔ABET)

/* ─── ขั้นที่ 1 · ผู้มีส่วนได้ส่วนเสีย ─── */
export const STAKEHOLDERS = [
  { id: "SH1", name: "นายจ้าง ผู้ประกอบการ และผู้ใช้บัณฑิต", prio: "HPHI", needs: ["N1","N2","N3","N4","N5","N6","N7","N10","N11"],
    expect: "บัณฑิตทำงานได้จริง บูรณาการวิศวกรรม–AI จัดการข้อมูล Deploy ระบบอย่างคุ้มค่า ปลอดภัย และทำงานเป็นทีมได้" },
  { id: "SH2", name: "ผู้เชี่ยวชาญอุตสาหกรรมและนักวิชาชีพ", prio: "HPHI", needs: ["N1","N3","N4","N5","N6","N9","N12","N13","N16","N18"],
    expect: "เนื้อหาทันเทคโนโลยีและมาตรฐานวิชาชีพ มีความลึกตาม Track เข้าใจกระบวนการจริง จริยธรรม และข้อกำกับ" },
  { id: "SH3", name: "นักศึกษาปัจจุบัน", prio: "LPHI", needs: ["N6","N7","N8","N9","N10"],
    expect: "ได้ใช้อุปกรณ์จริง เรียนแบบ Workshop/Project มีเส้นทางการเรียนชัดเจน และเตรียมพร้อมสู่อาชีพ" },
  { id: "SH4", name: "ศิษย์เก่า", prio: "LPHI", needs: ["N3","N6","N7","N9","N10","N11"],
    expect: "หลักสูตรสอดคล้องงานจริง ลดช่องว่างทักษะ สนับสนุนการพัฒนาอาชีพและการเรียนรู้ตลอดชีวิต" },
  { id: "SH5", name: "นักเรียนมัธยมและผู้เรียนในอนาคต", prio: "LPLI", needs: ["N6","N7","N8","N9","N11","N17"],
    expect: "เห็นเส้นทางการเรียนและอาชีพ เข้าใจความแตกต่างของ 3 Tracks และเข้าถึงโอกาสทางการศึกษา" },
  { id: "SH6", name: "ผู้ปกครอง", prio: "LPHI", needs: ["N3","N11","N17"],
    expect: "คุณภาพและความปลอดภัยของการศึกษา ค่าใช้จ่ายเหมาะสม และมีโอกาสได้งานในภาคอีสาน" },
  { id: "SH7", name: "คณาจารย์และผู้บริหารหลักสูตร", prio: "HPHI", needs: ["N1","N4","N6","N7","N8","N9","N10","N12","N13","N15","N16","N18"],
    expect: "โครงสร้างหลักสูตรต่อเนื่อง สอนได้จริง ประเมินตาม OBE ได้ ทันเทคโนโลยี และสอดคล้องทรัพยากร" },
  { id: "SH8", name: "ผู้ทรงคุณวุฒิและผู้ประเมินภายนอก", prio: "HPLI", needs: ["N1","N2","N4","N5","N9","N10","N12","N13","N15","N16","N18"],
    expect: "มาตรฐานวิชาการ/วิชาชีพ Constructive Alignment การประกันคุณภาพ และการสอบย้อนกลับผลลัพธ์" }
];

export const PRIO_INFO = {
  HPHI: { label: "Manage Closely", desc: "อำนาจสูง–ความสนใจสูง", color: "#c0392b" },
  HPLI: { label: "Keep Satisfied", desc: "อำนาจสูง–ความสนใจเป็นครั้งคราว", color: "#dd8a1e" },
  LPHI: { label: "Keep Informed", desc: "อำนาจต่ำ–ความสนใจสูง", color: "#2f6fb0" },
  LPLI: { label: "Monitor", desc: "อำนาจต่ำ–ความสนใจกำลังพัฒนา", color: "#7a8595" }
};

/* ─── ขั้นที่ 2 · ความต้องการ N1–N18 ─── */
export const NEEDS = [
  { id: "N1", src: "survey", text: "บูรณาการวิศวกรรมแกนหลัก (ไฟฟ้า อิเล็กทรอนิกส์ กลศาสตร์ ระบบควบคุม) เข้ากับ AI ได้จริง",
    evidence: "Pain point อันดับ 1 (13/27) · ทักษะวิศวกรรมแกนหลัก 4.22/5", sets: ["AISK02","AISK03","AISK04","AISK01"], plo: [1,2], level: "star" },
  { id: "N2", src: "survey", text: "ทักษะวิศวกรรมข้อมูลครบวงจร: เก็บ ทำความสะอาด วิเคราะห์ และสร้างโมเดล ML/DL/CV",
    evidence: "ข้อมูลไร้ระเบียบ (9/27) · AI เชิงลึก 4.19 · Data & Cloud 4.07", sets: ["AISK01","AISK05"], plo: [6,2], level: "ok" },
  { id: "N3", src: "survey", text: "ออกแบบ Deploy และ Scale ระบบ AI ภายใต้ข้อจำกัดงบประมาณ ผู้ใช้ดูแลเองได้",
    evidence: "งบโครงสร้างพื้นฐานสูง (10/27) · ระบบใช้จริงไม่ได้ (2/27)", sets: ["AISK01","AISK04","AISK02"], plo: [2], level: "ok" },
  { id: "N4", src: "survey", text: "จริยธรรม AI ความมั่นคงปลอดภัยไซเบอร์ และการตรวจสอบผลลัพธ์ AI ก่อนใช้งาน",
    evidence: "คะแนนความสำคัญสูงสุด 4.26/5 · ขาดความรู้จริยธรรม (6/27)", sets: ["AISK07","AISK06"], plo: [4], level: "star" },
  { id: "N5", src: "survey", text: "สมรรถนะเฉพาะแขนง: T1 Precision Farming · T2 PLC-SCADA/หุ่นยนต์ · T3 GenAI-LLM/MLOps",
    evidence: "PLC/SCADA+หุ่นยนต์ 12/27 · พยากรณ์ผลผลิต 11/27 · GenAI/LLM 11/27", sets: ["AISK02","AISK03","AISK05","AISK06"], plo: [1,2], level: "star" },
  { id: "N6", src: "survey", text: "การเรียนรู้แบบลงมือปฏิบัติ: อุปกรณ์จริง Workshop โครงงานโจทย์จริง และสหกิจศึกษา",
    evidence: "อุปกรณ์จริง 4.87/5 (สูงสุด) · Workshop 4.74 · โครงงาน/สหกิจ 4.57", sets: ["AISK02","AISK03","AISK04"], plo: [2,5], level: "star" },
  { id: "N7", src: "survey", text: "ภาษาอังกฤษเชิงเทคนิค การสื่อสาร การนำเสนอ และการทำงานเป็นทีม",
    evidence: "ประเด็นที่ถูกกล่าวถึงมากสุดทุกกลุ่ม · Soft Skills 4.04", sets: ["AISK08"], plo: [3,5], level: "ok" },
  { id: "N8", src: "survey", text: "ความคิดเชิงผู้ประกอบการ: แปลงโมเดล AI เป็นผลิตภัณฑ์/บริการ/สตาร์ทอัพ",
    evidence: "ผู้เรียน 10/23 ต้องการเป็นนวัตกรหรือสร้างสตาร์ทอัพ", sets: ["AISK08","AISK05"], plo: [7], level: "ok" },
  { id: "N9", src: "survey", text: "รู้เท่าทันเทคโนโลยีอุบัติใหม่ (GenAI, Agentic AI, Prompt Engineering) และเรียนรู้ตลอดชีวิต",
    evidence: "คำตอบปลายเปิดกลุ่มผู้เรียนและคณาจารย์", sets: ["AISK06","AISK08"], plo: [7,2], level: "star" },
  { id: "N10", src: "survey", text: "การคิดวิเคราะห์และคิดเชิงวิพากษ์ ใช้ AI อย่างมีวิจารณญาณ",
    evidence: "WEF: Analytical Thinking เป็น Core Skill อันดับ 1", sets: ["AISK08","AISK07"], plo: [1,4], level: "ok" },
  { id: "N11", src: "survey", text: "ผลิตกำลังคนตอบโจทย์การจ้างงานในภาคตะวันออกเฉียงเหนือและชุมชนท้องถิ่น",
    evidence: "ผู้ปกครองให้ความสำคัญสูงสุดกับโอกาสได้งานในพื้นที่", sets: ["AISK02","AISK05","AISK08"], plo: [2,3], level: "ok" },
  { id: "N12", src: "trend", text: "วิศวกรรม AI ที่คำนึงถึงความยั่งยืน (Sustainable/Green AI) และเกษตรคาร์บอนต่ำ",
    evidence: "WEF: Environmental Stewardship ติด 10 ทักษะโตเร็วครั้งแรก · แผนฯ 13 (BCG)", sets: ["AISK02","AISK01"], plo: [4,2], level: "ok" },
  { id: "N13", src: "trend", text: "การคิดเชิงระบบ (Systems Thinking) ออกแบบระบบอัจฉริยะครบวงจร",
    evidence: "WEF: Systems Thinking เป็นแกนหลักถึงปี 2030 · IEA GAPC", sets: ["AISK04","AISK08"], plo: [1,2], level: "star" },
  { id: "N14", src: "trend", text: "ระบบ AI รองรับสังคมสูงวัยและแรงงานภาคเกษตรขาดแคลน ระบบอัตโนมัติทดแทนแรงงาน",
    evidence: "WEF: Demographic Shifts เป็น 1 ใน 5 แนวโน้มหลัก", sets: ["AISK03","AISK02"], plo: [2], level: "fixed" },
  { id: "N15", src: "trend", text: "เทคโนโลยี AI ภาษาไทยและอธิปไตยปัญญาประดิษฐ์ (Thai NLP / Sovereign AI)",
    evidence: "แผนปฏิบัติการ AI แห่งชาติ (AI for Thai) · ThaiLLM", sets: ["AISK06"], plo: [2,7], level: "ok" },
  { id: "N16", src: "trend", text: "ธรรมาภิบาล AI ระดับองค์กรและการปฏิบัติตามกฎหมาย (PDPA / ร่าง กม. AI)",
    evidence: "แนวปฏิบัติจริยธรรม AI ไทย 6 หลักการ · ETDA/AIGC Guideline", sets: ["AISK07"], plo: [4], level: "star" },
  { id: "N17", src: "trend", text: "ปัญญาประดิษฐ์เพื่อลดความเหลื่อมล้ำและการเข้าถึงดิจิทัล (Inclusive AI)",
    evidence: "WEF: Broadening Digital Access ส่งผลต่อธุรกิจมากสุด (60%)", sets: ["AISK08","AISK05","AISK02"], plo: [4,3], level: "fixed" },
  { id: "N18", src: "trend", text: "ความรู้ข้ามศาสตร์เชิงลึกในโดเมน: เกษตรศาสตร์ (T1) · การผลิต/ลีน (T2) · ธุรกิจ/การเงิน (T3)",
    evidence: "ผู้เชี่ยวชาญเฉพาะทางได้ผลตอบแทนสูงกว่า Generalist 30–50% · งาน AI ~75% ต้องการ Domain Expert", sets: ["AISK02","AISK03","AISK05"], plo: [1,2], level: "star" }
];

export const NEED_LEVEL = {
  star:  { label: "ตอบตรง/จุดแข็ง", color: "#c0392b" },
  ok:    { label: "ตอบครบถ้วน", color: "#2f9e6b" },
  fixed: { label: "ปรับแล้ว (เดิมตอบทางอ้อม)", color: "#dd8a1e" }
};

/* ─── ขั้นที่ 3 · ทักษะเป้าหมาย H/S ─── */
export const HARD_SKILLS = [
  { id: "H1", name: "AI/ML Engineering & Applied Mathematics", core: true, set: "AISK01" },
  { id: "H2", name: "Programming & AI Software Engineering", core: true, set: "AISK01" },
  { id: "H3", name: "Data Engineering, Analytics & Visualization", core: true, set: "AISK01" },
  { id: "H4", name: "MLOps, Cloud & AI Infrastructure", core: true, set: "AISK01" },
  { id: "H5", name: "Industrial Automation, Robotics & Digital Twin", core: true, set: "AISK03" },
  { id: "H6", name: "Generative AI, LLM & Agentic Systems", core: true, set: "AISK06" },
  { id: "H7", name: "AI Security, Privacy, Safety & Responsible AI", core: true, set: "AISK07" },
  { id: "H8", name: "Computer Vision, Remote Sensing & Multimodal AI", core: true, set: "AISK05" },
  { id: "H9", name: "IoT, Embedded, Edge AI & Sensor Networks", core: true, set: "AISK04" },
  { id: "H10", name: "NLP & Thai NLP / Sovereign AI", core: false, set: "AISK06" },
  { id: "H11", name: "Time-Series Forecasting & Predictive Analytics", core: false, set: "AISK05" },
  { id: "H12", name: "Big Data & Distributed / Streaming Systems", core: false, set: "AISK01" },
  { id: "H13", name: "Reinforcement Learning, Optimization & OR", core: false, set: "AISK03" },
  { id: "H14", name: "Data-Centric AI & Annotation Operations", core: false, set: "AISK01" },
  { id: "H15", name: "Green / Sustainable AI & Model Efficiency", core: false, set: "AISK02" }
];

export const SOFT_SKILLS = [
  { id: "S1", name: "Analytical, Critical & Systems Thinking", core: true, set: "AISK08" },
  { id: "S2", name: "Creative Problem-Solving & Engineering Judgment", core: true, set: "AISK08" },
  { id: "S3", name: "Adaptability, Resilience & Lifelong Learning", core: true, set: "AISK08" },
  { id: "S4", name: "Professional Communication, English & Data Storytelling", core: true, set: "AISK08" },
  { id: "S5", name: "Teamwork, Collaboration & Leadership", core: true, set: "AISK08" },
  { id: "S6", name: "Product, Entrepreneurial & Project Management Mindset", core: true, set: "AISK08" },
  { id: "S7", name: "Curiosity, AI Literacy & Human–AI Teaming", core: false, set: "AISK07" },
  { id: "S8", name: "Empathy, Service Orientation & Stakeholder-Centric", core: false, set: "AISK08" }
];

export const LEVELS = [
  { id: "L1", label: "Understand", th: "เข้าใจ" },
  { id: "L2", label: "Apply", th: "ประยุกต์ใช้" },
  { id: "L3", label: "Integrate", th: "บูรณาการ" },
  { id: "L4", label: "Deploy & Evaluate", th: "นำไปใช้และประเมิน" }
];

/* ─── ขั้นที่ 4 · ชุดทักษะ EN-AISK01–08 + กลุ่ม G1–G6 ─── */
export const GROUPS = {
  G1: { name: "แกนวิศวกรรมปัญญาประดิษฐ์", en: "AI Core Engineering", color: "#2f6fb0" },
  G2: { name: "วิศวกรรมโดเมนอัจฉริยะ: สร้างและประกอบโครงสร้างพื้นฐาน กลไก เครื่องจักร", en: "Smart Domain Engineering", color: "#2f9e6b" },
  G3: { name: "ระบบอัจฉริยะและความเข้าใจของเครื่องจักร", en: "Intelligent Systems & Machine Understanding", color: "#dd8a1e" },
  G4: { name: "ปัญญาประดิษฐ์เชิงสร้างและนวัตกรรม", en: "Generative AI & Innovation", color: "#7b57c9" },
  G5: { name: "ธรรมาภิบาลและความรับผิดชอบ AI", en: "Responsible AI & Governance", color: "#c0392b" },
  G6: { name: "วิชาชีพ ผู้นำ และผู้ประกอบการ", en: "Professional, Leadership & Entrepreneurship", color: "#0e9aa7" }
};

export const SKILL_SETS = [
  { id: "AISK01", g: "G1", type: "Hard",
    name: "แกนวิศวกรรม AI: การเรียนรู้ การตัดสินใจ ข้อมูล และซอฟต์แวร์",
    en: "AI Core Engineering Stack", skills: ["H1","H2","H3","H4","H12","H14"], plo: [1,2,6],
    track: { T1: "●", T2: "●", T3: "●" },
    sub: [
      { n: "คณิตศาสตร์ประยุกต์สำหรับ AI", lv: "L3", tools: "Python, NumPy, SymPy" },
      { n: "การพัฒนาและฝึกสอนโมเดล ML/DL — \"AI Teaching\"", lv: "L4", tools: "scikit-learn, PyTorch, TensorFlow" },
      { n: "การให้เหตุผลและการตัดสินใจ (Symbolic/Neurosymbolic)", lv: "L2–L3", tools: "Search/Planning, Bayesian Networks" },
      { n: "การประเมินและอธิบายผลโมเดล (Evaluation/XAI)", lv: "L3", tools: "MLflow, SHAP" },
      { n: "วิศวกรรมซอฟต์แวร์ AI และ Full-stack AI Solutioning", lv: "L3", tools: "Git, FastAPI, Streamlit" },
      { n: "MLOps, Cloud และโครงสร้างพื้นฐาน AI", lv: "L2–L3", tools: "Docker, Kubernetes, AWS/Azure" },
      { n: "วิศวกรรมข้อมูลและการวิเคราะห์", lv: "L3", tools: "SQL, Airflow, Spark, Power BI" }
    ],
    assess: "โครงงานพัฒนาโมเดล · โครงงาน Data Pipeline/Dashboard · End-to-end Demo · Capstone Defense",
    courses: ["EN-001-022","EN-001-026","EN-131-101","EN-131-102","EN-131-105","EN-131-106","EN-131-107","EN-131-108","EN-132-107"] },

  { id: "AISK02", g: "G2", type: "Hard",
    name: "วิศวกรรมเกษตรอัจฉริยะ",
    en: "Smart Agriculture Engineering — Farm Infrastructure, Mechanics & Machines", skills: ["H9","H15"], plo: [2,1],
    track: { T1: "●", T2: "○", T3: "○" },
    sub: [
      { n: "โครงสร้างพื้นฐานและกลไกทางการเกษตร", lv: "L2–L3", tools: "CAD, Statics/Strength Analysis" },
      { n: "การสร้างและประกอบชิ้นงาน/ระบบฟาร์ม (Build & Construct)", lv: "L3", tools: "เครื่องมือช่าง, งานเชื่อม, MCU" },
      { n: "ระบบฟาร์มอัจฉริยะและเกษตรแม่นยำ", lv: "L3–L4", tools: "Sensor Network, Irrigation Control" },
      { n: "ระบบพลังงาน ความร้อน–ของไหล และความยั่งยืนในฟาร์ม", lv: "L2–L3", tools: "Thermo-fluid Analysis, Energy Audit" }
    ],
    assess: "โครงงานสร้าง/ประกอบระบบฟาร์มอัจฉริยะ · ปฏิบัติการภาคสนาม Workshop I–III · สหกิจภาคเกษตร",
    courses: ["EN-001-023","EN-001-024","EN-001-025","EN-001-028","EN-001-029","EN-132-103"] },

  { id: "AISK03", g: "G2", type: "Hard",
    name: "วิศวกรรมอุตสาหกรรมอัจฉริยะและระบบอัตโนมัติ",
    en: "Smart Industry — AI Industrial Engineering & Automation", skills: ["H5","H13","H11"], plo: [2,1],
    track: { T1: "○", T2: "●", T3: "○" },
    sub: [
      { n: "ระบบควบคุมอัตโนมัติ PLC/SCADA และเครือข่ายอุตสาหกรรม", lv: "L3–L4", tools: "PLC (Ladder/FBD/ST), SCADA/HMI" },
      { n: "หุ่นยนต์อุตสาหกรรมและ Cobots · ระบบทดแทนแรงงานที่ขาดแคลน", lv: "L2–L3", tools: "ROS, Robot Arm, Safety/Ergonomics" },
      { n: "โรงงานอัจฉริยะ Digital Twin และการบำรุงรักษาเชิงพยากรณ์", lv: "L3", tools: "Simulation, Digital Twin Platform" },
      { n: "การเพิ่มประสิทธิภาพการผลิตและห่วงโซ่อุปทาน (Optimization/RL)", lv: "L2–L3", tools: "Optimization Solver, RL, ROI Model" }
    ],
    assess: "โครงงานระบบอัตโนมัติ/สายการผลิต · Industry Case Study · รายงานศึกษาดูงาน · สหกิจในโรงงาน",
    courses: ["EN-001-021","EN-001-024","EN-001-025","EN-001-030","EN-132-102","EN-132-105","EN-132-106"] },

  { id: "AISK04", g: "G3", type: "Hard",
    name: "ระบบอัจฉริยะสำหรับฟาร์มและโรงงาน",
    en: "Intelligence System for Smart Farm and Factories", skills: ["H9","H5","H4"], plo: [2],
    track: { T1: "●", T2: "●", T3: "○" },
    sub: [
      { n: "IoT เครือข่ายเซนเซอร์ และการรับสัญญาณเรียลไทม์", lv: "L3–L4", tools: "Arduino/RPi, MQTT, LoRa" },
      { n: "Edge AI / TinyML และการประมวลผลที่ขอบเครือข่าย", lv: "L2–L3", tools: "TinyML, Model Quantization" },
      { n: "ระบบไซเบอร์-กายภาพและการบูรณาการ OT/IT", lv: "L3", tools: "PLC↔Edge AI, SCADA Gateway" },
      { n: "ความปลอดภัยและการจัดการอุปกรณ์ Edge–Cloud", lv: "L2", tools: "Device Management, Edge Security" }
    ],
    assess: "System Integration Project (ปฏิบัติการ III) · สาธิตระบบ IoT–Edge–Cloud · สหกิจศึกษา",
    courses: ["EN-001-027","EN-001-029","EN-001-030","EN-131-104","EN-131-108","EN-132-103","EN-132-105","EN-132-106"] },

  { id: "AISK05", g: "G3", type: "Hard",
    name: "การประยุกต์ปัญญาประดิษฐ์ในเกษตร อุตสาหกรรม และองค์กร",
    en: "Applied AI in Agriculture, Industry and Enterprise", skills: ["H8","H11"], plo: [2,6],
    track: { T1: "●", T2: "●", T3: "●" },
    sub: [
      { n: "การรับรู้ของเครื่อง: CV เพื่อการเกษตรและตรวจสอบคุณภาพ", lv: "L3–L4", tools: "OpenCV, YOLO, CNN" },
      { n: "UAV, Remote Sensing และ GeoAI", lv: "L2–L3", tools: "QGIS, NDVI/NDWI, Drone SDK" },
      { n: "การพยากรณ์และวิเคราะห์เชิงทำนาย", lv: "L3", tools: "Time-Series, Forecasting Models" },
      { n: "AI สำหรับองค์กรและธุรกิจ (DSS, Fraud Detection)", lv: "L2–L3", tools: "BI/DSS, Anomaly Detection" },
      { n: "การสื่อสารผลการวิเคราะห์เชิงโดเมน", lv: "L2–L3", tools: "Dashboard, รายงานเชิงภาพ" }
    ],
    assess: "โครงงาน CV/พยากรณ์ตามโดเมน · Drone Flight Practical Test · Dashboard เชิงตัดสินใจ",
    courses: ["EN-131-103","EN-132-101","EN-132-102","EN-132-103","EN-132-104","EN-132-105"] },

  { id: "AISK06", g: "G4", type: "Hard",
    name: "Generative AI, LLM และระบบเอเจนต์",
    en: "Generative AI, LLM & Agentic Systems", skills: ["H6","H10"], plo: [2,7],
    track: { T1: "○", T2: "○", T3: "●" },
    sub: [
      { n: "Prompt/Context Engineering และ RAG", lv: "L2–L3", tools: "LLM APIs, Vector DB, LangChain" },
      { n: "AI Agents, Agentic & Compound AI Workflows", lv: "L3", tools: "LangGraph, Tool Use, Orchestration" },
      { n: "การคัดเลือกและประเมินโมเดล GenAI เชิงพาณิชย์", lv: "L2–L3", tools: "Llama vs GPT, LLM-as-judge, MLflow" },
      { n: "LLM Red-teaming และการประเมิน Hallucination/Safety", lv: "L3", tools: "Project Moonshot, Guardrails" },
      { n: "การประมวลผลภาษาไทย (Thai NLP)", lv: "L2", tools: "AI for Thai, HuggingFace" }
    ],
    assess: "โครงงานระบบเอเจนต์ · Demo · รายงานคัดเลือก/ประเมินโมเดล + Baseline Safety Report",
    courses: ["EN-131-101","EN-132-108"] },

  { id: "AISK07", g: "G5", type: "Hybrid",
    name: "AI ที่รับผิดชอบ ความปลอดภัย และธรรมาภิบาล",
    en: "Responsible AI, Security & Governance", skills: ["H7","S7"], plo: [4],
    track: { T1: "●", T2: "●", T3: "●" },
    sub: [
      { n: "ความปลอดภัยของ AI และความเป็นส่วนตัว (Data Poisoning, Model Inversion, PDPA)", lv: "L2–L3", tools: "Threat Modeling, PDPA Checklist" },
      { n: "Responsible AI / ธรรมาภิบาล (AI Verify 11 หลักการ + ISO 42001 + NIST AI RMF)", lv: "L2–L3", tools: "AI Verify Toolkit, Model Card" },
      { n: "การจัดทำหลักฐานเชิงประจักษ์ทางธรรมาภิบาล (Audit Evidence)", lv: "L3", tools: "Fairness Report, Robustness Log" },
      { n: "จรรยาบรรณวิชาชีพในสถานการณ์จริง", lv: "L3", tools: "Case Study, Employer Rubric" }
    ],
    assess: "Case Study · Model Card / Fairness Report / Robustness Log ตามกรอบ AI Verify · Employer Evaluation",
    courses: ["GE-010-003","EN-131-101","EN-131-104","EN-131-105","EN-131-108","EN-132-104","EN-134-101","EN-134-102","EN-135-401"] },

  { id: "AISK08", g: "G6", type: "Soft",
    name: "การปฏิบัติวิชาชีพและความเป็นผู้ประกอบการ",
    en: "Professional & Entrepreneurial Practice", skills: ["S1","S2","S3","S4","S5","S6","S8"], plo: [3,5,7],
    track: { T1: "●", T2: "●", T3: "●" },
    sub: [
      { n: "การคิดวิเคราะห์เชิงระบบ", lv: "L3", tools: "System Map, Root-cause" },
      { n: "การสื่อสารเชิงวิชาชีพและภาษาอังกฤษเทคนิค", lv: "L3–L4", tools: "Slides, รายงาน, Technical English" },
      { n: "การทำงานเป็นทีมและภาวะผู้นำ", lv: "L4", tools: "Git, Team Charter, 360° Feedback" },
      { n: "ผู้ประกอบการและการบริหารโครงการ", lv: "L2–L3", tools: "BMC, Lean Canvas, Gantt" },
      { n: "การเรียนรู้ตลอดชีวิตและการปรับตัว", lv: "L3", tools: "Learning Portfolio" },
      { n: "Digital Transformation · Compound AI · Inclusive & Accessible Design", lv: "L2–L3", tools: "DX Canvas, Inclusive Design Checklist" }
    ],
    assess: "Group Project Assessment · Seminar Presentation · 360° จากสหกิจ · แผนธุรกิจ · Learning Portfolio",
    courses: ["EN-001-021","EN-132-101","EN-134-101","EN-134-102","EN-134-103","EN-135-401"] }
];

/* ─── ขั้นที่ 5 · KSA ราย PLO ─── */
export const KSA = {
  1: { k: "คณิตศาสตร์วิศวกรรม (พีชคณิตเชิงเส้น · แคลคูลัส · ความน่าจะเป็น) · สถิติและการอนุมาน · Optimization/Gradient Descent · ฟิสิกส์วิศวกรรม (กลศาสตร์ · เทอร์โมฟลูอิด · วัสดุ) · การนิยามปัญหา · Engineering Modeling · Trade-off Analysis",
       s: [["H1","L3"],["S1","L3"],["S2","L2–L3"]], sExtra: "ฐานวิศวกรรมกายภาพ → AISK02/AISK03",
       a: "ยึดหลักฐานและเหตุผลเชิงปริมาณ · ความละเอียดรอบคอบเชิงวิศวกรรม (rigor) · ไม่ด่วนสรุป ตรวจสอบสมมติฐานก่อนตัดสินใจ" },
  2: { k: "System Architecture · Requirement Engineering · Design under Constraints · Sustainable Design · CAD/การเขียนแบบ · สถาปัตยกรรม IoT–Edge–Cloud · ML System Design · Microservices · Digital Twin · Safety Factor",
       s: [["H2","L3"],["H4","L2–L3"],["H5","L2–L3"],["H9","L2–L3"],["S2","L3"]], sExtra: "ฐานกายภาพ+กลไกฟาร์ม → AISK02",
       a: "คำนึงถึงผู้ใช้และความยั่งยืน · ยอมรับข้อจำกัดจริงและออกแบบให้ดูแลรักษาได้ · รับผิดชอบต่อคุณภาพและความปลอดภัยของระบบ" },
  3: { k: "Technical Writing (ไทย/อังกฤษ) · Data Storytelling · Data Visualization · Dashboard Design · IMRaD · Audience Adaptation · Technical English",
       s: [["S4","L3"],["H3","L2–L3"]], sExtra: "",
       a: "ยึดผู้รับสารเป็นศูนย์กลาง (clarity over jargon) · ความซื่อตรงในการนำเสนอข้อมูล · เปิดรับคำถามและข้อโต้แย้ง" },
  4: { k: "Responsible AI · AI Ethics · AI Governance · PDPA/Data Privacy · Cybersecurity · Bias/Fairness · Explainability · ISO/IEC 42001 · NIST AI RMF · จรรยาบรรณวิศวกร · กฎหมายโดรน",
       s: [["H7","L2–L3"],["S7","L2"]], sExtra: "",
       a: "ความซื่อสัตย์ทางวิชาการและวิชาชีพ · ความรับผิดชอบต่อสังคม/สิ่งแวดล้อม · เคารพความเป็นส่วนตัวของข้อมูล · กล้ายืนหยัดในสิ่งที่ถูกต้อง" },
  5: { k: "Team Roles · Team Charter · Project Planning · Conflict Management · Psychological Safety · Agile/Scrum · Peer Assessment · Leadership Styles",
       s: [["S5","L3–L4"],["S2","L2"]], sExtra: "",
       a: "รับผิดชอบต่อผลลัพธ์ร่วม · รับฟังและเคารพความเห็นต่าง · ความน่าเชื่อถือ/ตรงต่อเวลา · ภาวะผู้นำเชิงบริการ" },
  6: { k: "Design of Experiments · Hypothesis Testing · Data Cleaning · Feature Engineering · Model Evaluation Metrics · ETL/Pipeline · Big Data · Time-Series · Data Governance · Data-Centric AI",
       s: [["H3","L3"],["H1","L3"],["H14","L2"],["H11","L3"],["H8","L2–L3"],["S1","L3"]], sExtra: "",
       a: "ความเที่ยงตรงและทำซ้ำได้ (reproducibility) · สงสัยข้อมูลที่ผิดปกติ · ไม่ cherry-pick ผลลัพธ์ · เคารพความไม่แน่นอน" },
  7: { k: "Self-directed Learning · Technology Watch · Emerging AI (GenAI/Agentic) · Business Model Canvas · Value Proposition · Feasibility/ROI · IP · Go-to-Market · Learning Portfolio",
       s: [["S6","L2–L3"],["S3","L3"],["H6","L2–L3"]], sExtra: "",
       a: "ความอยากรู้อยากเห็น (curiosity) · เปิดรับการเปลี่ยนแปลงและความล้มเหลว (growth mindset) · ริเริ่ม/ลงมือ · เรียนรู้ด้วยตนเองต่อเนื่อง" }
};

/* ─── Graduate Attributes (GA) ↔ มาตรฐานสากล ─── */
export const GA = [
  { id: "GA1", name: "ความรู้และการแก้ปัญหาเชิงวิศวกรรม", skills: "H1, H2, H3", wa: "WA1 Engineering Knowledge, WA2 Problem Analysis", abet: "SO(1)", plo: [1,6] },
  { id: "GA2", name: "การออกแบบและพัฒนาระบบอัจฉริยะ", skills: "H4 MLOps, H5 Automation/Robotics, H6 GenAI/Agents, H8 Vision, H9 IoT/Edge", wa: "WA3 Design/Development of Solutions, WA4 Investigation, WA5 Tool Usage", abet: "SO(2), SO(6)", plo: [2] },
  { id: "GA3", name: "การสื่อสาร ทีม และจริยธรรมวิชาชีพ", skills: "S4 Communication/English, S5 Teamwork/Leadership, H7 AI Security/Responsible AI", wa: "WA8 Ethics, WA9 Individual & Collaborative Team Work, WA10 Communication", abet: "SO(3), SO(4), SO(5)", plo: [3,4,5] },
  { id: "GA4", name: "การคิดวิเคราะห์และการเรียนรู้ตลอดชีวิต", skills: "S1 Analytical/Systems Thinking, S2 Creative Problem-Solving, S3 Adaptability/Lifelong Learning", wa: "WA2 Problem Analysis, WA12 Lifelong Learning", abet: "SO(7)", plo: [1,7] },
  { id: "GA5", name: "ความเป็นผู้ประกอบการและผลกระทบต่อสังคม", skills: "S6 Product/Entrepreneurial/Project Management", wa: "WA6 The Engineer and the World", abet: "SO(2), SO(7)", plo: [7,2] }
];

/* ─── การอ้างอิงกลับไปยัง Vault ─── */
export const REFS = [
  { step: 1, title: "ผู้มีส่วนได้ส่วนเสีย (SH1–SH8)", file: "03_OBE_PLO_Design_2570/01_Stakeholder_Needs.md" },
  { step: 2, title: "ความต้องการ (N1–N18)", file: "03_OBE_PLO_Design_2570/01_Stakeholder_Needs.md" },
  { step: 3, title: "ลักษณะบัณฑิต (GA1–GA5)", file: "03_OBE_PLO_Design_2570/02_Graduate_Attributes.md" },
  { step: 4, title: "ทักษะเป้าหมาย (H1–H15 · S1–S8)", file: "03_OBE_PLO_Design_2570/03_Target_Skills.md" },
  { step: 5, title: "ชุดทักษะและ KSA (EN-AISK01–08 · G1–G6)", file: "05_TQF2_Academic_Drafts/11_Skill_Set_Matrix_and_KSA.md" },
  { step: 6, title: "ผลลัพธ์ระดับหลักสูตร (PLO1–7)", file: "03_OBE_PLO_Design_2570/04_PLOs_7_OBE.md" },
  { step: 7, title: "ผลลัพธ์รายชั้นปี (YLO1–4 · Sub-YLO 16 ข้อ)", file: "05_TQF2_Academic_Drafts/09_Yearly_Learning_Outcomes.md" },
  { step: 8, title: "ผลลัพธ์รายวิชา (CLO) + KSA รายวิชา", file: "05_TQF2_Academic_Drafts/10_Course_Learning_Outcomes_CLO_Mapping.md" },
  { step: 9, title: "Curriculum Mapping รายวิชา × PLO", file: "03_OBE_PLO_Design_2570/07_Curriculum_PLO_Mapping.md" },
  { step: 10, title: "คำอธิบายรายวิชา (ไทย–อังกฤษ)", file: "04_Course_Descriptions_2570/" }
];

export const BENCHMARKS = [
  { name: "IMDA Skills Framework for ICT (GenAI TSC #1–#9)", use: "ยกระดับ AISK06 (Model Selection/Evaluation) และ AISK07 (TSC#8/#9)", org: "สิงคโปร์" },
  { name: "AI Verify — 11 หลักการธรรมาภิบาล (Outcome/Process/Evidence)", use: "เปลี่ยนจริยธรรม (Attitude) เป็น Hard Skill ที่วัดได้ใน AISK07", org: "IMDA / AI Verify Foundation" },
  { name: "Project Moonshot — LLM Red-teaming (5 ความเสี่ยง)", use: "AISK06 ย่อย 4 และเงื่อนไข Capstone สำหรับโครงงาน GenAI", org: "AI Verify Foundation" },
  { name: "ACM/IEEE-CS/AAAI CS2023", use: "เติม Symbolic/Neurosymbolic AI เข้า AISK01 ย่อย 3", org: "สากล" },
  { name: "ISO/IEC 42001 · NIST AI RMF · EU AI Act", use: "มาตรฐานธรรมาภิบาลใน AISK07 ย่อย 2", org: "สากล" },
  { name: "NUS BComp(AI) 3 เสาหลัก · BAIS · AI Singapore AIAP", use: "โครงสร้าง AISK01 (Learning/Reasoning) และ Full-stack AI Solutioning", org: "สิงคโปร์" },
  { name: "SG ICT Career Maps (8 Tracks / 123 roles)", use: "ยืนยันเส้นทางอาชีพของ 3 Tracks", org: "สิงคโปร์" },
  { name: "WEF Future of Jobs 2025 · TDRI · สอวช.", use: "หลักฐานอุปสงค์ตลาดแรงงานสำหรับ N1–N18", org: "สากล/ไทย" }
];
