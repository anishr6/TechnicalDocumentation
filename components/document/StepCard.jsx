import React from "react";
import { SectionHeading } from "./SectionHeading.jsx";
import { DocCard } from "./DocCard.jsx";

export function StepCard({ number, title, children, style }) {
  return (
    <DocCard style={style}>
      <SectionHeading level={3}>{number != null ? number + ". " : ""}{title}</SectionHeading>
      {children}
    </DocCard>
  );
}
