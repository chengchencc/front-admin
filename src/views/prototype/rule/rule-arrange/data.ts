import { FormSchema } from '/@/components/Form';
import { BasicColumn } from '/@/components/Table';
import { RuleTreeSchema, RuleNodeSchema } from '/@/components/RuleTree';

export const ruleTreeData: RuleNodeSchema[] = [
  {
    id: '0',
    name: 'AND',
    nodeType: 'operation',
    children: [
      {
        id: '0-1-1',
        name: '备案规则包（AND）',
        nodeType: 'ruleGroup',
        desc: '备案规则包描述描述',
        children: [
          {
            id: '0-1-2',
            name: '债务人类别为农户',
            nodeType: 'rule',
            // children: [],
            desc: '债务人类别为农户描述',
          },
          {
            id: '0-1-3',
            name: '债务人证件类型为身份证号',
            nodeType: 'rule',
            // children: [],
            desc: '',
          },
          {
            id: '0-1-4',
            name: '身份证号为18位',
            nodeType: 'rule',
            // children: [],
            desc: '',
          },
        ],
      },
      {
        id: '0-1-2',
        name: '准入规则包（AND）',
        nodeType: 'ruleGroup',
        desc: '准入规则包描述描述',
        children: [
          {
            id: '0-1-2',
            name: '债务人类别为企业',
            nodeType: 'rule',
            // children: [],
            desc: '',
          },
          {
            id: '0-1-3',
            name: '债务人证件类型为统一社会信用代码',
            nodeType: 'rule',
            // children: [],
            desc: '',
          },
          {
            id: '0-1-4',
            name: '证号号码为15位',
            nodeType: 'rule',
            // children: [],
            desc: '',
          },
          {
            id: '0-1-5',
            name: '所属行业（国）必填',
            nodeType: 'rule',
            // children: [],
            desc: '',
          },
        ],
      },
      {
        id: '0-1-2',
        name: '展期规则包（AND）',
        nodeType: 'ruleGroup',
        desc: '规则包描述描述',
        children: [
          {
            id: '0-1-2',
            name: '债务人证件类型为统一社会信用代码',
            nodeType: 'rule',
            // children: [],
            desc: '',
          },
          {
            id: '0-1-3',
            name: '债务人联系方式必填',
            nodeType: 'rule',
            // children: [],
            desc: '',
          },
          {
            id: '0-1-4',
            name: '债务人类型必填',
            nodeType: 'rule',
            // children: [],
            desc: '',
          },
        ],
      },
      {
        id: '0',
        name: 'AND',
        nodeType: 'operation',
        children: [
          {
            id: '0-1-1',
            name: '备案规则包（AND）',
            nodeType: 'ruleGroup',
            desc: '备案规则包描述描述',
            children: [
              {
                id: '0-1-2',
                name: '债务人类别为农户',
                nodeType: 'rule',
                // children: [],
                desc: '债务人类别为农户描述',
              },
              {
                id: '0-1-3',
                name: '债务人证件类型为身份证号',
                nodeType: 'rule',
                // children: [],
                desc: '',
              },
              {
                id: '0-1-4',
                name: '身份证号为18位',
                nodeType: 'rule',
                // children: [],
                desc: '',
              },
            ],
          },
          {
            id: '0-1-2',
            name: '准入规则包（AND）',
            nodeType: 'ruleGroup',
            desc: '准入规则包描述描述',
            children: [
              {
                id: '0-1-2',
                name: '债务人类别为企业',
                nodeType: 'rule',
                // children: [],
                desc: '',
              },
              {
                id: '0-1-3',
                name: '债务人证件类型为统一社会信用代码',
                nodeType: 'rule',
                // children: [],
                desc: '',
              },
              {
                id: '0-1-4',
                name: '证号号码为15位',
                nodeType: 'rule',
                // children: [],
                desc: '',
              },
              {
                id: '0-1-5',
                name: '所属行业（国）必填',
                nodeType: 'rule',
                // children: [],
                desc: '',
              },
            ],
          },
          {
            id: '0-1-2',
            name: '展期规则包（AND）',
            nodeType: 'ruleGroup',
            desc: '规则包描述描述',
            children: [
              {
                id: '0-1-2',
                name: '债务人证件类型为统一社会信用代码',
                nodeType: 'rule',
                // children: [],
                desc: '',
              },
              {
                id: '0-1-3',
                name: '债务人联系方式必填',
                nodeType: 'rule',
                // children: [],
                desc: '',
              },
              {
                id: '0-1-4',
                name: '债务人类型必填',
                nodeType: 'rule',
                // children: [],
                desc: '',
              },
            ],
          },
        ],
      },
    ],
  },
];

export const step1Schemas: FormSchema[] = [
  {
    field: 'account',
    component: 'Select',
    label: '付款账户',
    required: true,
    defaultValue: '1',
    componentProps: {
      options: [
        {
          label: 'anncwb@126.com',
          value: '1',
        },
      ],
    },
  },
  {
    field: 'fac',
    component: 'InputGroup',
    label: '收款账户',
    required: true,
    defaultValue: 'test@example.com',
    slot: 'fac',
  },
  {
    field: 'pay',
    component: 'Input',
    label: '',
    defaultValue: 'zfb',
    show: false,
  },
  {
    field: 'payeeName',
    component: 'Input',
    label: '收款人姓名',
    defaultValue: 'Vben',
    required: true,
  },
  {
    field: 'money',
    component: 'Input',
    label: '转账金额',
    defaultValue: '500',
    required: true,
    renderComponentContent: () => {
      return {
        prefix: () => '￥',
      };
    },
  },
];

export const step2Schemas: FormSchema[] = [
  {
    field: 'pwd',
    component: 'InputPassword',
    label: '支付密码',
    required: true,
    defaultValue: '123456',
  },
];

export function getBasicColumns(): BasicColumn[] {
  return [
    // {
    //   title: 'ID',
    //   dataIndex: 'id',
    //   fixed: 'left',
    //   width: 200,
    // },
    {
      title: '操作',
      dataIndex: 'operation',
      width: 150,
      // filters: [
      //   { text: 'or', value: 'or' },
      //   { text: 'and', value: 'and' },
      //   { text: '规则包', value: 'group' },
      // ],
    },
    {
      title: '规则包名称',
      dataIndex: 'ruleGroupName',
    },
    {
      title: '规则包编号',
      dataIndex: 'ruleGroupNo',
      width: 150,
      // sorter: true,
      // defaultHidden: true,
    },
    // {
    //   title: '开始时间',
    //   width: 150,
    //   sorter: true,
    //   dataIndex: 'beginTime',
    // },
    // {
    //   title: '结束时间',
    //   width: 150,
    //   sorter: true,
    //   dataIndex: 'endTime',
    // },
  ];
}
export function getTreeTableData() {
  return [
    {
      id: '0',
      type: 'ruleGroup',
      operation: '',
      ruleGroupName: '规则包1',
      ruleGroupNo: '',
    },

    {
      id: '2',
      operation: 'and',
      ruleGroupName: '操作符',
      ruleGroupNo: '',
      children: [
        {
          id: '2-1',
          operation: 'and',
          ruleGroupName: '债务人标准校验规则包',
          ruleGroupNo: 'RG-01',
        },
        { id: '2-2', operation: 'and', ruleGroupName: '标准校验规则包2', ruleGroupNo: 'RG-02' },
        {
          id: '2-3',
          operation: 'or',
          ruleGroupName: '操作符',
          ruleGroupNo: '',
          children: [
            {
              id: '2-1',
              operation: 'and',
              ruleGroupName: '债务人标准校验规则包',
              ruleGroupNo: 'RG-01',
            },
            { id: '2-2', operation: 'and', ruleGroupName: '标准校验规则包2', ruleGroupNo: 'RG-02' },
          ],
        },
      ],
    },
    {
      id: '1',
      operation: 'or',
      type: 'operation',
      ruleGroupName: '操作符',
      ruleGroupNo: '',
      children: [
        {
          id: '1-1',
          operation: 'and',
          ruleGroupName: '债务人标准校验规则包',
          ruleGroupNo: 'RG-01',
        },
        { id: '1-2', operation: 'and', ruleGroupName: '标准校验规则包2', ruleGroupNo: 'RG-02' },
      ],
    },
    // { operation: 'or', ruleGroupName: '', ruleGroupNo: '' },
    // { operation: 'or', ruleGroupName: '', ruleGroupNo: '' },
    // { operation: 'or', ruleGroupName: '', ruleGroupNo: '' },
    // { operation: 'or', ruleGroupName: '', ruleGroupNo: '' },
    // { operation: 'or', ruleGroupName: '', ruleGroupNo: '' },
  ];

  const data: any = (() => {
    const arr: any = [];
    for (let index = 0; index < 10; index++) {
      arr.push({
        id: `${index}`,
        name: 'John Brown',
        age: `1${index}`,
        no: `${index + 10}`,
        address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
        beginTime: new Date().toLocaleString(),
        endTime: new Date().toLocaleString(),
        children: [
          {
            id: `l2-${index}`,
            name: 'John Brown',
            age: `1${index}`,
            no: `${index + 10}`,
            address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
            beginTime: new Date().toLocaleString(),
            endTime: new Date().toLocaleString(),
          },
        ],
      });
    }
    return arr;
  })();

  return data;
}
