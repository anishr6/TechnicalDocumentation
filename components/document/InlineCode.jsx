import React from "react";

export function InlineCode({ children, style }) {
  return (
    <code
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "var(--size-code)",
        color: "var(--text-code)",
        background: "var(--surface-code)",
        padding: "1px 5px",
        borderRadius: "var(--radius-sm)",
        ...style,
      }}
    >
      {children}
    </code>
  );
}
