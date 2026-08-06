import * as React from "react";

/**
 * Teal light-weight document heading — the only heading treatment in a technical document.
 * @startingPoint section="Document" subtitle="Teal light-weight section heading" viewport="700x120"
 */
export interface SectionHeadingProps {
  /** Heading level. 2 = page section, 3 = heading inside a card. */
  level?: 1 | 2 | 3;
  id?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
