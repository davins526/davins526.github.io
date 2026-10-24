# DG. / OBSIDIAN — Personal Portfolio

Source for **[goncharov-code.ru](https://goncharov-code.ru/)**, the personal portfolio of Daniil Goncharov, Software Developer.

A lightweight static site in the **OBSIDIAN / Steel Blue** visual identity. It presents selected engineering cases, technology areas, experience, and contact links.

## Stack

HTML · CSS · Vanilla JavaScript · GitHub Pages

No Node.js build step or runtime backend is required for the deployed version.

## Files

| Path | Purpose |
| --- | --- |
| `index.html` | Page structure and metadata |
| `styles.css` | Responsive design system, layout and themes |
| `app.js` | Interactions and UI behavior |
| `data.js` | Portfolio content and project data |
| `favicon.svg` | Brand favicon |
| `*.webp` | Visual assets |
| `CNAME` | GitHub Pages custom-domain configuration |

## Local preview

Clone or download the repository and serve its root using a local static HTTP server. For example, with Python installed:

```bash
python -m http.server 8000
```

Open `http://localhost:8000/`. Keep the assets and source files alongside `index.html`.

## Deployment

GitHub Pages publishes the default branch from the repository root. Custom domain: `goncharov-code.ru`, configured through `CNAME` and DNS. Avoid removing or renaming `CNAME` when updating the site.

## Portfolio content

Commercial cases are summarized without including clients' datasets or proprietary application source. Status labels distinguish completed work from work in progress. Edit `data.js` to revise the project descriptions.

---

**DG. / OBSIDIAN** · © 2026 Daniil Goncharov
