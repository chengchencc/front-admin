<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './data';
  import { insertProduct, updateProduct } from '/@/api/product/product';
  // import { getDeptList } from '/@/api/demo/system';

  export default defineComponent({
    name: 'EditModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');
      let recordData = {};

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          rowId.value = data.record.id;
          recordData = data.record;
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

      const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '编辑'));

      async function handleSubmit() {
        try {
          let values = await validate();

          console.log(values);

          setModalProps({ confirmLoading: true });
          // TODO: custom api

          const requestData = { ...recordData, ...values };

          if (isUpdate.value) {
            values = await updateProduct(requestData);
          } else {
            values = await insertProduct(recordData);
          }

          console.log(values);
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
