// import { deleteTag, getTagList, insertTag, updateTag } from '/@/api/product/product';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h, reactive } from 'vue';
import { Tag } from 'ant-design-vue';
import { Description, DescItem } from '/@/components/Description/index';
import { auditColumns } from '/@/domain/AuditColumn';
import { originData as templateData } from '../rule-template/data';

export const originData = [
  {
    id: '1',
    code: 'RG-01',
    ruleGroupType: '1',
    innerRuleRelation: '0',
    name: '经营快贷产品规则包',
    description:
      '用于对经营快贷产品进行校验，主要校验债权人为工行、贷款利率小于xxx、主债权金额xxx以内',
    ruleTemplate: 'RT-01',
    ruleCount: 15,
  },
  {
    id: '2',
    code: 'RG-02',
    ruleGroupType: '1',
    innerRuleRelation: '0',
    name: '债务人标准校验规则包',
    description: '用于进行债务人标准校验，主要包括：xxxxxxxxxxxxxxxxxxxxxxxxxx',
    ruleTemplate: 'RT-02',
    ruleCount: 8,
  },
  {
    id: '3',
    code: 'RG-03',
    ruleGroupType: '1',
    innerRuleRelation: '0',
    name: '债权人标准校验规则包',
    description: '用于机构标准的债权人校验，主要包括：xxxxxxxxxxxxxxxxxxxxxxxxxx',
    ruleTemplate: 'RT-03',
    ruleCount: 6,
  },
  {
    id: '4',
    code: 'RG-04',
    ruleGroupType: '1',
    innerRuleRelation: '0',
    name: '机构总体规则包',
    description:
      '主要用于校验本机构总体规则，单一债务人主债权金额小于1000万，xxxxxxxxxxxxxxxxxxxxxxxxxx',
    ruleTemplate: 'RT-04',
    ruleCount: 4,
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
export const listName = '规则包清单';

const type = [
  { label: '已放款业务，修改担保费率退费', value: '0' },
  { label: '已出批复，客户不再需要贷款', value: '1' },
  // { label: '按钮', value: '2' },
];

const RuleGroupType = [
  { label: '物理校验', value: '0' },
  { label: '合规性校验', value: '1' },
];
const InnerRuleRelation = [
  { label: 'And（并）', value: '0' },
  { label: 'Or（或）', value: '1' },
];

/**
 * customRender: ({ text }) => enumRender(action, text),
 * @param dict 字典
 * @param text 传入当前转码文本
 */
export const enumRender = (dict: { label: string; value: string }[], text: string) => {
  return dict.find((s) => s.value == text)?.label || '其他';
};

export const enumRenderWithField = (dict: any[], field: string, text: string) => {
  return dict.find((s) => s[field] == text)?.name || '其他';
};

export const columns: BasicColumn[] = [
  {
    title: '规则包编号',
    dataIndex: 'code',
    width: 120,
  },

  {
    title: '规则包名称',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '规则包描述',
    dataIndex: 'description',
    width: 320,
  },
  {
    title: '规则包类型',
    dataIndex: 'ruleGroupType',
    customRender: ({ text }) => enumRender(RuleGroupType, text),
    width: 120,
  },
  {
    title: '内部规则逻辑',
    dataIndex: 'innerRuleRelation',
    customRender: ({ text }) => enumRender(InnerRuleRelation, text),
    width: 120,
  },
  {
    title: '规则数量',
    dataIndex: 'ruleCount',
    width: 120,
  },
  ...auditColumns,
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '规则包名称',
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
    label: '规则包类型',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'code',
    label: '规则包编号',
    component: 'Input',
    required: true,
  },
  {
    field: 'name',
    label: '规则包名称',
    component: 'Input',
    required: true,
    // dynamicDisabled: true,
    // componentProps: {
    //   disabled: false,
    // },
  },
  {
    field: 'description',
    label: '规则包描述',
    component: 'InputTextArea',
    required: true,
  },
  {
    field: 'ruleGroupType',
    label: '规则包类型',
    component: 'Select',
    defaultValue: '1',
    required: true,
    componentProps: {
      options: RuleGroupType,
    },
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'innerRuleRelation',
    label: '内部规则逻辑',
    component: 'Select',
    defaultValue: '0',
    required: true,
    componentProps: {
      options: InnerRuleRelation,
    },
    colProps: { lg: 24, md: 24 },
  },
];

export const detailSchema: DescItem[] = [
  {
    field: 'code',
    label: '规则编号',
  },
  {
    field: 'name',
    label: '规则名称',
  },
  {
    field: 'description',
    label: '规则描述',
    span: 2,
  },
  {
    field: 'ruleTemplate',
    label: '规则模板',
    render(val, data) {
      return templateData.find((s) => s.code == val)?.name || '未知';
    },
  },
  {
    field: 'ruleTemplate',
    label: '模板类型',
    render(val, data) {
      const ruleType = templateData.find((s) => s.code == val)?.ruleType;
      return RuleType.find((s) => s.value == ruleType)?.label || '未知';
    },
  },
  {
    label: '主债权金额范围',
    field: 'amountMin',
    show: (data) => {
      console.log('values::', data);
      return data.ruleTemplate == 'RT-04';
    },
  },

  // {
  //   field: 'type',
  //   label: '规则类型',
  //   render: (val, data) => {
  //     console.log(data);
  //     return type.find((s) => s.value == val)?.label || '其他';
  //   },
  // },
  // {
  //   field: 'code',
  //   label: '规则编号',
  //   // render: (curVal, data) => {
  //   //   return `${data.username}-${curVal}`;
  //   // },
  // },
  // {
  //   field: 'fee1',
  //   label: '原担保费率',
  // },
  // {
  //   field: 'fee2',
  //   label: '拟调整担保费率',
  // },
  // {
  //   field: 'description',
  //   label: '备注',
  //   span: 2,
  // },
];
