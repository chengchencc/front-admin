import { api as tagApi } from '../tag/data';
import { uploadApi } from '/@/api/file';
import { getDictByType } from '/@/api/product/product';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { auditColumns } from '/@/domain/AuditColumn';
import { h } from 'vue';
import { CropperAvatar, CropperSquare } from '/@/components/Cropper';
// import { uploadApi } from '/@/api/sys/upload';

export const columns: BasicColumn[] = [
  {
    title: '款号',
    dataIndex: 'code',
    width: 120,
  },
  {
    title: '商品名称',
    dataIndex: 'title',
    width: 120,
  },
  {
    title: '类型',
    dataIndex: 'tags',
    width: 120,
  },
  {
    title: '颜色',
    dataIndex: 'color',
    width: 200,
  },
  {
    title: '价格',
    dataIndex: 'price',
    width: 200,
  },
  {
    title: '预览图',
    dataIndex: 'coverUrl',
    width: 160,
    slots: { customRender: 'preview' },
  },
  // {
  //   title: '备注',
  //   dataIndex: 'remark',
  // },
  ...auditColumns,
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'code',
    label: '款号',
    component: 'Input',
    // helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    rules: [
      {
        required: true,
        message: '请输入',
      },
      {
        max: 20,
        message: '长度不能大于20个字符',
      },
    ],
  },
  {
    field: 'title',
    label: '商品名称',
    component: 'Input',
    // helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    rules: [
      {
        required: true,
        message: '请输入商品名称',
      },
      {
        max: 20,
        message: '长度不能大于20个字符',
      },
    ],
  },
  {
    label: '商品类型',
    field: 'tags',
    component: 'ApiSelect',
    componentProps: {
      api: () => tagApi.all(),
      labelField: 'name',
      valueField: 'id',
      mode: 'multiple',
    },
    required: true,
  },
  // {
  //   label: '颜色',
  //   field: 'color',
  //   component: 'ApiSelect',
  //   componentProps: {
  //     api: () => getDictByType('ProductColor'),
  //     labelField: 'name',
  //     valueField: 'value',
  //     mode: 'multiple',
  //   },
  //   required: true,
  // },
  {
    label: '颜色',
    field: 'color',
    component: 'Input',
    required: true,
  },
  {
    label: '尺寸',
    field: 'size',
    component: 'Input',
    required: true,
  },
  {
    label: '价格',
    field: 'price',
    component: 'InputNumber',
    componentProps: {},
    required: true,
  },
  {
    label: '封面',
    field: 'coverUrl',
    component: 'Input',
    componentProps: {},
    render: ({ model, field }) => {
      return h(CropperSquare, {
        value: model[field],
        uploadApi: uploadApi as any,
        circled: false,
        showBtn: false,
        onChange: (value: string) => {
          model[field] = value;
        },
      });
    },
  },
  {
    label: '预览图',
    field: 'previewImages',
    component: 'Upload',
    componentProps: {
      api: uploadApi,
    },
  },

  {
    label: '详情',
    field: 'description',
    component: 'Tinymce',
    componentProps: {
      toolbar: ['fontsizeselect'],
      plugins: [
        // 'advlist anchor autolink autosave code codesample  directionality  fullscreen hr insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus  template  textpattern visualblocks visualchars wordcount',
      ],
      options: {},
    },
  },
];
