import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const process: AppRouteModule = {
  path: '/process',
  name: 'Process',
  component: LAYOUT,
  redirect: '/process/index',
  meta: {
    orderNo: 12,
    icon: 'ion:settings-outline',
    title: '流程设计',
  },
  children: [
    {
      path: 'index',
      name: 'ProcessDesigner',
      meta: {
        title: '流程管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/demo/system/account/index.vue'),
    },
    {
      path: 'monitor',
      name: 'ProcessMonitor',
      meta: {
        title: '流程监控',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/demo/system/account/index.vue'),
    },
    {
      path: 'script',
      name: 'ProcessScript',
      meta: {
        title: '流程脚本',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/demo/system/account/index.vue'),
    },
  ],
};

export default process;
