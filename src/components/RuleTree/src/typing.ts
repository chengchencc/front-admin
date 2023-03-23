export interface RuleNodeSchema {
  id: string;
  name: string;
  nodeType: 'pkg' | 'operation' | 'ruleGroup' | 'rule';
  desc?: string;
  children?: RuleNodeSchema[];
}

export interface RuleTreeSchema {
  name: string;
  nodes: RuleNodeSchema[];
}
