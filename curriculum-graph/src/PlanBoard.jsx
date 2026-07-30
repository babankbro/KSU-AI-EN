import { useState } from "react";
import { Link } from "react-router-dom";
import {
  COURSES, SEM_TOTALS, SEM_TITLE, SEM_EXTRA, YEAR_CREDITS, YEAR_COLOR,
  GROUP_NAME, GROUP_COLOR, YLO_DETAIL, TOTAL_CREDITS
} from "./data.js";
import "./planboard.css";

const crOf = c => Number(String(c.cr).split("(")[0]) || 0;
const GROUPS = ["ge", "eng", "ai", "track", "elec", "proj", "field"];

export default function PlanBoard() {
  const [hl, setHl] = useState(null);   // กลุ่มวิชาที่กรอง

  return (
    <div className="pb">
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
      </div>

      <div className="pb-scroll">
        <div className="pb-board">
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
                  const list = COURSES.filter(c => c.sem === s);
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
        <span>แผนข้อเสนอรวม <b>{TOTAL_CREDITS}</b> นก. · ปี 4 = <b>13 + 6</b> นก.</span>
        <span className="pb-hint">ความสูงของบล็อก = จำนวนหน่วยกิต · คลิกรายวิชาเพื่อดูรายละเอียด · คลิกสีในคำอธิบายเพื่อกรองกลุ่ม</span>
      </div>
    </div>
  );
}
