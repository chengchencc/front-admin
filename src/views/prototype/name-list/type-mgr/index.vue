<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <!-- <DeptTree class="w-1/4 xl:w-1/5" @select="handleSelect" /> -->
    <BasicTable @register="registerTable" class="" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '查看',
              icon: 'clarity:info-standard-line',
              tooltip: '查看',
              onClick: handleView.bind(null, record),
            },
            {
              label: '编辑',
              icon: 'clarity:note-edit-line',
              tooltip: '编辑',
              onClick: handleEdit.bind(null, record),
            },
            {
              label: '失效',
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '失效',
              popConfirm: {
                title: '失效后将失效此类型下的所有名单，且不能恢复。是否确认失效？',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <EditModal @register="registerModal" @success="handleSuccess" />
    <ViewModal @register="registerViewModal" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';

  import { useModal } from '/@/components/Modal';
  import EditModal from './edit-modal.vue';
  import ViewModal from './view-modal.vue';

  import { columns, listName, searchFormSchema, api,data } from './data';
  // import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'DictionaryManagement',
    components: { BasicTable, PageWrapper, EditModal, ViewModal, TableAction },
    setup() {
      // const go = useGo();
      const [registerModal, { openModal }] = useModal();
      const [registerViewModal, { openModal: openViewModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const dataSource = reactive<Recordable[]>(data);
      const [registerTable, { reload, updateTableDataRecord, insertTableDataRecord }] = useTable({
        title: listName || '列表',
        // api: api.page,
        dataSource: dataSource,
        rowKey: 'id',
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        actionColumn: {
          width: 200,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      let i = 3;

      function handleCreate() {
        // console.log('insert');
        // insertTableDataRecord({ id: i, type: 0, code: '20211112' });

        // dataSource.push({ id: i, type: 0, code: '20211112' });

        // console.log(result);
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

      function handleView(record: Recordable) {
        console.log(record);
        openViewModal(true, {
          record,
          isUpdate: true,
        });
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        // await api.del(record.id);
      }

      function handleSuccess({ isUpdate, values }) {
        // values.id = i++;
        // insertTableDataRecord(values);
        dataSource.push({
          id: i++,
          ...values,
        });
        // if (isUpdate) {
        //   // 演示不刷新表格直接更新内部数据。
        //   // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
        //   const result = updateTableDataRecord(values.id, values);
        //   console.log(result);
        // } else {
        //   reload();
        // }
      }

      function handleSelect(deptId = '') {
        searchInfo.deptId = deptId;
        reload();
      }

      // function handleView(record: Recordable) {
      //   go('/system/account_detail/' + record.id);
      // }

      return {
        registerTable,
        registerModal,
        registerViewModal,
        openViewModal,
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
