import React from "react";
import { SectionHeading } from "./SectionHeading.jsx";

export function DocCard({ title, children, style }) {
  return (
    <section
      style={{
        border: "var(--border-width-hairline) solid var(--border-card)",
        borderRadius: "var(--radius-sm)",
        background: "var(--surface-card)",
        padding: "var(--doc-pad-card)",
        margin: "0 0 var(--doc-gap-block)",
        fontFamily: "var(--font-core)",
        fontSize: "var(--size-body)",
        lineHeight: "var(--leading-body)",
        color: "var(--text-body)",
        ...style,
      }}
    >
      {title ? <SectionHeading level={3}>{title}</SectionHeading> : null}
      {children}
    </section>
  );
}
