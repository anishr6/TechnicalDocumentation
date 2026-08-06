import React from "react";

export function RelationshipMap({ center, nodes = [], size = 460, style }) {
  const n = Math.max(nodes.length, 1);
  const radius = size / 2 - 70;
  return (
    <div style={{ position: "relative", width: size, height: size, margin: "0 auto var(--doc-gap-block)", fontFamily: "var(--font-core)", ...style }}>
      {nodes.map((_, i) => {
        const deg = -90 + (i * 360) / n;
        return <div key={"l" + i} style={{ position: "absolute", left: "50%", top: "50%", width: radius, height: 1, background: "var(--td-teal-100)", transformOrigin: "0 50%", transform: "rotate(" + deg + "deg)" }} />;
      })}
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", background: "var(--border-card)", color: "var(--td-white)", padding: "var(--space-4) var(--space-5)", textAlign: "center", maxWidth: size * 0.4, font: "var(--weight-bold) var(--size-h4)/var(--leading-tight) var(--font-core)" }}>{center}</div>
      {nodes.map((node, i) => {
        const a = (-90 + (i * 360) / n) * (Math.PI / 180);
        const label = typeof node === "string" ? node : node.title;
        const text = typeof node === "string" ? null : node.text;
        return (
          <div key={i} style={{ position: "absolute", left: "calc(50% + " + (Math.cos(a) * radius).toFixed(1) + "px)", top: "calc(50% + " + (Math.sin(a) * radius).toFixed(1) + "px)", transform: "translate(-50%, -50%)", width: 150, background: "var(--surface-card)", border: "var(--border-width-hairline) solid var(--border-rule)", borderTop: "var(--border-width-accent) solid var(--accent-note)", padding: "var(--space-4)", textAlign: "center", boxSizing: "border-box" }}>
            <div style={{ font: "var(--weight-semibold) var(--size-small)/var(--leading-tight) var(--font-core)", color: "var(--text-strong)" }}>{label}</div>
            {text ? <div style={{ font: "var(--weight-regular) var(--size-caption)/1.5 var(--font-core)", color: "var(--text-muted)", marginTop: "var(--space-1)" }}>{text}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
