<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema, api } from './data';

  export default defineComponent({
    name: 'EditModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');
      let record = {};

      const [registerForm, { setFieldsValue, /* updateSchema,  */ resetFields, validate }] =
        useForm({
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
          record = unref(data.record);

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

      const getTitle = computed(() => (!unref(isUpdate) ? '新增字典项' : '编辑字典项'));

      async function handleSubmit() {
        console.log(record);

        try {
          let values = await validate();
          setModalProps({ confirmLoading: true });

          if (isUpdate.value) {
            console.log('record', record);
            console.log('record解构', { ...record });
            values = { ...record, ...values };
            values = await api.update(values);
          } else {
            values = await api.insert(values);
          }

          // TODO custom api
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
