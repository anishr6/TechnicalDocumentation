Shows a change of state. Grey is what exists today, teal is what replaces it — never reverse the colours.

```jsx
<BeforeAfter
  before={{ title: "Manual triage", points: ["Agent sets priority by hand", "No audit trail"] }}
  after={{ title: "Derived priority", points: ["Impact x urgency matrix", "Every change logged"] }}
/>
```

Matching point counts on both sides, and each after-point should answer the before-point on
the same row. Use `beforeLabel`/`afterLabel` for "Today"/"Q3" style variants.
