# Technical Documents — Design System

The house format for **long-form technical product documentation**: articles that explain a
capability, state its data-handling implications, list the actions a customer must take, and
close with an FAQ. This system encodes that format — type, colour, container vocabulary and
voice — so any new document can be generated to match.

## License

Licensed under the Apache License, Version 2.0. See `LICENSE` for the full text.

## Provenance

The format was derived from a single screen recording of a documentation article, supplied by
the project owner. Every value here is measured or sampled from that capture. The capture
itself, the extracted frames, and the article's original wording have been **removed from this
project**: all copy in the templates and UI kit is generic placeholder text that preserves the
structure and voice, not the words. No codebase, Figma file, brand kit, font binaries or logo
files were provided.

Where the capture did not show something, this system leaves it out rather than inventing it
(see *Known gaps*).

## Usage

Three ways in, easiest first.

### 1. Write a document

You need no tooling and no code.

Copy `templates/technical-document/` for a document's first page, and
`templates/technical-document-page/` for each page after it. Open the `.dc.html` file inside and
edit the text directly — headings, paragraphs and list items are ordinary HTML.

Each template folder is self-contained. If you move it somewhere else, open its `ds-base.js` and
adjust the `base` path at the top so it still reaches this project's root.

Both templates print cleanly to PDF. For Word, save the page as standalone HTML, open it in Word,
then Save As `.docx`.

### 2. Use it with an AI coding agent

This repository doubles as an agent skill. `SKILL.md` at the root declares it, so an agent that
supports skills — Claude Code, for instance — can load the whole system and design against it.

Drop the folder into your agent's skills directory and ask for a document. The agent reads this
readme for the format, voice and layout rules, then builds from the components rather than
inventing its own styling.

### 3. Build with the components in code

Two files matter: the stylesheet and the bundle.

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

`styles.css` is an `@import` manifest that pulls in every token file and the local webfonts, so
linking that one file makes all 95 custom properties available. `_ds_bundle.js` exposes the
components on a single global namespace:

```html
<script type="text/babel">
  const { DocCard, AccentPanel, Callout } = window.<Namespace>;
</script>
```

The namespace string is recorded in `_ds_manifest.json` under `"namespace"`. React 18 and Babel
standalone must load before the bundle — `ui_kits/docs-article/index.html` is a complete working
page to copy from.

### Reading the system

Open any file in `guidelines/` in a browser to see a foundation specimen — colour ramps, the type
scale, spacing rhythm, container anatomy. `ui_kits/docs-article/index.html` renders a full
document end to end.

## Index

| File | What it is |
|---|---|
| `styles.css` | Global entry point — `@import`s only |
| `tokens/colors.css` | Base palette + semantic aliases |
| `tokens/typography.css` | Font stacks, weights, document type scale |
| `tokens/spacing.css` | 4px scale + document rhythm tokens |
| `tokens/borders.css` | Radii, border widths, motion |
| `tokens/fonts.css` | Webfont loading (see *Font substitution*) |
| `tokens/document.css` | `.td-doc` base article typography |
| `components/document/` | The document block vocabulary |
| `components/chrome/` | End-of-article chrome |
| `ui_kits/docs-article/` | Full article recreation (`index.html`) |
| `templates/technical-document/` | Opening page — includes the title masthead |
| `templates/technical-document-page/` | Continuation page — same format, no masthead |
| `guidelines/*.html` | Foundation specimen cards |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-skill wrapper |

## Components

Document blocks (`components/document/`):
**DocHeader**, **SectionHeading**, **DocCard**, **StepCard**, **AccentPanel**, **Callout**,
**QuoteBanner**, **TermList**, **InlineCode**.

Structure blocks (`components/document/`):
**AtAGlance**, **KeyTakeaway**, **Figure**, **ChapterTransition**, **PriorityTag**,
**ComparisonCards**, **BeforeAfter**.

Diagrams (`components/diagrams/`):
**Timeline**, **Swimlane**, **LifecycleCircle**, **DecisionTree**, **RelationshipMap**,
**LayerStack**.

Article chrome (`components/chrome/`): **FeedbackBar**, **DocFooter**.

Screens (`ui_kits/docs-article/`): **DocsArticle**.

The document blocks are exactly the block types the source article used — nothing was added
speculatively there. The structure blocks and diagrams came later, from a review of documents
built on the system: they answer pacing and emphasis problems the source recording never had
to solve. Each is described in its own `.prompt.md`. *Intentional additions:* `SectionHeading` and `TermList` wrap plain `h2/h3` and
`ul/li` markup so the light-teal heading rule and the bold-term list pattern can't drift.
`DocHeader` is the document opening — the capture was cropped and never showed the top of the
article, so this block is composed from the format's own parts (muted uppercase meta trail,
light teal h1, 20px standfirst) rather than copied.

> **Note on the JS namespace.** The compiler derives `window.<Namespace>` from the project
> title, so existing card and template files reference a namespace string generated before the
> rename. It is an internal identifier only and appears in no rendered output.

## Document structure rules

These are not optional stylistic preferences; a document that breaks them reads as unfinished.

1. **Open with `AtAGlance`.** Purpose, audience, reading time, prerequisites, key takeaways —
   before the first section heading. A reader who stops there still knows whether the document
   applies to them.
2. **Fill at least 70% of every page** (`--doc-page-fill-min`). A short page takes another
   block: pull the next section up, or add a note callout, a figure, a takeaway card, or a
   references list. Only a chapter's last page may end early. See
   `guidelines/page-rhythm.html`.
3. **Four levels of emphasis, not one.** Critical, Required, Optional, Reference — via
   `PriorityTag` and `Callout variant="critical"`. At most one Critical item per page.
4. **Every visual is a numbered, titled `Figure`.** "Figure 5" alone is not a caption;
   "Figure 5 | Incident Lifecycle Overview" is. Numbering runs through the whole document.
5. **Close every chapter with `KeyTakeaway`, then `ChapterTransition`.** Two or three facts
   the reader must carry forward, then one line naming what comes next.
6. **Footers carry document metadata**, not just copyright: version, owner, next review date,
   classification, and page x of y.

## Which template to start from

- **Technical Document — Opening Page** — the **first** page of a document. Carries the
  masthead: 6px teal top bar, tinted band, uppercase meta trail (product area / release /
  updated), 44px light title, 20px standfirst.
- **Technical Document — Continuation Page** — every page **after** the first. Identical type,
  colour, spacing and block vocabulary; it opens on its first `h2` with no title, meta trail or
  standfirst.

The title block appears once per document, never per page.

## Publishing note

Nothing in this system carries a third-party trademark, logo, slogan or verbatim third-party
copy. The footer wordmark and company name are `[brand]` / `[Company]` placeholders, the
strapline is neutral, and the copyright line is generated at render time. `DocFooter` also
accepts a `disclaimer` prop if you want a non-affiliation notice in a specific document.

## Changing a panel's accent colour

The "Banner Actions" block is an `AccentPanel`: a tinted fill with a 4px left bar and no other
border. Pick the bar colour by **meaning** first — `variant="note"` (teal), `"info"` (blue),
`"pass"` (green), `"fail"` (red). For a different or darker bar, override with tokens:

```jsx
<AccentPanel accent="var(--td-teal-900)" background="var(--td-teal-050)" label="Banner Actions:">…</AccentPanel>
```

Always keep the fill pale — the bar carries the colour, the fill never does. Both templates
expose the same choice in Tweaks as **Detail panels → panelTone / panelAccent**. See
`guidelines/accent-panel-tones.html` for every option side by side.

## Content fundamentals

The voice is **plain, procedural and unhedged**. It states behaviour, then consequence.

- **Person.** Second person for the reader and their organisation ("you'll see an informational
  banner", "your environment", "Confirm that the configuration aligns with your organization's
  governance standards"). First person appears only in FAQ questions written from the
  customer's mouth ("Can this be used in a compliant way?"). Never "we".
- **Answer first.** FAQ answers open with the verdict: *"No. The capability uses a global
  deployment, which means:"* / *"It depends on your specific requirements:"*
- **Colons introduce structure.** A sentence ends in a colon and hands off to a bulleted list
  more often than it continues into another sentence. Bullets are fragments with no terminal
  punctuation.
- **Bold is a label, not emphasis.** `**Action:**`, `**Key Questions:**`, `**Sent to the
  service:**`, `**If this doesn't align with your policies:**` — bold runs are lead-ins ending
  in a colon. Mid-sentence bold appears only to negate: *"The provider does **not** use this
  data to train models."*
- **Casing.** Title Case for h2/h3 headings ("What You Need to Know", "Action Required").
  Sentence case everywhere else. Product and feature names are capitalised as products.
- **Precision markers.** Releases, standards, retention windows and third-party terms are named
  exactly ("TLS 1.2 in transit", "a 30-day retention window", "service-specific terms").
- **Constraints are stated flatly**, with the cause attributed: *"This is a characteristic of
  the provider's service design, not a configuration choice."* No apology, no upsell — only
  "Watch for updates:" followed by concrete channels.
- **Verbatim UI copy is quoted**, in curly quotes, italic, inside a QuoteBanner, including
  bracketed button text.
- **Vibe:** compliance-desk sober. Written to be forwarded to a privacy officer. No exclamation
  marks, no rhetorical questions outside the FAQ, no em-dash asides, no humour.
- **Emoji:** one, functionally — ⚠️ opening a caution callout. Plus ✓ / ✗ as verdict glyphs and
  👍 / 👎 on the feedback buttons. Nowhere else.

## Visual foundations

**Colour.** One hue does nearly all the work: teal `#1D7481` for every heading, card border,
link and neutral accent bar. Body copy is near-black `#2B2B2B` on pure white — no grey page
background, no tinted article canvas. Tints are reserved and each means one thing: pale teal
`#F5FAF8` = supporting detail, pale blue `#E5F3FC` with a `#3F96D7` bar = how-it-works fact,
pale amber `#FEF4E8` with a `#E9A83E` border = caution, pale yellow `#FEFADE` = verbatim product
copy, pale green `#EAFFE7` = compliant, pale red `#FDECEA` = not compliant. Two backgrounds
dominate (white, pale teal); the rest are accents on single blocks.

**Type.** A single humanist geometric sans at two weights: Light 300 for all headings, Regular
400 for body, Bold 700 for lead-in labels. Headings are teal and light — never bold, never
black — the most distinctive move in the format. Body is 18px on a 32px line (1.78), which is
what makes the document feel calm at width. Scale: 44 / 38 / 32 / 22 / 18 / 16. Content column
~1180px, so lines run long by web standards; the format trusts line-height over a narrow measure.

**Spacing.** 4px base scale. 44px above an h2, 24px between stacked blocks, 30px inside a
bordered card, 22px/26px inside an accent panel, 22px list indent. Vertical rhythm is the only
layout system — one column, top to bottom, no grid, no sidebars, no multi-column arrangements.

**Backgrounds.** Flat colour only. No imagery, illustration, gradient, pattern, texture or
full-bleed art in the article body. The page is white paper; the masthead is a single tinted band.

**Borders, radii, shadows.** Hairline 1px borders and 4px accent bars. Radii: 4px on bordered
cards, 6px on the caution callout (measurably rounder — keep the difference), 0 on accent
panels. **No shadows in article content at all**; the only depth is a 1px hairline rule above
and below the feedback bar. Cards are defined purely by a teal line: white fill, 1px border,
4px radius, 30px padding.

**Transparency and blur.** None. Every fill is opaque; nothing is layered, frosted or overlaid.
No protection gradients (there is no imagery to protect text from) and no capsules or pills
except the inline-code chip.

**Animation and states.** The document is static — no entrance animation, scroll reveal or
parallax. Interaction is limited to chrome: links are teal and unadorned, gaining an underline
on hover and darkening to `#0F4F58`; feedback buttons are 1px grey outlines that fill teal with
white text once chosen. Transitions are 180ms ease-out; nothing bounces, nothing scales on press.

**Imagery.** None supplied and none used. If a screenshot is ever needed, treat it as a plain
inline image with no frame, shadow or colour treatment.

**Fixed elements.** Nothing is sticky or fixed; the article scrolls as one flow.

## Iconography

There is effectively **no icon system**. The format uses exactly five glyphs, all text:

- ⚠️ — opens the caution/Important callout (emoji, before the bold label)
- ✓ and ✗ — verdict markers on the green/red compliance panels, coloured to match the panel
- 👍 👎 — on the feedback buttons
- • — the standard list bullet

No icon font, no SVG sprite, no PNG icons appeared in the source and none were supplied.
**Do not introduce Lucide, Heroicons or any other icon set** — if an icon feels necessary, the
format's answer is a bold label.

## Known gaps — please supply

1. **No logo, and no trademarked branding in the defaults.** No vector was provided and nothing
   was drawn or reconstructed. `DocFooter` ships `wordmark="[brand]"`, `company="[Company]"`, a
   neutral tagline and a render-time copyright year. Substitute your own values at the point of
   use, and add `logo.svg` to `assets/` if a real mark should appear.
2. **Font substitution.** No brand font binaries were provided. The specimen is a wide humanist
   geometric sans (single-storey open-tail *g*, slanted-cut *t*, very round *o*); **Mulish** is
   the closest free match at the measured 18px/32px width. It is now **served locally** from
   `assets/fonts/` as two variable fonts (upright and italic, weights 200–900), so no external
   font requests are made. Replace those two files and the `@font-face` rules in
   `tokens/fonts.css` if the true brand face becomes available.

   *Page weight:* the two TTFs total roughly 500 KB. Converting them to WOFF2 would cut that by
   about half — worth doing before serving the system on a public, high-traffic site, and not
   worth doing for internal documents or PDF output.

   *Monospace:* no mono webfont is bundled. The `InlineCode` chip — used when naming an exact
   interface string, e.g. "Review the `Tools` section" — renders in whichever monospace face the
   reader's machine provides (Menlo on macOS, Consolas on Windows). The chip's styling is
   unchanged, so it still reads as a code label; only the letterforms vary between machines.
   This keeps the system free of third-party font requests. If a consistent mono is required,
   add the font files to `assets/fonts/`, declare them in `tokens/fonts.css`, and name the family
   first in `--font-mono`.
3. **No site chrome.** The source capture was cropped to the article body, so the header,
   product and version switchers, breadcrumb, left navigation tree, "on this page" rail, search
   and page metadata line are unknown and absent from the UI kit.
4. **One surface only.** Release notes, KB articles and a docs home page would each need their
   own source.
