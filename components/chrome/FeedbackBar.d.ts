import * as React from "react";

/**
 * End-of-article helpfulness bar with thumb buttons and a usefulness statistic.
 * @startingPoint section="Chrome" subtitle="Was this content helpful? bar" viewport="700x120"
 */
export interface FeedbackBarProps {
  question?: string;
  /** Right-hand grey statistic, e.g. "50% found this useful". */
  stat?: string;
  value?: "yes" | "no" | null;
  onVote?: (value: "yes" | "no") => void;
  style?: React.CSSProperties;
}
export declare function FeedbackBar(props: FeedbackBarProps): JSX.Element;
