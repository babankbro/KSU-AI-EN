import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "../clo.css";
import { PageHead, Section, PloChip, IRM, GroupTag } from "./ui.jsx";
import { PLO_NAME, PLO_DETAIL, YLO_DETAIL } from "../data.js";
import { GROUPS, SKILL_SETS } from "../obeData.js";
import {
  CLO_LIST, CORE_CLO_LIST, CORE_CLO_TOTAL, CLO_PRINCIPLES, CLO_NOTES, ELECTIVE_NOTES,
  PLO_ROLLUP, SET_FEED, YLO_ROLLUP, LEVEL_NAME, ploLevels
} from "../cloData.js";

const PLOS = [1, 2, 3, 4, 5, 6, 7];
const SEM_LABEL = s => s === 99
  ? "รายวิชาใหม่ — รอยืนยันภาคการศึกษา"
  : `ชั้นปีที่ ${Math.ceil(s / 2)} · ภาคการศึกษาที่ ${s % 2 === 1 ? 1 : 2}`;
const setOf = id => SKILL_SETS.find(s => s.id === id);

/* จัดรายวิชาเป็นกลุ่มตามภาคการศึกษา */
function bySemester(list) {
  const out = [];
  list.forEach(e => {
    const last = out[out.length - 1];
    if (last && last.sem === e.sem) last.items.push(e);
    else out.push({ sem: e.sem, items: [e] });
  });
  return out;
}

/* ป้ายชุดทักษะ — คลิกไปหน้าขั้นตอน OBE หัวข้อชุดทักษะ */
function SetChip({ id, sub }) {
  const s = setOf(id);
  const g = s ? GROUPS[s.g] : null;
  return (
    <Link to="/obe#set" className="clo-setchip" style={{ "--ac": g ? g.color : "var(--muted)" }}
      title={s ? `${s.name} · ${s.g}` : id}>
      {id}{sub ? <i>{sub}</i> : null}
    </Link>
  );
}

function YloChip({ id }) {
  const y = Number(id.replace("YLO", "").split(".")[0]);
  return <Link to={`/ylo/${y}`} className="clo-ylochip" title={`ดูรายละเอียด YLO${y}`}>{id}</Link>;
}

export default function Clo() {
  const [year, setYear] = useState("all");
  const [plo, setPlo] = useState("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => CLO_LIST.filter(e => {
    if (year !== "all" && e.y !== Number(year)) return false;
    if (plo !== "all" && !e.clos.some(c => c.plo.some(([p]) => p === Number(plo)))) return false;
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      const hay = [e.c, e.course?.t, e.course?.e, e.k, e.s, e.a, ...e.clos.map(c => c.t)]
        .filter(Boolean).join(" ").toLowerCase();
      if (!hay.includes(s)) return false;
    }
    return true;
  }), [year, plo, q]);

  const shownClos = filtered.reduce((s, e) => s + e.clos.length, 0);

  return (
    <>
      <PageHead
        eyebrow="หมวด 4.6 – 4.7 · เอกสารหลักสูตร"
        title="ผลลัพธ์การเรียนรู้รายวิชา (CLO) และแผนที่ความเชื่อมโยง"
        lead="สรุป CLO ของรายวิชาแกนตามข้อเสนอใหม่ พร้อม K–S–A ชุดทักษะ EN-AISK01–09 หลักฐานประเมิน และเส้นทาง CLO → Sub-YLO → PLO ตามระดับ I–R–M"
        crumbs={[{ label: "CLO และ Curriculum Mapping" }]}
      />

      <div className="wrap">
        <div className="clo-stats">
          <div><b>{CORE_CLO_LIST.length}</b><span>รายวิชาเฉพาะ/กิจกรรมบังคับที่กำหนด CLO</span></div>
          <div><b>{CORE_CLO_TOTAL}</b><span>ข้อ CLO ตาม Mapping ฉบับใหม่</span></div>
          <div><b>{YLO_ROLLUP.reduce((s, y) => s + y.subs.length, 0)}</b><span>Sub-YLO ที่ CLO ป้อนเข้า</span></div>
          <div><b>7</b><span>PLO ที่ทุกเส้นทางสอบย้อนกลับถึง</span></div>
        </div>

        {/* ─────────── 4.6 Curriculum Mapping ─────────── */}
        <Section id="map" title="4.6 แผนที่แสดงความเชื่อมโยงระหว่างรายวิชาและผลลัพธ์การเรียนรู้ระดับหลักสูตร"
          sub="Curriculum Mapping — ระดับที่แต่ละรายวิชารับผิดชอบในแต่ละ PLO คิดจากระดับสูงสุดของ CLO ในรายวิชานั้น">
          <div className="clo-legend">
            {["I", "R", "M"].map(v => <span key={v}><IRM v={v} /> {LEVEL_NAME[v]}</span>)}
          </div>

          <div className="scroll-x">
            <table className="tbl clo-map">
              <thead>
                <tr>
                  <th>รหัสวิชา</th>
                  <th>ชื่อรายวิชา</th>
                  {PLOS.map(n => (
                    <th key={n} className="c" style={{ "--pc": `var(--plo${n})` }}>
                      <Link to={`/plo/${n}`} className="clo-ploth">PLO{n}</Link>
                    </th>
                  ))}
                  <th className="c">CLO</th>
                </tr>
              </thead>
              {bySemester(CLO_LIST).map(grp => (
                <tbody key={grp.sem}>
                  <tr className="clo-semrow"><td colSpan={10}>{SEM_LABEL(grp.sem)}</td></tr>
                  {grp.items.map(e => {
                    const lv = ploLevels(e);
                    return (
                      <tr key={e.c}>
                        <td className="mono"><Link to={`/courses/${e.c}`} className="lnk">{e.c}</Link></td>
                        <td>{e.course ? e.course.t : e.c}
                          {e.ge && <span className="clo-getag">GE</span>}</td>
                        {PLOS.map(n => <td key={n} className="c">{lv[n] ? <IRM v={lv[n]} /> : <i className="clo-dash">–</i>}</td>)}
                        <td className="c mut">{e.clos.length}</td>
                      </tr>
                    );
                  })}
                </tbody>
              ))}
              <tbody>
                <tr className="clo-semrow"><td colSpan={10}>วิชาเลือกชีพและวิชาเลือกเสรี — ยังไม่กำหนด CLO รายข้อ</td></tr>
                {ELECTIVE_NOTES.map(el => (
                  <tr key={el.slot} className="clo-elrow">
                    <td className="mut">{el.sem}</td>
                    <td>{el.slot}<small>{el.note}</small></td>
                    {PLOS.map(n => {
                      const hit = el.plo.find(([p]) => p === n);
                      return <td key={n} className="c">{hit ? <IRM v={hit[1]} /> : <i className="clo-dash">–</i>}</td>;
                    })}
                    <td className="c mut">–</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="hint">
            ระดับ I–R–M ในตารางมาจาก CLO จริงของรายวิชา จึงอาจต่างจากตาราง YLO ↔ PLO ในภาพรวมของชั้นปี —
            ดูตารางระดับรายปีได้ที่ <Link to="/ylo">หน้า YLO</Link>
          </p>
        </Section>

        {/* ─────────── 4.7 CLO → ผลลัพธ์ระดับสูง ─────────── */}
        <Section id="rollup" title="4.7 ตารางสรุปการเชื่อมโยงผลลัพธ์การเรียนรู้รายวิชา (CLOs) สู่ผลลัพธ์ระดับสูง"
          sub="แต่ละ PLO มีรายวิชาและ CLO ใดรับผิดชอบบ้าง และไปถึงระดับใด">
          <div className="scroll-x">
            <table className="tbl">
              <thead>
                <tr>
                  <th>PLO</th><th>หัวข้อ</th><th className="c">วิชา</th><th className="c">CLO</th>
                  <th className="c">ระดับสูงสุด</th><th>รายวิชาที่มี CLO รับผิดชอบ</th>
                </tr>
              </thead>
              <tbody>
                {PLO_ROLLUP.map(r => (
                  <tr key={r.plo}>
                    <td><PloChip n={r.plo} /></td>
                    <td><b>{PLO_DETAIL[r.plo]?.title || PLO_NAME[r.plo]}</b><br />
                      <small className="mut">{PLO_DETAIL[r.plo]?.so}</small></td>
                    <td className="c">{r.rows.length}</td>
                    <td className="c">{r.cloCount}</td>
                    <td className="c"><IRM v={r.top} /></td>
                    <td>
                      <div className="clo-chips">
                        {r.rows.map(x => (
                          <Link key={x.c} to={`/courses/${x.c}`} className={`clo-cchip lv-${x.lv}`}
                            title={`${x.c} · CLO${x.clos.join(", CLO")} · ${LEVEL_NAME[x.lv]}`}>
                            {x.c}<i>{x.clos.map(n => n).join(",")}</i>
                          </Link>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="note">
            <b>Constructive Alignment</b> — ทุก PLO มีเส้นทาง I → R → M ครบ: Introduce ที่ปี 1 (วิชาพื้นฐาน/แกน) →
            Reinforce ที่ปี 2–3 (แกน AI และ Core Track) → Mastery ที่โครงงาน (EN-134-404) และสหกิจศึกษา (EN-135-402)
            โดย CLO ทุกข้อสอบย้อนกลับถึง Sub-YLO และ PLO ได้
          </div>
        </Section>

        {/* ─────────── CLO → Sub-YLO ─────────── */}
        <Section id="ylo" title="CLO ที่ป้อนเข้าแต่ละ Sub-YLO" sub="ตรวจสอบว่า Sub-YLO ทั้ง 16 ข้อมี CLO รองรับครบ">
          <div className="clo-ylogrid">
            {YLO_ROLLUP.map(y => (
              <div className="clo-ylobox" key={y.y} style={{ "--yc": `var(--y${y.y})` }}>
                <div className="clo-ylohead">
                  <Link to={`/ylo/${y.y}`}><b>YLO{y.y}</b> {YLO_DETAIL[y.y].title}</Link>
                </div>
                {y.subs.map(s => {
                  const sub = YLO_DETAIL[y.y].sub.find(x => x[0] === s.id);
                  return (
                    <div className="clo-subylo" key={s.id}>
                      <div className="clo-subhead">
                        <span className="clo-subid">{s.id}</span>
                        <span className="clo-subtext">{sub ? sub[1] : ""}</span>
                        <span className="clo-subn">{s.items.length} CLO</span>
                      </div>
                      <div className="clo-chips">
                        {s.items.map((it, i) => (
                          <Link key={i} to={`/courses/${it.c}`} className="clo-cchip"
                            title={`${it.c} CLO${it.n}`}>{it.c}<i>{it.n}</i></Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </Section>

        {/* ─────────── Skill Set Feed ─────────── */}
        <Section id="feed" title="การกระจายรายวิชาสู่ชุดทักษะ (Skill Set Feed)"
          sub="แยกชุดทักษะเจ้าภาพหลักของ CLO ออกจากชุดทักษะสนับสนุน เพื่อไม่ให้นับภาระของรายวิชาบูรณาการซ้ำเต็มจำนวน">
          <div className="scroll-x">
            <table className="tbl">
              <thead>
                <tr>
                  <th>ชุดทักษะ</th><th>กลุ่ม</th>
                  <th className="c">วิชาเจ้าภาพ</th><th className="c">CLO หลัก</th><th>รายวิชาเจ้าภาพหลัก</th>
                  <th className="c">วิชาสนับสนุน</th><th className="c">CLO สนับสนุน</th><th>รายวิชาสนับสนุน</th>
                </tr>
              </thead>
              <tbody>
                {SET_FEED.map(f => {
                  const s = setOf(f.id);
                  const g = s ? GROUPS[s.g] : null;
                  return (
                    <tr key={f.id}>
                      <td style={{ "--ac": g ? g.color : "var(--muted)" }}>
                        <span className="clo-setid">{f.id}</span><br />
                        <small>{s ? s.name : ""}</small>
                      </td>
                      <td className="mut">{s ? s.g : "—"}<br /><small>{g ? g.en : ""}</small></td>
                      <td className="c">{f.courses.length}</td>
                      <td className="c">{f.primaryCloCount}</td>
                      <td>
                        <div className="clo-chips">
                          {f.courses.map(c => (
                            <Link key={c} to={`/courses/${c}`} className="clo-cchip">{c}</Link>
                          ))}
                        </div>
                      </td>
                      <td className="c">{f.supportCourses.length}</td>
                      <td className="c">{f.supportCloCount}</td>
                      <td>
                        <div className="clo-chips">
                          {f.supportCourses.map(c => (
                            <Link key={c} to={`/courses/${c}`} className="clo-cchip">{c}</Link>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="hint">
            รหัส AISK ตัวแรกใน CLO คือ <b>เจ้าภาพหลัก</b>; รหัสถัดไปเป็นชุดทักษะสนับสนุน และหลักฐานรายบุคคลต้องบันทึกตามบทบาทหรือบริบทจริง
            {" "}·{" "}
            รายละเอียดทักษะย่อย ระดับ L1–L4 และวิธีวัดผลของแต่ละชุดทักษะอยู่ที่ <Link to="/obe#set">ขั้นตอน OBE ⑤ ชุดทักษะ</Link>
          </p>
        </Section>

        {/* ─────────── CLO รายวิชา ─────────── */}
        <Section id="courses" title="CLO และ K–S–A รายวิชา"
          sub="กล่อง KSA คือสิ่งที่รายวิชาต้องรับผิดชอบพัฒนา ส่วน CLO คือข้อความที่วัดผลได้ซึ่งกลั่นมาจาก KSA เหล่านั้น">
          <div className="clo-filters">
            <div className="clo-fgroup">
              <span className="clo-flab">ชั้นปี</span>
              {["all", 1, 2, 3, 4].map(y => (
                <button key={y} className={`clo-fbtn${String(year) === String(y) ? " on" : ""}`}
                  onClick={() => setYear(y)}>{y === "all" ? "ทั้งหมด" : `ปี ${y}`}</button>
              ))}
            </div>
            <div className="clo-fgroup">
              <span className="clo-flab">PLO</span>
              <button className={`clo-fbtn${plo === "all" ? " on" : ""}`} onClick={() => setPlo("all")}>ทั้งหมด</button>
              {PLOS.map(n => (
                <button key={n} className={`clo-fbtn plo${plo === String(n) ? " on" : ""}`}
                  style={{ "--pc": `var(--plo${n})` }} onClick={() => setPlo(String(n))}
                  title={PLO_NAME[n]}>PLO{n}</button>
              ))}
            </div>
            <input className="clo-search" value={q} onChange={e => setQ(e.target.value)}
              placeholder="ค้นหารหัสวิชา ชื่อวิชา หรือข้อความ CLO…" />
          </div>

          <div className="clo-count">
            แสดง <b>{filtered.length}</b> รายวิชา · <b>{shownClos}</b> ข้อ CLO
            {(year !== "all" || plo !== "all" || q) &&
              <button className="clo-clear" onClick={() => { setYear("all"); setPlo("all"); setQ(""); }}>ล้างตัวกรอง</button>}
          </div>

          <div className="clo-cards">
            {filtered.map(e => {
              const c = e.course;
              return (
                <article className={`clo-card g-${e.g}`} key={e.c}>
                  <header className="clo-chead">
                    <Link to={`/courses/${e.c}`} className="clo-code">{e.c}</Link>
                    <div className="clo-ctitle">
                      <b>{c ? c.t : e.c}</b>
                      <small>{c ? c.e : ""}</small>
                    </div>
                    <div className="clo-cmeta">
                      <GroupTag g={e.g} />
                      {c && c.sem && <span className="semtag">ปี {c.y} · ภาค {c.sem}</span>}
                      {c && c.pendingSemester && <span className="semtag">รอยืนยันภาคเรียน</span>}
                      {c && <span className="clo-cr">{c.cr}</span>}
                    </div>
                  </header>

                  <div className="clo-ksa">
                    <div className="clo-kbox k"><h4>🧠 Knowledge — ความรู้ที่ต้องสอน</h4><p>{e.k}</p></div>
                    <div className="clo-kbox s">
                      <h4>🛠️ Skill — ทักษะที่ต้องฝึก</h4>
                      <p>{e.s}</p>
                      <div className="clo-sets">
                        {e.sets.map(([id, sub]) => <SetChip key={id} id={id} sub={sub} />)}
                      </div>
                    </div>
                    <div className="clo-kbox a"><h4>❤️ Attitude — ทัศนคติที่ต้องปลูกฝัง</h4><p>{e.a}</p></div>
                  </div>

                  <table className="tbl clo-clotbl">
                    <thead>
                      <tr><th>CLO</th><th className="c">Sub-YLO</th><th className="c">PLO (ระดับ)</th></tr>
                    </thead>
                    <tbody>
                      {e.clos.map(clo => (
                        <tr key={clo.n}>
                          <td>
                            <b className="clo-n">CLO{clo.n}</b> {clo.t}
                            {clo.evidence && <small className="mut" style={{ display: "block", marginTop: 5 }}>
                              หลักฐาน: {clo.evidence}
                            </small>}
                          </td>
                          <td className="c">{clo.ylo.map(id => <YloChip key={id} id={id} />)}</td>
                          <td className="c">
                            <div className="clo-plocell">
                              {clo.plo.map(([n, lv]) => <PloChip key={n} n={n} level={lv} small />)}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </article>
              );
            })}
            {!filtered.length && <p className="hint">ไม่พบรายวิชาที่ตรงกับเงื่อนไข</p>}
          </div>
        </Section>

        {/* ─────────── หลักการและหมายเหตุ ─────────── */}
        <Section id="method" title="หลักการออกแบบ CLO และหมายเหตุการนำไปใช้">
          <ol className="numlist">
            {CLO_PRINCIPLES.map((p, i) => <li key={i}>{p}</li>)}
          </ol>
          <div className="note">
            <b>หมายเหตุการนำไปใช้</b>
            <ul className="clo-notelist">
              {CLO_NOTES.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
          </div>
          <p className="hint">
            แหล่งข้อมูล: <code>05_TQF2_Academic_Drafts/10_Course_Learning_Outcomes_CLO_Mapping.md</code> และ{" "}
            <code>05_TQF2_Academic_Drafts/11_Skill_Set_Matrix_and_KSA.md</code> —
            ลำดับชั้นปี/ภาคเรียนของรายวิชายึดตามแผนการเรียนในเว็บ (<Link to="/plan">แผนการเรียน</Link>)
          </p>
        </Section>
      </div>
    </>
  );
}
