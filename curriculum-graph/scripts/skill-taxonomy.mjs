export const TECHNICAL_SKILLS = [
  ["Python", /\bpython\b/i],
  ["SQL", /\bsql\b|postgres|mysql|sql server/i],
  ["Machine Learning", /machine learning|\bml\b|scikit.learn|xgboost/i],
  ["Generative AI", /generative ai|genai|gen ai|chatgpt|claude|gemini/i],
  ["Cloud Platforms", /\baws\b|azure|\bgcp\b|google cloud|cloud platform|\bcloud\b/i],
  ["LLM", /large language model|\bllms?\b/i],
  ["RAG", /retrieval.augmented|\brag\b/i],
  ["CI/CD", /ci\/?cd|continuous integration|continuous deployment/i],
  ["Docker", /\bdocker\b|containerization/i],
  ["Kubernetes", /kubernetes|\bk8s\b/i],
  ["Deep Learning Frameworks", /deep learning|pytorch|tensorflow|keras/i],
  ["MLOps", /mlops|model monitoring|model registry|experiment tracking|mlflow|kubeflow|sagemaker/i],
  ["Data Engineering & Pipelines", /data engineer|data pipeline|\betl\b|\belt\b|airflow|apache spark|\bspark\b|kafka|databricks|big data/i],
  ["API & Backend Development", /\bapis?\b|restful|fastapi|flask|backend|back-end|microservice|node\.?js/i],
  ["Prompt Engineering", /prompt engineering|prompt design|prompt optimization/i],
  ["Data Analytics & BI", /data analy|business intelligence|power bi|tableau|data visualization/i],
  ["NLP & Speech", /natural language processing|\bnlp\b|speech recognition|\bstt\b|\btts\b/i],
  ["Computer Vision", /computer vision|image recognition|object detection|machine vision/i],
  ["Vector Databases", /vector database|vector db|pinecone|milvus|weaviate|qdrant|chroma/i],
  ["Agentic AI", /agentic ai|ai agents?|langchain|langgraph/i]
];

export const SOFT_SKILLS = [
  ["English Communication", /\benglish\b|ภาษาอังกฤษ/i],
  ["Communication", /communication|interpersonal/i],
  ["Stakeholder Management", /stakeholder|requirements gathering/i],
  ["Problem Solving", /problem.solv|troubleshoot/i],
  ["Agile / Scrum", /\bagile\b|\bscrum\b/i],
  ["Project Management", /project management/i],
  ["Presentation", /presentation|demonstration/i],
  ["Analytical Thinking", /analytical|critical thinking/i],
  ["Leadership", /leadership|team lead/i],
  ["Collaboration & Teamwork", /collaboration|teamwork|team player|cross.functional/i]
];

export const C03_TECHNICAL_SKILLS = [
  ["IoT Platforms", /internet of things|\biot\b/i],
  ["Sensors & Instrumentation", /sensor|instrumentation|transducer|data logger/i],
  ["Embedded Systems", /embedded|firmware/i],
  ["Microcontrollers & SBC", /microcontroller|arduino|esp32|esp8266|raspberry|stm32/i],
  ["C/C++", /\bc\+\+|\bc language|embedded c\b/i],
  ["Python", /\bpython\b/i],
  ["MQTT & IoT Protocols", /mqtt|coap|modbus|opc.?ua|zigbee/i],
  ["Wireless & Networking", /wireless|wi-?fi|bluetooth|networking|tcp\/ip|4g|5g|lorawan|lpwan|nb.?iot/i],
  ["Edge Computing", /edge computing|edge device|edge ai/i],
  ["Cloud IoT Platforms", /aws iot|azure iot|google cloud iot|iot cloud|cloud platform|\bcloud\b/i],
  ["Automation & Control", /automation|control system|industrial control/i],
  ["PLC & Industrial Control", /\bplc\b|programmable logic/i],
  ["SCADA & HMI", /scada|\bhmi\b/i],
  ["Electronics & Circuit Design", /electronics|circuit|\bpcb\b|electrical design/i],
  ["APIs & System Integration", /\bapi\b|system integration|integration engineer|restful/i],
  ["SQL & Databases", /\bsql\b|database|postgres|mysql|mongodb/i],
  ["Data Analytics & Visualization", /data analy|dashboard|power bi|visualization/i],
  ["Precision Agriculture", /precision agriculture|smart farm|smart agriculture|agritech|agri-tech|farm management|agricultural/i],
  ["GIS, Remote Sensing & Drones", /\bgis\b|remote sensing|drone|\buav\b|satellite/i],
  ["Computer Vision", /computer vision|image processing|object detection/i]
];

const C02_TECHNICAL_SKILLS = [
  ["Generative AI", /generative ai|genai|chatgpt|claude|gemini/i],
  ["LLM", /large language model|\bllms?\b/i],
  ["RAG", /retrieval.augmented|\brag\b/i],
  ["Agentic AI", /agentic ai|ai agents?|langchain|langgraph/i],
  ["Prompt Engineering", /prompt engineering|prompt design|prompt optimization/i],
  ["Python", /\bpython\b/i],
  ["APIs & Backend Development", /\bapis?\b|restful|fastapi|flask|backend|microservice/i],
  ["Cloud Platforms", /\baws\b|azure|\bgcp\b|google cloud|\bcloud\b/i],
  ["Solution Architecture", /solution architecture|solutions architect|technical architecture/i],
  ["System Integration", /system integration|application integration|integration engineer/i],
  ["Application Development", /application development|software development|full.?stack|frontend|backend/i],
  ["Data Engineering & Pipelines", /data pipeline|\betl\b|\belt\b|airflow|spark|kafka|databricks/i],
  ["SQL & Databases", /\bsql\b|database|postgres|mysql|mongodb/i],
  ["Vector Databases", /vector database|pinecone|milvus|weaviate|qdrant|chroma/i],
  ["AI Platforms & Services", /azure ai|aws bedrock|vertex ai|openai api|ai platform|ai service/i],
  ["MLOps", /mlops|model monitoring|model registry|mlflow|kubeflow|sagemaker/i],
  ["Docker", /\bdocker\b|containerization/i],
  ["Kubernetes", /kubernetes|\bk8s\b/i],
  ["AI Security & Governance", /ai security|responsible ai|ai governance|data privacy|pdpa|security/i],
  ["Prototyping & UX", /prototype|prototyping|user experience|\bux\b|proof of concept|\bpoc\b/i]
];

const C04_TECHNICAL_SKILLS = [
  ["Automation & Control", /automation|control system|industrial control/i],
  ["PLC Programming", /\bplc\b|programmable logic|ladder logic/i],
  ["SCADA & HMI", /scada|\bhmi\b|human.machine interface/i],
  ["Instrumentation", /instrumentation|instrument engineer|transmitter|measurement/i],
  ["Sensors & Actuators", /sensor|actuator|servo|encoder/i],
  ["Industrial Networks", /profinet|profibus|ethernet.?ip|ethercat|industrial network/i],
  ["Industrial Protocols", /modbus|opc.?ua|can.?bus|fieldbus|bacnet/i],
  ["DCS", /distributed control system|\bdcs\b/i],
  ["Process Control", /process control|\bpid\b|control loop/i],
  ["Electrical Design", /electrical design|control panel|wiring diagram|eplan/i],
  ["Motor Drives & Motion Control", /motor drive|\bvfd\b|inverter|motion control/i],
  ["Robotics", /robotics?|robot programming|cobot/i],
  ["IIoT & Industry 4.0", /industrial iot|\biiot\b|industry 4\.0|smart factory/i],
  ["MES & Manufacturing Systems", /\bmes\b|manufacturing execution|production system/i],
  ["Machine Vision", /machine vision|computer vision|vision system/i],
  ["Python", /\bpython\b/i],
  ["C/C++", /\bc\+\+|embedded c\b/i],
  ["MATLAB & Simulink", /matlab|simulink/i],
  ["CAD & Engineering Drawings", /\bcad\b|autocad|engineering drawing/i],
  ["Safety & Standards", /functional safety|safety system|\bsil\b|iec 61508|iec 61131/i]
];

const C05_TECHNICAL_SKILLS = [
  ["Robotics", /robotics?|robot programming|industrial robot|cobot/i],
  ["System Integration", /system integration|integration engineer|commissioning/i],
  ["Mechatronics", /mechatronic/i],
  ["Automation & Control", /automation|control system|industrial control/i],
  ["PLC Programming", /\bplc\b|programmable logic|ladder logic/i],
  ["Robot Platforms", /fanuc|kuka|abb robot|yaskawa|universal robots|dobot/i],
  ["ROS", /robot operating system|\bros2?\b/i],
  ["Motion Planning & Control", /motion planning|motion control|trajectory|kinematic/i],
  ["Machine Vision", /machine vision|computer vision|vision system|opencv/i],
  ["Sensors & Actuators", /sensor|actuator|servo|encoder|lidar/i],
  ["Embedded Systems", /embedded|firmware|microcontroller/i],
  ["C/C++", /\bc\+\+|embedded c\b/i],
  ["Python", /\bpython\b/i],
  ["CAD & Mechanical Design", /\bcad\b|solidworks|autocad|mechanical design/i],
  ["Electrical & Control Panels", /electrical design|control panel|wiring diagram/i],
  ["Industrial Networks", /profinet|profibus|ethernet.?ip|ethercat|modbus|opc.?ua/i],
  ["Simulation & Digital Twin", /simulation|digital twin|gazebo|webots/i],
  ["SCADA & HMI", /scada|\bhmi\b/i],
  ["Safety & Risk Assessment", /functional safety|risk assessment|machine safety|\bsil\b/i],
  ["Testing & Commissioning", /testing|commissioning|site acceptance|\bsat\b|\bfat\b/i]
];

const C06_TECHNICAL_SKILLS = [
  ["Python", /\bpython\b/i],
  ["JavaScript & TypeScript", /javascript|typescript|node\.?js/i],
  ["Frontend Frameworks", /react|angular|vue|next\.?js/i],
  ["Backend & APIs", /backend|back-end|\bapis?\b|restful|fastapi|flask|django|microservice/i],
  ["Generative AI", /generative ai|genai|chatgpt|claude|gemini/i],
  ["LLM", /large language model|\bllms?\b/i],
  ["RAG", /retrieval.augmented|\brag\b/i],
  ["Agentic AI", /agentic ai|ai agents?|langchain|langgraph/i],
  ["Prompt Engineering", /prompt engineering|prompt design/i],
  ["Machine Learning", /machine learning|\bml\b|scikit.learn|xgboost/i],
  ["SQL & Databases", /\bsql\b|postgres|mysql|database/i],
  ["NoSQL & Vector Databases", /mongodb|redis|vector database|pinecone|milvus|weaviate|qdrant|chroma/i],
  ["Cloud Platforms", /\baws\b|azure|\bgcp\b|google cloud|\bcloud\b/i],
  ["Docker", /\bdocker\b|containerization/i],
  ["Kubernetes", /kubernetes|\bk8s\b/i],
  ["CI/CD", /ci\/?cd|continuous integration|continuous deployment|github actions|gitlab ci/i],
  ["Software Architecture", /software architecture|system design|design pattern|clean architecture/i],
  ["Testing & Quality", /unit test|integration test|automated test|pytest|jest|quality assurance/i],
  ["MLOps & Model Serving", /mlops|model serving|model deployment|mlflow|kubeflow/i],
  ["Security & Authentication", /security|authentication|authorization|oauth|jwt|data privacy/i]
];

const C07_TECHNICAL_SKILLS = [
  ["SQL", /\bsql\b|postgres|mysql|sql server/i],
  ["Python", /\bpython\b/i],
  ["ETL & ELT", /\betl\b|\belt\b|data pipeline|data integration/i],
  ["Data Warehousing", /data warehouse|data mart|snowflake schema|star schema/i],
  ["Data Lake & Lakehouse", /data lake|lakehouse|delta lake|iceberg/i],
  ["Apache Spark", /apache spark|\bspark\b|pyspark/i],
  ["Airflow & Orchestration", /airflow|dagster|prefect|workflow orchestration/i],
  ["Kafka & Streaming", /kafka|stream processing|real.time data|event streaming/i],
  ["Cloud Data Platforms", /bigquery|redshift|azure synapse|snowflake|databricks|cloud data/i],
  ["AWS Data Services", /aws glue|aws lambda|amazon s3|kinesis|athena|\baws\b/i],
  ["Azure Data Services", /azure data factory|azure databricks|synapse|\bazure\b/i],
  ["GCP Data Services", /google cloud|bigquery|dataflow|pub.?sub|\bgcp\b/i],
  ["dbt & Analytics Engineering", /\bdbt\b|analytics engineering|semantic layer/i],
  ["NoSQL Databases", /mongodb|cassandra|dynamodb|nosql|redis/i],
  ["Data Modeling", /data model|dimensional model|entity relationship/i],
  ["Data Quality & Testing", /data quality|data validation|great expectations|data test/i],
  ["Data Governance & Catalog", /data governance|data catalog|data lineage|metadata management/i],
  ["Docker & Kubernetes", /docker|kubernetes|\bk8s\b|containerization/i],
  ["CI/CD & Infrastructure as Code", /ci\/?cd|terraform|infrastructure as code|\biac\b/i],
  ["BI & Visualization", /power bi|tableau|looker|business intelligence|data visualization/i]
];

const C08_TECHNICAL_SKILLS = [
  ["AI Product Development", /ai product|product development|product engineering/i],
  ["Product Management", /product management|product manager|product roadmap/i],
  ["Generative AI", /generative ai|genai|chatgpt|claude|gemini/i],
  ["Machine Learning", /machine learning|\bml\b|predictive model/i],
  ["Rapid Prototyping", /rapid prototyp|prototype|proof of concept|\bpoc\b|\bmvp\b/i],
  ["Design Thinking", /design thinking|human.centered design/i],
  ["User Research & UX", /user research|user experience|\bux\b|customer discovery/i],
  ["Data Analytics & BI", /data analy|business intelligence|power bi|tableau|dashboard/i],
  ["Python", /\bpython\b/i],
  ["APIs & System Integration", /\bapis?\b|system integration|restful/i],
  ["Cloud Platforms", /\baws\b|azure|\bgcp\b|google cloud|\bcloud\b/i],
  ["No-code & Workflow Automation", /no.?code|low.?code|power automate|zapier|make\.com|n8n/i],
  ["IoT & Smart Systems", /internet of things|\biot\b|smart system/i],
  ["Robotics & Automation", /robotics?|automation|cobot/i],
  ["Computer Vision", /computer vision|image processing|machine vision/i],
  ["Market & Technology Research", /market research|technology research|trend analysis/i],
  ["Experimentation & A/B Testing", /a\/b test|experiment design|hypothesis testing/i],
  ["Agile Product Delivery", /\bagile\b|\bscrum\b|product backlog|sprint/i],
  ["AI Ethics & Governance", /responsible ai|ai ethics|ai governance|data privacy/i],
  ["Intellectual Property", /intellectual property|\bpatent\b|technology transfer/i]
];

const C09_TECHNICAL_SKILLS = [
  ["AI Product Strategy", /ai product|product strategy|product roadmap/i],
  ["Business Model & Lean Startup", /business model|lean startup|business model canvas/i],
  ["Market Validation", /market validation|customer discovery|product.market fit|market research/i],
  ["Generative AI", /generative ai|genai|chatgpt|claude|gemini/i],
  ["AI & Machine Learning", /artificial intelligence|machine learning|\bai\b|\bml\b/i],
  ["Data Analytics & BI", /data analy|business intelligence|power bi|tableau|dashboard/i],
  ["No-code & Automation", /no.?code|low.?code|power automate|zapier|make\.com|n8n|automation/i],
  ["Cloud & SaaS", /\bsaas\b|\baws\b|azure|\bgcp\b|google cloud|\bcloud\b/i],
  ["APIs & System Integration", /\bapis?\b|system integration|platform integration/i],
  ["Rapid Prototyping & MVP", /rapid prototyp|prototype|\bmvp\b|proof of concept/i],
  ["Digital Marketing & Growth", /digital marketing|growth hacking|seo|performance marketing/i],
  ["CRM & Sales Technology", /\bcrm\b|salesforce|hubspot|sales automation/i],
  ["E-commerce & Digital Platforms", /e.?commerce|digital platform|marketplace/i],
  ["Financial Modeling & Unit Economics", /financial model|unit economics|cash flow|revenue model/i],
  ["Fundraising & Venture Capital", /fundraising|venture capital|investor|seed funding/i],
  ["Cybersecurity & Data Privacy", /cybersecurity|data privacy|\bpdpa\b|information security/i],
  ["AI Governance & Ethics", /ai governance|responsible ai|ai ethics/i],
  ["Intellectual Property", /intellectual property|\bpatent\b|trademark/i],
  ["Product Metrics & Experimentation", /product metric|a\/b test|experimentation|analytics/i],
  ["Technology Commercialization", /commercialization|go.to.market|\bgtm\b|technology transfer/i]
];

const C10_TECHNICAL_SKILLS = [
  ["Python", /\bpython\b/i],
  ["Machine Learning", /machine learning|\bml\b|scikit.learn|xgboost/i],
  ["Deep Learning", /deep learning|neural network|pytorch|tensorflow|keras/i],
  ["Mathematics & Statistics", /linear algebra|calculus|probability|statistics|mathematical/i],
  ["Research Methodology", /research method|scientific method|literature review/i],
  ["Experimental Design", /experimental design|experiment design|ablation|benchmark/i],
  ["Generative AI & LLM", /generative ai|genai|large language model|\bllms?\b/i],
  ["Computer Vision", /computer vision|image processing|object detection|segmentation/i],
  ["NLP & Speech", /natural language processing|\bnlp\b|speech recognition/i],
  ["Reinforcement Learning", /reinforcement learning|\brl\b/i],
  ["Time Series & Forecasting", /time series|forecasting/i],
  ["Optimization Algorithms", /optimization algorithm|operations research|gradient optimization/i],
  ["Data Engineering", /data pipeline|\betl\b|big data|spark|data engineering/i],
  ["GPU & High-performance Computing", /\bgpu\b|cuda|high.performance computing|\bhpc\b/i],
  ["MLOps & Reproducibility", /mlops|mlflow|experiment tracking|reproducib/i],
  ["Cloud Research Platforms", /\baws\b|azure|\bgcp\b|google cloud|\bcloud\b/i],
  ["Scientific Writing & Publication", /scientific writing|research paper|publication|journal|conference/i],
  ["Version Control", /\bgit\b|github|gitlab|version control/i],
  ["Responsible AI & Ethics", /responsible ai|ai ethics|fairness|explainable ai|\bxai\b/i],
  ["Patents & Technology Transfer", /\bpatent\b|technology transfer|intellectual property/i]
];

const C11_TECHNICAL_SKILLS = [
  ["IT Operations & Support", /it support|technical support|helpdesk|service desk|it operations/i],
  ["Network Administration", /network administration|network engineer|tcp\/ip|router|switch/i],
  ["Systems Administration", /system administration|systems administrator|windows server|linux server/i],
  ["Cybersecurity", /cybersecurity|information security|soc analyst|security operations/i],
  ["Cloud Services", /\baws\b|azure|\bgcp\b|google cloud|cloud service/i],
  ["Database Administration", /database administration|\bdba\b|\bsql\b|database management/i],
  ["Microsoft 365 & Collaboration", /microsoft 365|office 365|sharepoint|teams|exchange online/i],
  ["IT Service Management", /\bitsm\b|\bitil\b|incident management|service management/i],
  ["Digital Government & e-Service", /digital government|e.?government|government digital|e.?service/i],
  ["Enterprise Architecture", /enterprise architecture|solution architecture|it architecture/i],
  ["Systems Analysis", /system analysis|business analysis|requirements analysis/i],
  ["Software & Web Development", /software development|web development|programming|application development/i],
  ["Data Analytics & BI", /data analy|business intelligence|power bi|tableau|dashboard/i],
  ["APIs & System Integration", /\bapis?\b|system integration|data exchange/i],
  ["Data Governance & PDPA", /data governance|\bpdpa\b|data privacy|personal data/i],
  ["Digital Identity & Access", /identity management|access control|active directory|authentication/i],
  ["Procurement & Vendor Management", /procurement|vendor management|tor|terms of reference/i],
  ["Digital Project Delivery", /project management|\bpmp\b|project planning|digital project/i],
  ["Backup & Disaster Recovery", /backup|disaster recovery|business continuity/i],
  ["AI & Process Automation", /artificial intelligence|generative ai|robotic process automation|\brpa\b|automation/i]
];

const C12_TECHNICAL_SKILLS = [
  ["SQL", /\bsql\b|postgres|mysql|sql server/i],
  ["Python", /\bpython\b/i],
  ["R", /(?:^|[,\s])r(?:$|[,\s])|r programming|rstudio/i],
  ["Statistics & Probability", /statistics|probability|hypothesis testing|statistical/i],
  ["Machine Learning", /machine learning|\bml\b|scikit.learn|xgboost/i],
  ["Data Visualization", /data visualization|visualisation|dashboard|matplotlib|seaborn|plotly/i],
  ["Power BI", /power bi|dax|power query/i],
  ["Tableau", /\btableau\b/i],
  ["Excel & Spreadsheets", /\bexcel\b|spreadsheet|pivot table/i],
  ["Data Cleaning & Preparation", /data cleaning|data cleansing|data preparation|data wrangling/i],
  ["Exploratory Data Analysis", /exploratory data analysis|\beda\b/i],
  ["Business Intelligence", /business intelligence|\bbi\b|reporting analyst/i],
  ["Predictive Modeling", /predictive model|forecasting|regression|classification/i],
  ["Deep Learning", /deep learning|neural network|pytorch|tensorflow/i],
  ["NLP", /natural language processing|\bnlp\b|text analytics/i],
  ["Computer Vision", /computer vision|image processing|object detection/i],
  ["Big Data & Spark", /big data|apache spark|\bspark\b|pyspark/i],
  ["Cloud Analytics", /bigquery|snowflake|databricks|redshift|azure synapse|cloud analytics/i],
  ["A/B Testing & Experimentation", /a\/b test|experimentation|experimental design/i],
  ["Data Storytelling", /data storytelling|storytelling with data|insight presentation/i]
];

const C13_TECHNICAL_SKILLS = [
  ["Smart Factory & Industry 4.0", /smart factory|industry 4\.0|manufacturing digitalization/i],
  ["Industrial IoT", /industrial iot|\biiot\b|internet of things|\biot\b/i],
  ["Automation & Control", /automation|control system|industrial control/i],
  ["PLC Programming", /\bplc\b|programmable logic|ladder logic/i],
  ["SCADA & HMI", /scada|\bhmi\b/i],
  ["MES", /\bmes\b|manufacturing execution system/i],
  ["ERP & Production Systems", /\berp\b|sap|production system/i],
  ["Sensors & Instrumentation", /sensor|instrumentation|transmitter|data acquisition/i],
  ["Industrial Networks & Protocols", /profinet|profibus|ethernet.?ip|ethercat|modbus|opc.?ua/i],
  ["Edge Computing", /edge computing|edge device|edge ai/i],
  ["Cloud Platforms", /\baws\b|azure|\bgcp\b|google cloud|\bcloud\b/i],
  ["Data Integration & APIs", /data integration|system integration|\bapis?\b|middleware/i],
  ["Data Analytics & BI", /data analy|business intelligence|power bi|tableau|dashboard/i],
  ["Machine Learning", /machine learning|\bml\b|predictive model/i],
  ["Machine Vision", /machine vision|computer vision|image processing/i],
  ["Digital Twin & Simulation", /digital twin|simulation|virtual commissioning/i],
  ["Robotics & Material Handling", /robotics?|cobot|automated guided vehicle|\bagv\b|\bamr\b/i],
  ["Predictive Maintenance", /predictive maintenance|condition monitoring/i],
  ["OT Cybersecurity", /ot security|industrial cybersecurity|iec 62443|network security/i],
  ["Lean Manufacturing & OEE", /lean manufacturing|overall equipment effectiveness|\boee\b/i]
];

const C14_TECHNICAL_SKILLS = [
  ["Process Engineering", /process engineering|process engineer|manufacturing process/i],
  ["Production Engineering", /production engineering|production engineer|manufacturing engineering/i],
  ["Process Optimization", /process optimization|production optimization|continuous improvement/i],
  ["Production Planning & Scheduling", /production planning|production scheduling|capacity planning/i],
  ["Statistical Process Control", /statistical process control|\bspc\b|control chart/i],
  ["Quality Engineering", /quality engineering|quality control|quality assurance/i],
  ["Lean Manufacturing", /lean manufacturing|lean production|kaizen|value stream/i],
  ["Six Sigma", /six sigma|\bdmaic\b|green belt|black belt/i],
  ["OEE & Manufacturing KPI", /overall equipment effectiveness|\boee\b|manufacturing kpi/i],
  ["Design of Experiments", /design of experiments|\bdoe\b|experimental design/i],
  ["Simulation & Digital Twin", /simulation|digital twin|discrete event/i],
  ["Operations Research", /operations research|linear programming|integer programming/i],
  ["Forecasting & Demand Planning", /forecasting|demand planning|demand forecast/i],
  ["Machine Learning", /machine learning|\bml\b|predictive model/i],
  ["Data Analytics & Visualization", /data analy|data visualization|power bi|tableau|dashboard/i],
  ["Python & R", /\bpython\b|r programming|rstudio/i],
  ["SQL & Manufacturing Data", /\bsql\b|database|manufacturing data/i],
  ["MES & ERP", /\bmes\b|manufacturing execution|\berp\b|\bsap\b/i],
  ["Automation & Control", /automation|control system|\bplc\b|scada/i],
  ["Industrial Standards & Safety", /iso 9001|iso 14001|safety standard|industrial standard/i]
];

const C15_TECHNICAL_SKILLS = [
  ["Decision Support Systems", /decision support system|\bdss\b|decision intelligence/i],
  ["Decision Modeling", /decision model|decision analysis|decision framework/i],
  ["Business Intelligence", /business intelligence|\bbi\b|management information/i],
  ["Data Analytics", /data analy|analytics specialist|insight analysis/i],
  ["SQL & Databases", /\bsql\b|database|postgres|mysql|sql server/i],
  ["Data Warehousing", /data warehouse|data mart|dimensional model/i],
  ["ETL & Data Integration", /\betl\b|\belt\b|data integration|data pipeline/i],
  ["Data Visualization", /data visualization|dashboard|power bi|tableau|looker/i],
  ["Statistics & Probability", /statistics|probability|hypothesis testing/i],
  ["Forecasting", /forecasting|time series|predictive forecast/i],
  ["Operations Research", /operations research|management science/i],
  ["Optimization", /optimization|linear programming|integer programming/i],
  ["Simulation", /simulation|monte carlo|discrete event/i],
  ["Multi-criteria Decision Analysis", /multi.criteria decision|\bmcda\b|\bahp\b/i],
  ["Machine Learning", /machine learning|\bml\b|predictive model/i],
  ["Python & R", /\bpython\b|r programming|rstudio/i],
  ["Excel & Spreadsheet Modeling", /\bexcel\b|spreadsheet|solver|pivot table/i],
  ["APIs & Application Integration", /\bapis?\b|application integration|system integration/i],
  ["GIS & Spatial Decision Support", /\bgis\b|spatial analysis|geographic information/i],
  ["Scenario & Sensitivity Analysis", /scenario analysis|sensitivity analysis|what.if analysis/i]
];

const C16_TECHNICAL_SKILLS = [
  ["Predictive Maintenance", /predictive maintenance|predictive asset maintenance/i],
  ["Condition Monitoring", /condition monitoring|machine condition/i],
  ["Vibration Analysis", /vibration analysis|vibration monitoring/i],
  ["Reliability Engineering", /reliability engineering|reliability engineer/i],
  ["RCM", /reliability centered maintenance|\brcm\b/i],
  ["FMEA & Risk Analysis", /\bfmea\b|failure mode|risk analysis/i],
  ["CMMS & EAM", /\bcmms\b|computerized maintenance|\beam\b|enterprise asset management/i],
  ["Asset Management", /asset management|asset performance|iso 55000/i],
  ["Signal Processing", /signal processing|frequency analysis|fft/i],
  ["Sensors & Data Acquisition", /sensor|data acquisition|\bdaq\b|instrumentation/i],
  ["Industrial IoT", /industrial iot|\biiot\b|internet of things|\biot\b/i],
  ["Anomaly & Fault Detection", /anomaly detection|fault detection|failure detection/i],
  ["Machine Learning", /machine learning|\bml\b|predictive model/i],
  ["Time Series Analytics", /time series|temporal data|trend analysis/i],
  ["Python", /\bpython\b/i],
  ["PLC, SCADA & Historian", /\bplc\b|scada|data historian|pi system/i],
  ["Maintenance Planning", /maintenance planning|preventive maintenance|maintenance schedule/i],
  ["Root Cause Analysis", /root cause analysis|\brca\b|fault tree/i],
  ["Thermography & Lubrication", /thermography|infrared inspection|lubrication analysis|oil analysis/i],
  ["Digital Twin", /digital twin|asset twin|equipment simulation/i]
];

const C17_TECHNICAL_SKILLS = [
  ["Industrial AI", /industrial ai|manufacturing ai|ai industrial/i],
  ["Machine Learning", /machine learning|\bml\b|predictive model/i],
  ["Python", /\bpython\b/i],
  ["Industrial Data Analytics", /industrial data|manufacturing data|data analy|power bi/i],
  ["IIoT & Sensors", /industrial iot|\biiot\b|\biot\b|sensor/i],
  ["Automation & Control", /automation|control system|industrial control/i],
  ["PLC & SCADA", /\bplc\b|scada|\bhmi\b/i],
  ["MES & Manufacturing Systems", /\bmes\b|manufacturing execution|production system/i],
  ["ERP & Supply Chain Systems", /\berp\b|\bsap\b|supply chain system/i],
  ["Machine Vision & AI Quality", /machine vision|computer vision|automated inspection|visual quality/i],
  ["Predictive Maintenance", /predictive maintenance|condition monitoring|reliability/i],
  ["Process Optimization", /process optimization|production optimization|continuous improvement/i],
  ["Robotics", /robotics?|cobot|industrial robot/i],
  ["Digital Twin & Simulation", /digital twin|simulation|virtual commissioning/i],
  ["Edge AI", /edge ai|edge computing|edge device/i],
  ["Cloud Platforms", /\baws\b|azure|\bgcp\b|google cloud|\bcloud\b/i],
  ["Industrial Networks", /profinet|profibus|ethernet.?ip|ethercat|modbus|opc.?ua/i],
  ["OT Cybersecurity", /ot security|industrial cybersecurity|iec 62443/i],
  ["MLOps & Model Deployment", /mlops|model deployment|model monitoring|mlflow/i],
  ["Lean, Six Sigma & OEE", /lean manufacturing|six sigma|\boee\b|kaizen/i]
];

export const CAREER_TECHNICAL_SKILLS = {
  C01: TECHNICAL_SKILLS,
  C02: C02_TECHNICAL_SKILLS,
  C03: C03_TECHNICAL_SKILLS,
  C04: C04_TECHNICAL_SKILLS,
  C05: C05_TECHNICAL_SKILLS,
  C06: C06_TECHNICAL_SKILLS,
  C07: C07_TECHNICAL_SKILLS,
  C08: C08_TECHNICAL_SKILLS,
  C09: C09_TECHNICAL_SKILLS,
  C10: C10_TECHNICAL_SKILLS,
  C11: C11_TECHNICAL_SKILLS,
  C12: C12_TECHNICAL_SKILLS,
  C13: C13_TECHNICAL_SKILLS,
  C14: C14_TECHNICAL_SKILLS,
  C15: C15_TECHNICAL_SKILLS,
  C16: C16_TECHNICAL_SKILLS,
  C17: C17_TECHNICAL_SKILLS
};

function matchCanonical(name, technical = TECHNICAL_SKILLS) {
  for (const [canonical, pattern] of technical) {
    if (pattern.test(name)) return { name: canonical, category: "Technical" };
  }
  for (const [canonical, pattern] of SOFT_SKILLS) {
    if (pattern.test(name)) return { name: canonical, category: "Soft" };
  }
  return null;
}

export function normalizeSkills(skills) {
  const merged = new Map();
  for (const skill of skills || []) {
    const canonical = matchCanonical(skill.name || "");
    if (!canonical) continue;
    const key = canonical.name;
    const previous = merged.get(key);
    merged.set(key, {
      ...canonical,
      required: previous?.required === true || skill.required !== false,
      confidence: Math.max(previous?.confidence || 0, Number(skill.confidence) || 0)
    });
  }
  return [...merged.values()];
}

export function inferSkillsFromText(text) {
  return [...TECHNICAL_SKILLS.map(([name, pattern]) => ({ name, pattern, category: "Technical" })),
    ...SOFT_SKILLS.map(([name, pattern]) => ({ name, pattern, category: "Soft" }))]
    .filter(skill => skill.pattern.test(text || ""))
    .map(({ name, category }) => ({ name, category, required: true, confidence: 0.65 }));
}

export function inferCareerSkillsFromText(careerId, text) {
  const technical = CAREER_TECHNICAL_SKILLS[careerId] || TECHNICAL_SKILLS;
  return [...technical.map(([name, pattern]) => ({ name, pattern, category: "Technical" })),
    ...SOFT_SKILLS.map(([name, pattern]) => ({ name, pattern, category: "Soft" }))]
    .filter(skill => skill.pattern.test(text || ""))
    .map(({ name, category }) => ({ name, category, required: true, confidence: 0.65 }));
}

export function buildSkillCounts(jobs) {
  const counts = new Map();
  for (const job of jobs) {
    for (const skill of job.skills) counts.set(skill.name, (counts.get(skill.name) || 0) + 1);
  }

  return [...TECHNICAL_SKILLS.map(([name]) => ({ name, category: "Technical" })),
    ...SOFT_SKILLS.map(([name]) => ({ name, category: "Soft" }))]
    .map(skill => {
      const count = counts.get(skill.name) || 0;
      return {
        ...skill,
        count,
        percent: Math.round(count * 1000 / jobs.length) / 10
      };
    })
    .sort((a, b) => {
      if (a.category !== b.category) return a.category === "Technical" ? -1 : 1;
      return b.count - a.count || a.name.localeCompare(b.name);
    });
}

export function buildCareerSkillCounts(jobs, careerId) {
  const technical = CAREER_TECHNICAL_SKILLS[careerId] || TECHNICAL_SKILLS;
  const counts = new Map();
  for (const job of jobs) {
    for (const skill of job.skillsByCareer?.[careerId] || []) {
      counts.set(skill.name, (counts.get(skill.name) || 0) + 1);
    }
  }
  return [...technical.map(([name]) => ({ name, category: "Technical" })),
    ...SOFT_SKILLS.map(([name]) => ({ name, category: "Soft" }))]
    .map(skill => {
      const count = counts.get(skill.name) || 0;
      return {
        ...skill,
        count,
        percent: jobs.length ? Math.round(count * 1000 / jobs.length) / 10 : 0
      };
    })
    .sort((a, b) => {
      if (a.category !== b.category) return a.category === "Technical" ? -1 : 1;
      return b.count - a.count || a.name.localeCompare(b.name);
    });
}
