// import { deleteTag, getTagList, insertTag, updateTag } from '/@/api/product/product';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
// import { auditColumns } from '/@/domain/AuditColumn';
// import { httpClient } from '/@/utils/http/axios';

// export const api = {
//   page: getTagList,
//   all: () => httpClient.get<any>({ url: `/tag/detail` }),
//   insert: insertTag,
//   update: updateTag,
//   del: deleteTag,
// };

export const api = {
  // all: () => httpClient.get<any>({ url: `/tag/details` }),
  // page: (params: any) => httpClient.get<any>({ url: `/tag/page`, params }),
  // insert: (data: any) => httpClient.post<any>({ url: `/tag`, data }),
  // update: (data: any) => httpClient.put<any>({ url: `/tag`, data }),
  // del: (id: any) => httpClient.delete<any>({ url: `/tag/${id}` }),
};
export const listName = '商品类别';

export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '排序号',
    dataIndex: 'sortNo',
    width: 120,
  },
  // ...auditColumns,

  {
    title: '备注',
    dataIndex: 'description',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'type',
    label: '类型',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'sortNo',
    label: '序号',
    component: 'InputNumber',
    required: true,
  },
  {
    label: '备注',
    field: 'description',
    component: 'InputTextArea',
  },
];
