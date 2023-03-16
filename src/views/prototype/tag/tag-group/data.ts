// import { deleteTag, getTagList, insertTag, updateTag } from '/@/api/product/product';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { Description, DescItem } from '/@/components/Description/index';

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
export const listName = '退费处理清单';

const type = [
  { label: '已放款业务，修改担保费率退费', value: '0' },
  { label: '已出批复，客户不再需要贷款', value: '1' },
  // { label: '按钮', value: '2' },
];

const status = [
  { label: '草稿', value: '0' },
  { label: '审批中', value: '1' },
  { label: '待退费', value: '2' },
  { label: '已完成', value: '3' },
];

const action = [
  { label: '补收', value: '0' },
  { label: '退收', value: '1' },
];

export const columns: BasicColumn[] = [
  {
    title: '退费类型',
    dataIndex: 'type',
    // width: 120,
    customRender({ text }) {
      console.log(text);
      return type.find((s) => s.value == text)?.label || '其他';
    },
  },
  {
    title: '业务编号',
    dataIndex: 'code',
    width: 120,
  },
  {
    title: '项目类型',
    dataIndex: 'code3',
    width: 120,
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
    title: '地市',
    dataIndex: 'name1',
    width: 120,
  },
  {
    title: '区县',
    dataIndex: 'name2',
    width: 120,
  },
  {
    title: '客户名称',
    dataIndex: 'code4',
    width: 120,
  },
  {
    title: '证件号码',
    dataIndex: 'code5',
    width: 120,
  },
  {
    title: '原批复费率',
    dataIndex: 'fee1',
    width: 120,
  },
  {
    title: '拟调整担保费率',
    dataIndex: 'fee2',
    width: 120,
  },
  {
    title: '处理方法',
    dataIndex: 'action',
    width: 120,
    customRender({ text }) {
      console.log(text);
      return action.find((s) => s.value == text)?.label || '其他';
    },
  },
  {
    title: '差额',
    dataIndex: 'amount',
    width: 120,
  },
  // {
  //   title: '排序号',
  //   dataIndex: 'sortNo',
  //   width: 120,
  // },
  // ...auditColumns,

  {
    title: '备注',
    dataIndex: 'description',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '业务编号',
    component: 'Input',
    colProps: { span: 8 },
  },
  // {
  //   field: 'name1',
  //   label: '退费类型',
  //   component: 'Input',
  //   colProps: { span: 8 },
  // },
  {
    field: 'name2',
    label: '状态',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'type',
    label: '退费类型',
    component: 'Select',
    defaultValue: '0',
    required: true,
    componentProps: {
      options: type,
    },
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'code',
    label: '业务编号',
    component: 'InputSearch',
    required: true,
    componentProps: ({ schema, tableAction, formActionType, formModel }) => {
      return {
        enterButton: true,
        onSearch: (e) => {
          console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', e);
          formModel['fee1'] = 0.75;
        },
      };
    },
  },
  {
    field: 'fee1',
    label: '原担保费率',
    component: 'Input',
    required: true,
    dynamicDisabled: true,
    // componentProps: {
    //   disabled: false,
    // },
  },
  {
    field: 'fee2',
    label: '拟调整担保费率',
    component: 'Input',
    required: true,
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
    label: '退费类型',
    render: (val, data) => {
      console.log(data);
      return type.find((s) => s.value == val)?.label || '其他';
    },
  },
  {
    field: 'code',
    label: '业务编号',
    // render: (curVal, data) => {
    //   return `${data.username}-${curVal}`;
    // },
  },
  {
    field: 'fee1',
    label: '原担保费率',
  },
  {
    field: 'fee2',
    label: '拟调整担保费率',
  },
  {
    field: 'description',
    label: '备注',
    span: 2,
  },
];
