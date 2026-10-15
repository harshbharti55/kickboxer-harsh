#!/usr/bin/env python3
"""
Generates the three PDFs the site links to, in black and gold:

  public/downloads/Harsh-Bharti-CV.pdf
  public/media/Harsh-Bharti-Athlete-Profile.pdf      (already linked on the live site, currently 404)
  public/downloads/sponsorship-proposal.pdf          (already linked on /sponsors, currently 404)

Content mirrors data/athlete.ts. If you change a record there, update RECORDS /
GOALS below and re-run:  python3 tools/build_pdfs.py   (needs: pip install reportlab)

Only athlete-supplied records are used. No date of birth, no medal total,
no dates or confirmed participation for the 2027 goals.
"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle, KeepTogether,
)

GOLD = HexColor("#D4AF37")
BLACK = HexColor("#000000")
PANEL = HexColor("#111111")
GREY = HexColor("#A3A3A3")
LIGHT = HexColor("#E5E5E5")

NAME = "Harsh Bharti"
HEADLINE = "Indian Full Contact Kickboxer"
REGION = "Himachal Pradesh, India"
EMAIL = "kickboxerharsh@gmail.com"
PHONE = "+91 9816875780"
SITE = "kickboxer-harsh.online"

RECORDS = [  # newest first, exactly as supplied
    ("2026", "Fifth Place", "Senior National Kickboxing Championship", "Indore, Madhya Pradesh", "-54 kg Full Contact"),
    ("2025", "Senior National Silver Medal", "", "Raipur", ""),
    ("2025", "Participant", "Inter-University Kickboxing Championship", "Subharti University, Meerut", ""),
    ("2024", "National Bronze Medal", "", "Siliguri", ""),
    ("2023", "National Silver Medal", "", "Ranchi", ""),
    ("2022", "Two Gold Medals", "WAKO India Open National Tournament", "New Delhi", ""),
    ("2018", "Participant", "Junior National Kickboxing Championship", "Shoolini University, Solan", ""),
]

GOALS = [
    "India Open 2027",
    "Italy World Cup",
    "Thailand World Cup",
    "Uzbekistan World Cup",
    "Senior World Championship",
]
GOALS_NOTE = "Planned goals. Dates and participation are unconfirmed until officially verified."

PACKAGES = [
    ("Bronze - Support Partner", ["Website logo", "Social media mention", "Appreciation certificate", "Event recognition"]),
    ("Silver - Official Partner", ["Everything in Bronze", "Jersey logo", "Media mentions", "Event photos", "Brand promotion"]),
    ("Gold - Premium Partner", ["Everything in Silver", "Training gear branding", "Promotional videos",
                                "Campaign collaboration", "Social campaigns", "Priority exposure"]),
    ("Title - Exclusive Partner", ["Everything included", "Front jersey branding", "International exposure",
                                   "Press conference branding", "Exclusive campaigns", "Long-term partnership",
                                   "Highest brand visibility"]),
]

# ---------- styles ----------
def S(name, **kw):
    base = dict(fontName="Helvetica", fontSize=10, leading=14, textColor=LIGHT, alignment=TA_LEFT)
    base.update(kw)
    return ParagraphStyle(name, **base)

title = S("title", fontName="Helvetica-Bold", fontSize=30, leading=34, textColor=HexColor("#FFFFFF"))
tag = S("tag", fontName="Helvetica-Bold", fontSize=10, leading=14, textColor=GOLD, spaceAfter=2)
sub = S("sub", fontSize=12, leading=16, textColor=GREY)
h2 = S("h2", fontName="Helvetica-Bold", fontSize=13, leading=16, textColor=GOLD, spaceBefore=14, spaceAfter=6)
body = S("body")
small = S("small", fontSize=8.5, leading=12, textColor=GREY)
cell_year = S("cy", fontName="Helvetica-Bold", fontSize=13, leading=16, textColor=GOLD)
cell_main = S("cm", fontName="Helvetica-Bold", fontSize=10.5, leading=14, textColor=HexColor("#FFFFFF"))
cell_sub = S("cs", fontSize=9, leading=12, textColor=GREY)

W, H = A4
M = 18 * mm


def on_page(c, doc):
    c.saveState()
    c.setFillColor(BLACK)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(GOLD)
    c.rect(0, H - 6 * mm, W, 6 * mm, fill=1, stroke=0)   # top gold band
    c.rect(0, 0, W, 3 * mm, fill=1, stroke=0)             # bottom gold band
    c.setFont("Helvetica", 8)
    c.setFillColor(GREY)
    c.drawString(M, 8 * mm, f"{NAME}  |  {SITE}")
    c.drawRightString(W - M, 8 * mm, f"Page {doc.page}")
    c.restoreState()


def make_doc(path, doc_title):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    doc = BaseDocTemplate(
        path, pagesize=A4, leftMargin=M, rightMargin=M, topMargin=16 * mm, bottomMargin=16 * mm,
        title=doc_title, author=NAME, subject=f"{NAME} - {HEADLINE}", creator=SITE,
    )
    frame = Frame(M, 16 * mm, W - 2 * M, H - 32 * mm, id="f", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    doc.addPageTemplates([PageTemplate(id="p", frames=[frame], onPage=on_page)])
    return doc


def header(kind):
    return [
        Paragraph(kind.upper(), tag),
        Paragraph(NAME.upper(), title),
        Spacer(1, 2),
        Paragraph(f"{HEADLINE} &middot; {REGION}", sub),
        Spacer(1, 6),
    ]


def records_table():
    rows = []
    for y, head, event, loc, cat in RECORDS:
        lines = [Paragraph(head, cell_main)]
        if event:
            lines.append(Paragraph(event, cell_sub))
        meta = loc + (f" &middot; {cat}" if cat else "")
        lines.append(Paragraph(meta, cell_sub))
        rows.append([Paragraph(y, cell_year), lines])
    t = Table(rows, colWidths=[22 * mm, W - 2 * M - 22 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PANEL),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LINEBELOW", (0, 0), (-1, -2), 0.4, HexColor("#2a2a2a")),
        ("BOX", (0, 0), (-1, -1), 0.6, HexColor("#2a2a2a")),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
    ]))
    return t


def goals_block():
    items = [Paragraph(GOALS_NOTE, S("gn", fontSize=9.5, textColor=GOLD)), Spacer(1, 5)]
    rows = [[Paragraph(f"2027 &middot; {g}", cell_main), Paragraph("Planned goal<br/>Date and participation unconfirmed", cell_sub)] for g in GOALS]
    t = Table(rows, colWidths=[(W - 2 * M) * 0.5, (W - 2 * M) * 0.5])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PANEL),
        ("LINEBELOW", (0, 0), (-1, -2), 0.4, HexColor("#2a2a2a")),
        ("BOX", (0, 0), (-1, -1), 0.6, HexColor("#2a2a2a")),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
    ]))
    return items + [t]


def contact_block():
    return [
        Paragraph("Contact", h2),
        Paragraph(f"Email: {EMAIL}", body),
        Paragraph(f"Phone / WhatsApp: {PHONE}", body),
        Paragraph(f"Website: {SITE}", body),
    ]


def build_cv(path):
    doc = make_doc(path, f"{NAME} - Curriculum Vitae")
    s = header("Curriculum Vitae")
    s += [Paragraph("Competition Record", h2), records_table()]
    s += [Paragraph("2027 Planned Goals", h2)] + goals_block()
    s += contact_block()
    s += [Spacer(1, 4), Paragraph("Records supplied by the athlete.", small)]
    doc.build(s)


def build_profile(path):
    doc = make_doc(path, f"{NAME} - Athlete Profile")
    s = header("Athlete Profile")
    facts = [
        ["Name", NAME],
        ["Discipline", "Full Contact Kickboxing"],
        ["Country", "India"],
        ["Region", REGION],
        ["Latest category", "-54 kg Full Contact (2026 Senior Nationals, Indore)"],
    ]
    rows = [[Paragraph(k.upper(), S("fk", fontName="Helvetica-Bold", fontSize=8, textColor=GOLD)), Paragraph(v, body)] for k, v in facts]
    t = Table(rows, colWidths=[38 * mm, W - 2 * M - 38 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PANEL),
        ("LINEBELOW", (0, 0), (-1, -2), 0.4, HexColor("#2a2a2a")),
        ("BOX", (0, 0), (-1, -1), 0.6, HexColor("#2a2a2a")),
        ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
    ]))
    s += [Paragraph("Profile", h2), t]
    s += [Paragraph("Competition Record", h2), records_table()]
    s += [Paragraph("2027 Planned Goals", h2)] + goals_block()
    s += contact_block()
    doc.build(s)


def build_proposal(path):
    doc = make_doc(path, f"{NAME} - Sponsorship Proposal")
    s = header("Sponsorship Proposal")
    s += [
        Paragraph("Partner With Harsh", h2),
        Paragraph(
            "I am looking for brands and organizations who believe in discipline, dedication and the future of Indian "
            "kickboxing. Every partnership can be customized around your goals and budget.", body),
        Paragraph("Partnership Packages", h2),
    ]
    for name, perks in PACKAGES:
        block = [Paragraph(name, cell_main)] + [Paragraph(f"&bull; {p}", cell_sub) for p in perks]
        t = Table([[block]], colWidths=[W - 2 * M])
        t.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), PANEL),
            ("BOX", (0, 0), (-1, -1), 0.6, HexColor("#2a2a2a")),
            ("LEFTPADDING", (0, 0), (-1, -1), 10), ("TOPPADDING", (0, 0), (-1, -1), 8), ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ]))
        s += [KeepTogether([t]), Spacer(1, 5)]
    s += [Paragraph("Competition Record", h2), records_table()]
    s += [Paragraph("2027 Planned Goals", h2)] + goals_block()
    s += contact_block()
    s += [Spacer(1, 10), Paragraph("To discuss a partnership, email or message on WhatsApp.", small)]
    doc.build(s)


if __name__ == "__main__":
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    build_cv(os.path.join(root, "public", "downloads", "Harsh-Bharti-CV.pdf"))
    build_profile(os.path.join(root, "public", "media", "Harsh-Bharti-Athlete-Profile.pdf"))
    build_proposal(os.path.join(root, "public", "downloads", "sponsorship-proposal.pdf"))
    print("PDFs written.")
