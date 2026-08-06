# UI kit — technical documentation article

A high-fidelity recreation of a product-documentation article surface, composed only from
`components/document` and `components/chrome`.

## Files
- `index.html` — the interactive article. The helpfulness buttons are live; links are inert.
- `DocsArticle.jsx` — the whole article.

## Copy
All text is generic placeholder copy that preserves the *structure* and *voice* of the format
(answer-first FAQ answers, bold label lead-ins, colon-then-list construction). Replace the words,
keep the shape.

## Scope note
The source material for this format was a cropped capture of an article body only. The
surrounding site chrome — header, product and version switchers, breadcrumb, left navigation
tree, "on this page" rail, search — was never visible and is therefore **deliberately absent**
rather than approximated.

## Measured values
- Content column ~1180px, body 18px/32px, h2 32px, card h3 22px
- Card: 1px `#1D7481` border, 4px radius, 30px padding, 24px between cards
- Accent panel: 4px left bar, square corners, 22px/26px padding
- Caution callout: 1px `#E9A83E`, 6px radius, `#FEF4E8` fill
