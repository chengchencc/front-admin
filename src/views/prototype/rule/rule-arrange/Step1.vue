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

      <BasicTable @register="registerTreeTable">
        <template #toolbar>
          <a-button type="primary" @click="expandAll">展开全部</a-button>
          <a-button type="primary" @click="collapseAll">折叠全部</a-button>
        </template>
      </BasicTable>
    </div>
    <a-divider />
    <h3>说明</h3>
    <h4>XXXXXXXXXXXXXXXXXXXX</h4>
    <p> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX。 </p>

    <h4>XXXXXXXXXXXXX</h4>
    <p> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX。 </p>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';

  import { step1Schemas, getBasicColumns, getTreeTableData } from './data';

  import { Select, Input, Divider } from 'ant-design-vue';

  export default defineComponent({
    components: {
      BasicTable,
      [Select.name]: Select,
      [Input.name]: Input,
      [Input.Group.name]: Input.Group,
      [Divider.name]: Divider,
    },
    emits: ['next'],
    setup(_, { emit }) {
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

      // tree table

      const [registerTreeTable, { expandAll, collapseAll }] = useTable({
        title: '规则编排',
        isTreeTable: true,
        // rowSelection: {
        //   type: 'checkbox',
        //   getCheckboxProps(record: Recordable) {
        //     // Demo: 第一行（id为0）的选择框禁用
        //     if (record.id === '0') {
        //       return { disabled: true };
        //     } else {
        //       return { disabled: false };
        //     }
        //   },
        // },
        titleHelpMessage: '树形组件不能和序列号列同时存在',
        columns: getBasicColumns(),
        dataSource: getTreeTableData(),
        rowKey: 'id',
        pagination: false,
      });

      return { registerTreeTable, expandAll, collapseAll };
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
  }

  .pay-select {
    width: 20%;
  }

  .pay-input {
    width: 70%;
  }
</style>
