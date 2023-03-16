<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
    <div>
      <BasicTable @register="registerTable">
        <template #toolbar>
          <a-button type="primary" @click="handleRuleInsert">新增规则</a-button>
        </template>
      </BasicTable>
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref, reactive } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema, api } from './data';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { columns } from '../rule-instance/data';

  export default defineComponent({
    name: 'EditModal',
    components: { BasicModal, BasicForm, BasicTable, TableAction },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerForm, { setFieldsValue, /* updateSchema,  */ resetFields, validate }] =
        useForm({
          labelWidth: 150,
          schemas: formSchema,
          showActionButtonGroup: false,
          actionColOptions: {
            span: 23,
          },
        });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false, width: '800px' });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          rowId.value = data.record.id;
          setFieldsValue({
            ...data.record,
          });
        }

        // const treeData = await getDeptList();
        // updateSchema([
        //   {
        //     field: 'pwd',
        //     show: !unref(isUpdate),
        //   },
        //   {
        //     field: 'dept',
        //     componentProps: { treeData },
        //   },
        // ]);
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增规则包' : '编辑规则包'));

      async function handleSubmit() {
        try {
          let values = await validate();
          setModalProps({ confirmLoading: true });

          // if (isUpdate.value) {
          //   values = await api.update(values);
          // } else {
          //   values = await api.insert(values);
          // }

          // TODO custom api
          console.log(values);
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      const dataSource = reactive<Recordable[]>([
        {
          id: '1',
          code: 'RI-01',
          ruleType: '0',
          name: '主债权金额小于300万',
          description: '主债权金额小于300万',
          ruleTemplate: 'RT-01',
        },
        {
          id: '2',
          code: 'RI-02',
          ruleType: '0',
          name: '担保费率小于1%',
          description: '担保费率小于1%',
          ruleTemplate: 'RT-02',
        },
        {
          id: '3',
          code: 'RI-03',
          ruleType: '0',
          name: '债权人为工商银行',
          description: '债权人为工商银行',
          ruleTemplate: 'RT-03',
        },
      ]);

      const [registerTable] = useTable({
        title: '规则列表',
        // api: api.page,
        dataSource: dataSource,
        rowKey: 'id',
        columns,
        maxHeight: 400,
        formConfig: {
          labelWidth: 120,
          // schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        useSearchForm: false,
        showTableSetting: false,
        bordered: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleRuleInsert() {
        console.log('insert');
      }

      return {
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
        registerTable,
        handleRuleInsert,
      };
    },
  });
</script>
