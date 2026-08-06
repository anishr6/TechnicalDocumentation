# Security

This project ships static HTML, CSS and React components for designing documents. It has no
server, no build pipeline, no dependencies to install, and no runtime data handling.

## What this project does not do

- It collects no data. There are no analytics, no telemetry and no tracking of any kind.
- It makes no network requests of its own. Nothing is sent anywhere at runtime.
- It stores nothing. No cookies, no `localStorage`, no session state written to the browser.
- It contains no credentials, API keys, tokens or configuration secrets.
- It does not render untrusted HTML. No component uses `innerHTML`,
  `dangerouslySetInnerHTML` or `eval`, so there is no injection path through the component API.

The feedback control in `components/chrome/FeedbackBar.jsx` keeps its state in memory for the
life of the page and reports nowhere.

## External resources

Three resources are loaded from public CDNs by the specimen and UI-kit pages:

| Resource | Source | Integrity |
|---|---|---|
| React 18.3.1 | unpkg.com | SRI hash pinned |
| ReactDOM 18.3.1 | unpkg.com | SRI hash pinned |
| Babel standalone 7.29.0 | unpkg.com | SRI hash pinned |

All load over HTTPS, pinned to exact versions and carrying Subresource Integrity hashes, so a
browser will refuse to execute them if the delivered file does not match the expected hash.
Neither a CDN compromise nor a network attacker can substitute different code.

**Fonts are served locally.** Mulish ships in `assets/fonts/` and is declared with `@font-face`
in `tokens/fonts.css`. No font is fetched from a third party, and inline code falls back to the
reader's system monospace face, so a page built with this system makes no external font request
of any kind.

## Considerations for consumers

**1. Content Security Policy.** The specimen cards and `ui_kits/docs-article/index.html` compile
JSX in the browser using Babel, which requires `script-src 'unsafe-eval'`. These pages are
intended as design references and local previews. For a production site, compile the components
ahead of time with your own build tooling and serve the output — then no `unsafe-eval` allowance
is needed.

**2. Provenance of the generated bundle.** `_ds_bundle.js` and `_ds_manifest.json` are committed
generated artifacts, compiled from the `.jsx` sources under `components/` and `ui_kits/` in this
same repository. They are not vendored third-party code. Review the sources if you need to verify
what the bundle contains.

## Reporting an issue

Open an issue on the repository. This project has no server-side component and no user data, so
findings are expected to concern the considerations above rather than exploitable vulnerabilities.

## No warranty

This project is licensed under the Apache License, Version 2.0 and is provided "AS IS", without
warranties or conditions of any kind. See `LICENSE`.
