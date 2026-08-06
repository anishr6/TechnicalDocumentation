The document's fourth level of emphasis. Body copy, callouts, and panels all read as "informative"; this tag is what makes a passage read as *critical*.

| Level | Meaning | Where |
|---|---|---|
| `critical` | Ignoring this causes data loss, outage, or a compliance breach | `solid` tag beside the heading, plus `<Callout variant="critical">` |
| `required` | Mandatory step in a procedure | tag on the step's title |
| `optional` | Recommended but not mandatory | tag on the step's title |
| `reference` | Background, appendix, further reading | tag on the section heading |

```jsx
<SectionHeading level={3}>Rotate the integration key <PriorityTag level="critical" solid /></SectionHeading>
```

At most one Critical item per page — a page with three of them has none. Never colour body
text to signal importance; use the tag.
