import * as React from "react";

/**
 * Hairline teal-bordered white card — the primary content container of a technical document.
 * @startingPoint section="Document" subtitle="Teal-bordered content card" viewport="700x220"
 */
export interface DocCardProps {
  /** Optional teal h3 rendered at the top of the card. */
  title?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function DocCard(props: DocCardProps): JSX.Element;
