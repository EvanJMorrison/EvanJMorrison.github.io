"""Check the uploaded PDF used by the site, without generating or replacing it."""

from pathlib import Path

import yaml
from pypdf import PdfReader


def validate(root: Path) -> None:
    cv = yaml.safe_load((root / "_data/cv.yml").read_text())["cv"]
    if not cv.get("name") or not isinstance(cv.get("sections"), dict):
        raise ValueError("Website CV data requires a name and sections mapping.")
    for name, entries in cv["sections"].items():
        if not isinstance(entries, list):
            raise ValueError(f"CV section {name!r} must contain a list of entries.")
    # The website layout concatenates these two sections.
    for name in ("Experience", "Volunteer"):
        if name not in cv["sections"]:
            raise ValueError(f"The website CV layout requires {name!r}.")

    page_text = (root / "_pages/cv.md").read_text()
    page = yaml.safe_load(page_text.split("---", 2)[1])
    socials = yaml.safe_load((root / "_data/socials.yml").read_text())
    pdf_url = page.get("cv_pdf", "")
    if not pdf_url.startswith("/assets/pdf/") or not pdf_url.endswith(".pdf"):
        raise ValueError("The CV page must link to an uploaded PDF in /assets/pdf/.")
    if socials.get("cv_pdf") != pdf_url:
        raise ValueError("The CV page and social links point to different PDFs.")
    pdf_path = (root / pdf_url.lstrip("/")).resolve()
    if not pdf_path.is_relative_to(root.resolve() / "assets/pdf"):
        raise ValueError("The CV PDF must stay inside assets/pdf/.")

    reader = PdfReader(pdf_path)
    if reader.is_encrypted or len(reader.pages) == 0:
        raise ValueError("The downloadable CV must be readable and have pages.")
    first_page = " ".join((reader.pages[0].extract_text() or "").split())
    if " ".join(cv["name"].split()) not in first_page:
        raise ValueError("The PDF's first page does not contain the CV owner's name.")
    print(f"Validated {pdf_url}: {len(reader.pages)} pages; CV links and data agree.")


if __name__ == "__main__":
    validate(Path(__file__).resolve().parents[1])
