import { useMemo, useState } from "react";
import { PageHead, Section } from "./ui.jsx";
import jobsData from "../jobsData.json";
import "../jobs.css";

const PAGE_SIZE = 20;
const CATEGORIES = ["ทั้งหมด", "Technical", "Soft"];
const CAT_CLASS = { Technical: "technical", Soft: "soft" };

function Stat({ value, label, note }) {
  return <div className="job-stat"><b>{value}</b><span>{label}</span>{note && <small>{note}</small>}</div>;
}

function SkillBar({ skill, max }) {
  return (
    <div className="skill-row">
      <div className="skill-name"><b>{skill.name}</b><span>{skill.category}</span></div>
      <div className="skill-track"><i style={{ width: `${skill.count / max * 100}%` }} /></div>
      <div className="skill-num"><b>{skill.count}</b><span>{skill.percent}%</span></div>
    </div>
  );
}

function JobCard({ job }) {
  const [open, setOpen] = useState(false);
  const summary = job.summaryTh || job.summary;
  return (
    <article className="market-job">
      <div className="market-job-head">
        <div>
          <span className="source-id">JobsDB #{job.id}</span>
          <h3>{job.title}</h3>
          <p>{job.company || "ไม่ระบุบริษัท"} · {job.location || "ไม่ระบุสถานที่"}</p>
        </div>
        <a className="source-link" href={job.url} target="_blank" rel="noreferrer">ดูประกาศต้นฉบับ ↗</a>
      </div>
      <div className="job-meta">
        {job.salary && <span className="salary">{job.salary}</span>}
        {job.employment && <span>{job.employment}</span>}
        {job.seniority && <span>{job.seniority}</span>}
        {job.experienceYears != null && <span>ประสบการณ์ ≥ {job.experienceYears} ปี</span>}
        <span>{job.listed}</span>
      </div>
      <p className="job-summary">{summary || "ประกาศไม่ได้แสดงข้อความสรุปในหน้าค้นหา"}</p>
      <div className="skill-chips">
        {job.skills.slice(0, open ? 40 : 12).map(skill => (
          <span className={`skill-chip ${CAT_CLASS[skill.category] || ""}`} key={`${skill.category}-${skill.name}`}>
            {skill.name}{skill.required === false ? " · optional" : ""}
          </span>
        ))}
        {!job.skills.length && <span className="skill-chip">ไม่พบทักษะในกลุ่มมาตรฐาน 30 รายการ</span>}
      </div>
      {open && (
        <div className="job-more">
          {job.degree && <p><b>การศึกษา:</b> {job.degree}</p>}
          {job.requirements && <p><b>หลักฐานคุณสมบัติจากประกาศ:</b> {job.requirements}</p>}
          <p><b>สายงาน:</b> {job.subClassification || "ไม่ระบุ"} {job.classification}</p>
          <p className="job-method">วิธีสกัดทักษะ: {job.skillMethod}</p>
        </div>
      )}
      <button className="job-toggle" onClick={() => setOpen(value => !value)}>
        {open ? "ย่อข้อมูล" : "ดูคุณสมบัติและทักษะทั้งหมด"}
      </button>
    </article>
  );
}

export default function AiEngineerJobs() {
  const careers = jobsData.careers || jobsData.meta.careers || [{
    id: "C01", name: "AI/ML Engineer", query: jobsData.meta.query || "AI Engineer",
    displayedCount: jobsData.meta.displayedCount || jobsData.meta.uniqueJobs
  }];
  const [careerId, setCareerId] = useState(careers.length > 1 ? "ALL" : careers[0].id);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("ทั้งหมด");
  const [skill, setSkill] = useState("");
  const [page, setPage] = useState(1);

  const selectedCareer = careers.find(item => item.id === careerId);
  const scopedJobs = careerId === "ALL"
    ? jobsData.jobs
    : jobsData.jobs.filter(job => job.careerIds?.includes(careerId) || careerId === "C01" && !job.careerIds);
  const scopedSkillCounts = careerId === "ALL"
    ? jobsData.skillCounts
    : jobsData.skillCountsByCareer?.[careerId] || jobsData.skillCounts;
  const technicalSkills = scopedSkillCounts.filter(item => item.category === "Technical");
  const softSkills = scopedSkillCounts.filter(item => item.category === "Soft");
  const maxTechnical = technicalSkills[0]?.count || 1;
  const maxSoft = softSkills[0]?.count || 1;
  const availableSkills = [...technicalSkills, ...softSkills];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return scopedJobs.filter(job => {
      const categoryMatch = category === "ทั้งหมด" || job.skills.some(item => item.category === category);
      const skillMatch = !skill || job.skills.some(item => item.name === skill);
      const haystack = [job.title, job.company, job.location, job.summary, job.summaryTh, job.salary,
        ...job.skills.map(item => item.name)].filter(Boolean).join(" ").toLowerCase();
      return categoryMatch && skillMatch && (!q || haystack.includes(q));
    });
  }, [query, category, skill, careerId, jobsData.jobs]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pages);
  const shown = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  const changeFilter = setter => value => { setter(value); setPage(1); };

  return (
    <main>
      <PageHead
        eyebrow="Jobs & Skills · Labor-market evidence · JobsDB Thailand"
        title={`Jobs & Skills — ${selectedCareer?.name || `${careers.length} Careers`}`}
        lead="ภาพรวมประกาศงานของอาชีพเป้าหมายทั้ง 12 สาย พร้อมข้อมูลรายตำแหน่งและทักษะจากรายละเอียดประกาศ เพื่อใช้ตรวจความสอดคล้องของหลักสูตรกับความต้องการจริง"
        crumbs={[{ label: "Jobs & Skills" }, ...(selectedCareer ? [{ label: `${selectedCareer.id} · ${selectedCareer.name}` }] : [])]} />

      <div className="wrap">
        <div className="job-stats">
          <Stat value={scopedJobs.length.toLocaleString()} label="ประกาศงานไม่ซ้ำ" note={careerId === "ALL" ? `${careers.length} สายอาชีพ` : `คำค้น ${selectedCareer?.query}`} />
          <Stat value={new Set(scopedJobs.map(job => job.company).filter(Boolean)).size.toLocaleString()} label="บริษัท/หน่วยงาน" />
          <Stat value={scopedJobs.filter(job => job.salary).length.toLocaleString()} label="ประกาศที่แสดงเงินเดือน" />
          <Stat value="20 + 10" label="Technical + Soft Skills" />
        </div>

        <div className="jobs-note">
          <b>Snapshot:</b> {jobsData.meta.capturedAt} · แหล่งข้อมูล{" "}
          <a href={selectedCareer?.sourceUrl || "https://th.jobsdb.com/th"} target="_blank" rel="noreferrer">JobsDB Thailand ↗</a> ·
          ผลรวมหน้าแสดง {Number(jobsData.meta.displayedRows || jobsData.meta.displayedCount || scopedJobs.length).toLocaleString()} รายการ
          และรวมประกาศซ้ำข้ามคำค้นเป็น {Number(jobsData.meta.uniqueJobs || scopedJobs.length).toLocaleString()} งานไม่ซ้ำ
        </div>

        <Section title="เลือกสายอาชีพ" sub="ข้อมูลตาม 12 อาชีพเป้าหมายที่ปรากฏในหน้า Careers">
          <div className="jobs-toolbar">
            <select
              value={careerId}
              onChange={event => { setCareerId(event.target.value); setSkill(""); setPage(1); }}
              aria-label="เลือกสายอาชีพ">
              <option value="ALL">ทุกสายอาชีพ ({jobsData.jobs.length.toLocaleString()} งานไม่ซ้ำ)</option>
              {careers.map(item => (
                <option key={item.id} value={item.id}>
                  {item.id} · {item.name} ({Number(item.collectedRows || item.displayedCount || 0).toLocaleString()})
                </option>
              ))}
            </select>
          </div>
        </Section>

        <Section title="Technical 20 + Soft Skills 10" sub="ชื่อมาตรฐานหลังรวมคำซ้ำจากผล Gemini · นับหนึ่งครั้งต่อประกาศงาน">
          <div className="skills-split">
            <div>
              <h3 className="skill-group-title">Technical Skills · 20</h3>
              <div className="skills-panel">
                {technicalSkills.map(item => <SkillBar key={item.name} skill={item} max={maxTechnical} />)}
              </div>
            </div>
            <div>
              <h3 className="skill-group-title">Soft Skills · 10</h3>
              <div className="skills-panel">
                {softSkills.map(item => <SkillBar key={item.name} skill={item} max={maxSoft} />)}
              </div>
            </div>
          </div>
          <div className="evidence-callout">
            <b>สัญญาณจากตลาด:</b> Python, Machine Learning และ SQL เป็นฐานร่วม ขณะที่ Generative AI/LLM,
            Cloud, Data Engineering และทักษะแก้ปัญหาเชิงธุรกิจปรากฏร่วมกันบ่อย สะท้อนว่าตำแหน่ง AI Engineer
            ต้องเชื่อมโมเดลกับข้อมูล ซอฟต์แวร์ และระบบ production ไม่ใช่สร้างโมเดลอย่างเดียว
          </div>
        </Section>

        <Section title="ข้อมูลรายตำแหน่ง" sub={`${filtered.length} งานที่ตรงกับตัวกรอง`}>
          <div className="jobs-toolbar">
            <input
              value={query}
              onChange={event => changeFilter(setQuery)(event.target.value)}
              placeholder="ค้นหาตำแหน่ง บริษัท สถานที่ หรือทักษะ…"
              aria-label="ค้นหาประกาศงาน" />
            <select value={category} onChange={event => changeFilter(setCategory)(event.target.value)} aria-label="กรองหมวดทักษะ">
              {CATEGORIES.map(item => <option key={item}>{item}</option>)}
            </select>
            <select value={skill} onChange={event => changeFilter(setSkill)(event.target.value)} aria-label="กรองทักษะ">
              <option value="">ทุกทักษะ</option>
              {availableSkills.map(item => <option key={`${item.category}-${item.name}`} value={item.name}>{item.name} ({item.count})</option>)}
            </select>
          </div>

          <div className="market-job-list">
            {shown.map(job => <JobCard job={job} key={job.id} />)}
          </div>

          {!shown.length && <div className="note">ไม่พบงานที่ตรงกับตัวกรองนี้</div>}

          <div className="job-pagination">
            <button disabled={safePage === 1} onClick={() => setPage(value => Math.max(1, value - 1))}>← ก่อนหน้า</button>
            <span>หน้า {safePage} / {pages} · แสดง {shown.length} จาก {filtered.length} งาน</span>
            <button disabled={safePage === pages} onClick={() => setPage(value => Math.min(pages, value + 1))}>ถัดไป →</button>
          </div>
        </Section>
      </div>
    </main>
  );
}
