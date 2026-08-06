import React from "react";

export function KeyTakeaway({ label = "Remember", glyph = "\u2713", items = [], children, style }) {
  const list = Array.isArray(items) ? items.filter(Boolean) : [items];
  return (
    <aside style={{ background: "var(--surface-note)", borderTop: "3px solid var(--border-card)", padding: "var(--space-6) var(--space-7)", margin: "var(--doc-gap-section) 0 var(--doc-gap-block)", fontFamily: "var(--font-core)", ...style }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
        <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 22, height: 22, borderRadius: "50%", background: "var(--border-card)", color: "var(--td-white)", font: "var(--weight-bold) 13px/1 var(--font-core)" }}>{glyph}</span>
        <span style={{ font: "var(--weight-bold) var(--size-caption)/1 var(--font-core)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-strong)" }}>{label}</span>
      </div>
      {list.length ? (
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "grid", gap: "var(--space-3)" }}>
          {list.map((t, i) => (
            <li key={i} style={{ font: "var(--weight-semibold) var(--size-h4)/var(--leading-tight) var(--font-core)", color: "var(--text-strong)" }}>{t}</li>
          ))}
        </ul>
      ) : null}
      {children ? <div style={{ font: "var(--weight-regular) var(--size-body)/var(--leading-body) var(--font-core)", color: "var(--text-body)", marginTop: list.length ? "var(--space-4)" : 0 }}>{children}</div> : null}
    </aside>
  );
}
