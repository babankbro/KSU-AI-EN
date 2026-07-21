import { useState, useMemo } from "react";
import { COURSES, CORE, YLO, YEAR_COLOR, GROUP_NAME, PLO_NAME, SEM_TOTALS, SEM_EXTRA, shortOf } from "./data.js";
import DependencyGraph from "./DependencyGraph.jsx";
import CareerGraph from "./CareerGraph.jsx";

const TABS = [
  { id: "graph", label: "① กราฟ Dependencies" },
  { id: "career", label: "② Track → อาชีพ" },
  { id: "overview", label: "③ ภาพรวมชั้นปี & YLO" },
  { id: "plan", label: "④ แผนการเรียน" },
  { id: "desc", label: "⑤ คำอธิบายรายวิชา" },
];

export default function App() {
  const [tab, setTab] = useState("graph");
  return (
    <>
      <header>
        <h1>หลักสูตรวิศวกรรมศาสตรบัณฑิต — วิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ</h1>
        <div className="sub">มหาวิทยาลัยกาฬสินธุ์ · หลักสูตรปรับปรุง พ.ศ. 2570 · Interactive Curriculum Explorer</div>
        <div className="chips">
          <span className="chip">รวม <b>130</b> นก.</span>
          <span className="chip">แกนบังคับ <b>32</b> วิชา</span>
          <span className="chip">เลือกชีพ <b>45</b> วิชา</span>
          <span className="chip">PLO <b>7</b> ข้อ</span>
          <span className="chip">4 ชั้นปี · 8 ภาคเรียน</span>
        </div>
      </header>
      <nav className="tabs">
        {TABS.map(t => (
          <button key={t.id} className={tab === t.id ? "active" : ""} onClick={() => setTab(t.id)}>{t.label}</button>
        ))}
      </nav>
      {tab === "graph" && <DependencyGraph />}
      {tab === "career" && <CareerGraph />}
      <main>
        {tab === "overview" && <Overview />}
        {tab === "plan" && <Plan />}
        {tab === "desc" && <Descriptions />}
      </main>
    </>
  );
}

function PloBadge({ p, level }) {
  return <span className={`plobadge ${level}`} title={`PLO${p} ${PLO_NAME[p]}`}>P{p}·{level}</span>;
}

function Overview() {
  return (
    <>
      <h2 className="sec">ลำดับการเรียนรายชั้นปี สอดคล้องกับ YLO</h2>
      <div className="years">
        {[1, 2, 3, 4].map(y => {
          const yl = YLO[y];
          const cs = COURSES.filter(c => c.y === y).sort((a, b) => a.sem - b.sem);
          const slots = y === 3 ? ["เลือกชีพ 1", "เลือกชีพ 2"]
            : y === 4 ? ["เลือกชีพ 3", "เลือกชีพ 4", "เลือกชีพ 5", "เลือกเสรี 1", "เลือกเสรี 2"] : [];
          return (
            <div className={`yr y${y}`} key={y}>
              <div className="cap">{yl.title}<small>{yl.sub} · YLO{y}</small></div>
              <div className="ylo">{yl.text}
                <div className="plo">{Object.entries(yl.plo).map(([p, l]) => <PloBadge key={p} p={p} level={l} />)}</div>
              </div>
              <div className="courselist">
                {cs.map(c => (
                  <div className={`cc g-${c.g}`} key={c.c}>
                    <span className="bar" /><span className="code">{c.c.replace("EN-", "").replace("GE-", "GE ")}</span>
                    <span className="nm">{c.s}</span><span className="cr">{c.cr.split("(")[0]}</span>
                  </div>
                ))}
                {slots.map(s => (
                  <div className="cc g-elec" style={{ opacity: 0.7 }} key={s}>
                    <span className="bar" /><span className="code">— —</span><span className="nm">{s}</span><span className="cr">3</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="note warn">
        <b>สายวิกฤต:</b> Programming → ML/DL → Computer Vision/Cloud → วิชาแกนแขนง → Capstone → สหกิจ ·
        Co-requisite: คณิต AI ↔ ML/DL, Digital Twin ↔ Automation, เตรียมโครงงาน ↔ สัมมนา II
      </div>
    </>
  );
}

function Plan() {
  const sems = [1, 2, 3, 4, 5, 6, 7, 8];
  const yrOf = s => Math.ceil(s / 2);
  return (
    <>
      <h2 className="sec">แผนการเรียนตลอดหลักสูตร (130 หน่วยกิต)</h2>
      <div className="planbar">
        {[["ปี 1", 35], ["ปี 2", 37], ["ปี 3", 33], ["ปี 4", 25], ["รวม", 130]].map(([l, n], i) => (
          <div className="b" key={l} style={i === 4 ? { background: "var(--y2bg)" } : null}>{l} <b>{n}</b> นก.</div>
        ))}
      </div>
      <div className="semgrid">
        {sems.map(s => {
          const cs = COURSES.filter(c => c.sem === s);
          const extra = SEM_EXTRA[s] || [];
          return (
            <div className={`sem y${yrOf(s)}`} key={s}>
              <h3>ปี {yrOf(s)} · ภาคเรียน {s} <span className="tot">{SEM_TOTALS[s]} นก.</span></h3>
              <table><tbody>
                {cs.map(c => (
                  <tr key={c.c}><td className="c">{c.c}</td><td>{c.t}</td><td className="k">{c.cr.split("(")[0]}</td></tr>
                ))}
                {extra.map((e, i) => (
                  <tr key={i}><td className="c">EN-133-XX</td><td style={{ opacity: 0.72 }}>{e.s}</td><td className="k">{e.k}</td></tr>
                ))}
              </tbody></table>
            </div>
          );
        })}
      </div>
      <div className="note">ภาคเรียนที่ 8 เป็น <b>สหกิจศึกษาอย่างเดียว</b> (≥16 สัปดาห์) — ต้องผ่านวิชาแกนแขนง ≥75% และโครงงาน (EN-134-104) ก่อน</div>
    </>
  );
}

function Descriptions() {
  const [q, setQ] = useState("");
  const [f, setF] = useState("all");
  const [lang, setLang] = useState("both");   // both | th | en
  const list = useMemo(() => {
    let l = COURSES;
    if (f !== "all") l = l.filter(c => c.g === f);
    if (q) { const s = q.toLowerCase(); l = l.filter(c => (c.c + c.t + c.e + c.s + c.d + c.dEn).toLowerCase().includes(s)); }
    return l;
  }, [q, f]);
  const filters = [["all", "ทั้งหมด"], ["ge", "ศึกษาทั่วไป"], ["eng", "พื้นฐานวิศวฯ"], ["ai", "แกน AI"], ["track", "บังคับแขนง"], ["elec", "เลือกชีพ"], ["proj", "โครงงาน"], ["field", "สหกิจ"]];
  const langs = [["both", "ไทย + อังกฤษ"], ["th", "ไทย"], ["en", "English"]];
  return (
    <>
      <h2 className="sec">คำอธิบายรายวิชา (ตรงตามเอกสาร 04_Course_Descriptions_2570 · ไทย–อังกฤษ)</h2>
      <div className="toolbar">
        <input placeholder="🔍 ค้นหา รหัส / ชื่อวิชา / คำในคำอธิบายไทย–อังกฤษ…" value={q} onChange={e => setQ(e.target.value)} />
        {filters.map(([id, l]) => (
          <button key={id} className={`fbtn ${f === id ? "on" : ""}`} onClick={() => setF(id)}>{l}</button>
        ))}
        <span className="count">{list.length} วิชา</span>
      </div>
      <div className="toolbar">
        <span className="count" style={{ marginLeft: 0 }}>ภาษาที่แสดง</span>
        {langs.map(([id, l]) => (
          <button key={id} className={`fbtn ${lang === id ? "on" : ""}`} onClick={() => setLang(id)}>{l}</button>
        ))}
      </div>
      <div className="note">ซิงก์ข้อมูลกับเอกสารคำอธิบายรายวิชาฉบับล่าสุดแล้ว — วิชาเลือกชีพไล่รหัสใหม่ครบ <b>45 วิชา</b> (แขนง 1: EN-135-101–115 · แขนง 2: 116–130 · แขนง 3: 131–145) ไม่มีรหัสซ้ำ</div>
      {list.map(c => (
        <details className={`course g-${c.g}`} key={c.c}>
          <summary>
            <span className="code">{c.c}</span>
            <span className="nm">{c.t} <span className="en">— {c.e}</span></span>
            <span className="cr">{c.cr}</span>
          </summary>
          <div className="body">
            <div className="meta">
              <span className="tag">{GROUP_NAME[c.g]}</span>
              {c.tr && <span className="tag">Track {c.tr}</span>}
              {c.p.map(p => <span className="tag plo" key={p} title={PLO_NAME[p]}>PLO{p}</span>)}
            </div>
            {lang !== "en" && (
              <div className="desc">
                {lang === "both" && <span className="dlab">TH</span>}{c.d}
              </div>
            )}
            {lang !== "th" && (
              <div className="desc desc-en">
                {lang === "both" && <span className="dlab en">EN</span>}{c.dEn}
              </div>
            )}
            {(c.h || c.w || c.co) && (
              <div className="prq">
                {c.h && <>🔒 บังคับก่อน: {c.h.map(shortOf).join(", ")}&nbsp;&nbsp;</>}
                {c.w && <>💡 แนะนำก่อน: {c.w.map(shortOf).join(", ")}&nbsp;&nbsp;</>}
                {c.co && <>🔁 เรียนคู่: {c.co.map(shortOf).join(", ")}</>}
              </div>
            )}
          </div>
        </details>
      ))}
    </>
  );
}
