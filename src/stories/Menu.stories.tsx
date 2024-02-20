import React, {ReactElement, useState} from 'react';

import {Button, Menu, MenuProps} from 'ui-kit';
import {
  AppstoreOutlined,
  LinkOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from '@ant-design/icons';

export default {
  title: 'Example/Menu',
  component: Menu,
  argTypes: {
    mode: {
      control: 'select',
      options: ['inline', 'horizontal', 'vertical'],
    },
    style: {control: 'object'},
    multiple: {control: 'boolean'},
  },
};

const MenuTemplate = (args: MenuProps) => {
  return <Menu {...args} />;
};

const MenuCollapsedTemplate = (args: MenuProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{width: 256}}>
      <Button type="primary" onClick={toggleCollapsed} style={{marginBottom: 16}}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu {...args} inlineCollapsed={collapsed} />
    </div>
  );
};

const items: MenuProps['items'] = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
    danger: true,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu1',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:5',
          },
          {
            label: 'Option 2',
            key: 'setting:6',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:7',
          },
          {
            label: 'Option 4',
            key: 'setting:8',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    icon: <LinkOutlined />,
    key: 'alipay',
  },
];

export const MenuComponent = (args: MenuProps): ReactElement => <MenuTemplate {...args} />;

MenuComponent.args = {
  items,
  mode: 'horizontal',
};

export const MenuInline = (args: MenuProps): ReactElement => <MenuTemplate {...args} />;

MenuInline.args = {
  items,
  mode: 'inline',
  style: {width: 256},
};

export const MenuCollapsed = (args: MenuProps): ReactElement => <MenuCollapsedTemplate {...args} />;

MenuCollapsed.args = {
  items,
  mode: 'inline',
};

export const VerticalMenu = (args: MenuProps): ReactElement => <MenuTemplate {...args} />;

VerticalMenu.args = {
  items,
  mode: 'vertical',
  style: {width: 256},
};
