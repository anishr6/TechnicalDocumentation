import * as React from "react";

export interface LayerStackLayer {
  /** Layer name — "Presentation", "Integration", "Data". */
  name?: React.ReactNode;
  /** Qualifier under the name. */
  note?: React.ReactNode;
  /** Components sitting in this layer, rendered as chips. */
  items?: React.ReactNode[];
  /** Left-bar colour token. */
  accent?: string;
}

/**
 * Architecture diagram as stacked bands — one row per layer, components as
 * chips inside it. Highest layer first.
 */
export interface LayerStackProps {
  layers?: LayerStackLayer[];
  style?: React.CSSProperties;
}
export declare function LayerStack(props: LayerStackProps): JSX.Element;
