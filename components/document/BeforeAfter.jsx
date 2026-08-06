import React from "react";

function Panel({ label, title, points = [], tone }) {
  return (
    <div style={{ background: tone === "after" ? "var(--surface-note)" : "var(--surface-reference)", borderTop: "var(--border-width-accent) solid " + (tone === "after" ? "var(--accent-note)" : "var(--td-ink-400)"), padding: "var(--space-6)" }}>
      <div style={{ font: "var(--weight-bold) var(--size-caption)/1.4 var(--font-core)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "var(--space-2)" }}>{label}</div>
      {title ? <div style={{ font: "var(--weight-bold) var(--size-h4)/var(--leading-tight) var(--font-core)", color: "var(--text-strong)", marginBottom: "var(--space-3)" }}>{title}</div> : null}
      <ul style={{ margin: 0, paddingLeft: "var(--doc-list-indent)", font: "var(--weight-regular) var(--size-small)/var(--leading-tight) var(--font-core)", color: "var(--text-body)" }}>
        {points.map((p, i) => <li key={i} style={{ margin: "0 0 var(--space-2)" }}>{p}</li>)}
      </ul>
    </div>
  );
}

export function BeforeAfter({ beforeLabel = "Before", afterLabel = "After", before = {}, after = {}, style }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 44px 1fr", alignItems: "stretch", margin: "0 0 var(--doc-gap-block)", fontFamily: "var(--font-core)", ...style }}>
      <Panel label={beforeLabel} title={before.title} points={before.points || []} tone="before" />
      <div aria-hidden="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", font: "var(--weight-light) 26px/1 var(--font-core)", color: "var(--border-card)" }}>&#8594;</div>
      <Panel label={afterLabel} title={after.title} points={after.points || []} tone="after" />
    </div>
  );
}
