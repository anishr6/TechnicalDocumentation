Compares options at equal weight — replaces a two-column table when the cells are prose rather than data.

```jsx
<ComparisonCards items={[
  { title: "Global deployment", subtitle: "Default", points: ["Lowest latency"], footnote: "Not compliant under strict residency", tone: "fail" },
  { title: "Regional deployment", points: ["Data stays in region"], footnote: "Compliant", tone: "pass" },
]} />
```

Two or three cards; four is the maximum and only with short points. Give every card the same
number of points so the cards read as parallel. Use `pass`/`fail` tones only when there is a
real verdict — otherwise keep them neutral.
