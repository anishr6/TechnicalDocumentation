A single decision, two or three outcomes. For multi-step decisions, stack two trees with a ChapterTransition-style lead-in rather than nesting.

```jsx
<DecisionTree question="Does the regulation mandate in-region processing?" branches={[
  { answer: "Yes", result: "Disable web search", tone: "fail", text: "Reconfigure affected agents before enabling." },
  { answer: "No", result: "Proceed with review", tone: "pass" },
]} />
```

The question must be answerable yes/no or by picking one named case. Outcome text is one
sentence stating the action, not the reasoning.
