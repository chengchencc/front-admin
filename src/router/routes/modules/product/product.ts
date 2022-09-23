import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const chengch: AppRouteModule = {
  path: '/product',
  name: 'Product',
  component: LAYOUT,
  redirect: '/product/index',
  meta: {
    orderNo: 11,
    icon: 'ion:layers-outline',
    title: '产品管理',
  },

  children: [
    {
      path: 'index',
      name: 'ProductIndex',
      component: () => import('/@/views/modules/product/index.vue'),
      meta: {
        title: '商品管理',
      },
    },
    {
      path: 'dict',
      name: 'dict',
      component: () => import('/@/views/modules/dict/index.vue'),
      meta: {
        title: '字典管理',
      },
    },
  ],
};

export default chengch;
