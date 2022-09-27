import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { left } from 'inquirer/lib/utils/readline';
import { auditColumns } from '/@/domain/AuditColumn';

const booleanRender = ({ text }) => {
  const enable = text;
  const color = enable ? 'green' : 'red';
  const value = enable ? '是' : '否';
  return h(Tag, { color: color }, () => value);
};

function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export const listName = '文件列表';

export const columns: BasicColumn[] = [
  {
    title: '预览',
    dataIndex: 'url',
    width: 80,
    slots: { customRender: 'preview' },
  },
  {
    title: '原始文件名',
    dataIndex: 'name',
    align: 'left',
    // width: 120,
  },
  {
    title: '请求地址',
    dataIndex: 'url',
    align: 'left',

    // width: 120,
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
    width: 120,
    customRender: ({ text }) => formatBytes(text),
  },
  {
    title: '是否压缩',
    dataIndex: 'compressed',
    width: 120,
    customRender: booleanRender,
  },
  ...auditColumns,
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
    required: true,
  },
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'value',
    label: '字典值',
    component: 'Input',
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
    required: true,
  },
  {
    label: '备注',
    field: 'description',
    component: 'InputTextArea',
  },
];
