<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <Description @register="descriptionRegister" size="middle" :column="2" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive, unref, computed } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  import { detailSchema, api } from './data';

  export default defineComponent({
    name: 'ViewModal',
    components: { BasicModal, Description },
    // emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      // const rowId = ref('');

      let detailData = reactive<Recordable>({
        id: 0,
        type: '0',
        code: 'XZ202110110001',
        code3: '续支',
        status: '0',
        name1: '济南市',
        name2: '历城区',
        code4: '张三',
        code5: '372330000011241115',
        fee1: 0.75,
        fee2: 0.5,
        action: '0',
        amount: 500,
        description:
          '本业务因xxxx原因对担保费率进行调整，担保费率由xxxx调整为xxxx，共计差额xxx元。',
      });

      const [descriptionRegister] = useDescription({
        // title: '业务详情',
        // useCollapse: true,
        // collapseOptions: { canExpand: true, helpMessage: 'help me' },
        data: detailData,
        schema: detailSchema,
      });

      // const [registerForm, { setFieldsValue, /* updateSchema,  */ resetFields, validate }] =
      //   useForm({
      //     labelWidth: 150,
      //     schemas: formSchema,
      //     showActionButtonGroup: false,
      //     actionColOptions: {
      //       span: 23,
      //     },
      //   });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        // resetFields();
        setModalProps({ confirmLoading: false, width: '800px' });
        // isUpdate.value = !!data?.isUpdate;
        // detailData = data;
      });

      async function handleSubmit() {
        setModalProps({ confirmLoading: false });

        // try {
        //   let values = await validate();
        //   setModalProps({ confirmLoading: true });
        //   // if (isUpdate.value) {
        //   //   values = await api.update(values);
        //   // } else {
        //   //   values = await api.insert(values);
        //   // }
        //   // TODO custom api
        //   console.log(values);
        //   closeModal();
        //   emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        // } finally {
        //   setModalProps({ confirmLoading: false });
        // }
      }

      // return { detailSchema, register, registerModal };

      const getTitle = computed(() => '查看');

      return { registerModal, descriptionRegister, detailSchema, getTitle, handleSubmit };
    },
  });
</script>
