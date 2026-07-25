import { useMemo, useState } from "react";
import "./alluvial.css";

/* ── Alluvial / Sankey แบบเบา ไม่พึ่ง d3 ──
   props:
     columns : [{ key, label }]
     nodes   : [{ id, col, label, sub?, color?, href? }]
     links   : [{ s, t, v? }]          s/t = node id
     height  : ความสูงพื้นที่วาด (px)
*/
export default function Alluvial({ columns, nodes, links, height = 560, nodeW = 15, gap = 5, pad = 26 }) {
  const [hot, setHot] = useState(null);   // node id ที่ hover/คลิก
  const [pin, setPin] = useState(null);

  const active = pin || hot;

  const layout = useMemo(() => {
    const byId = new Map(nodes.map(n => [n.id, { ...n, in: 0, out: 0 }]));
    links.forEach(l => {
      const v = l.v ?? 1;
      const s = byId.get(l.s), t = byId.get(l.t);
      if (s) s.out += v;
      if (t) t.in += v;
    });
    byId.forEach(n => { n.val = Math.max(n.in, n.out, 1); });

    const cols = columns.map((c, ci) => {
      const list = nodes.filter(n => n.col === c.key).map(n => byId.get(n.id));
      const total = list.reduce((a, b) => a + b.val, 0) || 1;
      return { ...c, ci, list, total };
    });

    // สเกล: คอลัมน์ที่หนาสุดต้องพอดีพื้นที่
    const maxTotal = Math.max(...cols.map(c => c.total));
    const maxCount = Math.max(...cols.map(c => c.list.length));
    const usable = height - pad * 2 - (maxCount - 1) * gap;
    const k = usable / maxTotal;
    const MINH = 9;

    cols.forEach(c => {
      const h = c.list.reduce((a, n) => a + Math.max(n.val * k, MINH), 0) + (c.list.length - 1) * gap;
      let y = pad + Math.max(0, (height - pad * 2 - h) / 2);
      c.list.forEach(n => {
        n.h = Math.max(n.val * k, MINH);
        n.y = y; n.ci = c.ci;
        n.sy = y; n.ty = y;           // ตัวชี้ offset ของริบบิ้น
        y += n.h + gap;
      });
    });

    const colX = ci => columns.length === 1 ? 0 : (ci / (columns.length - 1)) * 100;

    // เรียงลิงก์ตามตำแหน่ง node เพื่อลดการไขว้
    const ordered = [...links].sort((a, b) => {
      const A = byId.get(a.s), B = byId.get(b.s);
      if (!A || !B) return 0;
      if (A.y !== B.y) return A.y - B.y;
      const TA = byId.get(a.t), TB = byId.get(b.t);
      return (TA?.y ?? 0) - (TB?.y ?? 0);
    });

    const ribbons = ordered.map((l, i) => {
      const s = byId.get(l.s), t = byId.get(l.t);
      if (!s || !t) return null;
      const v = l.v ?? 1;
      const hh = Math.max(v * k, 3);
      const y0 = s.sy, y1 = t.ty;
      s.sy += hh; t.ty += hh;
      return { i, s, t, y0, y1, h: hh, sid: l.s, tid: l.t };
    }).filter(Boolean);

    return { cols, ribbons, byId, colX };
  }, [columns, nodes, links, height, gap, pad]);

  /* เส้นทางที่ "ผ่าน" node ที่เลือก — ไล่ต้นน้ำและปลายน้ำแยกทิศ
     (ถ้าไล่แบบ connected component จะติดพี่น้องของปลายทางจนสว่างเกือบทั้งผัง) */
  const rel = useMemo(() => {
    if (!active) return null;
    const up = new Set([active]), down = new Set([active]);
    let grow = true;
    while (grow) {                       // ต้นน้ำ: เก็บ source ของลิงก์ที่ปลายทางอยู่ใน up
      grow = false;
      layout.ribbons.forEach(r => {
        if (up.has(r.tid) && !up.has(r.sid)) { up.add(r.sid); grow = true; }
      });
    }
    grow = true;
    while (grow) {                       // ปลายน้ำ: เก็บ target ของลิงก์ที่ต้นทางอยู่ใน down
      grow = false;
      layout.ribbons.forEach(r => {
        if (down.has(r.sid) && !down.has(r.tid)) { down.add(r.tid); grow = true; }
      });
    }
    const keepN = new Set([...up, ...down]);
    const keepR = new Set(layout.ribbons
      .filter(r => (up.has(r.sid) && up.has(r.tid)) || (down.has(r.sid) && down.has(r.tid)))
      .map(r => r.i));
    return { keepN, keepR };
  }, [active, layout]);

  const W = 1000;
  const colW = 100 / Math.max(columns.length - 1, 1);
  const px = ci => (layout.colX(ci) / 100) * (W - nodeW) ;

  return (
    <div className="alv">
      <div className="alv-cols" style={{ gridTemplateColumns: `repeat(${columns.length},1fr)` }}>
        {columns.map(c => <div key={c.key} className="alv-colh">{c.label}</div>)}
      </div>

      <div className="alv-scroll">
        <svg viewBox={`0 0 ${W} ${height}`} className="alv-svg" preserveAspectRatio="xMidYMin meet"
             onClick={e => { if (e.target.tagName === "svg") setPin(null); }}>
          <g className="alv-ribbons">
            {layout.ribbons.map(r => {
              const x0 = px(r.s.ci) + nodeW, x1 = px(r.t.ci);
              const mid = (x0 + x1) / 2;
              const d = `M${x0},${r.y0} C${mid},${r.y0} ${mid},${r.y1} ${x1},${r.y1}
                         L${x1},${r.y1 + r.h} C${mid},${r.y1 + r.h} ${mid},${r.y0 + r.h} ${x0},${r.y0 + r.h} Z`;
              const on = !rel || rel.keepR.has(r.i);
              return (
                <path key={r.i} d={d} fill={r.s.color || "#8fa6c4"}
                  className={`alv-rb${on ? " on" : " off"}`} />
              );
            })}
          </g>

          <g className="alv-nodes">
            {layout.cols.flatMap(c => c.list.map(n => {
              const x = px(n.ci);
              const on = !rel || rel.keepN.has(n.id);
              const last = n.ci === columns.length - 1;
              const anchor = last ? "end" : "start";
              const tx = last ? x - 7 : x + nodeW + 7;
              return (
                <g key={n.id} className={`alv-n${on ? "" : " off"}`}
                   onMouseEnter={() => setHot(n.id)} onMouseLeave={() => setHot(null)}
                   onClick={() => setPin(pin === n.id ? null : n.id)}>
                  <rect x={x} y={n.y} width={nodeW} height={n.h} rx="3"
                        fill={n.color || "#42618c"} className={pin === n.id ? "pinned" : ""} />
                  <text x={tx} y={n.y + n.h / 2} textAnchor={anchor} dominantBaseline="middle"
                        className="alv-lb">
                    {n.label}
                    {n.sub && <tspan className="alv-sub" dx="6">{n.sub}</tspan>}
                  </text>
                </g>
              );
            }))}
          </g>
        </svg>
      </div>

      <div className="alv-help">
        {pin
          ? <>ปักหมุดที่ <b>{layout.byId.get(pin)?.label}</b> — คลิกซ้ำหรือคลิกพื้นที่ว่างเพื่อยกเลิก</>
          : <>ชี้เมาส์ที่แท่งเพื่อไฮไลต์เส้นทางทั้งสาย · คลิกเพื่อปักหมุด</>}
      </div>
    </div>
  );
}
