// the interface is copyed from primeng, amed to add properties
export interface TreeNode {
  // below 3 properties are added for Role.
  code?: string;
  description?: string;
  function?: string;

  label?: string;
  data?: any;
  icon?: any;
  expandedIcon?: any;
  collapsedIcon?: any;
  children?: TreeNode[];
  leaf?: boolean;
  expanded?: boolean;
  type?: string;
  parent?: TreeNode;
  partialSelected?: boolean;
  styleClass?: string;
  draggable?: boolean;
  droppable?: boolean;
  selectable?: boolean;
}
