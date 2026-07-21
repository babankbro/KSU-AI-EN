import { Link } from "react-router-dom";
import { PLO_COLOR, PLO_NAME, GROUP_NAME, COURSES } from "../data.js";

/* หัวหน้าเพจ + breadcrumb */
export function PageHead({ eyebrow, title, lead, crumbs }) {
  return (
    <div className="pagehead">
      <div className="wrap">
        {crumbs && (
          <div className="crumbs">
            <Link to="/">หน้าแรก</Link>
            {crumbs.map((c, i) => (
              <span key={i}>
                <i>›</i>{c.to ? <Link to={c.to}>{c.label}</Link> : <b>{c.label}</b>}
              </span>
            ))}
          </div>
        )}
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </div>
  );
}

export function Section({ title, sub, children, id }) {
  return (
    <section className="sect" id={id}>
      {title && <h2 className="sect-h">{title}{sub && <small>{sub}</small>}</h2>}
      {children}
    </section>
  );
}

/* ป้าย PLO — คลิกไปหน้ารายละเอียด PLO */
export function PloChip({ n, level, small }) {
  return (
    <Link to={`/plo/${n}`} className={`plochip${small ? " sm" : ""}`}
      style={{ "--pc": PLO_COLOR[n] }} title={`PLO${n} ${PLO_NAME[n]}`}>
      PLO{n}{level ? <i>{level}</i> : null}
    </Link>
  );
}

/* ป้าย PLO แบบไม่ใช่ลิงก์ — ใช้เมื่ออยู่ภายในการ์ด/แถวที่เป็นลิงก์อยู่แล้ว (กัน <a> ซ้อน <a>) */
export function PloTag({ n, small }) {
  return (
    <span className={`plochip${small ? " sm" : ""}`}
      style={{ "--pc": PLO_COLOR[n] }} title={`PLO${n} ${PLO_NAME[n]}`}>PLO{n}</span>
  );
}

export function IRM({ v }) {
  const label = { I: "Introduce", R: "Reinforce", M: "Mastery" }[v];
  return <span className={`irm irm-${v}`} title={label}>{v}</span>;
}

/* แถวรายวิชา — คลิกไปหน้ารายวิชา */
export function CourseRow({ code, extra }) {
  const c = COURSES.find(x => x.c === code);
  if (!c) return null;
  return (
    <Link to={`/courses/${c.c}`} className={`crow g-${c.g}`}>
      <span className="bar" />
      <span className="ccode">{c.c}</span>
      <span className="cname">{c.t}<small>{c.e}</small></span>
      {extra ? <span className="cextra">{extra}</span> : null}
      <span className="ccr">{c.cr.split("(")[0]} นก.</span>
    </Link>
  );
}

export function GroupTag({ g }) {
  return <span className={`gtag g-${g}`}>{GROUP_NAME[g] || g}</span>;
}
