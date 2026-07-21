import { useParams, Link, Navigate } from "react-router-dom";
import { YLO_DETAIL, YLO_PLO, YEAR_CREDITS, YEAR_COLOR, COURSES, SEM_TOTALS, SEM_TITLE, SEM_EXTRA, PLO_DETAIL } from "../data.js";
import { PageHead, Section, IRM, PloChip, PloTag, CourseRow } from "./ui.jsx";

export default function YloDetail() {
  const y = Number(useParams().id);
  if (!YLO_DETAIL[y]) return <Navigate to="/ylo" replace />;
  const d = YLO_DETAIL[y];
  const sems = [y * 2 - 1, y * 2];
  const prev = y > 1 ? y - 1 : null, next = y < 4 ? y + 1 : null;

  return (
    <main style={{ "--yc": YEAR_COLOR[y].fg }}>
      <PageHead
        eyebrow={`ผลลัพธ์การเรียนรู้ระดับชั้นปี · ชั้นปีที่ ${y} · ${YEAR_CREDITS[y]} หน่วยกิต`}
        title={`YLO${y} — ${d.title}`}
        lead={d.en}
        crumbs={[{ label: "YLO", to: "/ylo" }, { label: `YLO${y}` }]} />

      <div className="wrap">
        <div className="ylobanner"><p>{d.text}</p></div>

        <Section title="สาระสำคัญ">
          <div className="deflist">
            <div><span>ระดับการพัฒนา</span><b>{d.level}</b></div>
            <div><span>PLO ที่รองรับ</span><b>{d.plo}</b></div>
            <div className="wide"><span>หลักฐานปลายปี</span><b>{d.evidence}</b></div>
          </div>
        </Section>

        <Section title="ผลลัพธ์การเรียนรู้ย่อย (Sub-YLOs)">
          <div className="sublist">
            {d.sub.map(([id, text, plos]) => (
              <div className="subitem" key={id}>
                <span className="subid">{id}</span>
                <p>{text}</p>
                <div className="subplo">{plos.map(p => <PloChip key={p} n={p} small />)}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title={`ระดับการพัฒนา PLO ในชั้นปีที่ ${y}`}>
          <div className="irmgrid">
            {[1, 2, 3, 4, 5, 6, 7].map(n => (
              <Link to={`/plo/${n}`} className={`irmcell lv-${YLO_PLO[y][n]}`} key={n}>
                <b>PLO{n}</b>
                <IRM v={YLO_PLO[y][n]} />
                <small>{PLO_DETAIL[n].title}</small>
              </Link>
            ))}
          </div>
        </Section>

        <Section title="รายวิชาในชั้นปีนี้">
          {sems.map(s => {
            const list = COURSES.filter(c => c.sem === s);
            const extra = SEM_EXTRA[s] || [];
            return (
              <div className="trackblock" key={s}>
                <h3 className="trk-h">ภาคการศึกษาที่ {s} — {SEM_TITLE[s]}<span>{SEM_TOTALS[s]} หน่วยกิต</span></h3>
                <div className="rowlist">
                  {list.map(c => <CourseRow key={c.c} code={c.c} extra={c.p.map(p => <PloTag key={p} n={p} small />)} />)}
                  {extra.map((e, i) => (
                    <div className="crow g-elec ghost" key={i}>
                      <span className="bar" /><span className="ccode">— —</span>
                      <span className="cname">{e.s}<small>เลือกตามแขนง / ตามเกณฑ์มหาวิทยาลัย</small></span>
                      <span className="ccr">{e.k} นก.</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </Section>

        <Section title="จุดตรวจประเมินปลายปี (Year Gate)">
          <div className="gatebox">
            <b>{d.gate[0]}</b>
            <div><span>หลักฐานร่วมขั้นต่ำ</span><p>{d.gate[1]}</p></div>
            <div><span>เกณฑ์ตัดสินที่เสนอ</span><p>{d.gate[2]}</p></div>
          </div>
        </Section>

        <div className="pagerow">
          {prev ? <Link className="btn" to={`/ylo/${prev}`}>← YLO{prev} {YLO_DETAIL[prev].title}</Link> : <span />}
          {next ? <Link className="btn" to={`/ylo/${next}`}>YLO{next} {YLO_DETAIL[next].title} →</Link> : <span />}
        </div>
      </div>
    </main>
  );
}
