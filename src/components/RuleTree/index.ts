import ruleTree from './src/RuleTree.vue';
import ruleTreeNode from './src/RuleTreeNode.vue';

import { withInstall } from '/@/utils';

export const RuleTree = withInstall(ruleTree);
export const RuleTreeNode = withInstall(ruleTreeNode);

export * from './src/typing';
