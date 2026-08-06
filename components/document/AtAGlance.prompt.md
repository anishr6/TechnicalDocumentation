Opens the document. Every technical document starts with this block, before the first section heading — a reader who stops after it should still know what the document is for and whether it applies to them.

```jsx
<AtAGlance
  purpose="Explain how incident priority is derived and who may change it."
  audience="Service desk agents and incident managers"
  readingTime="12 minutes"
  prerequisites={["Access to the Incident module", "Familiarity with your impact and urgency matrix"]}
  takeaways={[
    "Priority is never set manually.",
    "Impact and urgency together determine priority.",
    "Escalation follows the assignment group, not the individual.",
  ]}
/>
```

Rules: three to five takeaways, each a complete sentence stating a fact rather than a topic.
Reading time is rounded to whole minutes at 200 words per minute. Omit a field rather than
filling it with "N/A" — omitted rows disappear.
