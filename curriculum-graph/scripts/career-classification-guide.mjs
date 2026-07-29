export const CAREER_CLASSIFICATION_GUIDE = {
  C01: {
    definition: "Build, train, evaluate, deploy, or monitor AI/ML models as a core engineering duty.",
    positive: "model training, feature engineering, ML algorithms, model serving, MLOps",
    exclude: "roles that only use AI tools, RPA, dashboards, or manage AI projects without model engineering"
  },
  C02: {
    definition: "Translate business needs into implemented AI solutions, architecture, integrations, or technical delivery.",
    positive: "requirements, solution design, proof-of-concept, AI integration, implementation, technical consulting",
    exclude: "pure model research, general software development, or non-technical sales"
  },
  C03: {
    definition: "Engineer smart-agriculture systems using agricultural domain knowledge plus IoT, sensors, edge, control, or farm data.",
    positive: "farm, crop, agriculture, precision agriculture, agritech together with IoT, sensor, MQTT, edge, GIS, drone",
    exclude: "generic IoT or AI with no agriculture/farming evidence"
  },
  C04: {
    definition: "Engineer industrial automation and control systems.",
    positive: "PLC, SCADA, HMI, DCS, instrumentation, PID, control panel, industrial control, drives",
    exclude: "RPA, Power Automate, Selenium, business workflow automation, marketing automation"
  },
  C05: {
    definition: "Engineer robotics, mechatronics, robot cells, motion systems, or physical system integration.",
    positive: "industrial robot, cobot, ROS, robot programming, motion control, mechatronics, commissioning",
    exclude: "software integration or workflow automation without physical robots/mechatronics"
  },
  C06: {
    definition: "Develop production software, APIs, web/mobile applications, or backend services whose product functionality uses AI.",
    positive: "AI application, backend, API, frontend, full stack, testing, software architecture, model integration",
    exclude: "pure data pipelines, research-only work, or no-code business automation without software engineering"
  },
  C07: {
    definition: "Build and operate data pipelines, warehouses, lakes, platforms, and data infrastructure.",
    positive: "ETL, ELT, Spark, Airflow, Kafka, dbt, data warehouse, lakehouse, data platform",
    exclude: "analysis/dashboard-only roles without pipeline or platform engineering"
  },
  C08: {
    definition: "Discover, design, prototype, validate, or manage innovative AI products and user value.",
    positive: "AI product, innovation, design thinking, user research, MVP, rapid prototype, experimentation",
    exclude: "routine software delivery or project coordination without product/innovation ownership"
  },
  C09: {
    definition: "Create, commercialize, fund, grow, or lead an AI/digital technology venture.",
    positive: "founder, entrepreneur, startup, venture, go-to-market, business model, fundraising, commercialization",
    exclude: "ordinary employee business-development roles without venture/product ownership"
  },
  C10: {
    definition: "Conduct AI/intelligent-systems research that produces experiments, publications, algorithms, or new knowledge.",
    positive: "research methodology, paper, publication, novel algorithm, benchmark, experiment, research scientist",
    exclude: "market research, user research, routine implementation, or R&D wording without AI research duties"
  },
  C11: {
    definition: "Deliver or govern digital technology in government/public service, or perform a clearly defined IT officer/specialist function.",
    positive: "government digital service, public-sector IT, IT officer, systems/network administration, IT governance",
    exclude: "private-sector generic IT roles unless the occupation itself is explicitly IT Officer/IT Specialist"
  },
  C12: {
    definition: "Analyze data, build statistical/predictive analyses, dashboards, experiments, or communicate decision insights.",
    positive: "data scientist, data analyst, BI analyst, statistics, SQL analysis, visualization, forecasting",
    exclude: "data engineering without analysis responsibility or AI engineering without analytical decision outputs"
  },
  C13: {
    definition: "Digitally integrate factory operations into a Smart Factory or Industry 4.0 architecture.",
    positive: "smart factory, Industry 4.0, MES, IIoT, factory digitalization, OT/IT integration, digital twin",
    exclude: "generic AI, cloud, or automation with no factory/manufacturing system context"
  },
  C14: {
    definition: "Improve manufacturing processes, production planning, quality, throughput, or operational performance using engineering/data/AI.",
    positive: "process engineer, production engineer, process optimization, SPC, quality, OEE, lean, Six Sigma",
    exclude: "business-process automation or software process roles with no manufacturing/production context"
  },
  C15: {
    definition: "Build decision-support models, optimization, simulation, operations research, or management decision systems.",
    positive: "DSS, decision model, operations research, optimization, simulation, scenario analysis, MCDA",
    exclude: "ordinary dashboards or data analysis without an explicit decision model/support responsibility"
  },
  C16: {
    definition: "Improve equipment reliability and maintenance using condition monitoring, predictive analytics, or asset engineering.",
    positive: "predictive maintenance, reliability, condition monitoring, vibration, FMEA, RCM, CMMS, fault detection",
    exclude: "software maintenance, application support, or generic AI with no physical asset/equipment context"
  },
  C17: {
    definition: "Apply AI as a core engineering capability across industrial or manufacturing operations.",
    positive: "industrial AI, manufacturing AI, industrial data science, AI quality inspection, industrial optimization",
    exclude: "generic AI roles with no industrial/manufacturing/physical-production evidence"
  }
};

export const CLASSIFICATION_POLICY = `
Classification is semantic, not keyword search membership.

For every job:
1. Choose exactly one Primary career only when confidence is at least 0.70.
2. Add at most two Secondary careers only when each is a genuine separate duty with confidence at least 0.65.
3. Return no matches when the job is outside all 17 careers or evidence is insufficient.
4. Select exactly one best subgroup inside each accepted career.
5. Do not classify from skills mentioned only as awareness, collaboration, optional exposure, or a degree field.
6. Job title and core responsibilities outweigh isolated keywords.

Mandatory domain gates:
- C03 requires agricultural/farming evidence AND a smart-system/IoT/data/control responsibility.
- C04 requires industrial-control evidence such as PLC, SCADA, HMI, DCS, instrumentation, control systems,
  factory controls, or motion/drives. RPA and Power Automate are business automation, not C04.
- C05 requires physical robotics, mechatronics, motion, robot cells, or physical-system integration.
- C09 requires venture creation/commercial ownership, not ordinary business development.
- C10 requires scientific AI research, not market/user research or routine implementation.
- C13, C14, C16, and C17 require explicit factory, manufacturing, equipment, maintenance, or industrial context.
- C15 requires an explicit decision model, optimization, simulation, operations research, or DSS responsibility;
  a dashboard alone belongs in C12.

Overlap resolution:
- AI/RPA solutions for business operations normally map to C02; add C06 only when software engineering is core.
- Model creation maps to C01; using an existing model/API does not.
- Data pipelines map to C07; analysis and insight generation map to C12.
- Industrial control maps to C04; Smart Factory architecture maps to C13; production/process improvement maps to C14;
  asset reliability maps to C16; industrial AI spanning production use cases maps to C17.
`;
