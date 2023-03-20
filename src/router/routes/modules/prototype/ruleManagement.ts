import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const ruleManagement: AppRouteModule = {
  path: '/rule',
  name: 'Rule',
  component: LAYOUT,
  redirect: '/rule/ruleTemplate',
  meta: {
    // hideChildrenInMenu: true,
    icon: 'ion:settings-outline',
    title: '校验规则设计',
    orderNo: 10,
  },
  children: [
    {
      path: 'ruleTemplate',
      name: 'ruleTemplate',
      component: () => import('/@/views/prototype/rule/rule-template/index.vue'),
      meta: {
        title: '规则模板（管理员）',
        icon: 'ion:layers-outline',
        // hideMenu: true,
      },
    },
    {
      path: 'orgInstance',
      name: 'orgInstance',
      component: () => import('/@/views/prototype/rule/rule-instance/index.vue'),
      meta: {
        title: '机构规则配置',
        icon: 'ion:layers-outline',
        // hideMenu: true,
      },
    },
    {
      path: 'ruleGroup',
      name: 'ruleGroup',
      component: () => import('/@/views/prototype/rule/rule-group/index.vue'),
      meta: {
        title: '规则包管理',
        icon: 'ion:layers-outline',
        // hideMenu: true,
      },
    },
    {
      path: 'ruleArrange',
      name: 'ruleArrange',
      component: () => import('/@/views/prototype/rule/rule-arrange/index.vue'),
      meta: {
        title: '规则编排',
        icon: 'ion:layers-outline',
        // hideMenu: true,
      },
    },
  ],
};

export default ruleManagement;
