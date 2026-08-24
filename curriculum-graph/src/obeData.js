// ห่วงโซ่การวิเคราะห์ OBE — Stakeholder → Needs → Skills → Skill Set → PLO → YLO → CLO → KSA
// ซิงก์จาก Vault: 03_OBE_PLO_Design_2570/{01_Stakeholder_Needs, 02_Graduate_Attributes, 03_Target_Skills, 04_PLOs_7_OBE}
//                05_TQF2_Academic_Drafts/{09_Yearly_Learning_Outcomes, 10_CLO_Mapping, 11_Skill_Set_Matrix_and_KSA}
// และเล่มหลักสูตรฉบับ OBE v4 (พันธกิจ/ปรัชญา/GA↔WA↔ABET)

/* ─── ขั้นที่ 1 · ผู้มีส่วนได้ส่วนเสีย ─── */
export const STAKEHOLDERS = [
  { id: "SH1", name: "นายจ้าง ผู้ประกอบการ และผู้ใช้บัณฑิต", sample: 39, prio: "HPHI", needs: ["N1","N2","N3","N4","N5","N6","N7","N10","N11"],
    expect: "บัณฑิตทำงานได้จริง บูรณาการวิศวกรรม–AI จัดการข้อมูล Deploy ระบบอย่างคุ้มค่า ปลอดภัย และทำงานเป็นทีมได้" },
  { id: "SH2", name: "ผู้เชี่ยวชาญอุตสาหกรรมและนักวิชาชีพ", sample: 19, prio: "HPHI", needs: ["N1","N3","N4","N5","N6","N9","N12","N13","N16","N18"],
    expect: "เนื้อหาทันเทคโนโลยีและมาตรฐานวิชาชีพ มีความลึกตาม Track เข้าใจกระบวนการจริง จริยธรรม และข้อกำกับ" },
  { id: "SH3", name: "นักศึกษาปัจจุบัน", sample: 105, prio: "LPHI", needs: ["N6","N7","N8","N9","N10"],
    expect: "ได้ใช้อุปกรณ์จริง เรียนแบบ Workshop/Project มีเส้นทางการเรียนชัดเจน และเตรียมพร้อมสู่อาชีพ" },
  { id: "SH4", name: "ศิษย์เก่า", sample: 29, prio: "LPHI", needs: ["N3","N6","N7","N9","N10","N11"],
    expect: "หลักสูตรสอดคล้องงานจริง ลดช่องว่างทักษะ สนับสนุนการพัฒนาอาชีพและการเรียนรู้ตลอดชีวิต" },
  { id: "SH5", name: "นักเรียนมัธยมและผู้เรียนในอนาคต", sample: 112, prio: "LPLI", needs: ["N6","N7","N8","N9","N11","N17"],
    expect: "เห็นเส้นทางการเรียนและอาชีพ เข้าใจความแตกต่างของ 3 Tracks และเข้าถึงโอกาสทางการศึกษา" },
  { id: "SH6", name: "ผู้ปกครอง", sample: 37, prio: "LPHI", needs: ["N3","N11","N17"],
    expect: "คุณภาพและความปลอดภัยของการศึกษา ค่าใช้จ่ายเหมาะสม และมีโอกาสได้งานในภาคอีสาน" },
  { id: "SH7", name: "คณาจารย์และผู้บริหารหลักสูตร", sample: 9, prio: "HPHI", needs: ["N1","N4","N6","N7","N8","N9","N10","N12","N13","N15","N16","N18"],
    expect: "โครงสร้างหลักสูตรต่อเนื่อง สอนได้จริง ประเมินตาม OBE ได้ ทันเทคโนโลยี และสอดคล้องทรัพยากร" },
  { id: "SH8", name: "ผู้ทรงคุณวุฒิและผู้ประเมินภายนอก", sample: 5, prio: "HPLI", needs: ["N1","N2","N4","N5","N9","N10","N12","N13","N15","N16","N18"],
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
    evidence: "Pain point อันดับ 1 ของผู้ใช้บัณฑิต · ทักษะวิศวกรรมแกนหลัก 4.22/5", sets: ["AISK02","AISK03","AISK04","AISK01"], plo: [1,2], level: "star" },
  { id: "N2", src: "survey", text: "ทักษะวิศวกรรมข้อมูลครบวงจร: เก็บ ทำความสะอาด วิเคราะห์ และสร้างโมเดล ML/DL/CV",
    evidence: "Pain point ข้อมูลไร้ระเบียบ/ไม่มีคุณภาพ · AI เชิงลึก 4.19 · Data & Cloud 4.07", sets: ["AISK01","AISK05"], plo: [6,2], level: "ok" },
  { id: "N3", src: "survey", text: "ออกแบบ Deploy และ Scale ระบบ AI ภายใต้ข้อจำกัดงบประมาณ ผู้ใช้ดูแลเองได้",
    evidence: "Pain point งบโครงสร้างพื้นฐานสูง · ระบบพัฒนาแล้วใช้งานจริงไม่ได้", sets: ["AISK01","AISK04","AISK02"], plo: [2], level: "ok" },
  { id: "N4", src: "survey", text: "จริยธรรม AI ความมั่นคงปลอดภัยไซเบอร์ และการตรวจสอบผลลัพธ์ AI ก่อนใช้งาน",
    evidence: "คะแนนความสำคัญสูงสุด 4.26/5 · Pain point ขาดความรู้จริยธรรม/ไซเบอร์", sets: ["AISK07","AISK06"], plo: [4], level: "star" },
  { id: "N5", src: "survey", text: "สมรรถนะเฉพาะแขนง: T1 Precision Farming · T2 PLC-SCADA/หุ่นยนต์ · T3 GenAI-LLM/MLOps",
    evidence: "เสียงนำรายแทรค: PLC/SCADA และหุ่นยนต์ · พยากรณ์ผลผลิต · GenAI/LLM", sets: ["AISK02","AISK03","AISK05","AISK06"], plo: [1,2], level: "star" },
  { id: "N6", src: "survey", text: "การเรียนรู้แบบลงมือปฏิบัติ: อุปกรณ์จริง Workshop โครงงานโจทย์จริง และสหกิจศึกษา",
    evidence: "อุปกรณ์จริง 4.87/5 (สูงสุด) · Workshop 4.74 · โครงงาน/สหกิจ 4.57", sets: ["AISK02","AISK03","AISK04"], plo: [2,5], level: "star" },
  { id: "N7", src: "survey", text: "ภาษาอังกฤษเชิงเทคนิค การสื่อสาร การนำเสนอ และการทำงานเป็นทีม",
    evidence: "ประเด็นที่ถูกกล่าวถึงมากสุดทุกกลุ่ม · Soft Skills 4.04", sets: ["AISK08"], plo: [3,5], level: "ok" },
  { id: "N8", src: "survey", text: "ความคิดเชิงผู้ประกอบการ: แปลงโมเดล AI เป็นผลิตภัณฑ์/บริการ/สตาร์ทอัพ",
    evidence: "ผู้เรียนกลุ่มหนึ่งต้องการเป็นนวัตกรหรือสร้างสตาร์ทอัพ", sets: ["AISK08","AISK05"], plo: [7], level: "ok" },
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
    evidence: "ผู้เชี่ยวชาญเฉพาะทางได้ผลตอบแทนสูงกว่า Generalist 30–50% · งาน AI ~75% ต้องการ Domain Expert", sets: ["AISK02","AISK03","AISK05","AISK09"], plo: [1,2], level: "star" }
];

export const NEED_LEVEL = {
  star:  { label: "ตอบตรง/จุดแข็ง", color: "#c0392b" },
  ok:    { label: "ตอบครบถ้วน", color: "#2f9e6b" },
  fixed: { label: "ปรับแล้ว (เดิมตอบทางอ้อม)", color: "#dd8a1e" }
};

/* ─── ขั้นที่ 3 · ทักษะเป้าหมาย H/S ───
   รายละเอียดซิงก์จาก 03_OBE_PLO_Design_2570/03_Target_Skills.md (§3.4 · §3.5b · §3.6 · §3.7b · §3.9)
   PLO ที่รองรับและรายวิชาหลักซิงก์จาก 05_TQF2_Academic_Drafts/11_Skill_Set_Matrix_and_KSA.md §D.1
   track: ● ทักษะหลักของแขนง · ○ ทักษะสนับสนุน · scope=ขอบเขต · market=หลักฐานตลาด
   bench=เทียบเคียงมาตรฐานสากล · level=ระดับเป้าหมาย · act=พฤติกรรมที่คาดหวัง · link=ทักษะแกนที่ผูก */
export const HARD_SKILLS = [
  { id: "HS1", name: "AI/ML Engineering & Applied Mathematics", core: true, set: "AISK01", rank: 1,
    track: { T1: "●", T2: "●", T3: "●" }, plo: [1, 6], courses: ["EN-714-12002", "EN-714-12003", "EN-714-12001"],
    scope: "พัฒนา ประเมิน และปรับปรุงโมเดล Machine Learning/Deep Learning โดยใช้คณิตศาสตร์ สถิติ ความน่าจะเป็น พีชคณิตเชิงเส้น และ Optimization อย่างถูกต้อง ครอบคลุม Supervised/Unsupervised Learning, Neural Networks, Model Evaluation, Explainability และการจัดการ Bias/Overfitting",
    market: "AI/ML Specialists เป็นกลุ่มงานเติบโตเร็ว · Machine Learning ปรากฏสูงในประกาศงาน AI (Stanford/Lightcast)",
    bench: "ACM/IEEE-CS/AAAI CS2023 (ครบทั้ง Symbolic และ Subsymbolic) · เสาหลัก NUS “Reasoning & Decision Making”",
    level: "ทุก Track L3 · โครงงานพัฒนาโมเดลหลัก L4" },

  { id: "HS2", name: "Programming & AI Software Engineering", core: true, set: "AISK01", rank: 2,
    track: { T1: "●", T2: "●", T3: "●" }, plo: [2, 1], courses: ["EN-714-11002", "EN-714-12013"],
    scope: "พัฒนาซอฟต์แวร์ AI ที่ดูแลรักษาและทดสอบได้ด้วย Python, SQL, API, Git, Data Structures and Algorithms, Software Architecture, Automated Testing, CI/CD, Clean Code และการใช้ AI Coding Tools อย่างมีวิจารณญาณ",
    market: "Python พบบ่อยมากในประกาศงาน AI · Software Developers อยู่ในกลุ่มงานเทคโนโลยีที่เติบโตและมีจำนวนงานใหม่สูง · TDRI ระบุเป็นส่วนหนึ่งของ Minimum Viable Stack",
    level: "ทุก Track L3 · T3 และโครงงานซอฟต์แวร์ L4" },

  { id: "HS3", name: "Data Engineering, Analytics & Visualization", core: true, set: "AISK01", rank: 3,
    track: { T1: "●", T2: "●", T3: "●" }, plo: [6, 2, 3], courses: ["EN-714-12004", "EN-714-12010"],
    scope: "ออกแบบ Data Pipeline และจัดการข้อมูลตั้งแต่ ingestion, ETL/ELT, SQL/NoSQL, Data Cleaning, Feature Engineering, Data Quality, Data Governance, Streaming/Big Data ไปจนถึงการวิเคราะห์ การพยากรณ์ และการสื่อสารผลผ่าน Visualization และ Dashboard",
    market: "Big Data Specialists และ Data Engineers เป็นกลุ่มงานเติบโตสูง · SQL, Data Analysis และ Workflow Management อยู่ในทักษะสำคัญของประกาศงาน AI · ไทยเปิดรับ Data Engineer/Data Scientist สูงสุดในภาค ICT (TDRI)",
    level: "ทุก Track L3 · T3 ด้าน Data Platform L4" },

  { id: "HS4", name: "MLOps, Cloud & AI Infrastructure", core: true, set: "AISK01", rank: 4,
    track: { T1: "○", T2: "○", T3: "●" }, plo: [2, 4], courses: ["EN-714-12007", "EN-714-12008"],
    scope: "นำระบบ AI ไปใช้งานจริงด้วย Cloud, Container, Docker, Kubernetes, Model Registry, ML/LLM Pipeline, Monitoring, Drift Detection, Observability, Scalability, Cost/Latency Optimization, GPU/Accelerator และ Edge–Cloud Integration",
    market: "AWS, Automation, Workflow Management และ Scalability พบบ่อยในประกาศงาน AI สะท้อนว่าตลาดต้องการผู้ operationalize ระบบ ไม่ใช่เพียงสร้างโมเดล",
    level: "ทุก Track L2–L3 · T3 L4" },

  { id: "HS5", name: "Industrial Automation, Robotics & Digital Twin", core: true, set: "AISK03", rank: 5,
    track: { T1: "○", T2: "●", T3: "○" }, plo: [2, 1], courses: ["EN-714-12012", "EN-714-12012"],
    scope: "ออกแบบและบูรณาการ PLC/SCADA, Industrial Networks, Robotics, Machine Control, Predictive Maintenance, Simulation, Digital Twin, Machine Vision Interface และ OT/IT Integration สำหรับสายการผลิตและระบบโลจิสติกส์อัตโนมัติ",
    market: "ไทยต้องการ Smart Electronics & Industrial Robotics 226,423 ตำแหน่ง (2568–2572) · การผลิตขั้นสูงคาดใช้ AI 81% และหุ่นยนต์ 69%",
    level: "ทุก Track L2 · T2 L4 · T1 (ระบบอัตโนมัติ) L3" },

  { id: "HS6", name: "Generative AI, LLM & Agentic Systems", core: true, set: "AISK06", rank: 6,
    track: { T1: "○", T2: "○", T3: "●" }, plo: [2, 7], courses: ["EN-714-12001", "EN-714-12014"],
    scope: "พัฒนาและประเมินระบบ Generative AI/LLM ด้วย Prompt and Context Engineering, RAG, Embeddings, Vector Database, Fine-tuning, Multimodal Models, Tool Use, AI Agents, Agentic Workflows, Model Selection & Evaluation, LLM Red-teaming และ Guardrails",
    market: "LinkedIn ระบุ AI Agents เป็นทักษะ AI ที่เติบโตเร็วที่สุดในปี 2025 · Stanford/Lightcast พบการเติบโตสูงของ Generative AI, LLM, RAG และ Context Engineering",
    bench: "IMDA GenAI TSC#3–#7, #9 (Model Selection/Evaluation/App Dev/Fine-tuning/Security) · Project Moonshot (LLM Red-teaming)",
    level: "ทุก Track L2 · T3 L4" },

  { id: "HS7", name: "AI Security, Privacy, Safety & Responsible AI", core: true, set: "AISK07", rank: 7,
    track: { T1: "●", T2: "●", T3: "●" }, plo: [4], courses: ["EN-714-12005", "EN-714-12008", "EN-714-12017", "EN-714-12018"],
    scope: "ออกแบบและตรวจสอบระบบ AI ให้ปลอดภัยและรับผิดชอบ ครอบคลุม Cybersecurity, Data Privacy/PDPA, Threat Modeling, Secure MLOps, Prompt Injection and Data Poisoning Defense, Model/Agent Guardrails, Robustness, Fairness, Explainability, AI Governance และ Regulatory Compliance",
    market: "Networks and Cybersecurity เป็นทักษะเติบโตเร็วอันดับต้นตาม WEF · BLS คาดงาน Information Security Analysts โต 29% · Responsible AI ปรากฏใน 15% ของประกาศงาน AI ไทย (TDRI)",
    bench: "AI Verify 11 หลักการ (Outcome/Process/Evidence) · ISO/IEC 42001 · NIST AI RMF · EU AI Act · IMDA GenAI TSC#8/#9 · ACM/IEEE/IFIP/ABET Cybersecurity",
    level: "ทุก Track L3 · ผู้รับผิดชอบระบบ production L4" },

  { id: "HS8", name: "Computer Vision, Remote Sensing & Multimodal AI", core: true, set: "AISK05", rank: 8,
    track: { T1: "●", T2: "●", T3: "○" }, plo: [2, 6], courses: ["EN-714-12006", "EN-714-12015"],
    scope: "พัฒนาระบบ Image Processing, Object Detection, Segmentation, Tracking, Quality Inspection, Multispectral/Hyperspectral Analysis, UAV/Remote Sensing, GeoAI และ Multimodal Data Fusion สำหรับภาคสนามและสายการผลิต",
    market: "Visual Image Recognition และ Multimodal Models ปรากฏในข้อมูลประกาศงาน AI · เชื่อมตรงกับการตรวจโรค/ผลผลิตใน T1 และ Quality Inspection ใน T2",
    level: "ทุก Track L2 · T1–T2 L4" },

  { id: "HS9", name: "IoT, Embedded, Edge AI & Sensor Networks", core: true, set: "AISK04", rank: 9,
    track: { T1: "●", T2: "○", T3: "○" }, plo: [2, 1], courses: ["EN-714-12005", "EN-714-11006"],
    scope: "ออกแบบและบูรณาการ Sensor, Microcontroller, Embedded Linux, MQTT/Industrial Protocols, Wireless/LPWAN, Edge Computing, TinyML/Edge AI, Real-time Acquisition, Device Management และ Edge–Cloud Security สำหรับระบบอัจฉริยะในพื้นที่จริง",
    market: "Sensor Networks เป็นหนึ่งในเทคโนโลยีที่ WEF ระบุว่าจะเปลี่ยนงานเกษตรและการผลิต และเป็นโครงสร้างพื้นฐานสำคัญของ Smart Agriculture",
    level: "ทุก Track L2 · T1 L4 · T2 L3" },

  { id: "HS10", name: "NLP & Thai NLP / Sovereign AI", core: false, set: "AISK06", rank: 10,
    track: { T1: "○", T2: "○", T3: "●" }, plo: [2, 7], courses: ["EN-714-12014"], link: "HS6",
    scope: "พัฒนาระบบประมวลผลภาษาธรรมชาติ ครอบคลุม Tokenization, Text Classification, NER, Information Extraction, Semantic Search และการต่อยอดภาษาไทย (Thai NLP) บนโครงสร้างพื้นฐาน AI ของประเทศ (AI for Thai, ThaiLLM)",
    market: "NLP เป็นทักษะเทคนิคที่ประกาศงานโตเร็วที่สุด +155% YoY และเป็นกลุ่มค่าตอบแทนสูง (Second Talent 2026) · ตอบ Need N15 โดยตรง",
    level: "ทุก Track L2 · T3 L4" },

  { id: "HS11", name: "Time-Series Forecasting & Predictive Analytics", core: false, set: "AISK05", rank: 11,
    track: { T1: "●", T2: "●", T3: "○" }, plo: [6, 2], courses: ["EN-714-12010", "EN-714-12011", "EN-714-12012"], link: "HS1, HS3",
    scope: "วิเคราะห์และพยากรณ์ข้อมูลเชิงเวลา (Seasonality, Trend, Anomaly Detection) เพื่อพยากรณ์ผลผลิต ราคา ความต้องการ และการบำรุงรักษาเชิงพยากรณ์ (Predictive Maintenance)",
    market: "เป็นแกนของ Precision Farming (พยากรณ์ผลผลิต T1) และ Predictive Maintenance ในสายการผลิต (T2) ที่ผู้ใช้บัณฑิตระบุเป็นเทคโนโลยีนำรายแขนง",
    level: "T1–T2 L3–L4 · T3 L2" },

  { id: "HS12", name: "Big Data & Distributed / Streaming Systems", core: false, set: "AISK01", rank: 12,
    track: { T1: "○", T2: "○", T3: "●" }, plo: [6], courses: ["EN-714-12004"], link: "HS3, HS4",
    scope: "ประมวลผลข้อมูลขนาดใหญ่และแบบสตรีมด้วย Spark, Kafka, Data Lake/Lakehouse, Distributed Storage และ Real-time Pipeline",
    market: "Big Data Specialists เป็นกลุ่มงานโตสูง (WEF) · ไทยเปิดรับ Data Engineer/Data Scientist สูงสุดในภาค ICT (TDRI)",
    level: "T3 L3–L4 · T1–T2 L2" },

  { id: "HS13", name: "Reinforcement Learning, Optimization & OR", core: false, set: "AISK03", rank: 13,
    track: { T1: "○", T2: "●", T3: "○" }, plo: [1, 2], courses: ["EN-714-12010", "EN-714-12012"], link: "HS1, HS5",
    scope: "ประยุกต์ Reinforcement Learning, Mathematical Optimization และ Operations Research กับปัญหาการควบคุม การจัดตาราง การวางแผนทรัพยากร และการควบคุมหุ่นยนต์/กระบวนการ",
    market: "RL ปรากฏใน ~9% ของงาน AI (recommendation, robotics, control) · เป็นแกนของ Industrial Optimization และ Autonomous Control (T2)",
    level: "T2 L3 · T1/T3 L2" },

  { id: "HS14", name: "Data-Centric AI & Annotation Operations", core: false, set: "AISK01", rank: 14,
    track: { T1: "●", T2: "○", T3: "●" }, plo: [6], courses: ["EN-714-12004"], link: "HS3",
    scope: "จัดการคุณภาพข้อมูลแบบ Data-Centric: Labeling Strategy, Annotation Tools, Inter-annotator Agreement, Active Learning, Synthetic Data และ Human-in-the-Loop",
    market: "Data Annotator เป็นตำแหน่ง AI ที่โตเร็วที่สุดในไทย +586% (115→789 ตำแหน่ง/ไตรมาส) ตาม TDRI · คุณภาพข้อมูลคือ Pain point อันดับต้นของผู้ใช้บัณฑิต (9/27)",
    level: "ทุก Track L2 · ผู้ทำ Data Platform L3" },

  { id: "HS15", name: "Green / Sustainable AI & Model Efficiency", core: false, set: "AISK02", rank: 15,
    track: { T1: "●", T2: "○", T3: "○" }, plo: [4, 2], courses: ["EN-714-11005", "EN-714-12011"], link: "HS4, HS9",
    scope: "ออกแบบ AI ที่ประหยัดพลังงานและทรัพยากร: Model Compression, Quantization, Distillation, Efficient Inference, TinyML Optimization และการวัด Carbon/Energy Footprint",
    market: "Environmental Stewardship ติด 10 ทักษะเติบโตเร็วของ WEF เป็นครั้งแรก · ตอบ Need N12 (Green AI/BCG) และเสริมการ deploy บน Edge ที่ทรัพยากรจำกัด (T1)",
    level: "ทุก Track L1–L2 · Edge/MLOps L3" },

  { id: "HS16", name: "Smart Agriculture, Precision Agriculture & Agri-food Systems", core: false, set: "AISK02", rank: 16,
    track: { T1: "●", T2: "○", T3: "○" }, plo: [2,4,6], courses: ["EN-714-12011","EN-714-12015","EN-714-12009"],
    scope: "ออกแบบระบบเกษตรแม่นยำตั้งแต่ sensing, irrigation/input control, farm data, GeoAI/UAV, forecasting และ traceability พร้อมประเมินน้ำ พลังงาน ต้นทุน คาร์บอน และความน่าเชื่อถือ",
    market: "เชื่อมตรงกับ C03 และอาชีพ Smart Agriculture, Agricultural IoT, UAV/GeoAI และ Agricultural Automation",
    level: "ทุก Track L1–L2 · T1 L3–L4" },

  { id: "HS17", name: "Smart Manufacturing, Process, Production, Quality & MES", core: false, set: "AISK03", rank: 17,
    track: { T1: "○", T2: "●", T3: "○" }, plo: [2,4,6], courses: ["EN-714-12012","EN-714-12012"],
    scope: "บูรณาการ Smart Manufacturing, MES/ERP, Digital Twin, OEE, SPC, traceability, Lean/Six Sigma และ AI quality inspection เพื่อปรับปรุงกระบวนการผลิต",
    market: "รองรับ C04, Smart Factory, Process/Production, Quality และ Industrial AI",
    level: "ทุก Track L1–L2 · T2 L3–L4" },

  { id: "HS18", name: "Maintenance, Reliability & Asset Intelligence", core: false, set: "AISK03", rank: 18,
    track: { T1: "○", T2: "●", T3: "○" }, plo: [2,4,6], courses: ["EN-714-12012","EN-714-12009","EN-714-14017"],
    scope: "วิเคราะห์สภาพสินทรัพย์และความขัดข้องด้วย condition monitoring, RCA, FMEA, reliability baseline, predictive maintenance และ CMMS พร้อมวางแผนการบำรุงรักษา",
    market: "รองรับงาน AI Maintenance, Reliability และ Asset/Plant Engineering",
    level: "ทุก Track L1–L2 · T2 L3–L4" },

  { id: "HS19", name: "Decision Intelligence, BI, DSS & Operations Analytics", core: false, set: "AISK05", rank: 19,
    track: { T1: "●", T2: "●", T3: "●" }, plo: [2,3,6], courses: ["EN-714-12004","EN-714-12010"],
    scope: "พัฒนาระบบ BI/DSS และแบบจำลองตัดสินใจด้วย forecasting, scenario, simulation, optimization, uncertainty analysis, dashboard และ decision communication",
    market: "รองรับ C02, C06, C07, C11, C12 และ C15 ที่ต้องใช้ข้อมูลเพื่อการตัดสินใจและการดำเนินงาน",
    level: "ทุก Track L3 · โครงงาน DSS L4" },

  { id: "HS20", name: "Enterprise Solution Architecture, Integration & Digital Services", core: false, set: "AISK09", rank: 20,
    track: { T1: "○", T2: "○", T3: "●" }, plo: [2,3,4,7], courses: ["EN-714-12009","EN-714-12013","EN-714-12014"],
    scope: "แปลงปัญหาเป็น requirements, architecture, API/interface contract, integration, testing/UAT, observability, runbook, handover และ digital-service operation",
    market: "ปิดช่องว่างงาน AI Solution, System Integration, Enterprise AI และ AI Product/Consulting",
    level: "ทุก Track L2–L3 · T3 L4" }
];

export const SOFT_SKILLS = [
  { id: "SS1", name: "Analytical, Critical & Systems Thinking", core: true, set: "AISK08", rank: 1,
    track: { T1: "●", T2: "●", T3: "●" }, plo: [1, 6], courses: ["EN-714-12018"],
    scope: "วิเคราะห์เหตุและผล มองความสัมพันธ์ขององค์ประกอบทั้งระบบ ตรวจสอบสมมติฐาน ประเมินความน่าเชื่อถือของข้อมูลและผลลัพธ์ AI และตัดสินใจโดยใช้หลักฐาน",
    market: "WEF ระบุ Analytical Thinking เป็นทักษะแกนที่นายจ้างต้องการมากที่สุด และ Systems Thinking สำคัญเพิ่มขึ้นจาก AI, Robotics และ Automation",
    act: "สร้าง problem model, causal/system map, เปรียบเทียบทางเลือก และอธิบายเหตุผลได้",
    level: "ทุก Track L3 · แทรกในทุกโครงงาน" },

  { id: "SS2", name: "Creative Problem-Solving & Engineering Judgment", core: true, set: "AISK08", rank: 2,
    track: { T1: "●", T2: "●", T3: "●" }, plo: [1, 2], courses: ["EN-714-12019"],
    scope: "กำหนดปัญหาจริง สร้างทางเลือกที่เป็นไปได้ ทดลองอย่างรวดเร็ว และเลือกแนวทางภายใต้ข้อจำกัดด้านข้อมูล เวลา งบประมาณ ความปลอดภัย และผลกระทบ",
    market: "Creative Thinking เป็นทั้งทักษะแกนและทักษะเติบโตสูง · งาน Intelligent Systems ต้องใช้วิจารณญาณและการกำกับเครื่องจักรอัตโนมัติ",
    act: "Problem framing, trade-off analysis, prototype iteration และการตัดสินใจภายใต้ความไม่แน่นอน",
    level: "ทุก Track L2–L3 · Capstone L4" },

  { id: "SS3", name: "Adaptability, Resilience & Lifelong Learning", core: true, set: "AISK08", rank: 3,
    track: { T1: "●", T2: "●", T3: "●" }, plo: [7], courses: ["EN-714-12007", "EN-714-12018"],
    scope: "ประเมินช่องว่างความรู้ วางแผนเรียนรู้ด้วยตนเอง ทดลองใช้เทคโนโลยีใหม่ รับและใช้ข้อเสนอแนะ และปรับตัวต่อความล้มเหลวหรือการเปลี่ยนแปลงของเครื่องมือและข้อกำหนด",
    market: "WEF จัด Resilience/Flexibility/Agility ไว้ในกลุ่มทักษะแกนสูงสุด และ Curiosity/Lifelong Learning อยู่ในกลุ่มทักษะที่เพิ่มความสำคัญ ขณะที่ 39% ของชุดทักษะแรงงานมีแนวโน้มเปลี่ยนภายในปี 2030",
    act: "Learning plan, technology review, reflective portfolio และหลักฐานการประยุกต์ใช้ความรู้ใหม่",
    level: "ทุก Track L3" },

  { id: "SS4", name: "Professional Communication, English & Data Storytelling", core: true, set: "AISK08", rank: 4,
    track: { T1: "●", T2: "●", T3: "●" }, plo: [3], courses: ["EN-714-12017", "EN-714-12018", "EN-714-17001"],
    scope: "สื่อสารข้อมูลเทคนิคที่ซับซ้อนด้วยภาษาไทยและอังกฤษผ่านรายงาน การนำเสนอ Visualization, Dashboard และสื่อดิจิทัล โดยปรับสารให้เหมาะกับวิศวกร ผู้บริหาร เกษตรกร และชุมชน",
    market: "TDRI พบการสื่อสาร + ภาษาอังกฤษ ระบุใน >75% ของประกาศงาน AI (เป็น necessity) · งานอุตสาหกรรมอัจฉริยะต้องใช้ Executive Communication และ Storytelling",
    act: "รายงานเทคนิค การนำเสนอ การตอบคำถาม และการอธิบายผล AI ต่อผู้ฟังต่างกลุ่ม",
    level: "ทุก Track L3–L4" },

  { id: "SS5", name: "Teamwork, Cross-functional Collaboration & Leadership", core: true, set: "AISK08", rank: 5,
    track: { T1: "●", T2: "●", T3: "●" }, plo: [5], courses: ["EN-714-11004", "EN-714-11008", "EN-714-11010", "EN-714-12019"],
    scope: "ทำงานในบทบาทผู้นำและสมาชิกทีม กำหนดเป้าหมาย แบ่งงาน สร้างความปลอดภัยในการแสดงความคิดเห็น จัดการความขัดแย้ง และรับผิดชอบต่อผลลัพธ์ร่วมกัน",
    market: "Leadership and Social Influence อยู่ในกลุ่มทักษะแกนและทักษะที่เติบโตสูง · สอวช. เน้น Job-specific Skills ควบคู่ People Management และ Creative Thinking",
    act: "Team charter, project plan, meeting evidence, peer assessment และผลงานตามบทบาท",
    level: "ทุก Track L3–L4 (สหกิจ/Capstone L4)" },

  { id: "SS6", name: "Product, Entrepreneurial & Project Management Mindset", core: true, set: "AISK08", rank: 6,
    track: { T1: "●", T2: "●", T3: "●" }, plo: [7], courses: ["EN-714-12009", "EN-714-17002"],
    scope: "เปลี่ยนปัญหาและความต้องการของผู้ใช้เป็นคุณค่า ผลิตภัณฑ์ หรือนวัตกรรม ประเมินความเป็นไปได้ด้านเทคนิค ธุรกิจ ต้นทุน ความเสี่ยง และผลกระทบ พร้อมวางแผนและส่งมอบโครงการอย่างเป็นระบบ",
    market: "Project Management เป็นหนึ่งในทักษะที่พบมากในประกาศงาน AI ของ Stanford/Lightcast · ตลาดต้องการผู้ที่เชื่อม AI กับการดำเนินงานและผลลัพธ์ทางธุรกิจ",
    act: "User discovery, value proposition, feasibility/ROI, roadmap, risk register และการส่งมอบ MVP",
    level: "ทุก Track L2–L3" },

  { id: "SS7", name: "Curiosity, AI Literacy & Human–AI Teaming", core: false, set: "AISK07", rank: 7,
    track: { T1: "●", T2: "●", T3: "●" }, plo: [4, 7], courses: ["EN-714-12001"], link: "SS3",
    scope: "ใช้เครื่องมือ AI เป็น “เพื่อนร่วมงาน” อย่างมีวิจารณญาณ — เข้าใจว่า AI ทำอะไรได้/ไม่ได้ ตั้งคำถามและ Prompt อย่างมีประสิทธิภาพ ตรวจสอบผลลัพธ์ และเรียนรู้เครื่องมือใหม่ด้วยความอยากรู้",
    market: "AI Literacy เป็นทักษะหายากอันดับ 2 ของโลก (ManpowerGroup 2026) และ Curiosity & Lifelong Learning ติด 10 ทักษะเติบโตเร็วของ WEF",
    bench: "IMDA GenAI TSC#2 Prompt Design (กลุ่ม AI Users)",
    act: "การใช้ AI tools ในงานอย่างโปร่งใส ตรวจสอบผล และอธิบายข้อจำกัด",
    level: "ทุก Track L2" },

  { id: "SS8", name: "Empathy, Service Orientation & Stakeholder-Centric", core: false, set: "AISK08", rank: 8,
    track: { T1: "●", T2: "●", T3: "●" }, plo: [3, 5], courses: ["EN-714-17001", "EN-714-12009"], link: "SS4, SS5",
    scope: "เข้าใจบริบทและความต้องการของผู้ใช้จริง โดยเฉพาะเกษตรกรและชุมชนท้องถิ่นภาคอีสาน ออกแบบโซลูชันที่ผู้ใช้ดูแลเองได้ และคำนึงถึงผลกระทบทางสังคม",
    market: "Empathy & Active Listening / Service Orientation อยู่ในกลุ่มทักษะแกนของ WEF · ตอบ Need N11 (ตอบโจทย์ชุมชนท้องถิ่น) และ N17 (Inclusive AI)",
    act: "User/Field discovery, การรับฟังผู้ใช้ และการออกแบบที่ยึดผู้ใช้เป็นศูนย์กลาง",
    level: "ทุก Track L2" },

  { id: "SS9", name: "Stakeholder, Requirements & Change Facilitation", core: false, set: "AISK09", rank: 9,
    track: { T1: "●", T2: "●", T3: "●" }, plo: [2,3,5,7], courses: ["EN-714-12009","EN-714-12013","EN-714-12019"],
    scope: "ทำ stakeholder mapping, discovery, requirement negotiation, acceptance criteria, UAT, adoption และ change facilitation ให้ผู้ใช้ ธุรกิจ และทีมเทคนิคเข้าใจตรงกัน",
    market: "ปรากฏสูงในงาน Solution, Product, Project, Consulting และ Digital Transformation",
    act: "Requirements brief, stakeholder map, acceptance package, UAT และ change plan",
    level: "ทุก Track L2–L3" },

  { id: "SS10", name: "Agile Delivery, Quality, Safety & Professional Accountability", core: false, set: "AISK09", rank: 10,
    track: { T1: "●", T2: "●", T3: "●" }, plo: [4,5,6], courses: ["EN-714-11010","EN-714-12012","EN-714-12012","EN-714-12013","EN-714-12009"],
    scope: "ทำงานแบบ iterative โดยรักษาคุณภาพ ความปลอดภัย traceability และความรับผิดชอบต่อผลลัพธ์ ผ่าน test evidence, review, incident learning และ handover",
    market: "เป็นทักษะร่วมของงาน production AI, industrial systems, regulated environments และระบบที่มีผลต่อความปลอดภัย",
    act: "Definition of Done, test/safety dossier, quality review, incident record และ accountable handover",
    level: "ทุก Track L3" }
];

/* ─── ฐานทักษะวิศวกรรมประกอบ EF1–EF6 ───
   แยกจาก HS1–HS20 เพราะ H มาจากอาชีพ AI/ระบบอัจฉริยะ ส่วน EF ทำให้ข้อเสนอ
   ผู้ทรงคุณวุฒิด้าน CAD, thermo-fluid, instrumentation, fluid power, safety
   และ system handover มีเจ้าภาพ CLO/PLO และหลักฐานประเมินที่สอบย้อนกลับได้ */
export const ENGINEERING_FOUNDATIONS = [
  { id: "EF1", name: "Engineering Drawing & System Layout", core: true,
    sets: ["AISK02","AISK03","AISK09"], plo: [2,3],
    track: { T1: "●", T2: "●", T3: "○" }, courses: ["EN-714-11001","EN-714-12012","EN-714-12019"],
    scope: "จัดทำและควบคุมแบบ CAD 2D/3D แบบประกอบ ค่าความคลาดเคลื่อน ผังระบบ P&ID และแบบไฟฟ้าหรือระบบควบคุมสำหรับการติดตั้งและส่งมอบ",
    market: "ฐานวิศวกรรมจากข้อเสนอผู้ทรงคุณวุฒิด้านการเขียนแบบ CAD และการประกาศสมรรถนะ System Integration",
    level: "ทุก Track L2 · T1–T2 และโครงงานบูรณาการ L3" },
  { id: "EF2", name: "Mechanics, Materials, Structures & Fabrication", core: true,
    sets: ["AISK02","AISK03"], plo: [1,2,4],
    track: { T1: "●", T2: "●", T3: "○" }, courses: ["EN-714-11003","EN-714-11004","EN-714-12015"],
    scope: "วิเคราะห์แรง ความเค้น ความล้า เลือกวัสดุและค่าความปลอดภัย แล้วสร้างหรือประกอบโครงสร้างที่ผลิตและบำรุงรักษาได้",
    market: "ฐานวิศวกรรมสำหรับโครงสร้างฟาร์ม เครื่องจักร หุ่นยนต์ และอากาศยานไร้คนขับตามข้อเสนอผู้ทรงคุณวุฒิ",
    level: "ทุก Track L2 · งานสร้างชิ้นงาน T1–T2 L3" },
  { id: "EF3", name: "Thermal-Fluid, Energy & Process Fundamentals", core: true,
    sets: ["AISK02","AISK03"], plo: [1,2,4,6],
    track: { T1: "●", T2: "●", T3: "○" }, courses: ["EN-714-11005","EN-714-11010","EN-714-12011","EN-714-12012"],
    scope: "วิเคราะห์การถ่ายเทความร้อน สมดุลมวลและพลังงาน การไหลในท่อ ปั๊ม พัดลม วาล์ว ระบบอบแห้ง ทำความเย็น และตัวชี้วัดพลังงานหรือคาร์บอน",
    market: "ตอบข้อเสนอผู้ทรงคุณวุฒิด้าน heat transfer, process engineering, พลังงาน และความยั่งยืน BCG",
    level: "ทุก Track L2 · T1–T2 L3" },
  { id: "EF4", name: "Electrical, Electronics & Instrumentation", core: true,
    sets: ["AISK03","AISK04"], plo: [1,2,4,6],
    track: { T1: "●", T2: "●", T3: "○" }, courses: ["EN-714-11006","EN-714-11004","EN-714-12009"],
    scope: "วิเคราะห์วงจรและสัญญาณ เลือกและต่อเซนเซอร์หรือทรานสมิตเตอร์ ปรับสภาพสัญญาณ สอบเทียบ เก็บข้อมูล ประเมินความไม่แน่นอน และติดตั้งอุปกรณ์ป้องกัน",
    market: "ฐานเครื่องมือวัดและการประมวล input–process–output ที่ภาคอุตสาหกรรมและผู้ทรงคุณวุฒิต้องการ",
    level: "ทุก Track L2 · T1–T2 L3" },
  { id: "EF5", name: "Actuation, Fluid Power & Control", core: true,
    sets: ["AISK03","AISK04"], plo: [2,4,6],
    track: { T1: "●", T2: "●", T3: "○" }, courses: ["EN-714-11008","EN-714-12009","EN-714-12012"],
    scope: "บูรณาการมอเตอร์และระบบขับเคลื่อน นิวแมติกส์ ไฮดรอลิกส์ วาล์ว กระบอกสูบ PLC ลำดับควบคุม อินเตอร์ล็อก และการหยุดฉุกเฉิน",
    market: "ตอบข้อเสนอผู้ทรงคุณวุฒิด้านนิวแมติกส์ ไฮดรอลิกส์ เครื่องจักร และการควบคุมระบบจริง",
    level: "ทุก Track L2 · T2 และระบบอัตโนมัติ T1 L3" },
  { id: "EF6", name: "Safety, Standards, Commissioning & Handover", core: true,
    sets: ["AISK07","AISK08","AISK09"], plo: [2,3,4,5,6],
    track: { T1: "●", T2: "●", T3: "●" }, courses: ["EN-714-11004","EN-714-11008","EN-714-11010","EN-714-12012","EN-714-12019","EN-714-17002"],
    scope: "ชี้บ่งอันตรายและความเสี่ยง ใช้มาตรฐานความปลอดภัย ทดสอบส่วนต่อประสานและการยอมรับ ดำเนิน commissioning จัดทำ traceability และเอกสาร handover",
    market: "ปิดช่องว่างผู้ทรงคุณวุฒิด้าน safety, standards, system integrator และหลักฐานการส่งมอบระบบ",
    level: "ทุก Track L3 · โครงงานและสหกิจศึกษาประเมินระดับปลายทาง" }
];

/* เกณฑ์คัดเลือกแกน/ส่วนขยาย (§3.9) */
export const SKILL_CORE_RULE =
  "เกณฑ์เข้าแกนบังคับ: ทักษะต้องผ่าน 3 ใน 4 เงื่อนไข — (ก) ใช้กว้างข้ามหลาย Track/อาชีพ (ข) จำเป็นต่อการสร้างระบบใช้งานจริงตั้งแต่ข้อมูลถึง deployment " +
  "(ค) มีอุปสงค์ตลาดสูงต่อเนื่อง (ง) รองรับ PLO/ABET SO โดยตรง · ทักษะที่หลักฐานแรงแต่ขอบเขตแคบ แตกหน่อจากทักษะแกน หรือเพิ่งอุบัติ จัดเป็นส่วนขยาย";

export const LEVELS = [
  { id: "L1", label: "Understand", th: "เข้าใจ" },
  { id: "L2", label: "Apply", th: "ประยุกต์ใช้" },
  { id: "L3", label: "Integrate", th: "บูรณาการ" },
  { id: "L4", label: "Deploy & Evaluate", th: "นำไปใช้และประเมิน" }
];

/* ─── ขั้นที่ 4 · ชุดทักษะ EN-AISK01–09 ───
   g คงไว้เป็น metadata สีเดิมเท่านั้น; หน้าเว็บเชื่อม AISK ตรงกับ H/S/EF */
export const GROUPS = {
  G1: { name: "แกนวิศวกรรมปัญญาประดิษฐ์", en: "AI Core Engineering", color: "#2f6fb0" },
  G2: { name: "วิศวกรรมโดเมนอัจฉริยะ: สร้างและประกอบโครงสร้างพื้นฐาน กลไก เครื่องจักร", en: "Smart Domain Engineering", color: "#2f9e6b" },
  G3: { name: "ระบบตรวจวัด การรับรู้ และการตัดสินใจอัจฉริยะ", en: "Sensing, Perception & Decision Intelligence", color: "#dd8a1e" },
  G4: { name: "ปัญญาประดิษฐ์เชิงสร้าง ระบบเอเจนต์ และการทำงานร่วมกับ AI", en: "Generative, Agentic & Human–AI Systems", color: "#7b57c9" },
  G5: { name: "ธรรมาภิบาล ความมั่นคงปลอดภัย และการรับรองระบบ", en: "Responsible AI, Security & Assurance", color: "#c0392b" },
  G6: { name: "การสื่อสาร ทีม ภาวะผู้นำ และผู้ประกอบการ", en: "Communication, Teamwork & Entrepreneurship", color: "#0e9aa7" },
  G7: { name: "ข้อกำหนด สถาปัตยกรรม การบูรณาการ และการส่งมอบ", en: "Requirements, Architecture, Integration & Delivery", color: "#536d9a" }
};

export const SKILL_SETS = [
  { id: "AISK01", g: "G1", type: "Hard",
    name: "แกนวิศวกรรม AI: การเรียนรู้ การตัดสินใจ ข้อมูล และซอฟต์แวร์",
    en: "AI Core Engineering Stack", skills: ["HS1","HS2","HS3","HS4","HS12","HS14"], plo: [1,2,6],
    ksa: ["K1", "K5", "K6", "K10", "K11", "K13", "K14", "K15", "K24", "S2", "S4", "S8", "S9", "S10", "S11", "S12", "A1", "A2"],
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
    courses: ["EN-714-11007","EN-714-11002","EN-714-12001","EN-714-12002","EN-714-12007","EN-714-12003","EN-714-12004","EN-714-12008","EN-714-12013"] },

  { id: "AISK02", g: "G2", type: "Hard",
    name: "วิศวกรรมเกษตรอัจฉริยะ",
    en: "Smart Agriculture Engineering — Farm Infrastructure, Mechanics & Machines", skills: ["HS9","HS15","HS16","EF1","EF2","EF3","EF4","EF5"], plo: [1,2,4,6],
    ksa: ["K2", "K3", "K4", "K17", "K18", "K19", "K20", "K23", "K24", "S3", "S14", "S15", "S16", "S17", "S18", "A1", "A4", "A5"],
    track: { T1: "●", T2: "○", T3: "○" },
    sub: [
      { n: "โครงสร้างพื้นฐานและกลไกทางการเกษตร", lv: "L2–L3", tools: "CAD, Statics/Strength Analysis" },
      { n: "การสร้างและประกอบชิ้นงาน/ระบบฟาร์ม (Build & Construct)", lv: "L3", tools: "เครื่องมือช่าง, งานเชื่อม, MCU" },
      { n: "ระบบฟาร์มอัจฉริยะและเกษตรแม่นยำ", lv: "L3–L4", tools: "Sensor Network, Irrigation Control" },
      { n: "ระบบพลังงาน ความร้อน–ของไหล และความยั่งยืนในฟาร์ม", lv: "L2–L3", tools: "Thermo-fluid Analysis, Energy Audit" },
      { n: "ห่วงโซ่เกษตร–อาหารอัจฉริยะ การพยากรณ์ การตรวจสอบย้อนกลับ และระบบสนับสนุนการตัดสินใจ", lv: "L3", tools: "GIS/UAV Data, Time-Series, Traceability, Farm DSS" }
    ],
    assess: "โครงงานสร้าง/ประกอบระบบฟาร์มอัจฉริยะ · ปฏิบัติการภาคสนาม Workshop 1–3 · สหกิจภาคเกษตร",
    courses: ["EN-714-11005","EN-714-11001","EN-714-11003","EN-714-11004","EN-714-11008","EN-714-11010","EN-714-12010","EN-714-12011","EN-714-12015","EN-714-12009","EN-714-12019"] },

  { id: "AISK03", g: "G2", type: "Hard",
    name: "วิศวกรรมอุตสาหกรรมอัจฉริยะและระบบอัตโนมัติ",
    en: "Smart Industry — AI Industrial Engineering & Automation", skills: ["HS5","HS11","HS13","HS17","HS18","EF1","EF2","EF3","EF4","EF5","EF6"], plo: [1,2,4,6],
    ksa: ["K1", "K2", "K3", "K4", "K9", "K12", "K17", "K18", "K19", "K21", "K23", "K24", "S2", "S3", "S7", "S14", "S15", "S16", "S17", "S18", "A1", "A2", "A3", "A4"],
    track: { T1: "○", T2: "●", T3: "○" },
    sub: [
      { n: "ระบบควบคุมอัตโนมัติ PLC/SCADA และเครือข่ายอุตสาหกรรม", lv: "L3–L4", tools: "PLC (Ladder/FBD/ST), SCADA/HMI" },
      { n: "หุ่นยนต์อุตสาหกรรมและ Cobots · ระบบทดแทนแรงงานที่ขาดแคลน", lv: "L2–L3", tools: "ROS, Robot Arm, Safety/Ergonomics" },
      { n: "โรงงานอัจฉริยะ MES/ERP, Digital Twin และการบูรณาการ OT/IT", lv: "L3", tools: "MES/ERP, Simulation, Digital Twin Platform" },
      { n: "การเพิ่มประสิทธิภาพกระบวนการและการผลิต ลีน ซิกซ์ซิกมา คุณภาพ/SPC และ OEE", lv: "L3–L4", tools: "SPC, OEE, Optimization Solver, Lean/Six Sigma" },
      { n: "การบำรุงรักษา ความน่าเชื่อถือ และการจัดการสินทรัพย์อัจฉริยะ", lv: "L3–L4", tools: "RCA, FMEA/FMECA, CMMS/EAM, Condition Monitoring, RUL" }
    ],
    assess: "โครงงานระบบอัตโนมัติ/สายการผลิต · Industry Case Study · รายงานศึกษาดูงาน · สหกิจในโรงงาน",
    courses: ["EN-714-11009","EN-714-11005","EN-714-11001","EN-714-11003","EN-714-11006","EN-714-11010","EN-714-12010","EN-714-12012","EN-714-12012","EN-714-12009","EN-714-12019"] },

  { id: "AISK04", g: "G3", type: "Hard",
    name: "ระบบตรวจวัด การประมวลผลที่ขอบเครือข่าย และระบบไซเบอร์กายภาพ",
    en: "Sensing, Edge & Cyber-Physical Systems", skills: ["HS9","HS5","HS4","EF4","EF5","EF6"], plo: [2,6],
    ksa: ["K4", "K15", "K18", "K19", "K24", "S12", "S15", "S16", "A1", "A4"],
    track: { T1: "●", T2: "●", T3: "○" },
    sub: [
      { n: "IoT เครือข่ายเซนเซอร์ และการรับสัญญาณเรียลไทม์", lv: "L3–L4", tools: "Arduino/RPi, MQTT, LoRa" },
      { n: "Edge AI / TinyML และการประมวลผลที่ขอบเครือข่าย", lv: "L2–L3", tools: "TinyML, Model Quantization" },
      { n: "ระบบไซเบอร์-กายภาพและการบูรณาการ OT/IT", lv: "L3", tools: "PLC↔Edge AI, SCADA Gateway" },
      { n: "ความปลอดภัยและการจัดการอุปกรณ์ Edge–Cloud", lv: "L2", tools: "Device Management, Edge Security" }
    ],
    assess: "System Integration Project (ปฏิบัติการ 3) · สาธิตระบบ IoT–Edge–Cloud · สหกิจศึกษา",
    courses: ["EN-714-11006","EN-714-11008","EN-714-11010","EN-714-12005","EN-714-12008","EN-714-12011","EN-714-12012","EN-714-12012","EN-714-12009"] },

  { id: "AISK05", g: "G3", type: "Hard",
    name: "การรับรู้ การพยากรณ์ และการตัดสินใจด้วยปัญญาประดิษฐ์",
    en: "AI Perception, Prediction & Decision Intelligence", skills: ["HS8","HS11","HS13","HS16","HS17","HS18","HS19"], plo: [1,2,3,6],
    ksa: ["K1", "K7", "K9", "K12", "K13", "K20", "K21", "S2", "S5", "S7", "S10", "S17", "A2"],
    track: { T1: "●", T2: "●", T3: "●" },
    sub: [
      { n: "การรับรู้ของเครื่อง: CV เพื่อการเกษตรและตรวจสอบคุณภาพ", lv: "L3–L4", tools: "OpenCV, YOLO, CNN" },
      { n: "UAV, Remote Sensing และ GeoAI", lv: "L2–L3", tools: "QGIS, NDVI/NDWI, Drone SDK" },
      { n: "การพยากรณ์และวิเคราะห์เชิงทำนาย", lv: "L3", tools: "Time-Series, Forecasting Models" },
      { n: "AI สำหรับองค์กรและธุรกิจ (DSS, Fraud Detection)", lv: "L2–L3", tools: "BI/DSS, Anomaly Detection" },
      { n: "ระบบตัดสินใจอัจฉริยะสำหรับเกษตร การผลิต และองค์กร", lv: "L2–L3", tools: "Power BI, Solver, Simulation, Decision Model" },
      { n: "การสื่อสารผลการวิเคราะห์เชิงโดเมน", lv: "L2–L3", tools: "Dashboard, รายงานเชิงภาพ" }
    ],
    assess: "โครงงาน CV/พยากรณ์ตามโดเมน · Drone Flight Practical Test · Dashboard เชิงตัดสินใจ",
    courses: ["EN-714-12006","EN-714-12004","EN-714-12009","EN-714-12010","EN-714-12011","EN-714-12015","EN-714-12012","EN-714-12019"] },

  { id: "AISK06", g: "G4", type: "Hard",
    name: "ปัญญาประดิษฐ์เชิงสร้าง ระบบเอเจนต์ และการทำงานร่วมระหว่างมนุษย์กับปัญญาประดิษฐ์",
    en: "Generative, Agentic & Human–AI Systems", skills: ["HS6","HS10","SS7"], plo: [2,4,7],
    ksa: ["K8", "K26", "S6", "S20", "A8"],
    track: { T1: "○", T2: "○", T3: "●" },
    sub: [
      { n: "Prompt/Context Engineering และ RAG", lv: "L2–L3", tools: "LLM APIs, Vector DB, LangChain" },
      { n: "AI Agents, Agentic & Compound AI Workflows", lv: "L3", tools: "LangGraph, Tool Use, Orchestration" },
      { n: "การคัดเลือกและประเมินโมเดล GenAI เชิงพาณิชย์", lv: "L2–L3", tools: "Llama vs GPT, LLM-as-judge, MLflow" },
      { n: "LLM Red-teaming และการประเมิน Hallucination/Safety", lv: "L3", tools: "Project Moonshot, Guardrails" },
      { n: "การประมวลผลภาษาไทย (Thai NLP)", lv: "L2", tools: "AI for Thai, HuggingFace" },
      { n: "การใช้เครื่องมือปัญญาประดิษฐ์และการทำงานร่วมระหว่างมนุษย์กับปัญญาประดิษฐ์อย่างตรวจสอบได้", lv: "L2–L3", tools: "AI Coding Tools, Prompt Log, Human Review" }
    ],
    assess: "โครงงานระบบเอเจนต์ · Demo · รายงานคัดเลือก/ประเมินโมเดล + Baseline Safety Report",
    courses: ["EN-714-12001","EN-714-12014"] },

  { id: "AISK07", g: "G5", type: "Hybrid",
    name: "ปัญญาประดิษฐ์ที่รับผิดชอบ ความมั่นคงปลอดภัย ธรรมาภิบาล และการรับรองระบบ",
    en: "Responsible AI, Security, Governance & Assurance", skills: ["HS7","SS7","SS10","EF6"], plo: [2,4,6],
    ksa: ["K22", "K23", "S18", "A3", "A4", "A5"],
    track: { T1: "●", T2: "●", T3: "●" },
    sub: [
      { n: "ความปลอดภัยของ AI และความเป็นส่วนตัว (Data Poisoning, Model Inversion, PDPA)", lv: "L2–L3", tools: "Threat Modeling, PDPA Checklist" },
      { n: "Responsible AI / ธรรมาภิบาล (AI Verify 11 หลักการ + ISO 42001 + NIST AI RMF)", lv: "L2–L3", tools: "AI Verify Toolkit, Model Card" },
      { n: "การจัดทำหลักฐานเชิงประจักษ์ทางธรรมาภิบาล (Audit Evidence)", lv: "L3", tools: "Fairness Report, Robustness Log" },
      { n: "การรับรองความปลอดภัย ความน่าเชื่อถือ และความสอดคล้องของระบบ", lv: "L3", tools: "Risk Register, Assurance Case, Verification Evidence" },
      { n: "จรรยาบรรณวิชาชีพในสถานการณ์จริง", lv: "L3", tools: "Case Study, Employer Rubric" }
    ],
    assess: "Case Study · Model Card / Fairness Report / Robustness Log ตามกรอบ AI Verify · Employer Evaluation",
    courses: ["GE-010-003","EN-714-12001","EN-714-12005","EN-714-12007","EN-714-12008","EN-714-12015","EN-714-12009","EN-714-12017","EN-714-12018","EN-714-17001"] },

  { id: "AISK08", g: "G6", type: "Soft",
    name: "การสื่อสาร การทำงานเป็นทีม ภาวะผู้นำ และความเป็นผู้ประกอบการ",
    en: "Communication, Teamwork, Leadership & Entrepreneurship", skills: ["SS1","SS2","SS3","SS4","SS5","SS6","SS8","EF6"], plo: [1,2,3,5,7],
    ksa: ["K5", "K25", "K26", "S1", "S19", "S20", "A1", "A2", "A4", "A6", "A7", "A8"],
    track: { T1: "●", T2: "●", T3: "●" },
    sub: [
      { n: "การคิดวิเคราะห์เชิงระบบ", lv: "L3", tools: "System Map, Root-cause" },
      { n: "การสื่อสารเชิงวิชาชีพและภาษาอังกฤษเทคนิค", lv: "L3–L4", tools: "Slides, รายงาน, Technical English" },
      { n: "การทำงานเป็นทีมและภาวะผู้นำ", lv: "L4", tools: "Git, Team Charter, 360° Feedback" },
      { n: "ผู้ประกอบการและการบริหารโครงการ", lv: "L2–L3", tools: "BMC, Lean Canvas, Gantt" },
      { n: "การเรียนรู้ตลอดชีวิตและการปรับตัว", lv: "L3", tools: "Learning Portfolio" },
      { n: "กลยุทธ์การแปลงโฉมดิจิทัลและการออกแบบที่ครอบคลุมผู้ใช้", lv: "L2–L3", tools: "DX Canvas, Inclusive Design Checklist" }
    ],
    assess: "Group Project Assessment · Seminar Presentation · 360° จากสหกิจ · แผนธุรกิจ · Learning Portfolio",
    courses: ["EN-714-11009","EN-714-11004","EN-714-11008","EN-714-11010","EN-714-12007","EN-714-12009","EN-714-12017","EN-714-12018","EN-714-12018","EN-714-12019","EN-714-17001","EN-714-17002"] },

  { id: "AISK09", g: "G7", type: "Hard + Hybrid",
    name: "ข้อกำหนด สถาปัตยกรรม การบูรณาการ และการส่งมอบระบบ",
    en: "Requirements, Architecture, Integration & System Delivery",
    skills: ["HS20","SS9","SS10","EF1","EF6"], plo: [2,3,4,5,6,7],
    ksa: ["K16", "K17", "K23", "K26", "S11", "S13", "S14", "S18", "S19", "S20", "A3", "A4", "A7"],
    track: { T1: "●", T2: "●", T3: "●" },
    sub: [
      { n: "Requirements Engineering, stakeholder mapping และ acceptance criteria", lv: "L3", tools: "Interview, Context Map, Backlog, Acceptance Criteria" },
      { n: "Solution Architecture, API และ System Integration", lv: "L3–L4", tools: "C4/UML, API Contract, Integration Test" },
      { n: "Enterprise/Digital Services: Cloud/SaaS, IAM, ITSM, backup/DR", lv: "L2–L3", tools: "Cloud Architecture, IAM Matrix, Service Catalog" },
      { n: "การทวนสอบ คุณภาพ ความปลอดภัย ความมั่นคงปลอดภัย และสมรรถนะบริการ", lv: "L3", tools: "SLA/SLO, Risk Register, Test Report, Monitoring Dashboard" },
      { n: "การนำระบบไปใช้ การจัดการการเปลี่ยนแปลง และการยอมรับของผู้ใช้", lv: "L3", tools: "UAT, Change Plan, Adoption Evidence" },
      { n: "การส่งมอบเพื่อดำเนินงานและการปรับปรุงบริการอย่างต่อเนื่อง", lv: "L3", tools: "Runbook, Handover Evidence, Incident Review" }
    ],
    assess: "Solution Architecture Portfolio · Requirements/Acceptance Package · BI/DSS Case · Integration/UAT Demo · Service Runbook",
    courses: ["EN-714-11009","EN-714-11001","EN-714-11010","EN-714-12007","EN-714-12004","EN-714-12008","EN-714-12009","EN-714-12010","EN-714-12013","EN-714-12014","EN-714-12018","EN-714-12019","EN-714-17001","EN-714-17002"] }
];

/* ─── ขั้นที่ 5 · KSA ราย PLO ─── */
export const KSA = {
  1: { k: "คณิตศาสตร์วิศวกรรม (พีชคณิตเชิงเส้น · แคลคูลัส · ความน่าจะเป็น) · สถิติและการอนุมาน · Optimization/Gradient Descent · ฟิสิกส์วิศวกรรม (กลศาสตร์ · เทอร์โมฟลูอิด · วัสดุ) · การนิยามปัญหา · Engineering Modeling · Trade-off Analysis",
       s: [["HS1","L3"],["HS13","L2–L3"],["HS16","L3"],["HS17","L3"],["HS18","L2–L3"],["HS19","L3"],["SS1","L3"],["SS2","L2–L3"]], sExtra: "ฐานวิศวกรรม EF2–EF4 → AISK02/AISK03",
       a: "ยึดหลักฐานและเหตุผลเชิงปริมาณ · ความละเอียดรอบคอบเชิงวิศวกรรม (rigor) · ไม่ด่วนสรุป ตรวจสอบสมมติฐานก่อนตัดสินใจ" },
  2: { k: "System Architecture · Requirement Engineering · Design under Constraints · Sustainable Design · CAD/การเขียนแบบ · สถาปัตยกรรม IoT–Edge–Cloud · ML System Design · Microservices · Digital Twin · Safety Factor",
       s: [["HS2","L3"],["HS4","L2–L3"],["HS5","L2–L3"],["HS9","L2–L3"],["HS16","L3"],["HS17","L3"],["HS18","L2–L3"],["HS19","L3"],["HS20","L3"],["SS2","L3"],["SS9","L2–L3"],["SS10","L3"]], sExtra: "ฐานวิศวกรรมกายภาพและการบูรณาการระบบ → AISK02/AISK03/AISK04/AISK09",
       a: "คำนึงถึงผู้ใช้และความยั่งยืน · ยอมรับข้อจำกัดจริงและออกแบบให้ดูแลรักษาได้ · รับผิดชอบต่อคุณภาพและความปลอดภัยของระบบ" },
  3: { k: "Technical Writing (ไทย/อังกฤษ) · Data Storytelling · Data Visualization · Dashboard Design · IMRaD · Audience Adaptation · Technical English",
       s: [["SS4","L3"],["SS9","L2–L3"],["HS3","L2–L3"],["HS19","L2–L3"]], sExtra: "การสื่อสารข้อกำหนด ผลการตัดสินใจ และเกณฑ์การยอมรับ → AISK05/AISK08/AISK09",
       a: "ยึดผู้รับสารเป็นศูนย์กลาง (clarity over jargon) · ความซื่อตรงในการนำเสนอข้อมูล · เปิดรับคำถามและข้อโต้แย้ง" },
  4: { k: "Responsible AI · AI Ethics · AI Governance · PDPA/Data Privacy · Cybersecurity · Bias/Fairness · Explainability · ISO/IEC 42001 · NIST AI RMF · จรรยาบรรณวิศวกร · กฎหมายโดรน",
       s: [["HS7","L2–L3"],["HS15","L2"],["HS20","L2–L3"],["SS7","L2"],["SS10","L3"]], sExtra: "ฐานความปลอดภัย มาตรฐาน และการส่งมอบ EF2–EF6 → AISK02/AISK03/AISK07/AISK09",
       a: "ความซื่อสัตย์ทางวิชาการและวิชาชีพ · ความรับผิดชอบต่อสังคม/สิ่งแวดล้อม · เคารพความเป็นส่วนตัวของข้อมูล · กล้ายืนหยัดในสิ่งที่ถูกต้อง" },
  5: { k: "Team Roles · Team Charter · Project Planning · Conflict Management · Psychological Safety · Agile/Scrum · Peer Assessment · Leadership Styles",
       s: [["SS5","L3–L4"],["SS9","L2–L3"],["SS10","L3"],["SS2","L2"]], sExtra: "การประสานการเปลี่ยนแปลงและความรับผิดชอบต่อผลลัพธ์ร่วม → AISK08/AISK09",
       a: "รับผิดชอบต่อผลลัพธ์ร่วม · รับฟังและเคารพความเห็นต่าง · ความน่าเชื่อถือ/ตรงต่อเวลา · ภาวะผู้นำเชิงบริการ" },
  6: { k: "Design of Experiments · Hypothesis Testing · Data Cleaning · Feature Engineering · Model Evaluation Metrics · ETL/Pipeline · Big Data · Time-Series · Data Governance · Data-Centric AI",
       s: [["HS3","L3"],["HS1","L3"],["HS8","L2–L3"],["HS11","L3"],["HS14","L2"],["HS17","L3"],["HS18","L2–L3"],["HS19","L3"],["SS1","L3"]], sExtra: "การทดลองด้านกระบวนการ คุณภาพ ความน่าเชื่อถือ และระบบตัดสินใจ → AISK03/AISK05/AISK09",
       a: "ความเที่ยงตรงและทำซ้ำได้ (reproducibility) · สงสัยข้อมูลที่ผิดปกติ · ไม่ cherry-pick ผลลัพธ์ · เคารพความไม่แน่นอน" },
  7: { k: "Self-directed Learning · Technology Watch · Emerging AI (GenAI/Agentic) · Business Model Canvas · Value Proposition · Feasibility/ROI · IP · Go-to-Market · Learning Portfolio",
       s: [["SS6","L2–L3"],["SS3","L3"],["SS7","L2"],["SS9","L2–L3"],["HS6","L2–L3"],["HS10","L2"],["HS20","L2–L3"]], sExtra: "การสร้างคุณค่าจากนวัตกรรม ผลิตภัณฑ์ และบริการดิจิทัล → AISK06/AISK08/AISK09",
       a: "ความอยากรู้อยากเห็น (curiosity) · เปิดรับการเปลี่ยนแปลงและความล้มเหลว (growth mindset) · ริเริ่ม/ลงมือ · เรียนรู้ด้วยตนเองต่อเนื่อง" }
};

/* ─── Graduate Attributes (GA) ↔ มาตรฐานสากล ─── */
export const GA = [
  { id: "GA1", name: "ความรู้และการแก้ปัญหาเชิงวิศวกรรม", skills: "HS1, HS2, HS3", wa: "WA1 Engineering Knowledge, WA2 Problem Analysis", abet: "SO(1)", plo: [1,6] },
  { id: "GA2", name: "การออกแบบและพัฒนาระบบอัจฉริยะ", skills: "HS3 Data, HS4 MLOps/Cloud, HS5 Automation/Robotics, HS6 GenAI/Agents, HS8 Vision, HS9 IoT/Edge", wa: "WA3 Design/Development of Solutions, WA4 Investigation, WA5 Tool Usage", abet: "SO(2), SO(6)", plo: [2,6] },
  { id: "GA3", name: "การสื่อสาร ทีม และจริยธรรมวิชาชีพ", skills: "SS4 Communication/English, SS5 Teamwork/Leadership, HS7 AI Security/Responsible AI", wa: "WA8 Ethics, WA9 Individual & Collaborative Team Work, WA10 Communication", abet: "SO(3), SO(4), SO(5)", plo: [3,4,5] },
  { id: "GA4", name: "การคิดวิเคราะห์และการเรียนรู้ตลอดชีวิต", skills: "SS1 Analytical/Systems Thinking, SS2 Creative Problem-Solving, SS3 Adaptability/Lifelong Learning", wa: "WA2 Problem Analysis, WA12 Lifelong Learning", abet: "SO(7)", plo: [1,7] },
  { id: "GA5", name: "ความเป็นผู้ประกอบการและผลกระทบต่อสังคม", skills: "SS6 Product/Entrepreneurial/Project Mindset, HS3 Analytics, HS6 GenAI/Agents", wa: "WA6 The Engineer and the World, WA11 Project Management & Finance", abet: "SO(2), SO(4), SO(7)", plo: [2,4,7] }
];

/* ─── การอ้างอิงกลับไปยัง Vault ─── */
export const REFS = [
  { step: 1, title: "ผู้มีส่วนได้ส่วนเสีย (SH1–SH8)", file: "03_OBE_PLO_Design_2570/01_Stakeholder_Needs.md" },
  { step: 2, title: "ความต้องการ (N1–N18)", file: "03_OBE_PLO_Design_2570/01_Stakeholder_Needs.md" },
  { step: 3, title: "ลักษณะบัณฑิต (GA1–GA5)", file: "03_OBE_PLO_Design_2570/02_Graduate_Attributes.md" },
  { step: 4, title: "ทักษะเป้าหมายและฐานวิศวกรรม (HS1–HS20 · SS1–SS10 · EF1–EF6)", file: "03_OBE_PLO_Design_2570/03_Target_Skills.md" },
  { step: 5, title: "ชุดทักษะและ KSA (EN-AISK01–09)", file: "05_TQF2_Academic_Drafts/11_Skill_Set_Matrix_and_KSA.md" },
  { step: 6, title: "ผลลัพธ์ระดับหลักสูตร (PLO1–7)", file: "03_OBE_PLO_Design_2570/04_PLOs_7_OBE.md" },
  { step: 7, title: "ผลลัพธ์รายชั้นปี (YLO1–4 · Sub-YLO 16 ข้อ)", file: "05_TQF2_Academic_Drafts/09_Yearly_Learning_Outcomes.md" },
  { step: 8, title: "ผลลัพธ์รายวิชา (CLO) + KSA รายวิชา", file: "05_TQF2_Academic_Drafts/10_Course_Learning_Outcomes_CLO_Mapping.md" },
  { step: 8, title: "สมุดรหัส KSA (K1–K26 · S1–S20 · A1–A8) และตาราง Alignment", file: "05_TQF2_Academic_Drafts/18_KSA_Codebook.md" },
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
