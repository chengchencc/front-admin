import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const returnFee: AppRouteModule = {
  path: '/fee',
  name: 'Fee',
  component: LAYOUT,
  redirect: '/fee/return',
  meta: {
    // hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: '保费管理',
    orderNo: 10,
  },
  children: [
    {
      path: 'return',
      name: 'FeeReturn',
      component: () => import('/@/views/prototype/return-fee/index.vue'),
      meta: {
        title: '退费管理',
        icon: 'simple-icons:about-dot-me',
        // hideMenu: true,
      },
    },
  ],
};

export default returnFee;
