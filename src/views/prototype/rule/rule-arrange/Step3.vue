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
      <RuleTree :name="'提交规则配置'" :nodes="treeData" style="margin-bottom: 20px" />

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
          id: '0',
          name: 'AND',
          nodeType: 'operation',
          children: [
            {
              id: '0-1-1',
              name: '备案规则包（AND）',
              nodeType: 'ruleGroup',
              desc: '备案规则包描述描述',
              children: [
                {
                  id: '0-1-2',
                  name: '债务人类别为农户',
                  nodeType: 'rule',
                  // children: [],
                  desc: '债务人类别为农户描述',
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
            },
            {
              id: '0-1-2',
              name: '准入规则包（AND）',
              nodeType: 'ruleGroup',
              desc: '准入规则包描述描述',
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
            },
            {
              id: '0-1-2',
              name: '展期规则包（AND）',
              nodeType: 'ruleGroup',
              desc: '规则包描述描述',
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
            },
            {
              id: '0',
              name: 'AND',
              nodeType: 'operation',
              children: [
                {
                  id: '0-1-1',
                  name: '备案规则包（AND）',
                  nodeType: 'ruleGroup',
                  desc: '备案规则包描述描述',
                  children: [
                    {
                      id: '0-1-2',
                      name: '债务人类别为农户',
                      nodeType: 'rule',
                      // children: [],
                      desc: '债务人类别为农户描述',
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
                },
                {
                  id: '0-1-2',
                  name: '准入规则包（AND）',
                  nodeType: 'ruleGroup',
                  desc: '准入规则包描述描述',
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
                },
                {
                  id: '0-1-2',
                  name: '展期规则包（AND）',
                  nodeType: 'ruleGroup',
                  desc: '规则包描述描述',
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
                },
              ],
            },
          ],
        },
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
