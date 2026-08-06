Use when a process crosses roles or systems and the hand-offs matter. If one team does everything, a Timeline or StepCard sequence is clearer.

```jsx
<Swimlane lanes={[
  { name: "Requester", steps: [{ title: "Submit incident" }, null, null] },
  { name: "Service desk", steps: [null, { title: "Triage", text: "Impact and urgency set." }, null] },
  { name: "Assignment group", steps: [null, null, { title: "Resolve" }] },
]} />
```

Columns are stages in time and must line up across lanes — pass `null` where a lane is idle.
Three to five lanes, four to six columns. Always wrap in a `Figure`.
