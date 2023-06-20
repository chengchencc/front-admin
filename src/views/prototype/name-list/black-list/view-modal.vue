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
      let detailData = reactive<Recordable>({});

      const [descriptionRegister] = useDescription({
        // title: '业务详情',
        // useCollapse: true,
        // collapseOptions: { canExpand: true, helpMessage: 'help me' },
        data: detailData,
        schema: detailSchema,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        console.log(data);
        // resetFields();
        setModalProps({ confirmLoading: false, width: '800px' });
        Object.assign(detailData, data.record);
      });

      async function handleSubmit() {
        setModalProps({ confirmLoading: false });
      }

      // return { detailSchema, register, registerModal };

      const getTitle = computed(() => '查看');

      return { registerModal, descriptionRegister, detailSchema, getTitle, handleSubmit };
    },
  });
</script>
