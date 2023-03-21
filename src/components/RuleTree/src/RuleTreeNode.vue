<template>
  <div>
    <!-- <div>this is rule tree node component !</div> -->
    <div
      :class="
        item.nodeType === 'operation'
          ? 'rule-tree-node'
          : item.nodeType === 'ruleGroup'
          ? 'rule-tree-node rule-tree-group'
          : 'rule-tree-node rule-tree-item'
      "
      v-for="(item, index) in value"
      :key="index"
    >
      <!-- 操作符 -->
      <div class="rule-tree-node-icon" v-if="item.nodeType === 'operation'">
        <a-input-group compact>
          <a-button type="primary" style="padding: 4px; border-radius: 5px 0 0 5px">
            <!-- <Icon icon="ion:layers-outline" :size="22" /> -->
            <apartment-outlined class="oper-rule-icon" />
          </a-button>
          <span class="rule-tree-node-opName">
            {{ item.name }}
          </span>
          <div class="oper-rule-line"></div>
          <!-- <a-select v-model:value="item.name" style="width: 80px" :disabled="true">
            <ASelectOption :value="'and'">AND</ASelectOption>
            <ASelectOption :value="'or'">OR</ASelectOption>
          </a-select> -->
        </a-input-group>
      </div>
      <div class="rule-tree-op-box" v-if="item.nodeType === 'operation'"></div>
      <div class="rule-tree-node-name" v-if="item.nodeType === 'ruleGroup'">
        <span class="com-rule-icon rule-group-icon"><appstore-add-outlined /></span>
        {{ item.name }}
      </div>
      <div class="rule-tree-node-rulename" v-if="item.nodeType === 'rule'">
        <div>
          <holder-outlined />
          <!-- <Icon icon="ion:holder-outlined" :size="22" /> -->
          {{ item.name }}
        </div>
      </div>
      <RuleTreeNode
        :class="item.nodeType === 'ruleGroup' && 'rule-tree-node-children'"
        :value="item.children"
      />
    </div>
    <div v-if="value && value[0].nodeType === 'ruleGroup'">
      <a-input-group compact>
        <a-button type="default" style="padding: 4px 8px; margin-left: 20px">
          <plus-square-outlined style="color: #aaa" />
        </a-button>
        <a-select style="width: 300px">
          <ASelectOption :value="'and'">规则包1</ASelectOption>
          <ASelectOption :value="'or'">规则包2</ASelectOption>
        </a-select>
      </a-input-group>
    </div>
    <div v-if="value && value[0].nodeType === 'rule'">rule add</div>
    <!-- <div  v-if="value && value[0].nodeType === 'operation'">外层add</div> -->
  </div>
</template>
<script setup lang="ts">
  import { HolderOutlined, ApartmentOutlined, AppstoreAddOutlined, PlusSquareOutlined } from '@ant-design/icons-vue';
  import { Select as ASelect } from 'ant-design-vue';
  import { SelectOption as ASelectOption } from 'ant-design-vue';
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
    position: relative;
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    border: 1px solid #666;
    padding: 10px 20px;

    &-opName {
      width: 70px;
      padding: 4px;
      border: 1px solid #3a9ae9;
      border-radius: 0px 5px 5px 0;
      text-align: center;
    }

    &-name {
      flex: none;
      margin: auto 0;
      padding: 4px;
      border-radius: 3px;
      text-align: center;
      line-height: 30px;
      padding: 0 10px 0 0;
      border: 1px solid rgb(0 0 0 / 85%);
    }

    &-rulename {
      flex: none;
      // height:30px;
      padding: 10px;
      margin: auto 0;
      padding: 4px 8px;
      border-radius: 3px;
      text-align: left;
      min-width: 300px;
      background: #edf2f5;
      display: flex;
      font-size: 14px;
    }

    &-children {
      flex: auto;
    }
  }

  .com-rule-icon {
    display: inline-block;
    height: 30px;
    margin: auto 0;
    padding: 0 8px;
  }
  
  .oper-rule-icon {
    background: #0960bd;
    color: #fff;
    padding: 0 4px;
  }
  .rule-group-icon {
    background: rgb(0 0 0 / 85%);
    color: #fff;
  }

  .rule-tree-op-box {
    flex: none;
    margin: auto 0;
    position: absolute;
    width: 12px;
    height: calc(100% - 30px);
    left: 145px;
    border: 2px solid #2a7dc9;
    border-right: 0px;
    border-radius: 8px 0 0 8px;
  }

  .rule-tree-node-icon {
    flex: none;
    padding: 10px;
    margin: auto 0;
    position: relative;
  }
  .oper-rule-line {
    width: 16px;
    height: 2px;
    background: #2a7dc9;
    position: absolute;
    top: 15px;
  }
  .rule-tree-group {
    border: 1px solid #eee;
    margin: 0 0 10px 20px;
    background: rgb(0 0 0 / 1%);
  }

  .rule-tree-node-children {
    margin: 0 0 0 20px;
    border: 1px dashed #2058e6;
    padding: 0 10px 0 0;
  }

  .rule-tree-item {
    border: 0px;
    padding: 0;
    margin: 10px 0 10px 10px;
  }
</style>
