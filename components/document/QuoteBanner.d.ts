import * as React from "react";

/**
 * Pale-yellow italic card that reproduces verbatim product copy, such as an in-product banner message.
 * @startingPoint section="Document" subtitle="Verbatim product-copy quote" viewport="700x200"
 */
export interface QuoteBannerProps {
  /** Bold non-italic lead-in, e.g. "Banner Message:". */
  label?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function QuoteBanner(props: QuoteBannerProps): JSX.Element;
