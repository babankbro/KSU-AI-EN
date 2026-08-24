# -*- coding: utf-8 -*-
"""ปรับตารางแผนการเรียนในเอกสาร 4.4 ให้ตรงกับรหัสรายวิชาและหน่วยกิตปัจจุบัน

เอกสารต้นทางมี 16 ตาราง (แผน ก 8 ภาค + แผน ข 8 ภาค) สคริปต์นี้เขียนทับเฉพาะ
แถวข้อมูลในแต่ละตาราง โดยใช้แถวเดิมเป็นแม่แบบจึงคงรูปแบบตัวอักษรและเส้นตารางไว้

    python scripts/update-section4-4-docx.py INPUT.docx OUTPUT.docx
    (อ่านแผนจาก Labor_Growth_Report_Vault/08_TQF2_Book_Revisions/14_Section4_4_Study_Plan.md
     ซึ่งสร้างด้วย npm run build:plan)
"""
import copy, sys, zipfile
from pathlib import Path
from lxml import etree

W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
XML = "http://www.w3.org/XML/1998/namespace"
NS = {"w": W}
Q = lambda tag: "{%s}%s" % (W, tag)

ROOT = Path(__file__).resolve().parents[2]
PLAN_MD = ROOT / "Labor_Growth_Report_Vault/08_TQF2_Book_Revisions/14_Section4_4_Study_Plan.md"


def clean(v):
    v = v.strip()
    if v.startswith("**") and v.endswith("**"):
        v = v[2:-2]
    return v.strip()


def parse_plans(path):
    """อ่านมาร์กดาวน์ 4.4 คืนรายการภาคการศึกษาตามลำดับ แผน ก ก่อน แล้วแผน ข"""
    lines = path.read_text(encoding="utf-8").splitlines()
    plans, plan, i = {"A": [], "B": []}, None, 0
    while i < len(lines):
        line = lines[i].strip()
        if line.startswith("## แผน ก"):
            plan = "A"
        elif line.startswith("## แผน ข"):
            plan = "B"
        if plan and line.startswith("**ปีการศึกษาที่"):
            j = i
            while j < len(lines) and not lines[j].lstrip().startswith("| หมวดวิชา"):
                j += 1
            j += 2
            rows = []
            while j < len(lines) and lines[j].lstrip().startswith("|"):
                cells = [clean(c) for c in lines[j].strip().strip("|").split("|")]
                if len(cells) == 5:
                    rows.append(cells)
                j += 1
            plans[plan].append({
                "courses": [r for r in rows if not r[0].startswith("รวม")],
                "term": next(r[4] for r in rows if r[0].startswith("รวมหน่วยกิตลงทะเบียน")),
                "cumulative": next(r[4] for r in rows if r[0].startswith("รวมจำนวนหน่วยกิตสะสม")),
            })
            i = j - 1
        i += 1
    if len(plans["A"]) != 8 or len(plans["B"]) != 8:
        raise SystemExit("คาดว่าแผนละ 8 ภาค แต่พบ %d และ %d"
                         % (len(plans["A"]), len(plans["B"])))
    return plans["A"] + plans["B"]


def set_text(cell, value):
    """เขียนข้อความลงเซลล์โดยคงรูปแบบของ run แรกไว้"""
    texts = cell.xpath(".//w:t", namespaces=NS)
    if not texts:
        p = cell.find(".//" + Q("p"))
        if p is None:
            p = etree.SubElement(cell, Q("p"))
        t = etree.SubElement(etree.SubElement(p, Q("r")), Q("t"))
        texts = [t]
    texts[0].text = value
    if value != value.strip():
        texts[0].set("{%s}space" % XML, "preserve")
    for t in texts[1:]:
        t.text = ""


def rebuild(tbl, sem):
    rows = tbl.findall(Q("tr"))
    if len(rows) < 4:
        raise SystemExit("ตารางต้นแบบต้องมีหัวตาราง แถวรายวิชา และแถวรวม")
    header, template = rows[0], copy.deepcopy(rows[1])
    total_term, total_cum = copy.deepcopy(rows[-2]), copy.deepcopy(rows[-1])
    for r in rows[1:]:
        tbl.remove(r)
    for course in sem["courses"]:
        row = copy.deepcopy(template)
        cells = row.findall(Q("tc"))
        for cell, value in zip(cells, course):
            set_text(cell, value)
        tbl.append(row)
    for row, label, value in ((total_term, "รวมหน่วยกิตลงทะเบียนเรียน", sem["term"]),
                              (total_cum, "รวมจำนวนหน่วยกิตสะสม", sem["cumulative"])):
        cells = row.findall(Q("tc"))
        for cell in cells[:-1]:
            set_text(cell, label)
        set_text(cells[-1], value)
        tbl.append(row)
    return header


def main(src, out):
    sems = parse_plans(PLAN_MD)
    with zipfile.ZipFile(src) as zin:
        parts = {n: zin.read(n) for n in zin.namelist()}
        infos = zin.infolist()
    root = etree.fromstring(parts["word/document.xml"])
    body = root.find("w:body", namespaces=NS)
    tables = body.findall(Q("tbl"))
    if len(tables) != 16:
        raise SystemExit("คาดว่าเอกสารมี 16 ตาราง แต่พบ %d" % len(tables))
    for tbl, sem in zip(tables, sems):
        rebuild(tbl, sem)
    parts["word/document.xml"] = etree.tostring(
        root, xml_declaration=True, encoding="UTF-8", standalone="yes")
    Path(out).parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as zout:
        for info in infos:
            zout.writestr(info, parts[info.filename])
    total = sum(len(s["courses"]) for s in sems)
    print("เขียน %s" % out)
    print("  16 ตาราง · %d แถวรายวิชา · สะสมท้ายแผน ก %s · แผน ข %s"
          % (total, sems[7]["cumulative"], sems[15]["cumulative"]))


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("usage: update-section4-4-docx.py INPUT.docx OUTPUT.docx")
    main(sys.argv[1], sys.argv[2])
