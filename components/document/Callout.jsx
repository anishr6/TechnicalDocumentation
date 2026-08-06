import React from "react";

const variants = {
  caution: { icon: "\u26A0\uFE0F", background: "var(--surface-caution)", border: "var(--border-caution)", label: "Important" },
  note: { icon: "\u2139\uFE0F", background: "var(--surface-note)", border: "var(--border-card)", label: "Note" },
};

export function Callout({ variant = "caution", label, children, style }) {
  const v = variants[variant] || variants.caution;
  return (
    <div
      style={{
        background: v.background,
        border: "var(--border-width-hairline) solid " + v.border,
        borderRadius: "var(--radius-md)",
        padding: "var(--doc-pad-panel)",
        margin: "0 0 var(--doc-gap-block)",
        fontFamily: "var(--font-core)",
        fontSize: "var(--size-body)",
        lineHeight: "var(--leading-body)",
        color: "var(--text-body)",
        ...style,
      }}
    >
      <span style={{ marginRight: "var(--space-2)" }}>{v.icon}</span>
      <strong style={{ fontWeight: "var(--weight-bold)", color: "var(--text-strong)" }}>{(label || v.label) + ":"}</strong>{" "}
      {children}
    </div>
  );
}
