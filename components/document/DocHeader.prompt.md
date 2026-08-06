Opens a technical document so the first screen has structure instead of a bare paragraph.

```jsx
<DocHeader
  meta={["AI Agent Studio", "Zurich Patch 2+", "Updated October 2025"]}
  title="Web search data processing"
  standfirst="Web search lets your AI agents ground their answers in current information from the public web."
/>
```

**Intentional addition** — the source recording is cropped and never shows the top of the
article, so this block is composed from the format's own parts (light teal heading, muted meta
type, hairline rule) rather than copied. Replace it if a real source shows the true page head.

- Meta items are 14px semibold uppercase `--text-muted`, slash-separated; keep to three.
- The standfirst is 20px/1.7 — the only body size above 18px in the system. One sentence, two at most.
