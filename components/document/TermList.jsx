import React from "react";

export function TermList({ items = [], ordered = false, style }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag
      style={{
        margin: "0 0 var(--space-4)",
        paddingLeft: "var(--doc-list-indent)",
        fontFamily: "var(--font-core)",
        fontSize: "var(--size-body)",
        lineHeight: "var(--leading-body)",
        color: "var(--text-body)",
        ...style,
      }}
    >
      {items.map((it, i) => {
        const item = typeof it === "string" || React.isValidElement(it) ? { text: it } : it;
        return (
          <li key={i} style={{ marginBottom: "var(--space-1)" }}>
            {item.term ? (
              <strong style={{ fontWeight: "var(--weight-bold)", color: "var(--text-strong)" }}>{item.term}: </strong>
            ) : null}
            {item.text}
          </li>
        );
      })}
    </Tag>
  );
}
