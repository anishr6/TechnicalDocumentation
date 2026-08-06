import * as React from "react";

/**
 * Bullet or numbered list whose items may open with a bold term followed by an explanation.
 * @startingPoint section="Document" subtitle="Bold-term bullet list" viewport="700x180"
 */
export interface TermListItem {
  /** Bold lead-in term; a colon and space are appended automatically. */
  term?: React.ReactNode;
  text?: React.ReactNode;
}
export interface TermListProps {
  items?: (TermListItem | string)[];
  /** Render as an ordered list (procedures). */
  ordered?: boolean;
  style?: React.CSSProperties;
}
export declare function TermList(props: TermListProps): JSX.Element;
