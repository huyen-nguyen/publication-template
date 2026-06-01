/* ==================================================================
   ▸▸▸  EDIT ONLY THIS FILE  ◂◂◂
   This is the entire content of your page. Fill in your specifics
   below and the site builds itself. You shouldn't need to touch the
   HTML or CSS at all.

   RULES
   - Leave a value as an empty string ""  to HIDE it.
     (e.g. no PubMed entry yet?  pubmed: ""  → the button disappears)
   - Keep the quotes and commas exactly as shown.
   - Lists (authors, highlights, gifs) can have any number of items —
     just add or remove blocks following the same pattern.
   ================================================================== */

const CONFIG = {

  /* ---------- 0. LOOK & FEEL  (leave any value "" to keep the default) */
  theme: {
    colorMain:   "#0B6E66",       // primary colour (darker shades derive automatically)
    colorAccent: "#E1583A",       // accent / call-to-action colour
    fontDisplay: "Crimson Pro",      // headings — any Google Font name
    fontBody:    "Roboto",   // body text — any Google Font name
    fontMono:    "Roboto", // labels & code — any Google Font name
  },

  /* ---------- 0b. BRAND LOGO  (optional) ------------------------------ */
  // Put an image in assets/ to replace the default coloured mark in the
  // header + footer. `link` is where clicking the logo/title takes you.
  brandLogo: {
    src:  "",            // e.g. "assets/logo.svg"   ("" keeps the default mark)
    link: "#top",        // e.g. "https://your-lab.org"  (default: back to top)
    alt:  "VizName",
  },

  /* ---------- 1. PAPER ---------------------------------------- */
  brand:        "VizName",                 // short name in nav + footer
  badge:        "IEEE VIS 2026 · Bioinformatics & Visualization", // small pill above title
  title:        "Interactive Visualization for",          // first line of title
  titleEm:      "Genomic Data Exploration",               // accented line (set "" to skip)
  tagline:      "A scalable, open-source framework that turns millions of genomic features into fluid, interpretable visual narratives — helping researchers find patterns that static plots conceal.",
  venue:        "IEEE Transactions on Visualization and Computer Graphics",
  year:         "2026",
  doi:          "10.0000/XXXXXXX",

  /* ---------- 2. AUTHORS -------------------------------------- */
  // `aff` lists the affiliation numbers (see `affiliations` below).
  // Any link left "" is hidden for that author.
  authors: [
    { name: "Author One",   aff: [1],    website: "#", scholar: "#", orcid: "#" },
    { name: "Author Two",   aff: [2],    website: "#", scholar: "#", orcid: "#" },
    { name: "Author Three", aff: [1, 3], website: "#", scholar: "#", orcid: "#" },
  ],
  affiliations: [
    "Dept. of Computational Biology, University A",   // 1
    "Institute of Data Visualization, University B",  // 2
    "Lab C, Research Center",                         // 3
  ],

  /* ---------- 3. LINKS  (leave "" to hide the button) --------- */
  links: {
    pdf:        "#",   // preprint PDF (direct download)
    code:       "https://github.com/huyen-nguyen/publication-template",   // GitHub repository
    pubmed:     "#",   // PubMed entry
    ieeexplore: "#",   // IEEE Xplore publication page
    ismb:       "#",   // ISMB presentation materials
    ieeevis:    "#",   // IEEE VIS 2026 presentation details
    license:    "#",   // license link used in footer
  },

  /* ---------- 4. ABSTRACT  (one string per paragraph) -------- */
  abstract: [
    "Modern high-throughput sequencing produces datasets far larger than conventional charting tools can render interactively. We introduce VizName, an open-source visualization framework that combines a GPU-accelerated rendering pipeline with a perceptually grounded encoding system to support fluid exploration of multi-omic data at scale.",
    "Through level-of-detail aggregation and progressive loading, VizName maintains sub-100 ms interaction latency on datasets exceeding ten million features. In a study with domain experts, participants identified biologically meaningful patterns significantly faster than with existing tools.",
  ],

  /* ---------- 5. CITATION ------------------------------------- */
  // The formatted citation is built automatically from the fields above.
  // Edit the BibTeX below directly (BibTeX needs "Last, First" name order).
  bibtex:
`@article{author2026vizname,
  title   = {Interactive Visualization for Genomic Data Exploration},
  author  = {One, Author and Two, Author and Three, Author},
  journal = {IEEE Transactions on Visualization and Computer Graphics},
  year    = {2026},
  doi     = {10.0000/XXXXXXX}
}`,

  /* ---------- 6. HIGHLIGHTS  (cards; add/remove freely) ------- */
  highlights: [
    { title: "Scales to millions of features", text: "GPU-accelerated rendering with level-of-detail aggregation keeps interaction fluid on datasets that overwhelm conventional tools." },
    { title: "Perceptually grounded encodings", text: "Color, position, and density mappings are chosen from perceptual research to minimise misreading and maximise signal." },
    { title: "Open & extensible", text: "A documented plugin API lets researchers add custom views and integrate VizName into existing analysis pipelines." },
    // { title: "Validated with experts", text: "A controlled study with domain scientists shows faster, more accurate pattern discovery versus baseline tools." },
  ],

  /* ---------- 7. DEMO ----------------------------------------- */
  demo: {
    youtubeId: "VIDEO_ID",     // just the id, e.g. "dQw4w9WgXcQ"  ("" hides the player)
    gifs: [                    // drop files in assets/  ("" / empty list hides this row)
      { src: "assets/demo-1.gif", caption: "Fluid zoom & filter across a genomic region." },
      { src: "assets/demo-2.gif", caption: "Side-by-side multi-sample comparison." },
    ],
  },

  /* ---------- 8. LOGOS  (institutional / conference) ---------- */
  // Add { src, alt, link } image objects (link is optional).
  // Empty list = show placeholder slots.
  logos: [
    // { src: "assets/university-a.svg", alt: "University A", link: "https://university-a.edu" },
  ],

  /* ---------- 9. FOOTER / CONTACT ----------------------------- */
  contactEmail:    "contact@example.edu",
  contactNote:     "University A · University B",
  copyrightHolder: "The Authors",
  licenseName:     "CC BY 4.0",
  conferenceName:  "IEEE VIS 2026",   // shown in footer ("Built for ...")
};
