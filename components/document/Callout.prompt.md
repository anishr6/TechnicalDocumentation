One-paragraph admonition where the text runs inline after an emoji and a bold label — not a titled box.

```jsx
<Callout variant="caution">
  If the agent's workflow depends on web search, you may need to reconfigure the agent's logic.
</Callout>
```

- `caution` = ⚠️ on `--surface-caution` with a 1px amber border and 6px radius (slightly rounder than DocCard, matching the source).
- Keep it to one or two sentences; longer guidance belongs in an AccentPanel.

## Critical

`variant="critical"` is the top of the four-level emphasis scale (see `PriorityTag`): red
border with a heavier left bar and an uppercase CRITICAL lead-in. Reserve it for consequences
— data loss, outage, compliance breach. One per page at most; a page with three critical
callouts has none.

```jsx
<Callout variant="critical">Rotating this key invalidates every active integration session.</Callout>
```
