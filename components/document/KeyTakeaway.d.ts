import * as React from "react";

/**
 * Closing card for a chapter: a checked "Remember" label over two or three
 * short declarative statements set at heading weight.
 */
export interface KeyTakeawayProps {
  /** Uppercase lead label. Default "Remember". */
  label?: React.ReactNode;
  /** Single character shown in the teal disc. Default "✓". */
  glyph?: React.ReactNode;
  /** Statements a reader should retain — keep each under 12 words. */
  items?: React.ReactNode | React.ReactNode[];
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function KeyTakeaway(props: KeyTakeawayProps): JSX.Element;
