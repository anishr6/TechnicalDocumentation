import React from "react";

export function ChapterTransition({ label = "Next", next, children, style }) {
  return (
    <div style={{ margin: "var(--doc-gap-transition) 0", fontFamily: "var(--font-core)", ...style }}>
      <hr style={{ border: 0, borderTop: "var(--border-width-hairline) solid var(--border-rule)", margin: "0 0 var(--space-5)" }} />
      <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-4)" }}>
        <span style={{ font: "var(--weight-bold) var(--size-caption)/1.4 var(--font-core)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-heading)", whiteSpace: "nowrap" }}>{label}</span>
        <span style={{ font: "var(--weight-regular) var(--size-body)/var(--leading-tight) var(--font-core)", color: "var(--text-muted)" }}>
          {children || (next ? <>We will discuss <strong style={{ fontWeight: "var(--weight-semibold)", color: "var(--text-strong)" }}>{next}</strong>.</> : null)}
        </span>
      </div>
    </div>
  );
}
