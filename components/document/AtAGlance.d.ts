import * as React from "react";

/**
 * One-screen executive summary that opens every document: purpose, audience,
 * reading time, prerequisites, and numbered key takeaways.
 */
export interface AtAGlanceProps {
  title?: React.ReactNode;
  purpose?: React.ReactNode;
  /** Who should read this — role or team, not "everyone". */
  audience?: React.ReactNode;
  /** e.g. "12 minutes". */
  readingTime?: React.ReactNode;
  prerequisites?: React.ReactNode | React.ReactNode[];
  /** Three to five sentences a reader should retain. */
  takeaways?: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
}
export declare function AtAGlance(props: AtAGlanceProps): JSX.Element;
