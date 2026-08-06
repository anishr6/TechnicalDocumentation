import React from "react";

export function Swimlane({ lanes = [], laneWidth = 170, style }) {
  const cols = Math.max(...lanes.map((l) => (l.steps || []).length), 1);
  return (
    <div style={{ border: "var(--border-width-hairline) solid var(--border-rule)", margin: "0 0 var(--doc-gap-block)", fontFamily: "var(--font-core)", ...style }}>
      {lanes.map((lane, li) => (
        <div key={li} style={{ display: "grid", gridTemplateColumns: laneWidth + "px 1fr", borderTop: li ? "var(--border-width-hairline) solid var(--border-rule)" : "none" }}>
          <div style={{ background: li % 2 ? "var(--surface-note)" : "var(--surface-reference)", borderRight: "var(--border-width-hairline) solid var(--border-rule)", padding: "var(--space-5)", display: "flex", alignItems: "center", font: "var(--weight-bold) var(--size-caption)/1.4 var(--font-core)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-strong)" }}>{lane.name}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(" + cols + ", minmax(0, 1fr))", gap: "var(--space-4)", padding: "var(--space-5)", alignItems: "stretch" }}>
            {Array.from({ length: cols }).map((_, ci) => {
              const step = (lane.steps || [])[ci];
              if (!step) return <div key={ci} />;
              return (
                <div key={ci} style={{ background: "var(--surface-card)", border: "var(--border-width-hairline) solid var(--border-rule)", borderLeft: "var(--border-width-accent) solid " + (step.accent || "var(--accent-note)"), padding: "var(--space-4)" }}>
                  <div style={{ font: "var(--weight-semibold) var(--size-small)/var(--leading-tight) var(--font-core)", color: "var(--text-strong)" }}>{step.title}</div>
                  {step.text ? <div style={{ font: "var(--weight-regular) var(--size-caption)/1.5 var(--font-core)", color: "var(--text-muted)", marginTop: "var(--space-1)" }}>{step.text}</div> : null}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
