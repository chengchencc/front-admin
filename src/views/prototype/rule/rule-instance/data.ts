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
    code: 'RI-01',
    ruleType: '0',
    name: '主债权金额小于300万',
    description: '主债权金额小于300万',
    ruleTemplate: 'RT-01',
  },
  {
    id: '2',
    code: 'RI-02',
    ruleType: '0',
    name: '担保费率小于1%',
    description: '担保费率小于1%',
    ruleTemplate: 'RT-02',
  },
  {
    id: '3',
    code: 'RI-03',
    ruleType: '0',
    name: '债权人为工商银行',
    description: '债权人为工商银行',
    ruleTemplate: 'RT-03',
  },
  {
    id: '4',
    code: 'RI-04',
    ruleType: '0',
    name: '主债权期限小于2年',
    description: '主债权期限小于2年',
    ruleTemplate: 'RT-04',
  },
  {
    id: '5',
    code: 'RI-04',
    ruleType: '0',
    name: '债务人为个体工商户',
    description: '债务人为个体工商户',
    ruleTemplate: 'RT-04',
  },
  {
    id: '6',
    code: 'RI-04',
    ruleType: '0',
    name: '服务对象为创业创新',
    description: '服务对象为创业创新',
    ruleTemplate: 'RT-04',
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
export const listName = '退费处理清单';

const type = [
  { label: '已放款业务，修改担保费率退费', value: '0' },
  { label: '已出批复，客户不再需要贷款', value: '1' },
  // { label: '按钮', value: '2' },
];

const RuleType = [
  { label: '物理校验', value: '0' },
  { label: '合规性校验', value: '1' },
  { label: '三方数据校验', value: '1' },
  { label: '额度校验', value: '1' },
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
  {
    title: '规则模板',
    dataIndex: 'ruleTemplate',
    customRender: ({ text }) => enumRenderWithField(templateData, 'code', text),
    width: 120,
  },
  ...auditColumns,
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
    field: 'code',
    label: '规则编号',
    component: 'Input',
    required: true,
  },
  {
    field: 'name',
    label: '规则名称',
    component: 'Input',
    required: true,
    // dynamicDisabled: true,
    // componentProps: {
    //   disabled: false,
    // },
  },
  {
    field: 'description',
    label: '规则描述',
    component: 'InputTextArea',
    required: true,
  },
  {
    field: 'ruleTemplate',
    label: '规则模板',
    component: 'Select',
    defaultValue: 'RT-01',
    required: true,
    componentProps: {
      options: templateData.map((s) => {
        return {
          label: s.name,
          value: s.code,
        };
      }),
    },
    colProps: { lg: 24, md: 24 },
  },
  {
    label: '主债权金额范围',
    field: 'amountMin',
    component: 'InputGroup',
    required: true,
    show: ({ values }) => {
      console.log('values::', values);
      return values.ruleTemplate == 'RT-04';
    },
    slot: 'fac',
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
