import React from "react";

export function LayerStack({ layers = [], style }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-2)", margin: "0 0 var(--doc-gap-block)", fontFamily: "var(--font-core)", ...style }}>
      {layers.map((layer, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "190px 1fr", gap: "var(--space-5)", alignItems: "center", background: i % 2 ? "var(--surface-card)" : "var(--surface-note)", border: "var(--border-width-hairline) solid var(--border-rule)", borderLeft: "var(--border-width-accent) solid " + (layer.accent || "var(--accent-note)"), padding: "var(--space-5) var(--space-6)" }}>
          <div>
            <div style={{ font: "var(--weight-bold) var(--size-small)/var(--leading-tight) var(--font-core)", color: "var(--text-strong)" }}>{layer.name}</div>
            {layer.note ? <div style={{ font: "var(--weight-regular) var(--size-caption)/1.5 var(--font-core)", color: "var(--text-muted)", marginTop: "var(--space-1)" }}>{layer.note}</div> : null}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
            {(layer.items || []).map((it, j) => (
              <span key={j} style={{ display: "inline-flex", alignItems: "center", background: "var(--surface-page)", border: "var(--border-width-hairline) solid var(--border-rule)", borderRadius: "var(--radius-sm)", padding: "6px 12px", font: "var(--weight-semibold) var(--size-caption)/1.4 var(--font-core)", color: "var(--text-body)" }}>{it}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
