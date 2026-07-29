import { useState } from "react";
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

function recalculateSkillCounts(baseSkills, jobs, getSkills) {
  return baseSkills.map(skill => {
    const count = jobs.filter(job => getSkills(job).some(item => item.name === skill.name)).length;
    return {
      ...skill,
      count,
      percent: jobs.length ? Math.round(count * 1000 / jobs.length) / 10 : 0
    };
  }).sort((a, b) => {
    if (a.category !== b.category) return a.category === "Technical" ? -1 : 1;
    return b.count - a.count || a.name.localeCompare(b.name);
  });
}

function JobCard({ job, skills, contextLabel, classificationMatch }) {
  const [open, setOpen] = useState(false);
  const summary = job.summaryTh || job.summary;
  return (
    <article className="market-job">
      <div className="market-job-head">
        <div>
          <span className="source-id">
            JobsDB #{job.id}
            {contextLabel ? ` · กลุ่ม: ${contextLabel}` : ""}
            {classificationMatch
              ? ` · ${classificationMatch.role} ${Math.round(classificationMatch.confidence * 100)}%`
              : ""}
          </span>
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
        {skills.slice(0, open ? 40 : 12).map(skill => (
          <span className={`skill-chip ${CAT_CLASS[skill.category] || ""}`} key={`${skill.category}-${skill.name}`}>
            {skill.name}{skill.required === false ? " · optional" : ""}
          </span>
        ))}
        {!skills.length && <span className="skill-chip">ไม่พบทักษะในกลุ่มมาตรฐาน 30 รายการ</span>}
      </div>
      {open && (
        <div className="job-more">
          {classificationMatch && (
            <p><b>เหตุผลจำแนกอาชีพ:</b> {classificationMatch.reason}</p>
          )}
          {job.degree && <p><b>การศึกษา:</b> {job.degree}</p>}
          {job.requirements && <p><b>หลักฐานคุณสมบัติจากประกาศ:</b> {job.requirements}</p>}
          <p><b>สายงาน:</b> {job.subClassification || "ไม่ระบุ"} {job.classification}</p>
          <p className="job-method">วิธีสกัดทักษะ: {job.skillMethod}</p>
          <p className="job-method">วิธีจำแนกอาชีพ: {job.classificationMethod}</p>
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
  const [subId, setSubId] = useState("ALL");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("ทั้งหมด");
  const [skill, setSkill] = useState("");
  const [page, setPage] = useState(1);

  const selectedCareer = careers.find(item => item.id === careerId);
  const subcategories = selectedCareer?.subcategories || [];
  const selectedSubcategory = subcategories.find(item => item.id === subId);
  const classifiedJobs = jobsData.jobs.filter(job => job.classifiedMatches?.length);
  const careerJobs = careerId === "ALL"
    ? classifiedJobs
    : classifiedJobs.filter(job =>
      job.classifiedMatches.some(match => match.careerId === careerId));
  const scopedJobs = selectedSubcategory
    ? careerJobs.filter(job =>
      job.classifiedMatches.some(match => match.subId === selectedSubcategory.id))
    : careerJobs;
  const getJobSkills = job => careerId === "ALL"
    ? job.skills || []
    : job.skillsByCareer?.[careerId] || [];
  const baseSkillCounts = careerId === "ALL"
    ? jobsData.skillCounts
    : jobsData.skillCountsByCareer?.[careerId] || jobsData.skillCounts;
  const scopedSkillCounts = selectedSubcategory
    ? recalculateSkillCounts(baseSkillCounts, scopedJobs, getJobSkills)
    : baseSkillCounts;
  const technicalSkills = scopedSkillCounts.filter(item => item.category === "Technical");
  const softSkills = scopedSkillCounts.filter(item => item.category === "Soft");
  const maxTechnical = technicalSkills[0]?.count || 1;
  const maxSoft = softSkills[0]?.count || 1;
  const availableSkills = [...technicalSkills, ...softSkills];

  const q = query.trim().toLowerCase();
  const filtered = scopedJobs.filter(job => {
    const jobSkills = getJobSkills(job);
    const categoryMatch = category === "ทั้งหมด" || jobSkills.some(item => item.category === category);
    const skillMatch = !skill || jobSkills.some(item => item.name === skill);
    const haystack = [job.title, job.company, job.location, job.summary, job.summaryTh, job.salary,
      ...jobSkills.map(item => item.name)].filter(Boolean).join(" ").toLowerCase();
    return categoryMatch && skillMatch && (!q || haystack.includes(q));
  });

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pages);
  const shown = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  const changeFilter = setter => value => { setter(value); setPage(1); };

  return (
    <main>
      <PageHead
        eyebrow="Jobs & Skills · Labor-market evidence · JobsDB Thailand"
        title={`Jobs & Skills — ${selectedCareer?.name || `${careers.length} Careers`}`}
        lead={`ภาพรวมประกาศงานของอาชีพเป้าหมายทั้ง ${careers.length} สาย พร้อมข้อมูลรายตำแหน่งและทักษะจากรายละเอียดประกาศ เพื่อใช้ตรวจความสอดคล้องของหลักสูตรกับความต้องการจริง`}
        crumbs={[{ label: "Jobs & Skills" }, ...(selectedCareer ? [{ label: `${selectedCareer.id} · ${selectedCareer.name}` }] : [])]} />

      <div className="wrap">
        <div className="job-stats">
          <Stat value={scopedJobs.length.toLocaleString()} label="งานที่ผ่านการจำแนก"
            note={careerId === "ALL" ? `${careers.length} สายอาชีพ` : "Primary + Secondary ที่ผ่านเกณฑ์"} />
          <Stat value={new Set(scopedJobs.map(job => job.company).filter(Boolean)).size.toLocaleString()} label="บริษัท/หน่วยงาน" />
          <Stat value={scopedJobs.filter(job => job.salary).length.toLocaleString()} label="ประกาศที่แสดงเงินเดือน" />
          <Stat value="20 + 10" label="Technical + Soft Skills" />
        </div>

        <div className="jobs-note">
          <b>Snapshot:</b> {jobsData.meta.capturedAt} · แหล่งข้อมูล{" "}
          <a href={selectedSubcategory?.sourceUrl || selectedCareer?.sourceUrl || "https://th.jobsdb.com/th"} target="_blank" rel="noreferrer">JobsDB Thailand ↗</a> ·
          Raw {Number(jobsData.meta.rawUniqueJobs || jobsData.jobs.length).toLocaleString()} Job IDs ·
          ผ่าน semantic classification {classifiedJobs.length.toLocaleString()} งาน ·
          ขอบเขตที่เลือก {scopedJobs.length.toLocaleString()} งาน
        </div>

        <Section title="เลือกสายอาชีพ" sub={`ข้อมูลตาม ${careers.length} อาชีพเป้าหมายที่ปรากฏในหน้า Careers`}>
          <div className="jobs-toolbar">
            <select
              value={careerId}
              onChange={event => {
                setCareerId(event.target.value);
                setSubId("ALL");
                setQuery("");
                setCategory("ทั้งหมด");
                setSkill("");
                setPage(1);
              }}
              aria-label="เลือกสายอาชีพ">
              <option value="ALL">ทุกสายอาชีพ ({classifiedJobs.length.toLocaleString()} งานที่ผ่านการจำแนก)</option>
              {careers.map(item => (
                <option key={item.id} value={item.id}>
                  {item.id} · {item.name} ({classifiedJobs
                    .filter(job => job.classifiedMatches.some(match => match.careerId === item.id))
                    .length.toLocaleString()} งาน)
                </option>
              ))}
            </select>
            {!!subcategories.length && (
              <select
                value={subId}
                onChange={event => {
                  setSubId(event.target.value);
                  setQuery("");
                  setCategory("ทั้งหมด");
                  setSkill("");
                  setPage(1);
                }}
                aria-label="เลือกกลุ่มงานย่อย">
                <option value="ALL">ทุกกลุ่มย่อย {careerId} ({careerJobs.length.toLocaleString()} งานไม่ซ้ำ)</option>
                {subcategories.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name} ({careerJobs
                      .filter(job => job.classifiedMatches.some(match => match.subId === item.id))
                      .length.toLocaleString()} งาน)
                  </option>
                ))}
              </select>
            )}
          </div>
        </Section>

        <Section
          title={`Technical 20 + Soft Skills 10${selectedCareer ? ` · ${selectedCareer.id}` : ""}`}
          sub={`${selectedSubcategory?.name || selectedCareer?.name || "ทุกสายอาชีพ"} · คำนวณจาก ${scopedJobs.length.toLocaleString()} งานไม่ซ้ำ · นับหนึ่งครั้งต่อประกาศงาน`}>
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
            <b>สัญญาณจากตลาด {selectedSubcategory?.name || selectedCareer?.name || "ทุกสายอาชีพ"}:</b>{" "}
            {technicalSkills.slice(0, 8).map(item => item.name).join(", ")}
            {" "}เป็นทักษะเทคนิคที่พบสูงสุดในขอบเขตงานที่เลือก โดยคำนวณใหม่จากรายละเอียดประกาศงานของกลุ่มนั้น
          </div>
        </Section>

        <Section
          title="ข้อมูลรายตำแหน่ง"
          sub={`${selectedSubcategory?.name || selectedCareer?.name || "ทุกสายอาชีพ"} · ${filtered.length} งานที่ตรงกับตัวกรอง`}>
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

          <div className="market-job-list" key={`${careerId}-${subId}`}>
            {shown.map(job => (
              <JobCard
                job={job}
                skills={getJobSkills(job)}
                contextLabel={selectedSubcategory?.name || selectedCareer?.name || "ทุกสายอาชีพ"}
                classificationMatch={
                  careerId === "ALL"
                    ? job.classifiedMatches.find(match => match.role === "Primary")
                    : job.classifiedMatches.find(match => match.careerId === careerId)
                }
                key={`${careerId}-${subId}-${job.id}`} />
            ))}
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
