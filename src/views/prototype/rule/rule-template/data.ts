// import { deleteTag, getTagList, insertTag, updateTag } from '/@/api/product/product';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h, reactive } from 'vue';
import { Tag } from 'ant-design-vue';
import { Description, DescItem } from '/@/components/Description/index';
import { auditColumns } from '/@/domain/AuditColumn';

export const originData = [
  {
    id: '1',
    code: 'RT-01',
    ruleType: '0',
    name: '证件类型校验',
    description: '居民身份证、统一社会信用代码、港澳通行证、台湾通行证、护照、外国人永久居留身份证',
  },
  {
    id: '2',
    code: 'RT-02',
    ruleType: '0',
    name: '企业划型校验',
    description: `1.债务人类别为企业时，参照工信300号文，可填写微型、小型、中型、大型；
    2.债务人类别为小微企业主时，参照工信300号文，仅可填写微型或小型；
    3.债务人类别为非企业经济组织时，不做划型校验，仅可填写其他；
    4.债务人类别为农户时，不做划型校验，仅可填写其他；
    5.债务人类别为个体工商户时，不做划型校验，仅可填写其他`,
  },
  {
    id: '3',
    code: 'RT-03',
    ruleType: '0',
    name: '法定代表人姓名校验',
    description: `如债务人类别为企业时，法定代表人必须填写天眼查登记的法定代表人`,
  },
  {
    id: '4',
    code: 'RT-04',
    ruleType: '1',
    name: '担保费率（年）校验',
    description: '可配置为 0%≦担保费率≦10% 类型校验',
  },
  {
    id: '5',
    code: 'RT-05',
    ruleType: '3',
    name: '额度校验',
    description: '自动利用额度规则进行校验',
  },
  {
    id: '6',
    code: 'RT-06',
    ruleType: '1',
    name: '债务人类型校验',
    description: '可配置债务人类型范围，例如债务人类型为创业创新企业',
  },
  {
    id: '7',
    code: 'RT-07',
    ruleType: '1',
    name: '债权人类型校验',
    description: '可配置债权人类型范围，例如债权人为工商银行或建设银行',
  },
  {
    id: '8',
    code: 'RT-08',
    ruleType: '1',
    name: '主债权金额校验',
    description: '可配置主债权金额范围，例如 30万<主债权金额<100万',
  },
  {
    id: '8',
    code: 'RT-08',
    ruleType: '1',
    name: '主债权期限校验',
    description: '可配置主债权期限范围，例如 主债权期限<3年',
  },
];

export const data = reactive<Recordable[]>(originData);

export const api = {
  // all: () => httpClient.get<any>({ url: `/tag/details` }),
  page: () => Promise.resolve([]), //httpClient.get<any>({ url: `/tag/page`, params }),
  // insert: (data: any) => httpClient.post<any>({ url: `/tag`, data }),
  // update: (data: any) => httpClient.put<any>({ url: `/tag`, data }),
  // del: (id: any) => httpClient.delete<any>({ url: `/tag/${id}` }),
};
export const listName = '规则模板清单';

const type = [
  { label: '已放款业务，修改担保费率退费', value: '0' },
  { label: '已出批复，客户不再需要贷款', value: '1' },
  // { label: '按钮', value: '2' },
];

const RuleType = [
  { label: '物理校验', value: '0' },
  { label: '合规性校验', value: '1' },
  { label: '三方数据校验', value: '2' },
  { label: '额度校验', value: '3' },
];

/**
 * customRender: ({ text }) => enumRender(action, text),
 * @param dict 字典
 * @param text 传入当前转码文本
 */
export const enumRender = (dict: { label: string; value: string }[], text: string) => {
  return dict.find((s) => s.value == text)?.label || '其他';
};

export const columns: BasicColumn[] = [
  {
    title: '规则编号',
    dataIndex: 'code',
    width: 120,
  },

  {
    title: '规则名称',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '规则描述',
    dataIndex: 'description',
    width: 320,
  },
  {
    title: '规则类型',
    dataIndex: 'ruleType',
    customRender: ({ text }) => enumRender(RuleType, text),
    width: 120,
  },
  ...auditColumns,

  // {
  //   title: '备注',
  //   dataIndex: 'description',
  // },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '规则名称',
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
    field: 'code',
    label: '规则类型',
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
