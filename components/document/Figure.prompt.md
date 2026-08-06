Every diagram, table, and screenshot is a numbered figure. A bare "Figure 5" is not acceptable — the number always carries a title.

```jsx
<Figure number={5} title="Incident Lifecycle Overview" caption="States advance left to right; only Resolved may return to In Progress.">
  <LifecycleCircle stages={[...]} />
</Figure>
```

Number figures sequentially through the whole document, not per chapter. The title is a noun
phrase in title case. Use `caption` when the reader needs to be told what to look at, and
`framed={false}` when the child already has its own border.
