A numbered variant of DocCard used under an "Action Required" heading; the number lives in the teal h3, not in a badge.

```jsx
<StepCard number={1} title="Review Your Policies">
  <p><strong>Action:</strong> Confirm that web search configuration aligns with your standards.</p>
</StepCard>
```

- Inside, lead paragraphs with a bold label (`Action:`, `Key Questions:`) then a bullet list.
- Numbering is manual and continuous across the section.
