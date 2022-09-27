<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <!-- <DeptTree class="w-1/4 xl:w-1/5" @select="handleSelect" /> -->
    <BasicTable @register="registerTable" class="" :searchInfo="searchInfo">
      <template #toolbar>
        <!-- <a-button type="primary" @click="handleCreate">新增字典</a-button> -->
      </template>
      <template #preview="{ text, record }">
        <img :src="text" v-if="record.isImg" />
        <img :src="'/src/assets/images/logo.png'" v-else />
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            // {
            //   icon: 'clarity:info-standard-line',
            //   tooltip: '查看',
            //   onClick: handleView.bind(null, record),
            // },
            // {
            //   icon: 'clarity:note-edit-line',
            //   tooltip: '编辑',
            //   onClick: handleEdit.bind(null, record),
            // },
            // {
            //   icon: 'ant-design:delete-outlined',
            //   color: 'error',
            //   tooltip: '删除',
            //   popConfirm: {
            //     title: '是否确认删除',
            //     confirm: handleDelete.bind(null, record),
            //   },
            // },
          ]"
        />
      </template>
    </BasicTable>
    <EditModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';

  import { useModal } from '/@/components/Modal';
  import EditModal from './edit-modal.vue';

  import { columns, listName, searchFormSchema } from './data';
  import { useGo } from '/@/hooks/web/usePage';
  import { getFileList } from '/@/api/file';

  export default defineComponent({
    name: 'DictionaryManagement',
    components: { BasicTable, PageWrapper, EditModal, TableAction },
    setup() {
      const go = useGo();
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: listName,
        api: getFileList,
        rowKey: 'id',
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        useSearchForm: false,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        // actionColumn: {
        //   width: 120,
        //   title: '操作',
        //   dataIndex: 'action',
        //   slots: { customRender: 'action' },
        // },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        console.log(record);
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        console.log(record);
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          const result = updateTableDataRecord(values.id, values);
          console.log(result);
        } else {
          reload();
        }
      }

      function handleSelect(deptId = '') {
        searchInfo.deptId = deptId;
        reload();
      }

      function handleView(record: Recordable) {
        go('/system/account_detail/' + record.id);
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSelect,
        handleView,
        searchInfo,
      };
    },
  });
</script>
