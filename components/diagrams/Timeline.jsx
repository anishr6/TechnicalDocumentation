import React from "react";

const dot = { width: 13, height: 13, borderRadius: "50%", background: "var(--border-card)", border: "3px solid var(--surface-page)", boxSizing: "content-box", flex: "none" };
const meta = { font: "var(--weight-bold) var(--size-caption)/1.4 var(--font-core)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)" };
const title = { font: "var(--weight-bold) var(--size-h4)/var(--leading-tight) var(--font-core)", color: "var(--text-strong)", margin: "var(--space-1) 0 var(--space-2)" };
const body = { font: "var(--weight-regular) var(--size-small)/var(--leading-tight) var(--font-core)", color: "var(--text-body)" };

export function Timeline({ items = [], orientation = "vertical", style }) {
  if (orientation === "horizontal") {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(" + Math.max(items.length, 1) + ", minmax(0, 1fr))", gap: "var(--space-5)", margin: "0 0 var(--doc-gap-block)", fontFamily: "var(--font-core)", ...style }}>
        {items.map((it, i) => (
          <div key={i} style={{ position: "relative", paddingTop: "var(--space-6)" }}>
            <div style={{ position: "absolute", top: 6, left: 0, right: i === items.length - 1 ? "50%" : "-20px", height: 2, background: "var(--td-teal-100)" }} />
            {i === 0 ? <div style={{ position: "absolute", top: 6, left: 0, width: "50%", height: 2, background: "var(--surface-page)" }} /> : null}
            <div style={{ ...dot, position: "absolute", top: 0, left: 0 }} />
            <div style={meta}>{it.label}</div>
            <div style={title}>{it.title}</div>
            <div style={body}>{it.text}</div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <ol style={{ listStyle: "none", margin: "0 0 var(--doc-gap-block)", padding: 0, fontFamily: "var(--font-core)", ...style }}>
      {items.map((it, i) => (
        <li key={i} style={{ display: "grid", gridTemplateColumns: "19px 1fr", gap: "var(--space-5)", position: "relative", paddingBottom: i === items.length - 1 ? 0 : "var(--space-7)" }}>
          <div style={{ position: "relative" }}>
            <div style={dot} />
            {i === items.length - 1 ? null : <div style={{ position: "absolute", top: 19, bottom: "calc(-1 * var(--space-7))", left: 8, width: 2, background: "var(--td-teal-100)" }} />}
          </div>
          <div style={{ marginTop: -3 }}>
            <div style={meta}>{it.label}</div>
            <div style={title}>{it.title}</div>
            <div style={body}>{it.text}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}
