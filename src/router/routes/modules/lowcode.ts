import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const lowcode: AppRouteModule = {
  path: '/lowcode',
  name: 'LowCode',
  component: LAYOUT,
  redirect: '/lowcode/model',
  meta: {
    orderNo: 11,
    icon: 'ion:settings-outline',
    title: '低代码平台',
  },
  children: [
    {
      path: 'model',
      name: 'ModelDesigner',
      meta: {
        title: '模型设计',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/demo/system/account/index.vue'),
    },
  ],
};

export default lowcode;
