import * as React from "react";

export interface ComparisonItem {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  points?: React.ReactNode[];
  /** Verdict line pinned to the bottom of the card. */
  footnote?: React.ReactNode;
  tone?: "neutral" | "note" | "info" | "pass" | "fail";
}

/**
 * Side-by-side option cards with a coloured top rule — for comparing two to
 * four approaches, plans, or configurations at equal weight.
 */
export interface ComparisonCardsProps {
  items?: ComparisonItem[];
  /** Defaults to one column per item. */
  columns?: number;
  style?: React.CSSProperties;
}
export declare function ComparisonCards(props: ComparisonCardsProps): JSX.Element;
