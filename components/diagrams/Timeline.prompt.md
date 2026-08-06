Sequence over time — rollouts, release phases, escalation windows. Not for procedures the reader performs; those are StepCards.

```jsx
<Timeline orientation="horizontal" items={[
  { label: "Q1 2026", title: "Pilot", text: "Two assignment groups." },
  { label: "Q2 2026", title: "General availability", text: "All groups migrated." },
]} />
```

Horizontal caps at five items with one short sentence each; beyond that use vertical. Labels
carry the time value, so never repeat the date in the title.
