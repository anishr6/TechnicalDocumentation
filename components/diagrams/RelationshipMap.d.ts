import * as React from "react";

export interface RelationshipNode {
  title?: React.ReactNode;
  /** How this node relates to the centre — one short phrase. */
  text?: React.ReactNode;
}

/**
 * A hub with spokes: one central record, table, or team surrounded by the
 * things connected to it. Use for data models and ownership maps.
 */
export interface RelationshipMapProps {
  center?: React.ReactNode;
  nodes?: (RelationshipNode | string)[];
  /** Square canvas edge in px. Default 460. */
  size?: number;
  style?: React.CSSProperties;
}
export declare function RelationshipMap(props: RelationshipMapProps): JSX.Element;
