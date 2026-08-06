Closes a document with the wordmark lockup, a neutral tagline, an optional legal link row and a dynamic copyright line.

```jsx
<DocFooter
  wordmark="[brand]"
  company="[Company]"
  disclaimer="Independent resource — not affiliated with or endorsed by any third party."
/>
```

- **No trademarked branding ships in the defaults.** `wordmark` renders the `[brand]` token
  placeholder and `company` renders `[Company]`; substitute your own values at the point of use.
- The tagline defaults to a neutral phrase and carries no ™ symbol.
- The copyright year is computed at render time — never hard-code it.
- Pass `disclaimer` when the output is published outside your organisation; the link row stays
  off unless `links` is supplied.
