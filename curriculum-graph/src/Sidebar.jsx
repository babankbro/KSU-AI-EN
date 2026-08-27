import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NAV_GROUPS, findNav } from "./navConfig.js";

/* สัญลักษณ์ประจำกลุ่ม — ใช้บนรางแคบตอนแถบข้างถูกย่อ */
const GROUP_ICON = { home:"⌂", curriculum:"▦", outcomes:"◎", teaching:"✎", market:"▥", refs:"☰" };

/* แถบข้าง — โครงเดียวกันทุกหน้า: สารบัญทุกกลุ่ม ไฮไลต์หน้าปัจจุบัน
   และกางหัวข้อภายในหน้าที่เปิดอยู่พร้อมไฮไลต์ตามตำแหน่งที่เลื่อน */
export default function Sidebar() {
  const { pathname, hash } = useLocation();
  const { item } = findNav(pathname);
  const sections = item?.sections || [];
  const [here, setHere] = useState(hash.slice(1) || "");
  const [open, setOpen] = useState(false);
  /* ย่อแถบข้างเหลือรางแคบ — จำค่าไว้ข้ามหน้าใน localStorage
     ตอนย่อแล้วเอาเมาส์ไปชี้ที่ราง เมนูเต็มจะกางออกเองแบบลอยทับเนื้อหา (ดู .sidebar.mini ใน styles.css) */
  const [mini, setMini] = useState(() => {
    try { return localStorage.getItem("sidebarMini") === "1"; } catch { return false; }
  });
  const toggleMini = () => setMini(v => {
    const next = !v;
    try { localStorage.setItem("sidebarMini", next ? "1" : "0"); } catch { /* โหมดส่วนตัว */ }
    return next;
  });
  /* กลุ่มที่ถูกย่อไว้ — จำไว้ข้ามหน้าใน sessionStorage */
  const [folded, setFolded] = useState(() => {
    try { return new Set(JSON.parse(sessionStorage.getItem("sidebarFolded") || "[]")); }
    catch { return new Set(); }
  });
  const toggleGroup = id => setFolded(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    try { sessionStorage.setItem("sidebarFolded", JSON.stringify([...next])); } catch { /* โหมดส่วนตัว */ }
    return next;
  });

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
    <aside className={`sidebar${open ? " open" : ""}${mini ? " mini" : ""}`} aria-label="สารบัญเว็บไซต์">
      <button className="sidebar-toggle" aria-expanded={open} onClick={() => setOpen(v => !v)}>
        สารบัญ <i aria-hidden="true">{open ? "▴" : "▾"}</i>
      </button>

      <button className="sidebar-mini-btn" onClick={toggleMini} aria-pressed={mini}
        title={mini ? "ตรึงแถบข้างให้กางค้าง" : "ย่อแถบข้าง (ชี้เมาส์เพื่อกางชั่วคราว)"}>
        <i aria-hidden="true">{mini ? "»" : "«"}</i>
        <span>{mini ? "" : "ย่อแถบข้าง"}</span>
      </button>

      {mini && (
        <div className="sidebar-rail" aria-hidden="true">
          {NAV_GROUPS.map(g => {
            const on = g.solo ? pathname === g.to : g.items.some(it => it.to === item?.to);
            return <span key={g.id} className={"rail-ic" + (on ? " on" : "")}>{GROUP_ICON[g.id] || "•"}</span>;
          })}
        </div>
      )}

      <div className="sidebar-in">
        {NAV_GROUPS.map(g => {
          const links = g.solo ? [{ to: g.to, label: g.label, end: g.end }] : g.items;
            const isFold = folded.has(g.id);
            return (
            <div key={g.id} className={"sidebar-block" + (isFold ? " folded" : "")}>
              {!g.solo && (
                <button className="sidebar-blockhead" aria-expanded={!isFold}
                  onClick={() => toggleGroup(g.id)}>
                  <i className="fold-caret" aria-hidden="true">{isFold ? "▸" : "▾"}</i>
                  {g.label}
                  <span className="fold-n">{links.length}</span>
                </button>
              )}
              {!isFold && <ul className="sidebar-list">
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
              </ul>}
            </div>
            );
          })}
      </div>
    </aside>
  );
}
