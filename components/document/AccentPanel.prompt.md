Flat tinted block with a 4px left bar and no other border — carries lists of supporting detail (steps, protections, data handled). This is the "Banner Actions" pattern.

```jsx
<AccentPanel variant="info" label="Data Protection During Web Search:">
  <TermList items={[{ term: "Encryption", text: "TLS 1.2 in transit" }]} />
</AccentPanel>
```

## Choosing the colour

Four named variants cover every case in the source document — pick by meaning, not by looks:

| `variant` | Left bar | Fill | Use for |
|---|---|---|---|
| `note` (default) | teal `#1D7481` | `#F5FAF8` | neutral supporting detail, procedures, "not sent" lists |
| `info` | blue `#3F96D7` | `#E5F3FC` | how-it-works facts, protections, encryption |
| `pass` | green `#5CBF4A` | `#EAFFE7` | compliant / allowed verdicts (label with ✓) |
| `fail` | red `#D0483A` | `#FDECEA` | non-compliant / blocked verdicts (label with ✗) |

For a darker bar than the variant provides, override it — always with a token, and always
keep a pale fill so body text stays at full contrast:

```jsx
<AccentPanel accent="var(--td-teal-900)" background="var(--td-teal-050)" label="Banner Actions:">…</AccentPanel>
<AccentPanel accent="var(--td-green-700)" background="var(--td-green-050)">…</AccentPanel>
```

Do not invent hex values: the accent must come from `tokens/colors.css`. Square corners, no
border other than the left bar, 22px/26px padding.
