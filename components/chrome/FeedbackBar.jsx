import React from "react";

function Btn({ glyph, children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        font: "var(--weight-semibold) var(--size-small)/1 var(--font-core)",
        color: active ? "var(--td-white)" : "var(--text-strong)",
        background: active ? "var(--td-teal-700)" : "var(--surface-card)",
        border: "var(--border-width-hairline) solid " + (active ? "var(--td-teal-700)" : "var(--td-ink-400)"),
        borderRadius: "var(--radius-sm)",
        padding: "8px 14px",
        cursor: "pointer",
        transition: "background var(--motion-base) var(--motion-ease), color var(--motion-base) var(--motion-ease)",
      }}
    >
      <span aria-hidden="true">{glyph}</span>{children}
    </button>
  );
}

export function FeedbackBar({ question = "Was this content helpful?", stat = "50% found this useful", value = null, onVote = () => {}, style }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        flexWrap: "wrap",
        borderTop: "var(--border-width-hairline) solid var(--border-rule)",
        borderBottom: "var(--border-width-hairline) solid var(--border-rule)",
        padding: "var(--space-6) 0",
        fontFamily: "var(--font-core)",
        fontSize: "var(--size-small)",
        color: "var(--text-body)",
        ...style,
      }}
    >
      <span>{question}</span>
      <Btn glyph="👍" active={value === "yes"} onClick={() => onVote("yes")}>Yes</Btn>
      <Btn glyph="👎" active={value === "no"} onClick={() => onVote("no")}>No</Btn>
      <span style={{ color: "var(--text-muted)", marginLeft: "var(--space-2)" }}>{stat}</span>
    </div>
  );
}
