import * as React from "react";

/**
 * Article footer: wordmark placeholder, neutral tagline, optional legal links, dynamic copyright line.
 * @startingPoint section="Chrome" subtitle="Wordmark, tagline and copyright" viewport="700x220"
 */
export interface DocFooterProps {
  /** Neutral strapline. Defaults to "Transforming digital workflows across the enterprise." */
  tagline?: string;
  /** Legal link row. Empty by default — pass an array to show it. */
  links?: string[];
  /** Text stand-in for a logo. Defaults to the "[brand]" token placeholder. */
  wordmark?: string;
  /** Entity named in the copyright line. Defaults to the "[Company]" token placeholder. */
  company?: string;
  /** Muted small-print line under the copyright, e.g. a non-affiliation notice. */
  disclaimer?: string;
  /** Document version, e.g. "2.4". */
  version?: React.ReactNode;
  /** Team or role accountable for the content. */
  owner?: React.ReactNode;
  /** Date the document is next due for review. */
  reviewDate?: React.ReactNode;
  /** "Public", "Internal", "Confidential", "Restricted". */
  classification?: React.ReactNode;
  page?: number | string;
  /** Total page count; renders "Page 3 of 18". */
  pages?: number | string;
}
export declare function DocFooter(props: DocFooterProps): JSX.Element;
