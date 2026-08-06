import * as React from "react";

/** Opening block of a document: uppercase meta trail, light teal h1, and a standfirst above a hairline rule. */
export interface DocHeaderProps {
  title?: React.ReactNode;
  /** Uppercase trail, slash-separated — e.g. ["AI Agent Studio", "Zurich Patch 2+"]. */
  meta?: React.ReactNode[];
  /** Larger 20px lead paragraph that sits under a hairline rule. */
  standfirst?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function DocHeader(props: DocHeaderProps): JSX.Element;
