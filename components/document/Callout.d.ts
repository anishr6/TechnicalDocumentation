import * as React from "react";

/**
 * Inline emoji-led admonition: amber-bordered caution or teal note, text flowing after a bold label.
 * @startingPoint section="Document" subtitle="Amber ⚠️ Important callout" viewport="700x140"
 */
export interface CalloutProps {
  variant?: "caution" | "note";
  /** Bold lead-in word; defaults to "Important" / "Note". A colon is appended. */
  label?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Callout(props: CalloutProps): JSX.Element;
