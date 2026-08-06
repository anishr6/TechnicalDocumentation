import * as React from "react";

export interface BeforeAfterSide {
  title?: React.ReactNode;
  points?: React.ReactNode[];
}

/**
 * Two panels separated by an arrow — grey current state on the left, teal
 * target state on the right. For migrations, process changes, and rollouts.
 */
export interface BeforeAfterProps {
  beforeLabel?: React.ReactNode;
  afterLabel?: React.ReactNode;
  before?: BeforeAfterSide;
  after?: BeforeAfterSide;
  style?: React.CSSProperties;
}
export declare function BeforeAfter(props: BeforeAfterProps): JSX.Element;
