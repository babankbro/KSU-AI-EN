import { PageHead, Section, PloChip, IRM } from "./ui.jsx";
import { STRATEGIES, PLO_TEACHING } from "../teachingData.js";

/* แยกชื่อกลยุทธ์ "1. การสอนโดยตรง · (Direct Instruction)" เป็นเลข ไทย อังกฤษ */
function parseName(raw) {
  const m = raw.match(/^(\d+)\.\s*(.*)$/);
  const rest = m ? m[2] : raw;
  const en = rest.match(/\(([^)]+)\)\s*$/);
  return { no: m ? m[1] : "", th: rest.replace(/·?\s*\([^)]+\)\s*$/, "").replace(/·\s*$/, "").trim(), en: en ? en[1] : "" };
}
const bullets = s => s.split("·").map(x => x.replace(/^•\s*/, "").trim()).filter(Boolean);

export default function Teaching() {
  return (
    <main>
      <PageHead
        eyebrow="กระบวนการจัดการเรียนการสอน · Teaching & Learning Process"
        title="กลยุทธ์การจัดการเรียนการสอน 5 รูปแบบ"
        lead="แต่ละกลยุทธ์รับผิดชอบ PLO ข้อใด พาไปถึงระดับใด ใช้วิธีดำเนินการและเครื่องมือใด — ตรงกับหมวดที่ 5 ตารางที่ 5.1 ของเล่มหลักสูตร"
        crumbs={[{ label: "กลยุทธ์การสอน" }]} />

      <div className="wrap">
        <Section id="overview" title="ความครอบคลุม PLO ของแต่ละกลยุทธ์"
          sub="ตรวจว่าไม่มี PLO ใดพึ่งกลยุทธ์เดียวโดยไม่มีทางสำรอง">
          <div className="obe-tablewrap">
            <table className="tbl tch-matrix">
              <thead>
                <tr>
                  <th>กลยุทธ์</th>
                  {[1, 2, 3, 4, 5, 6, 7].map(p => <th key={p} className="c"><PloChip n={p} /></th>)}
                </tr>
              </thead>
              <tbody>
                {STRATEGIES.map(s => {
                  const n = parseName(s.name);
                  return (
                    <tr key={s.name}>
                      <td><b>{n.no}. {n.th}</b>{n.en && <small className="mut"> · {n.en}</small>}</td>
                      {[1, 2, 3, 4, 5, 6, 7].map(p => (
                        <td key={p} className="c">
                          {s.plos.includes(p)
                            ? <span className="tch-lv">{s.levelOf[p] || "●"}</span>
                            : <span className="mut">·</span>}
                        </td>
                      ))}
                    </tr>
                  );
                })}
                <tr className="tch-sum">
                  <td>จำนวนกลยุทธ์ที่รองรับ</td>
                  {[1, 2, 3, 4, 5, 6, 7].map(p => {
                    const n = STRATEGIES.filter(s => s.plos.includes(p)).length;
                    return <td key={p} className={"c" + (n <= 1 ? " thin" : "")}><b>{n}</b></td>;
                  })}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="obe-note">
            ช่องที่ทำเครื่องหมายคือระดับที่กลยุทธ์นั้นพา PLO ไปถึง (I / R / M) ·
            คอลัมน์ที่มีเลข <b>1</b> หมายถึง PLO นั้นพึ่งกลยุทธ์เดียว ควรพิจารณาเพิ่มทางสำรอง
          </p>
        </Section>

        <Section id="detail" title="รายละเอียดรายกลยุทธ์">
          <div className="tch-cards">
            {STRATEGIES.map(s => {
              const n = parseName(s.name);
              return (
                <article className="tch-card" key={s.name}>
                  <header className="tch-head">
                    <span className="tch-no">{n.no}</span>
                    <div>
                      <b>{n.th}</b>
                      {n.en && <small>{n.en}</small>}
                    </div>
                    <div className="tch-plos">
                      {s.plos.map(p => <PloChip key={p} n={p} level={s.levelOf[p]} small />)}
                    </div>
                  </header>
                  <div className="tch-body">
                    <div>
                      <h4>วิธีดำเนินการ</h4>
                      <ul>{bullets(s.how).map((b, i) => <li key={i}>{b}</li>)}</ul>
                    </div>
                    <div>
                      <h4>เครื่องมือและกิจกรรม</h4>
                      <ul>{bullets(s.tools).map((b, i) => <li key={i}>{b}</li>)}</ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        <Section id="perplo" title="กลยุทธ์ที่รับผิดชอบแต่ละ PLO"
          sub="อ่านจากฝั่ง PLO — ดูรายละเอียดการประเมินได้ที่หน้าการวัดและประเมินผล">
          <div className="tch-plogrid">
            {PLO_TEACHING.map(p => (
              <div className="tch-plobox" key={p.plo}>
                <div className="tch-plohead">
                  <PloChip n={p.plo} /> <b>{p.name}</b>
                  <span className="tch-top">ปลายทาง <IRM v={p.top} /></span>
                </div>
                <ul className="tch-plolist">
                  {p.strategies.map(s => {
                    const n = parseName(s.name);
                    return <li key={s.name}><b>{n.th}</b>{s.level && <i> · {s.level}</i>}</li>;
                  })}
                  {!p.strategies.length && <li className="mut">ยังไม่มีกลยุทธ์ใดอ้าง PLO นี้</li>}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
