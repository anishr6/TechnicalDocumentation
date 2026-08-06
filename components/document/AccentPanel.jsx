import React from "react";

const variants = {
  note: { background: "var(--surface-note)", accent: "var(--accent-note)" },
  info: { background: "var(--surface-info)", accent: "var(--accent-info)" },
  pass: { background: "var(--surface-pass)", accent: "var(--accent-pass)" },
  fail: { background: "var(--surface-fail)", accent: "var(--accent-fail)" },
};

export function AccentPanel({ variant = "note", accent, background, label, children, style }) {
  const v = variants[variant] || variants.note;
  return (
    <div
      style={{
        background: background || v.background,
        borderLeft: "var(--border-width-accent) solid " + (accent || v.accent),
        padding: "var(--doc-pad-panel)",
        margin: "0 0 var(--doc-gap-block)",
        fontFamily: "var(--font-core)",
        fontSize: "var(--size-body)",
        lineHeight: "var(--leading-body)",
        color: "var(--text-body)",
        ...style,
      }}
    >
      {label ? (
        <div style={{ fontWeight: "var(--weight-bold)", color: "var(--text-strong)", marginBottom: "var(--space-2)" }}>{label}</div>
      ) : null}
      {children}
    </div>
  );
}
