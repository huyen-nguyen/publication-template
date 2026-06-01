# Academic Publication Landing Page (template)

A compact, responsive, single-page site for an academic publication — built so
the **entire page is just a few scrolls**. It's a *fill-in-the-blanks template*:
you edit **one file** and the page builds itself. No framework, no build step.

```
.
├── index.html        # structure only — you rarely touch this
├── css/styles.css    # styling + theme variables
├── js/
│   ├── config.js     # ◀◀◀  THE ONLY FILE YOU EDIT  ▶▶▶
│   └── app.js        # builds the page from config.js (don't edit)
├── assets/           # your GIFs, logos, social image
├── .nojekyll
└── README.md
```

## How to use it

1. Open **`js/config.js`** and fill in your specifics — title, authors, links,
   abstract, citation, highlights, demo, logos, contact.
2. Edit the `<title>` / `<meta>` tags at the top of `index.html` (these power
   Google + social previews and aren't auto-filled).
3. Drop any GIFs / logos into `assets/`.
4. Push to GitHub and turn on Pages (below). Done.

### The "leave it blank to hide it" rule
Every optional field hides itself when empty. No PubMed link yet?
`pubmed: ""` → that button just disappears. No demo video? `youtubeId: ""` →
the player is removed (and if there are no GIFs either, the whole Demo section
vanishes). You only ever fill in what you actually have.

### What's auto-generated for you
- The **author byline**, **author cards**, and **affiliation list** are all built
  from the `authors` + `affiliations` lists — add or remove authors freely.
- The **quick-link chips** and **footer links** appear automatically for whatever
  links you provide.
- The **formatted citation** is assembled from your title / authors / venue /
  year / DOI. (Edit the `bibtex` string directly — BibTeX needs `Last, First`.)
- The **highlight cards** are numbered automatically.

## Deploy to GitHub Pages

1. Push these files to the `main` branch of a repo.
2. **Settings → Pages → Build and deployment**.
3. Source = **Deploy from a branch**, Branch = **main**, folder = **/ (root)**, Save.
4. Live at `https://<username>.github.io/<repo>/` within a minute or two.
   (For a root-domain site, name the repo `<username>.github.io`.)

## Customising the look
All colors and fonts are CSS variables at the top of `css/styles.css` (`:root`) —
change `--primary`, `--accent`, etc. to re-theme everything, or swap the Google
Fonts `<link>` in `index.html`.

## Notes
- Built as a config-driven template, so JavaScript is required to render the
  content (fine for GitHub Pages; Google renders JS).
- Respects `prefers-reduced-motion`; semantic HTML, skip-link, focus states,
  ARIA labels; the hero animation pauses when off-screen.
- Missing GIFs show a labelled placeholder instead of a broken image.
