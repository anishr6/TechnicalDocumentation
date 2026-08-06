import * as React from "react";

/**
 * Wraps any diagram, table, or screenshot in a hairline frame and a numbered,
 * titled caption — "FIGURE 5 | Incident Lifecycle Overview".
 */
export interface FigureProps {
  number?: number | string;
  /** Descriptive title. A number without a title is not a valid caption. */
  title?: React.ReactNode;
  /** Optional sentence explaining what the reader should notice. */
  caption?: React.ReactNode;
  source?: React.ReactNode;
  /** Set false when the child already draws its own container. */
  framed?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Figure(props: FigureProps): JSX.Element;
