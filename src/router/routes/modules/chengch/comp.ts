import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const chengch: AppRouteModule = {
  path: '/chengch',
  name: 'Chengch',
  component: LAYOUT,
  redirect: '/chengch/basic',
  meta: {
    orderNo: 999999,
    icon: 'ion:layers-outline',
    title: '测试',
  },

  children: [
    {
      path: 'cbasic',
      name: 'CBasicDemo',
      component: () => import('/@/views/chengch/index.vue'),
      meta: {
        title: t('routes.demo.comp.basic'),
      },
    },
  ],
};

export default chengch;
