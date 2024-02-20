import React, {ReactElement} from 'react';

import {Dropdown, Space, message, MenuProps, DropdownProps} from 'ui-kit';
import {DownOutlined, SmileOutlined} from '@ant-design/icons';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  argTypes: {
    placement: {
      control: 'select',
      options: ['bottom', 'bottomLeft', 'bottomRight', 'top', 'topLeft', 'topRight'],
    },
    arrow: {control: 'boolean'},
    open: {control: 'boolean'},
    loading: {control: 'boolean'},
    autoAdjustOverflow: {control: 'boolean'},
    autoFocus: {control: 'boolean'},
    disabled: {control: 'boolean'},
    size: {
      control: {
        type: 'select',
        options: ['large', 'middle', 'small'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['primary', 'default'],
      },
    },
    danger: {control: 'boolean'},
    icon: {control: 'object'},
    trigger: {
      control: 'select',
      options: [['hover'], ['click'], ['contextMenu']],
      defaultValue: ['hover'],
    },
  },
};

const DropdownTemplate = (args: DropdownProps) => {
  return (
    <div style={{height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Dropdown {...args}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

const DropdownButtonTemplate = (args: DropdownProps) => {
  return (
    <Space wrap>
      <Dropdown.Button {...args}>Dropdown</Dropdown.Button>
    </Space>
  );
};

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    danger: true,
    label: 'a danger item',
  },
];

const itemsCascading: MenuProps['items'] = [
  {
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },
    ],
  },
  {
    key: '2',
    label: 'sub menu',
    children: [
      {
        key: '2-1',
        label: '3rd menu item',
      },
      {
        key: '2-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '3',
    label: 'disabled sub menu',
    disabled: true,
    children: [
      {
        key: '3-1',
        label: '5d menu item',
      },
      {
        key: '3-2',
        label: '6th menu item',
      },
    ],
  },
];

export const DropdownComponent = (args: DropdownProps): ReactElement => <DropdownTemplate {...args} />;

DropdownComponent.args = {
  menu: {items},
};

export const DropdownPlacement = (args: DropdownProps): ReactElement => <DropdownTemplate {...args} />;

DropdownPlacement.args = {
  menu: {items},
  placement: 'bottomLeft',
};

export const DropdownArrow = (args: DropdownProps): ReactElement => <DropdownTemplate {...args} />;

DropdownArrow.args = {
  menu: {items},
  placement: 'bottomLeft',
  arrow: true,
};

export const DropdownTrigger = (args: DropdownProps): ReactElement => <DropdownTemplate {...args} />;

DropdownTrigger.args = {
  menu: {items},
  trigger: ['click'],
};

export const DropdownCascading = (args: DropdownProps): ReactElement => <DropdownTemplate {...args} />;

DropdownCascading.args = {
  menu: {items: itemsCascading},
};

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

export const DropdownButton = (args: DropdownProps): ReactElement => <DropdownButtonTemplate {...args} />;

DropdownButton.args = {
  menu: {items, onClick: handleMenuClick},
  onClick: handleButtonClick,
};
