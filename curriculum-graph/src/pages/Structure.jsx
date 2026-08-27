import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { STRUCTURE, STRUCTURE_TOP, TOTAL_CREDITS, ISCED, CREDIT_OUTLINE, COURSES, GROUP_COLOR, GROUP_NAME, subgroupsOf } from "../data.js";
import { PageHead, Section, CourseRow } from "./ui.jsx";

/* กลุ่มที่กางรายวิชาให้เห็นทั้งหมดในหน้านี้ — เว้นหมวด 2.4 วิชาชีพเลือก (pool 52 วิชา เลือกเพียง 5)
   และหมวดเลือกเสรีที่หลักสูตรไม่ระบุรายวิชาไว้ */
const BOARD_GROUPS = ["ge", "eng", "ai", "track", "proj", "field"];
const byOrder = (a, b) => (a.sem || 99) - (b.sem || 99) || a.c.localeCompare(b.c);

export default function Structure() {
  /* ปุ่มเต็มจอของกราฟแยกตามกลุ่ม — ใช้ Fullscreen API กับกล่องกราฟโดยตรง
     ฟัง fullscreenchange เพื่อให้ปุ่มตรงกับสถานะจริง แม้ผู้ใช้กด Esc ออกเอง */
  const boardRef = useRef(null);
  const [fs, setFs] = useState(false);

  useEffect(() => {
    const sync = () => setFs(document.fullscreenElement === boardRef.current);
    document.addEventListener("fullscreenchange", sync);
    return () => document.removeEventListener("fullscreenchange", sync);
  }, []);

  const toggleFs = () => {
    const el = boardRef.current;
    if (!el) return;
    if (document.fullscreenElement === el) document.exitFullscreen();
    else el.requestFullscreen?.().catch(() => { /* เบราว์เซอร์ปฏิเสธ — คงสถานะเดิม */ });
  };

  return (
    <main>
      <PageHead
        eyebrow="โครงสร้างหลักสูตร · Curriculum Structure"
        title="โครงสร้างหลักสูตร 125 หน่วยกิต"
        lead="โครงสร้างประกอบด้วยแกนปัญญาประดิษฐ์ 8 วิชา 22 หน่วยกิต วิชาชีพบังคับ 8 วิชา 22 หน่วยกิต และวิชาเลือกชีพ 5 วิชา 15 หน่วยกิต รวมทั้งหลักสูตร 125 หน่วยกิต ตามแผนปรับโครงสร้าง"
        crumbs={[{ label: "โครงสร้างหลักสูตร" }]} />

      <div className="wrap">
        <Section title="ภาพรวม 3 หมวดวิชา">
          <div className="creditbar big">
            {STRUCTURE_TOP.map((s, i) => (
              <div key={s.name} className={`cbseg s${i}`} style={{ flexGrow: s.credits }}>
                <b>{s.credits}</b><span>{s.name}</span>
              </div>
            ))}
          </div>
          <table className="tbl">
            <thead><tr><th>หมวดวิชา</th><th>กลุ่มวิชาที่รวมอยู่</th><th className="r">หน่วยกิต</th><th className="r">ร้อยละ</th></tr></thead>
            <tbody>
              {STRUCTURE_TOP.map(s => (
                <tr key={s.name}>
                  <td><b>{s.name}</b></td>
                  <td className="mut">{s.ids.map(id => STRUCTURE.find(x => x.id === id).name).join(" · ")}</td>
                  <td className="r"><b>{s.credits}</b></td>
                  <td className="r mut">{Math.round(s.credits / TOTAL_CREDITS * 100)}%</td>
                </tr>
              ))}
              <tr className="total"><td colSpan={2}>รวมตลอดหลักสูตร</td><td className="r">{TOTAL_CREDITS}</td><td className="r">100%</td></tr>
            </tbody>
          </table>
        </Section>

        <Section title="4.1 โครงสร้างหลักสูตร" sub="สรุปหน่วยกิตรายหมวดและกลุ่มวิชา เทียบสองแผนการศึกษา ตามรูปแบบเล่ม มคอ.2">
          <div className="scroll-x">
            <table className="tbl credit-outline">
              <thead>
                <tr>
                  <th rowSpan={2}>หมวดวิชา / กลุ่มวิชา</th>
                  <th className="c" colSpan={2}>แผนการศึกษาในหลักสูตร</th>
                </tr>
                <tr>
                  <th className="c">แผน ก<small>แผนปกติ</small></th>
                  <th className="c">แผน ข<small>แผนบูรณาการร่วมกับการทำงาน</small></th>
                </tr>
              </thead>
              <tbody>
                {CREDIT_OUTLINE.map(r => (
                  <tr key={r.no} className={r.top ? "co-top" : "co-sub"}>
                    <td>
                      <span className="co-no">{r.no}</span>
                      {r.gid ? <Link className="lnk" to={`/structure/${r.gid}`}>{r.name}</Link> : r.name}
                    </td>
                    <td className="c">{r.credits}</td>
                    <td className="c">{r.credits}</td>
                  </tr>
                ))}
                <tr className="total">
                  <td>รวมหน่วยกิต</td>
                  <td className="c">{TOTAL_CREDITS}</td>
                  <td className="c">{TOTAL_CREDITS}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="note">
            ทั้งสองแผนมีหน่วยกิตเท่ากันทุกหมวด รวม <b>{TOTAL_CREDITS} หน่วยกิต</b> —
            ต่างกันเฉพาะชุดรายวิชาในภาคการศึกษาที่ 7 โดย<b>แผน ก</b>เรียนวิชาชีพเลือก 3 วิชา
            ส่วน<b>แผน ข</b>เรียนการเรียนรู้ร่วมการทำงาน (CWIE) กับสถานประกอบการ
            และใช้ EN-714-12020 โครงงานบูรณาการฯ แทน EN-714-12019 ·
            ดูการจัดรายวิชารายภาคได้ที่ <Link className="lnk" to="/plan">แผนการเรียน</Link>
          </div>
        </Section>

        <Section title="มาตรฐานสากลของกลุ่มวิชาทางการศึกษา (ISCED)"
          sub="International Standard Classification of Education · TQF2 หมวดที่ 1 ข้อ 5.6">
          <table className="tbl">
            <thead><tr><th>ระดับการจำแนก</th><th>รหัส</th><th>ชื่อกลุ่มวิชา</th></tr></thead>
            <tbody>
              {ISCED.map(r => (
                <tr key={r.code}>
                  <td><b>{r.level}</b><br /><span className="mut">{r.th}</span></td>
                  <td><b>{r.code}</b></td>
                  <td>{r.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="note">
            การจำแนกนี้เน้นอัตลักษณ์ทางวิศวกรรม ระบบอัตโนมัติ อุตสาหกรรม และ IoT ของหลักสูตร
            และสอดคล้องกับรหัสรายวิชา <b>EN-714</b> ตามประกาศระบบการกำหนดรหัสวิชาของมหาวิทยาลัยกาฬสินธุ์
          </div>
        </Section>

        <Section title="กราฟรายวิชาแยกตามกลุ่ม (หมวด)"
          sub="หนึ่งคอลัมน์ต่อหนึ่งหมวด · แสดงรหัสวิชาและชื่อทุกวิชาในหมวดนั้น — โหมดเดียวกับ ② แยกตามกลุ่ม ในหน้ากราฟรายวิชา">
          <div className={"groupboard-wrap" + (fs ? " is-fs" : "")} ref={boardRef}>
            <button type="button" className="gb-fs" onClick={toggleFs} aria-pressed={fs}
              title={fs ? "ออกจากโหมดเต็มจอ (Esc)" : "ดูกราฟแบบเต็มจอ"}>
              <i aria-hidden="true">{fs ? "⛶" : "⛶"}</i>
              {fs ? "ออกจากเต็มจอ" : "เต็มจอ"}
            </button>
            <div className="groupboard">
            {BOARD_GROUPS.map(g => {
              const list = COURSES.filter(c => c.g === g).sort(byOrder);
              const st = STRUCTURE.find(x => x.g === g);
              return (
                <div className="gbcol" key={g} style={{ "--gc": GROUP_COLOR[g].fg, "--gbg": GROUP_COLOR[g].bg }}>
                  <div className="gbhead">
                    <span className="gbno">{st ? st.no : ""}</span>
                    <b>{GROUP_NAME[g]}</b>
                    <span className="gbn">{list.length} วิชา · {st ? st.credits : 0} นก.</span>
                  </div>
                  <div className="gbnodes">
                    {list.map(c => (
                      <Link to={`/courses/${c.c}`} className="gbnode" key={c.c}>
                        <span className="gbcode">{c.c}</span>
                        <span className="gbname">{c.t}</span>
                        <span className="gbmeta">{c.cr.split("(")[0]} นก.{c.sem ? ` · ภาค ${c.sem}` : ""}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
            </div>
          </div>
          <div className="note">
            คอลัมน์นี้ไม่รวม <b>หมวด 2.4 กลุ่มวิชาชีพเลือก</b> เพราะเป็น pool 52 วิชาให้เลือกเพียง 5 วิชา
            ดูรายวิชาทั้ง pool ได้ที่ <Link className="lnk" to="/structure/elec">กลุ่มวิชาชีพเลือก</Link> ·
            ดูเส้นก่อน–หลังแบบโต้ตอบได้ที่ <Link className="lnk" to="/graph">กราฟรายวิชา</Link>
          </div>
        </Section>

        <Section title="รายวิชาทั้งหมดในแต่ละกลุ่ม" sub="กางรายวิชาไว้ทุกกลุ่ม ยกเว้นหมวด 2.4 กลุ่มวิชาชีพเลือก">
          {STRUCTURE.filter(s => s.id !== "elec" && s.id !== "free").map(s => {
            const subs = subgroupsOf(s.id);
            return (
              <div className={`gfull g-${s.g}`} key={s.id}>
                <div className="gfull-h">
                  <span className="gno">{s.no}</span>
                  <div className="gttl"><b>{s.name}</b><small>{s.code}</small></div>
                  <div className="gcr"><b>{s.credits}</b><span>นก.</span></div>
                </div>
                <p className="gnote">{s.note}</p>
                {subs.map(sg => (
                  <div className="gfull-sub" key={sg.key}>
                    <div className="gfull-subh">
                      <b>{sg.name}</b>
                      {sg.sub && <small>{sg.sub}</small>}
                      <span>{sg.n} วิชา · {sg.credits} นก.</span>
                    </div>
                    <div className="rowlist">
                      {sg.courses.map(c => (
                        <CourseRow key={c.c} code={c.c}
                          extra={c.sem ? <span className="semtag">ภาค {c.sem}</span> : null} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
          <div className="note">
            <b>หมวด 2.4 กลุ่มวิชาชีพเลือก</b> ไม่กางไว้ในหน้านี้ เพราะเป็น pool 52 วิชาที่นักศึกษาเลือกเรียนเพียง 5 วิชา 15 หน่วยกิต
            — ดูทั้ง pool แยกตามแขนงได้ที่ <Link className="lnk" to="/structure/elec">กลุ่มวิชาชีพเลือก</Link> ·
            <b> หมวดวิชาเลือกเสรี</b> หลักสูตรไม่ระบุรายวิชาไว้ นักศึกษาเลือกจากรายวิชาที่มหาวิทยาลัยเปิดสอน
          </div>
        </Section>

        <Section title="กลุ่มวิชาและกลุ่มย่อย" sub="คลิกที่กลุ่มย่อยเพื่อดูรายวิชาทั้งหมดในกลุ่มนั้น">
          <div className="grouplist">
            {STRUCTURE.map(s => {
              const subs = subgroupsOf(s.id);
              return (
                <div className={`gcard g-${s.g}`} key={s.id}>
                  <Link to={`/structure/${s.id}`} className="gcard-h">
                    <span className="gno">{s.no}</span>
                    <div className="gttl"><b>{s.name}</b><small>{s.code}</small></div>
                    <div className="gcr"><b>{s.credits}</b><span>นก.</span></div>
                  </Link>
                  <p className="gnote">{s.note}</p>

                  <div className="subrows">
                    {subs.map(sg => (
                      <Link to={`/structure/${s.id}#${sg.key}`} className="subrow" key={sg.key}>
                        <span className="sr-name">{sg.name}<small>{sg.sub}</small></span>
                        <span className="sr-n">{sg.n} วิชา</span>
                        <span className="sr-cr">{sg.credits}<i>นก.{sg.pool ? " (pool)" : ""}</i></span>
                      </Link>
                    ))}
                  </div>

                  <Link to={`/structure/${s.id}`} className="gmore">
                    ดูรายวิชาทั้งหมดในกลุ่มนี้
                    {(() => { const n = subs.reduce((a, x) => a + x.n, 0);
                      return s.id === "free" ? "" : s.id === "elec" ? ` (pool ${n} วิชา)` : ` (${n} วิชา)`; })()} →
                  </Link>
                </div>
              );
            })}
          </div>
        </Section>

        <div className="note">
          หมวดวิชาเฉพาะรวม <b>95 หน่วยกิต</b> = พื้นฐานวิศวกรรม 24 + แกน AI 22 + วิชาชีพบังคับ 22 +
          เลือกชีพ 15 + โครงงานและสัมมนา 5 + ประสบการณ์ภาคสนาม 7 · เมื่อรวมศึกษาทั่วไป 24 และเลือกเสรี 6
          จึงได้ <b>{TOTAL_CREDITS} หน่วยกิต</b> ซึ่งเป็นยอดที่ยืนยันแล้ว โดยวาง EN-714-12009 ในภาค 4
          และ EN-714-17001 เตรียมความพร้อมสหกิจศึกษาในภาค 6 ของแผนการเรียน
        </div>
        <p className="hint"><Link to="/plan">ดูการจัดรายวิชาลง 8 ภาคการศึกษา →</Link></p>
      </div>
    </main>
  );
}
