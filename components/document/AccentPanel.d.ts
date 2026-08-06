import * as React from "react";

/**
 * Tinted panel with a 4px left accent bar — supporting detail attached to the surrounding prose.
 * @startingPoint section="Document" subtitle="Left-accent tinted detail panel" viewport="700x200"
 */
export interface AccentPanelProps {
  /** note = teal on pale teal (default), info = blue, pass = green, fail = red. */
  variant?: "note" | "info" | "pass" | "fail";
  /** Overrides the 4px left bar colour. Use a token, e.g. "var(--td-teal-900)". */
  accent?: string;
  /** Overrides the tinted fill. Pair a dark accent with its own pale tint. */
  background?: string;
  /** Bold black lead-in line, e.g. "Banner Actions:". */
  label?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function AccentPanel(props: AccentPanelProps): JSX.Element;
