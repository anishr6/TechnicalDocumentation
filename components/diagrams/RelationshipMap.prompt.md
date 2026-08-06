Hub and spokes — the centre is the subject, every node touches it directly. Nodes that only relate to each other belong in an architecture LayerStack instead.

```jsx
<RelationshipMap center="Incident" nodes={[
  { title: "Configuration item", text: "Affected asset" },
  { title: "Assignment group", text: "Owns resolution" },
  { title: "Change request", text: "Optional link" },
]} />
```

Three to six nodes. Node text names the relationship, not the node's own description. Always
inside a `Figure`.
