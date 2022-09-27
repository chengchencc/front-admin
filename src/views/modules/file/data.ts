import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

const booleanRender = ({ text }) => {
  const enable = text;
  const color = enable ? 'green' : 'red';
  const value = enable ? '是' : '否';
  return h(Tag, { color: color }, () => value);
};

export const listName = '文件列表';

export const columns: BasicColumn[] = [
  {
    title: '原始文件名',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '是否图片',
    dataIndex: 'isImg',
    width: 120,
    customRender: booleanRender,
  },
  {
    title: '上传文件类型',
    dataIndex: 'contentType',
    width: 120,
  },
  {
    title: '文件大小',
    dataIndex: 'size',
  },
  {
    title: '创建时间',
    dataIndex: 'creationTime',
    width: 180,
  },
  {
    title: '是否压缩',
    dataIndex: 'compressed',
    width: 120,
    customRender: booleanRender,
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
    field: 'type',
    label: '类型',
    component: 'Input',
    helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    required: true,
  },
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    required: true,
  },
  {
    field: 'value',
    label: '字典值',
    component: 'Input',
    helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    required: true,
  },
  {
    field: 'file',
    label: '文件',
    component: 'Upload',
  },
  {
    field: 'sortNo',
    label: '序号',
    component: 'InputNumber',
    helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    required: true,
  },
  {
    label: '备注',
    field: 'description',
    component: 'InputTextArea',
  },
];
