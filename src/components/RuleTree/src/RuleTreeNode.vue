<template>
  <div>
    <!-- <div>this is rule tree node component !</div>

    <div>{{ JSON.stringify({ a: 1, b: 2 }) }}</div> -->

    <div class="rule-tree-node" v-for="(item, index) in value" :key="index">
      <div class="rule-tree-node-icon">
        <Icon icon="ion:layers-outline" :size="30" />
      </div>
      <div class="rule-tree-node-name">{{ item.name }}</div>
      <div class="rule-tree-node-switcher" v-if="item.children"></div>
      <RuleTreeNode class="rule-tree-node-children" :value="item.children" />
    </div>

    <!-- <RuleTreeNode></RuleTreeNode>
    <RuleTreeNode></RuleTreeNode>
    <RuleTreeNode></RuleTreeNode> -->
  </div>
</template>
<script setup lang="ts">
  import { RuleNodeSchema } from './typing';
  import { Icon } from '/@/components/Icon/index';

  interface Props {
    value?: RuleNodeSchema[];
  }

  const props = defineProps<Props>();

  // 基于类型
  // const emit = defineEmits<{
  //   (e: 'change', id: number): void;
  //   (e: 'update', value: string): void;
  // }>();
</script>

<style lang="less" scoped>
  .rule-tree-node {
    // background-color: #666;
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    border: 1px solid black;
    padding: 20px;
    &-icon {
      flex: none;
      height: 30px;
    }
    &-name {
      background-color: red;
      flex: none;
      // height:30px;
      padding: 10px;
    }
    &-children {
      flex: auto;
    }
  }
</style>
