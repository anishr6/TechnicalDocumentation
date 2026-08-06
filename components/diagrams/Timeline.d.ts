import * as React from "react";

export interface TimelineItem {
  /** Date, phase, or duration — the uppercase line above the title. */
  label?: React.ReactNode;
  title?: React.ReactNode;
  text?: React.ReactNode;
}

/**
 * Milestone sequence on a teal rail. Vertical for four or more steps or long
 * descriptions; horizontal for three to five short phases.
 */
export interface TimelineProps {
  items?: TimelineItem[];
  orientation?: "vertical" | "horizontal";
  style?: React.CSSProperties;
}
export declare function Timeline(props: TimelineProps): JSX.Element;
