import { useState } from "react";
import { Link } from "react-router-dom";
import "../obe.css";
import { PageHead, Section } from "./ui.jsx";
import { PLO_DETAIL, YLO_DETAIL, COURSES, PLO_NAME } from "../data.js";
import {
  STAKEHOLDERS, PRIO_INFO, NEEDS, NEED_LEVEL, HARD_SKILLS, SOFT_SKILLS,
  ENGINEERING_FOUNDATIONS, LEVELS, GROUPS, SKILL_SETS, KSA, GA, REFS, BENCHMARKS, SKILL_CORE_RULE
} from "../obeData.js";
import Alluvial from "../Alluvial.jsx";
import { VIEWS } from "../alluvialViews.js";

const STEPS = [
  { n: 1, id: "sh",    label: "ผู้มีส่วนได้ส่วนเสีย", en: "Stakeholders", tag: "SH1–SH8" },
  { n: 2, id: "needs", label: "ความต้องการ",         en: "Needs",        tag: "N1–N18" },
  { n: 3, id: "ga",    label: "ลักษณะบัณฑิต",        en: "Graduate Attributes", tag: "GA1–GA5" },
  { n: 4, id: "skill", label: "ทักษะเป้าหมายและฐานวิศวกรรม", en: "Target Skills & Engineering Foundations", tag: "H1–H20 · S1–S10 · EF1–EF6" },
  { n: 5, id: "set",   label: "ชุดทักษะ",             en: "Skill Sets",   tag: "AISK01–09" },
  { n: 6, id: "plo",   label: "ผลลัพธ์หลักสูตร",       en: "PLO",          tag: "PLO1–7" },
  { n: 7, id: "ylo",   label: "ผลลัพธ์รายชั้นปี",      en: "YLO",          tag: "YLO1–4" },
  { n: 8, id: "clo",   label: "ผลลัพธ์รายวิชา + KSA", en: "CLO · KSA",    tag: "K–S–A" }
];

const jump = id => e => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const setById = id => SKILL_SETS.find(s => s.id === id);
const skillById = id => [...HARD_SKILLS, ...SOFT_SKILLS, ...ENGINEERING_FOUNDATIONS].find(s => s.id === id);

const TRACK_SHORT = { T1: "T1 เกษตร", T2: "T2 อุตสาหกรรม", T3: "T3 องค์กร" };

/* แถวทักษะเป้าหมาย — คลิกเพื่อขยายดูรายละเอียดจาก 03_Target_Skills.md */
function SkillRow({ s, open, onToggle }) {
  const setIds = s.sets || (s.set ? [s.set] : []);
  return (
    <div className={`skill-row${s.core ? "" : " ext"}${open ? " open" : ""}`}>
      <button className="skill-head" onClick={onToggle} aria-expanded={open}>
        <span className="obe-code sm">{s.id}</span>
        <span className="skill-nm">{s.name}</span>
        {!s.core && <span className="ext-tag">ส่วนขยาย</span>}
        {setIds.map(id => <span className="setchip sm" key={id}>{id}</span>)}
        <span className="skill-caret">{open ? "▾" : "▸"}</span>
      </button>

      {open && (
        <div className="skill-body">
          <div className="skill-tracks">
            {Object.entries(s.track).map(([t, mark]) => (
              <span key={t} className={`sk-tr${mark === "●" ? " main" : ""}`}>
                <i>{mark}</i> {TRACK_SHORT[t]}
              </span>
            ))}
          </div>

          <p className="skill-scope">{s.scope}</p>

          <dl className="skill-meta">
            <div><dt>📈 หลักฐานตลาด</dt><dd>{s.market}</dd></div>
            {s.bench && <div><dt>🌏 เทียบเคียงมาตรฐาน</dt><dd>{s.bench}</dd></div>}
            {s.act && <div><dt>🧭 พฤติกรรมที่คาดหวัง</dt><dd>{s.act}</dd></div>}
            <div><dt>🎯 ระดับเป้าหมาย</dt><dd>{s.level}</dd></div>
            {s.link && <div><dt>🔗 ผูกกับทักษะแกน</dt><dd>{s.link}</dd></div>}
            <div>
              <dt>🧩 ชุดทักษะ</dt>
              <dd>
                {setIds.map(id => <span className="setchip sm" key={id}>{id}</span>)}{" "}
                {st ? st.name : ""}
              </dd>
            </div>
          </dl>

          <div className="skill-foot">
            <span className="lab">PLO ที่รองรับ</span>
            {s.plo.map(p => (
              <Link key={p} to={`/plo/${p}`} className="plo-mini" style={{ "--pc": `var(--plo${p})` }}>PLO{p}</Link>
            ))}
            <span className="lab">รายวิชาหลัก</span>
            {s.courses.map(c => {
              const co = COURSES.find(x => x.c === c);
              return co
                ? <Link key={c} to={`/courses/${c}`} className="cchip" title={co.t}>{c}</Link>
                : <span key={c} className="cchip off">{c}</span>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Obe() {
  const [need, setNeed] = useState(null);   // N id ที่เลือก
  const [openSet, setOpenSet] = useState(null);
  const [openSkill, setOpenSkill] = useState(null);
  const [ksaPlo, setKsaPlo] = useState(1);
  const [view, setView] = useState(VIEWS[0].id);

  const activeSets = need ? NEEDS.find(n => n.id === need)?.sets || [] : [];
  const curView = VIEWS.find(v => v.id === view) || VIEWS[0];
  const vd = curView.build();

  return (
    <main className="obe">
      <PageHead
        eyebrow="กระบวนการออกแบบหลักสูตรแบบมุ่งผลลัพธ์ · Outcome-Based Education"
        title="ขั้นตอนการวิเคราะห์ OBE"
        lead="ห่วงโซ่การออกแบบหลักสูตรที่สอบย้อนกลับได้ทั้งเส้น ตั้งแต่เสียงของผู้มีส่วนได้ส่วนเสีย จนถึงผลลัพธ์รายวิชาและชุดทักษะที่ออกเป็น Skill Transcript"
        crumbs={[{ label: "ขั้นตอน OBE" }]} />

      <div className="wrap">

        {/* ─── แผนผังห่วงโซ่ ─── */}
        <Section title="ภาพรวมห่วงโซ่ OBE" sub="คลิกที่ขั้นตอนเพื่อเลื่อนไปยังหัวข้อ">
          <div className="obe-flow">
            {STEPS.map((s, i) => (
              <div className="obe-flow-item" key={s.id}>
                <a href={`#${s.id}`} onClick={jump(s.id)} className="obe-step">
                  <span className="obe-step-n">{s.n}</span>
                  <b>{s.label}</b>
                  <small>{s.en}</small>
                  <span className="obe-step-tag">{s.tag}</span>
                </a>
                {i < STEPS.length - 1 && <span className="obe-arrow">→</span>}
              </div>
            ))}
          </div>
          <p className="obe-note">
            หลักการ: <b>ทุกองค์ประกอบต้องสอบย้อนกลับได้</b> — ทักษะทุกตัวต้องมาจาก Need ของผู้มีส่วนได้ส่วนเสียจริง
            และต้องถูกวัดผลที่รายวิชาใดรายวิชาหนึ่ง (Constructive Alignment ตาม AUN-QA Criterion 1) ·
            <a href="#alluvial" onClick={jump("alluvial")} className="obe-inline"> ดูแผนภาพสายธารความเชื่อมโยง →</a>
          </p>
        </Section>

        {/* ─── แผนภาพสายธาร (Alluvial) ─── */}
        <Section id="alluvial" title="แผนภาพสายธารความเชื่อมโยง (Alluvial Diagram)"
          sub="เลือกมุมมองเพื่อดูว่าแต่ละองค์ประกอบไหลเชื่อมกันอย่างไร">
          <div className="alv-pick">
            {VIEWS.map(v => (
              <button key={v.id} className={`alv-tab${view === v.id ? " on" : ""}`}
                onClick={() => setView(v.id)}>{v.name}</button>
            ))}
          </div>
          <p className="alv-desc">{curView.desc}</p>
          <Alluvial columns={vd.columns} nodes={vd.nodes} links={vd.links} height={vd.height} />
        </Section>

        {/* ─── 1 · Stakeholders ─── */}
        <Section id="sh" title="① ผู้มีส่วนได้ส่วนเสีย (SH1–SH8)"
          sub="จัดลำดับด้วย Power–Interest Matrix · แกนตั้ง = อำนาจต่อการตัดสินใจหลักสูตร · แกนนอน = ระดับความสนใจ/ผลกระทบที่ได้รับ">
          <div className="pim">
            <div className="pim-axis pim-x">
              <span>Interest สูง</span><span>Interest ต่ำ / เป็นครั้งคราว</span>
            </div>

            {[["HPHI", "HPLI"], ["LPHI", "LPLI"]].map((row, ri) => (
              <div className="pim-row" key={ri}>
                <div className="pim-axis pim-y"><span>{ri === 0 ? "Power สูง" : "Power ต่ำ"}</span></div>
                {row.map(code => {
                  const p = PRIO_INFO[code];
                  const list = STAKEHOLDERS.filter(s => s.prio === code);
                  return (
                    <div className="pim-q" key={code} style={{ "--ac": p.color }}>
                      <div className="pim-qh">
                        <b>{code}</b>
                        <span className="pim-strat">{p.label}</span>
                        <small>{p.desc}</small>
                      </div>
                      {list.map(s => (
                        <div className="pim-sh" key={s.id}>
                          <div className="pim-shtop">
                            <span className="obe-code">{s.id}</span>
                            <b>{s.name}</b>
                          </div>
                          <p>{s.expect}</p>
                          <div className="sh-needs">
                            {s.needs.map(n => (
                              <button key={n} className={`nchip${need === n ? " on" : ""}`}
                                onClick={() => setNeed(need === n ? null : n)}>{n}</button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <p className="obe-note">
            <b>SH1 (นายจ้าง/ผู้ใช้บัณฑิต) อยู่กลุ่ม HPHI</b> จึงต้องมีส่วนร่วมตั้งแต่กำหนด Needs ทวนสอบ PLO
            ให้โจทย์โครงงาน/สหกิจ จนถึงประเมินผลบัณฑิต · คลิกรหัส <b>N</b> เพื่อดูว่าความต้องการนั้นตอบด้วยชุดทักษะใด
          </p>
        </Section>

        {/* ─── 2 · Needs ─── */}
        <Section id="needs" title="② ความต้องการ (N1–N18)" sub="N1–N11 จากผลสำรวจผู้มีส่วนได้ส่วนเสีย · N12–N18 เชิงแนวโน้มสากล/นโยบายชาติ">
          <div className="obe-legend">
            {Object.entries(NEED_LEVEL).map(([k, v]) => (
              <span key={k}><i style={{ background: v.color }} />{v.label}</span>
            ))}
            {need && <button className="obe-clear" onClick={() => setNeed(null)}>✕ ล้างการเลือก {need}</button>}
          </div>
          <div className="obe-tablewrap">
            <table className="obe-table needtbl">
              <thead>
                <tr>
                  <th>Need</th><th>ที่มา</th><th>ความต้องการ</th><th>หลักฐานสนับสนุน</th>
                  <th>ชุดทักษะที่ตอบ</th><th>PLO</th><th>ระดับ</th>
                </tr>
              </thead>
              <tbody>
                {NEEDS.map(n => {
                  const lv = NEED_LEVEL[n.level];
                  const on = need === n.id;
                  return (
                    <tr key={n.id} className={`needrow${on ? " on" : ""}`} style={{ "--ac": lv.color }}
                      onClick={() => setNeed(on ? null : n.id)}>
                      <td><span className="obe-code">{n.id}</span></td>
                      <td className="small nowrap">{n.src === "survey" ? "ผลสำรวจ" : "เชิงแนวโน้ม"}</td>
                      <td className="needtxt">{n.text}</td>
                      <td className="small">{n.evidence}</td>
                      <td>
                        <div className="cellchips">
                          {n.sets.map(s => <span className="setchip" key={s}>{s}</span>)}
                        </div>
                      </td>
                      <td>
                        <div className="cellchips">
                          {n.plo.map(p => (
                            <Link to={`/plo/${p}`} className="plo-mini" key={p}
                              style={{ "--pc": `var(--plo${p})` }} onClick={e => e.stopPropagation()}>PLO{p}</Link>
                          ))}
                        </div>
                      </td>
                      <td className="nowrap"><span className="lvdot" style={{ background: lv.color }} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="obe-note">คลิกแถวเพื่อไฮไลต์ชุดทักษะที่ตอบความต้องการนั้นในหัวข้อ ⑤ ด้านล่าง</p>
        </Section>

        {/* ─── 3 · GA ─── */}
        <Section id="ga" title="③ ลักษณะบัณฑิต (GA1–GA5)" sub="เชื่อม Needs → ทักษะ → มาตรฐานสากล (Washington Accord / ABET)">
          <div className="obe-tablewrap">
            <table className="obe-table">
              <thead><tr><th>GA</th><th>ลักษณะบัณฑิต</th><th>ทักษะที่เกี่ยวข้อง</th><th>Washington Accord (TABEE)</th><th>ABET SO</th><th>PLO</th></tr></thead>
              <tbody>
                {GA.map(g => (
                  <tr key={g.id}>
                    <td><span className="obe-code">{g.id}</span></td>
                    <td><b>{g.name}</b></td>
                    <td className="small">{g.skills}</td>
                    <td className="small">{g.wa}</td>
                    <td className="small">{g.abet}</td>
                    <td>{g.plo.map(p => (
                      <Link to={`/plo/${p}`} className="plo-mini" key={p} style={{ "--pc": `var(--plo${p})` }}>PLO{p}</Link>
                    ))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ─── 4 · Target Skills ─── */}
        <Section id="skill" title="④ ทักษะเป้าหมายและฐานวิศวกรรม (H1–H20 · S1–S10 · EF1–EF6)" sub="ทักษะอาชีพ Hard/Soft เชื่อมกับฐานวิศวกรรมที่ผู้ทรงคุณวุฒิกำหนด">
          <div className="lvbar">
            {LEVELS.map(l => <span key={l.id}><b>{l.id}</b> {l.th} <i>({l.label})</i></span>)}
          </div>
          <p className="obe-note">คลิกที่ทักษะเพื่อดูขอบเขต หลักฐานตลาดแรงงาน ระดับเป้าหมายรายแขนง และรายวิชาที่พัฒนาทักษะนั้น</p>
          <div className="skill-cols">
            <div>
              <h3 className="skill-h">Hard Skills <small>แกน 9 + ส่วนขยาย 11</small></h3>
              {HARD_SKILLS.map(s => (
                <SkillRow key={s.id} s={s} open={openSkill === s.id}
                  onToggle={() => setOpenSkill(openSkill === s.id ? null : s.id)} />
              ))}
            </div>
            <div>
              <h3 className="skill-h">Soft Skills <small>แกน 6 + ส่วนขยาย 4</small></h3>
              {SOFT_SKILLS.map(s => (
                <SkillRow key={s.id} s={s} open={openSkill === s.id}
                  onToggle={() => setOpenSkill(openSkill === s.id ? null : s.id)} />
              ))}
            </div>
          </div>
          <div className="foundation-block">
            <h3 className="skill-h">Engineering Foundations <small>ฐานทักษะวิศวกรรมประกอบ EF1–EF6</small></h3>
            <p className="obe-note">EF ไม่เพิ่มจำนวน Hard Skills แต่ทำให้ CAD โครงสร้าง ความร้อน–ของไหล เครื่องมือวัด ระบบขับเคลื่อน ความปลอดภัย มาตรฐาน และการส่งมอบมีเจ้าภาพและหลักฐานประเมินชัดเจน</p>
            <div className="skill-cols">
              {ENGINEERING_FOUNDATIONS.map(s => (
                <SkillRow key={s.id} s={s} open={openSkill === s.id}
                  onToggle={() => setOpenSkill(openSkill === s.id ? null : s.id)} />
              ))}
            </div>
          </div>
          <p className="obe-note"><b>เกณฑ์แกน/ส่วนขยาย</b> — {SKILL_CORE_RULE}</p>
        </Section>

        {/* ─── 5 · Skill Sets ─── */}
        <Section id="set" title="⑤ ชุดทักษะ EN-AISK01–09" sub="เชื่อมตรงกับ H1–H20 · S1–S10 · EF1–EF6 เพื่อใช้จัดทำ Skill Transcript">
          <div className="setlist">
            {SKILL_SETS.map(s => {
              const g = GROUPS[s.g];
              const hi = activeSets.includes(s.id);
              const open = openSet === s.id;
              return (
                <div className={`setcard${hi ? " hi" : ""}${open ? " open" : ""}`} key={s.id} style={{ "--ac": g.color }}>
                  <button className="setcard-head" onClick={() => setOpenSet(open ? null : s.id)}>
                    <span className="set-id">{s.id}</span>
                    <span className="set-names">
                      <b>{s.name}</b>
                      <small>{s.en}</small>
                    </span>
                    <span className="set-meta">
                      <span className="gtag">{s.skills.length} ทักษะเป้าหมาย/ฐาน</span>
                      <span className="ttag">{s.type}</span>
                      <span className="tracks">T1 {s.track.T1} · T2 {s.track.T2} · T3 {s.track.T3}</span>
                    </span>
                    <span className="set-caret">{open ? "▲" : "▼"}</span>
                  </button>

                  {open && (
                    <div className="setcard-body">
                      <div className="set-skills">
                        <span className="lab">ทักษะเป้าหมายและฐานวิศวกรรมที่ผูก:</span>
                        {s.skills.map(k => {
                          const sk = skillById(k);
                          return <span className="skchip" key={k} title={sk ? sk.name : ""}>{k}</span>;
                        })}
                        <span className="lab" style={{ marginLeft: 10 }}>PLO:</span>
                        {s.plo.map(p => (
                          <Link to={`/plo/${p}`} className="plo-mini" key={p} style={{ "--pc": `var(--plo${p})` }}>PLO{p}</Link>
                        ))}
                      </div>

                      <table className="obe-table sub-table">
                        <thead><tr><th>#</th><th>ทักษะย่อย (Sub-skill)</th><th>ระดับ</th><th>เครื่องมือ</th></tr></thead>
                        <tbody>
                          {s.sub.map((x, i) => (
                            <tr key={i}><td>{i + 1}</td><td>{x.n}</td><td><b className="lv">{x.lv}</b></td><td className="small">{x.tools}</td></tr>
                          ))}
                        </tbody>
                      </table>

                      <div className="set-assess"><b>วิธีวัดและประเมินผล:</b> {s.assess}</div>

                      <div className="set-courses">
                        <span className="lab">รายวิชาที่ป้อนเข้า:</span>
                        {s.courses.map(c => {
                          const co = COURSES.find(x => x.c === c);
                          return co
                            ? <Link to={`/courses/${c}`} className="cchip" key={c} title={co.t}>{c}</Link>
                            : <span className="cchip off" key={c}>{c}</span>;
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Section>

        {/* ─── 6 · PLO ─── */}
        <Section id="plo" title="⑥ ผลลัพธ์การเรียนรู้ระดับหลักสูตร (PLO1–7)" sub="คลิกเพื่อดูรายละเอียดและรายวิชาที่รับผิดชอบ">
          <div className="obe-grid plo-grid">
            {[1, 2, 3, 4, 5, 6, 7].map(n => {
              const p = PLO_DETAIL[n];
              return (
                <Link to={`/plo/${n}`} className="obe-card plo-card" key={n} style={{ "--ac": `var(--plo${n})` }}>
                  <div className="plo-top"><span className="obe-code">PLO{n}</span><span className="so">{p?.so}</span></div>
                  <b>{p?.title || PLO_NAME[n]}</b>
                  <small>{p?.en}</small>
                </Link>
              );
            })}
          </div>
        </Section>

        {/* ─── 7 · YLO ─── */}
        <Section id="ylo" title="⑦ ผลลัพธ์การเรียนรู้รายชั้นปี (YLO1–4)" sub="กระจาย PLO ลงแต่ละชั้นปีตามระดับ I → R → M">
          <div className="obe-grid ylo-grid">
            {[1, 2, 3, 4].map(n => {
              const y = YLO_DETAIL[n];
              return (
                <Link to={`/ylo/${n}`} className="obe-card ylo-card" key={n} style={{ "--ac": `var(--y${n}, #2f6fb0)` }}>
                  <div className="ylo-top"><span className="obe-code">YLO{n}</span><span className="yr">ชั้นปีที่ {n}</span></div>
                  <b>{y?.title}</b>
                  <small>{y?.en}</small>
                  <p className="ylo-lv">{y?.level}</p>
                </Link>
              );
            })}
          </div>
        </Section>

        {/* ─── 8 · CLO + KSA ─── */}
        <Section id="clo" title="⑧ ผลลัพธ์รายวิชา (CLO) และ K–S–A" sub="ความรู้ · ทักษะ · ทัศนคติ ที่แต่ละ PLO กำหนดให้รายวิชารับผิดชอบ">
          <div className="ksa-tabs">
            {[1, 2, 3, 4, 5, 6, 7].map(n => (
              <button key={n} className={`ksa-tab${ksaPlo === n ? " on" : ""}`}
                style={{ "--pc": `var(--plo${n})` }} onClick={() => setKsaPlo(n)}>
                PLO{n}
              </button>
            ))}
          </div>

          {(() => {
            const k = KSA[ksaPlo];
            const p = PLO_DETAIL[ksaPlo];
            const rel = COURSES.filter(c => c.p && c.p.includes(ksaPlo));
            return (
              <div className="ksa-panel" style={{ "--pc": `var(--plo${ksaPlo})` }}>
                <div className="ksa-head">
                  <b>PLO{ksaPlo} · {p?.title || PLO_NAME[ksaPlo]}</b>
                  <Link to={`/plo/${ksaPlo}`} className="ksa-link">ดูรายละเอียด PLO →</Link>
                </div>
                <div className="ksa-cols">
                  <div className="ksa-box k">
                    <h4>🧠 Knowledge — ความรู้ที่ควรมี</h4>
                    <p>{k.k}</p>
                  </div>
                  <div className="ksa-box s">
                    <h4>🛠️ Skill — ทักษะและระดับเป้าหมาย</h4>
                    <ul>
                      {k.s.map(([id, lv]) => {
                        const sk = skillById(id);
                        const st = sk ? setById(sk.set) : null;
                        return (
                          <li key={id}>
                            <span className="obe-code sm">{id}</span> {sk?.name}
                            <b className="lv"> {lv}</b>
                            {st && <span className="setchip sm">{st.id}</span>}
                          </li>
                        );
                      })}
                    </ul>
                    {k.sExtra && <p className="ksa-extra">+ {k.sExtra}</p>}
                  </div>
                  <div className="ksa-box a">
                    <h4>❤️ Attitude — ทัศนคติที่ต้องปลูกฝัง</h4>
                    <p>{k.a}</p>
                  </div>
                </div>
                <div className="ksa-courses">
                  <span className="lab">รายวิชาที่รับผิดชอบ PLO{ksaPlo} ({rel.length} วิชา):</span>
                  <div className="cwrap">
                    {rel.slice(0, 40).map(c => (
                      <Link to={`/courses/${c.c}`} className="cchip" key={c.c} title={c.t}>{c.c}</Link>
                    ))}
                    {rel.length > 40 && <span className="cchip off">+{rel.length - 40}</span>}
                  </div>
                </div>
              </div>
            );
          })()}
        </Section>

        {/* ─── มาตรฐานเทียบเคียง ─── */}
        <Section title="การเทียบเคียงมาตรฐานสากล" sub="กรอบที่ใช้ยกระดับชุดทักษะให้ทันสมัยและตรวจสอบได้">
          <div className="obe-tablewrap">
            <table className="obe-table">
              <thead><tr><th>มาตรฐาน/กรอบ</th><th>แหล่ง</th><th>นำมาใช้ยกระดับส่วนใด</th></tr></thead>
              <tbody>
                {BENCHMARKS.map((b, i) => (
                  <tr key={i}><td><b>{b.name}</b></td><td className="small">{b.org}</td><td className="small">{b.use}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ─── อ้างอิง ─── */}
        <Section title="เอกสารอ้างอิงใน Vault" sub="ทุกขั้นตอนสอบย้อนกลับไปยังไฟล์ต้นทางได้">
          <ol className="reflist">
            {REFS.map(r => (
              <li key={r.step}>
                <b>{r.title}</b>
                <code>Labor_Growth_Report_Vault/{r.file}</code>
              </li>
            ))}
          </ol>
          <p className="obe-note">
            เล่มหลักสูตรฉบับ <b>OBE v4</b> สอดคล้องกับ Vault ทั้ง PLO1–7, YLO1.1–4.4 และหลักฐานผลสำรวจ ·
            ส่วนที่ผนวกเพิ่มคือ <b>พันธกิจ KSU Soft Skills 5C+ / Skill-based Transcript</b> ซึ่งบันทึกไว้ใน
            <code>11_Skill_Set_Matrix_and_KSA.md §E.6</code>
          </p>
        </Section>

      </div>
    </main>
  );
}
