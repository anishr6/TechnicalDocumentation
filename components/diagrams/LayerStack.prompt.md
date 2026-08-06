The system diagram for these documents. Bands read top-down from the user-facing layer to storage — reversing that order confuses readers who expect the stack convention.

```jsx
<LayerStack layers={[
  { name: "Presentation", note: "What agents see", items: ["Incident form", "Agent workspace"] },
  { name: "Integration", items: ["REST API", "MID Server"] },
  { name: "Data", items: ["incident", "cmdb_ci", "sys_user_group"] },
]} />
```

Three to five layers, at most six chips each. Chips are component or table names, not
sentences. Use `accent` only to mark a layer the chapter is about.
