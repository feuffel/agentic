# Agentic AI Presentation — AI Guide

## Active Version

The presentation now uses **Slidev** (in `slidev-version/`). The root-level Reveal.js version is deprecated.

## Commands

Run from `slidev-version/`:

```bash
cd slidev-version
npm run dev      # Start dev server (http://localhost:3030)
npm run build    # Build for production
npm run export   # Export to PDF
```

## Project Structure (`slidev-version/`)

- `slides.md` — All slide content and frontmatter config
- `components/` — Custom Vue components for slides
- `public/` — Static assets (favicon, embedded HTML widgets)
- `styles/` — Custom CSS
- `global-bottom.vue` — Global footer component
- `setup/` — Slidev setup files

### Custom Components

Located in `components/`:
- `SideBySide.vue` / `SideBox.vue` — Two-column layouts
- `Card.vue` — Styled content cards
- `Timeline.vue` / `TimelineItem.vue` — Timeline displays
- `LayerStack.vue` / `LayerItem.vue` — Stacked layer visuals
- `StatRow.vue` / `StatItem.vue` / `MetricDisplay.vue` — Statistics and metrics
- `PathCompare.vue` / `PathItem.vue` — Path comparison layouts
- `NumberedCards.vue` — Numbered card grids

## Editing Slides (`slides.md`)

### Frontmatter

Configuration at the top of `slides.md`:

```yaml
---
theme: default
title: Agentic AI
favicon: /favicon.svg
transition: slide-left
---
```

### Slide Separators

- `---` — New slide
- Slide-specific frontmatter goes between `---` blocks:

```markdown
---
class: my-custom-class
---
```

### Speaker Notes

Use HTML comments:

```markdown
<!--
Speaker notes go here
-->
```

### Using Components

Components are auto-imported:

```markdown
<SideBySide>
  <SideBox variant="cream">Left content</SideBox>
  <SideBox variant="black">Right content</SideBox>
</SideBySide>
```

## Conventions

- Keep slides concise — one idea per slide
- Use custom components for consistent styling
- Embedded HTML widgets go in `public/` and load via `<iframe>`
- Static assets (favicon, images) go in `public/`

## Keyboard Shortcuts

- **Space** / **Arrow keys** — Navigate slides
- **O** — Slides overview
- **D** — Toggle dark mode
- **F** — Fullscreen
