import React from "react";

const tones = {
  neutral: { accent: "var(--border-card)", background: "var(--surface-card)" },
  pass: { accent: "var(--accent-pass)", background: "var(--surface-pass)" },
  fail: { accent: "var(--accent-fail)", background: "var(--surface-fail)" },
  caution: { accent: "var(--border-caution)", background: "var(--surface-caution)" },
};

export function DecisionTree({ question, branches = [], style }) {
  return (
    <div style={{ margin: "0 0 var(--doc-gap-block)", fontFamily: "var(--font-core)", ...style }}>
      <div style={{ maxWidth: 520, margin: "0 auto", background: "var(--surface-note)", border: "var(--border-width-hairline) solid var(--border-card)", padding: "var(--space-5) var(--space-6)", textAlign: "center", font: "var(--weight-bold) var(--size-h4)/var(--leading-tight) var(--font-core)", color: "var(--text-strong)" }}>{question}</div>
      <div style={{ width: 2, height: "var(--space-5)", background: "var(--td-teal-100)", margin: "0 auto" }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(" + Math.max(branches.length, 1) + ", minmax(0, 1fr))", gap: "var(--space-5)" }}>
        {branches.map((b, i) => {
          const t = tones[b.tone] || tones.neutral;
          return (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                <div style={{ flex: 1, height: 2, background: i === 0 ? "transparent" : "var(--td-teal-100)" }} />
                <div style={{ width: 2, height: 2, background: "var(--td-teal-100)" }} />
                <div style={{ flex: 1, height: 2, background: i === branches.length - 1 ? "transparent" : "var(--td-teal-100)" }} />
              </div>
              <div style={{ width: 2, height: "var(--space-4)", background: "var(--td-teal-100)" }} />
              <span style={{ display: "inline-flex", padding: "3px 12px", borderRadius: "var(--radius-pill)", background: "var(--surface-reference)", font: "var(--weight-bold) 12px/1.5 var(--font-core)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-strong)" }}>{b.answer}</span>
              <div style={{ width: 2, height: "var(--space-4)", background: "var(--td-teal-100)" }} />
              <div style={{ width: "100%", background: t.background, borderTop: "var(--border-width-accent) solid " + t.accent, border: "var(--border-width-hairline) solid var(--border-rule)", borderTopWidth: "var(--border-width-accent)", borderTopColor: t.accent, padding: "var(--space-5)" }}>
                <div style={{ font: "var(--weight-bold) var(--size-small)/var(--leading-tight) var(--font-core)", color: "var(--text-strong)" }}>{b.result}</div>
                {b.text ? <div style={{ font: "var(--weight-regular) var(--size-caption)/1.6 var(--font-core)", color: "var(--text-body)", marginTop: "var(--space-2)" }}>{b.text}</div> : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
