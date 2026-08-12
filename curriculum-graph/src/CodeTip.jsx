import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./tip.css";
import { lookup } from "./codeInfo.js";
import { PLO_COLOR, PLO_NAME } from "./data.js";

/* ป้ายรหัสทุกชนิดในเว็บ — ชี้ค้างแล้วแสดงคำอธิบายฉบับเต็มของรหัสย่อนั้น
   ใช้การมอบหมายเหตุการณ์ (event delegation) จุดเดียว จึงครอบคลุมทุกหน้าโดยไม่ต้องแก้ทีละจุด */
const SEL = [
  "[data-tip]", ".plochip", ".plo-mini", ".setchip", ".clo-setchip", ".clo-setid",
  ".obe-code", ".skchip", ".nchip", ".cchip", ".clo-cchip", ".clo-ylochip", ".ksachip",
  ".irm", ".ccode", ".clo-code", ".cc-code", ".jp-id", ".clo-subid", ".gbox b",
  ".gnode-code", ".gnode-plo", ".pc-num", ".plocard-sm .num"
].join(",");

const MAXW = 360;
const GAP = 12;
const OPEN_DELAY = 140;
const CLOSE_DELAY = 120;
// เฉพาะอุปกรณ์ที่ชี้ด้วยเมาส์จริงและจอกว้างพอ — จอเล็ก/สัมผัสใช้การแตะเข้าหน้ารายละเอียดแทน
const HOVER_MQ = "(hover: hover) and (pointer: fine) and (min-width: 560px)";

/* ข้อความรหัสของป้าย — อ่านเฉพาะโหนดข้อความชั้นแรก จึงไม่ติดตัวห้อย เช่น ระดับใน PLO2 (M) */
function codeOf(el) {
  if (el.dataset && el.dataset.tip) return el.dataset.tip;
  let t = "";
  el.childNodes.forEach(n => { if (n.nodeType === 3) t += n.textContent; });
  return (t.trim() || el.textContent || "").trim();
}

export default function CodeTip() {
  const [tip, setTip] = useState(null);       // { info, left, top }
  const state = useRef({ el: null, openT: 0, closeT: 0 });
  const panel = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => setTip(null), [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(HOVER_MQ);
    const s = state.current;

    const close = () => {
      clearTimeout(s.openT); clearTimeout(s.closeT);
      if (s.el && s.el.dataset.tipTitle != null) {       // คืนค่า title เดิมของป้าย
        s.el.title = s.el.dataset.tipTitle;
        delete s.el.dataset.tipTitle;
      }
      s.el = null;
      setTip(null);
    };

    const open = el => {
      const info = lookup(codeOf(el));
      if (!info) return;
      if (el.title) { el.dataset.tipTitle = el.title; el.title = ""; }  // กันซ้ำกับ tooltip ของเบราว์เซอร์
      s.el = el;
      const r = el.getBoundingClientRect();
      setTip({ info, anchor: { left: r.left, right: r.right, top: r.top, bottom: r.bottom } });
    };

    const onOver = e => {
      if (!mq.matches) return;
      const el = e.target.closest && e.target.closest(SEL);
      if (!el || el === s.el) return;
      // ในหน้ารายวิชา การ์ดมีป๊อปอัปอ่านคำอธิบายของตัวเองอยู่แล้ว จึงไม่ซ้อนป๊อปอัปรหัสอีกชั้น
      if (el.closest(".ccard, .cpop")) return;
      clearTimeout(s.openT); clearTimeout(s.closeT);
      if (s.el) close();
      s.openT = setTimeout(() => open(el), OPEN_DELAY);
    };

    const onOut = e => {
      if (!s.el) { clearTimeout(s.openT); return; }
      const to = e.relatedTarget;
      if (to && (s.el.contains(to) || (panel.current && panel.current.contains(to)))) return;
      clearTimeout(s.openT);
      s.closeT = setTimeout(close, CLOSE_DELAY);
    };

    const onKey = e => { if (e.key === "Escape") close(); };

    document.addEventListener("mouseover", onOver, true);
    document.addEventListener("mouseout", onOut, true);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    return () => {
      clearTimeout(s.openT); clearTimeout(s.closeT);
      document.removeEventListener("mouseover", onOver, true);
      document.removeEventListener("mouseout", onOut, true);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
  }, []);

  /* วางตำแหน่ง: ใต้ป้ายก่อน ถ้าล้นจอให้พลิกขึ้นบน และดันเข้าขอบซ้าย/ขวาให้พอดี
     วัดความสูงจริงหลังวาดเสร็จอีกรอบ (useLayoutEffect) เพื่อให้การพลิกด้านแม่นยำ */
  const w = tip ? Math.min(MAXW, window.innerWidth - 24) : MAXW;
  useLayoutEffect(() => {
    const el = panel.current;
    if (!el || !tip) return;
    const a = tip.anchor;
    const h = el.offsetHeight;
    const top = a.bottom + GAP + h > window.innerHeight - 12
      ? Math.max(12, a.top - h - GAP)
      : a.bottom + GAP;
    el.style.top = `${top}px`;
    el.style.left = `${Math.min(Math.max(12, a.left), window.innerWidth - w - 12)}px`;
  }, [tip, w]);

  return tip ? (
    <div ref={panel} className="ctip" role="tooltip"
      style={{ width: w, left: -9999, top: -9999, "--ac": tip.info.accent }}
      onMouseEnter={() => clearTimeout(state.current.closeT)}
      onMouseLeave={() => setTip(null)}>
      <div className="ctip-head">
        <span className="ctip-id">{tip.info.id}</span>
        <span className="ctip-kind">{tip.info.kind}</span>
      </div>
      <b className="ctip-title">{tip.info.title}</b>
      {tip.info.en && <div className="ctip-en">{tip.info.en}</div>}
      {tip.info.body && <p className="ctip-body">{tip.info.body}</p>}

      {tip.info.rows && tip.info.rows.filter(r => r[1]).length > 0 && (
        <dl className="ctip-rows">
          {tip.info.rows.filter(r => r[1]).map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      )}

      {((tip.info.plo && tip.info.plo.length) || (tip.info.sets && tip.info.sets.length)) ? (
        <div className="ctip-chips">
          {(tip.info.sets || []).map(s => <span className="ctip-set" key={s}>{s}</span>)}
          {(tip.info.plo || []).map(p => (
            <span className="ctip-plo" key={p} style={{ "--pc": PLO_COLOR[p] }}
              title={PLO_NAME[p]}>PLO{p}</span>
          ))}
        </div>
      ) : null}

      {tip.info.to && <Link className="ctip-go" to={tip.info.to}>เปิดหน้ารายละเอียด →</Link>}
    </div>
  ) : null;
}
