import React from "react";

export function QuoteBanner({ label, children, style }) {
  return (
    <div
      style={{
        background: "var(--surface-quote)",
        border: "var(--border-width-hairline) solid var(--border-card)",
        borderRadius: "var(--radius-sm)",
        padding: "var(--doc-pad-card)",
        margin: "0 0 var(--doc-gap-block)",
        fontFamily: "var(--font-core)",
        fontSize: "var(--size-body)",
        lineHeight: "var(--leading-body)",
        color: "var(--text-body)",
        fontStyle: "italic",
        ...style,
      }}
    >
      {label ? (
        <div style={{ fontWeight: "var(--weight-bold)", color: "var(--text-strong)", marginBottom: "var(--space-3)" }}>{label}</div>
      ) : null}
      {children}
    </div>
  );
}
