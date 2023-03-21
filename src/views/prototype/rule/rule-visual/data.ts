export const originData = [
  {
    id: '1',
    type: 'operation',
    name: 'or',
    value: 'or',
    children: [
      {
        id: '1-1',
        type: 'ruleGroup',
        name: '债务人标准校验规则包',
        value: 'RG-01',
        // ruleGroupName: '债务人标准校验规则包',
        // ruleGroupNo: 'RG-01',
        children: [
          {
            id: '1-1-1',
            type: 'rule',
            name: '债务人必须为1',
            code: 'RI-01',
          },
        ],
      },
      {
        id: '1-1',
        type: 'ruleGroup',
        name: '债务人标准校验规则包',
        value: 'RG-01',
        // ruleGroupName: '债务人标准校验规则包',
        // ruleGroupNo: 'RG-01',
        children: [
          {
            id: '1-1-1',
            type: 'rule',
            name: '债务人必须为1',
            code: 'RI-01',
          },
        ],
      },
    ],
  },
];
