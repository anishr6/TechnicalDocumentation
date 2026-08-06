import React from "react";

export function Figure({ number, title, caption, source, framed = true, children, style }) {
  return (
    <figure style={{ margin: "0 0 var(--doc-gap-block)", fontFamily: "var(--font-core)", ...style }}>
      <div style={framed ? { border: "var(--border-width-hairline) solid var(--border-rule)", background: "var(--surface-card)", padding: "var(--space-7)" } : undefined}>{children}</div>
      <figcaption style={{ marginTop: "var(--space-3)" }}>
        <span style={{ font: "var(--weight-bold) var(--size-small)/1.4 var(--font-core)", color: "var(--text-heading)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase" }}>
          {number != null ? "Figure " + number : "Figure"}
        </span>
        {title ? (
          <span style={{ font: "var(--weight-semibold) var(--size-small)/1.4 var(--font-core)", color: "var(--text-strong)" }}>
            <span style={{ color: "var(--border-rule)", padding: "0 var(--space-3)" }}>|</span>
            {title}
          </span>
        ) : null}
        {caption ? (
          <p style={{ font: "var(--weight-regular) var(--size-caption)/1.6 var(--font-core)", color: "var(--text-muted)", margin: "var(--space-2) 0 0", maxWidth: "760px" }}>{caption}</p>
        ) : null}
        {source ? (
          <p style={{ font: "var(--weight-regular) 12px/1.6 var(--font-core)", color: "var(--text-muted)", margin: "var(--space-1) 0 0" }}>Source: {source}</p>
        ) : null}
      </figcaption>
    </figure>
  );
}
