import React from "react";

export function LifecycleCircle({ stages = [], center, size = 420, style }) {
  const n = Math.max(stages.length, 1);
  const radius = size / 2 - 58;
  return (
    <div style={{ position: "relative", width: size, height: size, margin: "0 auto var(--doc-gap-block)", fontFamily: "var(--font-core)", ...style }}>
      <div style={{ position: "absolute", inset: 58, borderRadius: "50%", border: "2px dashed var(--td-teal-100)" }} />
      {center ? (
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: size * 0.34, height: size * 0.34, borderRadius: "50%", background: "var(--surface-note)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "var(--space-4)", boxSizing: "border-box", font: "var(--weight-bold) var(--size-h4)/var(--leading-tight) var(--font-core)", color: "var(--text-heading)" }}>{center}</div>
      ) : null}
      {stages.map((s, i) => {
        const a = (-90 + (i * 360) / n) * (Math.PI / 180);
        const label = typeof s === "string" ? s : s.title;
        const text = typeof s === "string" ? null : s.text;
        return (
          <div key={i} style={{ position: "absolute", left: "calc(50% + " + (Math.cos(a) * radius).toFixed(1) + "px)", top: "calc(50% + " + (Math.sin(a) * radius).toFixed(1) + "px)", transform: "translate(-50%, -50%)", width: 132, textAlign: "center" }}>
            <div style={{ width: 30, height: 30, margin: "0 auto var(--space-2)", borderRadius: "50%", background: "var(--border-card)", color: "var(--td-white)", display: "flex", alignItems: "center", justifyContent: "center", font: "var(--weight-bold) var(--size-caption)/1 var(--font-core)" }}>{i + 1}</div>
            <div style={{ font: "var(--weight-bold) var(--size-small)/var(--leading-tight) var(--font-core)", color: "var(--text-strong)" }}>{label}</div>
            {text ? <div style={{ font: "var(--weight-regular) var(--size-caption)/1.5 var(--font-core)", color: "var(--text-muted)", marginTop: "var(--space-1)" }}>{text}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
