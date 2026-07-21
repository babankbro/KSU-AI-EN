import { useParams, Link, Navigate } from "react-router-dom";
import { PLO_DETAIL, PLO_LEAD, YLO_PLO, COURSES, GROUP_NAME, STRUCTURE } from "../data.js";
import { PageHead, Section, IRM, CourseRow } from "./ui.jsx";

const ORDER = ["ge", "eng", "ai", "track", "elec", "proj", "field"];

export default function PloDetail() {
  const n = Number(useParams().id);
  if (!PLO_DETAIL[n]) return <Navigate to="/plo" replace />;
  const p = PLO_DETAIL[n];
  const mine = COURSES.filter(c => c.p && c.p.includes(n));
  const byGroup = ORDER.map(g => [g, mine.filter(c => c.g === g)]).filter(([, l]) => l.length);
  const prev = n > 1 ? n - 1 : null, next = n < 7 ? n + 1 : null;

  return (
    <main style={{ "--pc": `var(--plo${n})` }}>
      <PageHead
        eyebrow={`ผลลัพธ์การเรียนรู้ระดับหลักสูตร · ABET ${p.so}`}
        title={`PLO${n} — ${p.title}`}
        lead={p.en}
        crumbs={[{ label: "PLO", to: "/plo" }, { label: `PLO${n}` }]} />

      <div className="wrap">
        <div className="plobanner">
          <span className="plolead-lab">{PLO_LEAD}</span>
          <p>{p.text}</p>
        </div>

        <Section title="คุณลักษณะของผลลัพธ์">
          <div className="deflist">
            <div><span>ด้านหลัก</span><b>{p.main}</b></div>
            <div><span>ด้านรอง</span><b>{p.side}</b></div>
            <div><span>ระดับความสามารถ</span><b>{p.level}</b></div>
            <div><span>ประเภท</span><b>{p.type}</b></div>
            <div><span>เทียบ ABET Student Outcome</span><b>{p.so}</b></div>
            <div className="wide"><span>หลักฐานการประเมินที่เหมาะสม</span><b>{p.evidence}</b></div>
            {p.need && <div className="wide"><span>การตอบสนองความต้องการผู้มีส่วนได้ส่วนเสีย</span><b>{p.need}</b></div>}
          </div>
        </Section>

        <Section title="การพัฒนาตามชั้นปี">
          <div className="irmline">
            {[1, 2, 3, 4].map(y => (
              <Link to={`/ylo/${y}`} className={`irmstep lv-${YLO_PLO[y][n]}`} key={y}>
                <b>ชั้นปีที่ {y}</b>
                <IRM v={YLO_PLO[y][n]} />
                <small>YLO{y}</small>
              </Link>
            ))}
          </div>
        </Section>

        <Section title={`รายวิชาที่รับผิดชอบ PLO${n}`} sub={`${mine.length} รายวิชา`}>
          {byGroup.map(([g, list]) => (
            <div className="trackblock" key={g}>
              <h3 className="trk-h">{GROUP_NAME[g]}<span>{list.length} วิชา · {(STRUCTURE.find(s => s.g === g) || {}).no}</span></h3>
              <div className="rowlist">
                {list.map(c => <CourseRow key={c.c} code={c.c} extra={c.sem ? <span className="semtag">ภาค {c.sem}</span> : <span className="semtag ghost">เลือกชีพ</span>} />)}
              </div>
            </div>
          ))}
        </Section>

        <div className="pagerow">
          {prev ? <Link className="btn" to={`/plo/${prev}`}>← PLO{prev} {PLO_DETAIL[prev].title}</Link> : <span />}
          {next ? <Link className="btn" to={`/plo/${next}`}>PLO{next} {PLO_DETAIL[next].title} →</Link> : <span />}
        </div>
      </div>
    </main>
  );
}
