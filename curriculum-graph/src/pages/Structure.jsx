import { Link } from "react-router-dom";
import { STRUCTURE, STRUCTURE_TOP, TOTAL_CREDITS, subgroupsOf } from "../data.js";
import { PageHead, Section } from "./ui.jsx";

export default function Structure() {
  return (
    <main>
      <PageHead
        eyebrow="โครงสร้างหลักสูตร · Curriculum Structure"
        title="โครงสร้างหลักสูตร 130 หน่วยกิต"
        lead="แบ่งเป็น 3 หมวดหลักตามเกณฑ์มาตรฐานหลักสูตรระดับปริญญาตรี พ.ศ. 2565 โดยหมวดวิชาเฉพาะจำแนกออกเป็น 6 กลุ่มวิชาที่ไล่ระดับจากพื้นฐานวิศวกรรม → แกนปัญญาประดิษฐ์ → บูรณาการตามโดเมน → ปฏิบัติงานวิชาชีพ"
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
          หมวดวิชาเฉพาะรวม <b>100 หน่วยกิต</b> = พื้นฐานและปฏิบัติการวิศวกรรม 24 + แกน AI 24 + บังคับแขนง 24 +
          เลือกชีพ 15 + โครงงานและสัมมนา 6 + ฝึกประสบการณ์ 7 · เมื่อรวมศึกษาทั่วไป 24 และเลือกเสรี 6
          จึงได้ <b>{TOTAL_CREDITS} หน่วยกิต</b> ตรงตามหัวตารางโครงสร้างหลักสูตร
        </div>
        <p className="hint"><Link to="/plan">ดูการจัดรายวิชาลง 8 ภาคการศึกษา →</Link></p>
      </div>
    </main>
  );
}
