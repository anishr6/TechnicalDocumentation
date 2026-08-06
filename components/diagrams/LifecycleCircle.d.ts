import * as React from "react";

export interface LifecycleStage {
  title?: React.ReactNode;
  text?: React.ReactNode;
}

/**
 * Numbered stages placed clockwise on a dashed ring around a centre label —
 * for states that return to their starting point (incident lifecycle,
 * review cycle, change cadence).
 */
export interface LifecycleCircleProps {
  /** Strings or objects; numbering is automatic and starts at the top. */
  stages?: (LifecycleStage | string)[];
  center?: React.ReactNode;
  /** Square canvas edge in px. Default 420. */
  size?: number;
  style?: React.CSSProperties;
}
export declare function LifecycleCircle(props: LifecycleCircleProps): JSX.Element;
