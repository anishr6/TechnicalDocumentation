import React from "react";

export function DocHeader({ title, meta = [], standfirst, style }) {
  return (
    <header style={{ margin: "0 0 var(--space-8)", ...style }}>
      {meta.length ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-3)",
            font: "var(--weight-semibold) var(--size-caption)/1.4 var(--font-core)",
            color: "var(--text-muted)",
            letterSpacing: "var(--tracking-caps)",
            textTransform: "uppercase",
            marginBottom: "var(--space-4)",
          }}
        >
          {meta.map((m, i) => (
            <React.Fragment key={i}>
              {i ? <span style={{ color: "var(--td-ink-200)" }}>/</span> : null}
              <span>{m}</span>
            </React.Fragment>
          ))}
        </div>
      ) : null}
      <h1
        style={{
          font: "var(--weight-light) var(--size-h1)/1.2 var(--font-core)",
          color: "var(--text-heading)",
          margin: 0,
        }}
      >
        {title}
      </h1>
      {standfirst ? (
        <p
          style={{
            font: "var(--weight-regular) 20px/1.7 var(--font-core)",
            color: "var(--text-body)",
            margin: "var(--space-5) 0 0",
            paddingTop: "var(--space-5)",
            borderTop: "var(--border-width-hairline) solid var(--border-rule)",
            maxWidth: "900px",
          }}
        >
          {standfirst}
        </p>
      ) : null}
    </header>
  );
}
