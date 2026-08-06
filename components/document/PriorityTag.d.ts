import * as React from "react";

/**
 * Four-level emphasis marker — Critical, Required, Optional, Reference — used
 * on headings, table rows, and callouts so a scanning reader can tell what
 * must be acted on from what is merely informative.
 */
export interface PriorityTagProps {
  level?: "critical" | "required" | "optional" | "reference";
  /** Overrides the level's default word. */
  label?: React.ReactNode;
  /** Filled tag on the level colour; reserve for Critical. */
  solid?: boolean;
  style?: React.CSSProperties;
}
export declare function PriorityTag(props: PriorityTagProps): JSX.Element;
export declare const priorityLevels: Record<string, { label: string; color: string; background: string }>;
