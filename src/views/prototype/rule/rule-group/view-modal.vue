<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <Description @register="descriptionRegister" size="middle" :column="2" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive, unref, computed } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  import { detailSchema, api, data } from './data';

  export default defineComponent({
    name: 'ViewModal',
    components: { BasicModal, Description },
    // emits: ['success', 'register'],
    setup(_, { emit }) {
      // const isUpdate = ref(true);
      // const rowId = ref('');

      let detailData = reactive<Recordable>({});

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
        console.log('data.record', data.record);
        Object.assign(detailData, data.record);
      });

      // return { detailSchema, register, registerModal };

      const getTitle = computed(() => '查看');

      return { registerModal, descriptionRegister, detailSchema, getTitle };
    },
  });
</script>
