import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';

const fileRouter: AppRouteModule = {
  path: '/file-center',
  name: 'fileCenter',
  component: LAYOUT,
  redirect: '/file-center/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: '文件中心',
    orderNo: 12,
  },
  children: [
    {
      path: 'index',
      name: 'fileCenterIndex',
      component: () => import('/@/views/modules/file/index.vue'),
      meta: {
        title: '文件中心',
      },
    },
  ],
};

export default fileRouter;
