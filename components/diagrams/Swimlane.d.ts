import * as React from "react";

export interface SwimlaneStep {
  title?: React.ReactNode;
  text?: React.ReactNode;
  /** Left-bar colour token; defaults to the teal note accent. */
  accent?: string;
}
export interface SwimlaneLane {
  /** Role or system that owns the row. */
  name?: React.ReactNode;
  /** One entry per column; use null to leave a column empty in this lane. */
  steps?: (SwimlaneStep | null)[];
}

/**
 * Cross-functional process grid: one row per actor, one column per stage.
 * Shows who does what, and where hand-offs happen.
 */
export interface SwimlaneProps {
  lanes?: SwimlaneLane[];
  laneWidth?: number;
  style?: React.CSSProperties;
}
export declare function Swimlane(props: SwimlaneProps): JSX.Element;
