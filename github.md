# GitHub source

repo: anishr6/TechnicalDocumentation
branch: main

## Last sync

date: 2026-08-06T03:40:00Z

### Updated in this project
- Published the full design system to the repository (79 files, complete directory structure).
- `readme.md` carries the Usage and License sections; `NOTICE` and `SECURITY.md` added at the root.
- Mulish is now self-hosted from `assets/fonts/`; all external font requests removed.
- Repository is a publishing destination, not a source — nothing was imported from it.

## Screen map

| Project artifact | Repo files |
|---|---|
| Opening-page template | `templates/technical-document/TechnicalDocument.dc.html` |
| Continuation-page template | `templates/technical-document-page/TechnicalDocumentPage.dc.html` |
| Documentation article UI kit | `ui_kits/docs-article/` |
| Document components | `components/document/`, `components/chrome/` |
| Tokens and global CSS | `tokens/`, `styles.css` |
| Foundation specimen cards | `guidelines/` |
| Agent skill wrapper | `SKILL.md` |
| License and attribution | `LICENSE`, `NOTICE` |
| Security notes | `SECURITY.md` |
| Local webfonts | `assets/fonts/` |

## Notes

- The committed `LICENSE` is Apache 2.0 (11,357 bytes) — chosen deliberately for its express
  patent grant and patent-retaliation clause, which apply regardless of whether the author
  holds any patents.
- `_ds_bundle.js` and `_ds_manifest.json` are compiler-generated but must stay committed —
  consuming pages load the bundle directly.
