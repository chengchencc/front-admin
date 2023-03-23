<template>
  <div class="rule-tree">
    <div class="rule-tree-title"> {{ name }}</div>
    <RuleTreeNode :value="nodes" class="content" />
  </div>
</template>

<script setup lang="ts">
  import RuleTreeNode from './RuleTreeNode.vue';
  import { RuleNodeSchema } from './typing';

  interface Props {
    name: string;
    nodes: RuleNodeSchema[];
  }
  const props = defineProps<Props>();
</script>

<style lang="less" scoped>
  .rule-tree {
    .rule-tree-title {
      border: 1px solid #c9d1d9;
      padding: 10px;
      font-size: 16px;
      border-bottom: 0px;
      background-color: rgb(241 243 244);
    }
    .content {
      border: 1px solid #c9d1d9;
      overflow: auto;
    }
  }
</style>
