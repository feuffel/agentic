# Style Guide — Agentic AI Presentation

Visual language derived from the reference deck. Follow these rules so future slides stay consistent.

---

## 1. Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| **Background (light)** | `#F6F0EB` | Default slide background — warm off-white / parchment |
| **Background (dark)** | `#000000` | Title slides, emphasis slides, split-panel dark halves, poll/interactive slides |
| **Text (on light)** | `#000000` | All headings + body on light backgrounds |
| **Text (on dark)** | `#FFFFFF` | All headings + body on dark backgrounds |
| **Text (muted)** | `#666666` | Secondary captions, footnotes, source labels |
| **Dividers / borders** | `#D6D0CB` | Thin 1px lines separating grid cells and columns |
| **Iframe dark bg** | `#0a0e14` | Used by embedded dark-themed HTML visualizations |

No accent color — the deck is strictly black & white with the warm background. The existing `#42affa` Reveal.js link/controls color can remain as functional UI chrome but should not appear in slide content.

---

## 2. Typography

| Role | Family | Weight | Style Notes |
|------|--------|--------|-------------|
| **Display headings** | **Space Grotesk** | 700–800 (Bold/ExtraBold) | Very large, left-aligned, sentence case. Hero statements and section titles. |
| **Section labels / kickers** | **Fira Code** (monospace) | 400–600 | ALL-CAPS, wide letter-spacing (~0.15em), small size. Category labels above content. |
| **Body / descriptions** | **Space Grotesk** | 300–400 (Light/Regular) | Moderate size, line-height ~1.5. Supporting paragraphs and card descriptions. |
| **Grid headings** | **Fira Code** (monospace) | 600–700 (SemiBold/Bold) | ALL-CAPS, wide letter-spacing. Numbered item titles inside grid cards. |
| **Metric numbers** | **Space Grotesk** | 800 (ExtraBold) | Extremely large display size. Hero statistics ("$XX", "XX%", "X,XXX"). |

**Key rules:**

- No italic body text (italic reserved only for quotes)
- Headings are never uppercase *unless* they are monospace kickers/labels
- Sentence case for all display headings (not Title Case, not UPPERCASE)
- Generous whitespace — text never fills the entire slide

---

## 3. Layout Patterns

| Pattern | Description |
|---------|-------------|
| **Full-bleed title** | Black background, huge left-aligned heading at bottom-left, small mono kicker at top-center, mono footer at bottom edges. |
| **Light content slide** | `#F6F0EB` background, large left-aligned heading on left third, content on right two-thirds. |
| **Split panel (50/50)** | Left half dark (`#000`), right half light (`#F6F0EB`) — or vice versa. Heading + metric on dark side, explanation on light side. |
| **Grid (2-col, 3-col)** | Light background, thin `1px` dividers between cells. Mono ALL-CAPS heading per cell, regular-weight description below. |
| **Metric highlight** | Large hero number center-right on dark panel, supporting text left on light panel. |
| **Quote** | Light background, enormous bold text filling most of the slide with smart quotes, attribution in small mono at bottom-right. |
| **Statement / CTA** | Light background, centered medium-large text, optional interactive element below. |
| **Full-bleed image** | Image fills right portion of slide, text + context on left third. |
| **Timeline grid** | 2x2 or larger grid with milestone dates as large mono headings, descriptions below, optional images. |

---

## 4. Footer Convention

Every slide carries a persistent footer:

- **Bottom-left:** team name in small monospace, ALL-CAPS
- **Bottom-right:** date in small monospace, ALL-CAPS

---

## 5. Spacing & Sizing Principles

- **Generous margins** — content never crowds the edges (roughly 5-8% padding on all sides)
- **Asymmetric text placement** — headings align left, rarely centered (except kickers)
- **Dramatic scale contrast** — hero text is 3-5x larger than body text; metrics are even larger
- **Minimal decoration** — no drop shadows, no gradients, no rounded corners on layout elements, no colored accents. Only thin 1px lines for structure.
- **Whitespace as design element** — many slides have 40-60% empty space

---

## 6. Do / Don't

| Do | Don't |
|----|-------|
| Use only black, white, and `#F6F0EB` for slide backgrounds | Use colored backgrounds or gradients |
| Keep headings in sentence case | Use Title Case or ALL-CAPS for display headings |
| Use monospace ALL-CAPS for labels and kickers | Use monospace for body text |
| Left-align headings | Center large headings (exception: kicker labels) |
| Use thin 1px dividers for grids | Use thick borders, box shadows, or colored rules |
| Let whitespace breathe | Fill every area of the slide |
| Use bold/weight for emphasis | Use color, underlines, or italics for emphasis |
| Limit body text to 2-3 short sentences per block | Write long paragraphs |
