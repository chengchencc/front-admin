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
export const listName = '黑名单';

const type = [
  { label: '社保局黑名单', value: '0' },
  { label: '财政部黑名单', value: '1' },
  // { label: '按钮', value: '2' },
];

const status = [
  { label: '有效', value: '0' },
  { label: '失效', value: '1' },
];

const idType = [
  { label: '身份证', value: '0' },
  { label: '护照', value: '1' },
];
const validateTag = [
  { label: '黄', value: '0' },
  { label: '红', value: '1' },
];

export const columns: BasicColumn[] = [
  {
    title: '名单分类',
    dataIndex: 'type',
    width: 120,
    customRender({ text }) {
      console.log(text);
      return type.find((s) => s.value == text)?.label || '其他';
    },
  },
  {
    title: '客户名称',
    dataIndex: 'field1',
    width: 120,
  },
  {
    title: '证件类型',
    dataIndex: 'field2',
    customRender({ text }) {
      console.log(text);
      return idType.find((s) => s.value == text)?.label || '其他';
    },
    width: 120,
  },
  {
    title: '证件号码',
    dataIndex: 'field3',
    width: 150,
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
  {
    title: '备注',
    dataIndex: 'description',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'field1',
    label: '客户名称',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'field3',
    label: '证件号',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'type',
    label: '名单分类',
    component: 'Input',
    colProps: { span: 6 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'type',
    label: '名单分类',
    component: 'Select',
    defaultValue: '0',
    required: true,
    componentProps: {
      options: type,
    },
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'field1',
    label: '客户名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'field2',
    label: '证件类型',
    component: 'Select',
    defaultValue: '0',
    required: true,
    componentProps: {
      options: idType,
    },
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'field3',
    label: '证件号码',
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
    field: 'description',
    component: 'InputTextArea',
    required: true,
  },
];

export const detailSchema: DescItem[] = [
  {
    field: 'type',
    label: '名单分类',
    render: (val, data) => {
      console.log(data);
      return type.find((s) => s.value == val)?.label || '其他';
    },
  },
  {
    field: 'field1',
    label: '客户名称',
  },
  {
    field: 'field2',
    label: '证件类型',
    render: (val, data) => {
      console.log(data);
      return idType.find((s) => s.value == val)?.label || '其他';
    },
  },
  {
    field: 'field3',
    label: '证件号码',
  },
  {
    field: 'tag',
    label: '校验标签',
    render: (val, data) => {
      console.log(data);
      return idType.find((s) => s.value == val)?.label || '其他';
    },
  },
  {
    field: 'field4',
    label: '创建日期',
    span: 1,
  },
  {
    field: 'field5',
    label: '失效日期',
    span: 1,
  },
  {
    field: 'field5',
    label: '状态',
    span: 1,
  },
  {
    field: 'description',
    label: '备注',
    span: 2,
  },
];

export const data = [
  {
    id: 0,
    type: '0',
    field1: '张三',
    field2: '0',
    field3: '3899899993****434',
    tag: '0',
    status: '0',
    creationTime: '2023-06-13',
    invalidTime: '',
    description: '备注',
  },
  {
    id: 1,
    type: '0',
    field1: '李四',
    field2: '0',
    field3: '3899899993****434',
    tag: '0',
    status: '0',
    creationTime: '2023-06-13',
    invalidTime: '',
    description: '备注XXXXXXXXXXXXXXXXXXX',
  },
  {
    id: 2,
    type: '0',
    field1: '王五',
    field2: '0',
    field3: '3899899993****434',
    tag: '0',
    status: '0',
    creationTime: '2023-06-13',
    invalidTime: '',
    description: '备注XXXXXXXXXXXXXXXXXXX',
  },
];
