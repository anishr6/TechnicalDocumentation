import React from "react";

const labelStyle = {
  font: "var(--weight-bold) var(--size-caption)/1.4 var(--font-core)",
  letterSpacing: "var(--tracking-caps)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  paddingTop: "3px",
};

function Row({ label, children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "210px 1fr", gap: "var(--space-5)", padding: "var(--space-4) 0", borderTop: "var(--border-width-hairline) solid var(--border-rule)" }}>
      <div style={labelStyle}>{label}</div>
      <div style={{ font: "var(--weight-regular) var(--size-body)/var(--leading-tight) var(--font-core)", color: "var(--text-body)" }}>{children}</div>
    </div>
  );
}

function List({ items }) {
  return (
    <ul style={{ margin: 0, paddingLeft: "var(--doc-list-indent)" }}>
      {items.map((it, i) => (
        <li key={i} style={{ margin: "0 0 var(--space-1)" }}>{it}</li>
      ))}
    </ul>
  );
}

export function AtAGlance({
  title = "At a Glance",
  purpose,
  audience,
  readingTime,
  prerequisites = [],
  takeaways = [],
  style,
}) {
  const prereq = Array.isArray(prerequisites) ? prerequisites : [prerequisites];
  const keys = Array.isArray(takeaways) ? takeaways : [takeaways];
  return (
    <section style={{ background: "var(--surface-note)", borderTop: "3px solid var(--border-card)", padding: "var(--space-7) var(--space-8) var(--space-7)", margin: "0 0 var(--doc-gap-section)", fontFamily: "var(--font-core)", ...style }}>
      <h2 style={{ font: "var(--weight-light) var(--size-h3)/var(--leading-heading) var(--font-core)", color: "var(--text-heading)", margin: "0 0 var(--space-5)" }}>{title}</h2>
      {purpose ? <Row label="Purpose">{purpose}</Row> : null}
      {audience ? <Row label="Who should read this">{audience}</Row> : null}
      {readingTime ? <Row label="Estimated reading time">{readingTime}</Row> : null}
      {prereq.filter(Boolean).length ? <Row label="Prerequisites">{prereq.length > 1 ? <List items={prereq} /> : prereq[0]}</Row> : null}
      {keys.filter(Boolean).length ? (
        <div style={{ background: "var(--surface-card)", borderLeft: "var(--border-width-accent) solid var(--accent-note)", padding: "var(--doc-pad-panel)", marginTop: "var(--space-6)" }}>
          <div style={{ ...labelStyle, paddingTop: 0, marginBottom: "var(--space-3)" }}>Key takeaways</div>
          <ol style={{ margin: 0, paddingLeft: "var(--doc-list-indent)", font: "var(--weight-regular) var(--size-body)/var(--leading-tight) var(--font-core)", color: "var(--text-body)" }}>
            {keys.filter(Boolean).map((t, i) => (
              <li key={i} style={{ margin: "0 0 var(--space-2)" }}>{t}</li>
            ))}
          </ol>
        </div>
      ) : null}
    </section>
  );
}
