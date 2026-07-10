import argparse
from pathlib import Path

import pdfplumber


def extract_pdf(path):
    pages = []
    with pdfplumber.open(path) as pdf:
        for index, page in enumerate(pdf.pages, start=1):
            text = page.extract_text(x_tolerance=1, y_tolerance=3) or ""
            pages.append(f"--- page {index} ---\n{text.strip()}")
    return "\n\n".join(pages)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf", type=Path)
    parser.add_argument("--out", type=Path)
    args = parser.parse_args()

    text = extract_pdf(args.pdf)
    if args.out:
        args.out.write_text(text, encoding="utf-8")
    else:
        print(text)


if __name__ == "__main__":
    main()
