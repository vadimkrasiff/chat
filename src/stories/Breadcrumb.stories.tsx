import React, {ReactElement} from 'react';
import {UserOutlined, HomeOutlined} from '@ant-design/icons';
import {Breadcrumb, BreadcrumbProps} from 'ui-kit';

export default {
  title: 'Example/Breadcrumb',
  component: Breadcrumb,
  argTypes: {},
};

const basicItems = [
  {
    title: 'Home',
  },
  {
    title: <a>Application Center</a>,
  },
  {
    title: <a>Application List</a>,
  },
  {
    title: 'An Application',
  },
];

const iconItems = [
  {
    href: '',
    title: <HomeOutlined />,
  },
  {
    href: '',
    title: (
      <>
        <UserOutlined />
        <span>Application List</span>
      </>
    ),
  },
  {
    title: 'Application',
  },
];

const separatorItems = [
  {
    title: 'Home',
  },
  {
    title: 'Application Center',
    href: '',
  },
  {
    title: 'Application List',
    href: '',
  },
  {
    title: 'An Application',
  },
];

const menuItems = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        General
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Layout
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    ),
  },
];

const BreadcrumbTemplate = (args: BreadcrumbProps) => {
  return (
    <>
      <Breadcrumb {...args} />
    </>
  );
};

export const BreadcrumbComponent = (args: BreadcrumbProps): ReactElement => <BreadcrumbTemplate {...args} />;

BreadcrumbComponent.args = {
  items: basicItems,
};

export const BreadcrumbIcon = (args: BreadcrumbProps): ReactElement => <BreadcrumbTemplate {...args} />;

BreadcrumbIcon.args = {
  items: iconItems,
};

export const BreadcrumbSeparator = (args: BreadcrumbProps): ReactElement => <BreadcrumbTemplate {...args} />;

BreadcrumbSeparator.args = {
  items: separatorItems,
  separator: '>',
};

export const BreadcrumbDropMenu = (args: BreadcrumbProps): ReactElement => <BreadcrumbTemplate {...args} />;

BreadcrumbDropMenu.args = {
  items: [
    {
      title: 'Ant Design',
    },
    {
      title: <a href="">Component</a>,
    },
    {
      title: <a href="">General</a>,
      menu: {items: menuItems},
    },
    {
      title: 'Button',
    },
  ],
};

export const BreadcrumbDebugRoutes = (args: BreadcrumbProps): ReactElement => <BreadcrumbTemplate {...args} />;

BreadcrumbDebugRoutes.args = {
  routes: [
    {
      path: '/home',
      breadcrumbName: 'Home',
    },
    {
      path: '/user',
      breadcrumbName: 'User',
      children: [
        {
          path: '/user1',
          breadcrumbName: 'User1',
        },
        {
          path: '/user2',
          breadcrumbName: 'User2',
        },
      ],
    },
  ],
};
