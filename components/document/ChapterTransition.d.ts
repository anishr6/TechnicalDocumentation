import * as React from "react";

/**
 * Hairline rule plus a one-line bridge between chapters — "NEXT · We will
 * discuss Assignment and Escalation."
 */
export interface ChapterTransitionProps {
  /** Uppercase lead label. Default "Next". */
  label?: React.ReactNode;
  /** Subject of the coming chapter; rendered in the default sentence. */
  next?: React.ReactNode;
  /** Custom sentence, replacing the default wording. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ChapterTransition(props: ChapterTransitionProps): JSX.Element;
