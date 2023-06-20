// import { deleteTag, getTagList, insertTag, updateTag } from '/@/api/product/product';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { Description, DescItem } from '/@/components/Description/index';
import { formatToDate, formatToDateTime } from '/@/utils/dateUtil';

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
  page: () => Promise.resolve([]), //httpClient.get<any>({ url: `/tag/page`, params }),
  // insert: (data: any) => httpClient.post<any>({ url: `/tag`, data }),
  // update: (data: any) => httpClient.put<any>({ url: `/tag`, data }),
  // del: (id: any) => httpClient.delete<any>({ url: `/tag/${id}` }),
};
export const listName = '名单分类';

const type = [
  { label: '已放款业务，修改担保费率退费', value: '0' },
  { label: '已出批复，客户不再需要贷款', value: '1' },
  // { label: '按钮', value: '2' },
];
const validateTag = [
  { label: '黄', value: '0' },
  { label: '红', value: '1' },
];
const status = [
  { label: '有效', value: '0' },
  { label: '失效', value: '1' },
];

export const columns: BasicColumn[] = [
  {
    title: '编号',
    dataIndex: 'field1',
    width: 120,
  },
  {
    title: '名称',
    dataIndex: 'field2',
    width: 120,
  },
  {
    title: '校验标签',
    dataIndex: 'tag',
    width: 120,
    customRender({ text }) {
      console.log(text);
      return validateTag.find((s) => s.value == text)?.label || '其他';
    },
  },
  {
    title: '备注',
    dataIndex: 'field3',
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 120,
    customRender({ text }) {
      const value = status.find((s) => s.value == text)?.label || '其他';
      const color = text == '0' ? 'processing' : 'success';
      return h(Tag, { color }, () => value);
    },
  },
  {
    title: '创建日期',
    dataIndex: 'creationTime',
    width: 120,
    format: (text) => formatToDate(text),
  },
  {
    title: '失效时间',
    dataIndex: 'invalidTime',
    width: 120,
    format: (text) => formatToDate(text),
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'field1',
    label: '编号',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'field2',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'field1',
    component: 'Input',
    required: true,
  },
  {
    label: '名称',
    field: 'field2',
    component: 'Input',
    required: true,
  },
  {
    field: 'tag',
    label: '校验标签',
    component: 'Select',
    defaultValue: '0',
    required: true,
    componentProps: {
      options: validateTag,
    },
    colProps: { lg: 24, md: 24 },
  },
  {
    label: '备注',
    field: 'field3',
    component: 'InputTextArea',
    required: true,
  },
];

export const detailSchema: DescItem[] = [
  {
    field: 'field1',
    label: '编号',
  },
  {
    field: 'field2',
    label: '名称',
  },
  {
    field: 'tag',
    label: '校验标签',
    render: (val, data) => {
      console.log(data);
      return validateTag.find((s) => s.value == val)?.label || '其他';
    },
  },
  {
    field: 'status',
    label: '状态',
    span: 1,
  },
  {
    field: 'field4',
    label: '创建日期',
    span: 1,
  },
  {
    field: 'field5',
    label: '创建人',
    span: 1,
  },
  {
    field: 'field5',
    label: '失效日期',
    span: 1,
  },
  {
    field: 'field3',
    label: '备注',
    span: 2,
  },
];

export const data = [
  {
    id: 0,
    field1: 'MD001',
    field2: '社保局黑名单',
    field3: '名单说明XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    tag: '0',
    status: '1',
  },
  {
    id: 1,
    field1: 'MD002',
    field2: '财政部黑名单',
    field3: '名单说明XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    status: '0',
    tag: '1',
  },
];
