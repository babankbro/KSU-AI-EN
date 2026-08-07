import { COURSE_REVISION } from "./courseRevisionData.js";
import { CLO_REVISION } from "./cloRevisionData.js";

// ข้อมูลรายวิชา หลักสูตรวิศวกรรม AI และระบบอัจฉริยะ (พ.ศ. 2570) มหาวิทยาลัยกาฬสินธุ์
// ซิงก์จากไฟล์คำอธิบายรายวิชาจริงใน Vault: 04_Course_Descriptions_2570/ (ไทย + อังกฤษ)
// รหัสวิชาเลือกชีพชุดใหม่: T1 EN-135-301..315 · T2 316..333 · T3 334..348 = 48 วิชา
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
  "EN-001-121": "Fundamental concepts of engineering economics; time value of money; interest rates and discounting; net present value and internal rate of return analysis; cost-benefit analysis of engineering projects; economic feasibility assessment of AI and intelligent-systems investment projects; system life-cycle costing; depreciation; break-even analysis; economic decision-making under uncertainty; case studies of investment in AI, agriculture, industry, and innovation",
  "EN-001-122": "Probability and probability distributions; random variables and distribution functions; descriptive and inferential statistics; estimation and confidence intervals; hypothesis testing; analysis of variance; regression and correlation analysis; design of experiments; application of statistical methods to data analysis for AI systems; performance evaluation of machine learning models; problem solving in agricultural and industrial engineering",
  "EN-001-123": "Properties and phases of matter; the first and second laws of thermodynamics; energy and energy conversion; thermodynamic cycles and heat-engine efficiency; properties and behavior of fluids; the continuity equation; Bernoulli's equation and its applications; pipe flow and pressure losses; pumps and turbines; application of thermodynamics and fluid mechanics to cogeneration systems, agricultural produce drying systems, and cooling systems for computing equipment and AI servers",
  "EN-001-124": "Fundamentals and standards of engineering drawing; orthographic and pictorial projection; dimensioning and tolerancing; sectional and auxiliary views; part and assembly drawings; computer-aided design (CAD) drafting; two- and three-dimensional modeling; application of engineering drawing to the design of automation-system structures, agricultural machinery, and the layout of IoT and sensor systems in smart factories and farms",
  "EN-001-125": "Fundamental concepts of force and force systems; equilibrium of rigid bodies; analysis of structures and frames; axial stress and strain; shear and bending stress; torsion of shafts; shear-force and bending-moment diagrams; beam deflection; combined stresses and failure; factor of safety and design criteria; application of mechanics of materials to the structural design of agricultural machinery, load-bearing frames for agricultural drones and robots, and automation-system structures in industrial plants",
  "EN-001-126": "Principles of programming and basic algorithms; programming with the Python language; fundamental data structures, variables, expressions, control structures, functions, and modules; object-oriented programming; introductory file and database handling; use of libraries for data science and AI; debugging and program testing; application of programming to agricultural data analysis, control of IoT devices, and development of introductory AI programs",
  "EN-001-127": "Fundamental principles of direct-current and alternating-current circuits; Kirchhoff's laws and circuit analysis; basic electronic components — diodes, transistors, and integrated circuits; digital and logic systems; electric motors and drive systems; sensors and transducers; analog-to-digital and digital-to-analog signal conversion; application of electrical and electronic knowledge to the design of control circuits for IoT systems, smart sensors, and drive systems for agricultural robots and drones",

  // ---- 2.2 กลุ่มวิชาแกนปัญญาประดิษฐ์และระบบอัจฉริยะ ----
  "EN-131-101": "History and evolution of artificial intelligence; types and branches of AI; machine learning; computer vision; natural language processing; expert systems; principles of AI search and reasoning; knowledge representation and inference; tools and programming languages for AI; current trends and directions of AI; generative AI; AI agents; AI ethics and social impact; applications of AI in agriculture, industry, and innovation",
  "EN-131-102": "Linear algebra for AI — vectors, matrices, linear transformations, and singular value decomposition; multivariable calculus and partial derivatives for AI model optimization; probability theory and statistics for machine learning; probability distributions used in AI; optimization with gradient descent and backpropagation; mathematics for neural networks and deep learning; application of mathematics to developing and analyzing AI models for agriculture and industry",
  "EN-131-206": "Principles and fundamentals of machine learning; supervised learning algorithms — linear regression, logistic regression, decision trees, random forests, and support vector machines; unsupervised algorithms — K-means clustering and dimensionality reduction; model evaluation and tuning; neural networks and deep learning; convolutional neural networks, recurrent neural networks, and transformer networks; transfer learning and fine-tuning; model training with GPUs; prevention of overfitting; applications in crop-yield forecasting, plant-disease detection, factory quality control, and industrial data analysis",
  "EN-131-207": "Principles and data life cycle; design and development of data pipelines; extract-transform-load (ETL) processes; management of relational (SQL) and NoSQL databases for AI data; design of data warehouses and data lakes; data lakehouse architecture; data cleaning and transformation; data-quality management and governance; distributed data processing; big-data management; design of data architectures for AI systems in agriculture and industry — farm sensor data, production-process data, and supply-chain data",
  "EN-131-203": "Fundamental principles of digital image processing; image-signal representation and image transformation; image enhancement and filtering; image segmentation and edge detection; image-feature extraction with statistical and deep learning methods; object detection and classification with convolutional neural networks; multispectral image analysis from drones; application of computer vision to inspecting agricultural-produce quality, plant-disease detection, product grading on production lines, and process monitoring in agro-industrial plants",
  "EN-131-204": "Architecture and components of IoT systems; wireless communication protocols; smart sensors and transducers for measuring temperature, humidity, light, and gas; microcontrollers and embedded systems; edge computing; integration of IoT systems with AI cloud platforms; IoT security; system design and development; applications in smart farms, automated factories, irrigation systems, and environmental monitoring in agro-industrial contexts",
  "EN-131-205": "Principles and architecture of cloud computing for AI; AI cloud services from major providers; deployment of machine learning models on the cloud; hyperparameter tuning; neural architecture search; automated machine learning (AutoML); management of machine learning pipelines and experiment tracking; model compression and optimization with pruning, quantization, and knowledge distillation; introductory MLOps principles for model life-cycle management; application of AI cloud to agriculture and industry",
  "EN-131-208": "Computer architecture for AI; graphics processing units (GPUs) and tensor processing units (TPUs); parallel processing and hardware acceleration; principles and architecture of computer networks; communication protocols for AI systems; wireless and 5G networks; container management; design of scalable and highly available AI systems; security of AI infrastructure; system monitoring and management; applications supporting smart-farm systems, smart factories, and data centers for agro-industry",

  // ---- 2.3 กลุ่มวิชาชีพบังคับ ----
  "EN-132-302": "Principles and processes of AI product design; design thinking for AI innovation development; analysis of user and market needs; prototype design and testing; assessment of technological and business feasibility; business model canvas for AI businesses; competitor analysis and market positioning; go-to-market strategy; valuation and return assessment; intellectual property for AI innovation; applications in agriculture, industry, and innovation",
  "EN-132-304": "Concepts and architecture of smart-farm systems and high-precision agriculture; design and installation of wireless sensor networks in cultivation plots; measurement and analysis of soil, water, weather, and crop growth with IoT and AI; smart irrigation and automatic water-supply control; model analysis for forecasting and warning of plant diseases and pests; farm management with dashboards and decision-support systems; cloud-platform integration for spatial-data integration in rice, sugarcane, and cassava production",
  "EN-132-307": "Structure and architecture of programmable logic controllers (PLCs); control programming with standard languages — ladder diagram, function block diagram, structured text, and sequential function chart; digital and analog input/output signal interfacing; control programming of sensors, actuators, and field devices; design of SCADA systems and human-machine interfaces (HMI); communication over industrial networks; integration of automation with AI and IoT for smart manufacturing and large-scale irrigation control",
  "EN-132-308": "AI software development life cycle and modern software-engineering processes; requirements analysis and design of AI-driven system architectures; microservices development and design of RESTful APIs and GraphQL; architectural patterns and clean, maintainable software design; software testing methods and AI-model quality assurance; source-code version control and team collaboration with Git; MLOps and DevOps concepts; building continuous integration and delivery (CI/CD) pipelines; deployment on cloud infrastructure, container platforms, and edge devices; case studies of commercial application development",
  "EN-132-303": "Concepts and structure of digital-era production and supply chains from upstream to downstream; planning and management of production factors; smart raw-material sourcing and provenance analysis; production-line management processes and automated warehouse systems; demand and supply forecasting; smart logistics and transportation management; application of AI, IoT, and big-data analytics to improve efficiency and reduce cost across the value chain; building product traceability and sustainability systems; supply-chain risk management",
  "EN-132-305": "Working principles and types of unmanned aerial vehicles; laws, regulations, and drone-pilot licensing under CAAT standards; automatic flight systems and spatial flight-path planning; principles of remote sensing and geoinformatics data processing; use of RGB, multispectral, and thermal sensors and cameras; application of AI to processing and analyzing aerial imagery; creation of 2D maps and 3D models; crop-health assessment with vegetation indices; use of drones for precision spraying; yield assessment of rice, sugarcane, and cassava",
  "EN-132-306": "Smart-factory architecture and Industry 4.0 concepts; integration of operational technology (OT) with information technology (IT); design and simulation of production processes with digital-twin technology; real-time inspection and quality control with AI and computer vision; predictive-maintenance systems for industrial machinery with machine learning; smart energy management and cogeneration; layout and management of automated production lines for application in modern sugar mills, cassava-starch plants, and rice mills",
  "EN-132-309": "Concepts and architecture of AI agents — from reactive to deliberative-planning and hybrid systems; multi-agent system architectures and coordination mechanisms; connecting and augmenting large language models with agents; tool use and external function calling; design of agentic AI systems for logical planning and autonomous decision-making; development with LangChain, AutoGen, and CrewAI libraries; application of retrieval-augmented generation (RAG); structural security and ethics of agents in solving agro-industrial problems",

  // ---- 2.4 เลือกชีพ — แขนงที่ 1 เกษตรอัจฉริยะ ----
  "EN-135-301": "Principles of smart agriculture and precision farming; analysis and management of soil and water resources with AI; design of smart irrigation systems — drip, sprinkler, and flood irrigation; soil-moisture and field-water measurement with sensors and IoT; crop water-demand forecasting with machine learning; automatic irrigation control and water conservation; AI-based drought and flood warning systems; water management at plot and watershed levels",
  "EN-135-302": "Principles and concepts of precision agriculture; application of AI and machine learning to precision-agriculture data analysis; soil-data analysis and crop-nutrient management recommendations; detection and classification of plant diseases and pests with computer vision and deep learning; yield forecasting and production planning; smart-farm management recommendation systems; use of satellite and drone imagery with AI; integration of multi-source data for decision-making; applications in rice, sugarcane, and cassava production",
  "EN-135-303": "Principles and components of geographic information systems (GIS); spatial data and reference coordinate systems; management and analysis of vector and raster spatial data; creation and analysis of digital maps; processing of satellite data and aerial imagery; spatial analysis with overlay, buffer, and network analysis; integration of GIS with AI and machine learning; applications in agricultural land-use planning, water-resource management, crop-area suitability assessment, and land-use-change monitoring",
  "EN-135-304": "Principles and processes of postharvest management of agricultural produce; physiology and biochemistry of harvested produce; produce losses and loss-reduction approaches; produce sorting and grading with AI and computer vision; smart drying and produce-storage systems; temperature and humidity control in storage with IoT and AI; smart packaging and shelf-life extension; traceability and produce-quality certification systems",
  "EN-135-305": "Principles and methods of forecasting agricultural data with AI; collection and management of big data from farm sensor networks; time-series analysis of crop-yield and weather data; yield-forecasting models with machine learning and deep learning; agricultural commodity price forecasting and production planning; risk and uncertainty analysis; design of farm-data dashboards and visualization systems for farmers and managers; evaluation and validation of forecasting models",
  "EN-135-306": "Principles and concepts of closed plant factories and vertical farming; architecture and components of plant factories; LED artificial-lighting systems and AI-based light-spectrum control; soilless cultivation — hydroponics, aeroponics, and aquaponics; automated greenhouse environmental control; crop-health monitoring and disease management with computer vision and AI; energy conservation and resource management; cost-benefit analysis of investment",
  "EN-135-307": "Principles and concepts of smart livestock farming; animal-health monitoring with IoT and wearable sensors; animal-behavior analysis with computer vision and AI; animal-disease prediction and detection with machine learning; automatic feeding systems and nutrition management; environmental management of livestock housing; herd tracking and management with GPS; analysis of production data and farm efficiency; livestock-product traceability systems",
  "EN-135-308": "Principles of computer vision for classification and grading of agricultural produce; design and installation of camera and lighting systems for produce inspection; creation and management of agricultural-produce image datasets for training AI models; training and fine-tuning of deep learning models for classification and defect detection; produce size and weight measurement with image processing; integration of computer vision with conveyors and automatic sorting systems; assessment of system accuracy and performance",
  "EN-135-309": "Principles and architecture of farm sensor networks; collection and transmission of data from soil, water, air, and crop sensors; signal processing and noise filtering; cleaning and preparation of sensor data for AI analysis; time-series analysis and pattern discovery in sensor data; building machine learning models for forecasting and decision-making; anomaly detection and smart alerting; visualization and reporting of sensor data through dashboards",
  "EN-135-310": "Principles and concepts of smart crop production; soil-property analysis and soil-fertility assessment; crop-nutrient analysis and site-specific fertilizer planning; water management and precision irrigation; use of sensor, IoT, and UAV imagery data to monitor crop growth; application of machine learning and deep learning to analyze plant diseases and pests from digital images; yield forecasting; production-cost analysis; development of decision-support systems with generative AI",
  "EN-135-311": "Principles of agricultural robotics and automation; components of robotic systems — sensors, actuators, and control systems; application of IoT, AI, computer vision, and machine learning in agricultural robots; autonomous navigation, localization, and path planning; field data collection, spraying, fertilizing, weeding, and harvesting; use of robotic arms and mobile robots; integration of robots with UAVs and smart-farm systems",
  "EN-135-312": "Working principles and types of unmanned aerial vehicles; flight-path planning for agricultural surveying; use of multispectral and thermal imaging sensors to monitor crop health; processing and analysis of aerial imagery with dedicated software and machine learning; assessment of crop-field damage from disasters; creation of vegetation-index maps for growth assessment; use of UAVs for precision liquid spraying; laws and safety in operation",
  "EN-135-313": "Principles of supply-chain and logistics management for agricultural goods; use of AI in planning the sourcing and distribution of produce; smart agricultural warehouse management with IoT; produce tracking and traceability with blockchain across the supply chain; market-demand forecasting with machine learning to reduce food loss; efficient analysis and routing of produce transportation; integration of technology to increase transparency and sustainability",
  "EN-135-314": "Relationship between AI and agricultural biotechnology; use of machine learning to analyze plant and animal genetic data; DNA-sequence analysis for selecting disease- and climate-resistant varieties; use of AI to discover bioactive compounds for agricultural bio-products; simulation and prediction of interactions between organisms and their environment; ethics and biosafety",
  "EN-135-315": "Impacts of climate change on agriculture; application of AI to the analysis of large-scale climate data; forecasting of extreme weather, drought, and flooding; analysis and assessment of risk to agricultural yield with computer models; design of smart early-warning systems; adaptation strategies of the agricultural sector; crop insurance based on satellite data and AI; agricultural policy and sustainability",

  // ---- 2.4 เลือกชีพ — แขนงที่ 2 AI ภาคอุตสาหกรรม ----
  "EN-135-316": "Dynamic modeling and system identification of industrial processes; control-loop stability and performance; advanced PID tuning; cascade, feedforward, ratio, split-range, and multivariable control; model-predictive and AI-assisted process control; distributed-control-system architecture and configuration; continuous and batch control; alarm management; process historians; integration with SCADA, MES, and industrial data platforms; process simulation; loop testing; factory and site acceptance testing; commissioning; and performance evaluation",
  "EN-135-317": "Principles and strategies of industrial machine maintenance — corrective, preventive, and predictive; collection of vibration, acoustic, temperature, and current signal data; signal processing and feature extraction for machine diagnosis; machine learning and deep learning models for anomaly detection and failure prediction; digital-twin technology for simulating machine condition; automatic alerting and maintenance planning; root-cause analysis; return-on-investment assessment",
  "EN-135-318": "Principles and types of automated warehouse systems; warehouse design and layout for agro-industrial plants; automated storage and retrieval systems — conveyors, freight elevators, and automated guided vehicles; integration of AI and computer vision for goods inspection and sorting; warehouse operation with warehouse-management systems; goods tracking with RFID and barcodes; AI-based inventory management; analysis and optimization of goods flow through simulation",
  "EN-135-319": "Industrial decision modeling; linear, mixed-integer, nonlinear, and multi-objective programming; network and transportation models; resource allocation; production and workforce scheduling; routing and logistics; inventory and capacity planning; queueing theory and discrete-event simulation; simulation optimization; stochastic and robust optimization; heuristic and metaheuristic methods; Python and optimization solvers; sensitivity and scenario analysis; and communication of industrial recommendations",
  "EN-135-323": "Complete cassava-starch production from receiving, weighing, and quality analysis through washing, peeling, grinding and starch extraction, pulp separation and purification, drying, and packaging; AI-based cassava-quality and starch-yield forecasting at receiving points; AI- and PLC-based extraction-process control; smart starch drying and energy conservation; wastewater and waste management; production of high-value products — modified starch, alcohol, and bioplastics",
  "EN-135-324": "Principles and IoT technologies for agricultural-produce storage; design and installation of sensor networks in warehouses, silos, and cold rooms; sensors for temperature, humidity, carbon dioxide, oxygen, and ethylene; automatic environmental control in storage with IoT and AI; inspection and analysis of produce quality during storage; alerting and emergency management; shelf-life forecasting and inventory management with machine learning; integration with cloud platforms for real-time monitoring",
  "EN-135-325": "Principles of heat and mass transfer in the drying process; thermodynamic properties and moisture transfer of agricultural produce; drying technologies — hot-air, microwave, infrared, heat-pump, and freeze drying; design and calculation of drying systems; automatic drying-process control with PLC and AI; real-time moisture measurement and control; machine learning models to forecast and optimize drying; energy conservation and integration with cogeneration systems",
  "EN-135-326": "Principles and theory of industrial material-handling systems; analysis and design of material-handling and packaging systems for agro-industrial plants; types and selection of equipment — conveyors, screw conveyors, bucket elevators, and pneumatic conveying; design of automatic packaging machinery; integration of sensors and IoT systems; control and management with PLC and SCADA; application of AI and computer vision to inspect and manage material flow; predictive maintenance",
  "EN-135-327": "Selection and sizing of motors, servo motors, stepper motors, drives, and transmission systems; position, velocity, torque, and multi-axis motion control; path generation and motion profiles; servo tuning; integration with programmable logic controllers, industrial networks, and vision systems; collaborative robots; end effectors and part feeding; robot-cell layout and sequence design; programming, simulation, virtual testing, AI-enabled perception and grasping; risk assessment; force and power limits; protective separation; interlocks; emergency stops; integration and acceptance testing",
  "EN-135-328": "Lean and Six Sigma principles; customer value and value-stream mapping; waste reduction; flow, pull, and standardized work; DMAIC; data-quality verification; overall equipment effectiveness, cycle time, bottlenecks, yield, scrap, and downtime; measurement-system analysis; statistical process control; process capability; design of experiments; root-cause analysis; failure-mode and effects analysis; use of data analytics, machine learning, and artificial intelligence to predict quality and prioritize improvements; countermeasure experiments; and before-and-after evaluation",
  "EN-135-329": "Principles of industrial computer-vision systems; design of lighting systems and lens selection for quality inspection; image preparation and noise removal; detection of edges, blemishes, and defects of workpieces on conveyors; integration of computer vision with deep learning for defect classification; workpiece dimension measurement and assembly-correctness verification; integration with robots and automatic sorting systems; analysis of image data for real-time process improvement",
  "EN-135-330": "Principles of energy management and conservation in industry; auditing and assessing energy use of machinery and support systems — air-conditioning, compressed-air, and boiler systems; integration of sensor networks and smart meters for real-time energy data; building energy-use models with AI; energy-demand forecasting and anomaly detection with machine learning; integration of renewable energy — solar and biomass; design of smart energy-management systems to reduce cost and greenhouse-gas emissions",
  "EN-135-331": "Fundamental principles of pneumatic and hydraulic systems; component and control-circuit design; sensors and actuators; integration with microcontrollers, programmable logic controllers, and edge-computing devices; real-time signal acquisition; AI-based anomaly detection; predictive maintenance; adaptive position or pressure control; fluid-power safety and energy efficiency; design, testing, troubleshooting, and maintenance laboratory practice",
  "EN-135-332": "Principles of heat and mass transfer; steady-state and transient conduction; natural and forced convection; thermal radiation; diffusion and mass transfer; heat-transfer equipment; finite-difference methods; mathematical and machine-learning models; thermal management of AI hardware; drying systems; cold rooms; energy systems; and thermal-process control in smart systems",
  "EN-135-333": "Principles of industrial safety engineering and occupational health; laws, regulations, and standards; hazard identification and risk assessment; job safety analysis, HAZOP, and FMEA; machine, electrical, chemical, pneumatic, and hydraulic safety; functional safety; interlocks and emergency stops; ergonomics; industrial hygiene; emergency response; incident investigation; and AI- and sensor-assisted safety monitoring",

  // ---- 2.4 เลือกชีพ — แขนงที่ 3 นวัตกรรมปัญญาประดิษฐ์ระดับองค์กร ----
  "EN-135-334": "Architecture and design of advanced data pipelines for AI systems; stream processing; distributed processing; design of big-data storage architectures; data-quality management and enterprise data governance; data orchestration; building real-time data pipelines for AI systems; integration of data from diverse sources; monitoring and management of data pipelines in production; application to building industrial data systems",
  "EN-135-335": "Architectures and operation of large language models; preparation and governance of domain datasets; instruction tuning; parameter-efficient fine-tuning and LoRA; model compression and quantization; multimodal model adaptation; evaluation of accuracy, reasoning, factuality, fairness, and robustness; benchmark and comparative-experiment design; inference optimization for latency, memory, cost, and energy; model serving in production; performance-degradation monitoring; and model documentation",
  "EN-135-336": "Reliability and safety engineering for AI systems; performance requirements and acceptance criteria; test sets for normal, out-of-distribution, and edge cases; uncertainty measurement and confidence calibration; robustness to noise and adversarial attacks; bias and fairness evaluation; hallucination testing for generative models; red teaming and guardrails; hazard analysis and safety cases; data- and model-drift monitoring; incident management; model rollback; and preparation of model cards and assurance evidence",
  "EN-135-337": "Enterprise AI architecture design; domain and service boundaries; event-driven architecture; application programming interfaces and API management; integration with enterprise resource planning, customer-relationship management, data platforms, and legacy workflows; identity, access, secret management, and zero-trust architecture; multi-tenancy, scalability, high availability, disaster recovery, and business continuity; observability; cloud-cost management; trade-off analysis; and preparation of architecture diagrams and decision records",
  "EN-135-338": "Principles and processes of user-experience and user-interface design for AI systems; user research and needs analysis; design thinking; wireframe and prototype design; dashboard design for data visualization; explainable-AI principles for transparent and understandable interfaces; usability testing and user-experience evaluation; inclusive design; application to commercial AI applications",
  "EN-135-339": "Principles of applying AI in medicine and public-health systems; management of electronic health-record databases; machine learning models for preliminary diagnosis; health-risk forecasting from behavioral data; personalized treatment and healthcare recommendation systems; integration of AI with wearable devices to monitor vital signs; management of health big data; natural-language processing to extract information from medical documents; ethics and privacy of patient data under international standards",
  "EN-135-340": "Principles of medical image processing and analysis; working with X-ray, computed-tomography (CT), and magnetic-resonance (MRI) image data; use of deep learning for organ detection and segmentation; analysis of abnormalities and lesions; building AI models to assist physicians in diagnosis; noise reduction and contrast enhancement of medical images; integration of image-analysis systems with picture archiving and communication systems (PACS); performance evaluation of medical-image-analysis models",
  "EN-135-341": "Principles of financial technology and financial-service innovation; application of AI in finance and banking; electronic payment systems and blockchain technology; credit-risk analysis with machine learning; financial-fraud detection with AI; automated investment systems and robo-advisory; consumer and individual-customer behavior analysis; AI models for asset valuation; regulations and policies on financial technology",
  "EN-135-342": "Predictive-analytics techniques for financial markets; analysis of financial time-series data; stock- and financial-asset price-forecasting models with machine learning and deep learning; sentiment analysis of news and social media affecting markets; risk and portfolio management with AI; high-frequency trading algorithms; building and testing automated trading systems; interpretation and visualization of financial data for business decisions",
  "EN-135-343": "Commercialization of AI prototypes; market validation and technology readiness; revenue models, pricing, unit economics, and model-serving costs; go-to-market strategy; business-to-business sales, procurement, and pilot management; intellectual property, licensing, data, and service-level agreements; operations, risk, and scaling plans; financial projections, fundraising, and investor or partner pitching; development and validation of a commercialization plan for an AI product with real users or an enterprise partner",
  "EN-135-344": "Principles and methodologies of intelligent software project management; agile and Scrum; planning and resource management for data- and AI-driven projects; risk and timeline assessment of model-development projects; management of the machine learning system life cycle; stakeholder-expectation management; use of AI to manage and track project progress; quality control and continuous delivery; measuring the success of AI projects",
  "EN-135-345": "Concepts of AI-based digital business development; building data-driven digital-marketing strategies; analysis and segmentation of target customers with machine learning; automated advertising-content creation and marketing communication with generative AI; personalized product and service recommendation systems; analysis of campaign effectiveness; application of chatbots for customer service and proactive selling; conversion-rate optimization with smart technology",
  "EN-135-346": "AI product management throughout the lifecycle; definition of vision, user segments, value proposition, and business outcomes; product roadmaps, backlogs, and prioritization criteria; product metrics, model-performance indicators, and risk constraints; human–AI interaction design; A/B testing; analysis of usage, adoption, and impact; management of feedback, model drift, cost, and product change; coordination among users, business, data, engineering, and governance teams; and evidence-based decisions to scale, pivot, or retire AI products",
  "EN-135-347": "Virtual-reality, augmented-reality, and mixed-reality technologies; integration of AI with simulated environments; processing and generation of 3D content with generative AI; interaction with virtual objects through computer vision and natural-language processing; development of virtual-world applications for medical simulation, industrial training, and digital marketing; wearable devices for perception and response; analysis of user behavior in digital environments",
  "EN-135-348": "AI governance and risk-management frameworks; system inventories and risk classification; impact assessment for rights, privacy, fairness, safety, and the environment; roles, accountability, and human oversight; compliance with data-protection, intellectual-property, sector-specific laws, and relevant standards; third-party and external-model risk; risk registers, data documentation, model cards, decision logs, and audit evidence; post-deployment monitoring, incident reporting, corrective action, and enterprise governance reviews through case studies",
};

const RAW = [
  /* ================= 1. หมวดวิชาศึกษาทั่วไป (คำอธิบายอังกฤษเฉพาะวิชา) ================= */
  { c: "GE-010-001", s: "อังกฤษ 1", t: "ภาษาอังกฤษง่ายนิดเดียว", e: "English is Easy", cr: "3(2-2-5)", g: "ge", y: 1, sem: 1, p: [],
    d: "คำศัพท์ วลีและโครงสร้างประโยคภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน ทักษะการฟังและสนทนาประโยคภาษาอังกฤษในสถานการณ์ต่าง ๆ การอ่านข้อความหรือเนื้อหาสั้น ๆ ที่น่าสนใจ",
    dEn: "English vocabulary, phrases, and sentence structures for everyday communication; listening and speaking practice in common situations; reading short, engaging texts" },
  { c: "GE-010-004", s: "คุณค่า มกส.", t: "คุณค่ามหาวิทยาลัยกาฬสินธุ์", e: "Value of Kalasin University", cr: "3(2-2-5)", g: "ge", y: 1, sem: 1, p: [],
    d: "ความสำคัญของค่านิยมและวัฒนธรรมองค์กรในระดับหน่วยงาน สังคม และประเทศ เอกลักษณ์ของมหาวิทยาลัย องค์ประกอบการเรียนรู้ทางสังคม จิตตปัญญาศึกษาเพื่อการพัฒนาความเป็นมนุษย์สำหรับสังคมคุณภาพ จิตสาธารณะ ผู้ประกอบการเพื่อการพัฒนาท้องถิ่น",
    dEn: "The importance of organizational and social values and culture at institutional, social, and national levels; university identity; components of social learning; contemplative education for human development; public-mindedness; entrepreneurship for local development" },
  { c: "GE-010-003", s: "ดิจิทัล", t: "ดิจิทัลกับชีวิตวิถีใหม่", e: "Digital Technology of New Normal", cr: "3(2-2-5)", g: "ge", y: 1, sem: 2, p: [],
    d: "ความเข้าใจในการใช้เทคโนโลยีดิจิทัลขั้นพื้นฐาน การประยุกต์ใช้เทคโนโลยีและนวัตกรรมดิจิทัล ความมั่นคงและปลอดภัยทางไซเบอร์ การพัฒนาแพลตฟอร์มออนไลน์ การรู้ดิจิทัล การพัฒนาทักษะดิจิทัล ความเป็นพลเมืองดิจิทัล การเป็นผู้ใช้ดิจิทัลอย่างชาญฉลาด",
    dEn: "Fundamental digital technology literacy; applications of digital technology and innovation; cybersecurity and online safety; online platform development; digital skills for learning, work, and responsible participation in contemporary society" },
  { c: "GE-010-005", s: "ชีวิตออกแบบได้", t: "ชีวิตออกแบบได้", e: "Ideal Life", cr: "3(2-2-5)", g: "ge", y: 2, sem: 3, p: [],
    d: "ปัจจัยและความสำคัญของแรงบันดาลใจในการใช้ชีวิต เทคนิคและวิธีคิดของผู้ประสบความสำเร็จ การเรียนรู้สถานการณ์ต่าง ๆ ด้วยตนเอง การวิเคราะห์และวางแผนเป้าหมายชีวิต การสร้างความสัมพันธ์ระหว่างบุคคล การวางตัว การมีมนุษยสัมพันธ์",
    dEn: "Sources and roles of inspiration in life; mindsets and techniques of successful people; self-directed learning from life situations; life-goal analysis and planning; interpersonal relationships; personal conduct and human relations" },
  { c: "GE-010-002", s: "อังกฤษ 2", t: "ภาษาอังกฤษฟุดฟิดฟอฟัน", e: "English is Fun", cr: "3(2-2-5)", g: "ge", y: 2, sem: 3, p: [],
    d: "การสื่อสารและใช้ภาษาอังกฤษในบริบทต่าง ๆ คำศัพท์ ประโยค ไวยากรณ์และสำนวนภาษาอังกฤษในสังคมพหุวัฒนธรรม การฟัง การเขียนและโต้ตอบในบริบทการท่องเที่ยว การเดินทาง และเพื่อนต่างวัฒนธรรม",
    dEn: "English communication in a range of contexts; vocabulary, sentence patterns, grammar, and idiomatic expressions in multicultural society; listening, writing, and interaction in the contexts of tourism, travel, and cross-cultural friendship" },
  { c: "GE-010-006", s: "ปรัชญา/เศรษฐฯ", t: "ปรัชญามนุษย์ สังคมและเศรษฐศาสตร์", e: "Human Philosophy; Society; and Economics", cr: "3(2-2-5)", g: "ge", y: 2, sem: 3, p: [],
    d: "สภาพแวดล้อมทางสังคม เศรษฐกิจ และการเมือง การปกครองทั้งภายในและภายนอกประเทศ หลักการบริหาร หลักกฎหมายเบื้องต้น การวิเคราะห์ปัญหาด้านจริยธรรมทางเศรษฐกิจระดับบุคคล องค์กร ประเทศและระดับโลก อุปสงค์ อุปทาน ทฤษฎีพฤติกรรมผู้บริโภค การออมและการลงทุน ปัญหาเงินเฟ้อ เงินฝืด การว่างงาน ปรัชญาเศรษฐกิจพอเพียง",
    dEn: "Philosophical inquiry concerning humanity, society, and economics; social, economic, and political environments; principles of administration and introductory law; analysis of economic-ethical problems at individual, organizational, national, and global levels; supply and demand; consumer behavior; saving and investment; inflation, deflation, unemployment; the philosophy of sufficiency economy" },
  { c: "GE-020-008", s: "ธุรกิจดิจิทัล", t: "การพัฒนาธุรกิจในสังคมดิจิทัล", e: "Business Development in the Digital Era", cr: "3(3-0-6)", g: "ge", y: 2, sem: 4, p: [],
    d: "หลักการเป็นผู้ประกอบการ การบริหารทรัพยากร เวลา การเงิน การบัญชีและระบบการขนส่งเบื้องต้น การตลาดดิจิทัล การสร้างเนื้อหาที่น่าสนใจเพื่อการตลาด การวางแผนการเงิน",
    dEn: "Principles of entrepreneurship; management of resources, time, and finance; introductory accounting and logistics systems; digital marketing; creation of engaging marketing content; financial planning for business development in a digital society" },
  { c: "GE-020-009", s: "ผู้นำ 21", t: "ผู้นำแห่งศตวรรษที่ 21", e: "Leadership of the 21st Century", cr: "3(3-0-6)", g: "ge", y: 2, sem: 4, p: [],
    d: "ผู้นำและผู้ตามที่ดี บุคลิกภาพ การทำงานเป็นทีม บริบทความเปลี่ยนแปลงของสังคมโลก การแก้ปัญหา การคิดวิเคราะห์ การสื่อสาร คุณธรรม จริยธรรม หลักธรรมาภิบาลสำหรับผู้นำ การวางแผนการเงินอย่างเป็นระบบ การเป็นนวัตกรสังคม",
    dEn: "Effective leadership and followership; personality and teamwork; the changing global context; problem solving, analytical thinking, and communication; morality, ethics, and good governance for leaders; systematic financial planning; becoming a social innovator" },

  /* ================= 2.1 กลุ่มวิชาพื้นฐานและปฏิบัติการทางวิศวกรรม ================= */
  { c: "EN-001-122", s: "สถิติ", t: "สถิติและการวิเคราะห์ข้อมูลสำหรับวิศวกรรม", e: "Statistics and Data Analysis for Engineering", cr: "3(3-0-6)", g: "eng", y: 1, sem: 1, p: [1, 6], ctx: "eng",
    d: "ความน่าจะเป็นและการแจกแจงความน่าจะเป็น ตัวแปรสุ่มและฟังก์ชันการแจกแจง สถิติเชิงพรรณนาและการสรุปอ้างอิง การประมาณค่าและช่วงความเชื่อมั่น การทดสอบสมมติฐาน การวิเคราะห์ความแปรปรวน การวิเคราะห์การถดถอยและสหสัมพันธ์ การออกแบบการทดลอง การประยุกต์ใช้วิธีการทางสถิติในการวิเคราะห์ข้อมูลสำหรับระบบปัญญาประดิษฐ์ การประเมินประสิทธิภาพตัวแบบการเรียนรู้ของเครื่อง การแก้ปัญหาทางวิศวกรรมเกษตรและอุตสาหกรรม" },
  { c: "EN-001-124", s: "เขียนแบบ", t: "การเขียนแบบวิศวกรรมและการวางผังระบบ", e: "Engineering Drawing and System Layout Design", cr: "3(2-2-6)", g: "eng", y: 1, sem: 1, p: [1, 2], ctx: "eng",
    d: "พื้นฐานและมาตรฐานการเขียนแบบวิศวกรรม การฉายภาพออโธกราฟิกและภาพสามมิติ การกำหนดขนาดและพิกัดความเผื่อ ภาพตัดและภาพช่วย การเขียนแบบชิ้นส่วนและแบบประกอบ การเขียนแบบด้วยโปรแกรมคอมพิวเตอร์ช่วยออกแบบ การสร้างแบบจำลองสองมิติและสามมิติ การประยุกต์ใช้การเขียนแบบวิศวกรรมในการออกแบบโครงสร้างระบบอัตโนมัติ เครื่องจักรกลเกษตร การจัดวางระบบอินเทอร์เน็ตของสรรพสิ่งและเซนเซอร์ในโรงงานและฟาร์มอัจฉริยะ" },
  { c: "EN-001-126", s: "Programming", t: "การเขียนโปรแกรมพื้นฐานสำหรับปัญญาประดิษฐ์", e: "Foundational Programming for Artificial Intelligence", cr: "3(2-2-6)", g: "eng", y: 1, sem: 1, p: [1, 2, 6], ctx: "eng",
    d: "หลักการเขียนโปรแกรมและขั้นตอนวิธีเบื้องต้น การเขียนโปรแกรมด้วยภาษาไพทอน โครงสร้างข้อมูลพื้นฐาน ตัวแปร นิพจน์ โครงสร้างการควบคุม ฟังก์ชัน โมดูล การเขียนโปรแกรมเชิงวัตถุ การจัดการไฟล์และฐานข้อมูลเบื้องต้น การใช้ชุดคำสั่งสำเร็จรูปสำหรับวิทยาศาสตร์ข้อมูลและปัญญาประดิษฐ์ การแก้จุดบกพร่องและการทดสอบโปรแกรม การประยุกต์ใช้การเขียนโปรแกรมในการวิเคราะห์ข้อมูลเกษตร การควบคุมอุปกรณ์อินเทอร์เน็ตของสรรพสิ่ง การพัฒนาโปรแกรมปัญญาประดิษฐ์เบื้องต้น" },
  { c: "EN-001-128", s: "Workshop 1", t: "ปฏิบัติการวิศวกรรมเชิงบูรณาการ 1", e: "Integrated Engineering Workshop 1", cr: "1(0-3-1)", g: "eng", y: 1, sem: 1, p: [1, 2, 5],
    d: "การใช้เครื่องมือช่าง การประกอบโครงอลูมิเนียมโปรไฟล์ การเดินท่อน้ำและระบบประปาสำหรับโรงเรือน การเดินสายไฟ การประกอบโครงแชสซีหุ่นยนต์",
    dEn: "Safe use of engineering hand tools; assembly of aluminium-profile structures; installation of water piping and plumbing systems for greenhouses; electrical wiring; assembly of a robot chassis" },
  { c: "EN-001-121", s: "เศรษฐศาสตร์วิศวฯ", t: "เศรษฐศาสตร์วิศวกรรมและการวิเคราะห์ต้นทุน", e: "Engineering Economics and Cost Analysis", cr: "3(3-0-6)", g: "eng", y: 1, sem: 2, p: [1, 6, 7], ctx: "eng",
    d: "แนวคิดพื้นฐานทางเศรษฐศาสตร์วิศวกรรม มูลค่าของเงินตามเวลา อัตราดอกเบี้ยและการคิดลด การวิเคราะห์มูลค่าปัจจุบันสุทธิและอัตราผลตอบแทนภายใน การวิเคราะห์ต้นทุนและผลประโยชน์ของโครงการวิศวกรรม การประเมินความเป็นไปได้ทางเศรษฐศาสตร์ของโครงการลงทุนด้านปัญญาประดิษฐ์และระบบอัจฉริยะ ต้นทุนวงจรชีวิตของระบบ การคิดค่าเสื่อมราคา การวิเคราะห์จุดคุ้มทุน การตัดสินใจทางเศรษฐศาสตร์ภายใต้ความไม่แน่นอน กรณีศึกษาการลงทุนในระบบปัญญาประดิษฐ์ เกษตรกรรม อุตสาหกรรม และนวัตกรรม" },
  { c: "EN-001-123", s: "ความร้อน-ของไหล", t: "วิศวกรรมความร้อนและของไหลในระบบอัจฉริยะ", e: "Thermal-Fluid Engineering in Smart Systems", cr: "3(3-0-6)", g: "eng", y: 1, sem: 2, p: [1, 2], ctx: "eng",
    d: "คุณสมบัติของสารและสถานะของสาร กฎข้อที่หนึ่งและกฎข้อที่สองของอุณหพลศาสตร์ พลังงานและการเปลี่ยนรูปพลังงาน วัฏจักรอุณหพลศาสตร์และประสิทธิภาพเครื่องจักรความร้อน คุณสมบัติและพฤติกรรมของของไหล สมการความต่อเนื่อง สมการแบร์นูลลีและการประยุกต์ใช้ การไหลในท่อและการสูญเสียความดัน ปั๊มและกังหัน การประยุกต์ใช้ความรู้อุณหพลศาสตร์และของไหลในระบบผลิตพลังงานร่วม ระบบอบแห้งผลผลิตเกษตร ระบบระบายความร้อนสำหรับอุปกรณ์คอมพิวเตอร์และเครื่องแม่ข่ายปัญญาประดิษฐ์" },
  { c: "EN-001-125", s: "กลศาสตร์วัสดุ", t: "กลศาสตร์วัสดุและการออกแบบโครงสร้าง", e: "Mechanics of Materials and Structural Design", cr: "3(3-0-6)", g: "eng", y: 1, sem: 2, p: [1, 2], ctx: "eng",
    d: "แนวคิดพื้นฐานของแรงและระบบแรง สภาวะสมดุลของวัตถุแข็งเกร็ง การวิเคราะห์โครงสร้างและโครง ความเค้นและความเครียดในแนวแกน ความเค้นเฉือนและความเค้นดัด การบิดของเพลา ไดอะแกรมแรงเฉือนและโมเมนต์ดัด การโก่งตัวของคาน ความเค้นรวมและความเสียหาย ค่าความปลอดภัยและเกณฑ์การออกแบบ การประยุกต์ใช้หลักกลศาสตร์วัสดุในการออกแบบโครงสร้างเครื่องจักรกลเกษตร ระบบโครงรับน้ำหนักสำหรับโดรนและหุ่นยนต์เกษตร โครงสร้างระบบอัตโนมัติในโรงงานอุตสาหกรรม" },
  { c: "EN-001-127", s: "ไฟฟ้า-อิเล็ก", t: "พื้นฐานไฟฟ้าและอิเล็กทรอนิกส์สำหรับระบบอัจฉริยะ", e: "Electrical and Electronic Fundamentals for Intelligent Systems", cr: "3(3-0-6)", g: "eng", y: 1, sem: 2, p: [1, 2], ctx: "eng",
    d: "หลักการพื้นฐานของวงจรไฟฟ้ากระแสตรงและกระแสสลับ กฎของเคอร์ชอฟฟ์และการวิเคราะห์วงจร อุปกรณ์อิเล็กทรอนิกส์พื้นฐาน ไดโอด ทรานซิสเตอร์ วงจรรวม ระบบดิจิทัลและตรรกะ มอเตอร์ไฟฟ้าและระบบขับเคลื่อน เซนเซอร์และทรานสดิวเซอร์ การแปลงสัญญาณแอนะล็อกและดิจิทัล การประยุกต์ใช้ความรู้ไฟฟ้าและอิเล็กทรอนิกส์ในการออกแบบวงจรควบคุมระบบอินเทอร์เน็ตของสรรพสิ่ง เซนเซอร์อัจฉริยะ ระบบขับเคลื่อนสำหรับหุ่นยนต์และโดรนเกษตร" },
  { c: "EN-001-129", s: "Workshop 2", t: "ปฏิบัติการวิศวกรรมเชิงบูรณาการ 2", e: "Integrated Engineering Workshop 2", cr: "1(0-3-1)", g: "eng", y: 1, sem: 2, p: [2, 5], h: ["EN-001-128"], co: ["EN-001-127"],
    d: "การบัดกรี การติดตั้งเซนเซอร์ การเชื่อมต่อบอร์ดไมโครคอนโทรลเลอร์ การลากสายวางระบบเครือข่ายฮาร์ดแวร์เข้าสู่ตัวโครงสร้าง",
    dEn: "Soldering; sensor installation; microcontroller-board interfacing; hardware-network cabling and integration into the structure built in Integrated Engineering Workshop 1" },
  { c: "EN-001-230", s: "Workshop 3", t: "ปฏิบัติการวิศวกรรมเชิงบูรณาการ 3", e: "Integrated Engineering Workshop 3", cr: "1(0-3-1)", g: "eng", y: 2, sem: 3, p: [1, 2, 5], h: ["EN-001-129"], w: ["EN-001-127"],
    d: "การต่อตู้ควบคุมระดับอุตสาหกรรม การเชื่อมต่อเซนเซอร์เข้ากับบอร์ดเอดจ์ปัญญาประดิษฐ์ การทดสอบระบบแบบบูรณาการเต็มรูปแบบ",
    dEn: "Industrial control-panel wiring; integration of sensors with Edge AI boards; full integrated system testing, for example an autonomous greenhouse or an operational mobile robot" },

  /* ================= 2.2 กลุ่มวิชาแกนปัญญาประดิษฐ์และระบบอัจฉริยะ ================= */
  { c: "EN-131-101", s: "Intro AI", t: "ความรู้เบื้องต้นสำหรับปัญญาประดิษฐ์", e: "Introduction to Artificial Intelligence", cr: "3(3-0-6)", g: "ai", y: 1, sem: 1, p: [1, 4, 7], ctx: "ai",
    d: "ประวัติและพัฒนาการของปัญญาประดิษฐ์ ประเภทและสาขาของปัญญาประดิษฐ์ การเรียนรู้ของเครื่อง คอมพิวเตอร์วิทัศน์ การประมวลผลภาษาธรรมชาติ ระบบผู้เชี่ยวชาญ หลักการค้นหาและการให้เหตุผลของปัญญาประดิษฐ์ การแทนความรู้และการอนุมาน เครื่องมือและภาษาโปรแกรมสำหรับปัญญาประดิษฐ์ แนวโน้มและทิศทางของปัญญาประดิษฐ์ในปัจจุบัน ปัญญาประดิษฐ์แบบสร้างสรรค์ ตัวแทนปัญญาประดิษฐ์ จริยธรรมปัญญาประดิษฐ์และผลกระทบต่อสังคม การประยุกต์ใช้ปัญญาประดิษฐ์ในภาคเกษตรกรรม อุตสาหกรรม และนวัตกรรม" },
  { c: "EN-131-102", s: "คณิต AI", t: "คณิตศาสตร์วิศวกรรมปัญญาประดิษฐ์", e: "Mathematics for Artificial Intelligence", cr: "3(3-0-6)", g: "ai", y: 1, sem: 2, p: [1, 6], ctx: "ai",
    d: "พีชคณิตเชิงเส้นสำหรับปัญญาประดิษฐ์ เวกเตอร์ เมทริกซ์ การแปลงเชิงเส้น การแยกค่าเอกพจน์ แคลคูลัสหลายตัวแปรและการหาอนุพันธ์ย่อยสำหรับการเพิ่มประสิทธิภาพตัวแบบปัญญาประดิษฐ์ ทฤษฎีความน่าจะเป็นและสถิติสำหรับการเรียนรู้ของเครื่อง การแจกแจงความน่าจะเป็นที่ใช้ในปัญญาประดิษฐ์ การหาค่าเหมาะที่สุดด้วยวิธีการลดระดับความชันและการแพร่กระจายย้อนกลับ คณิตศาสตร์สำหรับโครงข่ายประสาทเทียมและการเรียนรู้เชิงลึก การประยุกต์ใช้คณิตศาสตร์ในการพัฒนาและวิเคราะห์ตัวแบบปัญญาประดิษฐ์สำหรับภาคเกษตรกรรมและอุตสาหกรรม" },
  { c: "EN-131-206", s: "ML/DL", t: "การเรียนรู้ของเครื่องและการเรียนรู้เชิงลึก", e: "Machine Learning and Deep Learning", cr: "3(2-2-5)", g: "ai", y: 2, sem: 3, p: [1, 5, 6], ctx: "ai", h: ["EN-001-126", "EN-131-102"], w: ["EN-001-122"],
    d: "หลักการและแนวคิดพื้นฐานของการเรียนรู้ของเครื่อง ขั้นตอนวิธีการเรียนรู้ของเครื่องแบบมีผู้สอน การถดถอยเชิงเส้น การถดถอยโลจิสติก ต้นไม้ตัดสินใจ ป่าสุ่ม เครื่องจักรเวกเตอร์สนับสนุน ขั้นตอนวิธีแบบไม่มีผู้สอน การจัดกลุ่มแบบเคมีน การลดมิติข้อมูล การประเมินและการปรับแต่งตัวแบบ โครงข่ายประสาทเทียมและการเรียนรู้เชิงลึก สถาปัตยกรรมโครงข่ายประสาทเทียมแบบคอนโวลูชัน โครงข่ายประสาทเทียมแบบวนซ้ำ โครงข่ายทรานสฟอร์เมอร์ การเรียนรู้แบบถ่ายโอนและการปรับแต่งละเอียด การฝึกตัวแบบด้วยหน่วยประมวลผลกราฟิก การป้องกันการเรียนรู้เกิน การประยุกต์ใช้ในการพยากรณ์ผลผลิตเกษตร การตรวจจับโรคพืช การควบคุมคุณภาพในโรงงาน การวิเคราะห์ข้อมูลอุตสาหกรรม" },
  { c: "EN-131-207", s: "Data Eng", t: "วิศวกรรมข้อมูลและข้อมูลขนาดใหญ่", e: "Data Engineering and Big Data", cr: "3(3-0-6)", g: "ai", y: 2, sem: 3, p: [2, 3, 6], ctx: "ai", h: ["EN-001-126"], w: ["EN-001-122"],
    d: "หลักการและวงจรชีวิตของข้อมูล การออกแบบและพัฒนาไปป์ไลน์ข้อมูล กระบวนการสกัด การแปลง และการโหลดข้อมูล การจัดการฐานข้อมูลเชิงสัมพันธ์ด้วยเอสคิวแอลและฐานข้อมูลที่ไม่ได้ใช้เอสคิวแอลอย่างเดียวสำหรับข้อมูลปัญญาประดิษฐ์ การออกแบบคลังข้อมูลและทะเลข้อมูล สถาปัตยกรรมทะเลคลังข้อมูล การทำความสะอาดและการแปลงข้อมูล การจัดการคุณภาพและธรรมาภิบาลข้อมูล การประมวลผลข้อมูลแบบกระจาย การจัดการข้อมูลขนาดใหญ่ การออกแบบสถาปัตยกรรมข้อมูลสำหรับระบบปัญญาประดิษฐ์ในภาคเกษตรกรรมและอุตสาหกรรม ข้อมูลเซนเซอร์ฟาร์ม ข้อมูลกระบวนการผลิต ข้อมูลห่วงโซ่อุปทาน" },
  { c: "EN-131-203", s: "Computer Vision", t: "คอมพิวเตอร์วิทัศน์และการวิเคราะห์ภาพ", e: "Computer Vision and Image Analysis", cr: "3(2-2-5)", g: "ai", y: 2, sem: 4, p: [2, 3, 6], ctx: "ai", h: ["EN-131-206"], w: ["EN-001-126"],
    d: "หลักการพื้นฐานของการประมวลผลภาพดิจิทัล การแทนสัญญาณภาพและการแปลงภาพ การปรับปรุงคุณภาพภาพและการกรองสัญญาณ การแบ่งส่วนภาพและการตรวจจับขอบ การสกัดคุณลักษณะภาพด้วยวิธีทางสถิติและการเรียนรู้เชิงลึก การตรวจจับและจำแนกวัตถุด้วยโครงข่ายประสาทเทียมแบบคอนโวลูชัน การวิเคราะห์ภาพมัลติสเปกตรัมจากโดรน การประยุกต์ใช้คอมพิวเตอร์วิทัศน์สำหรับการตรวจสอบคุณภาพผลผลิตเกษตร การตรวจจับโรคพืช การคัดเกรดสินค้าในสายการผลิต การตรวจสอบกระบวนการในโรงงานเกษตรอุตสาหกรรม" },
  { c: "EN-131-204", s: "IoT/Edge", t: "ระบบอินเทอร์เน็ตของสรรพสิ่งอัจฉริยะและการประมวลผลที่ขอบเครือข่าย", e: "Smart Internet of Things and Edge Computing", cr: "3(2-2-5)", g: "ai", y: 2, sem: 3, p: [1, 2, 4], ctx: "ai", h: ["EN-001-127"], w: ["EN-001-126"],
    d: "สถาปัตยกรรมและองค์ประกอบของระบบอินเทอร์เน็ตของสรรพสิ่ง โพรโทคอลการสื่อสารไร้สาย เซนเซอร์และทรานสดิวเซอร์อัจฉริยะสำหรับตรวจวัดอุณหภูมิ ความชื้น แสง และก๊าซ ไมโครคอนโทรลเลอร์และระบบฝังตัว การประมวลผลที่ขอบเครือข่าย การบูรณาการระบบอินเทอร์เน็ตของสรรพสิ่งกับแพลตฟอร์มคลาวด์ปัญญาประดิษฐ์ ความมั่นคงปลอดภัยของระบบอินเทอร์เน็ตของสรรพสิ่ง การออกแบบและพัฒนาระบบ การประยุกต์ใช้ในฟาร์มอัจฉริยะ โรงงานอัตโนมัติ ระบบชลประทาน การตรวจสอบสภาพแวดล้อมในบริบทเกษตรอุตสาหกรรม" },
  { c: "EN-131-205", s: "Cloud/MLOps", t: "ระบบประมวลผลคลาวด์และการดำเนินการเรียนรู้ของเครื่อง", e: "Cloud Computing and Machine Learning Operations", cr: "3(2-2-5)", g: "ai", y: 2, sem: 4, p: [2, 4, 7], ctx: "ai", h: ["EN-131-206"], w: ["EN-131-207"],
    d: "หลักการและสถาปัตยกรรมของระบบประมวลผลคลาวด์สำหรับปัญญาประดิษฐ์ บริการคลาวด์ปัญญาประดิษฐ์จากผู้ให้บริการหลัก การนำตัวแบบการเรียนรู้ของเครื่องไปใช้งานบนคลาวด์ การปรับแต่งพารามิเตอร์ไฮเปอร์ การค้นหาสถาปัตยกรรมตัวแบบประสาทเทียม การสร้างตัวแบบการเรียนรู้ของเครื่องอัตโนมัติ การบริหารจัดการไปป์ไลน์การเรียนรู้ของเครื่องและการติดตามการทดลอง การบีบอัดและเพิ่มประสิทธิภาพตัวแบบด้วยวิธีการตัดแต่ง การทำให้เป็นค่าไม่ต่อเนื่อง และการกลั่นความรู้ หลักการปฏิบัติการการเรียนรู้ของเครื่องเบื้องต้นสำหรับการบริหารวงจรชีวิตตัวแบบ การประยุกต์ใช้คลาวด์ปัญญาประดิษฐ์สำหรับเกษตรกรรมและอุตสาหกรรม" },
  { c: "EN-131-208", s: "HW/Network", t: "โครงสร้างพื้นฐานฮาร์ดแวร์และระบบเครือข่ายสำหรับการประมวลผลปัญญาประดิษฐ์", e: "Infrastructure and Network Systems for AI Computing", cr: "3(3-0-6)", g: "ai", y: 2, sem: 4, p: [1, 2, 4], ctx: "ai", h: ["EN-001-127"], w: ["EN-131-204"], co: ["EN-131-205"],
    d: "สถาปัตยกรรมคอมพิวเตอร์สำหรับปัญญาประดิษฐ์ หน่วยประมวลผลกราฟิก หน่วยประมวลผลเทนเซอร์ การประมวลผลแบบขนานและการเร่งความเร็วด้วยฮาร์ดแวร์ หลักการและสถาปัตยกรรมของระบบเครือข่ายคอมพิวเตอร์ โพรโทคอลการสื่อสารสำหรับระบบปัญญาประดิษฐ์ เครือข่ายไร้สายและเครือข่ายยุคที่ห้า การจัดการคอนเทนเนอร์ การออกแบบระบบปัญญาประดิษฐ์แบบขยายขนาดได้และมีความพร้อมใช้งานสูง ความมั่นคงปลอดภัยของโครงสร้างพื้นฐานปัญญาประดิษฐ์ การตรวจสอบและบริหารจัดการระบบ การประยุกต์ใช้ในการสนับสนุนระบบฟาร์มอัจฉริยะ โรงงานอัจฉริยะ ศูนย์ข้อมูลสำหรับเกษตรอุตสาหกรรม" },

  /* ================= 2.3 กลุ่มวิชาชีพบังคับ ================= */
  { c: "EN-132-302", s: "AI BI/Product", t: "การออกแบบผลิตภัณฑ์และธุรกิจปัญญาประดิษฐ์", e: "AI Business and Product Design", cr: "3(3-0-6)", g: "track", y: 3, sem: 5, p: [1, 2, 3, 4, 5, 6, 7], ctx: "track", w: ["EN-131-101", "EN-001-121"],
    d: "หลักการและกระบวนการออกแบบผลิตภัณฑ์ปัญญาประดิษฐ์ การคิดเชิงออกแบบสำหรับการพัฒนานวัตกรรมปัญญาประดิษฐ์ การวิเคราะห์ความต้องการของผู้ใช้และตลาด การออกแบบและทดสอบต้นแบบ การประเมินความเป็นไปได้ทางเทคโนโลยีและธุรกิจ ผืนผ้าใบแบบจำลองธุรกิจสำหรับธุรกิจปัญญาประดิษฐ์ การวิเคราะห์คู่แข่งและการหาตำแหน่งทางการตลาด กลยุทธ์การนำผลิตภัณฑ์ออกสู่ตลาด การประเมินมูลค่าและผลตอบแทน ทรัพย์สินทางปัญญาสำหรับนวัตกรรมปัญญาประดิษฐ์ การประยุกต์ใช้สำหรับภาคเกษตรกรรม อุตสาหกรรม และนวัตกรรม" },
  { c: "EN-132-304", s: "Smart Agriculture", t: "ระบบฟาร์มอัจฉริยะและเกษตรแม่นยำ", e: "Smart Farming and Precision Agriculture", cr: "3(2-2-5)", g: "track", y: 3, sem: 5, p: [2, 4, 5, 6], ctx: "track", h: ["EN-131-204", "EN-131-206"], w: ["EN-131-203"],
    d: "แนวคิดและสถาปัตยกรรมของระบบฟาร์มอัจฉริยะและเกษตรกรรมแม่นยำสูง การออกแบบและติดตั้งเครือข่ายเซนเซอร์ไร้สายในแปลงเพาะปลูก การตรวจวัดและวิเคราะห์สภาพดิน น้ำ สภาพอากาศ และการเจริญเติบโตของพืชด้วยเทคโนโลยีอินเทอร์เน็ตของสรรพสิ่งและปัญญาประดิษฐ์ ระบบชลประทานอัจฉริยะและการควบคุมการจ่ายน้ำอัตโนมัติ การวิเคราะห์แบบจำลองเพื่อพยากรณ์และเตือนภัยโรคพืชและแมลงศัตรูพืช การบริหารจัดการฟาร์มด้วยแผงควบคุมข้อมูลและระบบสนับสนุนการตัดสินใจ การเชื่อมต่อแพลตฟอร์มคลาวด์เพื่อการบูรณาการข้อมูลเชิงพื้นที่สำหรับการผลิตข้าว อ้อย และมันสำปะหลัง" },
  { c: "EN-132-307", s: "Industrial Robotics", t: "ระบบควบคุมอัตโนมัติและหุ่นยนต์ในอุตสาหกรรม", e: "Industrial Automation and Control Systems", cr: "3(2-2-5)", g: "track", y: 3, sem: 5, p: [2, 4, 5, 6], ctx: "track", h: ["EN-001-127", "EN-131-204"], w: ["EN-001-230"],
    d: "โครงสร้างและสถาปัตยกรรมของตัวควบคุมแบบโปรแกรมได้ การเขียนโปรแกรมควบคุมด้วยภาษามาตรฐาน ผังแลดเดอร์ ผังบล็อกฟังก์ชัน ข้อความโครงสร้าง และผังฟังก์ชันแบบลำดับ การเชื่อมต่อสัญญาณอินพุตและเอาต์พุตทั้งระบบดิจิทัลและแอนะล็อก การโปรแกรมควบคุมเซนเซอร์ ตัวกระตุ้น และอุปกรณ์ภาคสนาม การออกแบบระบบสกาดาและส่วนต่อประสานระหว่างมนุษย์และเครื่องจักร การสื่อสารบนเครือข่ายอุตสาหกรรม การบูรณาการเทคโนโลยีอัตโนมัติร่วมกับปัญญาประดิษฐ์และอินเทอร์เน็ตของสรรพสิ่งเพื่อระบบการผลิตอัจฉริยะและการควบคุมระบบชลประทานขนาดใหญ่" },
  { c: "EN-132-308", s: "Software & AI Eng", t: "การพัฒนาซอฟต์แวรและวิศวกรรมปัญญาประดิษฐ์", e: "Software Development and AI Engineering", cr: "3(2-2-5)", g: "track", y: 3, sem: 5, p: [2, 3, 5, 6, 7], ctx: "track", h: ["EN-001-126", "EN-131-205"], w: ["EN-131-207"],
    d: "วงจรชีวิตการพัฒนาซอฟต์แวร์ปัญญาประดิษฐ์และกระบวนการวิศวกรรมซอฟต์แวร์สมัยใหม่ การวิเคราะห์ความต้องการและการออกแบบสถาปัตยกรรมระบบที่ขับเคลื่อนด้วยปัญญาประดิษฐ์ การพัฒนาซอฟต์แวร์แบบบริการย่อยและการออกแบบเรสฟูลเอพีไอและกราฟคิวแอล รูปแบบสถาปัตยกรรมระบบและทฤษฎีการออกแบบซอฟต์แวร์ที่สะอาดและบำรุงรักษาง่าย วิธีการทดสอบซอฟต์แวร์และการประกันคุณภาพตัวแบบปัญญาประดิษฐ์ การจัดการเวอร์ชันของรหัสคำสั่งและการทำงานร่วมกันเป็นทีมด้วยกิต แนวคิดปฏิบัติการการเรียนรู้ของเครื่องและปฏิบัติการการพัฒนา การสร้างไปป์ไลน์การรวมและส่งมอบอย่างต่อเนื่อง การติดตั้งใช้งานระบบบนโครงสร้างพื้นฐานคลาวด์ แพลตฟอร์มคอนเทนเนอร์ และอุปกรณ์ปลายทาง กรณีศึกษาการพัฒนาแอปพลิเคชันเชิงพาณิชย์" },
  { c: "EN-132-303", s: "Decision/Supply Chain", t: "ปัญญาประดิษฐ์สำหรับห่วงโซ่การผลิตและอุปทาน", e: "AI for Production and Supply Chain", cr: "3(3-0-6)", g: "track", y: 3, sem: 6, p: [1, 2, 3, 6], ctx: "track", h: ["EN-131-207", "EN-131-206"], w: ["EN-131-101"],
    d: "แนวคิดและโครงสร้างห่วงโซ่การผลิตและโซ่อุปทานยุคดิจิทัลตั้งแต่ต้นน้ำถึงปลายน้ำ การวางแผนและบริหารจัดการปัจจัยการผลิต การจัดหาวัตถุดิบอัจฉริยะและการวิเคราะห์แหล่งที่มา กระบวนการจัดการในสายการผลิตและระบบคลังสินค้าอัตโนมัติ การพยากรณ์อุปสงค์และอุปทาน การจัดการโลจิสติกส์และการขนส่งอัจฉริยะ การประยุกต์ใช้ปัญญาประดิษฐ์ เทคโนโลยีอินเทอร์เน็ตของสรรพสิ่ง และการวิเคราะห์ข้อมูลขนาดใหญ่เพื่อเพิ่มประสิทธิภาพและลดต้นทุนตลอดห่วงโซ่คุณค่า การสร้างระบบตรวจสอบย้อนกลับและความยั่งยืนของผลิตภัณฑ์ การบริหารความเสี่ยงในโซ่อุปทาน" },
  { c: "EN-132-305", s: "Autonomous Agriculture", t: "อากาศยานไร้คนขับและการตรวจวัดระยะไกลสำหรับเกษตรกรรม", e: "UAVs and Remote Sensing in Agriculture", cr: "3(2-2-5)", g: "track", y: 3, sem: 6, p: [2, 4, 5, 6], ctx: "track", h: ["EN-131-203"], w: ["EN-131-204"],
    d: "หลักการทำงานและประเภทของอากาศยานไร้คนขับ กฎหมาย ระเบียบข้อบังคับ และการขอใบอนุญาตนักบินโดรนตามมาตรฐานสำนักงานการบินพลเรือนแห่งประเทศไทย ระบบการบินอัตโนมัติและการวางแผนเส้นทางบินเชิงพื้นที่ หลักการตรวจวัดระยะไกลและการประมวลผลข้อมูลภูมิสารสนเทศ การใช้งานเซนเซอร์และกล้องถ่ายภาพระบบอาร์จีบี มัลติสเปกตรัม และเทอร์มอล การประยุกต์ใช้ปัญญาประดิษฐ์ในการประมวลผลและวิเคราะห์ภาพถ่ายทางอากาศ การสร้างแผนที่สองมิติและแบบจำลองสามมิติ การประเมินสุขภาพพืชด้วยดัชนีพืชพรรณ การประยุกต์ใช้โดรนเพื่อการฉีดพ่นสารเคมีแม่นยำ การประเมินผลผลิต ข้าว อ้อย และมันสำปะหลัง" },
  { c: "EN-132-306", s: "Smart Manufacturing", t: "โรงงานอัจฉริยะและเทคโนโลยีดิจิทัลทวิน", e: "Smart Factory and Digital Twin Technologies", cr: "3(2-2-5)", g: "track", y: 3, sem: 6, p: [1, 2, 4, 6], ctx: "track", h: ["EN-131-206"], w: ["EN-132-307"],
    d: "สถาปัตยกรรมโรงงานอัจฉริยะและแนวคิดอุตสาหกรรมยุคที่สี่ การบูรณาการระบบเทคโนโลยีปฏิบัติการร่วมกับเทคโนโลยีสารสนเทศ การออกแบบและจำลองกระบวนการผลิตด้วยเทคโนโลยีดิจิทัลทวิน การตรวจสอบและควบคุมคุณภาพชิ้นงานแบบเวลาจริงด้วยปัญญาประดิษฐ์และคอมพิวเตอร์วิทัศน์ ระบบบำรุงรักษาเชิงพยากรณ์สำหรับเครื่องจักรกลอุตสาหกรรมด้วยการเรียนรู้ของเครื่อง การจัดการพลังงานอัจฉริยะและระบบผลิตพลังงานร่วม การวางผังและบริหารสายการผลิตอัตโนมัติเพื่อประยุกต์ใช้ในโรงงานน้ำตาล โรงงานแป้งมันสำปะหลัง และโรงสีข้าวยุคใหม่" },
  { c: "EN-132-309", s: "Agentic AI", t: "ระบบเอเจนต์ปัญญาประดิษฐ์เชิงรับการวางแผน", e: "Agentic AI Systems", cr: "3(2-2-5)", g: "track", y: 3, sem: 6, p: [2, 4, 5, 6, 7], ctx: "track", h: ["EN-131-206"], w: ["EN-131-205", "EN-132-308"],
    d: "แนวคิดและสถาปัตยกรรมของตัวแทนปัญญาประดิษฐ์ ตั้งแต่ระบบตอบสนอง ระบบคิดคำนวณวางแผน และระบบผสมผสาน สถาปัตยกรรมระบบตัวแทนหลายตัวและกลไกการประสานงาน การเชื่อมต่อและการเพิ่มขีดความสามารถของตัวแบบภาษาขนาดใหญ่ร่วมกับตัวแทน การใช้เครื่องมือและการเรียกใช้ฟังก์ชันภายนอก การออกแบบระบบปัญญาประดิษฐ์แบบตัวแทนเพื่อการวางแผนเชิงตรรกะและการตัดสินใจแบบอัตโนมัติ การพัฒนาผ่านชุดคำสั่งสำเร็จรูปแลงเชน ออโตเจน และครูว์เอไอ การประยุกต์ใช้เทคนิคการสร้างข้อความจากการค้นคืน ความปลอดภัยเชิงโครงสร้างและจริยธรรมของตัวแทนในการแก้โจทย์เกษตรอุตสาหกรรม" },
  { c: "EN-132-201", s: "Sensing & Actuation", t: "ระบบตรวจวัดและขับเคลื่อนอัจฉริยะ", e: "Intelligent Sensing and Actuation Systems", cr: "3(2-2-5)", g: "track", y: 2, sem: 4, p: [2, 4, 5, 6], ctx: "track", h: ["EN-001-127", "EN-001-129"], w: ["EN-131-204"],
    d: "รอซิงก์จาก Vault" },

  /* ================= 2.5 กลุ่มวิชาโครงงานและสัมมนา ================= */
  { c: "EN-134-201", s: "Seminar I", t: "สัมมนาวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ I", e: "Seminar in Artificial Intelligence Engineering and Intelligent Systems I", cr: "1(0-2-1)", g: "proj", y: 2, sem: 4, p: [3, 4, 7],
    d: "แนวโน้มเทคโนโลยีปัญญาประดิษฐ์ล่าสุดในระดับประเทศและนานาชาติ กรณีศึกษาการประยุกต์ใช้ปัญญาประดิษฐ์ในภาคเกษตรกรรม อุตสาหกรรม และนวัตกรรมธุรกิจ การวิเคราะห์และวิจารณ์บทความวิชาการและงานวิจัยด้านปัญญาประดิษฐ์ การพัฒนาทักษะการนำเสนอด้วยสื่อและเทคโนโลยีทั้งภาษาไทยและภาษาอังกฤษ การแลกเปลี่ยนความรู้กับผู้เชี่ยวชาญจากภาคอุตสาหกรรมและวิชาการ การประเมินความถนัดและความสนใจของตนเองเทียบกับเส้นทางอาชีพและแขนงวิชา และการจัดทำแผนพัฒนาตนเองเพื่อใช้ประกอบการเลือกวิชาชีพเลือกและสถานประกอบการสหกิจศึกษา",
    dEn: "Review, analysis, and discussion of current topics in artificial intelligence engineering and intelligent systems; literature searching; source evaluation; technical synthesis; academic integrity; oral and written technical communication; self-assessment of aptitude and interest against career paths and study tracks; preparation of an individual development plan to inform the selection of professional electives and cooperative-education workplaces" },
  { c: "EN-134-302", s: "Seminar II", t: "สัมมนาวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ II", e: "Seminar in Artificial Intelligence Engineering and Intelligent Systems II", cr: "1(0-2-1)", g: "proj", y: 3, sem: 5, p: [3, 4, 7], h: ["EN-134-201"],
    d: "การสืบค้น วิเคราะห์ และสังเคราะห์องค์ความรู้หรือเทคโนโลยีอุบัติใหม่ด้านวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ การเปรียบเทียบแนวทางและประเมินข้อจำกัดของเทคโนโลยี การพิจารณาผลกระทบด้านเทคนิค จริยธรรม เศรษฐกิจ สังคม และอุตสาหกรรม การจัดทำบทความหรือรายงานเชิงวิชาการ การนำเสนอและอภิปรายเชิงวิชาชีพทั้งภาษาไทยและภาษาอังกฤษ",
    dEn: "Advanced investigation of emerging issues in artificial intelligence engineering and intelligent systems; critical comparison of approaches; assessment of technical, ethical, social, and industrial implications; academic writing; professional seminar presentation in Thai and English" },
  { c: "EN-134-303", s: "Project Prep", t: "การเตรียมความพร้อมโครงงานวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ", e: "Artificial Intelligence Engineering and Intelligent Systems Project Preparation", cr: "1(0-2-1)", g: "proj", y: 3, sem: 6, p: [1, 3, 4, 7], h: ["EN-134-201"], w: ["EN-134-302"],
    d: "การกำหนดหัวข้อและขอบเขตของโครงงานวิศวกรรมปัญญาประดิษฐ์ การทบทวนวรรณกรรมและงานวิจัยที่เกี่ยวข้อง การเขียนเค้าโครงโครงงานและการกำหนดวัตถุประสงค์ วิธีดำเนินการวิจัยและแผนการทำงาน การประเมินความเป็นไปได้ทางเทคนิคและทรัพยากร จริยธรรมการวิจัยและการใช้ปัญญาประดิษฐ์อย่างรับผิดชอบ การนำเสนอเค้าโครงโครงงานต่อคณะกรรมการเพื่อขออนุมัติ การเตรียมความพร้อมด้านเครื่องมือ อุปกรณ์ และซอฟต์แวร์สำหรับดำเนินโครงงาน",
    dEn: "Identification of an authentic industrial or community problem; requirements analysis; literature review; project scoping; engineering design and methodology; data, safety, ethics, budget, and risk planning; proposal preparation and presentation" },
  { c: "EN-134-404", s: "Capstone", t: "โครงงานวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ", e: "Artificial Intelligence Engineering and Intelligent Systems Project", cr: "3(1-6-4)", g: "proj", y: 4, sem: 7, p: [1, 2, 3, 4, 5, 6, 7], h: ["EN-134-303"],
    d: "การดำเนินโครงงานวิศวกรรมปัญญาประดิษฐ์ที่บูรณาการความรู้จากหลายศาสตร์ตามที่ได้รับอนุมัติจากคณะกรรมการ การพัฒนาระบบปัญญาประดิษฐ์หรือนวัตกรรมเพื่อแก้ปัญหาจริงในภาคเกษตรกรรม อุตสาหกรรม หรือธุรกิจ การทดสอบและประเมินประสิทธิภาพของระบบที่พัฒนา การวิเคราะห์ผลและการแก้ไขปัญหาที่พบระหว่างการดำเนินโครงงาน การทำงานร่วมกันเป็นทีมอย่างมีประสิทธิภาพ การจัดทำรายงานโครงงานฉบับสมบูรณ์ในรูปแบบวิชาการ การนำเสนอผลงานโครงงานต่อคณะกรรมการและผู้เชี่ยวชาญจากภาคอุตสาหกรรมในระดับวิชาชีพ",
    dEn: "Execution of an approved artificial intelligence engineering or intelligent systems project; iterative design and development; experimentation and validation; project and risk management; responsible teamwork; documentation; demonstration and oral defense of results" },

  /* ================= 2.6 กลุ่มวิชาประสบการณ์ภาคสนาม ================= */
  { c: "EN-135-401", s: "Co-op Prep", t: "เตรียมความพร้อมสหกิจศึกษา", e: "Cooperative Education Preparation", cr: "1(0-2-1)", g: "field", y: 3, sem: 6, p: [3, 4, 5, 7], co: ["EN-134-303"],
    d: "ปรัชญาและเป้าประสงค์ของสหกิจศึกษา ระเบียบและขั้นตอนการดำเนินสหกิจศึกษาของมหาวิทยาลัยกาฬสินธุ์ การค้นหาและการเลือกสถานประกอบการที่เหมาะสมด้านวิศวกรรมปัญญาประดิษฐ์ เกษตรกรรม อุตสาหกรรม และนวัตกรรม การเขียนประวัติย่อและจดหมายสมัครงานในภาษาไทยและภาษาอังกฤษ ทักษะการสัมภาษณ์งานและการนำเสนอตนเอง จรรยาบรรณวิชาชีพวิศวกรรมและการปฏิบัติตนในสถานประกอบการ ความปลอดภัยในการทำงานและกฎหมายแรงงานที่เกี่ยวข้อง ทักษะการสื่อสารและการทำงานร่วมกับผู้อื่นในสภาพแวดล้อมวิชาชีพ การวางแผนการเรียนรู้และการกำหนดเป้าหมาย การจัดทำแผนการปฏิบัติงานและรูปแบบรายงานสหกิจศึกษา",
    dEn: "Preparation for cooperative education; workplace readiness; professional ethics and safety; communication and teamwork; job application and interview skills; work planning; intellectual property and confidentiality; preparation of a cooperative-education learning plan" },
  { c: "EN-135-402", s: "Co-op", t: "สหกิจศึกษา", e: "Cooperative Education", cr: "6(0-40-0)", g: "field", y: 4, sem: 8, p: [2, 3, 4, 5, 7], h: ["EN-135-401", "EN-134-404"],
    d: "การฝึกประสบการณ์วิชาชีพด้านวิศวกรรมปัญญาประดิษฐ์ในสถานประกอบการที่ได้รับการอนุมัติจากมหาวิทยาลัย โรงงานน้ำตาล โรงงานแป้งมันสำปะหลัง โรงสีข้าว บริษัทเทคโนโลยี วิสาหกิจเริ่มต้นปัญญาประดิษฐ์ หน่วยงานวิจัยและพัฒนา หรือองค์กรภาครัฐด้านปัญญาประดิษฐ์ ไม่น้อยกว่าสิบหกสัปดาห์ การปฏิบัติงานจริงในตำแหน่งวิศวกรปัญญาประดิษฐ์หรืองานที่เกี่ยวข้องโดยบูรณาการความรู้และทักษะจากหลักสูตรสู่การแก้ปัญหาจริง การปฏิบัติตามจรรยาบรรณวิชาชีพวิศวกรรมและจริยธรรมปัญญาประดิษฐ์ การพัฒนาทักษะการทำงานเป็นทีมและการสื่อสารในระดับวิชาชีพ การจัดทำรายงานสหกิจศึกษาฉบับสมบูรณ์ การนำเสนอผลการปฏิบัติสหกิจศึกษาต่อคณะกรรมการและสถานประกอบการ",
    dEn: "Supervised professional practice in an approved workplace; application of artificial intelligence engineering and intelligent systems knowledge to authentic work; professional responsibility, teamwork, communication, problem solving, reflective learning, and presentation of workplace outcomes" },

  /* ========= 2.4 วิชาชีพเลือก — แขนงที่ 1 เกษตรอัจฉริยะ (EN-135-301..315) ========= */
  { c: "EN-135-301", s: "เกษตร-ชลประทาน", t: "เกษตรกรรมอัจฉริยะและการจัดชลประทาน", e: "Smart Agriculture and Irrigation Management", cr: "3(2-2-5)", g: "elec", tr: 1, p: [2, 6],
    d: "หลักการเกษตรกรรมอัจฉริยะและการเกษตรแม่นยำ การวิเคราะห์และจัดการทรัพยากรดินและน้ำด้วยปัญญาประดิษฐ์ การออกแบบระบบชลประทานอัจฉริยะ ระบบน้ำหยด ระบบสปริงเกลอร์ ระบบน้ำท่วมขัง การตรวจวัดความชื้นดินและปริมาณน้ำในแปลงด้วยเซนเซอร์และอินเทอร์เน็ตของสรรพสิ่ง การพยากรณ์ความต้องการน้ำของพืชด้วยการเรียนรู้ของเครื่อง การควบคุมการให้น้ำอัตโนมัติและการประหยัดน้ำ ระบบเตือนภัยภัยแล้งและน้ำท่วมด้วยปัญญาประดิษฐ์ การจัดการน้ำในระดับแปลงและระดับลุ่มน้ำ" },
  { c: "EN-135-302", s: "AI เกษตรแม่นยำ", t: "ปัญญาประดิษฐ์สำหรับเกษตรกรรมแม่นยำ", e: "Artificial Intelligence for Precision Agriculture", cr: "3(2-2-5)", g: "elec", tr: 1, p: [2, 6],
    d: "หลักการและแนวคิดของเกษตรกรรมแม่นยำ การประยุกต์ใช้ปัญญาประดิษฐ์และการเรียนรู้ของเครื่องในการวิเคราะห์ข้อมูลเกษตรแม่นยำ การวิเคราะห์ข้อมูลดินและการแนะนำการจัดการธาตุอาหารพืช การตรวจจับและจำแนกโรคพืชและแมลงศัตรูพืชด้วยคอมพิวเตอร์วิทัศน์และการเรียนรู้เชิงลึก การพยากรณ์ผลผลิตและการวางแผนการผลิต ระบบแนะนำการจัดการฟาร์มอัจฉริยะ การใช้ข้อมูลดาวเทียมและภาพถ่ายโดรนร่วมกับปัญญาประดิษฐ์ การบูรณาการข้อมูลจากหลายแหล่งเพื่อการตัดสินใจ การประยุกต์ใช้ในการผลิตข้าว อ้อย และมันสำปะหลัง" },
  { c: "EN-135-303", s: "GIS เกษตร", t: "ระบบสารสนเทศภูมิศาสตร์และการวิเคราะห์พื้นที่ทางการเกษตร", e: "Geographic Information Systems and Spatial Analysis for Agriculture", cr: "3(2-2-5)", g: "elec", tr: 1, p: [6, 2],
    d: "หลักการและองค์ประกอบของระบบสารสนเทศภูมิศาสตร์ ข้อมูลเชิงพื้นที่และระบบพิกัดอ้างอิง การจัดการและวิเคราะห์ข้อมูลเชิงพื้นที่แบบเวกเตอร์และแรสเตอร์ การสร้างและวิเคราะห์แผนที่ดิจิทัล การประมวลผลข้อมูลจากดาวเทียมและภาพถ่ายทางอากาศ การวิเคราะห์พื้นที่ด้วยวิธีการซ้อนทับ บัฟเฟอร์ และการวิเคราะห์เครือข่าย การบูรณาการระบบสารสนเทศภูมิศาสตร์กับปัญญาประดิษฐ์และการเรียนรู้ของเครื่อง การประยุกต์ใช้สำหรับการวางแผนการใช้ที่ดินเกษตร การจัดการทรัพยากรน้ำ การประเมินความเหมาะสมของพื้นที่ปลูกพืช การติดตามการเปลี่ยนแปลงการใช้ที่ดิน" },
  { c: "EN-135-304", s: "หลังการเก็บเกี่ยว", t: "เทคโนโลยีและนวัตกรรมการจัดการหลังการเก็บเกี่ยว", e: "Postharvest Management Technology and Innovation", cr: "3(3-0-6)", g: "elec", tr: 1, p: [2, 6],
    d: "หลักการและกระบวนการจัดการผลผลิตเกษตรหลังการเก็บเกี่ยว สรีรวิทยาและชีวเคมีของผลผลิตหลังการเก็บเกี่ยว การสูญเสียผลผลิตและแนวทางการลดความสูญเสีย เทคโนโลยีการคัดแยกและคัดเกรดผลผลิตด้วยปัญญาประดิษฐ์และคอมพิวเตอร์วิทัศน์ ระบบการอบแห้งและการเก็บรักษาผลผลิตอัจฉริยะ การควบคุมอุณหภูมิและความชื้นในโรงเก็บด้วยอินเทอร์เน็ตของสรรพสิ่งและปัญญาประดิษฐ์ การบรรจุภัณฑ์อัจฉริยะและการยืดอายุการเก็บรักษา ระบบตรวจสอบย้อนกลับและการรับรองคุณภาพผลผลิต" },
  { c: "EN-135-305", s: "พยากรณ์ฟาร์ม", t: "การพยากรณ์และวิเคราะห์ข้อมูลฟาร์มด้วยปัญญาประดิษฐ์", e: "AI-Based Farm Data Forecasting and Analytics", cr: "3(2-2-5)", g: "elec", tr: 1, p: [6, 2, 3],
    d: "หลักการและวิธีการพยากรณ์ข้อมูลทางการเกษตรด้วยปัญญาประดิษฐ์ การเก็บรวบรวมและจัดการข้อมูลขนาดใหญ่จากเครือข่ายเซนเซอร์ในฟาร์ม การวิเคราะห์อนุกรมเวลาสำหรับข้อมูลผลผลิตเกษตรและสภาพอากาศ การสร้างตัวแบบพยากรณ์ผลผลิตด้วยการเรียนรู้ของเครื่องและการเรียนรู้เชิงลึก การพยากรณ์ราคาสินค้าเกษตรและการวางแผนการผลิต การวิเคราะห์ความเสี่ยงและความไม่แน่นอน การออกแบบแผงควบคุมข้อมูลและระบบแสดงผลข้อมูลฟาร์มสำหรับเกษตรกรและผู้บริหาร การประเมินและตรวจสอบความถูกต้องของตัวแบบพยากรณ์" },
  { c: "EN-135-306", s: "Plant Factory", t: "โรงงานผลิตพืชอัจฉริยะและเกษตรกรรมแนวดิ่ง", e: "Smart Plant Factories and Vertical Farming", cr: "3(2-2-5)", g: "elec", tr: 1, p: [2, 6],
    d: "หลักการและแนวคิดของโรงงานผลิตพืชปิดและเกษตรกรรมแนวดิ่ง สถาปัตยกรรมและองค์ประกอบของโรงงานผลิตพืช ระบบแสงเทียมแอลอีดีและการควบคุมสเปกตรัมแสงด้วยปัญญาประดิษฐ์ ระบบปลูกพืชโดยไม่ใช้ดิน ไฮโดรโปนิกส์ แอโรโปนิกส์ อควาโปนิกส์ การควบคุมสภาพแวดล้อมในโรงเรือนอัตโนมัติ การตรวจสอบสุขภาพพืชและการจัดการโรคพืชด้วยคอมพิวเตอร์วิทัศน์และปัญญาประดิษฐ์ การประหยัดพลังงานและการจัดการทรัพยากร การวิเคราะห์ต้นทุนและผลตอบแทนของการลงทุน" },
  { c: "EN-135-307", s: "ปศุสัตว์อัจฉริยะ", t: "เทคโนโลยีปัญญาประดิษฐ์เพื่อการปศุสัตว์อัจฉริยะ", e: "Artificial Intelligence Technology for Smart Livestock", cr: "3(2-2-5)", g: "elec", tr: 1, p: [2, 6],
    d: "หลักการและแนวคิดของการปศุสัตว์อัจฉริยะ การติดตามและตรวจสอบสุขภาพสัตว์ด้วยอินเทอร์เน็ตของสรรพสิ่งและเซนเซอร์สวมใส่ การวิเคราะห์พฤติกรรมสัตว์ด้วยคอมพิวเตอร์วิทัศน์และปัญญาประดิษฐ์ การพยากรณ์และตรวจจับโรคสัตว์ด้วยการเรียนรู้ของเครื่อง ระบบให้อาหารสัตว์อัตโนมัติและการจัดการโภชนาการ การจัดการสภาพแวดล้อมในโรงเรือนปศุสัตว์ การติดตามและจัดการฝูงสัตว์ด้วยระบบจีพีเอส การวิเคราะห์ข้อมูลการผลิตและประสิทธิภาพของฟาร์ม ระบบตรวจสอบย้อนกลับผลิตภัณฑ์ปศุสัตว์" },
  { c: "EN-135-308", s: "CV คัดเกรดเกษตร", t: "วิสัยทัศน์คอมพิวเตอร์สำหรับการจำแนกและคัดเกรดทางการเกษตร", e: "Computer Vision for Agricultural Classification and Grading", cr: "3(2-2-5)", g: "elec", tr: 1, p: [2, 6],
    d: "หลักการของคอมพิวเตอร์วิทัศน์สำหรับการจำแนกและคัดเกรดผลผลิตเกษตร การออกแบบและติดตั้งระบบกล้องและแสงสำหรับการตรวจสอบผลผลิต การสร้างและจัดการชุดข้อมูลภาพผลผลิตเกษตรสำหรับการฝึกตัวแบบปัญญาประดิษฐ์ การฝึกและปรับแต่งตัวแบบการเรียนรู้เชิงลึกสำหรับการจำแนกประเภทและตรวจจับตำหนิ การวัดขนาดและน้ำหนักผลผลิตด้วยการประมวลผลภาพ การบูรณาการระบบคอมพิวเตอร์วิทัศน์กับสายพานลำเลียงและระบบคัดแยกอัตโนมัติ การประเมินความแม่นยำและประสิทธิภาพของระบบ" },
  { c: "EN-135-309", s: "ML เซนเซอร์ฟาร์ม", t: "การเรียนรู้ของเครื่องและการวิเคราะห์ข้อมูลเซนเซอร์ในฟาร์ม", e: "Machine Learning and Farm Sensor Data Analytics", cr: "3(2-2-5)", g: "elec", tr: 1, p: [6, 2],
    d: "หลักการและสถาปัตยกรรมของเครือข่ายเซนเซอร์ในฟาร์ม การเก็บรวบรวมและส่งข้อมูลจากเซนเซอร์ดิน น้ำ อากาศ พืช การประมวลผลสัญญาณและการกรองสัญญาณรบกวน การทำความสะอาดและเตรียมข้อมูลเซนเซอร์สำหรับการวิเคราะห์ด้วยปัญญาประดิษฐ์ การวิเคราะห์อนุกรมเวลาและการหารูปแบบในข้อมูลเซนเซอร์ การสร้างตัวแบบการเรียนรู้ของเครื่องสำหรับการพยากรณ์และการตัดสินใจ การตรวจจับความผิดปกติและการแจ้งเตือนอัจฉริยะ การแสดงผลและรายงานข้อมูลเซนเซอร์ผ่านแผงควบคุมข้อมูล" },
  { c: "EN-135-310", s: "จัดการผลิตพืช AI", t: "การจัดการการผลิตพืชอัจฉริยะด้วยปัญญาประดิษฐ์", e: "Artificial Intelligence for Smart Crop Production Management", cr: "3(2-2-5)", g: "elec", tr: 1, p: [2, 6, 7],
    d: "หลักการและแนวคิดของการผลิตพืชอัจฉริยะ การวิเคราะห์สมบัติของดินและการประเมินความอุดมสมบูรณ์ของดิน การวิเคราะห์ธาตุอาหารพืชและการวางแผนการใช้ปุ๋ยเฉพาะพื้นที่ การจัดการน้ำและการให้น้ำอย่างแม่นยำ การใช้ข้อมูลจากเซนเซอร์ อินเทอร์เน็ตของสรรพสิ่ง และภาพถ่ายจากอากาศยานไร้คนขับในการติดตามการเจริญเติบโตของพืช การประยุกต์ใช้การเรียนรู้ของเครื่องและการเรียนรู้เชิงลึกในการวิเคราะห์โรคพืชและแมลงศัตรูพืชจากภาพดิจิทัล การพยากรณ์ผลผลิต การวิเคราะห์ต้นทุนการผลิต การพัฒนาระบบสนับสนุนการตัดสินใจด้วยปัญญาประดิษฐ์เชิงสร้างสรรค์" },
  { c: "EN-135-311", s: "หุ่นยนต์เกษตร", t: "หุ่นยนต์และระบบอัตโนมัติทางการเกษตร", e: "Agricultural Robotics and Automation", cr: "3(2-2-5)", g: "elec", tr: 1, p: [2, 1],
    d: "หลักการของหุ่นยนต์และระบบอัตโนมัติทางการเกษตร องค์ประกอบของระบบหุ่นยนต์ เซนเซอร์ ตัวกระตุ้น ระบบควบคุม การประยุกต์ใช้อินเทอร์เน็ตของสรรพสิ่ง ปัญญาประดิษฐ์ คอมพิวเตอร์วิทัศน์ และการเรียนรู้ของเครื่องในหุ่นยนต์เกษตร การนำทางอัตโนมัติ การระบุตำแหน่งและการวางแผนเส้นทาง การเก็บข้อมูลภาคสนาม การพ่นสาร การใส่ปุ๋ย การกำจัดวัชพืช การเก็บเกี่ยว การใช้แขนกลและหุ่นยนต์เคลื่อนที่ในงานเกษตร การบูรณาการหุ่นยนต์กับอากาศยานไร้คนขับและระบบฟาร์มอัจฉริยะ" },
  { c: "EN-135-312", s: "UAV/Remote เกษตร", t: "เทคโนโลยีอากาศยานไร้คนขับและการสำรวจระยะไกลเพื่อการเกษตร", e: "UAV Technology and Remote Sensing for Agriculture", cr: "3(2-2-5)", g: "elec", tr: 1, p: [2, 6],
    d: "หลักการทำงานและประเภทของอากาศยานไร้คนขับ การวางแผนเส้นทางการบินเพื่อการสำรวจทางการเกษตร การประยุกต์ใช้เซนเซอร์ภาพถ่ายหลายช่วงคลื่นและภาพความร้อนเพื่อติดตามความสมบูรณ์ของพืช การประมวลผลและวิเคราะห์ภาพถ่ายทางอากาศด้วยโปรแกรมเฉพาะทางและการเรียนรู้ของเครื่อง การประเมินความเสียหายของแปลงเกษตรจากภัยพิบัติ การสร้างแผนที่ดัชนีพืชพรรณเพื่อการประเมินการเจริญเติบโต การประยุกต์ใช้อากาศยานไร้คนขับในการพ่นของเหลวเพื่อการเกษตรแม่นยำ กฎหมายและความปลอดภัยในการใช้งาน" },
  { c: "EN-135-313", s: "ห่วงโซ่อุปทานเกษตร", t: "การจัดการห่วงโซ่อุปทานสินค้าเกษตรด้วยเทคโนโลยีอัจฉริยะ", e: "Smart Agricultural Supply Chain Management", cr: "3(3-0-6)", g: "elec", tr: 1, p: [6, 2, 7],
    d: "หลักการจัดการห่วงโซ่อุปทานและโลจิสติกส์สำหรับสินค้าเกษตร การใช้ปัญญาประดิษฐ์ในการวางแผนการจัดหาและการกระจายผลผลิตเกษตร การจัดการคลังสินค้าเกษตรอัจฉริยะด้วยอินเทอร์เน็ตของสรรพสิ่ง การติดตามและตรวจสอบย้อนกลับผลผลิตด้วยเทคโนโลยีบล็อกเชนตลอดห่วงโซ่อุปทาน การพยากรณ์ความต้องการของตลาดด้วยการเรียนรู้ของเครื่องเพื่อลดความสูญเสียอาหาร การวิเคราะห์และการจัดเส้นทางการขนส่งผลผลิตอย่างมีประสิทธิภาพ การบูรณาการเทคโนโลยีเพื่อเพิ่มความโปร่งใสและความยั่งยืน" },
  { c: "EN-135-314", s: "AI เทคโนชีวภาพเกษตร", t: "การประยุกต์ใช้ปัญญาประดิษฐ์ในเทคโนโลยีชีวภาพการเกษตร", e: "AI Applications in Agricultural Biotechnology", cr: "3(2-2-5)", g: "elec", tr: 1, p: [6, 1],
    d: "ความสัมพันธ์ระหว่างปัญญาประดิษฐ์และเทคโนโลยีชีวภาพการเกษตร การใช้การเรียนรู้ของเครื่องในการวิเคราะห์ข้อมูลพันธุกรรมพืชและสัตว์ การวิเคราะห์ลำดับดีเอ็นเอเพื่อการคัดเลือกสายพันธุ์ที่ทนทานต่อโรคและสภาพอากาศ การใช้ปัญญาประดิษฐ์ในการค้นหาสารออกฤทธิ์ทางชีวภาพเพื่อใช้เป็นชีวภัณฑ์ทางการเกษตร การจำลองและพยากรณ์ปฏิสัมพันธ์ระหว่างสิ่งมีชีวิตและสภาพแวดล้อม จริยธรรมและความปลอดภัยทางชีวภาพ" },
  { c: "EN-135-315", s: "ความเสี่ยง/ภูมิอากาศ AI", t: "การจัดการความเสี่ยงทางการเกษตรและการเปลี่ยนแปลงสภาพภูมิอากาศด้วยปัญญาประดิษฐ์", e: "Agricultural Risk and Climate Change Management with AI", cr: "3(3-0-6)", g: "elec", tr: 1, p: [6, 4],
    d: "ผลกระทบของการเปลี่ยนแปลงสภาพภูมิอากาศต่อการเกษตร การประยุกต์ใช้ปัญญาประดิษฐ์ในการวิเคราะห์ข้อมูลภูมิอากาศขนาดใหญ่ การพยากรณ์การเกิดสภาพอากาศสุดขั้วภัยแล้งและอุทกภัย การวิเคราะห์และประเมินความเสี่ยงต่อผลผลิตทางการเกษตรด้วยตัวแบบคอมพิวเตอร์ การออกแบบระบบเตือนภัยล่วงหน้าอัจฉริยะ กลยุทธ์การปรับตัวของภาคการเกษตร การประกันภัยพืชผลโดยอาศัยข้อมูลดาวเทียมและปัญญาประดิษฐ์ นโยบายและความยั่งยืนทางการเกษตร" },

  /* ========= 2.4 วิชาชีพเลือก — แขนงที่ 2 AI ภาคอุตสาหกรรม (EN-135-316..333) ========= */
  { c: "EN-135-316", s: "Advanced Control/DCS", t: "การควบคุมกระบวนการขั้นสูงและระบบควบคุมแบบกระจาย", e: "Advanced Process Control and Distributed Control Systems", cr: "3(2-2-5)", g: "elec", tr: 2, p: [1, 2, 6], h: ["EN-132-307", "EN-132-201"],
    d: "การสร้างแบบจำลองพลวัตและการระบุระบบของกระบวนการอุตสาหกรรม การวิเคราะห์เสถียรภาพและสมรรถนะของวงควบคุม การปรับตั้งตัวควบคุมพีไอดีขั้นสูง การควบคุมแบบลำดับชั้น แบบป้อนไปข้างหน้า แบบอัตราส่วน แบบเลือกช่วง และแบบหลายตัวแปร การควบคุมเชิงทำนายด้วยแบบจำลองและการประยุกต์ปัญญาประดิษฐ์ในการควบคุมกระบวนการ สถาปัตยกรรมและการกำหนดค่าระบบควบคุมแบบกระจาย การควบคุมกระบวนการต่อเนื่องและแบบแบตช์ การจัดการสัญญาณเตือน ส่วนต่อประสานมนุษย์กับเครื่องจักร ระบบประวัติข้อมูล และการเชื่อมต่อกับสกาดา ระบบบริหารการผลิต และแพลตฟอร์มข้อมูลอุตสาหกรรม การจำลอง การทดสอบวงควบคุม การทดสอบการยอมรับ การนำระบบขึ้นใช้งาน และการประเมินผลด้วยตัวชี้วัดด้านเสถียรภาพ คุณภาพ พลังงาน และความปลอดภัย" },
  { c: "EN-135-317", s: "Predictive Maintenance", t: "การบำรุงรักษาเชิงพยากรณ์และป้องกันด้วยปัญญาประดิษฐ์", e: "AI-Based Predictive and Preventive Maintenance", cr: "3(2-2-5)", g: "elec", tr: 2, p: [6, 2],
    d: "หลักการและกลยุทธ์การบำรุงรักษาเครื่องจักรอุตสาหกรรม การบำรุงรักษาเชิงแก้ไข เชิงป้องกัน และเชิงพยากรณ์ การเก็บรวบรวมข้อมูลสัญญาณการสั่นสะเทือน เสียง อุณหภูมิ และกระแสไฟฟ้าจากเครื่องจักร การประมวลผลสัญญาณและการสกัดคุณลักษณะสำหรับการวินิจฉัยเครื่องจักร การสร้างตัวแบบการเรียนรู้ของเครื่องและการเรียนรู้เชิงลึกสำหรับการตรวจจับความผิดปกติและพยากรณ์ความเสียหาย เทคโนโลยีดิจิทัลทวินสำหรับการจำลองและพยากรณ์สภาพเครื่องจักร ระบบแจ้งเตือนและการวางแผนการบำรุงรักษาอัตโนมัติ การวิเคราะห์สาเหตุที่แท้จริง การประเมินผลตอบแทนการลงทุน" },
  { c: "EN-135-318", s: "คลังสินค้าอัจฉริยะ", t: "การออกแบบและการจัดการคลังสินค้าอัจฉริยะ", e: "Smart Warehouse Design and Management", cr: "3(2-2-5)", g: "elec", tr: 2, p: [2, 6],
    d: "หลักการและประเภทของระบบคลังสินค้าอัตโนมัติ การออกแบบและวางผังคลังสินค้าสำหรับโรงงานเกษตรอุตสาหกรรม ระบบจัดเก็บและเรียกคืนสินค้าอัตโนมัติ สายพานลำเลียง ลิฟต์สินค้า รถลำเลียงอัตโนมัติ การบูรณาการปัญญาประดิษฐ์และคอมพิวเตอร์วิทัศน์ในระบบคลังเพื่อการตรวจสอบและคัดแยกสินค้า การจัดการคลังสินค้าด้วยระบบการจัดการคลังสินค้า การติดตามสินค้าด้วยอาร์เอฟไอดีและบาร์โค้ด ระบบการจัดการสินค้าคงคลังด้วยปัญญาประดิษฐ์ การวิเคราะห์และเพิ่มประสิทธิภาพการไหลของสินค้าด้วยการจำลอง" },
  { c: "EN-135-319", s: "Advanced OR/Optimization", t: "การวิจัยดำเนินงานขั้นสูงและการหาค่าเหมาะที่สุดทางอุตสาหกรรม", e: "Advanced Operations Research and Industrial Optimization", cr: "3(2-2-5)", g: "elec", tr: 2, p: [1, 3, 6], h: ["EN-132-303"],
    d: "การสร้างตัวแบบเพื่อการตัดสินใจทางอุตสาหกรรม การโปรแกรมเชิงเส้น จำนวนเต็มผสม ไม่เชิงเส้น และหลายวัตถุประสงค์ ตัวแบบโครงข่าย การไหล และการขนส่ง การจัดสรรทรัพยากร การจัดตารางการผลิตและกำลังคน การจัดเส้นทางและโลจิสติกส์ การวางแผนสินค้าคงคลังและกำลังการผลิต ทฤษฎีแถวคอยและการจำลองเหตุการณ์ไม่ต่อเนื่อง การหาค่าเหมาะที่สุดโดยอาศัยการจำลอง การหาค่าเหมาะที่สุดแบบสุ่มและแบบทนทาน วิธีฮิวริสติกและเมตาฮิวริสติก การใช้ภาษาไพทอนและซอฟต์แวร์ตัวแก้ปัญหา การวิเคราะห์ความไวและสถานการณ์ และการเปรียบเทียบทางเลือกด้วยตัวชี้วัดด้านต้นทุน เวลา คุณภาพ พลังงาน คาร์บอน และความเสี่ยง" },
  { c: "EN-135-320", s: "อุตฯเกษตรแปรรูป", t: "เทคโนโลยีอุตสาหกรรมเกษตรและการแปรรูป", e: "Agro-Industrial and Processing Technology", cr: "3(3-0-6)", g: "elec", tr: 2, p: [1, 2],
    d: "หลักการและกระบวนการแปรรูปผลผลิตเกษตรในภาคอุตสาหกรรม มาตรฐานคุณภาพและความปลอดภัยอาหาร จีเอ็มพี เอชเอซีซีพี ไอเอสโอ 22000 เทคโนโลยีการแปรรูปอ้อยและการผลิตน้ำตาลครบวงจร เทคโนโลยีการสกัดและการผลิตแป้งมันสำปะหลัง เทคโนโลยีการสีและการแปรรูปข้าว การจัดการของเสียและน้ำเสียในอุตสาหกรรมเกษตรแปรรูป การใช้พลังงานอย่างมีประสิทธิภาพและระบบผลิตพลังงานร่วม การประยุกต์ใช้ปัญญาประดิษฐ์และเทคโนโลยีดิจิทัลในกระบวนการแปรรูป",
    dEn: "Principles and processes of agro-industrial product processing; food quality and safety standards including GMP, HACCP, and ISO 22000; integrated sugarcane and sugar production technology; cassava starch extraction and production; rice milling and processing; waste and wastewater management; energy efficiency and cogeneration; applications of AI and digital technologies in processing operations" },
  { c: "EN-135-321", s: "โรงสีข้าวอัจฉริยะ", t: "ปัญญาประดิษฐ์และการจัดการโรงสีข้าวอัจฉริยะ", e: "Artificial Intelligence and Smart Rice Mill Management", cr: "3(2-2-5)", g: "elec", tr: 2, p: [2, 6],
    d: "หลักการและกระบวนการสีข้าวครบวงจร การรับซื้อข้าวเปลือก การทำความสะอาด การกะเทาะเปลือก การขัดขาว การคัดแยก การบรรจุภัณฑ์ ระบบปัญญาประดิษฐ์ตรวจสอบและจำแนกคุณภาพข้าวด้วยคอมพิวเตอร์วิทัศน์ ความขาว ความชื้น เมล็ดหัก สิ่งเจือปน ระบบอบแห้งข้าวเปลือกอัจฉริยะและการควบคุมความชื้นอัตโนมัติ การจัดการไซโลและคลังเก็บข้าวด้วยอินเทอร์เน็ตของสรรพสิ่งและปัญญาประดิษฐ์ การบำรุงรักษาเชิงพยากรณ์สำหรับเครื่องจักรโรงสี การจัดการโรงสีด้วยเทคโนโลยีดิจิทัลทวินและการจำลองสายการผลิต ระบบตรวจสอบย้อนกลับและการรับรองมาตรฐานคุณภาพข้าว",
    dEn: "Complete rice-milling processes from paddy procurement, cleaning, husking, whitening, sorting, and packaging; AI and computer-vision inspection of whiteness, moisture, broken grains, and impurities; smart paddy drying and automatic moisture control; IoT- and AI-based silo and storage management; predictive maintenance of milling machinery; digital twins and production-line simulation; traceability and rice-quality certification" },
  { c: "EN-135-322", s: "อ้อย-น้ำตาลอัจฉริยะ", t: "เทคโนโลยีอัจฉริยะในกระบวนการผลิตอ้อยและน้ำตาล", e: "Smart Technology in Sugarcane and Sugar Production Processes", cr: "3(2-2-5)", g: "elec", tr: 2, p: [2, 6],
    d: "หลักการและกระบวนการผลิตน้ำตาลครบวงจร การรับอ้อย การชั่งน้ำหนัก การวิเคราะห์คุณภาพอ้อย การหีบอ้อย การทำความสะอาดน้ำอ้อย การต้มเคี่ยว การตกผลึก การบรรจุน้ำตาล ระบบปัญญาประดิษฐ์วิเคราะห์คุณภาพอ้อยและพยากรณ์ค่าความหวานซีซีเอส ณ จุดรับซื้อ การควบคุมและเพิ่มประสิทธิภาพกระบวนการหีบด้วยปัญญาประดิษฐ์และตัวควบคุมแบบโปรแกรมได้ ระบบผลิตพลังงานร่วมและการจัดการพลังงานไฟฟ้าจากชีวมวล การจัดการของเสียและผลพลอยได้ กากอ้อย กากหม้อกรอง น้ำกาก เทคโนโลยีดิจิทัลทวินสำหรับการจำลองและเพิ่มประสิทธิภาพโรงงานน้ำตาล",
    dEn: "Complete sugar production from cane receiving, weighing, and quality analysis through milling, juice clarification, evaporation, crystallization, and packaging; AI-based cane-quality analysis and CCS forecasting at receiving points; AI- and PLC-based milling process control and optimization; cogeneration and biomass electricity management; management of bagasse, filter cake, and molasses; digital-twin simulation and optimization of sugar plants" },
  { c: "EN-135-323", s: "มันสำปะหลัง-แป้ง", t: "เทคโนโลยีอัจฉริยะในกระบวนการผลิตมันสำปะหลังและแป้ง", e: "Smart Technology in Cassava and Starch Production Processes", cr: "3(2-2-5)", g: "elec", tr: 2, p: [2, 6],
    d: "หลักการและกระบวนการผลิตแป้งมันสำปะหลังครบวงจร การรับมันสำปะหลัง การชั่งน้ำหนักและวิเคราะห์คุณภาพ การล้างและปอกเปลือก การบดและสกัดแป้ง การแยกกากและการทำให้แป้งบริสุทธิ์ การอบแห้งและการบรรจุแป้ง ระบบปัญญาประดิษฐ์วิเคราะห์คุณภาพมันสำปะหลังและพยากรณ์ปริมาณแป้ง ณ จุดรับซื้อ การควบคุมกระบวนการสกัดแป้งด้วยปัญญาประดิษฐ์และตัวควบคุมแบบโปรแกรมได้ ระบบอบแห้งแป้งอัจฉริยะและการประหยัดพลังงาน การจัดการน้ำเสียและของเสีย การผลิตผลิตภัณฑ์มูลค่าสูงจากมันสำปะหลัง แป้งดัดแปร แอลกอฮอล์ ไบโอพลาสติก" },
  { c: "EN-135-324", s: "IoT เก็บรักษาผลผลิต", t: "เทคโนโลยีอินเทอร์เน็ตของสรรพสิ่งสำหรับการเก็บรักษาผลผลิตเกษตร", e: "Internet of Things Technology for Agricultural Produce Storage", cr: "3(2-2-5)", g: "elec", tr: 2, p: [2, 6],
    d: "หลักการและเทคโนโลยีอินเทอร์เน็ตของสรรพสิ่งสำหรับการเก็บรักษาผลผลิตเกษตร การออกแบบและติดตั้งเครือข่ายเซนเซอร์ในโรงเก็บ ไซโล ห้องเย็น เซนเซอร์ตรวจวัดอุณหภูมิ ความชื้น ก๊าซคาร์บอนไดออกไซด์ ออกซิเจน เอทิลีน ระบบควบคุมสภาพแวดล้อมอัตโนมัติในโรงเก็บด้วยอินเทอร์เน็ตของสรรพสิ่งและปัญญาประดิษฐ์ การตรวจสอบและวิเคราะห์คุณภาพผลผลิตระหว่างการเก็บรักษา ระบบแจ้งเตือนและการจัดการเหตุฉุกเฉิน การพยากรณ์อายุการเก็บรักษาและการจัดการสินค้าคงคลังด้วยการเรียนรู้ของเครื่อง การบูรณาการกับแพลตฟอร์มคลาวด์เพื่อการติดตามแบบเวลาจริง" },
  { c: "EN-135-325", s: "อบแห้งอัจฉริยะ", t: "ระบบอบแห้งอัจฉริยะในอุตสาหกรรมเกษตร", e: "Smart Drying Systems in Agro-Industry", cr: "3(2-2-5)", g: "elec", tr: 2, p: [2, 1, 6],
    d: "หลักการถ่ายเทความร้อนและมวลสารในกระบวนการอบแห้ง สมบัติทางอุณหพลศาสตร์และการถ่ายเทความชื้นของผลผลิตเกษตร เทคโนโลยีการอบแห้งประเภทต่าง ๆ การอบแห้งด้วยลมร้อน ไมโครเวฟ อินฟราเรด ปั๊มความร้อน การอบแห้งแบบแช่เยือกแข็ง การออกแบบและคำนวณระบบอบแห้ง การควบคุมกระบวนการอบแห้งอัตโนมัติด้วยตัวควบคุมแบบโปรแกรมได้และปัญญาประดิษฐ์ การตรวจวัดและควบคุมความชื้นแบบเวลาจริง การสร้างตัวแบบการเรียนรู้ของเครื่องสำหรับพยากรณ์และเพิ่มประสิทธิภาพ การประหยัดพลังงานและการบูรณาการกับระบบผลิตพลังงานร่วม" },
  { c: "EN-135-326", s: "ขนถ่ายวัสดุ/บรรจุภัณฑ์", t: "วิศวกรรมระบบขนถ่ายวัสดุและบรรจุภัณฑ์อัตโนมัติ", e: "Automated Material Handling and Packaging Systems Engineering", cr: "3(2-2-5)", g: "elec", tr: 2, p: [2, 1],
    d: "หลักการและทฤษฎีของระบบขนถ่ายวัสดุในอุตสาหกรรม การวิเคราะห์และออกแบบระบบขนถ่ายวัสดุและบรรจุภัณฑ์สำหรับโรงงานเกษตรอุตสาหกรรม ประเภทและการเลือกใช้อุปกรณ์ขนถ่ายวัสดุ สายพานลำเลียง สกรูลำเลียง ลิฟต์ถัง ท่อลำเลียง การออกแบบเครื่องจักรบรรจุภัณฑ์อัตโนมัติ การบูรณาการเซนเซอร์และระบบอินเทอร์เน็ตของสรรพสิ่ง การควบคุมและบริหารระบบขนถ่ายด้วยตัวควบคุมแบบโปรแกรมได้และสกาดา การประยุกต์ใช้ปัญญาประดิษฐ์และคอมพิวเตอร์วิทัศน์สำหรับตรวจสอบและจัดการการไหลของวัสดุ การบำรุงรักษาเชิงพยากรณ์" },
  { c: "EN-135-327", s: "Motion/Cobot Cell", t: "การควบคุมการเคลื่อนที่และวิศวกรรมเซลล์หุ่นยนต์ร่วมปฏิบัติงาน", e: "Motion Control and Collaborative Robot Cell Engineering", cr: "3(2-2-5)", g: "elec", tr: 2, p: [1, 2, 4], h: ["EN-132-307"], w: ["EN-132-201"],
    d: "การเลือกและกำหนดขนาดมอเตอร์ เซอร์โวมอเตอร์ สเต็ปเปอร์มอเตอร์ ตัวขับ และระบบส่งกำลัง การควบคุมตำแหน่ง ความเร็ว แรงบิด และการเคลื่อนที่หลายแกน การสร้างเส้นทางและโปรไฟล์การเคลื่อนที่ การปรับตั้งระบบเซอร์โว การประสานการทำงานกับตัวควบคุมแบบโปรแกรมได้ เครือข่ายอุตสาหกรรม และระบบวิสัยทัศน์ หลักการและสมรรถนะของหุ่นยนต์ร่วมปฏิบัติงาน การเลือกอุปกรณ์ปลายแขน การออกแบบผังและลำดับการทำงานของเซลล์หุ่นยนต์ การโปรแกรม การจำลอง และการทดสอบเสมือนจริง การประยุกต์ปัญญาประดิษฐ์สำหรับการตรวจรู้และการหยิบจับ การประเมินความเสี่ยง ขีดจำกัดแรงและกำลัง ระยะปลอดภัย อินเตอร์ล็อก การหยุดฉุกเฉิน การบูรณาการและการทดสอบการยอมรับ" },
  { c: "EN-135-328", s: "Lean/AI Process", t: "การปรับปรุงกระบวนการด้วยลีนและปัญญาประดิษฐ์", e: "Lean and AI-Enabled Process Improvement", cr: "3(2-2-5)", g: "elec", tr: 2, p: [1, 2, 6], h: ["EN-132-306"], w: ["EN-132-303"],
    d: "หลักการลีนและซิกซ์ซิกมา การกำหนดคุณค่าจากมุมมองผู้ใช้และการทำแผนที่สายธารคุณค่า การจำแนกและลดความสูญเปล่า การไหล การดึง และการปรับปรุงงานมาตรฐาน กระบวนการดีเอ็มเอไอซี การกำหนดปัญหาและตัวชี้วัด การตรวจสอบคุณภาพข้อมูล การวิเคราะห์ประสิทธิผลโดยรวมของเครื่องจักร เวลารอบงาน คอขวด ผลได้ ของเสีย และการหยุดเครื่อง การวิเคราะห์ระบบการวัด การควบคุมกระบวนการเชิงสถิติ ความสามารถกระบวนการ การออกแบบการทดลอง การวิเคราะห์สาเหตุที่แท้จริง และเอฟเอ็มอีเอ การใช้การวิเคราะห์ข้อมูล การเรียนรู้ของเครื่อง และปัญญาประดิษฐ์เพื่อพยากรณ์คุณภาพและจัดลำดับโอกาสปรับปรุง การทดลองมาตรการแก้ไข และการประเมินผลก่อน–หลังด้านคุณภาพ ต้นทุน การส่งมอบ ความปลอดภัย พลังงาน ของเสีย และคาร์บอน" },
  { c: "EN-135-329", s: "CV ควบคุมคุณภาพ", t: "วิสัยทัศน์คอมพิวเตอร์เพื่อการควบคุมคุณภาพในอุตสาหกรรม", e: "Computer Vision for Industrial Quality Control", cr: "3(2-2-5)", g: "elec", tr: 2, p: [2, 6],
    d: "หลักการของระบบวิสัยทัศน์คอมพิวเตอร์อุตสาหกรรม การออกแบบระบบแสงสว่างและเลือกใช้เลนส์สำหรับการตรวจสอบคุณภาพ การเตรียมภาพและการกำจัดสัญญาณรบกวน การตรวจจับขอบ ตำหนิ และข้อบกพร่องของชิ้นงานบนสายพาน การบูรณาการวิสัยทัศน์คอมพิวเตอร์กับการเรียนรู้เชิงลึกเพื่อการจำแนกประเภทข้อบกพร่อง การวัดขนาดชิ้นงานและการตรวจสอบความถูกต้องของการประกอบ การเชื่อมต่อระบบวิสัยทัศน์คอมพิวเตอร์กับหุ่นยนต์และระบบคัดแยกอัตโนมัติ การวิเคราะห์ข้อมูลภาพเพื่อการปรับปรุงกระบวนการผลิตแบบทันท่วงที" },
  { c: "EN-135-330", s: "พลังงานอัจฉริยะโรงงาน", t: "การจัดการพลังงานอัจฉริยะในโรงงานอุตสาหกรรม", e: "Smart Energy Management in Industrial Plants", cr: "3(2-2-5)", g: "elec", tr: 2, p: [6, 2, 4],
    d: "หลักการจัดการและการอนุรักษ์พลังงานในภาคอุตสาหกรรม การตรวจสอบและประเมินการใช้พลังงานของเครื่องจักรและระบบสนับสนุน ระบบปรับอากาศ ระบบอัดอากาศ หม้อไอน้ำ การบูรณาการโครงข่ายเซนเซอร์และมิเตอร์อัจฉริยะเพื่อรวบรวมข้อมูลการใช้พลังงานแบบเวลาจริง การสร้างตัวแบบการใช้พลังงานด้วยปัญญาประดิษฐ์ การพยากรณ์ความต้องการพลังงานและการตรวจจับความผิดปกติด้วยการเรียนรู้ของเครื่อง การบูรณาการระบบพลังงานหมุนเวียน พลังงานแสงอาทิตย์ พลังงานชีวมวล การออกแบบระบบบริหารจัดการพลังงานอัจฉริยะเพื่อลดต้นทุนและการปล่อยก๊าซเรือนกระจก" },

  { c: "EN-135-331", s: "Fluid Power AI", t: "ระบบนิวแมติกส์และไฮดรอลิกอัจฉริยะสำหรับวิศวกรรมปัญญาประดิษฐ์", e: "Intelligent Pneumatic and Hydraulic Systems for Artificial Intelligence Engineering", cr: "3(2-2-5)", g: "elec", tr: 2, p: [1, 2, 4, 6],
    d: "ระบบนิวแมติกส์และไฮดรอลิก การออกแบบวงจร การเชื่อมต่อเซนเซอร์ ตัวกระตุ้น ตัวควบคุมแบบโปรแกรมได้ และอุปกรณ์ประมวลผลที่ขอบเครือข่าย การเก็บข้อมูลเวลาจริง การตรวจจับความผิดปกติ การบำรุงรักษาเชิงพยากรณ์ การควบคุมแบบปรับตัว ความปลอดภัย และการทดสอบระบบ" },
  { c: "EN-135-332", s: "Heat/Mass Transfer", t: "การถ่ายโอนความร้อนและมวลสารสำหรับระบบอัจฉริยะ", e: "Heat and Mass Transfer for Smart Systems", cr: "3(3-0-6)", g: "elec", tr: 2, p: [1, 2, 4, 6, 7],
    d: "การนำ การพา การแผ่รังสี และการถ่ายโอนมวลสาร การวิเคราะห์สภาวะคงตัวและไม่คงตัว วิธีผลต่างอันตะ แบบจำลองทางคณิตศาสตร์และการเรียนรู้ของเครื่อง การจัดการความร้อนฮาร์ดแวร์ปัญญาประดิษฐ์ ระบบอบแห้ง ห้องเย็น และการควบคุมกระบวนการทางความร้อน" },
  { c: "EN-135-333", s: "Industrial Safety", t: "วิศวกรรมความปลอดภัยและอาชีวอนามัยอุตสาหกรรม", e: "Industrial Safety Engineering and Occupational Health", cr: "3(2-2-5)", g: "elec", tr: 2, p: [1, 2, 3, 4, 5, 6],
    d: "กฎหมายและมาตรฐานความปลอดภัย การชี้บ่งอันตรายและประเมินความเสี่ยง ความปลอดภัยของเครื่องจักร ไฟฟ้า สารเคมี และระบบกำลังของไหล ความปลอดภัยเชิงหน้าที่ อินเตอร์ล็อก ระบบหยุดฉุกเฉิน สรีรศาสตร์ สุขศาสตร์อุตสาหกรรม การตอบโต้ภาวะฉุกเฉิน การสืบสวนอุบัติการณ์ และการใช้ปัญญาประดิษฐ์หรือเซนเซอร์เฝ้าระวังความปลอดภัย" },

  /* ========= 2.4 วิชาชีพเลือก — แขนงที่ 3 นวัตกรรมปัญญาประดิษฐ์ระดับองค์กร (EN-135-334..348) ========= */
  { c: "EN-135-334", s: "Advanced Data Eng", t: "วิศวกรรมข้อมูลขั้นสูงและการวางท่อข้อมูล", e: "Advanced Data Engineering and Data Pipelines", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 6],
    d: "สถาปัตยกรรมและการออกแบบท่อข้อมูลขั้นสูงสำหรับระบบปัญญาประดิษฐ์ การประมวลผลข้อมูลแบบกระแส การประมวลผลแบบกระจาย การออกแบบสถาปัตยกรรมที่เก็บรวบรวมข้อมูลขนาดใหญ่ การจัดการคุณภาพข้อมูลและธรรมาภิบาลข้อมูลในองค์กร การจัดเรียงข้อมูล การสร้างท่อข้อมูลแบบเวลาจริงสำหรับระบบปัญญาประดิษฐ์ การบูรณาการข้อมูลจากแหล่งข้อมูลหลากหลาย การติดตามและบริหารจัดการท่อข้อมูลในสภาพแวดล้อมการทำงานจริง การประยุกต์ใช้วิศวกรรมข้อมูลขั้นสูงในการสร้างระบบข้อมูลเพื่อการประยุกต์ใช้ในอุตสาหกรรม" },
  { c: "EN-135-335", s: "Advanced LLM", t: "ตัวแบบภาษาขนาดใหญ่ขั้นสูง", e: "Advanced Large Language Models", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 6, 7], h: ["EN-132-309"], w: ["EN-131-206"],
    d: "สถาปัตยกรรมและกระบวนการทำงานของตัวแบบภาษาขนาดใหญ่ การจัดเตรียมและกำกับคุณภาพชุดข้อมูลเฉพาะโดเมน การปรับตัวแบบตามคำสั่ง การปรับตัวแบบแบบประหยัดพารามิเตอร์และโลรา การบีบอัดและลดความละเอียดตัวแบบ การปรับตัวแบบหลายรูปแบบ การประเมินความถูกต้อง การให้เหตุผล ความเที่ยงตรงต่อข้อเท็จจริง ความเป็นธรรม และความทนทาน การออกแบบเกณฑ์มาตรฐานและการทดลองเปรียบเทียบ การเพิ่มประสิทธิภาพการอนุมานด้านความเร็ว หน่วยความจำ ต้นทุน และพลังงาน การให้บริการตัวแบบในระบบจริง การติดตามการเสื่อมของสมรรถนะ และการจัดทำเอกสารตัวแบบ" },
  { c: "EN-135-336", s: "AI Reliability/Safety", t: "ความน่าเชื่อถือและความปลอดภัยของปัญญาประดิษฐ์", e: "AI Reliability and Safety", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 4, 6], h: ["EN-132-308"], w: ["EN-131-205"],
    d: "วิศวกรรมความน่าเชื่อถือและความปลอดภัยของระบบปัญญาประดิษฐ์ การกำหนดข้อกำหนดและเกณฑ์ยอมรับสมรรถนะ การสร้างชุดทดสอบสำหรับข้อมูลปกติ ข้อมูลนอกการแจกแจง และกรณีขอบ การวัดความไม่แน่นอน การสอบเทียบความเชื่อมั่น ความทนทานต่อสัญญาณรบกวนและการโจมตีแบบปรปักษ์ การประเมินความลำเอียงและความเป็นธรรม การทดสอบข้อมูลเท็จของตัวแบบเชิงสร้างสรรค์ การทดสอบเชิงรุกและกลไกป้องกัน การวิเคราะห์อันตรายและจัดทำกรณีความปลอดภัย การติดตามการเลื่อนของข้อมูลและตัวแบบ การจัดการเหตุการณ์ การย้อนกลับรุ่น และการจัดทำบัตรตัวแบบกับหลักฐานการประกันคุณภาพ" },
  { c: "EN-135-337", s: "Enterprise AI Arch", t: "สถาปัตยกรรมปัญญาประดิษฐ์ระดับองค์กร", e: "Enterprise AI Architecture", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 4, 7], h: ["EN-132-308"], w: ["EN-131-205"],
    d: "การออกแบบสถาปัตยกรรมปัญญาประดิษฐ์ระดับองค์กร การแบ่งขอบเขตโดเมนและบริการ สถาปัตยกรรมขับเคลื่อนด้วยเหตุการณ์ ส่วนต่อประสานและการจัดการเอพีไอ การบูรณาการกับระบบวางแผนทรัพยากรองค์กร ระบบบริหารลูกค้าสัมพันธ์ ระบบข้อมูล และกระบวนการทำงานเดิม การจัดการอัตลักษณ์ สิทธิ์ ข้อมูลลับ และสถาปัตยกรรมแบบไม่ไว้วางใจโดยปริยาย การออกแบบระบบหลายผู้เช่า ความสามารถในการขยาย ความพร้อมใช้งานสูง การกู้คืนจากภัยพิบัติ และความต่อเนื่องทางธุรกิจ การสังเกตการณ์ระบบ การบริหารต้นทุนคลาวด์ การวิเคราะห์ข้อแลกเปลี่ยน และการจัดทำแผนภาพกับข้อกำหนดการตัดสินใจทางสถาปัตยกรรม" },
  { c: "EN-135-338", s: "UX/UI ระบบอัจฉริยะ", t: "การออกแบบประสบการณ์ผู้ใช้สำหรับระบบอัจฉริยะ", e: "UX/UI Design for Intelligent Systems", cr: "3(3-0-6)", g: "elec", tr: 3, p: [3, 2],
    d: "หลักการและกระบวนการออกแบบประสบการณ์ผู้ใช้และส่วนต่อประสานกับผู้ใช้สำหรับระบบปัญญาประดิษฐ์ การวิจัยและวิเคราะห์ความต้องการผู้ใช้ การคิดเชิงออกแบบ การออกแบบโครงร่างและต้นแบบ การออกแบบแผงควบคุมข้อมูลสำหรับการแสดงผล หลักการปัญญาประดิษฐ์ที่อธิบายได้สำหรับการออกแบบส่วนต่อประสานที่โปร่งใสและเข้าใจได้ การทดสอบความสามารถในการใช้งานและการประเมินประสบการณ์ผู้ใช้ การออกแบบที่ครอบคลุม การประยุกต์ใช้การออกแบบประสบการณ์ผู้ใช้สำหรับแอปพลิเคชันปัญญาประดิษฐ์เชิงพาณิชย์" },
  { c: "EN-135-339", s: "AI การแพทย์", t: "ปัญญาประดิษฐ์ทางการแพทย์และสุขภาพ", e: "Artificial Intelligence in Medical and Healthcare", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 4, 6],
    d: "หลักการประยุกต์ใช้ปัญญาประดิษฐ์ในทางการแพทย์และระบบสาธารณสุข การจัดการฐานข้อมูลเวชระเบียนอิเล็กทรอนิกส์ การพัฒนาตัวแบบการเรียนรู้ของเครื่องสำหรับการวินิจฉัยโรคเบื้องต้น การพยากรณ์ความเสี่ยงทางสุขภาพจากข้อมูลพฤติกรรม ระบบแนะนำการรักษาและดูแลสุขภาพเฉพาะบุคคล การบูรณาการปัญญาประดิษฐ์กับอุปกรณ์สวมใส่เพื่อติดตามสัญญาณชีพ การจัดการข้อมูลสุขภาพขนาดใหญ่ การประยุกต์ใช้เทคโนโลยีการประมวลผลภาษาธรรมชาติในการดึงข้อมูลจากเอกสารทางการแพทย์ จริยธรรมและความเป็นส่วนตัวของข้อมูลผู้ป่วยตามมาตรฐานสากล" },
  { c: "EN-135-340", s: "วิเคราะห์ภาพการแพทย์", t: "การวิเคราะห์ข้อมูลภาพทางการแพทย์", e: "Medical Image Analysis", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 6],
    d: "หลักการประมวลผลและการวิเคราะห์ภาพทางการแพทย์ การทำงานกับข้อมูลภาพรังสีเอกซ์ ภาพถ่ายรังสีส่วนตัดอาศัยคอมพิวเตอร์ และภาพคลื่นแม่เหล็กไฟฟ้า การใช้การเรียนรู้เชิงลึกเพื่อการตรวจจับและแบ่งส่วนอวัยวะ การวิเคราะห์ความผิดปกติและรอยโรคจากภาพถ่ายทางการแพทย์ การสร้างตัวแบบปัญญาประดิษฐ์สำหรับช่วยแพทย์วินิจฉัยโรค การลดสัญญาณรบกวนและการเพิ่มความคมชัดของภาพทางการแพทย์ การบูรณาการระบบวิเคราะห์ภาพกับระบบจัดเก็บและการสื่อสารข้อมูลภาพทางการแพทย์ การประเมินประสิทธิภาพตัวแบบวิเคราะห์ภาพทางการแพทย์" },
  { c: "EN-135-341", s: "FinTech + AI", t: "เทคโนโลยีทางการเงินและปัญญาประดิษฐ์", e: "Financial Technology and Artificial Intelligence", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 6, 4],
    d: "หลักการของเทคโนโลยีทางการเงินและนวัตกรรมบริการทางการเงิน การประยุกต์ใช้ปัญญาประดิษฐ์ในอุตสาหกรรมการเงินและการธนาคาร ระบบการชำระเงินอิเล็กทรอนิกส์และเทคโนโลยีบล็อกเชน การวิเคราะห์ความเสี่ยงด้านสินเชื่อด้วยการเรียนรู้ของเครื่อง การตรวจจับการทุจริตทางการเงินด้วยปัญญาประดิษฐ์ ระบบการลงทุนอัตโนมัติและการให้คำปรึกษาทางการเงินด้วยหุ่นยนต์ การวิเคราะห์พฤติกรรมผู้บริโภคและลูกค้ารายบุคคล การพัฒนาตัวแบบปัญญาประดิษฐ์สำหรับการประเมินมูลค่าสินทรัพย์ กฎระเบียบและนโยบายด้านเทคโนโลยีทางการเงิน" },
  { c: "EN-135-342", s: "วิเคราะห์คาดการณ์การเงิน", t: "การวิเคราะห์ข้อมูลเชิงคาดการณ์ทางการเงิน", e: "Predictive Data Analysis in Finance", cr: "3(2-2-5)", g: "elec", tr: 3, p: [6, 2],
    d: "เทคนิคการวิเคราะห์ข้อมูลเชิงคาดการณ์สำหรับตลาดการเงิน การวิเคราะห์ข้อมูลอนุกรมเวลาทางการเงิน การสร้างตัวแบบพยากรณ์ราคาหุ้นและสินทรัพย์ทางการเงินด้วยการเรียนรู้ของเครื่องและการเรียนรู้เชิงลึก การวิเคราะห์ความรู้สึกจากข่าวสารและสื่อสังคมออนไลน์ที่มีผลต่อตลาด การบริหารความเสี่ยงและพอร์ตการลงทุนด้วยปัญญาประดิษฐ์ การประยุกต์ใช้อัลกอริทึมการซื้อขายความถี่สูง การสร้างและทดสอบระบบเทรดอัตโนมัติ การแปลผลและการแสดงภาพข้อมูลทางการเงินเชิงลึกเพื่อการตัดสินใจทางธุรกิจ" },
  { c: "EN-135-343", s: "AI Venture", t: "การสร้างธุรกิจปัญญาประดิษฐ์", e: "AI Venture Creation", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 3, 7], h: ["EN-132-302"],
    d: "การต่อยอดต้นแบบปัญญาประดิษฐ์สู่ธุรกิจ การตรวจสอบตลาดและความพร้อมของเทคโนโลยี การกำหนดรูปแบบรายได้ ราคา เศรษฐศาสตร์ต่อหน่วย และต้นทุนการให้บริการตัวแบบ กลยุทธ์เข้าสู่ตลาด การขายระหว่างธุรกิจ การจัดซื้อจัดจ้าง และการบริหารโครงการนำร่อง การจัดการทรัพย์สินทางปัญญา การอนุญาตใช้สิทธิ์ ข้อมูล และข้อตกลงระดับบริการ การวางแผนการปฏิบัติการ ความเสี่ยง และการขยายธุรกิจ การจัดทำประมาณการทางการเงิน การระดมทุน และการนำเสนอแก่นักลงทุนหรือพันธมิตร นักศึกษาพัฒนาและทดสอบแผนพาณิชย์จากผลิตภัณฑ์ปัญญาประดิษฐ์กับผู้ใช้หรือสถานประกอบการจริง" },
  { c: "EN-135-344", s: "จัดการโครงการซอฟต์แวร์", t: "การจัดการโครงการซอฟต์แวร์อัจฉริยะ", e: "Intelligent Software Project Management", cr: "3(3-0-6)", g: "elec", tr: 3, p: [7, 5, 3],
    d: "หลักการและระเบียบวิธีบริหารโครงการซอฟต์แวร์อัจฉริยะ การบริหารโครงการแบบอไจล์และสครัม การวางแผนและจัดการทรัพยากรสำหรับโครงการที่ขับเคลื่อนด้วยข้อมูลและปัญญาประดิษฐ์ การประเมินความเสี่ยงและระยะเวลาการทำงานของโครงการพัฒนาตัวแบบ การจัดการวงจรชีวิตของระบบการเรียนรู้ของเครื่อง การบริหารความคาดหวังของผู้มีส่วนได้ส่วนเสีย การใช้ปัญญาประดิษฐ์เพื่อช่วยในการจัดการและติดตามความคืบหน้าของโครงการ การควบคุมคุณภาพและการส่งมอบระบบอย่างต่อเนื่อง การวัดผลความสำเร็จของโครงการปัญญาประดิษฐ์" },
  { c: "EN-135-345", s: "ธุรกิจ/ตลาดดิจิทัล AI", t: "การพัฒนาธุรกิจและการตลาดดิจิทัลด้วยปัญญาประดิษฐ์", e: "Business Development and Digital Marketing with AI", cr: "3(3-0-6)", g: "elec", tr: 3, p: [7, 6, 3],
    d: "แนวคิดการพัฒนาธุรกิจดิจิทัลโดยใช้ปัญญาประดิษฐ์เป็นฐาน การสร้างกลยุทธ์การตลาดดิจิทัลที่ขับเคลื่อนด้วยข้อมูล การวิเคราะห์และแบ่งกลุ่มลูกค้าเป้าหมายด้วยการเรียนรู้ของเครื่อง การสร้างเนื้อหาโฆษณาและการสื่อสารการตลาดอัตโนมัติด้วยปัญญาประดิษฐ์เชิงสร้างสรรค์ ระบบแนะนำสินค้าและบริการแบบเฉพาะบุคคล การวิเคราะห์ประสิทธิผลของแคมเปญการตลาดดิจิทัล การประยุกต์ใช้แชตบอตสำหรับการบริการลูกค้าและการขายเชิงรุก การเพิ่มประสิทธิภาพอัตราการตอบรับด้วยเทคโนโลยีอัจฉริยะ" },
  { c: "EN-135-346", s: "AI Product Mgmt", t: "การจัดการผลิตภัณฑ์ปัญญาประดิษฐ์", e: "AI Product Management", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 3, 5, 7], h: ["EN-132-302"], w: ["EN-132-308"],
    d: "การจัดการผลิตภัณฑ์ปัญญาประดิษฐ์ตลอดวงจรชีวิต การกำหนดวิสัยทัศน์ กลุ่มผู้ใช้ คุณค่าที่เสนอ และผลลัพธ์ทางธุรกิจ การจัดทำแผนที่เส้นทางผลิตภัณฑ์ รายการงาน และเกณฑ์จัดลำดับความสำคัญ การกำหนดตัวชี้วัดผลิตภัณฑ์ ตัวชี้วัดสมรรถนะตัวแบบ และข้อจำกัดด้านความเสี่ยง การออกแบบปฏิสัมพันธ์ระหว่างมนุษย์กับปัญญาประดิษฐ์ การทดลองแบบเอ/บี การวิเคราะห์การใช้งาน การยอมรับ และผลกระทบ การจัดการข้อมูลย้อนกลับ การเลื่อนของตัวแบบ ต้นทุน และการเปลี่ยนแปลงผลิตภัณฑ์ การประสานงานระหว่างผู้ใช้ ธุรกิจ ข้อมูล วิศวกรรม และฝ่ายกำกับดูแล ตลอดจนการตัดสินใจขยาย ปรับ หรือยุติผลิตภัณฑ์จากหลักฐาน" },
  { c: "EN-135-347", s: "VR/AR + AI", t: "เทคโนโลยีโลกเสมือนจริงและปัญญาประดิษฐ์", e: "Virtual Reality Technology and Artificial Intelligence", cr: "3(2-2-5)", g: "elec", tr: 3, p: [2, 7],
    d: "เทคโนโลยีโลกเสมือนจริง ความเป็นจริงเสริม และความเป็นจริงผสม การบูรณาการปัญญาประดิษฐ์กับการสร้างสภาพแวดล้อมจำลอง การประมวลผลและสร้างเนื้อหาสามมิติด้วยปัญญาประดิษฐ์เชิงสร้างสรรค์ การโต้ตอบกับวัตถุเสมือนด้วยคอมพิวเตอร์วิทัศน์และการประมวลผลภาษาธรรมชาติ การพัฒนาแอปพลิเคชันโลกเสมือนสำหรับการจำลองทางการแพทย์ การฝึกอบรมอุตสาหกรรม และการตลาดดิจิทัล อุปกรณ์สวมใส่สำหรับการรับรู้และตอบสนองในโลกเสมือน การวิเคราะห์พฤติกรรมผู้ใช้ในสภาพแวดล้อมดิจิทัล" },
  { c: "EN-135-348", s: "AI Governance/Risk", t: "ธรรมาภิบาลและความเสี่ยงของปัญญาประดิษฐ์", e: "AI Governance and Risk", cr: "3(2-2-5)", g: "elec", tr: 3, p: [3, 4, 7], h: ["EN-131-208"], w: ["EN-132-308"],
    d: "กรอบธรรมาภิบาลและการบริหารความเสี่ยงของปัญญาประดิษฐ์ การจัดทำบัญชีระบบและจำแนกระดับความเสี่ยง การประเมินผลกระทบด้านสิทธิ ความเป็นส่วนตัว ความเป็นธรรม ความปลอดภัย และสิ่งแวดล้อม การกำหนดบทบาท ความรับผิดชอบ และการกำกับโดยมนุษย์ การปฏิบัติตามกฎหมายคุ้มครองข้อมูล ทรัพย์สินทางปัญญา กฎหมายเฉพาะภาค และมาตรฐานที่เกี่ยวข้อง การจัดการความเสี่ยงจากผู้ให้บริการและตัวแบบภายนอก การจัดทำทะเบียนความเสี่ยง เอกสารข้อมูล บัตรตัวแบบ บันทึกการตัดสินใจ และหลักฐานสำหรับการตรวจประเมิน การติดตามหลังนำใช้ การรายงานเหตุการณ์ มาตรการแก้ไข และการฝึกปฏิบัติทบทวนธรรมาภิบาลจากกรณีศึกษาระดับองค์กร" }
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

/* แผนการเรียน 133 นก. (ยอดยืนยันแล้ว): ปี 1–3 กระจายใกล้เคียงกัน และปี 4 เหลือ 15+6 สำหรับ Capstone/สหกิจ
   ภาค 6 = 17 นก. และภาค 7 = 15 นก. หลังย้าย EN-135-401 เตรียมความพร้อมสหกิจศึกษาจากภาค 7 ไปภาค 6 */
export const SEM_TOTALS = { 1: 19, 2: 19, 3: 19, 4: 19, 5: 19, 6: 17, 7: 15, 8: 6 };
export const SEM_TITLE = {
  1: "Engineering, Programming and Data Foundations", 2: "Physical, Electrical and Quantitative Foundations",
  3: "AI, Data and Sensing Foundations", 4: "AI Platforms, Decision Foundations and Academic Seminar",
  5: "Domain Systems Integration and Technology Review",
  6: "Advanced Intelligent Systems, Project and Workplace Preparation",
  7: "Capstone and Workplace-aligned Professional Electives", 8: "Cooperative Education"
};
export const SEM_EXTRA = {
  5: [{ s: "วิชาเลือกชีพ 1", k: 3 }, { s: "วิชาเลือกชีพ 2", k: 3 }],
  6: [{ s: "วิชาเลือกชีพ 3", k: 3 }],
  7: [{ s: "วิชาเลือกชีพ 4", k: 3 }, { s: "วิชาเลือกชีพ 5", k: 3 },
      { s: "วิชาเลือกเสรี 1", k: 3 }, { s: "วิชาเลือกเสรี 2", k: 3 }]
};
export const YEAR_CREDITS = { 1: 38, 2: 38, 3: 36, 4: 21 };

/* ---------------- โครงสร้างหลักสูตร 133 หน่วยกิต (ยอดยืนยันแล้ว) ---------------- */
export const STRUCTURE = [
  { id: "ge", no: "1", name: "หมวดวิชาศึกษาทั่วไป", code: "GE-010 / GE-020", credits: 24, n: 8, g: "ge",
    note: "บังคับ 6 วิชา 18 นก. · เลือก 2 วิชา 6 นก.",
    sub: [{ name: "กลุ่มวิชาบังคับ", credits: 18 }, { name: "กลุ่มวิชาเลือก", credits: 6 }] },
  { id: "eng", no: "2.1", name: "กลุ่มวิชาพื้นฐานและปฏิบัติการทางวิศวกรรม", code: "EN-001", credits: 24, n: 10, g: "eng",
    note: "วิชาบรรยาย 7 วิชา 21 นก. + ปฏิบัติการบูรณาการ I–III 3 นก.",
    sub: [{ name: "พื้นฐานทางวิศวกรรม", credits: 21 }, { name: "ปฏิบัติการเชิงบูรณาการ I–III", credits: 3 }] },
  { id: "ai", no: "2.2", name: "กลุ่มวิชาแกนปัญญาประดิษฐ์และระบบอัจฉริยะ", code: "EN-131", credits: 24, n: 8, g: "ai",
    note: "แกน AI บังคับทุกแขนง 8 วิชา" },
  { id: "track", no: "2.3", name: "กลุ่มวิชาชีพบังคับ", code: "EN-132-201 · EN-132-3xx", credits: 27, n: 9, g: "track",
    note: "วิชาชีพบังคับ 9 วิชา; กระจายจากพื้นฐานระบบตรวจวัดสู่การบูรณาการโดเมน" },
  { id: "elec", no: "2.4", name: "กลุ่มวิชาชีพเลือก", code: "EN-135-3xx", credits: 15, n: 5, g: "elec",
    note: "เลือก 5 วิชาจาก pool 48 วิชา (T1 15 · T2 18 · T3 15)" },
  { id: "proj", no: "2.5", name: "กลุ่มวิชาโครงงานและสัมมนา", code: "EN-134", credits: 6, n: 4, g: "proj",
    note: "สัมมนา 1–2 · เตรียมโครงงาน · โครงงาน (Capstone)" },
  { id: "field", no: "2.6", name: "กลุ่มวิชาประสบการณ์ภาคสนาม", code: "EN-135-401 · EN-135-402", credits: 7, n: 2, g: "field",
    note: "เตรียมสหกิจ 1 นก. · สหกิจศึกษา 6 นก. (≥16 สัปดาห์)" },
  { id: "free", no: "3", name: "หมวดวิชาเลือกเสรี", code: "—", credits: 6, n: 2, g: "free",
    note: "เลือกจากรายวิชาที่มหาวิทยาลัยเปิดสอน" }
];
/* ---------- กลุ่มย่อยของแต่ละกลุ่มวิชา ----------
   items = กลุ่มย่อยตามข้อกำหนดของหลักสูตร · by:"sem" = จัดตามภาคการศึกษาในแผนการเรียน · by:"track" = แยกตามแขนงวิชา */
export const SUBGROUPS = {
  ge: {
    note: "แบ่งตามข้อกำหนดของหมวดวิชาศึกษาทั่วไป",
    items: [
      { name: "กลุ่มวิชาบังคับ", sub: "ภาษาอังกฤษ · ทักษะดิจิทัล · คุณค่ามหาวิทยาลัย · การออกแบบชีวิต · ปรัชญามนุษย์ สังคมและเศรษฐศาสตร์",
        codes: ["GE-010-001", "GE-010-002", "GE-010-003", "GE-010-004", "GE-010-005", "GE-010-006"] },
      { name: "กลุ่มวิชาเลือก", sub: "เลือกจากรายวิชาศึกษาทั่วไปที่มหาวิทยาลัยเปิดสอน",
        codes: ["GE-020-008", "GE-020-009"] }
    ]
  },
  eng: {
    note: "แบ่งเป็นรายวิชาบรรยายพื้นฐานและชุดปฏิบัติการที่เรียนต่อเนื่องสามภาคการศึกษา",
    items: [
      { name: "พื้นฐานทางวิศวกรรม", sub: "เศรษฐศาสตร์วิศวกรรม · สถิติ · ความร้อนและของไหล · เขียนแบบ · กลศาสตร์วัสดุ · การเขียนโปรแกรม · ไฟฟ้าและอิเล็กทรอนิกส์",
        codes: ["EN-001-121", "EN-001-122", "EN-001-123", "EN-001-124", "EN-001-125", "EN-001-126", "EN-001-127"] },
      { name: "ปฏิบัติการเชิงบูรณาการ", sub: "ชุดปฏิบัติการต่อเนื่อง I → II → III สร้างชิ้นงานเดียวกันจนเป็นระบบสมบูรณ์",
        codes: ["EN-001-128", "EN-001-129", "EN-001-230"] }
    ]
  },
  ai: { by: "sem", note: "รายวิชาแกนบังคับทุกแขนง จัดกลุ่มตามภาคการศึกษาในแผนการเรียน" },
  track: { by: "sem", note: "Core Track ร่วม 9 วิชา เริ่มจาก Sensing/Actuation และ Product/Decision Foundations ก่อนบูรณาการระบบโดเมน" },
  elec: { by: "track", note: "pool รวม 48 วิชา แยกตามแขนงวิชา นักศึกษาเลือกเรียนรวม 5 วิชา 15 หน่วยกิต" },
  proj: {
    note: "ไล่ลำดับจากการสืบค้นและสัมมนา → เขียนข้อเสนอโครงงาน → ดำเนินโครงงานจริง",
    items: [
      { name: "สัมมนา", sub: "สืบค้น วิเคราะห์ และนำเสนอเทคโนโลยีอุบัติใหม่", codes: ["EN-134-201", "EN-134-302"] },
      { name: "การเตรียมความพร้อมโครงงาน", sub: "กำหนดหัวข้อ ทบทวนวรรณกรรม และเสนอเค้าโครงต่อคณะกรรมการ", codes: ["EN-134-303"] },
      { name: "โครงงานวิศวกรรม (Capstone)", sub: "ดำเนินโครงงานบูรณาการ PLO1–7 และสอบปากเปล่า", codes: ["EN-134-404"] }
    ]
  },
  field: {
    note: "ต้องผ่านรายวิชาเตรียมความพร้อมก่อนออกปฏิบัติงานในสถานประกอบการ",
    items: [
      { name: "การเตรียมความพร้อม", sub: "จรรยาบรรณวิชาชีพ ความปลอดภัย และการเตรียมตัวสมัครงาน", codes: ["EN-135-401"] },
      { name: "การปฏิบัติงานในสถานประกอบการ", sub: "ปฏิบัติงานจริงไม่น้อยกว่า 16 สัปดาห์ พร้อมรายงานและการนำเสนอ", codes: ["EN-135-402"] }
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
export function subgroupsOf(gid) {
  const spec = SUBGROUPS[gid];
  if (!spec) return [];
  if (spec.items) {
    return spec.items.map((it, i) => {
      const courses = it.codes.map(code => COURSES.find(c => c.c === code)).filter(Boolean);
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
      const courses = list.filter(c => c.sem === s);
      return {
        key: `sem${s}`, name: `ชั้นปีที่ ${courses[0].y} · ภาคการศึกษาที่ ${s}`, sub: SEM_TITLE[s],
        courses, credits: courses.reduce((a, c) => a + creditOf(c), 0), n: courses.length, sem: s
      };
    });
    const pending = COURSES.filter(c => c.g === gid && c.pendingSemester);
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
    return [1, 2, 3].map(tr => {
      const courses = COURSES.filter(c => c.g === "elec" && c.tr === tr);
      return {
        key: `t${tr}`, name: TRACK_NAME[tr], tr,
        sub: `${courses[0].c} – ${courses[courses.length - 1].c}`,
        courses, credits: courses.reduce((a, c) => a + creditOf(c), 0), n: courses.length, pool: true
      };
    });
  }
  return [];
}

export const STRUCTURE_TOP = [
  { name: "หมวดวิชาศึกษาทั่วไป", credits: 24, ids: ["ge"] },
  { name: "หมวดวิชาเฉพาะ", credits: 103, ids: ["eng", "ai", "track", "elec", "proj", "field"] },
  { name: "หมวดวิชาเลือกเสรี", credits: 6, ids: ["free"] }
];
export const TOTAL_CREDITS = 133;
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
    main: "ความรู้", side: "ทักษะ", level: "วิเคราะห์ (Analyze)", type: "Specific",
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
    main: "จริยธรรม", side: "ลักษณะบุคคล", level: "ประเมินและตัดสินใจ (Evaluate)", type: "Generic",
    evidence: "การวิเคราะห์กรณีศึกษาจริยธรรม การประเมินความเสี่ยง แผนลดผลกระทบ และเหตุผลประกอบการตัดสินใจ",
    need: "ครอบคลุม N16 ด้านธรรมาภิบาล AI การปฏิบัติตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล และความมั่นคงปลอดภัยไซเบอร์" },
  5: { title: "การทำงานเป็นทีมและการบริหารโครงการ", en: "Teamwork and Project Management", so: "SO(5)",
    text: "ปฏิบัติงานร่วมกับทีมสหวิทยาการได้อย่างมีประสิทธิภาพ ทั้งในบทบาทผู้นำและสมาชิกในทีม เพื่อบริหารจัดการโครงการและส่งมอบผลงานที่ตอบโจทย์การนำไปประยุกต์ใช้งานได้จริง",
    main: "ลักษณะบุคคล", side: "ทักษะ", level: "จัดระบบและปฏิบัติ (Organize)", type: "Generic",
    evidence: "แผนงานทีม บันทึกการประชุม ผลงานตามบทบาท การประเมินโดยเพื่อนร่วมทีม และผลสำเร็จของโครงงาน",
    need: "ครอบคลุม N6 ด้านการเรียนรู้จากโจทย์จริงร่วมกับ Project-based Learning, CWIE และสหกิจศึกษา" },
  6: { title: "การทดลองและประเมินสมรรถนะระบบ", en: "System Experimentation and Performance Evaluation", so: "SO(6)",
    text: "วิเคราะห์และประเมินสมรรถนะของระบบผ่านกระบวนการทดลอง โดยประยุกต์ใช้หลักวิทยาการข้อมูลและวิจารณญาณทางวิศวกรรม เพื่อรับรองคุณภาพและความปลอดภัยอย่างเป็นระบบ",
    main: "ทักษะ", side: "ความรู้", level: "ประเมิน (Evaluate)", type: "Specific",
    evidence: "แผนการทดลอง ชุดข้อมูล กระบวนการวิเคราะห์ ผลการตรวจสอบความถูกต้อง การตีความข้อมูล และข้อสรุปเชิงวิศวกรรม" },
  7: { title: "การเรียนรู้ตลอดชีวิตและนวัตกรรมยั่งยืน", en: "Lifelong Learning and Sustainable Innovation", so: "SO(7)",
    text: "ประยุกต์ใช้เทคโนโลยีและมาตรฐานใหม่ผ่านการเรียนรู้ด้วยตนเองอย่างต่อเนื่อง เพื่อสร้างสรรค์นวัตกรรมที่ส่งมอบคุณค่าทางเศรษฐกิจ สังคม และสิ่งแวดล้อมอย่างยั่งยืน",
    main: "ลักษณะบุคคล", side: "ทักษะ", level: "จัดการตนเองและสร้างสรรค์ (Self-directed/Create)", type: "Generic",
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
    courses: ["EN-131-206", "EN-131-205", "EN-132-308", "EN-135-335", "EN-135-336", "EN-134-404"],
    why: "พัฒนา ปรับ ประเมิน และนำตัวแบบ AI/ML หรือ LLM ขึ้นใช้งาน โดยคำนึงถึงความแม่นยำ ความน่าเชื่อถือ ต้นทุน และการติดตามหลังนำใช้",
    kw: "AI Engineer · Machine Learning Engineer · Applied AI Engineer · ML Engineer" },
  { id: "C02", track: 0, st: "M", th: "วิศวกรประยุกต์และโซลูชันปัญญาประดิษฐ์", en: "AI Application / Solutions Engineer",
    courses: ["EN-132-302", "EN-132-308", "EN-132-309", "EN-135-337", "EN-134-404", "EN-135-402"],
    why: "วิเคราะห์ความต้องการ ออกแบบสถาปัตยกรรมองค์กร บูรณาการโมเดล ข้อมูล API และระบบเดิม แล้วทดสอบและส่งมอบโซลูชัน AI",
    kw: "AI Solutions Engineer · AI Application Engineer · Implementation Engineer · Technical Consultant" },
  { id: "C03", track: 1, st: "S", th: "วิศวกรเกษตรอัจฉริยะและไอโอที", en: "Smart Agriculture and IoT Engineer",
    courses: ["EN-001-127", "EN-131-204", "EN-132-304", "EN-135-301", "EN-135-309", "EN-134-404"],
    why: "ออกแบบระบบ sensor–edge–cloud ระบบควบคุม และการวิเคราะห์ข้อมูลสำหรับข้าว อ้อย มันสำปะหลัง ฟาร์ม และอุตสาหกรรมแปรรูป",
    kw: "Smart Farm Engineer · Agricultural IoT Engineer · IoT Engineer · Precision Agriculture" },
  { id: "C04", track: 2, st: "M", th: "วิศวกรระบบควบคุมและอัตโนมัติ", en: "Automation and Control Engineer",
    courses: ["EN-001-127", "EN-001-230", "EN-132-307", "EN-135-316"],
    why: "ออกแบบ ติดตั้ง และปรับปรุง PLC/SCADA เครื่องมือวัด ระบบควบคุม และระบบอัตโนมัติในโรงงาน",
    kw: "Automation Engineer · Control Engineer · PLC Engineer · SCADA Engineer" },
  { id: "C05", track: 2, st: "M", th: "วิศวกรหุ่นยนต์และบูรณาการระบบ", en: "Robotics and System Integration Engineer",
    courses: ["EN-001-230", "EN-132-307", "EN-135-327", "EN-135-326", "EN-135-318", "EN-134-404"],
    why: "บูรณาการหุ่นยนต์ เซนเซอร์ ระบบควบคุม การขนถ่ายวัสดุ และซอฟต์แวร์ให้ทำงานร่วมกันในระบบผลิต",
    kw: "Robotics Engineer · System Integration Engineer · Mechatronics Engineer" },
  { id: "C06", track: 3, st: "M", th: "วิศวกรซอฟต์แวร์และแอปพลิเคชันปัญญาประดิษฐ์", en: "AI Software and Application Engineer",
    courses: ["EN-132-308", "EN-132-309", "EN-135-335", "EN-135-336", "EN-135-337", "EN-134-404"],
    why: "พัฒนา LLM ซอฟต์แวร์ API และบริการ AI ที่มีสถาปัตยกรรมระดับองค์กร ผ่านการประเมินความน่าเชื่อถือและพร้อมใช้งานจริง",
    kw: "AI Software Engineer · AI Application Developer · Backend AI Engineer · Generative AI Engineer" },
  { id: "C07", track: 3, st: "M", th: "วิศวกรข้อมูล", en: "Data Engineer",
    courses: ["EN-131-207", "EN-131-205", "EN-135-334", "EN-135-337"],
    why: "ออกแบบฐานข้อมูล ETL/ELT data pipeline คุณภาพข้อมูล และแพลตฟอร์มข้อมูลซึ่งเป็นโครงสร้างพื้นฐานของระบบ AI",
    kw: "Data Engineer · ETL Developer · Data Platform Engineer · Analytics Engineer" },
  { id: "C08", track: 3, st: "F", th: "นักออกแบบและสร้างนวัตกรรมด้านปัญญาประดิษฐ์", en: "AI Innovator",
    courses: ["EN-132-302", "EN-132-308", "EN-135-338", "EN-135-343", "EN-135-346", "EN-134-404"],
    why: "ค้นหาโอกาส ออกแบบประสบการณ์ สร้างต้นแบบ จัดการผลิตภัณฑ์ และทดลองวัดการยอมรับกับคุณค่าของนวัตกรรม AI",
    kw: "AI Innovator · AI Product Manager · AI Product Developer · Innovation Specialist" },
  { id: "C09", track: 3, st: "F", th: "ผู้ประกอบการด้านธุรกิจเทคโนโลยีดิจิทัลและปัญญาประดิษฐ์", en: "Technology and AI Entrepreneur",
    courses: ["EN-001-121", "EN-132-302", "EN-135-343", "EN-135-345", "EN-135-346", "EN-134-404"],
    why: "พัฒนาต้นแบบสู่ธุรกิจ กำหนดราคาและเศรษฐศาสตร์ต่อหน่วย วางกลยุทธ์เข้าสู่ตลาด ระดมทุน และขยายกิจการ AI",
    kw: "AI Entrepreneur · Tech Founder · AI Startup Founder · Digital Technology Entrepreneur" },
  { id: "C10", track: 0, st: "F", th: "นักวิจัยด้านปัญญาประดิษฐ์และระบบอัจฉริยะ", en: "AI and Intelligent Systems Researcher",
    courses: ["EN-131-102", "EN-131-206", "EN-135-335", "EN-135-336", "EN-134-303", "EN-134-404"],
    why: "ตั้งคำถามวิจัย ปรับตัวแบบ ออกแบบเกณฑ์มาตรฐานและการทดลองที่ทำซ้ำได้ วิเคราะห์ความน่าเชื่อถือ และสร้างองค์ความรู้ใหม่",
    kw: "AI Researcher · Machine Learning Researcher · Research Engineer · Intelligent Systems Researcher" },
  { id: "C11", track: 0, st: "S", th: "ข้าราชการ/พนักงานหน่วยงานของรัฐด้านเทคโนโลยีดิจิทัล", en: "Government Officer / Digital Technology Specialist",
    courses: ["EN-132-302", "EN-132-303", "EN-135-348", "EN-134-404", "EN-135-401", "EN-135-402"],
    why: "วิเคราะห์ ออกแบบ จัดหา และกำกับระบบ AI ด้วยการจำแนกความเสี่ยง ประเมินผลกระทบ และจัดทำหลักฐานตรวจสอบสำหรับบริการภาครัฐ",
    kw: "Digital Technology Specialist · IT Officer · Computer Technical Officer · Government Digital Service" },
  { id: "C12", track: 0, st: "M", th: "นักวิทยาศาสตร์ข้อมูลและนักวิเคราะห์ข้อมูล", en: "Data Scientist / Data Analyst",
    courses: ["EN-001-122", "EN-131-102", "EN-131-206", "EN-131-207", "EN-135-334"],
    why: "รวบรวม วิเคราะห์ สร้างแบบจำลอง และสื่อสารข้อมูลเพื่อสนับสนุนการตัดสินใจในภาคเกษตร อุตสาหกรรม ธุรกิจ และภาครัฐ",
    kw: "Data Scientist · Data Analyst · Business Intelligence Analyst · Analytics Specialist" },
  { id: "C13", track: 2, st: "F", th: "วิศวกรโรงงานอัจฉริยะด้วยปัญญาประดิษฐ์", en: "AI Smart Factory Engineer",
    courses: ["EN-001-127", "EN-001-230", "EN-132-307", "EN-135-316", "EN-135-327", "EN-134-404"],
    why: "เชื่อมข้อมูลเครื่องจักร IIoT ระบบผลิต MES/SCADA และ AI เพื่อยกระดับโรงงานสู่ Smart Factory และ Industry 4.0",
    kw: "AI Smart Factory Engineer · Smart Factory Engineer · Industry 4.0 Engineer · Manufacturing Digitalization Engineer" },
  { id: "C14", track: 2, st: "M", th: "วิศวกรปัญญาประดิษฐ์ด้านกระบวนการและการผลิต", en: "AI Process and Production Engineer",
    courses: ["EN-001-122", "EN-001-127", "EN-132-307", "EN-135-316", "EN-135-334", "EN-134-404"],
    why: "วิเคราะห์และปรับเหมาะกระบวนการผลิตด้วยข้อมูล สถิติ การจำลอง และ AI เพื่อเพิ่มผลผลิต คุณภาพ และประสิทธิภาพ",
    kw: "AI Process Engineer · AI Production Engineer · Manufacturing Process Engineer · Production Optimization Engineer" },
  { id: "C15", track: 0, st: "M", th: "ผู้เชี่ยวชาญระบบสนับสนุนการตัดสินใจ", en: "Decision Support Systems Specialist",
    courses: ["EN-001-122", "EN-131-207", "EN-132-302", "EN-135-334", "EN-135-337"],
    why: "พัฒนาระบบข้อมูล แบบจำลองการตัดสินใจ การเพิ่มประสิทธิภาพ และแดชบอร์ดเพื่อสนับสนุนผู้บริหารและหน่วยปฏิบัติการ",
    kw: "Decision Support System Analyst · DSS Developer · Business Decision Analyst · Operations Research Analyst" },
  { id: "C16", track: 2, st: "M", th: "วิศวกรซ่อมบำรุงด้วยปัญญาประดิษฐ์", en: "AI Maintenance Engineer",
    courses: ["EN-001-127", "EN-132-307", "EN-135-316", "EN-135-326", "EN-135-334", "EN-134-404"],
    why: "ใช้ condition monitoring การวิเคราะห์สัญญาณ และ predictive AI เพื่อพยากรณ์ความขัดข้องและวางแผนซ่อมบำรุง",
    kw: "Predictive Maintenance Engineer · AI Maintenance Engineer · Reliability Engineer · Condition Monitoring Engineer" },
  { id: "C17", track: 2, st: "F", th: "วิศวกรปัญญาประดิษฐ์อุตสาหกรรม", en: "AI Industrial Engineer",
    courses: ["EN-001-122", "EN-001-127", "EN-132-307", "EN-135-316", "EN-135-327", "EN-134-404"],
    why: "บูรณาการ AI ข้อมูลอุตสาหกรรม ระบบอัตโนมัติ และหลักวิศวกรรมอุตสาหการเพื่อปรับปรุงระบบผลิตแบบครบวงจร",
    kw: "Industrial AI Engineer · AI Industrial Engineer · Industrial Data Scientist · Manufacturing AI Engineer" },
  { id: "C18", track: 1, st: "S", th: "วิศวกรระบบตรวจวัดและควบคุมฟาร์มอัจฉริยะ", en: "Smart Farm Sensing and Control Engineer",
    courses: ["EN-131-204", "EN-132-201", "EN-132-304", "EN-135-301", "EN-135-309", "EN-134-404"],
    why: "ออกแบบ ติดตั้ง และทดสอบระบบตรวจวัด เครือข่ายเซนเซอร์ Edge IoT และการควบคุมน้ำหรือสภาพแวดล้อมในฟาร์ม",
    kw: "Smart Farm Control Engineer · Farm IoT Engineer · Agricultural Instrumentation Engineer · Irrigation Control Engineer" },
  { id: "C19", track: 1, st: "S", th: "วิศวกรระบบอัตโนมัติและหุ่นยนต์เพื่อการเกษตร", en: "Agricultural Automation and Robotics Engineer",
    courses: ["EN-001-230", "EN-132-201", "EN-132-305", "EN-135-311", "EN-134-404"],
    why: "พัฒนาหุ่นยนต์เคลื่อนที่ ระบบขับเคลื่อน การรับรู้ และระบบอัตโนมัติสำหรับดูแล พ่น คัดแยก หรือเก็บเกี่ยวผลผลิต",
    kw: "Agricultural Robotics Engineer · Farm Automation Engineer · Agri-Robot Engineer · Autonomous Farm Systems Engineer" },
  { id: "C20", track: 1, st: "S", th: "วิศวกรอากาศยานไร้คนขับและภูมิสารสนเทศเพื่อการเกษตร", en: "Agricultural UAV and GeoAI Engineer",
    courses: ["EN-131-203", "EN-132-305", "EN-135-303", "EN-135-312", "EN-134-404"],
    why: "วางแผนการบิน เก็บและประมวลผลภาพหลายช่วงคลื่น สร้างแผนที่ และใช้ GeoAI ประเมินสุขภาพพืชและพื้นที่เพาะปลูก",
    kw: "Agricultural UAV Engineer · Drone Mapping Specialist · GeoAI Engineer · Remote Sensing Agriculture" },
  { id: "C21", track: 1, st: "S", th: "นักวิเคราะห์ข้อมูลและระบบสนับสนุนการตัดสินใจทางการเกษตร", en: "Agricultural Data and Decision Support Specialist",
    courses: ["EN-131-207", "EN-132-303", "EN-132-304", "EN-135-305", "EN-135-313", "EN-134-404"],
    why: "บูรณาการข้อมูลฟาร์ม ภูมิอากาศ ผลผลิต และห่วงโซ่อุปทาน เพื่อพยากรณ์ สร้างสถานการณ์ และสนับสนุนการตัดสินใจ",
    kw: "Agricultural Data Analyst · Farm Data Scientist · Agricultural DSS Specialist · Agri Supply Chain Analyst" },
  { id: "C22", track: 0, st: "M", th: "วิศวกรโครงการและติดตั้งระบบอัจฉริยะ", en: "Intelligent Systems Project and Implementation Engineer",
    courses: ["EN-132-302", "EN-132-308", "EN-135-344", "EN-134-303", "EN-134-404", "EN-135-402"],
    why: "จัดทำข้อกำหนด วางแผน ประสานงาน ติดตั้ง ทดสอบ ส่งมอบ และบริหารความเสี่ยงของโครงการ AI หรือระบบอัจฉริยะ",
    kw: "AI Project Engineer · Implementation Engineer · Technical Project Engineer · Intelligent Systems Engineer" },
  { id: "C23", track: 0, st: "M", th: "วิศวกรบูรณาการระบบอัจฉริยะ", en: "Intelligent Systems Integration Engineer",
    courses: ["EN-001-230", "EN-132-308", "EN-132-201", "EN-135-336", "EN-135-337", "EN-134-404"],
    why: "เชื่อมข้อมูล อุปกรณ์ ระบบควบคุม ซอฟต์แวร์ API และ AI ตามสถาปัตยกรรมองค์กร พร้อมทดสอบความน่าเชื่อถือแบบครบวงจร · ครอบคลุมบทบาทผู้ดูแลระบบในภาพรวมของโรงงาน ซึ่งเป็นความต้องการที่อุตสาหกรรมแป้งและเกษตรแปรรูประบุว่ายังขาดกำลังคน",
    kw: "Systems Integration Engineer · AI Integration Engineer · Solution Integration Engineer · Integration Test Engineer · Plant Systems Integrator · OT System Owner" },
  { id: "C24", track: 0, st: "M", th: "ที่ปรึกษาโซลูชันปัญญาประดิษฐ์และการเปลี่ยนผ่านสู่ดิจิทัล", en: "AI Solutions and Digital Transformation Consultant",
    courses: ["EN-001-121", "EN-132-302", "EN-132-303", "EN-135-337", "EN-135-343", "EN-135-348", "EN-134-404"],
    why: "วิเคราะห์ความพร้อมองค์กร ออกแบบสถาปัตยกรรมและแผนเปลี่ยนผ่าน ประเมินความคุ้มค่า ความเสี่ยง และแนวทางนำ AI ไปใช้จริง",
    kw: "AI Consultant · Digital Transformation Consultant · AI Solutions Consultant · Technology Consultant" },
  { id: "C25", track: 0, st: "M", th: "นักวิเคราะห์ธุรกิจอัจฉริยะและการตัดสินใจ", en: "Business Intelligence and Decision Analyst",
    courses: ["EN-001-122", "EN-131-207", "EN-132-303", "EN-135-319", "EN-135-334", "EN-134-404"],
    why: "สร้างตัวชี้วัด แบบจำลองพยากรณ์ การจำลองและการเพิ่มประสิทธิภาพ พร้อมสื่อสารข้อเสนอเพื่อการตัดสินใจทางธุรกิจและการปฏิบัติการ",
    kw: "Business Intelligence Analyst · Decision Analyst · Operations Analyst · Analytics Consultant" },
  { id: "C26", track: 3, st: "F", th: "นักวิเคราะห์ผลิตภัณฑ์และผู้ประสานงานโครงการปัญญาประดิษฐ์", en: "AI Product and Project Analyst",
    courses: ["EN-132-302", "EN-132-308", "EN-135-338", "EN-135-344", "EN-135-346", "EN-134-404"],
    why: "ศึกษาผู้ใช้ จัดทำ roadmap และ backlog กำหนดตัวชี้วัด ออกแบบการทดลอง ประสานทีมเทคนิค–ธุรกิจ และติดตามผลิตภัณฑ์ AI",
    kw: "AI Product Analyst · Associate AI Product Manager · AI Project Coordinator · Technical Product Analyst" }
];
