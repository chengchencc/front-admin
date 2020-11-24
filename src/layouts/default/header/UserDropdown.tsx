// components
import { Dropdown, Menu, Divider } from 'ant-design-vue';

import { defineComponent, computed, unref } from 'vue';

// res
import headerImg from '/@/assets/images/header.jpg';

import Icon from '/@/components/Icon/index';

import { userStore } from '/@/store/modules/user';

import { DOC_URL } from '/@/settings/siteSetting';

import { openWindow } from '/@/utils';

import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
import { FunctionalComponent } from 'vue';

type MenuEvent = 'loginOut' | 'doc';
interface MenuItemProps {
  icon: string;
  text: string;
  key: MenuEvent;
}

const prefixCls = 'user-dropdown';

const MenuItem: FunctionalComponent<MenuItemProps> = (props) => {
  const { key, icon, text } = props;
  return (
    <Menu.Item key={key}>
      {() => (
        <span class="flex items-center">
          <Icon icon={icon} class="mr-1" />
          <span>{text}</span>
        </span>
      )}
    </Menu.Item>
  );
};

export default defineComponent({
  name: 'UserDropdown',
  setup() {
    const { getShowDoc } = useHeaderSetting();

    const getUserInfo = computed(() => {
      const { realName = '', desc } = userStore.getUserInfoState || {};
      return { realName, desc };
    });

    //  login out
    function handleLoginOut() {
      userStore.confirmLoginOut();
    }

    // open doc
    function openDoc() {
      openWindow(DOC_URL);
    }

    function handleMenuClick(e: { key: MenuEvent }) {
      switch (e.key) {
        case 'loginOut':
          handleLoginOut();
          break;
        case 'doc':
          openDoc();
          break;
      }
    }

    function renderSlotsDefault() {
      const { realName } = unref(getUserInfo);
      return (
        <section class={prefixCls}>
          <img class={`${prefixCls}__header`} src={headerImg} />
          <section class={`${prefixCls}__info`}>
            <section class={`${prefixCls}__name`}>{realName}</section>
          </section>
        </section>
      );
    }

    function renderSlotOverlay() {
      const showDoc = unref(getShowDoc);
      return (
        <Menu onClick={handleMenuClick}>
          {() => (
            <>
              {showDoc && <MenuItem key="doc" text="文档" icon="gg:loadbar-doc" />}
              {showDoc && <Divider />}
              <MenuItem key="loginOut" text="退出系统" icon="ant-design:poweroff-outlined" />
            </>
          )}
        </Menu>
      );
    }

    return () => {
      return (
        <Dropdown placement="bottomLeft">
          {{
            default: () => renderSlotsDefault(),
            overlay: () => renderSlotOverlay(),
          }}
        </Dropdown>
      );
    };
  },
});
