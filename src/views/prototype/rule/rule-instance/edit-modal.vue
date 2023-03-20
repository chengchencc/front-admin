<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    :title="getTitle"
    @ok="handleSubmit"
    :minHeight="500"
  >
    <BasicForm @register="registerForm">
      <!-- <div>
        规则配置： -->
      <template #fac="{ model, field }">
        <a-input-group compact>
          <!-- <a-select v-model:value="model['pay']" class="pay-select">
            <a-select-option value="zfb"> 支付宝 </a-select-option>
            <a-select-option value="yl"> 银联 </a-select-option>
          </a-select>
          <a-input class="pay-input" v-model:value="model[field]" /> -->
          <!-- <a-select style="width: 120px">
            <a-select-option value="01">范围</a-select-option>
            <a-select-option value="02">小于</a-select-option>
            <a-select-option value="03">大于</a-select-option>
            <a-select-option value="04">小于等于</a-select-option>
            <a-select-option value="05">大于等于</a-select-option>
          </a-select> -->
          <a-input
            v-model:value="model['amountMin']"
            style="width: 150px; text-align: center"
            placeholder="最小值"
            suffix="万元"
          />
          <a-input
            style="width: 30px; border-left: 0; pointer-events: none; background-color: #fff"
            placeholder="~"
            disabled
          />
          <a-input
            v-model:value="model['amountMax']"
            style="width: 150px; text-align: center; border-left: 0"
            placeholder="最大值"
            suffix="万元"
          />
        </a-input-group>
      </template>
      <!-- </div> -->
    </BasicForm>
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

      const getTitle = computed(() => (!unref(isUpdate) ? '新增规则' : '编辑规则'));

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

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
