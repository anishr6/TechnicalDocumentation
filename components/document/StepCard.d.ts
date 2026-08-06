import * as React from "react";

/**
 * DocCard whose heading is numbered — one card per required action in a sequence.
 * @startingPoint section="Document" subtitle="Numbered action card" viewport="700x240"
 */
export interface StepCardProps {
  /** Step number rendered before the title. */
  number?: number | string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function StepCard(props: StepCardProps): JSX.Element;
