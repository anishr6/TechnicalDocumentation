The default grouping container: 1px teal border, 4px radius, white fill, 30px padding — used for concept blocks, FAQ entries and option lists.

```jsx
<DocCard title="Global Data Routing">
  <p>When web search is enabled, requests are processed through Google's global infrastructure.</p>
</DocCard>
```

- Cards stack with 24px between them; never nest a DocCard inside a DocCard.
- A card may hold several h3 + paragraph pairs (see the "What You Need to Know" pattern).
- No shadow, ever — the border does the work.
