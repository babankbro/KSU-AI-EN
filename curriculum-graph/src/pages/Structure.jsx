import { Link } from "react-router-dom";
import { STRUCTURE, STRUCTURE_TOP, TOTAL_CREDITS, subgroupsOf } from "../data.js";
import { PageHead, Section } from "./ui.jsx";

export default function Structure() {
  return (
    <main>
      <PageHead
        eyebrow="โครงสร้างหลักสูตร · Curriculum Structure"
        title="ข้อเสนอโครงสร้างหลักสูตร 133 หน่วยกิต"
        lead="โครงสร้างปรับปรุงล่าสุดเพิ่ม Core Track เป็น 9 วิชา 27 หน่วยกิต และคงวิชาเลือกชีพ 5 วิชา 15 หน่วยกิต จึงมียอดรวมชั่วคราว 133 หน่วยกิต รอคณะกรรมการพิจารณาการลดหรือจัดสรรใหม่ 3 หน่วยกิต"
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
          หมวดวิชาเฉพาะตามข้อเสนอรวม <b>103 หน่วยกิต</b> = พื้นฐานและปฏิบัติการวิศวกรรม 24 + แกน AI 24 + Core Track 27 +
          เลือกชีพ 15 + โครงงานและสัมมนา 6 + ฝึกประสบการณ์ 7 · เมื่อรวมศึกษาทั่วไป 24 และเลือกเสรี 6
          จึงได้ <b>{TOTAL_CREDITS} หน่วยกิตชั่วคราว</b> โดยวาง EN-132-109 ในภาค 3 ของแผนข้อเสนอแล้ว
          ส่วนยอดรวมและการปรับลด 3 หน่วยกิตยังรอมติ
        </div>
        <p className="hint"><Link to="/plan">ดูการจัดรายวิชาลง 8 ภาคการศึกษา →</Link></p>
      </div>
    </main>
  );
}
