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
    title: '商品中心',
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
      path: 'tag',
      name: 'ProductTag',
      component: () => import('/@/views/modules/tag/index.vue'),
      meta: {
        title: '分类管理',
      },
    },
  ],
};

export default chengch;
