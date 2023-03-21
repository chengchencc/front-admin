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
      name: 'and',
      nodeType: 'operation',
      children: [
        {
          id: '0-1-1',
          name: '备案规则包',
          nodeType: 'ruleGroup',
          children: [
            {
              id: '0-1-2',
              name: '债务人类别为农户',
              nodeType: 'rule',
              // children: [],
              desc: '',
            },
            {
              id: '0-1-3',
              name: '债务人证件类型为身份证号',
              nodeType: 'rule',
              // children: [],
              desc: '',
            },
            {
              id: '0-1-4',
              name: '身份证号为18位',
              nodeType: 'rule',
              // children: [],
              desc: '',
            },
          ],
          desc: '',
        },
        {
          id: '0-1-2',
          name: '准入规则包',
          nodeType: 'ruleGroup',
          children: [
            {
              id: '0-1-2',
              name: '债务人类别为企业',
              nodeType: 'rule',
              // children: [],
              desc: '',
            },
            {
              id: '0-1-3',
              name: '债务人证件类型为统一社会信用代码',
              nodeType: 'rule',
              // children: [],
              desc: '',
            },
            {
              id: '0-1-4',
              name: '证号号码为15位',
              nodeType: 'rule',
              // children: [],
              desc: '',
            },
            {
              id: '0-1-5',
              name: '所属行业（国）必填',
              nodeType: 'rule',
              // children: [],
              desc: '',
            },
          ],
          desc: '',
        },
        {
          id: '0-1-2',
          name: '展期规则包',
          nodeType: 'ruleGroup',
          children: [
            {
              id: '0-1-2',
              name: '债务人证件类型为统一社会信用代码',
              nodeType: 'rule',
              // children: [],
              desc: '',
            },
            {
              id: '0-1-3',
              name: '债务人联系方式必填',
              nodeType: 'rule',
              // children: [],
              desc: '',
            },
            {
              id: '0-1-4',
              name: '债务人类型必填',
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
