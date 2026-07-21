import { Link } from "react-router-dom";
import { PLO_DETAIL, PLO_SMART, PLO_INTRO, PLO_LEAD, PLO_TIMEFRAME, PLO_LEGACY, YLO_PLO, CORE, COURSES } from "../data.js";
import { PageHead, Section, IRM } from "./ui.jsx";

export const ploCourses = n => COURSES.filter(c => c.p && c.p.includes(n));

export default function Plos() {
  return (
    <main>
      <PageHead
        eyebrow="ผลลัพธ์การเรียนรู้ระดับหลักสูตร · Program Learning Outcomes"
        title="PLO 7 ข้อ"
        lead={PLO_INTRO}
        crumbs={[{ label: "PLO" }]} />

      <div className="wrap">
        <div className="plolead">
          <span className="plolead-lab">กรอบเวลาของการบรรลุผลลัพธ์</span>
          <b>{PLO_LEAD}</b>
          <p>{PLO_TIMEFRAME}</p>
        </div>

        <Section title="PLO ทั้ง 7 ข้อ" sub={PLO_LEAD}>
          <div className="plolist">
            {[1, 2, 3, 4, 5, 6, 7].map(n => {
              const p = PLO_DETAIL[n];
              const nc = ploCourses(n).filter(c => CORE.some(x => x.c === c.c)).length;
              return (
                <Link to={`/plo/${n}`} className="plocard" key={n} style={{ "--pc": `var(--plo${n})` }}>
                  <div className="pc-head">
                    <span className="pc-num">PLO{n}</span>
                    <span className="pc-so">ABET {p.so}</span>
                  </div>
                  <b className="pc-title">{p.title}</b>
                  <div className="pc-en">{p.en}</div>
                  <p className="pc-text">{p.text}</p>
                  <div className="pc-foot">
                    <span className="pill">{p.main}</span>
                    <span className="pill ghost">{p.level}</span>
                    <span className="pill ghost">{p.type}</span>
                    <span className="pc-n">{nc} วิชาแกน</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>

        <Section title="สรุป PLO ↔ ABET SO ↔ ผลลัพธ์การเรียนรู้ 4 ด้าน">
          <div className="scroll-x">
            <table className="tbl">
              <thead><tr><th>PLO</th><th>หัวข้อ</th><th>ABET SO</th><th>ด้านหลัก</th><th>ด้านรอง</th><th>ระดับความสามารถ</th><th>ประเภท</th></tr></thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7].map(n => {
                  const p = PLO_DETAIL[n];
                  return (
                    <tr key={n}>
                      <td><Link className="lnk" to={`/plo/${n}`}><b>PLO{n}</b></Link></td>
                      <td>{p.title}</td><td>{p.so}</td><td>{p.main}</td><td className="mut">{p.side}</td>
                      <td className="mut">{p.level}</td><td className="mut">{p.type}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="การพัฒนา PLO ตามชั้นปี (I–R–M)" sub="Introduce → Reinforce → Mastery">
          <div className="scroll-x">
            <table className="tbl matrix">
              <thead>
                <tr><th>YLO / ชั้นปี</th>{[1, 2, 3, 4, 5, 6, 7].map(n => <th key={n} className="c">PLO{n}</th>)}</tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map(y => (
                  <tr key={y}>
                    <td><Link className="lnk" to={`/ylo/${y}`}><b>YLO{y}</b> — ชั้นปีที่ {y}</Link></td>
                    {[1, 2, 3, 4, 5, 6, 7].map(n => <td key={n} className="c"><IRM v={YLO_PLO[y][n]} /></td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="hint">
            <IRM v="I" /> เริ่มแนะนำ · <IRM v="R" /> ฝึกซ้ำและขยายผล · <IRM v="M" /> ประเมินระดับปลายทาง —
            M ใน YLO3 หมายถึงการประเมินความสามารถในบริบท Track ส่วน PLO ระดับหลักสูตรยืนยันผลอีกครั้งผ่าน Capstone และสหกิจศึกษาใน YLO4
          </p>
        </Section>

        <Section title="การตรวจสอบคุณลักษณะ SMART">
          <table className="tbl">
            <thead><tr><th>องค์ประกอบ</th><th>การนำมาใช้กับ PLO ชุดนี้</th></tr></thead>
            <tbody>{PLO_SMART.map(([k, v]) => <tr key={k}><td><b>{k}</b></td><td className="mut">{v}</td></tr>)}</tbody>
          </table>
        </Section>

        <Section title="ความสัมพันธ์กับ PLO เดิม 5 ข้อ"
          sub="PLO 7 ข้อนี้รักษาสาระสำคัญของ PLO เดิม แต่แยกผลลัพธ์ที่เคยรวมกันเพื่อให้ประเมินได้ชัดเจนขึ้น">
          <table className="tbl">
            <thead><tr><th>PLO เดิม (5 ข้อ)</th><th>PLO ใหม่ (7 ข้อ)</th></tr></thead>
            <tbody>{PLO_LEGACY.map(([a, b]) => <tr key={a}><td className="mut">{a}</td><td>{b}</td></tr>)}</tbody>
          </table>
        </Section>
      </div>
    </main>
  );
}
