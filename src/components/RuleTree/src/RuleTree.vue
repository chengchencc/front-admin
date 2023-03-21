<template>
  <div>this is rule tree component !</div>
  <RuleTreeNode :value="value" />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import RuleTreeNode from './RuleTreeNode.vue';
  import { RuleNodeSchema } from './typing';

  interface Props {
    name: string;
    nodes: RuleNodeSchema[];
  }
  const props = defineProps<Props>();

  const value = ref<RuleNodeSchema[]>([
    {
      id: '0',
      name: 'tree',
      nodeType: 'operation',
      children: [
        {
          id: '0-1-1',
          name: '规则1',
          nodeType: 'rule',
          children: [
            {
              id: '0-1-2',
              name: '规则2',
              nodeType: 'rule',
              // children: [],
              desc: '',
            },
            {
              id: '0-1-3',
              name: '规则3',
              nodeType: 'rule',
              // children: [],
              desc: '',
            },
            {
              id: '0-1-4',
              name: '规则4',
              nodeType: 'rule',
              // children: [],
              desc: '',
            },
          ],
          desc: '',
        },
      ],
      desc: '',
    },
  ]);
</script>
