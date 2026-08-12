import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NAV_GROUPS, findNav } from "./navConfig.js";

/* แถบข้าง — โครงเดียวกันทุกหน้า: สารบัญทุกกลุ่ม ไฮไลต์หน้าปัจจุบัน
   และกางหัวข้อภายในหน้าที่เปิดอยู่พร้อมไฮไลต์ตามตำแหน่งที่เลื่อน */
export default function Sidebar() {
  const { pathname, hash } = useLocation();
  const { item } = findNav(pathname);
  const sections = item?.sections || [];
  const [here, setHere] = useState(hash.slice(1) || "");
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); setHere(hash.slice(1) || sections[0]?.id || ""); }, [pathname]);

  /* ไฮไลต์หัวข้อที่เลื่อนถึง — คำนวณจากตำแหน่งจริงเพื่อให้ทำงานแม้ viewport รายงานความสูงผิด */
  useEffect(() => {
    if (!sections.length) return;
    const pick = () => {
      let cur = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) cur = s.id;
      }
      setHere(cur);
    };
    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    return () => { window.removeEventListener("scroll", pick); window.removeEventListener("resize", pick); };
  }, [pathname, sections.length]);

  return (
    <aside className={`sidebar${open ? " open" : ""}`} aria-label="สารบัญเว็บไซต์">
      <button className="sidebar-toggle" aria-expanded={open} onClick={() => setOpen(v => !v)}>
        สารบัญ <i aria-hidden="true">{open ? "▴" : "▾"}</i>
      </button>

      <div className="sidebar-in">
        {NAV_GROUPS.map(g => {
          const links = g.solo ? [{ to: g.to, label: g.label, end: g.end }] : g.items;
          return (
            <div key={g.id} className="sidebar-block">
              {!g.solo && <div className="sidebar-blockhead">{g.label}</div>}
              <ul className="sidebar-list">
                {links.map(it => {
                  const on = it.end ? pathname === it.to : (item?.to === it.to || pathname === it.to);
                  return (
                    <li key={it.to}>
                      <NavLink to={it.to} end={it.end}
                        className={"sidebar-link" + (on ? " on" : "")}>{it.label}</NavLink>
                      {on && sections.length > 0 && (
                        <ul className="sidebar-sub">
                          {sections.map(s => (
                            <li key={s.id}>
                              <a href={`#${s.id}`}
                                className={"sidebar-sublink" + (here === s.id ? " on" : "")}
                                onClick={() => setHere(s.id)}>{s.label}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
