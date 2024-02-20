import React, {ReactElement} from 'react';

import {TreeSelect, TreeSelectProps} from 'ui-kit';
import {CarryOutOutlined} from '@ant-design/icons';

export default {
  title: 'Example/TreeSelect',
  component: TreeSelect,
  argTypes: {
    status: {control: 'radio', options: ['warning', 'error', '']},
    size: {control: 'radio', options: ['middle', 'small', 'large']},
  },
};

const TreeSelectTemplate = (args: TreeSelectProps) => {
  return <TreeSelect style={{width: 200}} {...args} />;
};

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    icon: <CarryOutOutlined />,
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: <b style={{color: '#08c'}}>leaf3</b>,
          },
        ],
      },
    ],
  },
];

export const TreeSelectComponent = (args: TreeSelectProps): ReactElement => <TreeSelectTemplate {...args} />;

TreeSelectComponent.args = {
  treeData,
  showSearch: true,
  placeholder: 'Please select',
  allowClear: true,
  treeDefaultExpandAll: true,
};

export const TreeSelectMultiple = (args: TreeSelectProps): ReactElement => <TreeSelectTemplate {...args} />;

TreeSelectMultiple.args = {
  treeData,
  showSearch: true,
  placeholder: 'Please select',
  allowClear: true,
  treeDefaultExpandAll: true,
  multiple: true,
};

export const TreeSelectShowTreeLine = (args: TreeSelectProps): ReactElement => <TreeSelectTemplate {...args} />;

TreeSelectShowTreeLine.args = {
  treeIcon: true,
  treeLine: true,
  treeData,
  placeholder: 'Please select',
};

export const TreeSelectStatus = (args: TreeSelectProps): ReactElement => <TreeSelectTemplate {...args} />;

TreeSelectStatus.args = {
  status: 'error',
  treeData,
  placeholder: 'Please select',
};

export const TreeSelectSize = (args: TreeSelectProps): ReactElement => <TreeSelectTemplate {...args} />;

TreeSelectSize.args = {
  size: 'large',
  treeData,
  placeholder: 'Please select',
};
