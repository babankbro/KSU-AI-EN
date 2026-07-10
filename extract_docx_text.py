import argparse
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}


def text_from_element(element):
    parts = []
    for node in element.iter():
        if node.tag == f"{{{NS['w']}}}t" and node.text:
            parts.append(node.text)
        elif node.tag == f"{{{NS['w']}}}tab":
            parts.append("\t")
        elif node.tag == f"{{{NS['w']}}}br":
            parts.append("\n")
    return "".join(parts).strip()


def extract_docx(path):
    with zipfile.ZipFile(path) as zf:
        xml = zf.read("word/document.xml")
    root = ET.fromstring(xml)
    body = root.find("w:body", NS)
    lines = []

    for child in body:
        if child.tag == f"{{{NS['w']}}}p":
            text = text_from_element(child)
            if text:
                lines.append(text)
        elif child.tag == f"{{{NS['w']}}}tbl":
            lines.append("[TABLE]")
            for row in child.findall("w:tr", NS):
                cells = []
                for cell in row.findall("w:tc", NS):
                    cell_text = " ".join(
                        text_from_element(paragraph)
                        for paragraph in cell.findall("w:p", NS)
                        if text_from_element(paragraph)
                    )
                    cells.append(cell_text)
                if any(cells):
                    lines.append(" | ".join(cells))
            lines.append("[/TABLE]")

    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("docx", type=Path)
    parser.add_argument("--out", type=Path)
    args = parser.parse_args()

    text = extract_docx(args.docx)
    if args.out:
        args.out.write_text(text, encoding="utf-8")
    else:
        print(text)


if __name__ == "__main__":
    main()
