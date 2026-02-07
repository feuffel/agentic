# Agentic AI Presentation — AI Guide

## Commands

- `npm run dev` — Start dev server with hot reload (http://localhost:5173)
- `npm run build` — Build for production into `dist/`
- `npm run preview` — Preview the production build

## Project Structure

- `index.html` — Presentation shell, loads slides from external Markdown
- `main.js` — Reveal.js initialization, plugins, and configuration
- `public/slides.md` — **All slide content lives here** (Markdown)

## Editing Slides (`public/slides.md`)

### Separators

- `---` (on its own line) — New horizontal slide
- `----` (on its own line) — New vertical sub-slide
- `Note:` — Speaker notes (everything after this until next separator)

### Code Blocks

Use fenced code blocks with a language tag for syntax highlighting:

````
```python
print("hello")
```
````

### Fragments (Incremental Reveals)

Add `<!-- .element: class="fragment" -->` after a bullet point:

```markdown
- First point <!-- .element: class="fragment" -->
- Second point <!-- .element: class="fragment" -->
```

### Slide-Level Attributes

Add `<!-- .slide: data-background="#ff0000" -->` at the top of a slide to set attributes on the `<section>` element.

## Changing the Theme

In `main.js`, change the CSS import:

```js
// Available themes: black, white, league, beige, night, serif, simple, solarized, moon, dracula, sky, blood
import 'reveal.js/dist/theme/black.css';
```

## Changing the Code Highlight Theme

In `main.js`, change the highlight CSS import:

```js
// Available: monokai, zenburn, a11y-dark, a11y-light, etc.
import 'reveal.js/plugin/highlight/monokai.css';
```

## Conventions

- Keep slides concise — one idea per slide
- Use bullet points, not paragraphs
- Code examples should be short and focused
- Use speaker notes for extra context and talking points
- Use vertical slides (`----`) for sub-topics under a main topic

## Troubleshooting

- **Slides not loading**: Make sure `slides.md` is in the `public/` directory
- **Code not highlighted**: Ensure the language tag is on the code fence (e.g., ` ```python `)
- **Speaker notes not showing**: Press **S** to open the speaker view
- **Changes not appearing**: Vite HMR should auto-reload; if not, hard refresh with Cmd+Shift+R
