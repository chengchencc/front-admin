import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const blackNameListManagement: AppRouteModule = {
  path: '/nameList',
  name: 'nameList',
  component: LAYOUT,
  redirect: '/nameList/index',
  meta: {
    // hideChildrenInMenu: true,
    icon: 'ion:settings-outline',
    title: '名单管理',
    orderNo: 10,
  },
  children: [
    {
      path: 'type',
      name: 'nameListType',
      component: () => import('/@/views/prototype/name-list/type-mgr/index.vue'),
      meta: {
        title: '名单分类',
        icon: 'ion:layers-outline',
        // hideMenu: true,
      },
    },
    {
      path: 'index',
      name: 'nameListIndex',
      component: () => import('/@/views/prototype/name-list/black-list/index.vue'),
      meta: {
        title: '名单管理',
        icon: 'ion:layers-outline',
        // hideMenu: true,
      },
    },
  ],
};

export default blackNameListManagement;
