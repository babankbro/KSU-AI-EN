import { COURSE_REVISION } from "./courseRevisionData.js";
import { CLO_REVISION } from "./cloRevisionData.js";

// ข้อมูลรายวิชา หลักสูตรวิศวกรรม AI และระบบอัจฉริยะ (พ.ศ. 2570) มหาวิทยาลัยกาฬสินธุ์
// ซิงก์จากไฟล์คำอธิบายรายวิชาจริงใน Vault: 04_Course_Descriptions_2570/ (ไทย + อังกฤษ)
// รหัสวิชาเลือกชีพชุดใหม่: T1 EN-714-14001..315 · T2 316..333 · T3 334..348 = 48 วิชา
// group: ge | eng | ai | track | elec | proj | field
// p=PLOs, h=hard pre, w=weak pre, co=co-requisite, sem=ภาคเรียน, y=ชั้นปี, d=คำอธิบายไทย, dEn=คำอธิบายอังกฤษ

export const PLO_NAME = {
  1: "การแก้ปัญหาทางวิศวกรรม", 2: "การออกแบบระบบปัญญาประดิษฐ์และระบบควบคุม", 3: "การสื่อสารสารสนเทศทางเทคนิค",
  4: "จริยธรรมและธรรมาภิบาลปัญญาประดิษฐ์", 5: "การทำงานเป็นทีมและการบริหารโครงการ", 6: "การทดลองและประเมินสมรรถนะระบบ",
  7: "การเรียนรู้ตลอดชีวิตและนวัตกรรมยั่งยืน"
};

export const GROUP_NAME = {
  ge: "ศึกษาทั่วไป", eng: "พื้นฐานวิศวฯ", ai: "แกน AI",
  track: "Core Track", elec: "เลือกชีพ", proj: "โครงงาน/สัมมนา", field: "สหกิจ"
};

export const GROUP_COLOR = {
  ge:    { fg: "#7a8595", bg: "#eef0f4" },
  eng:   { fg: "#2f6fb0", bg: "#e8f1fb" },
  ai:    { fg: "#2f9e6b", bg: "#e6f5ee" },
  track: { fg: "#dd8a1e", bg: "#fdf1df" },
  elec:  { fg: "#7b57c9", bg: "#efe9fb" },
  proj:  { fg: "#c1466b", bg: "#fce7ee" },
  field: { fg: "#b8455f", bg: "#fbe5ea" }
};

export const PLO_COLOR = {
  1: "#2f6fb0", 2: "#2f9e6b", 3: "#0e9aa7", 4: "#c0392b",
  5: "#8e44ad", 6: "#dd8a1e", 7: "#c9971b"
};

export const YEAR_COLOR = {
  1: { fg: "#2f6fb0", bg: "#e8f1fb" }, 2: { fg: "#2f9e6b", bg: "#e6f5ee" },
  3: { fg: "#dd8a1e", bg: "#fdf1df" }, 4: { fg: "#c1466b", bg: "#fce7ee" }
};

export const YLO = {
  1: { title: "รากฐานวิศวกรรม & โปรแกรม", sub: "Foundations", plo: { 1: "I", 2: "I", 5: "I", 6: "I" },
       text: "ประยุกต์คณิตศาสตร์/สถิติ/ฟิสิกส์วิศวกรรม เขียนโปรแกรม Python พื้นฐาน เขียนแบบ ประกอบวงจร/ฮาร์ดแวร์ และทำงานปฏิบัติการเป็นทีม" },
  2: { title: "แกน AI & ระบบอัจฉริยะ", sub: "AI Core", plo: { 1: "R", 2: "R", 6: "R", 4: "I", 7: "I" },
       text: "พัฒนาโมเดล ML/DL จัดการ Data Pipeline สร้างระบบ IoT/Edge, Deploy บน Cloud, ประยุกต์ Computer Vision และตระหนักจริยธรรม/ความปลอดภัย AI" },
  3: { title: "เฉพาะแขนง & สื่อสาร", sub: "Specialization", plo: { 2: "R", 3: "R", 4: "R", 5: "R", 6: "R", 7: "R" },
       text: "ออกแบบระบบอัจฉริยะเฉพาะโดเมน (เกษตร/อุตสาหกรรม/องค์กร) วิเคราะห์-พยากรณ์ข้อมูล สื่อสาร-นำเสนอผล และทำงานข้ามศาสตร์เป็นทีม" },
  4: { title: "วิชาชีพ · นวัตกรรม · เรียนรู้ตลอดชีวิต", sub: "Professional", plo: { 2: "M", 3: "M", 4: "M", 5: "M", 7: "M", 1: "M", 6: "M" },
       text: "ทำโครงงาน/สหกิจแก้ปัญหาจริงในสถานประกอบการ แสดงความเป็นผู้ประกอบการ ยึดจรรยาบรรณ/จริยธรรม AI และเรียนรู้เทคโนโลยีอุบัติใหม่ด้วยตนเอง" }
};

/* คำอธิบายภาษาอังกฤษแบบมาตรฐานตามที่ปรากฏในเอกสาร (แยกตามบริบทของแต่ละหมวด) */
const CTX = {
  eng: "engineering and intelligent-system contexts",
  ai: "AI engineering and intelligent-system applications",
  track: "agriculture, industry, and AI-software applications",
  e1: "smart-agriculture and precision-farming contexts",
  e2: "industrial and agro-processing contexts",
  e3: "production-grade AI software and digital-service contexts"
};
const boiler = (en, ctx) =>
  `Principles, methods, and current technologies in ${en}; problem and requirements analysis; ` +
  `selection and application of appropriate engineering, data, and AI tools; system design and implementation; ` +
  `experimentation, performance evaluation, and interpretation of results; safety, security, ethics, and ` +
  `sustainability considerations; practical case studies in ${ctx}`;

// คำอธิบายภาษาอังกฤษที่สะท้อนหัวข้อภาษาไทยแบบข้อต่อข้อ (ยึดตาม vault คำอธิบายรายวิชา)
// ใช้แทน boiler() เดิมที่เป็นข้อความสำเร็จรูปทั่วไป — คีย์ด้วยรหัสวิชา
const DEN = {
  // ---- 2.1 กลุ่มวิชาพื้นฐานและปฏิบัติการทางวิศวกรรม ----
  "EN-714-11009": "Fundamental concepts of engineering economics; time value of money; interest rates and discounting; net present value and internal rate of return analysis; cost-benefit analysis of engineering projects; economic feasibility assessment of AI and intelligent-systems investment projects; system life-cycle costing; depreciation; break-even analysis; economic decision-making under uncertainty; case studies of investment in AI, agriculture, industry, and innovation",
  "EN-714-11007": "Probability and probability distributions; random variables and distribution functions; descriptive and inferential statistics; estimation and confidence intervals; hypothesis testing; analysis of variance; regression and correlation analysis; design of experiments; application of statistical methods to data analysis for AI systems; performance evaluation of machine learning models; problem solving in agricultural and industrial engineering",
  "EN-714-11005": "Properties and phases of matter; the first and second laws of thermodynamics; energy and energy conversion; thermodynamic cycles and heat-engine efficiency; properties and behavior of fluids; the continuity equation; Bernoulli's equation and its applications; pipe flow and pressure losses; pumps and turbines; application of thermodynamics and fluid mechanics to cogeneration systems, agricultural produce drying systems, and cooling systems for computing equipment and AI servers",
  "EN-714-11001": "Fundamentals and standards of engineering drawing; orthographic and pictorial projection; dimensioning and tolerancing; sectional and auxiliary views; part and assembly drawings; computer-aided design (CAD) drafting; two- and three-dimensional modeling; application of engineering drawing to the design of automation-system structures, agricultural machinery, and the layout of IoT and sensor systems in smart factories and farms",
  "EN-714-11003": "Fundamental concepts of force and force systems; equilibrium of rigid bodies; analysis of structures and frames; axial stress and strain; shear and bending stress; torsion of shafts; shear-force and bending-moment diagrams; beam deflection; combined stresses and failure; factor of safety and design criteria; application of mechanics of materials to the structural design of agricultural machinery, load-bearing frames for agricultural drones and robots, and automation-system structures in industrial plants",
  "EN-714-11002": "Principles of programming and basic algorithms; programming with the Python language; fundamental data structures, variables, expressions, control structures, functions, and modules; object-oriented programming; introductory file and database handling; use of libraries for data science and AI; debugging and program testing; application of programming to agricultural data analysis, control of IoT devices, and development of introductory AI programs",
  "EN-714-11006": "Fundamental principles of direct-current and alternating-current circuits; Kirchhoff's laws and circuit analysis; basic electronic components — diodes, transistors, and integrated circuits; digital and logic systems; electric motors and drive systems; sensors and transducers; analog-to-digital and digital-to-analog signal conversion; application of electrical and electronic knowledge to the design of control circuits for IoT systems, smart sensors, and drive systems for agricultural robots and drones",

  // ---- 2.2 กลุ่มวิชาแกนปัญญาประดิษฐ์และระบบอัจฉริยะ ----
  "EN-714-12001": "History and evolution of artificial intelligence; types and branches of AI; machine learning; computer vision; natural language processing; expert systems; principles of AI search and reasoning; knowledge representation and inference; tools and programming languages for AI; current trends and directions of AI; generative AI; AI agents; AI ethics and social impact; applications of AI in agriculture, industry, and innovation",
  "EN-714-12002": "Linear algebra for AI — vectors, matrices, linear transformations, and singular value decomposition; multivariable calculus and partial derivatives for AI model optimization; probability theory and statistics for machine learning; probability distributions used in AI; optimization with gradient descent and backpropagation; mathematics for neural networks and deep learning; application of mathematics to developing and analyzing AI models for agriculture and industry",
  "EN-714-12003": "Principles and fundamentals of machine learning; supervised learning algorithms — linear regression, logistic regression, decision trees, random forests, and support vector machines; unsupervised algorithms — K-means clustering and dimensionality reduction; model evaluation and tuning; neural networks and deep learning; convolutional neural networks, recurrent neural networks, and transformer networks; transfer learning and fine-tuning; model training with GPUs; prevention of overfitting; applications in crop-yield forecasting, plant-disease detection, factory quality control, and industrial data analysis",
  "EN-714-12004": "Principles and data life cycle; design and development of data pipelines; extract-transform-load (ETL) processes; management of relational (SQL) and NoSQL databases for AI data; design of data warehouses and data lakes; data lakehouse architecture; data cleaning and transformation; data-quality management and governance; distributed data processing; big-data management; design of data architectures for AI systems in agriculture and industry — farm sensor data, production-process data, and supply-chain data",
  "EN-714-12006": "Fundamental principles of digital image processing; image-signal representation and image transformation; image enhancement and filtering; image segmentation and edge detection; image-feature extraction with statistical and deep learning methods; object detection and classification with convolutional neural networks; multispectral image analysis from drones; application of computer vision to inspecting agricultural-produce quality, plant-disease detection, product grading on production lines, and process monitoring in agro-industrial plants",
  "EN-714-12005": "Architecture and components of IoT systems; wireless communication protocols; smart sensors and transducers for measuring temperature, humidity, light, and gas; microcontrollers and embedded systems; edge computing; integration of IoT systems with AI cloud platforms; IoT security; system design and development; applications in smart farms, automated factories, irrigation systems, and environmental monitoring in agro-industrial contexts",
  "EN-714-12007": "Principles and architecture of cloud computing for AI; AI cloud services from major providers; deployment of machine learning models on the cloud; hyperparameter tuning; neural architecture search; automated machine learning (AutoML); management of machine learning pipelines and experiment tracking; model compression and optimization with pruning, quantization, and knowledge distillation; introductory MLOps principles for model life-cycle management; application of AI cloud to agriculture and industry",
  "EN-714-12008": "Computer architecture for AI; graphics processing units (GPUs) and tensor processing units (TPUs); parallel processing and hardware acceleration; principles and architecture of computer networks; communication protocols for AI systems; wireless and 5G networks; container management; design of scalable and highly available AI systems; security of AI infrastructure; system monitoring and management; applications supporting smart-farm systems, smart factories, and data centers for agro-industry",

  // ---- 2.3 กลุ่มวิชาชีพบังคับ ----
  "EN-714-12009": "Principles and processes of AI product design; design thinking for AI innovation development; analysis of user and market needs; prototype design and testing; assessment of technological and business feasibility; business model canvas for AI businesses; competitor analysis and market positioning; go-to-market strategy; valuation and return assessment; intellectual property for AI innovation; applications in agriculture, industry, and innovation",
  "EN-714-12011": "Concepts and architecture of smart-farm systems and high-precision agriculture; design and installation of wireless sensor networks in cultivation plots; measurement and analysis of soil, water, weather, and crop growth with IoT and AI; smart irrigation and automatic water-supply control; model analysis for forecasting and warning of plant diseases and pests; farm management with dashboards and decision-support systems; cloud-platform integration for spatial-data integration in rice, sugarcane, and cassava production",
  "EN-714-12012": "Structure and architecture of programmable logic controllers (PLCs); control programming with standard languages — ladder diagram, function block diagram, structured text, and sequential function chart; digital and analog input/output signal interfacing; control programming of sensors, actuators, and field devices; design of SCADA systems and human-machine interfaces (HMI); communication over industrial networks; integration of automation with AI and IoT for smart manufacturing and large-scale irrigation control",
  "EN-714-12013": "AI software development life cycle and modern software-engineering processes; requirements analysis and design of AI-driven system architectures; microservices development and design of RESTful APIs and GraphQL; architectural patterns and clean, maintainable software design; software testing methods and AI-model quality assurance; source-code version control and team collaboration with Git; MLOps and DevOps concepts; building continuous integration and delivery (CI/CD) pipelines; deployment on cloud infrastructure, container platforms, and edge devices; case studies of commercial application development",
  "EN-714-12010": "Concepts and structure of digital-era production and supply chains from upstream to downstream; planning and management of production factors; smart raw-material sourcing and provenance analysis; production-line management processes and automated warehouse systems; demand and supply forecasting; smart logistics and transportation management; application of AI, IoT, and big-data analytics to improve efficiency and reduce cost across the value chain; building product traceability and sustainability systems; supply-chain risk management",
  "EN-714-12015": "Working principles and types of unmanned aerial vehicles; laws, regulations, and drone-pilot licensing under CAAT standards; automatic flight systems and spatial flight-path planning; principles of remote sensing and geoinformatics data processing; use of RGB, multispectral, and thermal sensors and cameras; application of AI to processing and analyzing aerial imagery; creation of 2D maps and 3D models; crop-health assessment with vegetation indices; use of drones for precision spraying; yield assessment of rice, sugarcane, and cassava",
  "EN-714-12012": "Smart-factory architecture and Industry 4.0 concepts; integration of operational technology (OT) with information technology (IT); design and simulation of production processes with digital-twin technology; real-time inspection and quality control with AI and computer vision; predictive-maintenance systems for industrial machinery with machine learning; smart energy management and cogeneration; layout and management of automated production lines for application in modern sugar mills, cassava-starch plants, and rice mills",
  "EN-714-12014": "Concepts and architecture of AI agents — from reactive to deliberative-planning and hybrid systems; multi-agent system architectures and coordination mechanisms; connecting and augmenting large language models with agents; tool use and external function calling; design of agentic AI systems for logical planning and autonomous decision-making; development with LangChain, AutoGen, and CrewAI libraries; application of retrieval-augmented generation (RAG); structural security and ethics of agents in solving agro-industrial problems",

  // ---- 2.4 เลือกชีพ — แขนงที่ 1 เกษตรอัจฉริยะ ----
  "EN-714-14001": "Principles of smart agriculture and precision farming; analysis and management of soil and water resources with AI; design of smart irrigation systems — drip, sprinkler, and flood irrigation; soil-moisture and field-water measurement with sensors and IoT; crop water-demand forecasting with machine learning; automatic irrigation control and water conservation; AI-based drought and flood warning systems; water management at plot and watershed levels",
  "EN-714-14002": "Principles and concepts of precision agriculture; application of AI and machine learning to precision-agriculture data analysis; soil-data analysis and crop-nutrient management recommendations; detection and classification of plant diseases and pests with computer vision and deep learning; yield forecasting and production planning; smart-farm management recommendation systems; use of satellite and drone imagery with AI; integration of multi-source data for decision-making; applications in rice, sugarcane, and cassava production",
  "EN-714-14003": "Principles and components of geographic information systems (GIS); spatial data and reference coordinate systems; management and analysis of vector and raster spatial data; creation and analysis of digital maps; processing of satellite data and aerial imagery; spatial analysis with overlay, buffer, and network analysis; integration of GIS with AI and machine learning; applications in agricultural land-use planning, water-resource management, crop-area suitability assessment, and land-use-change monitoring",
  "EN-714-14004": "Principles and processes of postharvest management of agricultural produce; physiology and biochemistry of harvested produce; produce losses and loss-reduction approaches; produce sorting and grading with AI and computer vision; smart drying and produce-storage systems; temperature and humidity control in storage with IoT and AI; smart packaging and shelf-life extension; traceability and produce-quality certification systems",
  "EN-714-14005": "Principles and methods of forecasting agricultural data with AI; collection and management of big data from farm sensor networks; time-series analysis of crop-yield and weather data; yield-forecasting models with machine learning and deep learning; agricultural commodity price forecasting and production planning; risk and uncertainty analysis; design of farm-data dashboards and visualization systems for farmers and managers; evaluation and validation of forecasting models",
  "EN-714-14006": "Principles and concepts of closed plant factories and vertical farming; architecture and components of plant factories; LED artificial-lighting systems and AI-based light-spectrum control; soilless cultivation — hydroponics, aeroponics, and aquaponics; automated greenhouse environmental control; crop-health monitoring and disease management with computer vision and AI; energy conservation and resource management; cost-benefit analysis of investment",
  "EN-714-14007": "Principles and concepts of smart livestock farming; animal-health monitoring with IoT and wearable sensors; animal-behavior analysis with computer vision and AI; animal-disease prediction and detection with machine learning; automatic feeding systems and nutrition management; environmental management of livestock housing; herd tracking and management with GPS; analysis of production data and farm efficiency; livestock-product traceability systems",
  "EN-714-14008": "Principles of computer vision for classification and grading of agricultural produce; design and installation of camera and lighting systems for produce inspection; creation and management of agricultural-produce image datasets for training AI models; training and fine-tuning of deep learning models for classification and defect detection; produce size and weight measurement with image processing; integration of computer vision with conveyors and automatic sorting systems; assessment of system accuracy and performance",
  "EN-714-14009": "Principles and architecture of farm sensor networks; collection and transmission of data from soil, water, air, and crop sensors; signal processing and noise filtering; cleaning and preparation of sensor data for AI analysis; time-series analysis and pattern discovery in sensor data; building machine learning models for forecasting and decision-making; anomaly detection and smart alerting; visualization and reporting of sensor data through dashboards",
  "EN-714-14010": "Principles and concepts of smart crop production; soil-property analysis and soil-fertility assessment; crop-nutrient analysis and site-specific fertilizer planning; water management and precision irrigation; use of sensor, IoT, and UAV imagery data to monitor crop growth; application of machine learning and deep learning to analyze plant diseases and pests from digital images; yield forecasting; production-cost analysis; development of decision-support systems with generative AI",
  "EN-714-14011": "Principles of agricultural robotics and automation; components of robotic systems — sensors, actuators, and control systems; application of IoT, AI, computer vision, and machine learning in agricultural robots; autonomous navigation, localization, and path planning; field data collection, spraying, fertilizing, weeding, and harvesting; use of robotic arms and mobile robots; integration of robots with UAVs and smart-farm systems",
  "EN-714-14012": "Working principles and types of unmanned aerial vehicles; flight-path planning for agricultural surveying; use of multispectral and thermal imaging sensors to monitor crop health; processing and analysis of aerial imagery with dedicated software and machine learning; assessment of crop-field damage from disasters; creation of vegetation-index maps for growth assessment; use of UAVs for precision liquid spraying; laws and safety in operation",
  "EN-714-14013": "Principles of supply-chain and logistics management for agricultural goods; use of AI in planning the sourcing and distribution of produce; smart agricultural warehouse management with IoT; produce tracking and traceability with blockchain across the supply chain; market-demand forecasting with machine learning to reduce food loss; efficient analysis and routing of produce transportation; integration of technology to increase transparency and sustainability",
  "EN-714-14014": "Relationship between AI and agricultural biotechnology; use of machine learning to analyze plant and animal genetic data; DNA-sequence analysis for selecting disease- and climate-resistant varieties; use of AI to discover bioactive compounds for agricultural bio-products; simulation and prediction of interactions between organisms and their environment; ethics and biosafety",
  "EN-714-14015": "Impacts of climate change on agriculture; application of AI to the analysis of large-scale climate data; forecasting of extreme weather, drought, and flooding; analysis and assessment of risk to agricultural yield with computer models; design of smart early-warning systems; adaptation strategies of the agricultural sector; crop insurance based on satellite data and AI; agricultural policy and sustainability",

  // ---- 2.4 เลือกชีพ — แขนงที่ 2 AI ภาคอุตสาหกรรม ----
  "EN-714-14016": "Dynamic modeling and system identification of industrial processes; control-loop stability and performance; advanced PID tuning; cascade, feedforward, ratio, split-range, and multivariable control; model-predictive and AI-assisted process control; distributed-control-system architecture and configuration; continuous and batch control; alarm management; process historians; integration with SCADA, MES, and industrial data platforms; process simulation; loop testing; factory and site acceptance testing; commissioning; and performance evaluation",
  "EN-714-14017": "Principles and strategies of industrial machine maintenance — corrective, preventive, and predictive; collection of vibration, acoustic, temperature, and current signal data; signal processing and feature extraction for machine diagnosis; machine learning and deep learning models for anomaly detection and failure prediction; digital-twin technology for simulating machine condition; automatic alerting and maintenance planning; root-cause analysis; return-on-investment assessment",
  "EN-714-14018": "Principles and types of automated warehouse systems; warehouse design and layout for agro-industrial plants; automated storage and retrieval systems — conveyors, freight elevators, and automated guided vehicles; integration of AI and computer vision for goods inspection and sorting; warehouse operation with warehouse-management systems; goods tracking with RFID and barcodes; AI-based inventory management; analysis and optimization of goods flow through simulation",
  "EN-714-14019": "Industrial decision modeling; linear, mixed-integer, nonlinear, and multi-objective programming; network and transportation models; resource allocation; production and workforce scheduling; routing and logistics; inventory and capacity planning; queueing theory and discrete-event simulation; simulation optimization; stochastic and robust optimization; heuristic and metaheuristic methods; Python and optimization solvers; sensitivity and scenario analysis; and communication of industrial recommendations",
  "EN-714-14023": "Complete cassava-starch production from receiving, weighing, and quality analysis through washing, peeling, grinding and starch extraction, pulp separation and purification, drying, and packaging; AI-based cassava-quality and starch-yield forecasting at receiving points; AI- and PLC-based extraction-process control; smart starch drying and energy conservation; wastewater and waste management; production of high-value products — modified starch, alcohol, and bioplastics",
  "EN-714-14024": "Principles and IoT technologies for agricultural-produce storage; design and installation of sensor networks in warehouses, silos, and cold rooms; sensors for temperature, humidity, carbon dioxide, oxygen, and ethylene; automatic environmental control in storage with IoT and AI; inspection and analysis of produce quality during storage; alerting and emergency management; shelf-life forecasting and inventory management with machine learning; integration with cloud platforms for real-time monitoring",
  "EN-714-14025": "Principles of heat and mass transfer in the drying process; thermodynamic properties and moisture transfer of agricultural produce; drying technologies — hot-air, microwave, infrared, heat-pump, and freeze drying; design and calculation of drying systems; automatic drying-process control with PLC and AI; real-time moisture measurement and control; machine learning models to forecast and optimize drying; energy conservation and integration with cogeneration systems",
  "EN-714-14026": "Principles and theory of industrial material-handling systems; analysis and design of material-handling and packaging systems for agro-industrial plants; types and selection of equipment — conveyors, screw conveyors, bucket elevators, and pneumatic conveying; design of automatic packaging machinery; integration of sensors and IoT systems; control and management with PLC and SCADA; application of AI and computer vision to inspect and manage material flow; predictive maintenance",
  "EN-714-14027": "Selection and sizing of motors, servo motors, stepper motors, drives, and transmission systems; position, velocity, torque, and multi-axis motion control; path generation and motion profiles; servo tuning; integration with programmable logic controllers, industrial networks, and vision systems; collaborative robots; end effectors and part feeding; robot-cell layout and sequence design; programming, simulation, virtual testing, AI-enabled perception and grasping; risk assessment; force and power limits; protective separation; interlocks; emergency stops; integration and acceptance testing",
  "EN-714-14028": "Lean and Six Sigma principles; customer value and value-stream mapping; waste reduction; flow, pull, and standardized work; DMAIC; data-quality verification; overall equipment effectiveness, cycle time, bottlenecks, yield, scrap, and downtime; measurement-system analysis; statistical process control; process capability; design of experiments; root-cause analysis; failure-mode and effects analysis; use of data analytics, machine learning, and artificial intelligence to predict quality and prioritize improvements; countermeasure experiments; and before-and-after evaluation",
  "EN-714-14029": "Principles of industrial computer-vision systems; design of lighting systems and lens selection for quality inspection; image preparation and noise removal; detection of edges, blemishes, and defects of workpieces on conveyors; integration of computer vision with deep learning for defect classification; workpiece dimension measurement and assembly-correctness verification; integration with robots and automatic sorting systems; analysis of image data for real-time process improvement",
  "EN-714-14030": "Principles of energy management and conservation in industry; auditing and assessing energy use of machinery and support systems — air-conditioning, compressed-air, and boiler systems; integration of sensor networks and smart meters for real-time energy data; building energy-use models with AI; energy-demand forecasting and anomaly detection with machine learning; integration of renewable energy — solar and biomass; design of smart energy-management systems to reduce cost and greenhouse-gas emissions",
  "EN-714-14031": "Fundamental principles of pneumatic and hydraulic systems; component and control-circuit design; sensors and actuators; integration with microcontrollers, programmable logic controllers, and edge-computing devices; real-time signal acquisition; AI-based anomaly detection; predictive maintenance; adaptive position or pressure control; fluid-power safety and energy efficiency; design, testing, troubleshooting, and maintenance laboratory practice",
  "EN-714-14032": "Principles of heat and mass transfer; steady-state and transient conduction; natural and forced convection; thermal radiation; diffusion and mass transfer; heat-transfer equipment; finite-difference methods; mathematical and machine-learning models; thermal management of AI hardware; drying systems; cold rooms; energy systems; and thermal-process control in smart systems",
  "EN-714-14033": "Principles of industrial safety engineering and occupational health; laws, regulations, and standards; hazard identification and risk assessment; job safety analysis, HAZOP, and FMEA; machine, electrical, chemical, pneumatic, and hydraulic safety; functional safety; interlocks and emergency stops; ergonomics; industrial hygiene; emergency response; incident investigation; and AI- and sensor-assisted safety monitoring",

  // ---- 2.4 เลือกชีพ — แขนงที่ 3 นวัตกรรมปัญญาประดิษฐ์ระดับองค์กร ----
  "EN-714-14036": "Architecture and design of advanced data pipelines for AI systems; stream processing; distributed processing; design of big-data storage architectures; data-quality management and enterprise data governance; data orchestration; building real-time data pipelines for AI systems; integration of data from diverse sources; monitoring and management of data pipelines in production; application to building industrial data systems",
  "EN-714-14037": "Architectures and operation of large language models; preparation and governance of domain datasets; instruction tuning; parameter-efficient fine-tuning and LoRA; model compression and quantization; multimodal model adaptation; evaluation of accuracy, reasoning, factuality, fairness, and robustness; benchmark and comparative-experiment design; inference optimization for latency, memory, cost, and energy; model serving in production; performance-degradation monitoring; and model documentation",
  "EN-714-14038": "Reliability and safety engineering for AI systems; performance requirements and acceptance criteria; test sets for normal, out-of-distribution, and edge cases; uncertainty measurement and confidence calibration; robustness to noise and adversarial attacks; bias and fairness evaluation; hallucination testing for generative models; red teaming and guardrails; hazard analysis and safety cases; data- and model-drift monitoring; incident management; model rollback; and preparation of model cards and assurance evidence",
  "EN-714-14039": "Enterprise AI architecture design; domain and service boundaries; event-driven architecture; application programming interfaces and API management; integration with enterprise resource planning, customer-relationship management, data platforms, and legacy workflows; identity, access, secret management, and zero-trust architecture; multi-tenancy, scalability, high availability, disaster recovery, and business continuity; observability; cloud-cost management; trade-off analysis; and preparation of architecture diagrams and decision records",
  "EN-714-14040": "Principles and processes of user-experience and user-interface design for AI systems; user research and needs analysis; design thinking; wireframe and prototype design; dashboard design for data visualization; explainable-AI principles for transparent and understandable interfaces; usability testing and user-experience evaluation; inclusive design; application to commercial AI applications",
  "EN-714-14041": "Principles of applying AI in medicine and public-health systems; management of electronic health-record databases; machine learning models for preliminary diagnosis; health-risk forecasting from behavioral data; personalized treatment and healthcare recommendation systems; integration of AI with wearable devices to monitor vital signs; management of health big data; natural-language processing to extract information from medical documents; ethics and privacy of patient data under international standards",
  "EN-714-14042": "Principles of medical image processing and analysis; working with X-ray, computed-tomography (CT), and magnetic-resonance (MRI) image data; use of deep learning for organ detection and segmentation; analysis of abnormalities and lesions; building AI models to assist physicians in diagnosis; noise reduction and contrast enhancement of medical images; integration of image-analysis systems with picture archiving and communication systems (PACS); performance evaluation of medical-image-analysis models",
  "EN-714-14043": "Principles of financial technology and financial-service innovation; application of AI in finance and banking; electronic payment systems and blockchain technology; credit-risk analysis with machine learning; financial-fraud detection with AI; automated investment systems and robo-advisory; consumer and individual-customer behavior analysis; AI models for asset valuation; regulations and policies on financial technology",
  "EN-714-14044": "Predictive-analytics techniques for financial markets; analysis of financial time-series data; stock- and financial-asset price-forecasting models with machine learning and deep learning; sentiment analysis of news and social media affecting markets; risk and portfolio management with AI; high-frequency trading algorithms; building and testing automated trading systems; interpretation and visualization of financial data for business decisions",
  "EN-714-14045": "Commercialization of AI prototypes; market validation and technology readiness; revenue models, pricing, unit economics, and model-serving costs; go-to-market strategy; business-to-business sales, procurement, and pilot management; intellectual property, licensing, data, and service-level agreements; operations, risk, and scaling plans; financial projections, fundraising, and investor or partner pitching; development and validation of a commercialization plan for an AI product with real users or an enterprise partner",
  "EN-714-14046": "Principles and methodologies of intelligent software project management; agile and Scrum; planning and resource management for data- and AI-driven projects; risk and timeline assessment of model-development projects; management of the machine learning system life cycle; stakeholder-expectation management; use of AI to manage and track project progress; quality control and continuous delivery; measuring the success of AI projects",
  "EN-714-14047": "Concepts of AI-based digital business development; building data-driven digital-marketing strategies; analysis and segmentation of target customers with machine learning; automated advertising-content creation and marketing communication with generative AI; personalized product and service recommendation systems; analysis of campaign effectiveness; application of chatbots for customer service and proactive selling; conversion-rate optimization with smart technology",
  "EN-714-14048": "AI product management throughout the lifecycle; definition of vision, user segments, value proposition, and business outcomes; product roadmaps, backlogs, and prioritization criteria; product metrics, model-performance indicators, and risk constraints; human–AI interaction design; A/B testing; analysis of usage, adoption, and impact; management of feedback, model drift, cost, and product change; coordination among users, business, data, engineering, and governance teams; and evidence-based decisions to scale, pivot, or retire AI products",
  "EN-714-14049": "Virtual-reality, augmented-reality, and mixed-reality technologies; integration of AI with simulated environments; processing and generation of 3D content with generative AI; interaction with virtual objects through computer vision and natural-language processing; development of virtual-world applications for medical simulation, industrial training, and digital marketing; wearable devices for perception and response; analysis of user behavior in digital environments",
  "EN-714-14050": "AI governance and risk-management frameworks; system inventories and risk classification; impact assessment for rights, privacy, fairness, safety, and the environment; roles, accountability, and human oversight; compliance with data-protection, intellectual-property, sector-specific laws, and relevant standards; third-party and external-model risk; risk registers, data documentation, model cards, decision logs, and audit evidence; post-deployment monitoring, incident reporting, corrective action, and enterprise governance reviews through case studies",
};

const RAW = [
  /* ================= 1. หมวดวิชาศึกษาทั่วไป (คำอธิบายอังกฤษเฉพาะวิชา) ================= */
  /* หมวดศึกษาทั่วไป ฉบับ พ.ศ. 2570 — บังคับ 5 วิชา 15 นก. (GE-001) + เลือก 3 วิชา 9 นก. (GE-002) รวม 24 นก.
     ที่มา: ร่างเล่ม GE 2570 (V9 ฉบับกลั่นกรอง) · แทนชุด GE-010/GE-020 เดิมแบบหนึ่งต่อหนึ่งในภาคเดิม */
  { c: "GE-001-13002", s: "อังกฤษโลกสมัยใหม่", t: "ภาษาอังกฤษสำหรับโลกสมัยใหม่", e: "English for Modern World", cr: "3(3-0-6)", g: "ge", y: 1, sem: 1, p: [],
    d: "คำศัพท์ สำนวน และโครงสร้างภาษาอังกฤษสำหรับการสื่อสารในโลกสมัยใหม่ ทักษะการฟัง พูด อ่าน เขียนในบริบทชีวิตประจำวันและสื่อดิจิทัล การสื่อสารข้ามวัฒนธรรม",
    dEn: "English vocabulary, expressions, and structures for communication in the modern world; listening, speaking, reading, and writing in everyday and digital-media contexts; cross-cultural communication" },
  { c: "GE-001-13005", s: "มรดกวัฒนธรรม", t: "มรดกภูมิปัญญาทางวัฒนธรรมเพื่อการพัฒนา", e: "Intangible Cultural Heritage for Development", cr: "3(3-0-6)", g: "ge", y: 1, sem: 1, p: [],
    d: "ความหมายและคุณค่าของมรดกภูมิปัญญาทางวัฒนธรรม การสืบทอดและการจัดการมรดกวัฒนธรรมในบริบทท้องถิ่น การต่อยอดภูมิปัญญาสู่การพัฒนาชุมชนและเศรษฐกิจสร้างสรรค์",
    dEn: "Meaning and value of intangible cultural heritage; transmission and management of cultural heritage in local contexts; building on local wisdom for community development and the creative economy" },
  { c: "GE-001-13001", s: "ดิจิทัลและ AI", t: "เทคโนโลยีดิจิทัลและปัญญาประดิษฐ์เบื้องต้น", e: "Fundamentals of Digital Technology and Artificial Intelligence", cr: "3(2-2-5)", g: "ge", y: 1, sem: 2, p: [],
    d: "เทคโนโลยีดิจิทัลพื้นฐานและการรู้เท่าทันดิจิทัล แนวคิดพื้นฐานของปัญญาประดิษฐ์และการประยุกต์ใช้ในชีวิตประจำวัน ความมั่นคงปลอดภัยไซเบอร์และความเป็นส่วนตัว การใช้เครื่องมือปัญญาประดิษฐ์อย่างมีวิจารณญาณและมีจริยธรรม ความเป็นพลเมืองดิจิทัล",
    dEn: "Fundamental digital technology and digital literacy; basic concepts of artificial intelligence and its everyday applications; cybersecurity and privacy; critical and ethical use of AI tools; digital citizenship" },
  { c: "GE-002-14005", s: "อังกฤษวิชาชีพ", t: "ภาษาอังกฤษเพื่อการสื่อสารระดับสากลและวิชาชีพ", e: "English for Global and Professional Communication", cr: "3(3-0-6)", g: "ge", y: 2, sem: 2, p: [],
    d: "ภาษาอังกฤษเพื่อการสื่อสารในบริบทสากลและวิชาชีพ การนำเสนอ การเขียนจดหมายและเอกสารเชิงวิชาชีพ การสัมภาษณ์งาน การประชุมและการเจรจา การสื่อสารข้ามวัฒนธรรมในที่ทำงาน",
    dEn: "English for communication in global and professional contexts; presentations, professional correspondence and documents; job interviews, meetings, and negotiation; cross-cultural communication in the workplace" },
  { c: "GE-001-13004", s: "สุขภาพและตนเอง", t: "สุขภาพและการจัดการตนเอง", e: "Health and Self-Management", cr: "3(3-0-6)", g: "ge", y: 2, sem: 3, p: [],
    d: "หลักการดูแลสุขภาพกายและสุขภาพจิต โภชนาการและการออกกำลังกาย การจัดการความเครียดและอารมณ์ การบริหารเวลาและการตั้งเป้าหมาย การวางแผนชีวิตและการพัฒนาตนเองอย่างต่อเนื่อง",
    dEn: "Principles of physical and mental health care; nutrition and exercise; stress and emotional management; time management and goal setting; life planning and continuous self-development" },
  { c: "GE-002-14015", s: "สิ่งแวดล้อม/BCG", t: "สิ่งแวดล้อมชุมชน ธุรกิจสีเขียว และการปรับตัวต่อภูมิอากาศ", e: "Community Environment, Green Business, and Climate Adaptation", cr: "3(3-0-6)", g: "ge", y: 2, sem: 3, p: [],
    d: "การจัดการสิ่งแวดล้อมชุมชนและผลกระทบจากการเปลี่ยนแปลงสภาพภูมิอากาศในบริบทท้องถิ่น แนวคิดเศรษฐกิจสีเขียวและเศรษฐกิจหมุนเวียน การวางแผนธุรกิจสีเขียว การตลาดสีเขียวและการดำเนินงานที่ยั่งยืน จริยธรรมสิ่งแวดล้อมและการมีส่วนร่วมของชุมชน",
    dEn: "Community environmental management and local impacts of climate change; green and circular economy concepts; green business planning; green marketing and sustainable operations; environmental ethics and community engagement" },
  { c: "GE-002-14011", s: "การลงทุน", t: "การลงทุนอย่างชาญฉลาด", e: "Smart Investment", cr: "3(3-0-6)", g: "ge", y: 2, sem: 4, p: [],
    d: "หลักการวางแผนการเงินส่วนบุคคล การออมและการลงทุน ประเภทของสินทรัพย์ลงทุนและระดับความเสี่ยง ผลตอบแทนและการกระจายความเสี่ยง ภาษีและการวางแผนเกษียณ การรู้เท่าทันการหลอกลวงทางการเงินและการลงทุนอย่างมีวิจารณญาณ",
    dEn: "Principles of personal financial planning; saving and investment; asset classes and risk levels; return and diversification; taxation and retirement planning; awareness of financial fraud and disciplined, informed investing" },
  { c: "GE-001-13003", s: "ผู้ประกอบการดิจิทัล", t: "การเป็นผู้ประกอบการในยุคดิจิทัล", e: "Entrepreneurship in Digital Era", cr: "3(2-2-5)", g: "ge", y: 2, sem: 5, p: [],
    d: "แนวคิดและคุณลักษณะของผู้ประกอบการในยุคดิจิทัล การค้นหาโอกาสทางธุรกิจและการวิเคราะห์ลูกค้า แบบจำลองธุรกิจและการทดสอบแนวคิด การตลาดดิจิทัลและการสร้างเนื้อหา การบริหารการเงินและทรัพยากรของธุรกิจเริ่มต้น",
    dEn: "Concepts and characteristics of entrepreneurs in the digital era; opportunity identification and customer analysis; business models and idea validation; digital marketing and content creation; financial and resource management for startups" },

  /* ================= 2.1 กลุ่มวิชาพื้นฐานและปฏิบัติการทางวิศวกรรม ================= */
  { c: "EN-714-11007", s: "สถิติ", t: "สถิติและการวิเคราะห์ข้อมูลสำหรับวิศวกรรม", e: "Statistics and Data Analysis for Engineering", cr: "3(3-0-6)", g: "eng", y: 1, sem: 2, p: [1, 6], ctx: "eng",
    d: "ความน่าจะเป็น ตัวแปรสุ่ม และการแจกแจงความน่าจะเป็น สถิติเชิงพรรณนาและเชิงอนุมาน การสุ่มตัวอย่าง การประมาณค่า และการทดสอบสมมติฐาน การวิเคราะห์ความแปรปรวน การถดถอย สหสัมพันธ์ และอนุกรมเวลา การออกแบบการทดลองและการควบคุมกระบวนการเชิงสถิติ การประเมินตัวแบบปัญญาประดิษฐ์ และการตรวจสอบการรั่วไหลและความเอนเอียงของข้อมูล" },
  { c: "EN-714-11001", s: "เขียนแบบ", t: "การเขียนแบบวิศวกรรมและการวางผังระบบ", e: "Engineering Drawing and System Layout Design", cr: "3(2-2-5)", g: "eng", y: 1, sem: 1, p: [1, 2], ctx: "eng",
    d: "หลักการและมาตรฐานการเขียนแบบวิศวกรรม การฉายภาพ ภาพตัด ภาพสามมิติ การกำหนดขนาดและพิกัดความเผื่อ การเขียนแบบชิ้นส่วนและแบบประกอบ การสร้างแบบจำลองสองมิติและสามมิติด้วยคอมพิวเตอร์ช่วยออกแบบ การออกแบบผังฟาร์ม โรงเรือน สถานีตรวจวัด และสายการผลิต แบบท่อ แบบไฟฟ้า และวงจรควบคุม และการส่งมอบข้อมูลแบบสู่การจำลองและดิจิทัลทวิน" },
  { c: "EN-714-11002", s: "Programming", t: "การเขียนโปรแกรมพื้นฐานสำหรับปัญญาประดิษฐ์", e: "Foundational Programming for Artificial Intelligence", cr: "3(2-2-5)", g: "eng", y: 1, sem: 1, p: [1, 2, 6], ctx: "eng",
    d: "การคิดเชิงขั้นตอนวิธีและการแก้ปัญหาด้วยโปรแกรม การเขียนโปรแกรมภาษาไพทอน ตัวแปร ชนิดข้อมูล โครงสร้างควบคุม ฟังก์ชัน และการเขียนโปรแกรมเชิงวัตถุ การจัดการแฟ้มข้อมูล ฐานข้อมูล และส่วนต่อประสานโปรแกรมประยุกต์ การใช้ไลบรารีข้อมูลและปัญญาประดิษฐ์ การควบคุมรุ่นและการทดสอบหน่วย และการใช้เครื่องมือช่วยเขียนโปรแกรมอย่างมีวิจารณญาณ" },
  { c: "EN-714-11004", s: "Workshop 1", t: "ปฏิบัติการวิศวกรรมเชิงบูรณาการ 1: การสร้างชิ้นงานและการติดตั้งเซนเซอร์", e: "Integrated Engineering Workshop 1: Fabrication and Sensor Installation", cr: "1(0-2-1)", g: "eng", y: 1, sem: 1, p: [1, 2, 5],
    d: "ความปลอดภัยในการใช้เครื่องมือและพื้นที่ปฏิบัติงาน การอ่านแบบและการวางแผนการสร้าง การวัด ตัด เจาะ ยึด และประกอบโครงสร้าง การเดินท่อและสายไฟ การบัดกรีและติดตั้งอุปกรณ์ การติดตั้งและสอบเทียบเซนเซอร์ การสร้างต้นแบบสถานีตรวจวัด การตรวจสอบคุณภาพชิ้นงาน และการบันทึกแบบ รายการวัสดุ และผลการสอบเทียบจากการปฏิบัติงานเป็นทีม",
    dEn: "Safe use of engineering hand tools; assembly of aluminium-profile structures; installation of water piping and plumbing systems for greenhouses; electrical wiring; assembly of a robot chassis" },
  { c: "EN-714-11009", s: "เศรษฐศาสตร์วิศวฯ", t: "เศรษฐศาสตร์วิศวกรรมและการวิเคราะห์ต้นทุน", e: "Engineering Economics and Cost Analysis", cr: "3(3-0-6)", g: "eng", y: 2, sem: 3, p: [1, 6, 7], ctx: "eng",
    d: "หลักเศรษฐศาสตร์วิศวกรรม มูลค่าเงินตามเวลา อัตราดอกเบี้ยและการคิดลด มูลค่าปัจจุบันสุทธิ อัตราผลตอบแทนภายใน และระยะเวลาคืนทุน การประมาณต้นทุนระบบข้อมูล คลาวด์ และปัญญาประดิษฐ์ ต้นทุนรวมในการเป็นเจ้าของและวงจรชีวิต จุดคุ้มทุนและเศรษฐศาสตร์ต่อหน่วย การวิเคราะห์ความไวและความเสี่ยง และการจัดทำกรณีธุรกิจและข้อเสนอการลงทุน" },
  { c: "EN-714-11005", s: "ความร้อน-ของไหล", t: "วิศวกรรมความร้อนและของไหลในระบบอัจฉริยะ", e: "Thermal-Fluid Engineering in Smart Systems", cr: "3(3-0-6)", g: "eng", y: 1, sem: 2, p: [1, 2], ctx: "eng", h: ["EN-714-11003"],
    d: "หลักการพื้นฐานของอุณหพลศาสตร์ สมบัติและสถานะของสาร กฎข้อที่หนึ่งและข้อที่สอง และสมดุลมวลและพลังงาน การนำ การพา และการแผ่รังสีความร้อน เครื่องแลกเปลี่ยนความร้อน ระบบทำความเย็นและการอบแห้ง สมบัติของของไหล สมการความต่อเนื่องและแบร์นูลลี การไหลในท่อ ปั๊มและพัดลม และการประยุกต์ในระบบอบแห้งผลผลิตเกษตร ห้องเย็น และการระบายความร้อน" },
  { c: "EN-714-11003", s: "กลศาสตร์วัสดุ", t: "กลศาสตร์วัสดุและการออกแบบโครงสร้าง", e: "Mechanics of Materials and Structural Design", cr: "3(3-0-6)", g: "eng", y: 1, sem: 1, p: [1, 2], ctx: "eng",
    d: "แรงและระบบแรง สมดุลของวัตถุแข็งเกร็ง การวิเคราะห์โครงสร้างและโครง ความเค้นและความเครียดในแนวแกน แรงเฉือน การดัด การบิด และการโก่งตัว ความล้าและรูปแบบความเสียหาย สมบัติวัสดุและการเลือกวัสดุ ค่าความปลอดภัยและเกณฑ์การออกแบบ และการออกแบบโครง เครื่องยึด ฐานติดตั้ง และกล่องหุ้มสำหรับเซนเซอร์ เครื่องจักร หุ่นยนต์ และอากาศยานไร้คนขับ" },
  { c: "EN-714-11006", s: "ไฟฟ้า-อิเล็ก", t: "พื้นฐานไฟฟ้าและอิเล็กทรอนิกส์สำหรับระบบอัจฉริยะ", e: "Electrical and Electronic Fundamentals for Intelligent Systems", cr: "3(3-0-6)", g: "eng", y: 1, sem: 2, p: [1, 2], ctx: "eng",
    d: "วงจรไฟฟ้ากระแสตรงและกระแสสลับ กฎของเคอร์ชอฟฟ์และการวิเคราะห์วงจร อุปกรณ์อิเล็กทรอนิกส์ ระบบดิจิทัลและตรรกะ เซนเซอร์ ทรานสดิวเซอร์ และการปรับสภาพสัญญาณ การแปลงสัญญาณแอนะล็อกและดิจิทัล ตัวกระตุ้น มอเตอร์ และอิเล็กทรอนิกส์กำลังเบื้องต้น ความปลอดภัยทางไฟฟ้า และการออกแบบวงจรตรวจวัดและขับเคลื่อนสำหรับไอโอที หุ่นยนต์ และฟาร์มอัจฉริยะ" },
  { c: "EN-714-11008", s: "Workshop 2", t: "ปฏิบัติการวิศวกรรมเชิงบูรณาการ 2: ระบบขับเคลื่อนและการควบคุมอัตโนมัติ", e: "Integrated Engineering Workshop 2: Drive Systems and Automatic Control", cr: "1(0-2-1)", g: "eng", y: 1, sem: 2, p: [2, 5], h: ["EN-714-11004"], co: ["EN-714-11006"],
    d: "หลักปฏิบัติระบบขับเคลื่อนและกำลังของไหล การเลือกและต่อมอเตอร์ ชุดขับ วาล์ว และกระบอกสูบนิวแมติกส์และไฮดรอลิกส์ การต่อวงจรไฟฟ้าและวงจรลม การเชื่อมต่อเซนเซอร์ ตัวกระตุ้น ไมโครคอนโทรลเลอร์ และตัวควบคุมแบบโปรแกรมได้ การเขียนโปรแกรมควบคุมเบื้องต้น การออกแบบอินเตอร์ล็อกและการหยุดฉุกเฉิน และการทดสอบการทำงานและแก้ไขข้อขัดข้องเป็นทีม",
    dEn: "Soldering; sensor installation; microcontroller-board interfacing; hardware-network cabling and integration into the structure built in Integrated Engineering Workshop 1: Fabrication and Sensor Installation" },
  { c: "EN-714-11010", s: "Workshop 3", t: "ปฏิบัติการวิศวกรรมเชิงบูรณาการ 3: การบูรณาการระบบและการส่งมอบ", e: "Integrated Engineering Workshop 3: System Integration and Handover", cr: "1(0-2-1)", g: "eng", y: 2, sem: 3, p: [1, 2, 5], h: ["EN-714-11008"], w: ["EN-714-11006"],
    d: "การวิเคราะห์ข้อกำหนดและออกแบบสถาปัตยกรรมระบบบูรณาการ การประกอบตู้ควบคุมและเชื่อมต่อเซนเซอร์ เอดจ์ปัญญาประดิษฐ์ ตัวควบคุมแบบโปรแกรมได้ ระบบสกาดา และตัวกระตุ้น การเชื่อมลำดับการทำงานตั้งแต่การตรวจวัด การประมวลผล การตัดสินใจ ไปจนถึงแผงควบคุม การทดสอบส่วนต่อประสาน สมรรถนะ และความปลอดภัย และการสาธิตระบบแบบครบวงจรพร้อมเอกสารส่งมอบ",
    dEn: "Industrial control-panel wiring; integration of sensors with Edge AI boards; full integrated system testing, for example an autonomous greenhouse or an operational mobile robot" },

  /* ================= 2.2 กลุ่มวิชาแกนปัญญาประดิษฐ์และระบบอัจฉริยะ ================= */
  { c: "EN-714-12001", s: "Intro AI", t: "ความรู้เบื้องต้นสำหรับปัญญาประดิษฐ์", e: "Introduction to Artificial Intelligence", cr: "3(3-0-6)", g: "ai", y: 1, sem: 1, p: [1, 4, 7], ctx: "ai",
    d: "ประวัติและพัฒนาการของปัญญาประดิษฐ์ การค้นหา การแทนความรู้ และการให้เหตุผล การเรียนรู้ของเครื่อง คอมพิวเตอร์วิทัศน์ ปัญญาประดิษฐ์เชิงสร้าง และระบบเอเจนต์ วงจรชีวิตของระบบตั้งแต่การกำหนดปัญหาถึงการติดตามหลังนำไปใช้ ข้อจำกัด ความเอนเอียง และการกำกับดูแลของมนุษย์ จริยธรรมและธรรมาภิบาล และการประยุกต์ใช้ในเกษตรและอุตสาหกรรม" },
  { c: "EN-714-12002", s: "คณิต AI", t: "คณิตศาสตร์วิศวกรรมปัญญาประดิษฐ์", e: "Mathematics for Artificial Intelligence", cr: "3(3-0-6)", g: "ai", y: 1, sem: 2, p: [1, 6], ctx: "ai",
    d: "พีชคณิตเชิงเส้น เวกเตอร์ เมทริกซ์ และการแยกค่าเอกพจน์ แคลคูลัสหลายตัวแปรและอนุพันธ์ย่อย ความน่าจะเป็น การแจกแจง และการอนุมานแบบเบย์ วิธีเชิงตัวเลขและการวิเคราะห์เสถียรภาพ การหาค่าเหมาะที่สุด การลดตามความชัน และการแพร่กระจายย้อนกลับ พื้นฐานการวิจัยดำเนินงาน และการประยุกต์คณิตศาสตร์เพื่อพัฒนาและวิเคราะห์ตัวแบบปัญญาประดิษฐ์" },
  { c: "EN-714-12003", s: "ML/DL", t: "การเรียนรู้ของเครื่องและการเรียนรู้เชิงลึก", e: "Machine Learning and Deep Learning", cr: "3(2-2-5)", g: "ai", y: 2, sem: 3, p: [1, 5, 6], ctx: "ai", h: ["EN-714-11002", "EN-714-12002"], w: ["EN-714-11007"],
    d: "กระบวนการพัฒนาตัวแบบการเรียนรู้ของเครื่องแบบมีผู้สอนและไม่มีผู้สอน การถดถอย การจำแนก การจัดกลุ่ม และการลดมิติ โครงข่ายประสาทเทียม สถาปัตยกรรมคอนโวลูชันและทรานสฟอร์เมอร์ การแบ่งชุดข้อมูล ตัวชี้วัด และการตรวจสอบข้าม การจัดการข้อมูลรั่วและไม่สมดุล การประเมินความทนทานและความสามารถในการอธิบาย และการทดลองที่ทำซ้ำได้" },
  { c: "EN-714-12004", s: "Data Eng", t: "วิศวกรรมข้อมูลและข้อมูลขนาดใหญ่", e: "Data Engineering and Big Data", cr: "3(3-0-6)", g: "ai", y: 2, sem: 3, p: [2, 3, 6], ctx: "ai", h: ["EN-714-11002"], w: ["EN-714-11007"],
    d: "วงจรชีวิตและสถาปัตยกรรมข้อมูล ข้อกำหนดและสัญญาของชุดข้อมูล ฐานข้อมูลเชิงสัมพันธ์และโนเอสคิวแอล คลังข้อมูล ทะเลข้อมูล และเลกเฮาส์ การออกแบบไปป์ไลน์แบบแบตช์และสตรีม กระบวนการสกัด แปลง และโหลดข้อมูล การตรวจสอบคุณภาพข้อมูล การกำกับข้อมูลและสายธารที่มา และการเชื่อมข้อมูลเซนเซอร์ ฟาร์ม การผลิต และองค์กร" },
  { c: "EN-714-12006", s: "Computer Vision", t: "คอมพิวเตอร์วิทัศน์และการวิเคราะห์ภาพ", e: "Computer Vision and Image Analysis", cr: "3(2-2-5)", g: "ai", y: 2, sem: 4, p: [2, 3, 6], ctx: "ai", h: ["EN-714-12003"], w: ["EN-714-11002"],
    d: "การเกิดภาพ การสอบเทียบกล้อง และการแทนข้อมูลภาพ การประมวลผลภาพดิจิทัล การปรับปรุง การกรอง และการแบ่งส่วนภาพ การสกัดคุณลักษณะ การตรวจจับ การจำแนก และการติดตามวัตถุด้วยการเรียนรู้เชิงลึก การวิเคราะห์ภาพมัลติสเปกตรัมและเทอร์มอล การประเมินสมรรถนะและความสามารถในการอธิบายของตัวแบบ และการประยุกต์กับโรคพืช การคัดเกรด และการตรวจสอบคุณภาพ" },
  { c: "EN-714-12005", s: "Sensing/IoT", t: "ระบบตรวจวัด ขับเคลื่อน และไอโอทีอัจฉริยะ", e: "Smart Sensing, Actuation and Internet of Things Systems", cr: "3(2-2-5)", g: "ai", y: 2, sem: 3, p: [1, 2, 4, 5, 6], ctx: "ai", h: ["EN-714-11006"], w: ["EN-714-11002", "EN-714-11008"],
    d: "สถาปัตยกรรมระบบกายภาพ–ไซเบอร์และอินเทอร์เน็ตของสรรพสิ่ง การเลือก ติดตั้ง และสอบเทียบเซนเซอร์ การปรับสภาพสัญญาณและการวิเคราะห์ความไม่แน่นอน ตัวกระตุ้นและระบบขับเคลื่อน ไมโครคอนโทรลเลอร์ ระบบฝังตัว และตัวควบคุมแบบโปรแกรมได้ โพรโทคอลอุตสาหกรรม การประมวลผลที่ขอบเครือข่าย และการบูรณาการสถานีตรวจวัดสำหรับฟาร์มและโรงงาน" },
  { c: "EN-714-12007", s: "Cloud/MLOps", t: "โครงสร้างพื้นฐานคลาวด์และการดำเนินการเรียนรู้ของเครื่อง", e: "Cloud Infrastructure and Machine Learning Operations", cr: "3(2-2-5)", g: "ai", y: 2, sem: 4, p: [1, 2, 4, 7], ctx: "ai", h: ["EN-714-12003"], w: ["EN-714-12005", "EN-714-12004"],
    d: "สถาปัตยกรรมและรูปแบบบริการคลาวด์ คอนเทนเนอร์ และตัวเร่งการประมวลผลปัญญาประดิษฐ์ การออกแบบระบบที่ขยายขนาดได้และมีความพร้อมใช้สูง ความมั่นคงปลอดภัยของโครงสร้างพื้นฐาน การสร้างไปป์ไลน์ฝึก ทดสอบ นำขึ้นใช้ และปรับปรุงตัวแบบ การติดตามสมรรถนะและการเลื่อนของตัวแบบ และการปรับสมดุลความแม่นยำ ต้นทุน และพลังงาน" },

  { c: "EN-714-12008", s: "Workshop 4", t: "ปฏิบัติการวิศวกรรมเชิงบูรณาการ 4: เครือข่ายและโครงสร้างพื้นฐานสำหรับปัญญาประดิษฐ์", e: "Integrated Engineering Workshop 4: Networking and AI Infrastructure", cr: "1(0-2-1)", g: "ai", y: 2, sem: 4, p: [2, 4, 5], co: ["EN-714-12007"],
    d: "การเข้าหัวสายและทดสอบสายสัญญาณ การตั้งค่าสวิตช์และเราเตอร์ การกำหนดหมายเลขไอพี ซับเน็ต และเครือข่ายเสมือน การเชื่อมอุปกรณ์อินเทอร์เน็ตของสรรพสิ่งและบอร์ดเอดจ์เข้าสู่เครือข่าย การติดตั้งคอนเทนเนอร์และการเชื่อมต่อบริการคลาวด์ การแก้ปัญหาเครือข่าย การตั้งค่าความมั่นคงปลอดภัยเบื้องต้น และการจัดทำเอกสารการติดตั้ง",
    dEn: "Cable termination and signal testing; switch and router configuration; IP addressing, subnetting, and virtual LANs; connecting IoT devices and edge boards to the network; container deployment and cloud connectivity; throughput and latency measurement; network troubleshooting; introductory security configuration; installation documentation" },

  /* ================= 2.3 กลุ่มวิชาชีพบังคับ ================= */
  { c: "EN-714-12009", s: "AI BI/Product", t: "การออกแบบผลิตภัณฑ์และธุรกิจปัญญาประดิษฐ์", e: "AI Business and Product Design", cr: "3(3-0-6)", g: "track", y: 2, sem: 4, p: [1, 2, 3, 4, 5, 6, 7], ctx: "track", w: ["EN-714-12001", "EN-714-11009"],
    d: "การค้นหาและกำหนดปัญหาที่เหมาะสมกับปัญญาประดิษฐ์ การวิจัยผู้ใช้และผู้มีส่วนได้ส่วนเสีย การทำแผนที่ห่วงโซ่คุณค่า การกำหนดข้อกำหนดด้านหน้าที่ ข้อมูล ตัวแบบ และการปฏิบัติการ การประเมินความเป็นไปได้ด้านเทคโนโลยี กฎหมาย และธุรกิจ การออกแบบสถาปัตยกรรมและต้นแบบผลิตภัณฑ์ การออกแบบโมเดลธุรกิจและผลตอบแทน และการออกแบบที่รับผิดชอบและยั่งยืน" },
  { c: "EN-714-12011", s: "Smart Farming", t: "ระบบฟาร์มอัจฉริยะและเกษตรแม่นยำ", e: "Smart Farming Systems and Precision Agriculture", cr: "3(2-2-5)", g: "track", y: 3, sem: 5, p: [2, 4, 5, 6], ctx: "track", h: ["EN-714-12005", "EN-714-12003"], w: ["EN-714-12006"],
    d: "สถาปัตยกรรมและองค์ประกอบของระบบฟาร์มอัจฉริยะและเกษตรแม่นยำ การออกแบบระบบตรวจวัดดิน น้ำ อากาศ และการเจริญเติบโต การบูรณาการข้อมูลอินเทอร์เน็ตของสรรพสิ่ง คลาวด์ และภูมิสารสนเทศ ระบบชลประทานอัตโนมัติ การพยากรณ์ผลผลิต โรค และแมลง ระบบสนับสนุนการตัดสินใจฟาร์ม และการบูรณาการหุ่นยนต์และอากาศยานไร้คนขับเข้ากับระบบฟาร์ม" },
  { c: "EN-714-12013", s: "Software & AI Eng", t: "การพัฒนาซอฟต์แวรและวิศวกรรมปัญญาประดิษฐ์", e: "Software Development and AI Engineering", cr: "3(2-2-5)", g: "track", y: 3, sem: 5, p: [2, 3, 5, 6, 7], ctx: "track", h: ["EN-714-11002", "EN-714-12007"], w: ["EN-714-12004"],
    d: "วงจรชีวิตการพัฒนาซอฟต์แวร์ปัญญาประดิษฐ์และกระบวนการวิศวกรรมซอฟต์แวร์สมัยใหม่ การวิเคราะห์ความต้องการและการออกแบบสถาปัตยกรรมระบบ การพัฒนาไมโครเซอร์วิสและส่วนต่อประสานโปรแกรมประยุกต์ การออกแบบซอฟต์แวร์ที่บำรุงรักษาได้ การทดสอบและการประกันคุณภาพตัวแบบ การควบคุมเวอร์ชัน และการนำขึ้นใช้บนคลาวด์ คอนเทนเนอร์ และอุปกรณ์เอดจ์" },
  { c: "EN-714-12010", s: "Decision/Supply Chain", t: "ปัญญาประดิษฐ์สำหรับห่วงโซ่การผลิตและอุปทาน", e: "AI for Production and Supply Chain", cr: "3(3-0-6)", g: "track", y: 2, sem: 4, p: [1, 2, 3, 6], ctx: "track", h: ["EN-714-12004", "EN-714-12003"], w: ["EN-714-12001"],
    d: "ระบบสนับสนุนการตัดสินใจและปัญญาประดิษฐ์ ตัวชี้วัดสำหรับการดำเนินงาน การวิเคราะห์เชิงพยากรณ์และเชิงกำหนด การพยากรณ์อุปสงค์และกำลังการผลิต การวางแผนวัตถุดิบ สินค้าคงคลัง และโลจิสติกส์ การตรวจสอบย้อนกลับและการบริหารความเสี่ยง การหาค่าเหมาะที่สุดด้วยการวิจัยดำเนินงาน และการออกแบบระบบแนะนำที่มีมนุษย์กำกับ" },
  { c: "EN-714-12015", s: "UAV/Remote Sensing", t: "อากาศยานไร้คนขับสำหรับวิศวกรรมเกษตรอัจฉริยะ", e: "Unmanned Aerial Vehicles for Smart Agricultural Engineering", cr: "3(2-2-5)", g: "track", y: 3, sem: 6, p: [2, 4, 5, 6], ctx: "track", h: ["EN-714-12006"], w: ["EN-714-12005"],
    d: "กฎหมาย ความปลอดภัย และการขึ้นทะเบียนอากาศยานไร้คนขับตามมาตรฐานของสำนักงานการบินพลเรือน หลักการทำงานและประเภทของอากาศยานไร้คนขับ การวางแผนภารกิจและเส้นทางบิน การเก็บข้อมูลด้วยกล้องมัลติสเปกตรัมและเทอร์มอล การวิเคราะห์ภาพถ่ายทางอากาศด้วยปัญญาประดิษฐ์ การประเมินสุขภาพพืชและการฉีดพ่นแม่นยำ และการทดสอบภาคสนาม" },
  { c: "EN-714-12012", s: "Smart Mfg/Robotics", t: "ระบบการผลิตอัจฉริยะและหุ่นยนต์อุตสาหกรรม", e: "Smart Manufacturing and Industrial Robotics Systems", cr: "3(2-2-5)", g: "track", y: 3, sem: 5, p: [1, 2, 4, 5, 6], ctx: "track", h: ["EN-714-12003"], w: ["EN-714-12005"],
    d: "หลักวิศวกรรมกระบวนการผลิต การสร้างแบบจำลองกระบวนการและดิจิทัลทวิน สถาปัตยกรรมโรงงานอัจฉริยะและการบูรณาการเทคโนโลยีปฏิบัติการกับสารสนเทศ ตัวควบคุมแบบโปรแกรมได้ ระบบสกาดา และเครือข่ายอุตสาหกรรม หุ่นยนต์อุตสาหกรรมและการออกแบบเซลล์หุ่นยนต์ ประสิทธิผลโดยรวมของเครื่องจักรและการบำรุงรักษาเชิงพยากรณ์ และความปลอดภัยของเครื่องจักร" },
  { c: "EN-714-12014", s: "Agentic AI", t: "ระบบเอเจนต์ปัญญาประดิษฐ์เชิงรับการวางแผน", e: "Agentic AI Systems", cr: "3(2-2-5)", g: "track", y: 3, sem: 6, p: [2, 4, 5, 6, 7], ctx: "track", h: ["EN-714-12003"], w: ["EN-714-12007", "EN-714-12013"],
    d: "แนวคิดและสถาปัตยกรรมของระบบเอเจนต์ปัญญาประดิษฐ์ตั้งแต่แบบตอบสนองถึงแบบวางแผน ระบบหลายเอเจนต์และกลไกประสานงาน การเสริมความสามารถตัวแบบภาษาขนาดใหญ่ด้วยเอเจนต์ การเรียกใช้เครื่องมือและฟังก์ชันภายนอก การออกแบบระบบเอเจนต์เพื่อการตัดสินใจอัตโนมัติ การสร้างข้อความเสริมด้วยการสืบค้น และความมั่นคงปลอดภัยและจริยธรรมของเอเจนต์" },

  /* ---- วิชาเลือกชีพร่วมทุกแขนง: การเรียนรู้ร่วมการทำงานและหัวข้อพิเศษ ---- */
  { c: "EN-714-16001", s: "CWIE 1", t: "การเรียนรู้ร่วมการทำงานด้านวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ 1", e: "Work-Integrated Learning in Artificial Intelligence and Intelligent System Engineering 1", cr: "3(2-2-5)", g: "elec", tr: 0, p: [1, 2, 5, 6], h: ["EN-714-17001"],
    d: "การวิเคราะห์โจทย์และข้อกำหนดจากสถานประกอบการ การศึกษากระบวนการทำงานและข้อจำกัดขององค์กร การกำหนดขอบเขตงานและเกณฑ์การยอมรับร่วมกับพี่เลี้ยง การวางแผนงานและบริหารเวลาภายใต้เงื่อนไขขององค์กร การใช้ข้อมูลขององค์กรอย่างมีจริยธรรมและรักษาความลับ และการรายงานความก้าวหน้าต่ออาจารย์นิเทศและพี่เลี้ยง",
    dEn: "Analysis of problems and requirements from the host organization; work planning and time management under organizational constraints; design and development of AI or intelligent systems in a real work context; ethical and confidential use of organizational data and resources; testing, delivery, and handover to users; progress reporting and presentation to the academic supervisor and workplace mentor; joint assessment by the university and the host organization" },
  { c: "EN-714-16002", s: "CWIE 2", t: "การเรียนรู้ร่วมการทำงานด้านวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ 2", e: "Work-Integrated Learning in Artificial Intelligence and Intelligent System Engineering 2", cr: "3(2-2-5)", g: "elec", tr: 0, p: [1, 2, 5, 6], h: ["EN-714-17001"],
    d: "การออกแบบสถาปัตยกรรมและแนวทางแก้ปัญหาตามข้อกำหนดของสถานประกอบการ การเลือกเทคโนโลยีและเครื่องมือให้เหมาะกับข้อจำกัดขององค์กร การพัฒนาระบบปัญญาประดิษฐ์หรือระบบอัจฉริยะตามบริบทงานจริง การควบคุมรุ่นและการทำงานร่วมกับทีมพัฒนา การใช้ข้อมูลขององค์กรอย่างมีจริยธรรมและรักษาความลับ และการรายงานความก้าวหน้าต่ออาจารย์นิเทศและพี่เลี้ยง",
    dEn: "Analysis of problems and requirements from the host organization; work planning and time management under organizational constraints; design and development of AI or intelligent systems in a real work context; ethical and confidential use of organizational data and resources; testing, delivery, and handover to users; progress reporting and presentation to the academic supervisor and workplace mentor; joint assessment by the university and the host organization" },
  { c: "EN-714-16003", s: "CWIE 3", t: "การเรียนรู้ร่วมการทำงานด้านวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ 3", e: "Work-Integrated Learning in Artificial Intelligence and Intelligent System Engineering 3", cr: "3(2-2-5)", g: "elec", tr: 0, p: [1, 2, 5, 6], h: ["EN-714-17001"],
    d: "การวางแผนและดำเนินการทดสอบระบบในสภาพใช้งานจริง การทวนสอบผลลัพธ์กับข้อกำหนดและเกณฑ์การยอมรับ การประเมินสมรรถนะ ความน่าเชื่อถือ และความปลอดภัยของระบบ การวิเคราะห์และแก้ไขข้อบกพร่องร่วมกับทีม การจัดทำหลักฐานคุณภาพและธรรมาภิบาลของระบบ และการรายงานความก้าวหน้าต่ออาจารย์นิเทศและพี่เลี้ยง",
    dEn: "Analysis of problems and requirements from the host organization; work planning and time management under organizational constraints; design and development of AI or intelligent systems in a real work context; ethical and confidential use of organizational data and resources; testing, delivery, and handover to users; progress reporting and presentation to the academic supervisor and workplace mentor; joint assessment by the university and the host organization" },
  { c: "EN-714-16004", s: "CWIE 4", t: "การเรียนรู้ร่วมการทำงานด้านวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ 4", e: "Work-Integrated Learning in Artificial Intelligence and Intelligent System Engineering 4", cr: "3(2-2-5)", g: "elec", tr: 0, p: [1, 2, 5, 6], h: ["EN-714-17001"],
    d: "การนำระบบขึ้นใช้งานในสภาพแวดล้อมขององค์กร การบูรณาการกับระบบเดิมและการจัดการการเปลี่ยนแปลง การจัดทำเอกสารระบบและคู่มือการใช้งาน การส่งมอบและถ่ายทอดงานแก่ผู้ใช้และทีมผู้ดูแล การประเมินการยอมรับของผู้ใช้ และการรายงานความก้าวหน้าต่ออาจารย์นิเทศและพี่เลี้ยง",
    dEn: "Analysis of problems and requirements from the host organization; work planning and time management under organizational constraints; design and development of AI or intelligent systems in a real work context; ethical and confidential use of organizational data and resources; testing, delivery, and handover to users; progress reporting and presentation to the academic supervisor and workplace mentor; joint assessment by the university and the host organization" },
  { c: "EN-714-16005", s: "CWIE 5", t: "การเรียนรู้ร่วมการทำงานด้านวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ 5", e: "Work-Integrated Learning in Artificial Intelligence and Intelligent System Engineering 5", cr: "3(2-2-5)", g: "elec", tr: 0, p: [1, 2, 5, 6], h: ["EN-714-17001"],
    d: "การติดตามและดูแลระบบที่ส่งมอบแล้วในการปฏิบัติงานจริง การเฝ้าระวังสมรรถนะและการเสื่อมของตัวแบบ การบำรุงรักษาและปรับปรุงระบบอย่างต่อเนื่อง การประเมินคุณค่าที่ระบบสร้างให้องค์กร การสรุปบทเรียนและข้อเสนอแนะเชิงพัฒนา และการประเมินผลร่วมกับสถานประกอบการ",
    dEn: "Analysis of problems and requirements from the host organization; work planning and time management under organizational constraints; design and development of AI or intelligent systems in a real work context; ethical and confidential use of organizational data and resources; testing, delivery, and handover to users; progress reporting and presentation to the academic supervisor and workplace mentor; joint assessment by the university and the host organization" },
  { c: "EN-714-14051", s: "Special Topics 1", t: "หัวข้อพิเศษด้านเทคโนโลยีเกิดใหม่ทางปัญญาประดิษฐ์และระบบอัจฉริยะ 1", e: "Special Topics in Emerging Artificial Intelligence and Intelligent System Technologies 1", cr: "3(2-2-5)", g: "elec", tr: 0, p: [1, 2, 6, 7],
    d: "หัวข้อคัดสรรด้านเทคโนโลยีปัญญาประดิษฐ์และระบบอัจฉริยะที่เกิดใหม่ในขณะนั้น หลักการและสถาปัตยกรรมของเทคโนโลยีที่ศึกษา การทดลองใช้เครื่องมือและกรอบงานร่วมสมัย การวิเคราะห์ข้อจำกัด ความเสี่ยง และความเหมาะสมกับบริบทเกษตร อุตสาหกรรม หรือองค์กร การพัฒนาชิ้นงานหรือกรณีศึกษาเชิงประจักษ์ และการประเมินแนวโน้มการนำไปใช้จริง",
    dEn: "Selected topics in emerging artificial intelligence and intelligent system technologies; principles and architectures of the technology under study; hands-on experimentation with contemporary tools and frameworks; analysis of limitations, risks, and suitability for agricultural, industrial, or enterprise contexts; development of an artifact or empirical case study; assessment of adoption trends; the course outline must be approved by the curriculum committee before each offering" },
  { c: "EN-714-14052", s: "Special Topics 2", t: "หัวข้อพิเศษด้านเทคโนโลยีเกิดใหม่ทางปัญญาประดิษฐ์และระบบอัจฉริยะ 2", e: "Special Topics in Emerging Artificial Intelligence and Intelligent System Technologies 2", cr: "3(2-2-5)", g: "elec", tr: 0, p: [1, 2, 6, 7],
    d: "หัวข้อคัดสรรด้านเทคโนโลยีปัญญาประดิษฐ์และระบบอัจฉริยะที่เกิดใหม่ในขณะนั้น หลักการและสถาปัตยกรรมของเทคโนโลยีที่ศึกษา การทดลองใช้เครื่องมือและกรอบงานร่วมสมัย การวิเคราะห์ข้อจำกัด ความเสี่ยง และความเหมาะสมกับบริบทเกษตร อุตสาหกรรม หรือองค์กร การพัฒนาชิ้นงานหรือกรณีศึกษาเชิงประจักษ์ และการประเมินแนวโน้มการนำไปใช้จริง โดยหัวข้อที่เปิดสอนต้องไม่ซ้ำกับหัวข้อของ EN-714-14051",
    dEn: "Selected topics in emerging artificial intelligence and intelligent system technologies; principles and architectures of the technology under study; hands-on experimentation with contemporary tools and frameworks; analysis of limitations, risks, and suitability for agricultural, industrial, or enterprise contexts; development of an artifact or empirical case study; assessment of adoption trends; and the course outline must be approved by the curriculum committee before each offering, with a topic that does not duplicate that of EN-714-14051" },

  /* ================= 2.5 กลุ่มวิชาโครงงานและสัมมนา ================= */
  { c: "EN-714-12017", s: "Seminar", t: "สัมมนาวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ", e: "Seminar in Artificial Intelligence Engineering and Intelligent Systems", cr: "1(0-2-1)", g: "proj", y: 3, sem: 5, p: [3, 4, 7],
    d: "แนวโน้มและเทคโนโลยีอุบัติใหม่ด้านปัญญาประดิษฐ์ กรณีศึกษาการประยุกต์ใช้ในภาคเกษตรกรรม อุตสาหกรรม และธุรกิจ การสืบค้น ประเมิน และวิจารณ์บทความวิชาการ การเปรียบเทียบแนวทางและระบุข้อจำกัดของเทคโนโลยี ผลกระทบด้านเทคนิค จริยธรรม และอุตสาหกรรม ความซื่อสัตย์ทางวิชาการ และการจัดทำรายงานและนำเสนอเชิงวิชาชีพทั้งภาษาไทยและภาษาอังกฤษ",
    dEn: "Trends and emerging technologies in artificial intelligence at national and international levels; case studies in agriculture, industry, and business innovation; literature searching, evaluation, and critique; comparison of approaches and identification of technological limitations; consideration of technical, ethical, and industrial implications; academic reporting and professional presentation in Thai and English; preparation of an individual development plan" },
  { c: "EN-714-12018", s: "Project Prep", t: "การเตรียมความพร้อมโครงงานวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ", e: "Artificial Intelligence Engineering and Intelligent Systems Project Preparation", cr: "1(0-2-1)", g: "proj", y: 3, sem: 6, p: [1, 3, 4, 7], h: ["EN-714-12017"],
    d: "การระบุปัญหาจริงจากภาคอุตสาหกรรม เกษตรกรรม องค์กร หรือชุมชน การวิเคราะห์ผู้มีส่วนได้ส่วนเสียและข้อกำหนด การกำหนดขอบเขต วัตถุประสงค์ และเกณฑ์การยอมรับ การออกแบบแนวทางวิศวกรรม วิธีทดลอง และแผนทดสอบ การประเมินความเป็นไปได้ งบประมาณ และความยั่งยืนตามโมเดลเศรษฐกิจบีซีจี และการนำเสนอข้อเสนอโครงงานเพื่อขออนุมัติ",
    dEn: "Identification of an authentic industrial or community problem; requirements analysis; literature review; project scoping; engineering design and methodology; data, safety, ethics, budget, and risk planning; proposal preparation and presentation" },
  { c: "EN-714-12020", s: "WIL Capstone", t: "โครงงานบูรณาการกับสถานประกอบการทางวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ", e: "Workplace-Integrated Capstone Project in Artificial Intelligence and Intelligent System Engineering", cr: "3(1-4-4)", g: "proj", y: 4, sem: 7, p: [1, 2, 3, 4, 5, 6, 7], h: ["EN-714-12018"], plan: "B", planNote: "เปิดเฉพาะแผน ข การเรียนรู้ร่วมการทำงาน (CWIE) ในภาคการศึกษาที่ 7 แทน EN-714-12019",
    d: "การดำเนินโครงงานจากโจทย์จริงของสถานประกอบการ การทวนสอบปัญหาและเกณฑ์การยอมรับร่วมกับสถานประกอบการ การออกแบบ พัฒนา และบูรณาการระบบภายใต้ข้อจำกัดด้านข้อมูลและทรัพยากรขององค์กร การทดลองเพื่อประเมินสมรรถนะและความปลอดภัย การบริหารความเสี่ยงร่วมกับพี่เลี้ยง การรักษาความลับและธรรมาภิบาลข้อมูล และการสอบป้องกันต่อคณะกรรมการร่วม",
    dEn: "Execution of an AI or intelligent-systems project on a real problem from the host organization; verification of the problem, requirements, and acceptance criteria jointly with the organization; design, development, and integration under the organization's data, time, and resource constraints; design and conduct of experiments to evaluate performance, reliability, and safety; project and risk management with the workplace mentor; preparation of ethics, confidentiality, and data-governance evidence; demonstration and defense before a joint university-industry committee" },
  { c: "EN-714-12019", s: "Capstone", plan: "A", planNote: "แผน ก แผนปกติ ภาคการศึกษาที่ 7", t: "โครงงานวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ", e: "Artificial Intelligence Engineering and Intelligent Systems Project", cr: "3(1-4-4)", g: "proj", y: 4, sem: 7, p: [1, 2, 3, 4, 5, 6, 7], h: ["EN-714-12018"],
    d: "การดำเนินโครงงานวิศวกรรมปัญญาประดิษฐ์หรือระบบอัจฉริยะที่ได้รับอนุมัติ การทวนสอบปัญหา ข้อกำหนด และเกณฑ์การยอมรับ การออกแบบ พัฒนา และบูรณาการข้อมูล ปัญญาประดิษฐ์ ซอฟต์แวร์ อุปกรณ์ตรวจวัด หรือระบบควบคุม การทดลองเพื่อประเมินสมรรถนะ ความน่าเชื่อถือ และความปลอดภัย การบริหารโครงงานและความเสี่ยง และการสาธิตและสอบป้องกันต่อคณะกรรมการ",
    dEn: "Execution of an approved artificial intelligence engineering or intelligent systems project; iterative design and development; experimentation and validation; project and risk management; responsible teamwork; documentation; demonstration and oral defense of results" },

  /* ================= 2.6 กลุ่มวิชาประสบการณ์ภาคสนาม ================= */
  { c: "EN-714-17001", s: "Co-op Prep", t: "เตรียมความพร้อมสหกิจศึกษา", e: "Cooperative Education Preparation", cr: "1(0-2-1)", g: "field", y: 3, sem: 5, p: [3, 4, 5, 7], co: ["EN-714-12018"],
    d: "ปรัชญา เป้าประสงค์ ระเบียบ และขั้นตอนของสหกิจศึกษา การค้นหาและเลือกสถานประกอบการที่เหมาะสม การจัดทำประวัติย่อ แฟ้มสะสมทักษะ และการสัมภาษณ์ทั้งภาษาไทยและภาษาอังกฤษ จรรยาบรรณวิชาชีพ กฎหมายแรงงาน ทรัพย์สินทางปัญญา ธรรมาภิบาลปัญญาประดิษฐ์ และความปลอดภัยในการทำงาน และการจัดทำแผนปฏิบัติงานและรูปแบบรายงานสหกิจศึกษา",
    dEn: "Preparation for cooperative education; workplace readiness; professional ethics and safety; communication and teamwork; job application and interview skills; work planning; intellectual property and confidentiality; preparation of a cooperative-education learning plan" },
  { c: "EN-714-17002", s: "Co-op", t: "สหกิจศึกษา", e: "Cooperative Education", cr: "6(0-40-0)", g: "field", y: 4, sem: 8, p: [2, 3, 4, 5, 7], h: ["EN-714-17001"], preNote: "และโครงงานตามแผนที่เลือก (EN-714-12019 แผน ก หรือ EN-714-12020 แผน ข)",
    d: "การปฏิบัติงานจริงในสถานประกอบการที่ได้รับอนุมัติไม่น้อยกว่าสิบหกสัปดาห์ การวิเคราะห์ปัญหา ข้อกำหนด และเกณฑ์การยอมรับของงาน การประยุกต์และบูรณาการความรู้ด้านวิศวกรรมและปัญญาประดิษฐ์ การเก็บข้อมูล ทดลอง และตีความผล การทำงานร่วมกับทีมสหวิทยาการ การบริหารงานและความเสี่ยง การปฏิบัติตามจรรยาบรรณและธรรมาภิบาล และการจัดทำรายงาน",
    dEn: "Supervised professional practice in an approved workplace for at least sixteen weeks; analysis of the assigned problem, requirements, and acceptance criteria; application and integration of engineering and AI knowledge; data collection, experimentation, and interpretation of results; collaboration in a multidisciplinary team; management of work and risk; compliance with professional ethics and governance; preparation of the cooperative-education report" },

  /* ========= 2.4 วิชาชีพเลือก — แขนงที่ 1 เกษตรอัจฉริยะ (EN-714-14001..315) ========= */
  { c: "EN-714-12016", s: "Workshop 5", t: "ปฏิบัติการวิศวกรรมเชิงบูรณาการ 5: ระบบอัตโนมัติและการผลิตอัจฉริยะ", e: "Integrated Engineering Workshop 5: Industrial Automation and Smart Manufacturing", cr: "1(0-2-1)", g: "track", y: 3, sem: 6, p: [2, 5, 6], w: ["EN-714-12012"],
    d: "การเขียนโปรแกรมตัวควบคุมแบบโปรแกรมได้ด้วยภาษาแลดเดอร์และฟังก์ชันบล็อก การต่อสัญญาณอินพุตและเอาต์พุตแบบดิจิทัลและแอนะล็อก การตั้งค่าส่วนต่อประสานมนุษย์กับเครื่องจักรและระบบสกาดา การเชื่อมต่อเซนเซอร์และอุปกรณ์ภาคสนามเข้ากับระบบควบคุม การทดสอบเซลล์หุ่นยนต์ การตรวจสอบความปลอดภัย และการจัดทำเอกสารส่งมอบ",
    dEn: "Programming of programmable logic controllers with ladder and function block languages; wiring of digital and analog signals; configuration of human-machine interfaces and SCADA; connection of sensors and field devices to control systems; robotic-cell testing; analysis of overall equipment effectiveness; safety verification; handover documentation" },

  { c: "EN-714-14001", s: "เกษตร-ชลประทาน", t: "เกษตรกรรมอัจฉริยะและการจัดชลประทาน", e: "Smart Agriculture and Irrigation Management", cr: "3(2-2-5)", g: "elec", tr: 1, p: [2, 6],
    d: "หลักการเกษตรกรรมอัจฉริยะและการเกษตรแม่นยำ การวิเคราะห์และจัดการทรัพยากรดินและน้ำด้วยปัญญาประดิษฐ์ การออกแบบระบบชลประทานอัจฉริยะทั้งน้ำหยดและสปริงเกลอร์ การตรวจวัดความชื้นดินด้วยเซนเซอร์และไอโอที การพยากรณ์ความต้องการน้ำของพืชด้วยการเรียนรู้ของเครื่อง การควบคุมการให้น้ำอัตโนมัติ และระบบเตือนภัยแล้งและน้ำท่วม" },
  { c: "EN-714-14002", s: "AI เกษตรแม่นยำ", t: "ปัญญาประดิษฐ์สำหรับเกษตรกรรมแม่นยำ", e: "Artificial Intelligence for Precision Agriculture", cr: "3(2-2-5)", g: "elec", tr: 1, p: [2, 6],
    d: "แนวคิดเกษตรกรรมแม่นยำ การประยุกต์ใช้ปัญญาประดิษฐ์ในการผลิตพืชและปศุสัตว์ การจัดการและวิเคราะห์ข้อมูลจากเซนเซอร์ดิน สภาพอากาศ ดาวเทียม และอากาศยานไร้คนขับ การแนะนำการจัดการธาตุอาหารพืช การตรวจจับโรคพืชและแมลงศัตรูพืชด้วยคอมพิวเตอร์วิทัศน์และการเรียนรู้เชิงลึก และการพยากรณ์ผลผลิตและการวางแผนการผลิต" },
  { c: "EN-714-14003", s: "GIS เกษตร", t: "ระบบสารสนเทศภูมิศาสตร์และการวิเคราะห์พื้นที่ทางการเกษตร", e: "Geographic Information Systems and Spatial Analysis for Agriculture", cr: "3(2-2-5)", g: "elec", tr: 1, p: [6, 2],
    d: "หลักการและองค์ประกอบของระบบสารสนเทศภูมิศาสตร์ ข้อมูลเชิงพื้นที่และระบบพิกัดอ้างอิง การจัดการและวิเคราะห์ข้อมูลแบบเวกเตอร์และแรสเตอร์ การประมวลผลข้อมูลจากดาวเทียมและภาพถ่ายทางอากาศ การวิเคราะห์พื้นที่ด้วยวิธีซ้อนทับ บัฟเฟอร์ และเครือข่าย และการประยุกต์วางแผนการใช้ที่ดินและประเมินความเหมาะสมของพื้นที่ปลูกพืช" },
  { c: "EN-714-14004", s: "หลังการเก็บเกี่ยว", t: "เทคโนโลยีและนวัตกรรมการจัดการหลังการเก็บเกี่ยว", e: "Postharvest Management Technology and Innovation", cr: "3(3-0-6)", g: "elec", tr: 1, p: [2, 6],
    d: "หลักการและกระบวนการจัดการผลผลิตเกษตรหลังการเก็บเกี่ยว สรีรวิทยาของผลผลิตหลังการเก็บเกี่ยว การสูญเสียผลผลิตและแนวทางการลดความสูญเสีย การคัดแยกและคัดเกรดด้วยคอมพิวเตอร์วิทัศน์ ระบบอบแห้งและการเก็บรักษาอัจฉริยะ การควบคุมอุณหภูมิและความชื้นในโรงเก็บด้วยไอโอที และระบบตรวจสอบย้อนกลับและการรับรองคุณภาพผลผลิต" },
  { c: "EN-714-14005", s: "พยากรณ์ฟาร์ม", t: "การพยากรณ์และวิเคราะห์ข้อมูลฟาร์มด้วยปัญญาประดิษฐ์", e: "AI-Based Farm Data Forecasting and Analytics", cr: "3(2-2-5)", g: "elec", tr: 1, p: [6, 2, 3],
    d: "หลักการและวิธีการพยากรณ์ข้อมูลทางการเกษตรด้วยปัญญาประดิษฐ์ การจัดการข้อมูลขนาดใหญ่จากเครือข่ายเซนเซอร์ในฟาร์ม การวิเคราะห์อนุกรมเวลาสำหรับข้อมูลผลผลิตและสภาพอากาศ การสร้างตัวแบบพยากรณ์ผลผลิตด้วยการเรียนรู้เชิงลึก การพยากรณ์ราคาสินค้าเกษตร การวิเคราะห์ความเสี่ยง และการประเมินความถูกต้องของตัวแบบพยากรณ์" },
  { c: "EN-714-14006", s: "Plant Factory", t: "โรงงานผลิตพืชอัจฉริยะและเกษตรกรรมแนวดิ่ง", e: "Smart Plant Factories and Vertical Farming", cr: "3(2-2-5)", g: "elec", tr: 1, p: [2, 6],
    d: "โรงงานผลิตพืชปิดและเกษตรกรรมแนวดิ่ง สถาปัตยกรรมและองค์ประกอบของโรงงานผลิตพืช ระบบแสงเทียมแอลอีดีและการควบคุมสเปกตรัมแสงด้วยปัญญาประดิษฐ์ ระบบปลูกพืชโดยไม่ใช้ดิน การควบคุมสภาพแวดล้อมในโรงเรือนอัตโนมัติ การตรวจสอบสุขภาพพืชด้วยคอมพิวเตอร์วิทัศน์ และการวิเคราะห์ต้นทุนและผลตอบแทนของการลงทุน" },
  { c: "EN-714-14007", s: "ปศุสัตว์อัจฉริยะ", t: "เทคโนโลยีปัญญาประดิษฐ์เพื่อการปศุสัตว์อัจฉริยะ", e: "Artificial Intelligence Technology for Smart Livestock", cr: "3(2-2-5)", g: "elec", tr: 1, p: [2, 6],
    d: "การปศุสัตว์อัจฉริยะ การติดตามสุขภาพสัตว์ด้วยไอโอทีและเซนเซอร์สวมใส่ การวิเคราะห์พฤติกรรมสัตว์ด้วยคอมพิวเตอร์วิทัศน์ การพยากรณ์และตรวจจับโรคสัตว์ด้วยการเรียนรู้ของเครื่อง ระบบให้อาหารอัตโนมัติและการจัดการโภชนาการ การจัดการสภาพแวดล้อมในโรงเรือน และระบบตรวจสอบย้อนกลับผลิตภัณฑ์ปศุสัตว์" },
  { c: "EN-714-14008", s: "CV คัดเกรดเกษตร", t: "วิสัยทัศน์คอมพิวเตอร์สำหรับการจำแนกและคัดเกรดทางการเกษตร", e: "Computer Vision for Agricultural Classification and Grading", cr: "3(2-2-5)", g: "elec", tr: 1, p: [2, 6],
    d: "คอมพิวเตอร์วิทัศน์สำหรับการจำแนกและคัดเกรดผลผลิตเกษตร การออกแบบระบบกล้องและแสง การสร้างและจัดการชุดข้อมูลภาพเพื่อฝึกตัวแบบ การฝึกและปรับแต่งตัวแบบการเรียนรู้เชิงลึกเพื่อจำแนกประเภทและตรวจจับตำหนิ การวัดขนาดด้วยการประมวลผลภาพ การใช้ภาพหลายช่วงคลื่นประเมินคุณภาพภายใน และการบูรณาการกับระบบคัดแยกอัตโนมัติ" },
  { c: "EN-714-14009", s: "ML เซนเซอร์ฟาร์ม", t: "การเรียนรู้ของเครื่องและการวิเคราะห์ข้อมูลเซนเซอร์ในฟาร์ม", e: "Machine Learning and Farm Sensor Data Analytics", cr: "3(2-2-5)", g: "elec", tr: 1, p: [6, 2],
    d: "หลักการและสถาปัตยกรรมของเครือข่ายเซนเซอร์ในฟาร์ม การเก็บและส่งข้อมูลจากเซนเซอร์ดิน น้ำ อากาศ และพืช การประมวลผลและกรองสัญญาณรบกวน การเตรียมข้อมูลเซนเซอร์เพื่อการวิเคราะห์ การวิเคราะห์อนุกรมเวลาและการหารูปแบบ การสร้างตัวแบบเพื่อการพยากรณ์และการตัดสินใจ และการตรวจจับความผิดปกติพร้อมแสดงผลผ่านแผงควบคุม" },
  { c: "EN-714-14010", s: "จัดการผลิตพืช AI", t: "การจัดการการผลิตพืชอัจฉริยะด้วยปัญญาประดิษฐ์", e: "Artificial Intelligence for Smart Crop Production Management", cr: "3(2-2-5)", g: "elec", tr: 1, p: [2, 6, 7],
    d: "การผลิตพืชอัจฉริยะ การวิเคราะห์สมบัติของดินและการประเมินความอุดมสมบูรณ์ การวางแผนการใช้ปุ๋ยเฉพาะพื้นที่ การจัดการน้ำและการให้น้ำอย่างแม่นยำ การใช้ข้อมูลจากเซนเซอร์และอากาศยานไร้คนขับติดตามการเจริญเติบโต การวิเคราะห์โรคพืชด้วยการเรียนรู้เชิงลึก และการพัฒนาระบบสนับสนุนการตัดสินใจด้วยปัญญาประดิษฐ์เชิงสร้าง" },
  { c: "EN-714-14011", s: "หุ่นยนต์เกษตร", t: "หุ่นยนต์และระบบอัตโนมัติทางการเกษตร", e: "Agricultural Robotics and Automation", cr: "3(2-2-5)", g: "elec", tr: 1, p: [2, 1],
    d: "หุ่นยนต์และระบบอัตโนมัติทางการเกษตร องค์ประกอบของระบบหุ่นยนต์ทั้งเซนเซอร์ ตัวกระตุ้น และระบบควบคุม การประยุกต์ใช้ปัญญาประดิษฐ์และคอมพิวเตอร์วิทัศน์ในหุ่นยนต์เกษตร การนำทางอัตโนมัติและการวางแผนเส้นทาง การพ่นสาร การกำจัดวัชพืช และการเก็บเกี่ยว และการบูรณาการหุ่นยนต์เข้ากับระบบฟาร์มอัจฉริยะ" },
  { c: "EN-714-14012", s: "UAV/Remote เกษตร", t: "เทคโนโลยีอากาศยานไร้คนขับและการสำรวจระยะไกลเพื่อการเกษตร", e: "UAV Technology and Remote Sensing for Agriculture", cr: "3(2-2-5)", g: "elec", tr: 1, p: [2, 6],
    d: "หลักการทำงานและประเภทของอากาศยานไร้คนขับ การวางแผนเส้นทางการบินเพื่อการสำรวจทางการเกษตร การใช้เซนเซอร์ภาพหลายช่วงคลื่นและภาพความร้อนติดตามความสมบูรณ์ของพืช การวิเคราะห์ภาพถ่ายทางอากาศด้วยการเรียนรู้ของเครื่อง การจัดทำแผนที่ดัชนีพืชพรรณและการให้ปัจจัยการผลิตแบบผันแปร และกฎหมาย ใบอนุญาต และความปลอดภัยในการใช้งาน" },
  { c: "EN-714-14013", s: "ห่วงโซ่อุปทานเกษตร", t: "การจัดการห่วงโซ่อุปทานสินค้าเกษตรด้วยเทคโนโลยีอัจฉริยะ", e: "Smart Agricultural Supply Chain Management", cr: "3(3-0-6)", g: "elec", tr: 1, p: [6, 2, 7],
    d: "หลักการจัดการห่วงโซ่อุปทานและโลจิสติกส์สำหรับสินค้าเกษตร การใช้ปัญญาประดิษฐ์วางแผนการจัดหาและการกระจายผลผลิต การจัดการคลังสินค้าเกษตรอัจฉริยะด้วยไอโอที การตรวจสอบย้อนกลับด้วยเทคโนโลยีบล็อกเชน การพยากรณ์ความต้องการของตลาดเพื่อลดความสูญเสียอาหาร และการจัดเส้นทางการขนส่งเพื่อความโปร่งใสและความยั่งยืน" },
  { c: "EN-714-14014", s: "AI เทคโนชีวภาพเกษตร", t: "การประยุกต์ใช้ปัญญาประดิษฐ์ในเทคโนโลยีชีวภาพการเกษตร", e: "AI Applications in Agricultural Biotechnology", cr: "3(2-2-5)", g: "elec", tr: 1, p: [6, 1],
    d: "ความสัมพันธ์ระหว่างปัญญาประดิษฐ์และเทคโนโลยีชีวภาพการเกษตร การใช้การเรียนรู้ของเครื่องวิเคราะห์ข้อมูลพันธุกรรมพืชและสัตว์ การวิเคราะห์ลำดับดีเอ็นเอเพื่อคัดเลือกสายพันธุ์ที่ทนทาน การใช้ปัญญาประดิษฐ์ค้นหาสารออกฤทธิ์ทางชีวภาพเพื่อใช้เป็นชีวภัณฑ์ และจริยธรรมและความปลอดภัยทางชีวภาพ" },
  { c: "EN-714-14015", s: "ความเสี่ยง/ภูมิอากาศ AI", t: "การจัดการความเสี่ยงทางการเกษตรและการเปลี่ยนแปลงสภาพภูมิอากาศด้วยปัญญาประดิษฐ์", e: "Agricultural Risk and Climate Change Management with AI", cr: "3(3-0-6)", g: "elec", tr: 1, p: [6, 4],
    d: "ผลกระทบของการเปลี่ยนแปลงสภาพภูมิอากาศต่อการเกษตร การประยุกต์ใช้ปัญญาประดิษฐ์วิเคราะห์ข้อมูลภูมิอากาศขนาดใหญ่ การพยากรณ์สภาพอากาศสุดขั้ว ภัยแล้ง และอุทกภัย การประเมินความเสี่ยงต่อผลผลิตด้วยตัวแบบคอมพิวเตอร์ การออกแบบระบบเตือนภัยล่วงหน้า กลยุทธ์การปรับตัวของภาคการเกษตร และการประกันภัยพืชผลด้วยข้อมูลดาวเทียม" },

  /* ========= 2.4 วิชาชีพเลือก — แขนงที่ 2 AI ภาคอุตสาหกรรม (EN-714-14016..333) ========= */
  { c: "EN-714-14016", s: "Advanced Control/DCS", t: "การควบคุมกระบวนการขั้นสูงและระบบควบคุมแบบกระจาย", e: "Advanced Process Control and Distributed Control Systems", cr: "3(2-2-5)", g: "elec", tr: 2, p: [1, 2, 6], h: ["EN-714-12012", "EN-714-12005"],
    d: "การสร้างแบบจำลองพลวัตและการระบุระบบของกระบวนการอุตสาหกรรม การวิเคราะห์เสถียรภาพของวงควบคุม การปรับตั้งตัวควบคุมพีไอดีขั้นสูง การควบคุมแบบป้อนไปข้างหน้าและแบบหลายตัวแปร การควบคุมเชิงทำนายด้วยแบบจำลอง สถาปัตยกรรมระบบควบคุมแบบกระจายและการจัดการสัญญาณเตือน และการเชื่อมต่อกับสกาดาพร้อมประเมินสมรรถนะ" },
  { c: "EN-714-14017", s: "Predictive Maintenance", t: "การบำรุงรักษาเชิงพยากรณ์และป้องกันด้วยปัญญาประดิษฐ์", e: "AI-Based Predictive and Preventive Maintenance", cr: "3(2-2-5)", g: "elec", tr: 2, p: [6, 2],
    d: "หลักการและกลยุทธ์การบำรุงรักษาเครื่องจักรเชิงแก้ไข เชิงป้องกัน และเชิงพยากรณ์ การเก็บข้อมูลการสั่นสะเทือน เสียง และอุณหภูมิ การประมวลผลสัญญาณและการสกัดคุณลักษณะเพื่อวินิจฉัยเครื่องจักร ตัวแบบการเรียนรู้ของเครื่องเพื่อตรวจจับความผิดปกติและพยากรณ์ความเสียหาย ดิจิทัลทวินสำหรับจำลองสภาพเครื่องจักร และการวางแผนบำรุงรักษาอัตโนมัติ" },
  { c: "EN-714-14018", s: "คลังสินค้าอัจฉริยะ", t: "การออกแบบและการจัดการคลังสินค้าอัจฉริยะ", e: "Smart Warehouse Design and Management", cr: "3(2-2-5)", g: "elec", tr: 2, p: [2, 6],
    d: "หลักการและประเภทของระบบคลังสินค้าอัตโนมัติ การออกแบบและวางผังคลังสินค้าสำหรับโรงงานเกษตรอุตสาหกรรม ระบบจัดเก็บและเรียกคืนสินค้าอัตโนมัติ สายพานลำเลียง และรถลำเลียงอัตโนมัติ การใช้คอมพิวเตอร์วิทัศน์ตรวจสอบและคัดแยกสินค้า การติดตามสินค้าด้วยอาร์เอฟไอดี และการจัดการสินค้าคงคลังด้วยปัญญาประดิษฐ์" },
  { c: "EN-714-14019", s: "Advanced OR/Optimization", t: "การวิจัยดำเนินงานขั้นสูงและการหาค่าเหมาะที่สุดทางอุตสาหกรรม", e: "Advanced Operations Research and Industrial Optimization", cr: "3(2-2-5)", g: "elec", tr: 2, p: [1, 3, 6], h: ["EN-714-12010"],
    d: "การสร้างตัวแบบเพื่อการตัดสินใจทางอุตสาหกรรม การโปรแกรมเชิงเส้น จำนวนเต็มผสม ไม่เชิงเส้น และหลายวัตถุประสงค์ ตัวแบบโครงข่ายและการขนส่ง การจัดสรรทรัพยากร การจัดตารางการผลิต และการวางแผนสินค้าคงคลัง ทฤษฎีแถวคอยและการจำลองเหตุการณ์ไม่ต่อเนื่อง วิธีฮิวริสติกและเมตาฮิวริสติก และการใช้ซอฟต์แวร์ตัวแก้ปัญหาวิเคราะห์ความไว" },
  { c: "EN-714-14020", s: "อุตฯเกษตรแปรรูป", t: "เทคโนโลยีอุตสาหกรรมเกษตรและการแปรรูป", e: "Agro-Industrial and Processing Technology", cr: "3(3-0-6)", g: "elec", tr: 2, p: [1, 2],
    d: "หลักการและกระบวนการแปรรูปผลผลิตเกษตรในภาคอุตสาหกรรม มาตรฐานคุณภาพและความปลอดภัยอาหารตามจีเอ็มพี เอชเอซีซีพี และไอเอสโอ 22000 เทคโนโลยีการผลิตน้ำตาล แป้งมันสำปะหลัง และการสีข้าว การจัดการของเสียและน้ำเสีย การใช้พลังงานอย่างมีประสิทธิภาพ และการประยุกต์ใช้ปัญญาประดิษฐ์เพื่อเพิ่มประสิทธิภาพและลดต้นทุน",
    dEn: "Principles and processes of agro-industrial product processing; food quality and safety standards including GMP, HACCP, and ISO 22000; integrated sugarcane and sugar production technology; cassava starch extraction and production; rice milling and processing; waste and wastewater management; energy efficiency and cogeneration; applications of AI and digital technologies in processing operations" },
  { c: "EN-714-14021", s: "โรงสีข้าวอัจฉริยะ", t: "ปัญญาประดิษฐ์และการจัดการโรงสีข้าวอัจฉริยะ", e: "Artificial Intelligence and Smart Rice Mill Management", cr: "3(2-2-5)", g: "elec", tr: 2, p: [2, 6],
    d: "กระบวนการสีข้าวครบวงจรตั้งแต่การรับซื้อข้าวเปลือก การทำความสะอาด การกะเทาะเปลือก การขัดขาว การคัดแยก และการบรรจุ ระบบคอมพิวเตอร์วิทัศน์ตรวจสอบคุณภาพข้าวด้านความขาว ความชื้น และเมล็ดหัก ระบบอบแห้งข้าวเปลือกอัจฉริยะ การจัดการไซโลด้วยไอโอที การบำรุงรักษาเชิงพยากรณ์ และระบบตรวจสอบย้อนกลับคุณภาพข้าว",
    dEn: "Complete rice-milling processes from paddy procurement, cleaning, husking, whitening, sorting, and packaging; AI and computer-vision inspection of whiteness, moisture, broken grains, and impurities; smart paddy drying and automatic moisture control; IoT- and AI-based silo and storage management; predictive maintenance of milling machinery; digital twins and production-line simulation; traceability and rice-quality certification" },
  { c: "EN-714-14022", s: "อ้อย-น้ำตาลอัจฉริยะ", t: "เทคโนโลยีอัจฉริยะในกระบวนการผลิตอ้อยและน้ำตาล", e: "Smart Technology in Sugarcane and Sugar Production Processes", cr: "3(2-2-5)", g: "elec", tr: 2, p: [2, 6],
    d: "กระบวนการผลิตน้ำตาลครบวงจรตั้งแต่การรับอ้อย การหีบอ้อย การทำความสะอาดน้ำอ้อย การต้มเคี่ยว การตกผลึก และการบรรจุ ระบบปัญญาประดิษฐ์วิเคราะห์คุณภาพอ้อยและพยากรณ์ค่าความหวานซีซีเอส การควบคุมกระบวนการหีบด้วยตัวควบคุมแบบโปรแกรมได้ ระบบผลิตพลังงานร่วมจากชีวมวล และดิจิทัลทวินสำหรับโรงงานน้ำตาล",
    dEn: "Complete sugar production from cane receiving, weighing, and quality analysis through milling, juice clarification, evaporation, crystallization, and packaging; AI-based cane-quality analysis and CCS forecasting at receiving points; AI- and PLC-based milling process control and optimization; cogeneration and biomass electricity management; management of bagasse, filter cake, and molasses; digital-twin simulation and optimization of sugar plants" },
  { c: "EN-714-14023", s: "มันสำปะหลัง-แป้ง", t: "เทคโนโลยีอัจฉริยะในกระบวนการผลิตมันสำปะหลังและแป้ง", e: "Smart Technology in Cassava and Starch Production Processes", cr: "3(2-2-5)", g: "elec", tr: 2, p: [2, 6],
    d: "กระบวนการผลิตแป้งมันสำปะหลังครบวงจรตั้งแต่การรับวัตถุดิบ การล้างและปอกเปลือก การบดและสกัดแป้ง การอบแห้ง และการบรรจุ ระบบคอมพิวเตอร์วิทัศน์สำหรับตรวจรับและพยากรณ์ปริมาณแป้ง การควบคุมกระบวนการสกัดเพื่อเพิ่มอัตราการสกัด ระบบอบแห้งอัจฉริยะและการจัดการน้ำเสีย และการผลิตแป้งดัดแปรมูลค่าสูง" },
  { c: "EN-714-14024", s: "IoT เก็บรักษาผลผลิต", t: "เทคโนโลยีอินเทอร์เน็ตของสรรพสิ่งสำหรับการเก็บรักษาผลผลิตเกษตร", e: "Internet of Things Technology for Agricultural Produce Storage", cr: "3(2-2-5)", g: "elec", tr: 2, p: [2, 6],
    d: "หลักการและเทคโนโลยีไอโอทีสำหรับการเก็บรักษาผลผลิตเกษตร การออกแบบและติดตั้งเครือข่ายเซนเซอร์ในโรงเก็บ ไซโล และห้องเย็น เซนเซอร์อุณหภูมิ ความชื้น คาร์บอนไดออกไซด์ และเอทิลีน ระบบควบคุมสภาพแวดล้อมอัตโนมัติด้วยปัญญาประดิษฐ์ การพยากรณ์อายุการเก็บรักษา และการบูรณาการกับคลาวด์เพื่อการติดตามแบบเวลาจริง" },
  { c: "EN-714-14025", s: "อบแห้งอัจฉริยะ", t: "ระบบอบแห้งอัจฉริยะในอุตสาหกรรมเกษตร", e: "Smart Drying Systems in Agro-Industry", cr: "3(2-2-5)", g: "elec", tr: 2, p: [2, 1, 6],
    d: "หลักการถ่ายเทความร้อนและมวลสารในกระบวนการอบแห้ง สมบัติทางอุณหพลศาสตร์และการถ่ายเทความชื้นของผลผลิตเกษตร เทคโนโลยีการอบแห้งด้วยลมร้อน ไมโครเวฟ อินฟราเรด และปั๊มความร้อน การออกแบบและคำนวณระบบอบแห้ง การควบคุมกระบวนการอัตโนมัติ การตรวจวัดความชื้นแบบเวลาจริง และการเพิ่มประสิทธิภาพและประหยัดพลังงาน" },
  { c: "EN-714-14026", s: "ขนถ่ายวัสดุ/บรรจุภัณฑ์", t: "วิศวกรรมระบบขนถ่ายวัสดุและบรรจุภัณฑ์อัตโนมัติ", e: "Automated Material Handling and Packaging Systems Engineering", cr: "3(2-2-5)", g: "elec", tr: 2, p: [2, 1],
    d: "หลักการและการออกแบบระบบขนถ่ายวัสดุและบรรจุภัณฑ์สำหรับโรงงานเกษตรอุตสาหกรรม การเลือกใช้สายพานลำเลียง สกรูลำเลียง ลิฟต์ถัง และระบบลำเลียงด้วยลม การคำนวณความดันสูญเสียสำหรับวัสดุผง ความปลอดภัยจากฝุ่นระเบิด การออกแบบเครื่องจักรบรรจุภัณฑ์อัตโนมัติและการควบคุมด้วยสกาดา และการบำรุงรักษาเชิงพยากรณ์" },
  { c: "EN-714-14027", s: "Motion/Cobot Cell", t: "การควบคุมการเคลื่อนที่และวิศวกรรมเซลล์หุ่นยนต์ร่วมปฏิบัติงาน", e: "Motion Control and Collaborative Robot Cell Engineering", cr: "3(2-2-5)", g: "elec", tr: 2, p: [1, 2, 4], h: ["EN-714-12012"], w: ["EN-714-12005"],
    d: "การเลือกและกำหนดขนาดมอเตอร์ เซอร์โวมอเตอร์ สเต็ปเปอร์มอเตอร์ และระบบส่งกำลัง การควบคุมตำแหน่ง ความเร็ว แรงบิด และการเคลื่อนที่หลายแกน การสร้างเส้นทางและโปรไฟล์การเคลื่อนที่ การประสานงานกับตัวควบคุมแบบโปรแกรมได้และระบบวิสัยทัศน์ หุ่นยนต์ร่วมปฏิบัติงานและการออกแบบผังเซลล์หุ่นยนต์ และการประเมินความเสี่ยงพร้อมทดสอบการยอมรับ" },
  { c: "EN-714-14028", s: "Lean/AI Process", t: "การปรับปรุงกระบวนการด้วยลีนและปัญญาประดิษฐ์", e: "Lean and AI-Enabled Process Improvement", cr: "3(2-2-5)", g: "elec", tr: 2, p: [1, 2, 6], h: ["EN-714-12012"], w: ["EN-714-12010"],
    d: "หลักการลีนและซิกซ์ซิกมา การทำแผนที่สายธารคุณค่าและการลดความสูญเปล่า การไหล การดึง และงานมาตรฐาน กระบวนการดีเอ็มเอไอซี การวิเคราะห์ประสิทธิผลโดยรวมของเครื่องจักร เวลารอบงาน และของเสีย การควบคุมกระบวนการเชิงสถิติและการวิเคราะห์สาเหตุที่แท้จริง และการใช้การเรียนรู้ของเครื่องพยากรณ์คุณภาพและจัดลำดับโอกาสปรับปรุง" },
  { c: "EN-714-14029", s: "CV ควบคุมคุณภาพ", t: "วิสัยทัศน์คอมพิวเตอร์เพื่อการควบคุมคุณภาพในอุตสาหกรรม", e: "Computer Vision for Industrial Quality Control", cr: "3(2-2-5)", g: "elec", tr: 2, p: [2, 6],
    d: "ระบบวิสัยทัศน์คอมพิวเตอร์อุตสาหกรรม การออกแบบระบบแสงสว่างและการเลือกเลนส์สำหรับการตรวจสอบคุณภาพ การเตรียมภาพและการกำจัดสัญญาณรบกวน การตรวจจับขอบ ตำหนิ และข้อบกพร่องของชิ้นงานบนสายพาน การใช้การเรียนรู้เชิงลึกจำแนกประเภทข้อบกพร่อง การวัดขนาดชิ้นงาน และการเชื่อมต่อกับหุ่นยนต์และระบบคัดแยกอัตโนมัติ" },
  { c: "EN-714-14030", s: "พลังงานอัจฉริยะโรงงาน", t: "การจัดการพลังงานอัจฉริยะในโรงงานอุตสาหกรรม", e: "Smart Energy Management in Industrial Plants", cr: "3(2-2-5)", g: "elec", tr: 2, p: [6, 2, 4],
    d: "หลักการจัดการและการอนุรักษ์พลังงานในโรงงานอุตสาหกรรม การตรวจสอบและวิเคราะห์การใช้พลังงานของระบบไฟฟ้า เครื่องจักร ระบบปรับอากาศ และหม้อไอน้ำ เทคโนโลยีพลังงานแสงอาทิตย์และการออกแบบระบบผลิตไฟฟ้าด้วยเซลล์แสงอาทิตย์ ระบบบริหารจัดการพลังงานแบบเวลาจริง และการวิเคราะห์ความคุ้มค่าและการลดก๊าซเรือนกระจก" },

  { c: "EN-714-14031", s: "Fluid Power AI", t: "ระบบนิวแมติกส์และไฮดรอลิกอัจฉริยะสำหรับวิศวกรรมปัญญาประดิษฐ์", e: "Intelligent Pneumatic and Hydraulic Systems for Artificial Intelligence Engineering", cr: "3(2-2-5)", g: "elec", tr: 2, p: [1, 2, 4, 6],
    d: "หลักการพื้นฐานของระบบนิวแมติกส์และไฮดรอลิก โครงสร้างและการทำงานของแหล่งจ่ายกำลัง วาล์ว และกระบอกสูบ การออกแบบวงจรควบคุมนิวแมติกส์ ไฮดรอลิก และไฟฟ้า–นิวแมติกส์ การเชื่อมต่อกับตัวควบคุมแบบโปรแกรมได้และอุปกรณ์เอดจ์ การใช้การเรียนรู้ของเครื่องบำรุงรักษาเชิงพยากรณ์ และความปลอดภัยและประสิทธิภาพพลังงานของระบบกำลังของไหล" },
  { c: "EN-714-14032", s: "Heat/Mass Transfer", t: "การถ่ายโอนความร้อนและมวลสารสำหรับระบบอัจฉริยะ", e: "Heat and Mass Transfer for Smart Systems", cr: "3(3-0-6)", g: "elec", tr: 2, p: [1, 2, 4, 6, 7],
    d: "หลักการถ่ายโอนความร้อนและมวลสาร การนำ การพา และการแผ่รังสีความร้อน การวิเคราะห์การนำความร้อนสภาวะคงตัวและไม่คงตัว การเลือกฉนวนความร้อน การแพร่และการถ่ายโอนมวลสาร การเลือกและวิเคราะห์อุปกรณ์แลกเปลี่ยนความร้อน และการจัดการความร้อนสำหรับฮาร์ดแวร์ปัญญาประดิษฐ์ ระบบอบแห้ง ห้องเย็น และระบบพลังงาน" },
  { c: "EN-714-14033", s: "Industrial Safety", t: "วิศวกรรมความปลอดภัยอัจฉริยะ อาชีวอนามัย และกฎหมายอุตสาหกรรม", e: "Intelligent Safety Engineering, Occupational Health and Industrial Law", cr: "3(2-2-5)", g: "elec", tr: 2, p: [1, 2, 3, 4, 5, 6],
    d: "หลักการวิศวกรรมความปลอดภัยและอาชีวอนามัยในโรงงาน กฎหมาย ข้อบังคับ และมาตรฐานความปลอดภัยทางวิศวกรรม การชี้บ่งอันตรายและการประเมินความเสี่ยงด้วยการวิเคราะห์ความปลอดภัยของงานและการวิเคราะห์รูปแบบและผลกระทบของความขัดข้อง ความปลอดภัยเชิงหน้าที่ อินเตอร์ล็อก และระบบหยุดฉุกเฉิน สรีรศาสตร์อุตสาหกรรม และการใช้เซนเซอร์เฝ้าระวังความเสี่ยง" },

  /* ========= 2.4 วิชาชีพเลือก — แขนงที่ 3 นวัตกรรมปัญญาประดิษฐ์ระดับองค์กร (EN-714-14036..348) ========= */
  { c: "EN-714-14034", s: "ออกแบบเครื่องจักรกล", t: "การออกแบบเครื่องจักรกลอัจฉริยะ", e: "Intelligent Machine Design", cr: "3(2-2-5)", g: "elec", tr: 2, p: [1, 2], h: ["EN-714-11003"], w: ["EN-714-11001"],
    d: "การประยุกต์หลักการทางวิศวกรรมสำหรับการออกแบบเครื่องจักรกล การวิเคราะห์ภาระ ความเค้น และความเมื่อยล้าของชิ้นส่วนเครื่องจักร การเลือกวัสดุและกระบวนการผลิต การออกแบบชิ้นส่วนส่งกำลัง เพลา เฟือง และตลับลูกปืน การสร้างแบบจำลองสามมิติและการวิเคราะห์ด้วยไฟไนต์เอลิเมนต์ และการใช้ปัญญาประดิษฐ์หาค่าเหมาะที่สุดของการออกแบบ",
    dEn: "Application of engineering principles to machine design; analysis of loads, stresses, fatigue, and component safety; selection of materials and manufacturing processes; design of power-transmission components, shafts, gears, belts, and bearings; engineering drawing and three-dimensional computer modeling; finite element analysis; integration of sensors into machines; AI for design optimization and failure prediction" },
  { c: "EN-714-14035", s: "ออกแบบเครื่องจักรชั้นสูง", t: "การออกแบบเครื่องจักรกลชั้นสูงสำหรับระบบอัตโนมัติและหุ่นยนต์", e: "Advanced Machine Design for Automation and Robotics", cr: "3(2-2-5)", g: "elec", tr: 2, p: [1, 2, 4], h: ["EN-714-14034"], w: ["EN-714-12012"],
    d: "ประเภทและการทำงานของเครื่องจักรกลในระบบอัตโนมัติและหุ่นยนต์ การออกแบบกลไกและระบบส่งกำลังสำหรับการเคลื่อนที่แม่นยำ จลนศาสตร์และพลศาสตร์ของกลไกและแขนกล การเลือกมอเตอร์ เซอร์โว และชุดขับ การออกแบบโครงสร้างเพื่อความแข็งแรงและการสั่นสะเทือนต่ำ การบูรณาการระบบควบคุมและการมองเห็นของเครื่องจักร และการประเมินความเสี่ยง",
    dEn: "Types and operation of machinery in automation and robotic systems; design of mechanisms and transmission systems for precise motion; kinematics and dynamics of mechanisms and manipulators; selection of motors, servo and stepper drives; machine structure design for stiffness and low vibration; design of fixtures and end effectors; integration of control systems, sensors, and machine vision; risk assessment and acceptance testing" },

  { c: "EN-714-14036", s: "Advanced Data Eng", t: "วิศวกรรมข้อมูลขั้นสูงและการวางท่อข้อมูล", e: "Advanced Data Engineering and Data Pipelines", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 6],
    d: "สถาปัตยกรรมและการออกแบบท่อข้อมูลขั้นสูงสำหรับระบบปัญญาประดิษฐ์ การประมวลผลข้อมูลแบบกระแสและแบบกระจาย การออกแบบสถาปัตยกรรมที่เก็บข้อมูลขนาดใหญ่ การจัดการคุณภาพและธรรมาภิบาลข้อมูลในองค์กร การสร้างท่อข้อมูลแบบเวลาจริง การบูรณาการข้อมูลจากหลายแหล่ง และการติดตามและบริหารจัดการท่อข้อมูลในการทำงานจริง" },
  { c: "EN-714-14037", s: "Advanced LLM", t: "ตัวแบบภาษาขนาดใหญ่ขั้นสูง", e: "Advanced Large Language Models", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 6, 7], h: ["EN-714-12014"], w: ["EN-714-12003"],
    d: "สถาปัตยกรรมและกระบวนการทำงานของตัวแบบภาษาขนาดใหญ่ การจัดเตรียมชุดข้อมูลเฉพาะโดเมน การปรับตัวแบบตามคำสั่งและการปรับแบบประหยัดพารามิเตอร์ การบีบอัดและลดความละเอียดตัวแบบ การประเมินความถูกต้อง การให้เหตุผล และความทนทาน การเพิ่มประสิทธิภาพการอนุมานด้านความเร็วและต้นทุน และการให้บริการตัวแบบพร้อมติดตามการเสื่อมของสมรรถนะ" },
  { c: "EN-714-14038", s: "AI Reliability/Safety", t: "ความน่าเชื่อถือและความปลอดภัยของปัญญาประดิษฐ์", e: "AI Reliability and Safety", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 4, 6], h: ["EN-714-12013"], w: ["EN-714-12007"],
    d: "วิศวกรรมความน่าเชื่อถือและความปลอดภัยของระบบปัญญาประดิษฐ์ การกำหนดข้อกำหนดและเกณฑ์ยอมรับสมรรถนะ การสร้างชุดทดสอบสำหรับข้อมูลนอกการแจกแจงและกรณีขอบ การวัดความไม่แน่นอนและการสอบเทียบความเชื่อมั่น ความทนทานต่อการโจมตีแบบปรปักษ์ การประเมินความลำเอียงและความเป็นธรรม และการจัดทำบัตรตัวแบบพร้อมหลักฐานการประกันคุณภาพ" },
  { c: "EN-714-14039", s: "Enterprise AI Arch", t: "สถาปัตยกรรมปัญญาประดิษฐ์ระดับองค์กร", e: "Enterprise AI Architecture", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 4, 7], h: ["EN-714-12013"], w: ["EN-714-12007"],
    d: "การออกแบบสถาปัตยกรรมปัญญาประดิษฐ์ระดับองค์กร การแบ่งขอบเขตโดเมนและบริการ สถาปัตยกรรมขับเคลื่อนด้วยเหตุการณ์ ส่วนต่อประสานและการจัดการเอพีไอ การบูรณาการกับระบบวางแผนทรัพยากรองค์กรและกระบวนการทำงานเดิม การจัดการอัตลักษณ์และสิทธิ์ การออกแบบระบบที่ขยายขนาดได้และมีความพร้อมใช้สูง และการสังเกตการณ์ระบบพร้อมบริหารต้นทุนคลาวด์" },
  { c: "EN-714-14040", s: "UX/UI ระบบอัจฉริยะ", t: "การออกแบบประสบการณ์ผู้ใช้สำหรับระบบอัจฉริยะ", e: "UX/UI Design for Intelligent Systems", cr: "3(3-0-6)", g: "elec", tr: 3, p: [3, 2],
    d: "หลักการและกระบวนการออกแบบประสบการณ์ผู้ใช้และส่วนต่อประสานสำหรับระบบปัญญาประดิษฐ์ การวิจัยและวิเคราะห์ความต้องการผู้ใช้ การคิดเชิงออกแบบ การออกแบบโครงร่างและต้นแบบ การออกแบบแผงควบคุมข้อมูล หลักการปัญญาประดิษฐ์ที่อธิบายได้สำหรับส่วนต่อประสานที่โปร่งใส และการทดสอบความสามารถในการใช้งานและการออกแบบที่ครอบคลุม" },
  { c: "EN-714-14041", s: "AI การแพทย์", t: "ปัญญาประดิษฐ์ทางการแพทย์และสุขภาพ", e: "Artificial Intelligence in Medical and Healthcare", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 4, 6],
    d: "หลักการประยุกต์ใช้ปัญญาประดิษฐ์ในทางการแพทย์และระบบสาธารณสุข การจัดการฐานข้อมูลเวชระเบียนอิเล็กทรอนิกส์ การพัฒนาตัวแบบเพื่อการวินิจฉัยโรคเบื้องต้น การพยากรณ์ความเสี่ยงทางสุขภาพจากข้อมูลพฤติกรรม ระบบแนะนำการรักษาเฉพาะบุคคล การบูรณาการกับอุปกรณ์สวมใส่เพื่อติดตามสัญญาณชีพ และจริยธรรมและความเป็นส่วนตัวของข้อมูลผู้ป่วย" },
  { c: "EN-714-14042", s: "วิเคราะห์ภาพการแพทย์", t: "การวิเคราะห์ข้อมูลภาพทางการแพทย์", e: "Medical Image Analysis", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 6],
    d: "หลักการประมวลผลและการวิเคราะห์ภาพทางการแพทย์ การทำงานกับภาพรังสีเอกซ์ ภาพถ่ายรังสีส่วนตัดอาศัยคอมพิวเตอร์ และภาพคลื่นแม่เหล็กไฟฟ้า การใช้การเรียนรู้เชิงลึกเพื่อการตรวจจับและแบ่งส่วนอวัยวะ การวิเคราะห์ความผิดปกติและรอยโรค การลดสัญญาณรบกวนและเพิ่มความคมชัดของภาพ และการบูรณาการกับระบบจัดเก็บภาพทางการแพทย์พร้อมประเมินตัวแบบ" },
  { c: "EN-714-14043", s: "FinTech + AI", t: "เทคโนโลยีทางการเงินและปัญญาประดิษฐ์", e: "Financial Technology and Artificial Intelligence", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 6, 4],
    d: "เทคโนโลยีทางการเงินและนวัตกรรมบริการทางการเงิน การประยุกต์ใช้ปัญญาประดิษฐ์ในอุตสาหกรรมการเงินและการธนาคาร ระบบการชำระเงินอิเล็กทรอนิกส์และเทคโนโลยีบล็อกเชน การวิเคราะห์ความเสี่ยงด้านสินเชื่อ การตรวจจับการทุจริตทางการเงิน ระบบการลงทุนอัตโนมัติ และกฎระเบียบด้านเทคโนโลยีทางการเงิน" },
  { c: "EN-714-14044", s: "วิเคราะห์คาดการณ์การเงิน", t: "การวิเคราะห์ข้อมูลเชิงคาดการณ์ทางการเงิน", e: "Predictive Data Analysis in Finance", cr: "3(2-2-5)", g: "elec", tr: 3, p: [6, 2],
    d: "เทคนิคการวิเคราะห์ข้อมูลเชิงคาดการณ์สำหรับตลาดการเงิน การวิเคราะห์ข้อมูลอนุกรมเวลาทางการเงิน การสร้างตัวแบบพยากรณ์ราคาสินทรัพย์ด้วยการเรียนรู้เชิงลึก การวิเคราะห์ความรู้สึกจากข่าวสารและสื่อสังคมออนไลน์ การบริหารความเสี่ยงและพอร์ตการลงทุนด้วยปัญญาประดิษฐ์ และการสร้างและทดสอบระบบเทรดอัตโนมัติพร้อมแสดงภาพข้อมูล" },
  { c: "EN-714-14045", s: "AI Venture", t: "การสร้างธุรกิจปัญญาประดิษฐ์", e: "AI Venture Creation", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 3, 7], h: ["EN-714-12009"],
    d: "การต่อยอดต้นแบบปัญญาประดิษฐ์สู่ธุรกิจ การตรวจสอบตลาดและความพร้อมของเทคโนโลยี การกำหนดรูปแบบรายได้ ราคา และเศรษฐศาสตร์ต่อหน่วย กลยุทธ์เข้าสู่ตลาดและการบริหารโครงการนำร่อง การจัดการทรัพย์สินทางปัญญาและข้อตกลงระดับบริการ และการจัดทำประมาณการทางการเงินและการนำเสนอแก่นักลงทุน" },
  { c: "EN-714-14046", s: "จัดการโครงการซอฟต์แวร์", t: "การจัดการโครงการซอฟต์แวร์อัจฉริยะ", e: "Intelligent Software Project Management", cr: "3(3-0-6)", g: "elec", tr: 3, p: [7, 5, 3],
    d: "หลักการและระเบียบวิธีบริหารโครงการซอฟต์แวร์อัจฉริยะ การบริหารโครงการแบบอไจล์และสครัม การวางแผนและจัดการทรัพยากรสำหรับโครงการที่ขับเคลื่อนด้วยข้อมูล การประเมินความเสี่ยงและระยะเวลาของโครงการพัฒนาตัวแบบ การจัดการวงจรชีวิตของระบบการเรียนรู้ของเครื่อง และการควบคุมคุณภาพและการวัดผลความสำเร็จของโครงการ" },
  { c: "EN-714-14047", s: "ธุรกิจ/ตลาดดิจิทัล AI", t: "การพัฒนาธุรกิจและการตลาดดิจิทัลด้วยปัญญาประดิษฐ์", e: "Business Development and Digital Marketing with AI", cr: "3(3-0-6)", g: "elec", tr: 3, p: [7, 6, 3],
    d: "แนวคิดการพัฒนาธุรกิจดิจิทัลโดยใช้ปัญญาประดิษฐ์เป็นฐาน การสร้างกลยุทธ์การตลาดดิจิทัลที่ขับเคลื่อนด้วยข้อมูล การวิเคราะห์และแบ่งกลุ่มลูกค้าเป้าหมายด้วยการเรียนรู้ของเครื่อง การสร้างเนื้อหาการตลาดอัตโนมัติด้วยปัญญาประดิษฐ์เชิงสร้าง ระบบแนะนำสินค้าแบบเฉพาะบุคคล และการวิเคราะห์ประสิทธิผลของแคมเปญและการใช้แชตบอต" },
  { c: "EN-714-14048", s: "AI Product Mgmt", t: "การจัดการผลิตภัณฑ์ปัญญาประดิษฐ์", e: "AI Product Management", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 3, 5, 7], h: ["EN-714-12009"], w: ["EN-714-12013"],
    d: "การจัดการผลิตภัณฑ์ปัญญาประดิษฐ์ตลอดวงจรชีวิต การกำหนดวิสัยทัศน์ กลุ่มผู้ใช้ และคุณค่าที่เสนอ การจัดทำแผนที่เส้นทางผลิตภัณฑ์และเกณฑ์จัดลำดับความสำคัญ การกำหนดตัวชี้วัดผลิตภัณฑ์และข้อจำกัดด้านความเสี่ยง การออกแบบปฏิสัมพันธ์ระหว่างมนุษย์กับปัญญาประดิษฐ์ การทดลองแบบเอ/บี และการตัดสินใจขยาย ปรับ หรือยุติผลิตภัณฑ์จากหลักฐาน" },
  { c: "EN-714-14049", s: "VR/AR + AI", t: "เทคโนโลยีโลกเสมือนจริงและปัญญาประดิษฐ์", e: "Virtual Reality Technology and Artificial Intelligence", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 7],
    d: "เทคโนโลยีโลกเสมือนจริง ความเป็นจริงเสริม และความเป็นจริงผสม การบูรณาการปัญญาประดิษฐ์กับการสร้างสภาพแวดล้อมจำลอง การสร้างเนื้อหาสามมิติด้วยปัญญาประดิษฐ์เชิงสร้าง การโต้ตอบกับวัตถุเสมือนด้วยคอมพิวเตอร์วิทัศน์และการประมวลผลภาษาธรรมชาติ การพัฒนาแอปพลิเคชันสำหรับการฝึกอบรมอุตสาหกรรมและการตลาดดิจิทัล และการวิเคราะห์พฤติกรรมผู้ใช้" },
  { c: "EN-714-14050", s: "AI Governance/Risk", t: "ธรรมาภิบาลและความเสี่ยงของปัญญาประดิษฐ์", e: "AI Governance and Risk", cr: "3(2-2-5)", g: "elec", tr: 3, p: [3, 4, 7], h: ["EN-714-12007"], w: ["EN-714-12013"],
    d: "กรอบธรรมาภิบาลและการบริหารความเสี่ยงของปัญญาประดิษฐ์ การจัดทำบัญชีระบบและจำแนกระดับความเสี่ยง การประเมินผลกระทบด้านสิทธิ ความเป็นส่วนตัว และความเป็นธรรม การกำหนดบทบาท ความรับผิดชอบ และการกำกับโดยมนุษย์ การปฏิบัติตามกฎหมายคุ้มครองข้อมูลและมาตรฐานที่เกี่ยวข้อง และการจัดทำทะเบียนความเสี่ยง บัตรตัวแบบ และหลักฐานสำหรับการตรวจประเมิน" }
];

// เติมคำอธิบายภาษาอังกฤษแบบมาตรฐานให้วิชาที่เอกสารใช้รูปแบบมาตรฐาน
export const COURSES = RAW.map(c => {
  const revision = COURSE_REVISION[c.c];
  const cloRevision = CLO_REVISION[c.c];
  return {
    ...c,
    ...revision,
    p: cloRevision
      ? [...new Set(cloRevision.clos.flatMap(clo => clo.plo.map(([plo]) => plo)))].sort((a, b) => a - b)
      : c.p,
    dEn: revision?.dEn || c.dEn || DEN[c.c] || boiler(c.e, CTX[c.ctx || (c.tr ? `e${c.tr}` : c.g)] || CTX.eng)
  };
});

export const CORE = COURSES.filter(c => c.sem && c.g !== "ge" && c.g !== "elec");

/* แผนการเรียน 125 นก.: ปี 1 = 38 · ปี 2 = 38 · ปี 3 = 31 · ปี 4 = 18 นก.
   ภาค 1-4 ที่ 19 นก. โดยย้ายวิชาเลือกเสรีจากภาค 7 มากระจายในภาค 3 และ 4 · ภาค 7 เหลือ 12 นก. เพื่อให้เป็นภาคโครงงานและวิชาเลือกชีพเข้มข้น
   ภาค 6 = 17 นก. และภาค 7 = 15 นก. หลังย้าย EN-714-17001 เตรียมความพร้อมสหกิจศึกษาจากภาค 7 ไปภาค 6 */
export const SEM_TOTALS = { 1: 19, 2: 19, 3: 19, 4: 19, 5: 17, 6: 14, 7: 12, 8: 6 };
export const SEM_TITLE = {
  1: "Engineering, Programming and Data Foundations", 2: "Physical, Electrical and Quantitative Foundations",
  3: "AI, Data and Sensing Foundations", 4: "AI Platforms, Decision Foundations and Academic Seminar",
  5: "Domain Systems Integration and Technology Review",
  6: "Advanced Intelligent Systems, Project and Workplace Preparation",
  7: "Capstone and Workplace-aligned Professional Electives", 8: "Cooperative Education"
};
export const SEM_EXTRA = {
  4: [{ s: "วิชาเลือกเสรี 1", k: 3 }],
  5: [{ s: "วิชาเลือกชีพ 1", k: 3 }],
  6: [{ s: "วิชาเลือกเสรี 2", k: 3 }, { s: "วิชาเลือกชีพ 2", k: 3 }],
  7: [{ s: "วิชาเลือกชีพ 3", k: 3 }, { s: "วิชาเลือกชีพ 4", k: 3 },
      { s: "วิชาเลือกชีพ 5", k: 3 }]
};
export const YEAR_CREDITS = { 1: 38, 2: 38, 3: 31, 4: 18 };

/* ---------------- โครงสร้างหลักสูตร 125 หน่วยกิต ---------------- */
export const STRUCTURE = [
  { id: "ge", no: "1", name: "หมวดวิชาศึกษาทั่วไป", code: "GE-010 / GE-020", credits: 24, n: 8, g: "ge",
    note: "บังคับ 5 วิชา 15 นก. · เลือก 3 วิชา 9 นก. (ฉบับ พ.ศ. 2570)",
    sub: [{ name: "กลุ่มวิชาบังคับ", credits: 15 }, { name: "กลุ่มวิชาเลือก", credits: 9 }] },
  { id: "eng", no: "2.1", name: "กลุ่มวิชาพื้นฐานและปฏิบัติการทางวิศวกรรม", code: "EN-714-11001–11010", credits: 24, n: 10, g: "eng",
    note: "หมวด 1 วิชาแกนหรือวิชาพื้นฐาน · วิชาบรรยาย 7 วิชา 21 นก. + ปฏิบัติการบูรณาการ I–III 3 นก.",
    sub: [{ name: "พื้นฐานทางวิศวกรรม", credits: 21 }, { name: "ปฏิบัติการเชิงบูรณาการ I–III", credits: 3 }] },
  { id: "ai", no: "2.2", name: "กลุ่มวิชาแกนปัญญาประดิษฐ์และระบบอัจฉริยะ", code: "EN-714-12001–12008", credits: 22, n: 8, g: "ai",
    note: "หมวด 2 วิชาชีพบังคับ · แกน AI บังคับทุกแขนง 8 วิชา (บรรยาย 7 + ปฏิบัติการ 1)" },
  { id: "track", no: "2.3", name: "กลุ่มวิชาชีพบังคับ", code: "EN-714-12009–12016", credits: 22, n: 8, g: "track",
    note: "หมวด 2 วิชาชีพบังคับ · 8 วิชา (บรรยาย 7 + ปฏิบัติการ 1)" },
  { id: "elec", no: "2.4", name: "กลุ่มวิชาชีพเลือก", code: "EN-714-14001–14052", credits: 15, n: 5, g: "elec",
    note: "หมวด 4 วิชาเลือก · เลือก 5 วิชาจาก pool 52 วิชา (T1 14001–14015 · T2 14016–14035 · T3 14036–14050 · หัวข้อพิเศษ 14051–14052)" },
  { id: "proj", no: "2.5", name: "กลุ่มวิชาโครงงานและสัมมนา", code: "EN-714-12017–12020", credits: 5, n: 4, g: "proj",
    note: "หมวด 2 วิชาชีพบังคับ · สัมมนา · เตรียมโครงงาน · โครงงาน (Capstone) แผน ก/ข" },
  { id: "field", no: "2.6", name: "กลุ่มวิชาสหกิจศึกษา", code: "EN-714-17001–17002", credits: 7, n: 2, g: "field",
    note: "หมวด 7 สหกิจศึกษา · เตรียมสหกิจ 1 นก. · สหกิจศึกษา 6 นก. (≥16 สัปดาห์)" },
  { id: "free", no: "3", name: "หมวดวิชาเลือกเสรี", code: "—", credits: 6, n: 2, g: "free",
    note: "เลือกจากรายวิชาที่มหาวิทยาลัยเปิดสอน" }
];
/* ---------- กลุ่มย่อยของแต่ละกลุ่มวิชา ----------
   items = กลุ่มย่อยตามข้อกำหนดของหลักสูตร · by:"sem" = จัดตามภาคการศึกษาในแผนการเรียน · by:"track" = แยกตามแขนงวิชา */
export const SUBGROUPS = {
  ge: {
    note: "แบ่งตามข้อกำหนดของหมวดวิชาศึกษาทั่วไป",
    items: [
      { name: "กลุ่มวิชาบังคับ", sub: "ภาษาอังกฤษ · ดิจิทัลและปัญญาประดิษฐ์ · ผู้ประกอบการดิจิทัล · สุขภาพและการจัดการตนเอง · มรดกภูมิปัญญาทางวัฒนธรรม",
        credits: 15,
        codes: ["GE-001-13001", "GE-001-13002", "GE-001-13003", "GE-001-13004", "GE-001-13005"] },
      { name: "กลุ่มวิชาเลือก", sub: "เลือก 3 วิชาจากรายวิชาศึกษาทั่วไปกลุ่มเลือก 23 วิชาที่มหาวิทยาลัยเปิดสอน",
        credits: 9,
        codes: ["GE-002-14005", "GE-002-14011", "GE-002-14015"] }
    ]
  },
  eng: {
    note: "แบ่งเป็นรายวิชาบรรยายพื้นฐานและชุดปฏิบัติการที่เรียนต่อเนื่องสามภาคการศึกษา",
    items: [
      { name: "พื้นฐานทางวิศวกรรม", sub: "เศรษฐศาสตร์วิศวกรรม · สถิติ · ความร้อนและของไหล · เขียนแบบ · กลศาสตร์วัสดุ · การเขียนโปรแกรม · ไฟฟ้าและอิเล็กทรอนิกส์",
        codes: ["EN-714-11009", "EN-714-11007", "EN-714-11005", "EN-714-11001", "EN-714-11003", "EN-714-11002", "EN-714-11006"] },
      { name: "ปฏิบัติการเชิงบูรณาการ", sub: "ชุดปฏิบัติการต่อเนื่อง I → II → III สร้างชิ้นงานเดียวกันจนเป็นระบบสมบูรณ์",
        codes: ["EN-714-11004", "EN-714-11008", "EN-714-11010"] }
    ]
  },
  ai: { by: "sem", note: "รายวิชาแกนบังคับทุกแขนง จัดกลุ่มตามภาคการศึกษาในแผนการเรียน" },
  track: { by: "sem", note: "วิชาชีพบังคับร่วม 8 วิชา เรียงตามเลขสองตัวท้ายของรหัส ซึ่งเป็นลำดับก่อน–หลังภายในกลุ่ม" },
  elec: { by: "track", note: "pool รวม 57 วิชา แยกตามแขนงวิชา นักศึกษาเลือกเรียนรวม 5 วิชา 15 หน่วยกิต" },
  proj: {
    note: "ไล่ลำดับจากการสืบค้นและสัมมนา → เขียนข้อเสนอโครงงาน → ดำเนินโครงงานจริง",
    items: [
      { name: "สัมมนา", sub: "สืบค้น วิเคราะห์ และนำเสนอเทคโนโลยีอุบัติใหม่", codes: ["EN-714-12017", "EN-714-12018"] },
      { name: "การเตรียมความพร้อมโครงงาน", sub: "กำหนดหัวข้อ ทบทวนวรรณกรรม และเสนอเค้าโครงต่อคณะกรรมการ", codes: ["EN-714-12018"] },
      { name: "โครงงานวิศวกรรม (Capstone)", sub: "ดำเนินโครงงานบูรณาการ PLO1–7 และสอบปากเปล่า", codes: ["EN-714-12019"] }
    ]
  },
  field: {
    note: "ต้องผ่านรายวิชาเตรียมความพร้อมก่อนออกปฏิบัติงานในสถานประกอบการ",
    items: [
      { name: "การเตรียมความพร้อม", sub: "จรรยาบรรณวิชาชีพ ความปลอดภัย และการเตรียมตัวสมัครงาน", codes: ["EN-714-17001"] },
      { name: "การปฏิบัติงานในสถานประกอบการ", sub: "ปฏิบัติงานจริงไม่น้อยกว่า 16 สัปดาห์ พร้อมรายงานและการนำเสนอ", codes: ["EN-714-17002"] }
    ]
  },
  free: {
    note: "นักศึกษาเลือกจากรายวิชาที่มหาวิทยาลัยเปิดสอน โดยไม่ซ้ำกับรายวิชาในหมวดวิชาเฉพาะ",
    items: [
      { name: "วิชาเลือกเสรี", sub: "เลือก 2 รายวิชา รวม 6 หน่วยกิต ตามเกณฑ์มหาวิทยาลัย", codes: [], credits: 6, n: 2 }
    ]
  }
};

const creditOf = c => Number(String(c.cr).split("(")[0]) || 0;

/** คืนกลุ่มย่อยของกลุ่มวิชาหนึ่ง พร้อมรายวิชา จำนวนหน่วยกิต และจำนวนวิชา */
/* เรียงรายวิชาตาม "เลขสองตัวท้าย" ของรหัส ซึ่งเป็นลำดับก่อน–หลังภายในกลุ่มเดียวกัน */
export const byOrderNo = (a, b) =>
  a.c.slice(0, -3).localeCompare(b.c.slice(0, -3)) || a.c.slice(-2).localeCompare(b.c.slice(-2));

export function subgroupsOf(gid) {
  const spec = SUBGROUPS[gid];
  if (!spec) return [];
  if (spec.items) {
    return spec.items.map((it, i) => {
      const courses = it.codes.map(code => COURSES.find(c => c.c === code)).filter(Boolean).sort(byOrderNo);
      return {
        key: `s${i + 1}`, name: it.name, sub: it.sub, courses,
        credits: it.credits != null ? it.credits : courses.reduce((a, c) => a + creditOf(c), 0),
        n: it.n != null ? it.n : courses.length
      };
    });
  }
  if (spec.by === "sem") {
    const list = COURSES.filter(c => c.g === gid && c.sem);
    const groups = [...new Set(list.map(c => c.sem))].sort((a, b) => a - b).map(s => {
      const courses = list.filter(c => c.sem === s).sort(byOrderNo);
      return {
        key: `sem${s}`, name: `ชั้นปีที่ ${courses[0].y} · ภาคการศึกษาที่ ${s}`, sub: SEM_TITLE[s],
        courses, credits: courses.reduce((a, c) => a + creditOf(c), 0), n: courses.length, sem: s
      };
    });
    const pending = COURSES.filter(c => c.g === gid && c.pendingSemester).sort(byOrderNo);
    if (pending.length) {
      groups.push({
        key: "pending", name: "รอยืนยันภาคการศึกษา",
        sub: "รายวิชาที่ยังไม่กำหนดภาคการศึกษาในแผนการเรียน 8 ภาคเรียน",
        courses: pending, credits: pending.reduce((a, c) => a + creditOf(c), 0),
        n: pending.length, pending: true
      });
    }
    return groups;
  }
  if (spec.by === "track") {
    return [1, 2, 3, 0].map(tr => {
      const courses = COURSES.filter(c => c.g === "elec" && c.tr === tr).sort(byOrderNo);
      return {
        key: `t${tr}`, name: tr === 0 ? "ร่วมทุกแขนง — การเรียนรู้ร่วมการทำงานและหัวข้อพิเศษ" : TRACK_NAME[tr], tr,
        sub: `${courses[0].c} – ${courses[courses.length - 1].c}`,
        courses, credits: courses.reduce((a, c) => a + creditOf(c), 0), n: courses.length, pool: true
      };
    });
  }
  return [];
}

export const STRUCTURE_TOP = [
  { name: "หมวดวิชาศึกษาทั่วไป", credits: 24, ids: ["ge"] },
  { name: "หมวดวิชาเฉพาะ", credits: 95, ids: ["eng", "ai", "track", "elec", "proj", "field"] },
  { name: "หมวดวิชาเลือกเสรี", credits: 6, ids: ["free"] }
];
export const TOTAL_CREDITS = 125;

/* ตารางสรุปหน่วยกิต 4.1 โครงสร้างหลักสูตร ตามรูปแบบเล่ม มคอ.2
   แผน ก และ แผน ข มีหน่วยกิตเท่ากันทุกหมวด — ต่างกันเฉพาะชุดรายวิชาในภาคการศึกษาที่ 7
   (แผน ก วิชาชีพเลือก 3 วิชา · แผน ข การเรียนรู้ร่วมการทำงาน CWIE) ดู PLANS
   ตัวเลขอ้างอิงกลุ่มใน STRUCTURE เพื่อไม่ให้หลุดจากกันเวลาปรับโครงสร้าง */
const creditOfGroup = id => (STRUCTURE.find(x => x.id === id) || {}).credits || 0;

export const CREDIT_OUTLINE = [
  { no: "1", name: "หมวดวิชาศึกษาทั่วไป", top: true, get credits() { return creditOfGroup("ge"); } },
  { no: "1.1", name: "กลุ่มวิชาบังคับ", credits: 18 },
  { no: "1.2", name: "กลุ่มวิชาเลือก", credits: 6 },
  { no: "2", name: "หมวดวิชาเฉพาะ", top: true,
    get credits() { return ["eng", "ai", "track", "elec", "proj", "field"].reduce((a, id) => a + creditOfGroup(id), 0); } },
  { no: "2.1", name: "กลุ่มวิชาพื้นฐานวิศวกรรม", gid: "eng", get credits() { return creditOfGroup("eng"); } },
  { no: "2.2", name: "กลุ่มวิชาแกนปัญญาประดิษฐ์และระบบอัจฉริยะ", gid: "ai", get credits() { return creditOfGroup("ai"); } },
  { no: "2.3", name: "กลุ่มวิชาชีพบังคับ", gid: "track", get credits() { return creditOfGroup("track"); } },
  { no: "2.4", name: "กลุ่มวิชาชีพเลือก", gid: "elec", get credits() { return creditOfGroup("elec"); } },
  { no: "2.5", name: "กลุ่มวิชาโครงงานและสัมมนา", gid: "proj", get credits() { return creditOfGroup("proj"); } },
  { no: "2.6", name: "กลุ่มวิชาประสบการณ์ภาคสนาม", gid: "field", get credits() { return creditOfGroup("field"); } },
  { no: "3", name: "หมวดวิชาเลือกเสรี", top: true, gid: "free", get credits() { return creditOfGroup("free"); } }
];

/* มาตรฐานสากลของกลุ่มวิชาทางการศึกษา (ISCED) — ตาม TQF2 หมวดที่ 1 ข้อ 5.6
   ตรงกับรหัสรายวิชา EN-714 ที่หลักสูตรใช้ตามประกาศระบบรหัสวิชาของมหาวิทยาลัย */
export const ISCED = [
  { level: "Broad field",    th: "กลุ่มสาขาระดับภาพกว้าง", code: "07",   name: "Engineering, manufacturing and construction" },
  { level: "Narrow field",   th: "กลุ่มสาขาระดับกลาง",     code: "071",  name: "Engineering and engineering trades" },
  { level: "Detailed field", th: "กลุ่มสาขาระดับย่อย",     code: "0714", name: "Electronics and automation" }
];

/* แผนการเรียน 2 แบบ — ต่างกันเฉพาะภาคการศึกษาที่ 7 · รายวิชาที่มีฟิลด์ plan จะแสดงเฉพาะแผนนั้น */
export const PLANS = {
  A: { key: "A", name: "แผน ก · แผนปกติ", sub: "โครงงานและวิชาชีพเลือกในภาค 7 · สหกิจศึกษาภาค 8",
       extra7: [{ s: "วิชาเลือกชีพ 3", k: 3 }, { s: "วิชาเลือกชีพ 4", k: 3 }, { s: "วิชาเลือกชีพ 5", k: 3 }] },
  B: { key: "B", name: "แผน ข · บูรณาการกับสถานประกอบการ (CWIE)", sub: "การเรียนรู้ร่วมการทำงานและโครงงานบูรณาการในภาค 7 · สหกิจศึกษาภาค 8",
       extra7: [{ s: "การเรียนรู้ร่วมการทำงาน 1", k: 3 }, { s: "การเรียนรู้ร่วมการทำงาน 2", k: 3 }, { s: "การเรียนรู้ร่วมการทำงาน 3", k: 3 }] }
};
export const coursesOfPlan = (plan) => COURSES.filter(c => !c.plan || c.plan === plan);
export const APPROVED_BASELINE_CREDITS = 130;
export const PENDING_PLAN_COURSES = COURSES.filter(c => c.pendingSemester);

/* ---------------- รายละเอียด PLO 7 ข้อ (04_PLOs_7_OBE.md) ----------------
   ถ้อยคำ PLO ยกมาตามต้นฉบับ ซึ่งขึ้นต้นด้วยคำกริยาโดยตรง โดยมีประโยคนำร่วมกันคือ PLO_LEAD */
export const PLO_INTRO =
  "แปลงคุณลักษณะบัณฑิตและทักษะเป้าหมายเป็น PLO 7 ข้อ ที่มีความชัดเจน วัดและประเมินผลได้ " +
  "และสอดคล้องกับ ABET Student Outcomes (1)–(7) แบบ 1:1 " +
  "จัดกลุ่มผลลัพธ์การเรียนรู้ตามมาตรฐานคุณวุฒิระดับอุดมศึกษา พ.ศ. 2565 ใน 4 ด้าน ได้แก่ ความรู้ ทักษะ จริยธรรม และลักษณะบุคคล";
export const PLO_LEAD = "เมื่อสำเร็จการศึกษา ผู้เรียนสามารถแสดงผลลัพธ์การเรียนรู้ระดับหลักสูตรได้ดังต่อไปนี้";
export const PLO_TIMEFRAME =
  "การกำหนดกรอบเวลาไว้ที่จุดสำเร็จการศึกษาทำให้ PLO ทุกข้อมีองค์ประกอบ Time-bound ร่วมกัน " +
  "ส่วนเกณฑ์ผ่านเชิงปริมาณ เช่น คะแนนขั้นต่ำหรือร้อยละของผู้เรียนที่บรรลุผลลัพธ์ " +
  "ให้กำหนดใน Performance Indicators, Assessment Rubrics และแผนการประเมินของหลักสูตร ไม่กำหนดไว้ในถ้อยคำ PLO โดยตรง";

export const PLO_DETAIL = {
  1: { title: "การแก้ปัญหาทางวิศวกรรม", en: "Engineering Problem Solving", so: "SO(1)",
    text: "ระบุและแก้ไขปัญหาทางวิศวกรรมที่ซับซ้อนในภาคการเกษตร อุตสาหกรรม หรือองค์กร โดยบูรณาการองค์ความรู้ทางวิทยาศาสตร์ วิศวกรรมศาสตร์ และปัญญาประดิษฐ์มาประยุกต์ใช้ในสถานการณ์จริง",
    main: "ความรู้", side: "ทักษะและลักษณะบุคคล", level: "วิเคราะห์ (Analyze)", type: "Specific",
    evidence: "การวิเคราะห์โจทย์ แบบจำลองทางวิศวกรรม การเปรียบเทียบทางเลือก และเหตุผลสนับสนุนแนวทางแก้ปัญหา" },
  2: { title: "การออกแบบระบบปัญญาประดิษฐ์และระบบควบคุม", en: "AI and Control System Design", so: "SO(2)",
    text: "ออกแบบและพัฒนาระบบปัญญาประดิษฐ์และระบบควบคุมที่ตอบสนองการใช้งานจริง โดยยึดหลักความปลอดภัย มาตรฐานสากล และความยั่งยืนตามโมเดลเศรษฐกิจบีซีจี (BCG)",
    main: "ทักษะ", side: "ความรู้และจริยธรรม", level: "สร้างสรรค์ (Create)", type: "Specific",
    evidence: "ข้อกำหนดระบบ แบบสถาปัตยกรรม ต้นแบบ ผลการทดสอบ และการตรวจสอบข้อจำกัดของการออกแบบ" },
  3: { title: "การสื่อสารสารสนเทศทางเทคนิค", en: "Technical Information Communication", so: "SO(3)",
    text: "สื่อสารสารสนเทศทางเทคนิคและคุณค่าของระบบปัญญาประดิษฐ์ผ่านสื่อที่เหมาะสม เพื่อสร้างความเข้าใจให้แก่ผู้รับสารทุกระดับ ทั้งผู้เชี่ยวชาญและบุคคลทั่วไปได้อย่างมีประสิทธิผล",
    main: "ทักษะ", side: "ลักษณะบุคคล", level: "ประยุกต์ใช้ (Apply)", type: "Generic",
    evidence: "รายงานภาษาไทยและภาษาอังกฤษ การนำเสนอ การตอบคำถาม และการสื่อสารกับวิศวกร ผู้บริหาร เกษตรกร หรือชุมชน" },
  4: { title: "จริยธรรมและธรรมาภิบาลปัญญาประดิษฐ์", en: "Ethics and AI Governance", so: "SO(4)",
    text: "ปฏิบัติงานตามหลักจริยธรรมวิชาชีพและธรรมาภิบาลปัญญาประดิษฐ์ (AI Governance) โดยตระหนักถึงข้อกฎหมาย ความมั่นคงปลอดภัย และผลกระทบต่อระบบเศรษฐกิจ สังคม และสิ่งแวดล้อม",
    main: "จริยธรรม", side: "ลักษณะบุคคล", level: "ประเมินค่า (Evaluate)", type: "Generic",
    evidence: "การวิเคราะห์กรณีศึกษาจริยธรรม การประเมินความเสี่ยง แผนลดผลกระทบ และเหตุผลประกอบการตัดสินใจ",
    need: "ครอบคลุม N16 ด้านธรรมาภิบาล AI การปฏิบัติตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล และความมั่นคงปลอดภัยไซเบอร์" },
  5: { title: "การทำงานเป็นทีมและการบริหารโครงการ", en: "Teamwork and Project Management", so: "SO(5)",
    text: "ปฏิบัติงานร่วมกับทีมสหวิทยาการได้อย่างมีประสิทธิภาพ ทั้งในบทบาทผู้นำและสมาชิกในทีม เพื่อบริหารจัดการโครงการและส่งมอบผลงานที่ตอบโจทย์การนำไปประยุกต์ใช้งานได้จริง",
    main: "ลักษณะบุคคล", side: "ทักษะ", level: "จัดระบบและปฏิบัติ (Organize · จิตพิสัย)", type: "Generic",
    evidence: "แผนงานทีม บันทึกการประชุม ผลงานตามบทบาท การประเมินโดยเพื่อนร่วมทีม และผลสำเร็จของโครงงาน",
    need: "ครอบคลุม N6 ด้านการเรียนรู้จากโจทย์จริงร่วมกับ Project-based Learning, CWIE และสหกิจศึกษา" },
  6: { title: "การทดลองและประเมินสมรรถนะระบบ", en: "System Experimentation and Performance Evaluation", so: "SO(6)",
    text: "วิเคราะห์และประเมินสมรรถนะของระบบผ่านกระบวนการทดลอง โดยประยุกต์ใช้หลักวิทยาการข้อมูลและวิจารณญาณทางวิศวกรรม เพื่อรับรองคุณภาพและความปลอดภัยอย่างเป็นระบบ",
    main: "ทักษะ", side: "ความรู้และจริยธรรม", level: "ประเมินค่า (Evaluate)", type: "Specific",
    evidence: "แผนการทดลอง ชุดข้อมูล กระบวนการวิเคราะห์ ผลการตรวจสอบความถูกต้อง การตีความข้อมูล และข้อสรุปเชิงวิศวกรรม" },
  7: { title: "การเรียนรู้ตลอดชีวิตและนวัตกรรมยั่งยืน", en: "Lifelong Learning and Sustainable Innovation", so: "SO(7)",
    text: "ประยุกต์ใช้เทคโนโลยีและมาตรฐานใหม่ผ่านการเรียนรู้ด้วยตนเองอย่างต่อเนื่อง เพื่อสร้างสรรค์นวัตกรรมที่ส่งมอบคุณค่าทางเศรษฐกิจ สังคม และสิ่งแวดล้อมอย่างยั่งยืน",
    main: "ลักษณะบุคคล", side: "ทักษะ", level: "จัดการตนเองและสร้างสรรค์ (Self-directed · จิตพิสัย + สร้างสรรค์)", type: "Generic",
    evidence: "แผนพัฒนาตนเอง Learning Portfolio การทบทวนแหล่งความรู้ ต้นแบบนวัตกรรม และการประเมินความเป็นไปได้" }
};

/* ความสัมพันธ์กับ PLO เดิม 5 ข้อ */
export const PLO_LEGACY = [
  ["PLO1 ความรู้และการแก้ปัญหา", "PLO1 การแก้ปัญหาทางวิศวกรรม"],
  ["PLO2 การออกแบบและพัฒนาระบบ", "PLO2 การออกแบบระบบปัญญาประดิษฐ์และระบบควบคุม"],
  ["PLO3 ทดลอง วิเคราะห์ข้อมูล และสื่อสาร", "PLO6 การทดลองและประเมินสมรรถนะระบบ + PLO3 การสื่อสารสารสนเทศทางเทคนิค"],
  ["PLO4 จริยธรรมและความรับผิดชอบ", "PLO4 จริยธรรมและธรรมาภิบาลปัญญาประดิษฐ์"],
  ["PLO5 ทีม สื่อสาร เรียนรู้ตลอดชีวิต และผู้ประกอบการ", "PLO5 การทำงานเป็นทีมและการบริหารโครงการ + PLO3 การสื่อสารสารสนเทศทางเทคนิค + PLO7 การเรียนรู้ตลอดชีวิตและนวัตกรรมยั่งยืน"]
];

export const PLO_SMART = [
  ["Specific", "ระบุความสามารถ ผลงาน บริบท ผู้รับสาร หรือข้อจำกัดที่เกี่ยวข้องอย่างชัดเจน"],
  ["Measurable", "ใช้คำกริยาที่สังเกตและประเมินได้ เช่น วิเคราะห์ ออกแบบ ทดสอบ นำเสนอ ตัดสินใจ และประเมิน"],
  ["Achievable", "สอดคล้องกับรายวิชา Workshop โครงงาน และสหกิจศึกษาของหลักสูตร"],
  ["Relevant", "เชื่อมกับความต้องการของผู้มีส่วนได้ส่วนเสีย บริบทอุตสาหกรรมเกษตร มาตรฐานคุณวุฒิ และ ABET"],
  ["Time-bound", "กำหนดให้ผู้เรียนแสดงผลลัพธ์ได้เมื่อสำเร็จการศึกษา"]
];

/* ---------------- รายละเอียด YLO 4 ชั้นปี (11_Year_Level_Course_Sequence_and_YLO.md) ---------------- */
export const YLO_DETAIL = {
  1: { title: "พื้นฐานวิศวกรรม ข้อมูล และปัญญาประดิษฐ์", en: "Engineering and AI Foundations",
    level: "Introduce / Apply ในโจทย์ที่กำหนด", plo: "PLO1–PLO7 ระดับเริ่มต้น",
    text: "เมื่อสิ้นสุดชั้นปีที่ 1 นักศึกษาสามารถอธิบายและประยุกต์ใช้หลักการพื้นฐานทางคณิตศาสตร์ สถิติ วิทยาศาสตร์ และวิศวกรรมศาสตร์ ตลอดจนทักษะด้านไฟฟ้าอิเล็กทรอนิกส์ การเขียนโปรแกรมคอมพิวเตอร์ และวิทยาการปัญญาประดิษฐ์เบื้องต้น เพื่อแก้ปัญหาเชิงวิชาการที่กำหนดให้ สามารถรวบรวมและวิเคราะห์ข้อมูลเบื้องต้น สร้างสรรค์ชิ้นงานทางวิศวกรรมภายใต้มาตรฐานความปลอดภัย ตลอดจนสามารถสื่อสารและทำงานร่วมกับผู้อื่นได้อย่างมีประสิทธิภาพโดยยึดมั่นในจริยธรรมทางวิชาการ",
    evidence: "โปรแกรม Python · แบบวิศวกรรม · วงจร/เซนเซอร์ต้นแบบ · รายงานการวิเคราะห์ข้อมูล · ผลงาน Workshop 2",
    sub: [
      ["YLO1.1", "เข้าใจและประยุกต์ใช้พื้นฐานทางคณิตศาสตร์ วิทยาศาสตร์ และสถิติศาสตร์ เพื่อเป็นรากฐานสำหรับการเรียนรู้ปัญญาประดิษฐ์ในระดับสูงขึ้น", [1]],
      ["YLO1.2", "อธิบายหลักการทำงานเบื้องต้นของการเขียนโปรแกรมคอมพิวเตอร์ ระบบไฟฟ้าอิเล็กทรอนิกส์ และวิทยาการปัญญาประดิษฐ์", [1, 2]],
      ["YLO1.3", "ปฏิบัติงานทางวิศวกรรมพื้นฐานอย่างปลอดภัย มีระเบียบวินัย และยึดมั่นในความซื่อสัตย์และจรรยาบรรณวิชาชีพ", [4]],
      ["YLO1.4", "สามารถทำงานร่วมกับผู้อื่นในกิจกรรมกลุ่มหรือปฏิบัติการทางวิศวกรรม พร้อมแสดงความมุ่งมั่นในการเรียนรู้", [5, 7]]
    ],
    gate: ["สิ้นปี 1 — YLO1 Gate", "Programming assignment + แบบ/ต้นแบบ + Data report + teamwork reflection", "ผ่านองค์ประกอบสำคัญของ rubric ทุกด้านอย่างน้อยระดับ 2 จาก 4"] },
  2: { title: "การพัฒนาและทดสอบองค์ประกอบระบบอัจฉริยะ", en: "AI Subsystems and Infrastructure",
    level: "Apply / Reinforce ในระบบย่อย", plo: "PLO1, PLO2, PLO4, PLO6 เป็นหลัก · PLO3, PLO5, PLO7 สนับสนุน",
    text: "เมื่อสิ้นสุดชั้นปีที่ 2 นักศึกษาสามารถพัฒนา เชื่อมโยง และทดสอบองค์ประกอบของระบบอัจฉริยะ ซึ่งบูรณาการกระบวนการจัดการข้อมูล ตัวแบบการเรียนรู้ของเครื่องและการเรียนรู้เชิงลึก วิสัยทัศน์คอมพิวเตอร์ เทคโนโลยีอินเทอร์เน็ตของสรรพสิ่ง การประมวลผลแบบคลาวด์ และโครงสร้างพื้นฐานทางเครือข่าย โดยสามารถออกแบบการทดลอง ประเมินสมรรถนะของระบบ ตลอดจนตระหนักถึงความปลอดภัยของระบบ ความเป็นส่วนตัวของข้อมูล และข้อจำกัดทางวิศวกรรมอย่างเป็นระบบ",
    evidence: "Data/ML pipeline · โมเดล CV · ระบบ IoT–Edge–Cloud · ผลการทดลองเปรียบเทียบ · การสาธิตระบบบูรณาการ",
    sub: [
      ["YLO2.1", "ประยุกต์ความรู้ทางวิศวกรรมเพื่อวิเคราะห์และพัฒนาองค์ประกอบของระบบอัจฉริยะ เช่น IoT, Cloud หรือเครือข่าย ในเบื้องต้น", [1, 2]],
      ["YLO2.2", "พัฒนาและทดสอบตัวแบบการเรียนรู้ของเครื่องหรือการวิเคราะห์ภาพ สำหรับประยุกต์ใช้ในระบบจำลอง", [2, 6]],
      ["YLO2.3", "รวบรวมข้อมูล วิเคราะห์ผลเบื้องต้น และสื่อสารจัดทำรายงานเชิงวิชาการด้านวิศวกรรมปัญญาประดิษฐ์ได้อย่างเป็นระบบ", [3, 6]],
      ["YLO2.4", "แสดงออกถึงความรับผิดชอบในการทำงานกลุ่ม และตระหนักถึงข้อจำกัดด้านความปลอดภัยและความเป็นส่วนตัวของข้อมูล", [4, 5]]
    ],
    gate: ["สิ้นปี 2 — YLO2 Gate", "ระบบย่อย AI–Data–IoT/Cloud + experiment report + security/ethics checklist", "ระบบทำงานตามข้อกำหนดหลัก ผลทดลองทำซ้ำได้ และไม่มีความเสี่ยงร้ายแรงที่ไม่ถูกจัดการ"] },
  3: { title: "การบูรณาการระบบตามโดเมนและแขนงวิชา", en: "Domain Integration and Track Practice",
    level: "Reinforce / Integrate ในโจทย์เปิดและโจทย์จากภาคส่วนจริง", plo: "PLO1–PLO7 โดยเน้น PLO2, PLO3, PLO5, PLO6, PLO7",
    text: "เมื่อสิ้นสุดชั้นปีที่ 3 นักศึกษาสามารถวิเคราะห์ ออกแบบ และบูรณาการระบบปัญญาประดิษฐ์หรือระบบอัจฉริยะประยุกต์สำหรับบริบทเฉพาะทาง อาทิ เกษตรกรรม อุตสาหกรรม หรือนวัตกรรมปัญญาประดิษฐ์ระดับองค์กร โดยสามารถวิเคราะห์ข้อกำหนด ความต้องการ และข้อจำกัด เลือกสรรเทคโนโลยีที่เหมาะสม ประเมินผลสัมฤทธิ์ของการดำเนินงาน ปฏิบัติงานร่วมกับทีมสหวิทยาการ สื่อสารข้อมูลเชิงเทคนิคกับผู้มีส่วนได้ส่วนเสีย ตลอดจนบูรณาการมิติด้านความเป็นไปได้ทางธุรกิจ จริยธรรมวิชาชีพ ความปลอดภัย และการพัฒนาอย่างยั่งยืนเข้าสู่กระบวนการตัดสินใจทางวิศวกรรม",
    evidence: "ต้นแบบตาม Track · รายงานออกแบบระบบ · Dashboard/ผลทดลอง · การนำเสนอสัมมนา · ข้อเสนอโครงงานที่ผ่านการพิจารณา",
    sub: [
      ["YLO3.1", "ออกแบบ วิเคราะห์ และบูรณาการระบบปัญญาประดิษฐ์หรือระบบอัจฉริยะสำหรับประยุกต์ใช้ในภาคเกษตรกรรม อุตสาหกรรม หรือซอฟต์แวร์ระดับกลาง", [1, 2]],
      ["YLO3.2", "ออกแบบและดำเนินการทดลองทางวิศวกรรมอัจฉริยะ พร้อมวิเคราะห์และตีความหมายข้อมูลที่ซับซ้อนอย่างถูกต้อง", [6]],
      ["YLO3.3", "นำเสนอผลงานหรือรายงานทางเทคนิคด้วยการใช้สื่อดิจิทัลและแผงควบคุมอัจฉริยะได้อย่างมีประสิทธิภาพ", [3]],
      ["YLO3.4", "พิจารณาความเป็นไปได้ทางธุรกิจและประเมินผลกระทบของการนำเทคโนโลยีมาใช้ต่อสังคมและสิ่งแวดล้อมได้อย่างเหมาะสม", [4, 7]]
    ],
    gate: ["สิ้นปี 3 — YLO3 Gate", "Track prototype + design dossier + stakeholder presentation + project proposal", "ผ่าน design review · traceability จาก need → requirement → test · พร้อมเริ่ม Capstone"] },
  4: { title: "การส่งมอบระบบและการปฏิบัติงานวิชาชีพ", en: "Professional Deployment and Validation",
    level: "Deploy / Evaluate / Mastery ในบริบทวิชาชีพ", plo: "PLO1–PLO7 ระดับบูรณาการและประเมินผล",
    text: "เมื่อสิ้นสุดชั้นปีที่ 4 นักศึกษาสามารถพัฒนานวัตกรรม นำไปประยุกต์ใช้งานจริง ประเมินผลสัมฤทธิ์ และนำเสนอผลลัพธ์ของระบบปัญญาประดิษฐ์หรือระบบอัจฉริยะในการแก้ปัญหาบริบทโลกแห่งความจริง ภายใต้ข้อจำกัดทางเทคนิค เศรษฐศาสตร์ สังคม สิ่งแวดล้อม กฎหมาย และจริยธรรม โดยแสดงออกถึงความรับผิดชอบต่อวิชาชีพในฐานะสมาชิกหรือผู้นำทีม ตลอดจนสามารถประเมินตนเองเพื่อวางแผนการเรียนรู้ตลอดชีวิตและการพัฒนานวัตกรรมอย่างต่อเนื่อง",
    evidence: "Capstone ที่ผ่านการทดสอบ · รายงานและการสอบปากเปล่า · ผลประเมินสหกิจจากสถานประกอบการ · Learning Portfolio · ข้อเสนอคุณค่าของนวัตกรรม",
    sub: [
      ["YLO4.1", "ประยุกต์ใช้ความรู้ทางวิศวกรรมปัญญาประดิษฐ์ในการแก้ปัญหาจริงในภาคเกษตรและอุตสาหกรรมผ่านการทำโครงงาน (Capstone)", [1, 2]],
      ["YLO4.2", "ปฏิบัติงานในสถานประกอบการ (สหกิจศึกษา) ได้อย่างมีประสิทธิภาพ โดยบูรณาการการทำงานเป็นทีมและแสดงภาวะผู้นำ", [5]],
      ["YLO4.3", "วิเคราะห์ผลการดำเนินงาน สรุปผลสัมฤทธิ์ และสื่อสารข้อมูลเชิงเทคนิคกับผู้มีส่วนได้ส่วนเสียอย่างเป็นมืออาชีพ", [3, 6]],
      ["YLO4.4", "วางแผนการเรียนรู้เพื่อก้าวทันเทคโนโลยีอุบัติใหม่ และแสดงแนวทางการเป็นผู้ประกอบการด้านนวัตกรรมหรือเทคโนโลยี", [7]]
    ],
    gate: ["สิ้นปี 4 — YLO4 Gate", "Capstone + oral defense + cooperative evaluation + learning portfolio", "ผ่าน rubric ของ PLO1–7 ตามเกณฑ์หลักสูตร และผลประเมินสถานประกอบการไม่ต่ำกว่าเกณฑ์"] }
};

/* ตาราง YLO ↔ PLO (I = Introduce · R = Reinforce · M = Mastery) */
export const YLO_PLO = {
  1: { 1: "I", 2: "I", 3: "I", 4: "I", 5: "I", 6: "I", 7: "I" },
  2: { 1: "R", 2: "R", 3: "R", 4: "R", 5: "R", 6: "R", 7: "R" },
  3: { 1: "R", 2: "M", 3: "R", 4: "R", 5: "M", 6: "M", 7: "R" },
  4: { 1: "M", 2: "M", 3: "M", 4: "M", 5: "M", 6: "M", 7: "M" }
};

export const SCAFFOLD = [
  { y: 1, en: "Engineering + AI Foundations", th: "วางรากฐาน", ylo: "YLO1 · Introduce" },
  { y: 2, en: "AI Subsystems and Infrastructure", th: "พัฒนาองค์ประกอบ", ylo: "YLO2 · Apply / Reinforce" },
  { y: 3, en: "Domain Integration and Track Practice", th: "บูรณาการระบบ", ylo: "YLO3 · Integrate" },
  { y: 4, en: "Professional Deployment and Validation", th: "ปฏิบัติงานวิชาชีพ", ylo: "YLO4 · Mastery" }
];

export const SEQ_PRINCIPLES = [
  "เรียนการเขียนโปรแกรม คณิตศาสตร์ สถิติ และพื้นฐาน AI ก่อน Machine Learning, Computer Vision และ Data Engineering",
  "เรียนไฟฟ้า อิเล็กทรอนิกส์ และ Workshop ก่อน IoT, Edge AI, Automation และ Robotics",
  "เรียน AI Core และโครงสร้างพื้นฐานก่อนวิชาบูรณาการตามโดเมนและวิชาเลือกเฉพาะแขนง",
  "เรียนสัมมนาและการเตรียมโครงงานก่อนโครงงานวิศวกรรม และเรียนเตรียมสหกิจก่อนออกปฏิบัติงานจริง",
  "พัฒนา PLO แบบ I–R–M: Introduce ในปี 1, Reinforce ในปี 2–3 และ Mastery ในโครงงาน/สหกิจปี 4"
];

export const shortOf = code => (COURSES.find(x => x.c === code) || {}).s || code;

/* ---------------- 26 อาชีพเป้าหมายและอาชีพต่อยอด ---------------- */
export const CAREER_STATUS = {
  M: { label: "Market Core — ตำแหน่งหลักในตลาดกว้าง", color: "#1f7d52" },
  S: { label: "Sector Critical — สำคัญในอุตสาหกรรมเฉพาะ", color: "#b8760f" },
  F: { label: "Future/Emerging — งานอนาคตที่กำลังโต", color: "#7b57c9" }
};

export const TRACK_NAME = {
  1: "แขนง 1 · เกษตรอัจฉริยะ", 2: "แขนง 2 · ปัญญาประดิษฐ์ภาคอุตสาหกรรม",
  3: "แขนง 3 · นวัตกรรมปัญญาประดิษฐ์ระดับองค์กร", 0: "อาชีพข้ามทุกแขนงวิชา"
};

export const CAREERS = [
  { id: "C01", track: 3, st: "M", th: "วิศวกรปัญญาประดิษฐ์และการเรียนรู้ของเครื่อง", en: "AI/ML Engineer",
    courses: ["EN-714-12003", "EN-714-12007", "EN-714-12013", "EN-714-14037", "EN-714-14038", "EN-714-12019"],
    why: "พัฒนา ปรับ ประเมิน และนำตัวแบบ AI/ML หรือ LLM ขึ้นใช้งาน โดยคำนึงถึงความแม่นยำ ความน่าเชื่อถือ ต้นทุน และการติดตามหลังนำใช้",
    kw: "AI Engineer · Machine Learning Engineer · Applied AI Engineer · ML Engineer" },
  { id: "C02", track: 0, st: "M", th: "วิศวกรประยุกต์และโซลูชันปัญญาประดิษฐ์", en: "AI Application / Solutions Engineer",
    courses: ["EN-714-12009", "EN-714-12013", "EN-714-12014", "EN-714-14039", "EN-714-12019", "EN-714-17002"],
    why: "วิเคราะห์ความต้องการ ออกแบบสถาปัตยกรรมองค์กร บูรณาการโมเดล ข้อมูล API และระบบเดิม แล้วทดสอบและส่งมอบโซลูชัน AI",
    kw: "AI Solutions Engineer · AI Application Engineer · Implementation Engineer · Technical Consultant" },
  { id: "C03", track: 1, st: "S", th: "วิศวกรเกษตรอัจฉริยะและไอโอที", en: "Smart Agriculture and IoT Engineer",
    courses: ["EN-714-11006", "EN-714-12005", "EN-714-12011", "EN-714-14001", "EN-714-14009", "EN-714-12019"],
    why: "ออกแบบระบบ sensor–edge–cloud ระบบควบคุม และการวิเคราะห์ข้อมูลสำหรับข้าว อ้อย มันสำปะหลัง ฟาร์ม และอุตสาหกรรมแปรรูป",
    kw: "Smart Farm Engineer · Agricultural IoT Engineer · IoT Engineer · Precision Agriculture" },
  { id: "C04", track: 2, st: "M", th: "วิศวกรระบบควบคุมและอัตโนมัติ", en: "Automation and Control Engineer",
    courses: ["EN-714-11006", "EN-714-11010", "EN-714-12012", "EN-714-14016"],
    why: "ออกแบบ ติดตั้ง และปรับปรุง PLC/SCADA เครื่องมือวัด ระบบควบคุม และระบบอัตโนมัติในโรงงาน",
    kw: "Automation Engineer · Control Engineer · PLC Engineer · SCADA Engineer" },
  { id: "C05", track: 2, st: "M", th: "วิศวกรหุ่นยนต์และบูรณาการระบบ", en: "Robotics and System Integration Engineer",
    courses: ["EN-714-11010", "EN-714-12012", "EN-714-14027", "EN-714-14026", "EN-714-14018", "EN-714-12019"],
    why: "บูรณาการหุ่นยนต์ เซนเซอร์ ระบบควบคุม การขนถ่ายวัสดุ และซอฟต์แวร์ให้ทำงานร่วมกันในระบบผลิต",
    kw: "Robotics Engineer · System Integration Engineer · Mechatronics Engineer" },
  { id: "C06", track: 3, st: "M", th: "วิศวกรซอฟต์แวร์และแอปพลิเคชันปัญญาประดิษฐ์", en: "AI Software and Application Engineer",
    courses: ["EN-714-12013", "EN-714-12014", "EN-714-14037", "EN-714-14038", "EN-714-14039", "EN-714-12019"],
    why: "พัฒนา LLM ซอฟต์แวร์ API และบริการ AI ที่มีสถาปัตยกรรมระดับองค์กร ผ่านการประเมินความน่าเชื่อถือและพร้อมใช้งานจริง",
    kw: "AI Software Engineer · AI Application Developer · Backend AI Engineer · Generative AI Engineer" },
  { id: "C07", track: 3, st: "M", th: "วิศวกรข้อมูล", en: "Data Engineer",
    courses: ["EN-714-12004", "EN-714-12007", "EN-714-14036", "EN-714-14039"],
    why: "ออกแบบฐานข้อมูล ETL/ELT data pipeline คุณภาพข้อมูล และแพลตฟอร์มข้อมูลซึ่งเป็นโครงสร้างพื้นฐานของระบบ AI",
    kw: "Data Engineer · ETL Developer · Data Platform Engineer · Analytics Engineer" },
  { id: "C08", track: 3, st: "F", th: "นักออกแบบและสร้างนวัตกรรมด้านปัญญาประดิษฐ์", en: "AI Innovator",
    courses: ["EN-714-12009", "EN-714-12013", "EN-714-14040", "EN-714-14045", "EN-714-14048", "EN-714-12019"],
    why: "ค้นหาโอกาส ออกแบบประสบการณ์ สร้างต้นแบบ จัดการผลิตภัณฑ์ และทดลองวัดการยอมรับกับคุณค่าของนวัตกรรม AI",
    kw: "AI Innovator · AI Product Manager · AI Product Developer · Innovation Specialist" },
  { id: "C09", track: 3, st: "F", th: "ผู้ประกอบการด้านธุรกิจเทคโนโลยีดิจิทัลและปัญญาประดิษฐ์", en: "Technology and AI Entrepreneur",
    courses: ["EN-714-11009", "EN-714-12009", "EN-714-14045", "EN-714-14047", "EN-714-14048", "EN-714-12019"],
    why: "พัฒนาต้นแบบสู่ธุรกิจ กำหนดราคาและเศรษฐศาสตร์ต่อหน่วย วางกลยุทธ์เข้าสู่ตลาด ระดมทุน และขยายกิจการ AI",
    kw: "AI Entrepreneur · Tech Founder · AI Startup Founder · Digital Technology Entrepreneur" },
  { id: "C10", track: 0, st: "F", th: "นักวิจัยด้านปัญญาประดิษฐ์และระบบอัจฉริยะ", en: "AI and Intelligent Systems Researcher",
    courses: ["EN-714-12002", "EN-714-12003", "EN-714-14037", "EN-714-14038", "EN-714-12018", "EN-714-12019"],
    why: "ตั้งคำถามวิจัย ปรับตัวแบบ ออกแบบเกณฑ์มาตรฐานและการทดลองที่ทำซ้ำได้ วิเคราะห์ความน่าเชื่อถือ และสร้างองค์ความรู้ใหม่",
    kw: "AI Researcher · Machine Learning Researcher · Research Engineer · Intelligent Systems Researcher" },
  { id: "C11", track: 0, st: "S", th: "ข้าราชการ/พนักงานหน่วยงานของรัฐด้านเทคโนโลยีดิจิทัล", en: "Government Officer / Digital Technology Specialist",
    courses: ["EN-714-12009", "EN-714-12010", "EN-714-14050", "EN-714-12019", "EN-714-17001", "EN-714-17002"],
    why: "วิเคราะห์ ออกแบบ จัดหา และกำกับระบบ AI ด้วยการจำแนกความเสี่ยง ประเมินผลกระทบ และจัดทำหลักฐานตรวจสอบสำหรับบริการภาครัฐ",
    kw: "Digital Technology Specialist · IT Officer · Computer Technical Officer · Government Digital Service" },
  { id: "C12", track: 0, st: "M", th: "นักวิทยาศาสตร์ข้อมูลและนักวิเคราะห์ข้อมูล", en: "Data Scientist / Data Analyst",
    courses: ["EN-714-11007", "EN-714-12002", "EN-714-12003", "EN-714-12004", "EN-714-14036"],
    why: "รวบรวม วิเคราะห์ สร้างแบบจำลอง และสื่อสารข้อมูลเพื่อสนับสนุนการตัดสินใจในภาคเกษตร อุตสาหกรรม ธุรกิจ และภาครัฐ",
    kw: "Data Scientist · Data Analyst · Business Intelligence Analyst · Analytics Specialist" },
  { id: "C13", track: 2, st: "F", th: "วิศวกรโรงงานอัจฉริยะด้วยปัญญาประดิษฐ์", en: "AI Smart Factory Engineer",
    courses: ["EN-714-11006", "EN-714-11010", "EN-714-12012", "EN-714-14016", "EN-714-14027", "EN-714-12019"],
    why: "เชื่อมข้อมูลเครื่องจักร IIoT ระบบผลิต MES/SCADA และ AI เพื่อยกระดับโรงงานสู่ Smart Factory และ Industry 4.0",
    kw: "AI Smart Factory Engineer · Smart Factory Engineer · Industry 4.0 Engineer · Manufacturing Digitalization Engineer" },
  { id: "C14", track: 2, st: "M", th: "วิศวกรปัญญาประดิษฐ์ด้านกระบวนการและการผลิต", en: "AI Process and Production Engineer",
    courses: ["EN-714-11007", "EN-714-11006", "EN-714-12012", "EN-714-14016", "EN-714-14036", "EN-714-12019"],
    why: "วิเคราะห์และปรับเหมาะกระบวนการผลิตด้วยข้อมูล สถิติ การจำลอง และ AI เพื่อเพิ่มผลผลิต คุณภาพ และประสิทธิภาพ",
    kw: "AI Process Engineer · AI Production Engineer · Manufacturing Process Engineer · Production Optimization Engineer" },
  { id: "C15", track: 0, st: "M", th: "ผู้เชี่ยวชาญระบบสนับสนุนการตัดสินใจ", en: "Decision Support Systems Specialist",
    courses: ["EN-714-11007", "EN-714-12004", "EN-714-12009", "EN-714-14036", "EN-714-14039"],
    why: "พัฒนาระบบข้อมูล แบบจำลองการตัดสินใจ การเพิ่มประสิทธิภาพ และแดชบอร์ดเพื่อสนับสนุนผู้บริหารและหน่วยปฏิบัติการ",
    kw: "Decision Support System Analyst · DSS Developer · Business Decision Analyst · Operations Research Analyst" },
  { id: "C16", track: 2, st: "M", th: "วิศวกรซ่อมบำรุงด้วยปัญญาประดิษฐ์", en: "AI Maintenance Engineer",
    courses: ["EN-714-11006", "EN-714-12012", "EN-714-14016", "EN-714-14026", "EN-714-14036", "EN-714-12019"],
    why: "ใช้ condition monitoring การวิเคราะห์สัญญาณ และ predictive AI เพื่อพยากรณ์ความขัดข้องและวางแผนซ่อมบำรุง",
    kw: "Predictive Maintenance Engineer · AI Maintenance Engineer · Reliability Engineer · Condition Monitoring Engineer" },
  { id: "C17", track: 2, st: "F", th: "วิศวกรปัญญาประดิษฐ์อุตสาหกรรม", en: "AI Industrial Engineer",
    courses: ["EN-714-11007", "EN-714-11006", "EN-714-12012", "EN-714-14016", "EN-714-14027", "EN-714-12019"],
    why: "บูรณาการ AI ข้อมูลอุตสาหกรรม ระบบอัตโนมัติ และหลักวิศวกรรมอุตสาหการเพื่อปรับปรุงระบบผลิตแบบครบวงจร",
    kw: "Industrial AI Engineer · AI Industrial Engineer · Industrial Data Scientist · Manufacturing AI Engineer" },
  { id: "C18", track: 1, st: "S", th: "วิศวกรระบบตรวจวัดและควบคุมฟาร์มอัจฉริยะ", en: "Smart Farm Sensing and Control Engineer",
    courses: ["EN-714-12005", "EN-714-12005", "EN-714-12011", "EN-714-14001", "EN-714-14009", "EN-714-12019"],
    why: "ออกแบบ ติดตั้ง และทดสอบระบบตรวจวัด เครือข่ายเซนเซอร์ Edge IoT และการควบคุมน้ำหรือสภาพแวดล้อมในฟาร์ม",
    kw: "Smart Farm Control Engineer · Farm IoT Engineer · Agricultural Instrumentation Engineer · Irrigation Control Engineer" },
  { id: "C19", track: 1, st: "S", th: "วิศวกรระบบอัตโนมัติและหุ่นยนต์เพื่อการเกษตร", en: "Agricultural Automation and Robotics Engineer",
    courses: ["EN-714-11010", "EN-714-12005", "EN-714-12015", "EN-714-14011", "EN-714-12019"],
    why: "พัฒนาหุ่นยนต์เคลื่อนที่ ระบบขับเคลื่อน การรับรู้ และระบบอัตโนมัติสำหรับดูแล พ่น คัดแยก หรือเก็บเกี่ยวผลผลิต",
    kw: "Agricultural Robotics Engineer · Farm Automation Engineer · Agri-Robot Engineer · Autonomous Farm Systems Engineer" },
  { id: "C20", track: 1, st: "S", th: "วิศวกรอากาศยานไร้คนขับและภูมิสารสนเทศเพื่อการเกษตร", en: "Agricultural UAV and GeoAI Engineer",
    courses: ["EN-714-12006", "EN-714-12015", "EN-714-14003", "EN-714-14012", "EN-714-12019"],
    why: "วางแผนการบิน เก็บและประมวลผลภาพหลายช่วงคลื่น สร้างแผนที่ และใช้ GeoAI ประเมินสุขภาพพืชและพื้นที่เพาะปลูก",
    kw: "Agricultural UAV Engineer · Drone Mapping Specialist · GeoAI Engineer · Remote Sensing Agriculture" },
  { id: "C21", track: 1, st: "S", th: "นักวิเคราะห์ข้อมูลและระบบสนับสนุนการตัดสินใจทางการเกษตร", en: "Agricultural Data and Decision Support Specialist",
    courses: ["EN-714-12004", "EN-714-12010", "EN-714-12011", "EN-714-14005", "EN-714-14013", "EN-714-12019"],
    why: "บูรณาการข้อมูลฟาร์ม ภูมิอากาศ ผลผลิต และห่วงโซ่อุปทาน เพื่อพยากรณ์ สร้างสถานการณ์ และสนับสนุนการตัดสินใจ",
    kw: "Agricultural Data Analyst · Farm Data Scientist · Agricultural DSS Specialist · Agri Supply Chain Analyst" },
  { id: "C22", track: 0, st: "M", th: "วิศวกรโครงการและติดตั้งระบบอัจฉริยะ", en: "Intelligent Systems Project and Implementation Engineer",
    courses: ["EN-714-12009", "EN-714-12013", "EN-714-14046", "EN-714-12018", "EN-714-12019", "EN-714-17002"],
    why: "จัดทำข้อกำหนด วางแผน ประสานงาน ติดตั้ง ทดสอบ ส่งมอบ และบริหารความเสี่ยงของโครงการ AI หรือระบบอัจฉริยะ",
    kw: "AI Project Engineer · Implementation Engineer · Technical Project Engineer · Intelligent Systems Engineer" },
  { id: "C23", track: 0, st: "M", th: "วิศวกรบูรณาการระบบอัจฉริยะ", en: "Intelligent Systems Integration Engineer",
    courses: ["EN-714-11010", "EN-714-12013", "EN-714-12005", "EN-714-14038", "EN-714-14039", "EN-714-12019"],
    why: "เชื่อมข้อมูล อุปกรณ์ ระบบควบคุม ซอฟต์แวร์ API และ AI ตามสถาปัตยกรรมองค์กร พร้อมทดสอบความน่าเชื่อถือแบบครบวงจร · ครอบคลุมบทบาทผู้ดูแลระบบในภาพรวมของโรงงาน ซึ่งเป็นความต้องการที่อุตสาหกรรมแป้งและเกษตรแปรรูประบุว่ายังขาดกำลังคน",
    kw: "Systems Integration Engineer · AI Integration Engineer · Solution Integration Engineer · Integration Test Engineer · Plant Systems Integrator · OT System Owner" },
  { id: "C24", track: 0, st: "M", th: "ที่ปรึกษาโซลูชันปัญญาประดิษฐ์และการเปลี่ยนผ่านสู่ดิจิทัล", en: "AI Solutions and Digital Transformation Consultant",
    courses: ["EN-714-11009", "EN-714-12009", "EN-714-12010", "EN-714-14039", "EN-714-14045", "EN-714-14050", "EN-714-12019"],
    why: "วิเคราะห์ความพร้อมองค์กร ออกแบบสถาปัตยกรรมและแผนเปลี่ยนผ่าน ประเมินความคุ้มค่า ความเสี่ยง และแนวทางนำ AI ไปใช้จริง",
    kw: "AI Consultant · Digital Transformation Consultant · AI Solutions Consultant · Technology Consultant" },
  { id: "C25", track: 0, st: "M", th: "นักวิเคราะห์ธุรกิจอัจฉริยะและการตัดสินใจ", en: "Business Intelligence and Decision Analyst",
    courses: ["EN-714-11007", "EN-714-12004", "EN-714-12010", "EN-714-14019", "EN-714-14036", "EN-714-12019"],
    why: "สร้างตัวชี้วัด แบบจำลองพยากรณ์ การจำลองและการเพิ่มประสิทธิภาพ พร้อมสื่อสารข้อเสนอเพื่อการตัดสินใจทางธุรกิจและการปฏิบัติการ",
    kw: "Business Intelligence Analyst · Decision Analyst · Operations Analyst · Analytics Consultant" },
  { id: "C26", track: 3, st: "F", th: "นักวิเคราะห์ผลิตภัณฑ์และผู้ประสานงานโครงการปัญญาประดิษฐ์", en: "AI Product and Project Analyst",
    courses: ["EN-714-12009", "EN-714-12013", "EN-714-14040", "EN-714-14046", "EN-714-14048", "EN-714-12019"],
    why: "ศึกษาผู้ใช้ จัดทำ roadmap และ backlog กำหนดตัวชี้วัด ออกแบบการทดลอง ประสานทีมเทคนิค–ธุรกิจ และติดตามผลิตภัณฑ์ AI",
    kw: "AI Product Analyst · Associate AI Product Manager · AI Project Coordinator · Technical Product Analyst" }
];
