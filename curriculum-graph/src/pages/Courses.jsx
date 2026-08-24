import { useState, useMemo, useRef, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { COURSES, byOrderNo, GROUP_NAME, TRACK_NAME, shortOf } from "../data.js";
import { PageHead, Section, PloTag } from "./ui.jsx";

const FILTERS = [["all", "ทั้งหมด"], ["ge", "ศึกษาทั่วไป"], ["eng", "พื้นฐานวิศวฯ"], ["ai", "แกน AI"],
  ["track", "Core Track"], ["elec", "เลือกชีพ"], ["proj", "โครงงาน"], ["field", "สหกิจ"]];

const PANEL_W = 460;
const GAP = 14;
const OPEN_DELAY = 180;
const CLOSE_DELAY = 140;
// ป๊อปอัปเฉพาะอุปกรณ์ที่มี hover จริงและจอกว้างพอ — จอเล็ก/สัมผัส ใช้แตะเข้าหน้ารายละเอียดแทน
const HOVER_MQ = "(hover: hover) and (pointer: fine) and (min-width: 860px)";

/* ป๊อปอัปอ่านคำอธิบายรายวิชาแบบเต็ม — ลอยข้างการ์ดที่ชี้อยู่ */
function CoursePopover({ c, anchor, onEnter, onLeave }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ left: -9999, top: -9999 });

  // วางด้วยพิกัดของหน้าเอกสาร (absolute) ป๊อปอัปจึงเลื่อนไปพร้อมการ์ดโดยไม่ต้องคอยคำนวณใหม่
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const h = el.offsetHeight;
    const vw = window.innerWidth, vh = window.innerHeight;
    const sx = window.scrollX, sy = window.scrollY;
    // เลือกฝั่ง: ขวาก่อน ถ้าไม่พอให้ไปซ้าย ถ้ายังไม่พอ (การ์ดเต็มความกว้าง) ให้ชิดขอบขวาของจอ
    let left = anchor.right + GAP;
    if (left + PANEL_W > vw - 12) left = anchor.left - PANEL_W - GAP;
    if (left < 12) left = Math.max(12, vw - PANEL_W - 12);
    // แนวตั้ง: เริ่มที่ขอบบนการ์ด แล้วดันให้อยู่ในจอ ณ ขณะเปิด
    let top = Math.min(anchor.top, vh - h - 12);
    if (top < 12) top = 12;
    setPos({ left: left + sx, top: top + sy });
  }, [c.c, anchor]);

  return (
    <div ref={ref} className={`cpop g-${c.g}`} style={{ left: pos.left, top: pos.top, width: PANEL_W }}
      onMouseEnter={onEnter} onMouseLeave={onLeave} role="tooltip">
      <div className="cpop-head">
        <span className="cpop-code">{c.c}</span>
        <span className="cpop-cr">{c.cr}</span>
      </div>
      <b className="cpop-t">{c.t}</b>
      <div className="cpop-e">{c.e}</div>

      <div className="cpop-tags">
        <span className={`gtag g-${c.g}`}>{GROUP_NAME[c.g]}</span>
        {c.tr && <span className="gtag">{TRACK_NAME[c.tr]}</span>}
        {c.sem && <span className="semtag">ชั้นปีที่ {c.y} · ภาค {c.sem}</span>}
        {c.pendingSemester && <span className="semtag">รอยืนยันภาคเรียน</span>}
        {c.p.map(p => <PloTag key={p} n={p} small />)}
      </div>

      <div className="cpop-body">
        <div className="cpop-sec">
          <span className="cpop-lab">คำอธิบายรายวิชา (ไทย)</span>
          <p>{c.d}</p>
        </div>
        <div className="cpop-sec en">
          <span className="cpop-lab">Course Description (English)</span>
          <p>{c.dEn}</p>
        </div>
        {(c.h || c.w || c.co) && (
          <div className="cpop-sec">
            <span className="cpop-lab">เงื่อนไขรายวิชา</span>
            {c.h && <p>🔒 บังคับก่อน: {c.h.map(shortOf).join(" · ")}</p>}
            {c.w && <p>💡 แนะนำก่อน: {c.w.map(shortOf).join(" · ")}</p>}
            {c.co && <p>🔁 เรียนคู่: {c.co.map(shortOf).join(" · ")}</p>}
          </div>
        )}
      </div>
      <div className="cpop-foot">คลิกที่การ์ดเพื่อเปิดหน้ารายละเอียดของรายวิชานี้</div>
    </div>
  );
}

export default function Courses() {
  const [q, setQ] = useState("");
  const [f, setF] = useState("all");
  const [hv, setHv] = useState(null);          // { c, anchor }
  const tIn = useRef(null), tOut = useRef(null);

  const clear = () => { clearTimeout(tIn.current); clearTimeout(tOut.current); };
  const open = (c, el) => {
    // ประเมิน media query ตอนเปิดจริง เชื่อถือได้กว่าการเก็บสถานะจาก change event
    if (!window.matchMedia(HOVER_MQ).matches) return;
    clear();
    tIn.current = setTimeout(() => {
      const r = el.getBoundingClientRect();
      setHv({ c, anchor: { top: r.top, left: r.left, right: r.right, bottom: r.bottom } });
    }, OPEN_DELAY);
  };
  const close = () => { clear(); tOut.current = setTimeout(() => setHv(null), CLOSE_DELAY); };
  const keep = () => clear();

  // ปิดด้วย Esc หรือเมื่อเปลี่ยนขนาดจอ (ตำแหน่งที่คำนวณไว้จะไม่ตรงแล้ว)
  useEffect(() => {
    if (!hv) return;
    const off = () => { clear(); setHv(null); };
    const esc = e => { if (e.key === "Escape") off(); };
    window.addEventListener("resize", off);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("resize", off);
      window.removeEventListener("keydown", esc);
    };
  }, [hv]);

  useEffect(() => clear, []);

  const list = useMemo(() => {
    let l = COURSES;
    if (f !== "all") l = l.filter(c => c.g === f);
    if (q) { const s = q.toLowerCase(); l = l.filter(c => (c.c + c.t + c.e + c.s + c.d + c.dEn).toLowerCase().includes(s)); }
    return [...l].sort(byOrderNo);
  }, [q, f]);

  return (
    <main>
      <PageHead
        eyebrow="คำอธิบายรายวิชา · Course Descriptions"
        title={`รายวิชาทั้งหมด ${COURSES.length} วิชา`}
        lead="คำอธิบายรายวิชาภาษาไทยและภาษาอังกฤษตามเอกสารหลักสูตร พร้อม PLO ที่รับผิดชอบและเงื่อนไขรายวิชาก่อน — ชี้ที่รายวิชาเพื่ออ่านคำอธิบายฉบับเต็ม หรือคลิกเพื่อเปิดหน้ารายละเอียด"
        crumbs={[{ label: "รายวิชา" }]} />

      <div className="wrap">
        <div className="note cr-note">
          <b>การอ่านหน่วยกิต</b> — รูปแบบ <code>X(บรรยาย–ปฏิบัติการ–ศึกษาด้วยตนเอง)</code> ตามที่ สป.อว. กำหนด
          โดยคิดชั่วโมงศึกษาค้นคว้าด้วยตนเองจาก <b>บรรยาย 1 ชั่วโมง = 2 ชั่วโมง</b> และ <b>ปฏิบัติการ 1 ชั่วโมง = 0.5 ชั่วโมง</b>{" "}
          แล้วปัดเศษ .5 ขึ้นเป็นจำนวนเต็ม · ตัวอย่าง <code>3(2-2-5)</code> มาจาก 2×2 + 2×0.5 = 5
          และ <code>1(0-3-2)</code> มาจาก 3×0.5 = 1.5 ปัดขึ้นเป็น 2
        </div>

        <div className="toolbar">
          <input placeholder="🔍 ค้นหา รหัส / ชื่อวิชา / คำในคำอธิบายไทย–อังกฤษ…" value={q} onChange={e => setQ(e.target.value)} />
          {FILTERS.map(([id, l]) => (
            <button key={id} className={`fbtn ${f === id ? "on" : ""}`} onClick={() => setF(id)}>{l}</button>
          ))}
          <span className="count">{list.length} วิชา</span>
        </div>

        <Section>
          <div className="coursegrid">
            {list.map(c => (
              <Link to={`/courses/${c.c}`} className={`ccard g-${c.g}${hv && hv.c.c === c.c ? " lit" : ""}`} key={c.c}
                onMouseEnter={e => open(c, e.currentTarget)}
                onMouseLeave={close}
                onFocus={e => open(c, e.currentTarget)}
                onBlur={close}>
                <div className="cc-head">
                  <span className="cc-code">{c.c}</span>
                  <span className="cc-cr">{c.cr}</span>
                </div>
                <b className="cc-t">{c.t}</b>
                <div className="cc-e">{c.e}</div>
                <p className="cc-d">{c.d.slice(0, 260)}…</p>
                <div className="cc-foot">
                  <span className={`gtag g-${c.g}`}>{GROUP_NAME[c.g]}</span>
                  {c.tr && <span className="gtag">Track {c.tr}</span>}
                  {c.sem && <span className="semtag">ภาค {c.sem}</span>}
                  {c.pendingSemester && <span className="semtag">รอยืนยันภาคเรียน</span>}
                  {c.p.map(p => <PloTag key={p} n={p} small />)}
                </div>
              </Link>
            ))}
          </div>
          {!list.length && <div className="note">ไม่พบรายวิชาที่ตรงกับคำค้น</div>}
        </Section>
      </div>

      {hv && <CoursePopover c={hv.c} anchor={hv.anchor} onEnter={keep} onLeave={close} />}
    </main>
  );
}
