import { Link } from "react-router-dom";
import { YLO_DETAIL, YLO_PLO, YEAR_CREDITS, YEAR_COLOR, SCAFFOLD, SEQ_PRINCIPLES, PLO_DETAIL } from "../data.js";
import { PageHead, Section, IRM } from "./ui.jsx";

export default function Ylos() {
  return (
    <main>
      <PageHead
        eyebrow="ผลลัพธ์การเรียนรู้ระดับชั้นปี · Year Learning Outcomes"
        title="YLO 4 ชั้นปี"
        lead="จัดลำดับการเรียนรู้แบบ Curriculum Scaffolding จากพื้นฐาน → พัฒนาองค์ประกอบ → บูรณาการระบบ → ปฏิบัติงานวิชาชีพ โดยแต่ละชั้นปีมีผลลัพธ์ที่ประเมินได้ของตนเอง และส่งต่อไปยัง PLO ระดับหลักสูตรแบบ Introduce → Reinforce → Mastery"
        crumbs={[{ label: "YLO" }]} />

      <div className="wrap">
        <Section title="เส้นทางการเรียนรู้ 4 ชั้นปี">
          <div className="scaffold">
            {SCAFFOLD.map(s => (
              <Link to={`/ylo/${s.y}`} className={`sc y${s.y}`} key={s.y} style={{ "--yc": YEAR_COLOR[s.y].fg }}>
                <div className="sc-y">ปี {s.y}</div>
                <b>{s.th}</b>
                <small>{s.en}</small>
                <span className="sc-l">{s.ylo}</span>
              </Link>
            ))}
          </div>
        </Section>

        <Section title="รายละเอียด YLO">
          <div className="ylolist">
            {[1, 2, 3, 4].map(y => {
              const d = YLO_DETAIL[y];
              return (
                <Link to={`/ylo/${y}`} className={`ylocard y${y}`} key={y} style={{ "--yc": YEAR_COLOR[y].fg }}>
                  <div className="yc-head">
                    <span className="yc-num">YLO{y}</span>
                    <span className="yc-cr">ชั้นปีที่ {y} · {YEAR_CREDITS[y]} นก.</span>
                  </div>
                  <b className="yc-title">{d.title}</b>
                  <div className="yc-en">{d.en}</div>
                  <p className="yc-text">{d.text}</p>
                  <div className="yc-foot">
                    <span className="pill">{d.level}</span>
                    <span className="yc-n">{d.sub.length} Sub-YLO</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>

        <Section title="ตาราง YLO ↔ PLO และระดับการพัฒนา">
          <div className="scroll-x">
            <table className="tbl matrix">
              <thead>
                <tr>
                  <th>YLO</th>
                  {[1, 2, 3, 4, 5, 6, 7].map(n => (
                    <th key={n} className="c"><Link className="lnk" to={`/plo/${n}`}>PLO{n}</Link></th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map(y => (
                  <tr key={y}>
                    <td><Link className="lnk" to={`/ylo/${y}`}><b>YLO{y}</b> — {YLO_DETAIL[y].title}</Link></td>
                    {[1, 2, 3, 4, 5, 6, 7].map(n => <td key={n} className="c"><IRM v={YLO_PLO[y][n]} /></td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="hint">
            สัญลักษณ์ <IRM v="I" /> Introduce · <IRM v="R" /> Reinforce · <IRM v="M" /> Mastery —
            M ใน YLO3 คือการประเมินความสามารถของระบบในบริบท Track ส่วนผลสัมฤทธิ์ปลายทางระดับหลักสูตรยืนยันอีกครั้งใน YLO4
          </p>
        </Section>

        <Section title="หลักการจัดลำดับการเรียนรู้">
          <ol className="numlist">
            {SEQ_PRINCIPLES.map((t, i) => <li key={i}>{t}</li>)}
          </ol>
        </Section>

        <Section title="จุดตรวจประเมิน YLO (Year Gates)">
          <div className="scroll-x">
            <table className="tbl">
              <thead><tr><th>จุดประเมิน</th><th>หลักฐานร่วมขั้นต่ำ</th><th>เกณฑ์ตัดสินที่เสนอ</th></tr></thead>
              <tbody>
                {[1, 2, 3, 4].map(y => {
                  const [g0, g1, g2] = YLO_DETAIL[y].gate;
                  return <tr key={y}><td><b>{g0}</b></td><td className="mut">{g1}</td><td className="mut">{g2}</td></tr>;
                })}
              </tbody>
            </table>
          </div>
        </Section>
      </div>
    </main>
  );
}
