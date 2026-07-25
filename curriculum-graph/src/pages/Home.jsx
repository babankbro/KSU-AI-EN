import { Link } from "react-router-dom";
import { COURSES, STRUCTURE_TOP, YEAR_CREDITS, YLO_DETAIL, PLO_DETAIL, YEAR_COLOR, TOTAL_CREDITS } from "../data.js";
import { Section, PloChip } from "./ui.jsx";

const CARDS = [
  { to: "/structure", icon: "▦", t: "โครงสร้างหลักสูตร", d: "130 หน่วยกิต แยกตามหมวดและกลุ่มวิชา พร้อมรายวิชาทั้งหมดในแต่ละกลุ่ม" },
  { to: "/plo", icon: "◎", t: "PLO 7 ข้อ", d: "ผลลัพธ์การเรียนรู้ระดับหลักสูตร เทียบ ABET SO(1)–(7) พร้อมรายวิชาที่รับผิดชอบ" },
  { to: "/ylo", icon: "◈", t: "YLO 4 ชั้นปี", d: "ผลลัพธ์การเรียนรู้รายชั้นปี Sub-YLO ตาราง I–R–M และจุดตรวจประเมิน (Year Gates)" },
  { to: "/plan", icon: "▤", t: "แผนการเรียน", d: "8 ภาคการศึกษา พร้อมบทบาทของแต่ละรายวิชาต่อ YLO" },
  { to: "/graph", icon: "⇄", t: "กราฟรายวิชา", d: "ลำดับก่อน–หลังของ 32 วิชาแกน แบบ Hard / Weak / Co-requisite" },
  { to: "/careers", icon: "◆", t: "เส้นทางอาชีพ", d: "สายวิชาของแต่ละแขนงจนถึงอาชีพเป้าหมาย 12 ตำแหน่งจากข้อมูลตลาดแรงงาน" },
  { to: "/courses", icon: "☰", t: "คำอธิบายรายวิชา", d: "85 รายวิชา คำอธิบายภาษาไทยและภาษาอังกฤษตามเอกสารหลักสูตร" }
];

export default function Home() {
  const nElec = COURSES.filter(c => c.g === "elec").length;
  return (
    <main>
      <div className="hero">
        <div className="wrap">
          <div className="eyebrow">Bachelor of Engineering · Artificial Intelligence and Intelligent Systems</div>
          <h1>หลักสูตรวิศวกรรมศาสตรบัณฑิต<br />วิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ</h1>
          <p className="lead">
            หลักสูตรใหม่ พ.ศ. 2570 ออกแบบด้วยกระบวนการ Outcome-Based Education เชื่อมความต้องการของ
            ผู้มีส่วนได้ส่วนเสียและข้อมูลตลาดแรงงานจริง เข้าสู่ผลลัพธ์การเรียนรู้ระดับหลักสูตร รายชั้นปี และรายวิชา
            ในบริบทเกษตรอัจฉริยะ อุตสาหกรรม และนวัตกรรมปัญญาประดิษฐ์ระดับองค์กรของภาคอีสาน
          </p>
          <div className="hero-stats">
            <div><b>{TOTAL_CREDITS}</b><span>หน่วยกิตรวม</span></div>
            <div><b>7</b><span>PLO · ABET SO(1)–(7)</span></div>
            <div><b>4</b><span>YLO รายชั้นปี</span></div>
            <div><b>32</b><span>รายวิชาแกนบังคับ</span></div>
            <div><b>{nElec}</b><span>วิชาเลือกชีพใน pool</span></div>
            <div><b>3</b><span>แขนงวิชา (Track)</span></div>
          </div>
          <div className="hero-cta">
            <Link className="btn primary" to="/structure">ดูโครงสร้างหลักสูตร</Link>
            <Link className="btn" to="/obe">ขั้นตอนการวิเคราะห์ OBE</Link>
            <Link className="btn" to="/plo">ผลลัพธ์การเรียนรู้ PLO</Link>
          </div>
        </div>
      </div>

      <div className="wrap">
        <Section title="สำรวจหลักสูตร">
          <div className="cardgrid">
            {CARDS.map(c => (
              <Link className="navcard" to={c.to} key={c.to}>
                <span className="ic">{c.icon}</span>
                <b>{c.t}</b>
                <p>{c.d}</p>
                <span className="go">เปิดดู →</span>
              </Link>
            ))}
          </div>
        </Section>

        <Section title="เส้นทางการเรียนรู้ 4 ชั้นปี" sub="Curriculum Scaffolding">
          <div className="ladder">
            {[1, 2, 3, 4].map(y => {
              const yl = YLO_DETAIL[y];
              return (
                <Link to={`/ylo/${y}`} className={`rung y${y}`} key={y} style={{ "--yc": YEAR_COLOR[y].fg }}>
                  <div className="rung-h"><b>ชั้นปีที่ {y}</b><span>{YEAR_CREDITS[y]} นก.</span></div>
                  <div className="rung-t">{yl.title}</div>
                  <div className="rung-e">{yl.en}</div>
                  <div className="rung-l">YLO{y} · {yl.level.split("ใน")[0].trim()}</div>
                </Link>
              );
            })}
          </div>
        </Section>

        <Section title="สัดส่วนหน่วยกิตตามหมวดวิชา">
          <div className="creditbar">
            {STRUCTURE_TOP.map((s, i) => (
              <div key={s.name} className={`cbseg s${i}`} style={{ flexGrow: s.credits }}>
                <b>{s.credits}</b><span>{s.name}</span>
              </div>
            ))}
          </div>
          <p className="hint">รวม {TOTAL_CREDITS} หน่วยกิต · <Link to="/structure">ดูรายละเอียดแต่ละกลุ่มวิชา →</Link></p>
        </Section>

        <Section title="ผลลัพธ์การเรียนรู้ระดับหลักสูตร (PLO)" sub="เทียบ ABET Student Outcomes แบบ 1:1">
          <div className="plostrip">
            {[1, 2, 3, 4, 5, 6, 7].map(n => (
              <Link to={`/plo/${n}`} className="plocard-sm" key={n} style={{ "--pc": `var(--plo${n})` }}>
                <span className="num">PLO{n}</span>
                <b>{PLO_DETAIL[n].title}</b>
                <small>{PLO_DETAIL[n].so}</small>
              </Link>
            ))}
          </div>
          <p className="hint"><PloChip n={1} small /> คลิกที่ป้าย PLO ได้จากทุกหน้าเพื่อดูรายละเอียดและรายวิชาที่รับผิดชอบ</p>
        </Section>
      </div>
    </main>
  );
}
