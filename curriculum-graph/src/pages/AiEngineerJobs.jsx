import { useEffect, useMemo, useRef, useState } from "react";
import { PageHead, Section } from "./ui.jsx";
import jobsIndex from "../jobsIndex.json";
import "../jobs.css";

const PAGE_SIZE = 20;
const CATEGORIES = ["ทั้งหมด", "Technical", "Soft"];
const CAT_CLASS = { Technical: "technical", Soft: "soft" };
const detailShardCache = new Map();
const scopeModules = import.meta.glob("../jobsRuntime/scopes/*.json", { import: "default" });
const detailModules = import.meta.glob("../jobsRuntime/details/*.json", { import: "default" });

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

function recalculateSkillCounts(baseSkills, jobs) {
  return baseSkills.map(skill => {
    const count = jobs.filter(job => job.skills.some(item => item.name === skill.name)).length;
    return {
      ...skill,
      count,
      percent: jobs.length ? Math.round(count * 1000 / jobs.length) / 10 : 0,
    };
  }).sort((a, b) => {
    if (a.category !== b.category) return a.category === "Technical" ? -1 : 1;
    return b.count - a.count || a.name.localeCompare(b.name);
  });
}

async function loadJobDetails(id) {
  const numericId = Number(String(id).replace(/\D/g, "")) || 0;
  const file = `${String(numericId % (jobsIndex.meta.detailShards || 32)).padStart(2, "0")}.json`;
  if (!detailShardCache.has(file)) {
    const loader = detailModules[`../jobsRuntime/details/${file}`];
    if (!loader) throw new Error(`Missing detail shard ${file}`);
    detailShardCache.set(file, loader());
  }
  const shard = await detailShardCache.get(file);
  return shard[id] || {};
}

function JobCard({ job, contextLabel }) {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState("");
  const classificationMatch = job.matches?.find(match => match.role === "Primary") || job.matches?.[0];

  const toggle = async () => {
    const next = !open;
    setOpen(next);
    if (!next || details || detailLoading) return;
    setDetailLoading(true);
    setDetailError("");
    try {
      setDetails(await loadJobDetails(job.id));
    } catch {
      setDetailError("ไม่สามารถโหลดรายละเอียดเพิ่มเติมได้");
    } finally {
      setDetailLoading(false);
    }
  };

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
      <p className="job-summary">{job.summaryTh || "ประกาศไม่ได้แสดงข้อความสรุปในหน้าค้นหา"}</p>
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
          {detailLoading && <p className="job-method">กำลังโหลดรายละเอียดฉบับเต็ม…</p>}
          {detailError && <p className="job-method">{detailError}</p>}
          {classificationMatch?.reason && <p><b>เหตุผลจำแนกอาชีพ:</b> {classificationMatch.reason}</p>}
          {details?.degree && <p><b>การศึกษา:</b> {details.degree}</p>}
          {details?.requirements && <p><b>หลักฐานคุณสมบัติจากประกาศ:</b> {details.requirements}</p>}
          {details && (
            <>
              <p><b>สายงาน:</b> {details.subClassification || "ไม่ระบุ"} {details.classification}</p>
              <p className="job-method">วิธีสกัดทักษะ: {details.skillMethod}</p>
              <p className="job-method">วิธีจำแนกอาชีพ: {details.classificationMethod}</p>
            </>
          )}
        </div>
      )}
      <button className="job-toggle" onClick={toggle}>
        {open ? "ย่อข้อมูล" : "ดูคุณสมบัติและทักษะทั้งหมด"}
      </button>
    </article>
  );
}

export default function AiEngineerJobs() {
  const careers = jobsIndex.careers;
  const [careerId, setCareerId] = useState(careers.length > 1 ? "ALL" : careers[0].id);
  const [subId, setSubId] = useState("ALL");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("ทั้งหมด");
  const [skill, setSkill] = useState("");
  const [page, setPage] = useState(1);
  const [jobsEnabled, setJobsEnabled] = useState(false);
  const [scopeJobs, setScopeJobs] = useState([]);
  const [scopeLoading, setScopeLoading] = useState(false);
  const [scopeError, setScopeError] = useState("");
  const jobsLoadRef = useRef(null);

  const selectedCareer = careers.find(item => item.id === careerId);
  const subcategories = selectedCareer?.subcategories || [];
  const selectedSubcategory = subcategories.find(item => item.id === subId);
  const scopeKey = careerId === "ALL" ? "all" : careerId.toLowerCase();

  useEffect(() => {
    if (!jobsLoadRef.current || jobsEnabled) return undefined;
    if (!("IntersectionObserver" in window)) {
      setJobsEnabled(true);
      return undefined;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setJobsEnabled(true);
        observer.disconnect();
      }
    }, { rootMargin: "500px 0px" });
    observer.observe(jobsLoadRef.current);
    return () => observer.disconnect();
  }, [jobsEnabled]);

  useEffect(() => {
    if (!jobsEnabled) return undefined;
    let active = true;
    setScopeLoading(true);
    setScopeError("");
    setScopeJobs([]);
    const loader = scopeModules[`../jobsRuntime/scopes/${scopeKey}.json`];
    if (!loader) {
      setScopeError("ไม่พบชุดข้อมูลอาชีพที่เลือก");
      setScopeLoading(false);
      return () => { active = false; };
    }
    loader()
      .then(jobs => {
        if (active) setScopeJobs(jobs);
      })
      .catch(() => {
        if (active) setScopeError("ไม่สามารถโหลดรายการงานได้ กรุณาลองใหม่");
      })
      .finally(() => {
        if (active) setScopeLoading(false);
      });
    return () => { active = false; };
  }, [jobsEnabled, scopeKey]);

  const scopedJobs = useMemo(() => selectedSubcategory
    ? scopeJobs.filter(job => job.matches.some(match => match.subId === selectedSubcategory.id))
    : scopeJobs, [scopeJobs, selectedSubcategory]);
  const baseSkillCounts = careerId === "ALL"
    ? jobsIndex.skillCounts
    : jobsIndex.skillCountsByCareer?.[careerId] || jobsIndex.skillCounts;
  const scopedSkillCounts = selectedSubcategory && scopeJobs.length
    ? recalculateSkillCounts(baseSkillCounts, scopedJobs)
    : baseSkillCounts;
  const technicalSkills = scopedSkillCounts.filter(item => item.category === "Technical");
  const softSkills = scopedSkillCounts.filter(item => item.category === "Soft");
  const maxTechnical = technicalSkills[0]?.count || 1;
  const maxSoft = softSkills[0]?.count || 1;
  const availableSkills = [...technicalSkills, ...softSkills];
  const indexedStats = careerId === "ALL"
    ? jobsIndex.stats.all
    : jobsIndex.stats.byCareer[careerId];
  const scopeStats = selectedSubcategory && scopeJobs.length
    ? {
      jobs: scopedJobs.length,
      companies: new Set(scopedJobs.map(job => job.company).filter(Boolean)).size,
      salary: scopedJobs.filter(job => job.salary).length,
    }
    : indexedStats;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return scopedJobs.filter(job => {
      const categoryMatch = category === "ทั้งหมด" || job.skills.some(item => item.category === category);
      const skillMatch = !skill || job.skills.some(item => item.name === skill);
      const haystack = [
        job.title, job.company, job.location, job.summaryTh, job.salary,
        ...job.skills.map(item => item.name),
      ].filter(Boolean).join(" ").toLowerCase();
      return categoryMatch && skillMatch && (!q || haystack.includes(q));
    });
  }, [scopedJobs, query, category, skill]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pages);
  const shown = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  const changeFilter = setter => value => { setter(value); setPage(1); };
  const contextLabel = selectedSubcategory?.name || selectedCareer?.name || "ทุกสายอาชีพ";

  return (
    <main>
      <PageHead
        eyebrow="Jobs & Skills · Labor-market evidence · JobsDB Thailand"
        title={`Jobs & Skills — ${selectedCareer?.name || `${careers.length} Careers`}`}
        lead={`ภาพรวมประกาศงานของกลุ่มอาชีพตลาดแรงงาน C01–C17 จำนวน ${careers.length} สาย พร้อมข้อมูลรายตำแหน่งและทักษะจากรายละเอียดประกาศ เพื่อใช้ตรวจความสอดคล้องของหลักสูตรกับความต้องการจริง`}
        crumbs={[{ label: "Jobs & Skills" }, ...(selectedCareer ? [{ label: `${selectedCareer.id} · ${selectedCareer.name}` }] : [])]} />

      <div className="wrap">
        <div className="job-stats">
          <Stat value={scopeStats.jobs.toLocaleString()} label="งานที่ผ่านการจำแนก"
            note={careerId === "ALL" ? `${careers.length} สายอาชีพ` : "Primary + Secondary ที่ผ่านเกณฑ์"} />
          <Stat value={scopeStats.companies.toLocaleString()} label="บริษัท/หน่วยงาน" />
          <Stat value={scopeStats.salary.toLocaleString()} label="ประกาศที่แสดงเงินเดือน" />
          <Stat value="20 + 10" label="Technical + Soft Skills" />
        </div>

        <div className="jobs-note">
          <b>Snapshot:</b> {jobsIndex.meta.capturedAt} · แหล่งข้อมูล{" "}
          <a href={selectedSubcategory?.sourceUrl || selectedCareer?.sourceUrl || "https://th.jobsdb.com/th"} target="_blank" rel="noreferrer">JobsDB Thailand ↗</a> ·
          Raw {Number(jobsIndex.meta.rawUniqueJobs).toLocaleString()} Job IDs ·
          ผ่าน semantic classification {jobsIndex.meta.classifiedJobs.toLocaleString()} งาน ·
          ขอบเขตที่เลือก {scopeStats.jobs.toLocaleString()} งาน
        </div>

        <Section title="เลือกสายอาชีพ" sub={`ข้อมูล JobsDB ตามกลุ่มอาชีพตลาดแรงงาน C01–C17 จำนวน ${careers.length} สาย; อาชีพต่อยอด C18–C26 แสดงในหน้า Careers และยังไม่รวมในฐานจำแนก JobsDB รอบนี้`}>
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
              <option value="ALL">ทุกสายอาชีพ ({jobsIndex.stats.all.jobs.toLocaleString()} งานที่ผ่านการจำแนก)</option>
              {careers.map(item => (
                <option key={item.id} value={item.id}>
                  {item.id} · {item.name} ({item.classifiedCount.toLocaleString()} งาน)
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
                <option value="ALL">ทุกกลุ่มย่อย {careerId} ({selectedCareer.classifiedCount.toLocaleString()} งานไม่ซ้ำ)</option>
                {subcategories.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name} ({item.classifiedCount.toLocaleString()} งาน)
                  </option>
                ))}
              </select>
            )}
          </div>
        </Section>

        <Section
          title={`Technical 20 + Soft Skills 10${selectedCareer ? ` · ${selectedCareer.id}` : ""}`}
          sub={`${contextLabel} · คำนวณจาก ${scopeStats.jobs.toLocaleString()} งานไม่ซ้ำ · นับหนึ่งครั้งต่อประกาศงาน`}>
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
            <b>สัญญาณจากตลาด {contextLabel}:</b>{" "}
            {technicalSkills.slice(0, 8).map(item => item.name).join(", ")}
            {" "}เป็นทักษะเทคนิคที่พบสูงสุดในขอบเขตงานที่เลือก โดยคำนวณจากรายละเอียดประกาศงานของกลุ่มนั้น
          </div>
        </Section>

        <div ref={jobsLoadRef} aria-hidden="true" />
        <Section
          title="ข้อมูลรายตำแหน่ง"
          sub={`${contextLabel} · ${scopeLoading ? "กำลังโหลด…" : `${filtered.length} งานที่ตรงกับตัวกรอง`}`}>
          <div className="jobs-toolbar">
            <input
              value={query}
              onChange={event => changeFilter(setQuery)(event.target.value)}
              placeholder="ค้นหาตำแหน่ง บริษัท สถานที่ หรือทักษะ…"
              aria-label="ค้นหาประกาศงาน"
              disabled={scopeLoading} />
            <select value={category} onChange={event => changeFilter(setCategory)(event.target.value)}
              aria-label="กรองหมวดทักษะ" disabled={scopeLoading}>
              {CATEGORIES.map(item => <option key={item}>{item}</option>)}
            </select>
            <select value={skill} onChange={event => changeFilter(setSkill)(event.target.value)}
              aria-label="กรองทักษะ" disabled={scopeLoading}>
              <option value="">ทุกทักษะ</option>
              {availableSkills.map(item => <option key={`${item.category}-${item.name}`} value={item.name}>{item.name} ({item.count})</option>)}
            </select>
          </div>

          {(!jobsEnabled || scopeLoading) && (
            <div className="jobs-loading" role="status">
              <span className="jobs-spinner" />
              <div><b>กำลังโหลดข้อมูลรายตำแหน่ง</b><small>ส่วนสรุปและทักษะพร้อมใช้งานแล้ว</small></div>
            </div>
          )}
          {scopeError && (
            <div className="note">
              {scopeError}{" "}
              <button className="job-toggle" onClick={() => {
                setJobsEnabled(false);
                requestAnimationFrame(() => setJobsEnabled(true));
              }}>ลองใหม่</button>
            </div>
          )}

          <div className="market-job-list" key={`${careerId}-${subId}`}>
            {shown.map(job => (
              <JobCard job={job} contextLabel={contextLabel} key={`${careerId}-${subId}-${job.id}`} />
            ))}
          </div>

          {!scopeLoading && !scopeError && jobsEnabled && !shown.length && (
            <div className="note">ไม่พบงานที่ตรงกับตัวกรองนี้</div>
          )}

          {!scopeLoading && !!shown.length && (
            <div className="job-pagination">
              <button disabled={safePage === 1} onClick={() => setPage(value => Math.max(1, value - 1))}>← ก่อนหน้า</button>
              <span>หน้า {safePage} / {pages} · แสดง {shown.length} จาก {filtered.length} งาน</span>
              <button disabled={safePage === pages} onClick={() => setPage(value => Math.min(pages, value + 1))}>ถัดไป →</button>
            </div>
          )}
        </Section>
      </div>
    </main>
  );
}
