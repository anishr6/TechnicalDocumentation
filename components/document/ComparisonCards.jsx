import React from "react";

const tones = {
  neutral: { accent: "var(--border-card)", background: "var(--surface-card)" },
  note: { accent: "var(--accent-note)", background: "var(--surface-note)" },
  info: { accent: "var(--accent-info)", background: "var(--surface-info)" },
  pass: { accent: "var(--accent-pass)", background: "var(--surface-pass)" },
  fail: { accent: "var(--accent-fail)", background: "var(--surface-fail)" },
};

export function ComparisonCards({ items = [], columns, style }) {
  const cols = columns || Math.max(items.length, 1);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(" + cols + ", minmax(0, 1fr))", gap: "var(--space-5)", margin: "0 0 var(--doc-gap-block)", fontFamily: "var(--font-core)", ...style }}>
      {items.map((it, i) => {
        const t = tones[it.tone] || tones.neutral;
        return (
          <div key={i} style={{ background: t.background, border: "var(--border-width-hairline) solid var(--border-rule)", borderTop: "var(--border-width-accent) solid " + t.accent, padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <div style={{ font: "var(--weight-bold) var(--size-h4)/var(--leading-tight) var(--font-core)", color: "var(--text-strong)" }}>{it.title}</div>
            {it.subtitle ? <div style={{ font: "var(--weight-regular) var(--size-caption)/1.5 var(--font-core)", color: "var(--text-muted)" }}>{it.subtitle}</div> : null}
            {it.points && it.points.length ? (
              <ul style={{ margin: 0, paddingLeft: "var(--doc-list-indent)", font: "var(--weight-regular) var(--size-small)/var(--leading-tight) var(--font-core)", color: "var(--text-body)" }}>
                {it.points.map((p, j) => <li key={j} style={{ margin: "0 0 var(--space-2)" }}>{p}</li>)}
              </ul>
            ) : null}
            {it.footnote ? <div style={{ marginTop: "auto", paddingTop: "var(--space-3)", borderTop: "var(--border-width-hairline) solid var(--border-rule)", font: "var(--weight-semibold) var(--size-caption)/1.5 var(--font-core)", color: t.accent }}>{it.footnote}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
