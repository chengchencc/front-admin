<template>
  <div class="step3">
    <a-result status="success" title="操作成功" sub-title="备案校验规则配置完成">
      <template #extra>
        <a-button @click="pre"> 返回上一步 </a-button>

        <a-button type="primary" @click="redo"> 返回 </a-button>
      </template>
    </a-result>

    <RuleTree :nodes="treeData" :name="'完整校验规则'" />

    <!-- <div class="desc-wrap">
      <a-descriptions :column="1" class="mt-5">
        <a-descriptions-item label="付款账户"> ant-design@alipay.com </a-descriptions-item>
        <a-descriptions-item label="收款账户"> test@example.com </a-descriptions-item>
        <a-descriptions-item label="收款人姓名"> Vben </a-descriptions-item>
        <a-descriptions-item label="转账金额"> 500元 </a-descriptions-item>
      </a-descriptions>
    </div> -->
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  // import { defineComponent } from 'vue';
  import { Result, Descriptions } from 'ant-design-vue';

  import { RuleNodeSchema, RuleTree } from '/@/components/RuleTree';

  export default defineComponent({
    components: {
      RuleTree,
      [Result.name]: Result,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
    },
    emits: ['redo', 'prev'],
    setup(_, { emit }) {
      const treeData = ref<RuleNodeSchema[]>([
        {
          id: 'i1',
          name: '录入保存校验',
          nodeType: 'pkg',
          children: [
            {
              id: '0',
              name: 'AND',
              nodeType: 'operation',
              children: [
                {
                  id: '0-1-1',
                  name: '基础字段物理校验（AND）',
                  nodeType: 'ruleGroup',
                  desc: '备案基础字段物理校验规则包',
                  children: [
                    // {
                    //   id: '0-1-2',
                    //   name: '债务人证件号校验',
                    //   nodeType: 'rule',
                    //   // children: [],
                    //   desc: '基础字段物理校验规则',
                    // },
                    {
                      id: '0-1-3',
                      name: '基础字段物理校验规则',
                      nodeType: 'rule',
                      // children: [],
                      desc: '基础字段物理校验规则',
                    },
                    {
                      id: '0-1-3',
                      name: '扩展字段一物理校验规则',
                      nodeType: 'rule',
                      // children: [],
                      desc: '扩展字段一物理校验规则',
                    },
                    {
                      id: '0-1-3',
                      name: '扩展字段二物理校验规则',
                      nodeType: 'rule',
                      // children: [],
                      desc: '扩展字段二物理校验规则',
                    },
                    {
                      id: '0-1-3',
                      name: '扩展字段三物理校验规则',
                      nodeType: 'rule',
                      // children: [],
                      desc: '扩展字段三物理校验规则',
                    },
                  ],
                },
                {
                  id: '0-1-2',
                  name: '额度校验规则包（AND）',
                  nodeType: 'ruleGroup',
                  desc: '额度校验规则包',
                  children: [
                    {
                      id: '0-1-2',
                      name: '机构额度校验规则',
                      nodeType: 'rule',
                      // children: [],
                      desc: '',
                    },
                    {
                      id: '0-1-2',
                      name: '产品额度校验规则',
                      nodeType: 'rule',
                      // children: [],
                      desc: '',
                    },
                    {
                      id: '0-1-2',
                      name: '银行额度校验规则',
                      nodeType: 'rule',
                      // children: [],
                      desc: '',
                    },
                    {
                      id: '0-1-2',
                      name: '总体额度校验规则',
                      nodeType: 'rule',
                      // children: [],
                      desc: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'i2',
          name: '合规性审查规则校验',
          nodeType: 'pkg',
          children: [
            {
              id: '0',
              name: 'AND',
              nodeType: 'operation',
              children: [
                {
                  id: '0-1-1',
                  name: '机构总计校验规则包（AND）',
                  nodeType: 'ruleGroup',
                  desc: '机构总计校验规则包',
                  children: [
                    {
                      id: '0-1-2',
                      name: '单一债务人主债权金额小于1000万',
                      nodeType: 'rule',
                      // children: [],
                      desc: '单一债务人主债权金额小于1000万',
                    },
                    {
                      id: '0-1-3',
                      name: '担保费率小于1%',
                      nodeType: 'rule',
                      // children: [],
                      desc: '',
                    },
                    {
                      id: '0-1-4',
                      name: '主债权金额小于100万',
                      nodeType: 'rule',
                      // children: [],
                      desc: '',
                    },
                    {
                      id: '0-1-5',
                      name: '登记所在地为北京',
                      nodeType: 'rule',
                      // children: [],
                      desc: '',
                    },
                    {
                      id: '0-1-6',
                      name: '服务对象类型为创业创新',
                      nodeType: 'rule',
                      // children: [],
                      desc: '',
                    },
                  ],
                },
                {
                  id: '0-1-2',
                  name: '产品校验验规则包（AND）',
                  nodeType: 'ruleGroup',
                  desc: '产品校验验规则包',
                  children: [
                    {
                      id: '0-1-1-3',
                      name: '根据产品自动使用产品校验',
                      nodeType: 'rule',
                      // children: [],
                      desc: '根据产品自动使用产品校验',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'i1',
          name: '业务提交校验',
          nodeType: 'pkg',
          children: [
            {
              id: '0',
              name: 'AND',
              nodeType: 'operation',
              children: [
                {
                  id: '0-1-1',
                  name: '机构总计校验规则包（AND）',
                  nodeType: 'ruleGroup',
                  desc: '机构总计校验规则包',
                  children: [
                    {
                      id: '0-1-2',
                      name: '单一债务人主债权金额小于1000万',
                      nodeType: 'rule',
                      // children: [],
                      desc: '单一债务人主债权金额小于1000万',
                    },
                    {
                      id: '0-1-3',
                      name: '担保费率小于1%',
                      nodeType: 'rule',
                      // children: [],
                      desc: '',
                    },
                    {
                      id: '0-1-4',
                      name: '主债权金额小于100万',
                      nodeType: 'rule',
                      // children: [],
                      desc: '',
                    },
                    {
                      id: '0-1-5',
                      name: '登记所在地为北京',
                      nodeType: 'rule',
                      // children: [],
                      desc: '',
                    },
                    {
                      id: '0-1-6',
                      name: '服务对象类型为创业创新',
                      nodeType: 'rule',
                      // children: [],
                      desc: '',
                    },
                  ],
                },
                {
                  id: '0-1-2',
                  name: '产品校验验规则包（AND）',
                  nodeType: 'ruleGroup',
                  desc: '产品校验验规则包',
                  children: [
                    {
                      id: '0-1-1-3',
                      name: '根据产品自动使用产品校验',
                      nodeType: 'rule',
                      // children: [],
                      desc: '根据产品自动使用产品校验',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ]);

      return {
        treeData,
        redo: () => {
          emit('redo');
        },
        pre: () => {
          emit('prev');
        },
      };
    },
  });
</script>
<style lang="less" scoped>
  .step3 {
    // width: 600px;
    width: 70%;
    margin: 0 auto;
  }

  .desc-wrap {
    padding: 24px 40px;
    margin-top: 24px;
    background-color: @background-color-light;
  }
</style>
