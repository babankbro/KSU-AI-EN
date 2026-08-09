import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import {
  COURSES, SEM_TOTALS, SEM_TITLE, SEM_EXTRA, YEAR_CREDITS, YEAR_COLOR,
  GROUP_NAME, GROUP_COLOR, YLO_DETAIL, TOTAL_CREDITS, byOrderNo
} from "./data.js";
import "./planboard.css";

const crOf = c => Number(String(c.cr).split("(")[0]) || 0;
const GROUPS = ["ge", "eng", "ai", "track", "elec", "proj", "field"];

export default function PlanBoard() {
  const [hl, setHl] = useState(null);   // กลุ่มวิชาที่กรอง
  const [full, setFull] = useState(false);
  const [k, setK] = useState(1);        // อัตราย่อ/ขยายให้พอดีจอในโหมดเต็มจอ
  const pbRef = useRef(null), fitRef = useRef(null), boardRef = useRef(null);

  const openFull = () => {
    pbRef.current?.requestFullscreen?.().catch(() => {});
    setFull(true);
  };
  const closeFull = () => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    setFull(false);
  };

  // ออกจากโหมดเต็มจอเมื่อผู้ใช้กด Esc หรือออกจาก fullscreen ของเบราว์เซอร์
  useEffect(() => {
    const onFs = () => { if (!document.fullscreenElement) setFull(false); };
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  // ล็อกการเลื่อนหน้าหลัก และรับ Esc เผื่อกรณีที่เบราว์เซอร์ไม่อนุญาต fullscreen จริง
  useEffect(() => {
    if (!full) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = e => { if (e.key === "Escape") setFull(false); };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", onKey); };
  }, [full]);

  // ย่อกระดานให้พอดีพื้นที่ที่เหลือ เพื่อให้เห็นครบทั้งหลักสูตรโดยไม่ต้องเลื่อนจอ
  useLayoutEffect(() => {
    if (!full) { setK(1); return; }
    const fit = () => {
      const box = fitRef.current, board = boardRef.current;
      if (!box || !board) return;
      const bw = board.offsetWidth, bh = board.offsetHeight;
      if (!bw || !bh) return;
      setK(Math.min(box.clientWidth / bw, box.clientHeight / bh));
    };
    fit();
    const t = setTimeout(fit, 150);   // เผื่อเบราว์เซอร์ยังปรับขนาดจอไม่เสร็จ
    window.addEventListener("resize", fit);
    return () => { clearTimeout(t); window.removeEventListener("resize", fit); };
  }, [full]);

  return (
    <div className={`pb${full ? " full" : ""}`} ref={pbRef} style={{ "--k": k }}>
      {/* คำอธิบายสี — คลิกเพื่อไฮไลต์เฉพาะกลุ่ม */}
      <div className="pb-legend">
        {GROUPS.map(g => (
          <button key={g} className={`pb-lg${hl === g ? " on" : ""}`}
            style={{ "--gc": GROUP_COLOR[g]?.fg, "--gb": GROUP_COLOR[g]?.bg }}
            onClick={() => setHl(hl === g ? null : g)}>
            <i /> {GROUP_NAME[g]}
          </button>
        ))}
        {hl && <button className="pb-clear" onClick={() => setHl(null)}>✕ แสดงทุกกลุ่ม</button>}
        {full
          ? <button className="pb-fs" onClick={closeFull}>✕ ออกจากเต็มจอ (Esc)</button>
          : <button className="pb-fs" onClick={openFull}>⛶ ดูเต็มจอ</button>}
      </div>

      <div className="pb-scroll" ref={fitRef}>
        <div className="pb-board" ref={boardRef}>
          {[1, 2, 3, 4].map(y => (
            <div className="pb-year" key={y} style={{ "--yc": YEAR_COLOR[y].fg, "--yb": YEAR_COLOR[y].bg }}>
              <div className="pb-yhead">
                <Link to={`/ylo/${y}`} className="pb-ytitle">
                  <b>ชั้นปีที่ {y}</b>
                  <span>YLO{y} · {YLO_DETAIL[y].title}</span>
                </Link>
                <span className="pb-ycr">{YEAR_CREDITS[y]} นก.</span>
              </div>

              <div className="pb-sems">
                {[y * 2 - 1, y * 2].map(s => {
                  const list = COURSES.filter(c => c.sem === s).sort(byOrderNo);
                  const extra = SEM_EXTRA[s] || [];
                  return (
                    <div className="pb-sem" key={s}>
                      <div className="pb-shead">
                        <b>ภาค {s}</b>
                        <span>{SEM_TOTALS[s]} นก.</span>
                      </div>
                      <div className="pb-stitle">{SEM_TITLE[s]}</div>

                      <div className="pb-stack">
                        {list.map(c => {
                          const dim = hl && c.g !== hl;
                          const cr = crOf(c);
                          return (
                            <Link to={`/courses/${c.c}`} key={c.c}
                              className={`pb-c${dim ? " dim" : ""}`}
                              style={{
                                "--gc": GROUP_COLOR[c.g]?.fg, "--gb": GROUP_COLOR[c.g]?.bg,
                                minHeight: 26 + cr * 7
                              }}
                              title={`${c.c} ${c.t} · ${c.cr}`}>
                              <span className="pb-code">{c.c}</span>
                              <span className="pb-nm">{c.s || c.t}</span>
                              <span className="pb-cr">{cr}</span>
                            </Link>
                          );
                        })}
                        {extra.map((e, i) => (
                          <div className={`pb-c ghost${hl && hl !== "elec" ? " dim" : ""}`} key={i}
                            style={{ "--gc": GROUP_COLOR.elec.fg, "--gb": GROUP_COLOR.elec.bg, minHeight: 26 + e.k * 7 }}>
                            <span className="pb-code">— —</span>
                            <span className="pb-nm">{e.s}</span>
                            <span className="pb-cr">{e.k}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-foot">
        <span>แผนการเรียนรวม <b>{TOTAL_CREDITS}</b> นก. · 8 ภาคการศึกษา</span>
        <span className="pb-hint">ความสูงของบล็อก = จำนวนหน่วยกิต · คลิกรายวิชาเพื่อดูรายละเอียด · คลิกสีในคำอธิบายเพื่อกรองกลุ่ม</span>
      </div>
    </div>
  );
}
