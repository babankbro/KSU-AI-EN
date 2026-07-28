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

function matchCanonical(name) {
  for (const [canonical, pattern] of TECHNICAL_SKILLS) {
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
