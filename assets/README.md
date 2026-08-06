# assets

## fonts/

`Mulish-VariableFont_wght.ttf` and `Mulish-Italic-VariableFont_wght.ttf` — the system's core
typeface, served locally so no external font requests are made. Declared as `@font-face` rules in
`tokens/fonts.css` (weights 200–900, upright and italic). Mulish is a substitution for the
measured specimen of the source format; replace these two files and update those rules if the
true brand face becomes available.

## Missing on purpose

Nothing here was drawn, traced or reconstructed.

- `logo.svg` — add your own mark. `components/chrome/DocFooter.jsx` renders the `wordmark` prop
  as plain bold type (`[brand]` by default); replace that span with an `<img>`.
- An icon set — only if a real source provides one. The format itself uses no icons beyond the
  text glyphs ⚠️ ✓ ✗ 👍 👎.
