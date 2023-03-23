<template>
  <div>
    <!-- <div>this is rule tree node component !</div> -->
    <div
      :class="
        item.nodeType === 'operation' || item.nodeType === 'pkg'
          ? 'rule-tree-node'
          : item.nodeType === 'ruleGroup'
          ? 'rule-tree-node rule-tree-group'
          : 'rule-tree-node rule-tree-item'
      "
      v-for="(item, index) in value"
      :key="index"
    >
      <!-- 规则分组 -->
      <div class="rule-tree-node-name type-pkg" v-if="item.nodeType === 'pkg'">
        <a-input-group compact>
          <a-button type="primary" style="padding: 5px">
            <Icon class="oper-rule-icon" icon="material-symbols:step-rounded" :size="22" />
            <!-- <apartment-outlined class="oper-rule-icon" /> -->
          </a-button>
          <a-tooltip :title="item.desc || item.name">
            <span class="rule-tree-node-opName">
              {{ item.name }}
            </span>
          </a-tooltip>
          <div class="oper-rule-line"></div>
          <!-- <a-select v-model:value="item.name" style="width: 80px" :disabled="true">
            <ASelectOption :value="'and'">AND</ASelectOption>
            <ASelectOption :value="'or'">OR</ASelectOption>
          </a-select> -->
        </a-input-group>
      </div>
      <!-- 操作符 -->
      <div class="rule-tree-node-name type-op" v-if="item.nodeType === 'operation'">
        <a-input-group compact>
          <a-button type="primary" style="padding: 5px">
            <Icon class="oper-rule-icon" icon="ic:round-rule" :size="22" />
            <!-- <apartment-outlined class="oper-rule-icon" /> -->
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
      <!-- 括号 -->
      <div
        class="rule-tree-op-box"
        v-if="item.nodeType === 'operation' || item.nodeType === 'pkg'"
      ></div>
      <!-- 规则包 -->
      <div class="rule-tree-node-name type-rg" v-if="item.nodeType === 'ruleGroup'">
        <a-tooltip :title="item.desc || item.name">
          <span class="com-rule-icon rule-group-icon">
            <Icon class="oper-rule-icon" icon="ic:outline-rule-folder" :size="22" />
          </span>
          <span style="padding: 0 10px">{{ item.name }}</span>
        </a-tooltip>
        <!-- <div class="rule-line"></div> -->
      </div>
      <!-- 规则 -->
      <div class="rule-tree-node-name type-r" v-if="item.nodeType === 'rule'">
        <div>
          <holder-outlined />
          <!-- <Icon icon="ion:holder-outlined" :size="22" /> -->
          {{ item.name }}
        </div>
      </div>
      <!-- children -->
      <RuleTreeNode
        :class="item.nodeType === 'ruleGroup' && 'rule-tree-node-children'"
        :value="item.children"
      />
      <a-button class="group-delete" shape="circle" danger type="primary">
        <delete-outlined />
      </a-button>
    </div>
    <!-- 规则包添加组件 -->
    <div v-if="value && value[0].nodeType === 'ruleGroup'">
      <a-input-group compact>
        <a-button type="default" style="padding: 4px 8px; margin-left: 10px">
          <plus-square-outlined style="color: #aaa" />
        </a-button>
        <a-select style="width: 300px">
          <ASelectOption :value="'and'">规则包1</ASelectOption>
          <ASelectOption :value="'or'">规则包2</ASelectOption>
        </a-select>
      </a-input-group>
    </div>
    <!-- <div v-if="value && value[0].nodeType === 'rule'">rule add</div> -->
    <!-- <div  v-if="value && value[0].nodeType === 'operation'">外层add</div> -->
  </div>
</template>
<script setup lang="ts">
  import { HolderOutlined, DeleteOutlined, PlusSquareOutlined } from '@ant-design/icons-vue';
  import { Tooltip as ATooltip } from 'ant-design-vue';

  import { Select as ASelect } from 'ant-design-vue';
  import { SelectOption as ASelectOption } from 'ant-design-vue';
  import { RuleNodeSchema } from './typing';
  import { Icon } from '/@/components/Icon/index';

  interface Props {
    value?: RuleNodeSchema[];
  }

  const props = defineProps<Props>();

  console.log('aa');
  // 基于类型
  // const emit = defineEmits<{
  //   (e: 'change', id: number): void;
  //   (e: 'update', value: string): void;
  // }>();
</script>

<style lang="less" scoped>
  @op-color: #0960bd;
  @secondary-color: #ed6f6f;
  @item-space: 10px;

  .rule-tree-node {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: @item-space;
    width: max-content;

    &-opName {
      max-width: 150px;
      min-width: 130px;
      padding: 4px;
      border: 1px solid @op-color;
      // border-radius: 0px 5px 5px 0;
      text-align: center;
    }
    &-name.type-pkg,
    &-name.type-op {
      flex: none;
      padding: 10px;
      margin: auto 0;
      position: relative;
    }
    &-name.type-op::before {
      content: ' ';
      width: 28px;
      display: block;
      position: absolute;
      border-top: 2px solid @op-color;
      top: calc(50% - 1px);
      left: -17px;
    }
    &-name.type-rg {
      flex: none;
      margin: auto 0;
      padding: 0px;
      /* border-radius: 3px; */
      /* text-align: center; */
      line-height: 30px;
      border: 1px solid @secondary-color;
      &::before {
        content: ' ';
        width: 28px;
        display: block;
        position: absolute;
        border-top: 2px solid @op-color;
        top: calc(50% - 1px);
        left: -18px;
      }
    }

    &-name.type-r {
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
      flex: none;
      background-color: white;
      margin: 0 0 0 20px;
      border: 2px dashed @secondary-color;
      // padding: 0 10px 0 0;
      &::before {
        content: ' ';
        width: 21px;
        /* height: 10px; */
        display: block;
        position: relative;
        border-top: 2px dashed @secondary-color;
        top: calc(50% - 1px);
        left: -21px;
      }
    }
  }

  .com-rule-icon {
    display: inline-block;
    height: 34px;
    margin: auto 0;
    padding: 4px 5px 0 5px;
  }

  .oper-rule-icon {
    // background: @op-color;
    color: #fff;
    padding: 0 4px;
  }
  .rule-group-icon {
    background: @secondary-color;
    color: #fff;
  }

  .rule-tree-op-box {
    flex: none;
    /* margin: auto 0; */
    position: relative;
    width: 12px;
    /* height: calc(100% - 30px); */
    left: 5px;
    border: 2px solid #0960bd;
    border-right: 0px;
    // border-radius: 8px 0 0 8px;
  }

  .oper-rule-line {
    width: 16px;
    height: 2px;
    background: @op-color;
    position: absolute;
    top: 15px;
  }
  .rule-tree-group {
    border: 1px solid #cacdd1;
    margin: 0 0 @item-space @item-space;
    // background: rgb(241 243 244);
    background: #f1f3f44f;
    // box-shadow: 0px 0px 8px -3px rgba(0, 0, 0, 0.45);
  }
  .rule-tree-item {
    border: 0px;
    padding: 0;
    margin: @item-space;
  }

  .group-delete {
    display: none;
  }
  .rule-tree-node.rule-tree-group > .group-delete {
    display: block;
    background: #ff4d4f;
    border-color: #ff4d4f;
    margin: auto 0px auto 10px;
  }
</style>
