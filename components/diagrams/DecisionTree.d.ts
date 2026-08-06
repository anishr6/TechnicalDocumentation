import * as React from "react";

export interface DecisionBranch {
  /** Pill on the connector — "Yes", "No", "Partly". */
  answer?: React.ReactNode;
  /** Outcome heading. */
  result?: React.ReactNode;
  text?: React.ReactNode;
  tone?: "neutral" | "pass" | "fail" | "caution";
}

/**
 * One question fanning out to two or three labelled outcomes. Turns a chain
 * of "if … then" paragraphs into something a reader can answer in one look.
 */
export interface DecisionTreeProps {
  question?: React.ReactNode;
  branches?: DecisionBranch[];
  style?: React.CSSProperties;
}
export declare function DecisionTree(props: DecisionTreeProps): JSX.Element;
