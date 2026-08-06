import React from "react";

export const priorityLevels = {
  critical: { label: "Critical", color: "var(--priority-critical)", background: "var(--surface-critical)" },
  required: { label: "Required", color: "var(--priority-required)", background: "var(--surface-required)" },
  optional: { label: "Optional", color: "var(--priority-optional)", background: "var(--surface-optional)" },
  reference: { label: "Reference", color: "var(--priority-reference)", background: "var(--surface-reference)" },
};

export function PriorityTag({ level = "reference", label, solid = false, style }) {
  const l = priorityLevels[level] || priorityLevels.reference;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 10px",
        borderRadius: "var(--radius-sm)",
        border: "var(--border-width-hairline) solid " + l.color,
        background: solid ? l.color : l.background,
        color: solid ? "var(--td-white)" : l.color,
        font: "var(--weight-bold) 12px/1.4 var(--font-core)",
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {label || l.label}
    </span>
  );
}
