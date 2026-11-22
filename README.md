# DG. / A Personal Scrapbook

Source code for **[goncharov-code.ru](https://goncharov-code.ru/)** — Daniil Goncharov's personal portfolio.

An independent portfolio inspired by the visual language of analog journals: torn paper, instant photographs, handwritten notes, illustrated project cards, and a hand-drawn butterfly. The overall identity is intentionally restrained: charcoal, off-white, and muted blue.

## What is inside

- **Bilingual interface:** English by default, with an EN / RU switcher. The choice persists locally.
- **Selected work:** five grounded case studies covering 1C:Enterprise, integrations, a web redesign, and the JESTER game.
- **Project dialogs:** challenge, approach, outcome, stack, and honest project status in both languages.
- **Responsive design:** a single lightweight static page with accessible navigation and keyboard-operable dialogs.
- **Original imagery:** the main butterfly was adapted from the site's owner's supplied illustration.

## Technology

HTML, CSS, and vanilla JavaScript. No bundler, framework, telemetry, or runtime backend required.

| File | Purpose |
| --- | --- |
| `index.html` | Semantic page structure and SEO metadata |
| `journal.css` | Responsive scrapbook design system |
| `data.js` | Bilingual project, skill and timeline data |
| `journal.js` | Language switching, filters, modals and navigation |
| `butterfly-original.png` | Main hero emblem |
| `butterfly.svg` | Supporting vector motif / favicon |
| `CNAME` | Custom domain configuration |

## Run locally

```bash
python -m http.server 8000
```

Visit `http://localhost:8000/`. For deployment, GitHub Pages publishes the repository's `main` branch.

Commercial examples intentionally omit private customer records and proprietary source code.

© 2026 Daniil Goncharov.
