import React from "react";

const sizes = { h1: "var(--size-h1)", h2: "var(--size-h2)", h3: "var(--size-h3)" };

export function SectionHeading({ level = 2, children, id, style }) {
  const Tag = "h" + level;
  return (
    <Tag
      id={id}
      style={{
        fontFamily: "var(--font-core)",
        fontWeight: "var(--weight-light)",
        fontSize: sizes["h" + level] || "var(--size-h2)",
        lineHeight: "var(--leading-heading)",
        color: "var(--text-heading)",
        margin: level === 2 ? "var(--doc-gap-section) 0 var(--space-5)" : "0 0 var(--space-3)",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
