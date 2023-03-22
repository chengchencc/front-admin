<template>
  <div>{{ name }}</div>
  <RuleTreeNode :value="nodes" style="border: 1px solid #f0f0f0" />
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
