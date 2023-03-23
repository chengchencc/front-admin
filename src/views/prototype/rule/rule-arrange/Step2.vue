<template>
  <div class="step1">
    <div class="step1-form">
      <!-- <BasicForm @register="register">
        <template #fac="{ model, field }">
          <a-input-group compact>
            <a-select v-model:value="model['pay']" class="pay-select">
              <a-select-option value="zfb"> 支付宝 </a-select-option>
              <a-select-option value="yl"> 银联 </a-select-option>
            </a-select>
            <a-input class="pay-input" v-model:value="model[field]" />
          </a-input-group>
        </template>
      </BasicForm> -->
      <RuleTree :name="'合规性审查规则校验'" :nodes="treeData" style="margin-bottom: 20px" />
      <!-- <RuleTree :name="'机构总体配置'" :nodes="treeData" /> -->

      <div class="action">
        <a-button type="primary" @click="preStep">上一步</a-button>
        <a-button type="primary" @click="nextStep">下一步</a-button>
      </div>
    </div>
    <a-divider />
    <h3>说明</h3>
    <h4>转账到支付宝账户</h4>
    <p>
      如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
    </p>

    <h4>转账到银行卡</h4>
    <p>
      如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
    </p>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  // import { BasicForm, useForm } from '/@/components/Form';
  // import { step1Schemas } from './data';
  import { RuleNodeSchema, RuleTree } from '/@/components/RuleTree';

  import { Divider } from 'ant-design-vue';
  export default defineComponent({
    components: {
      // BasicForm,
      RuleTree,
      // [Select.name]: Select,
      // [Input.name]: Input,
      // [Input.Group.name]: Input.Group,
      [Divider.name]: Divider,
    },
    emits: ['next', 'prev'],
    setup(_, { emit }) {
      const treeData = ref<RuleNodeSchema[]>([
        {
          id: 'i1',
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
        // {
        //   id: 'i2',
        //   name: '产品规则校验',
        //   nodeType: 'pkg',
        //   desc: '此部分应该放到产品管理中，每个产品会支持几种规则包进行组合',
        //   children: [
        //     {
        //       id: '0',
        //       name: 'OR',
        //       nodeType: 'operation',
        //       children: [
        //         {
        //           id: '0-1-1',
        //           name: '国担总对总产品规则包（AND）',
        //           nodeType: 'ruleGroup',
        //           desc: '工行经营快贷规则包',
        //           children: [
        //             {
        //               id: '0-1-2',
        //               name: '单一债务人主债权金额小于1000万',
        //               nodeType: 'rule',
        //               // children: [],
        //               desc: '单一债务人主债权金额小于1000万',
        //             },
        //             {
        //               id: '0-1-3',
        //               name: '担保费率小于1%',
        //               nodeType: 'rule',
        //               // children: [],
        //               desc: '',
        //             },
        //             {
        //               id: '0-1-4',
        //               name: '主债权金额小于100万',
        //               nodeType: 'rule',
        //               // children: [],
        //               desc: '',
        //             },
        //             {
        //               id: '0-1-5',
        //               name: '登记所在地为北京',
        //               nodeType: 'rule',
        //               // children: [],
        //               desc: '',
        //             },
        //             {
        //               id: '0-1-6',
        //               name: '服务对象类型为创业创新',
        //               nodeType: 'rule',
        //               // children: [],
        //               desc: '',
        //             },
        //           ],
        //         },
        //         {
        //           id: '0-1-2',
        //           name: '国担非专项产品规则包（AND）',
        //           nodeType: 'ruleGroup',
        //           desc: '工行经营快贷规则包',
        //           children: [
        //             {
        //               id: '0-1-2',
        //               name: '单一债务人主债权金额小于1000万',
        //               nodeType: 'rule',
        //               // children: [],
        //               desc: '单一债务人主债权金额小于1000万',
        //             },
        //             {
        //               id: '0-1-3',
        //               name: '担保费率小于1%',
        //               nodeType: 'rule',
        //               // children: [],
        //               desc: '',
        //             },
        //             {
        //               id: '0-1-4',
        //               name: '主债权金额小于100万',
        //               nodeType: 'rule',
        //               // children: [],
        //               desc: '',
        //             },
        //             {
        //               id: '0-1-5',
        //               name: '登记所在地为北京',
        //               nodeType: 'rule',
        //               // children: [],
        //               desc: '',
        //             },
        //             {
        //               id: '0-1-6',
        //               name: '服务对象类型为创业创新',
        //               nodeType: 'rule',
        //               // children: [],
        //               desc: '',
        //             },
        //           ],
        //         },
        //         {
        //           id: '0-1-1',
        //           name: '国担专项产品规则包（AND）',
        //           nodeType: 'ruleGroup',
        //           desc: '国担专项产品规则包',
        //           children: [
        //             {
        //               id: '0-1-2',
        //               name: '单一债务人主债权金额小于1000万',
        //               nodeType: 'rule',
        //               // children: [],
        //               desc: '单一债务人主债权金额小于1000万',
        //             },
        //             {
        //               id: '0-1-3',
        //               name: '担保费率小于1%',
        //               nodeType: 'rule',
        //               // children: [],
        //               desc: '',
        //             },
        //             {
        //               id: '0-1-4',
        //               name: '主债权金额小于100万',
        //               nodeType: 'rule',
        //               // children: [],
        //               desc: '',
        //             },
        //             {
        //               id: '0-1-5',
        //               name: '登记所在地为北京',
        //               nodeType: 'rule',
        //               // children: [],
        //               desc: '',
        //             },
        //             {
        //               id: '0-1-6',
        //               name: '服务对象类型为创业创新',
        //               nodeType: 'rule',
        //               // children: [],
        //               desc: '',
        //             },
        //           ],
        //         },
        //       ],
        //     },
        //   ],
        // },
      ]);

      function nextStep() {
        emit('next', 1);
      }
      function preStep() {
        emit('prev', 1);
      }

      // const [register, { validate }] = useForm({
      //   labelWidth: 100,
      //   schemas: step1Schemas,
      //   actionColOptions: {
      //     span: 14,
      //   },
      //   showResetButton: false,
      //   submitButtonOptions: {
      //     text: '下一步',
      //   },
      //   submitFunc: customSubmitFunc,
      // });

      // async function customSubmitFunc() {
      //   try {
      //     const values = await validate();
      //     emit('next', values);
      //   } catch (error) {}
      // }

      return { treeData, nextStep, preStep };
    },
  });
</script>
<style lang="less" scoped>
  .step1 {
    &-form {
      width: 70%;
      margin: 0 auto;
      padding: 0 30px;
    }

    h3 {
      margin: 0 0 12px;
      font-size: 16px;
      line-height: 32px;
      color: @text-color;
    }

    h4 {
      margin: 0 0 4px;
      font-size: 14px;
      line-height: 22px;
      color: @text-color;
    }

    p {
      color: @text-color;
    }
    .action {
      display: flex;
      justify-content: space-evenly;
      margin-top: 20px;
    }
  }

  .pay-select {
    width: 20%;
  }

  .pay-input {
    width: 70%;
  }
</style>
