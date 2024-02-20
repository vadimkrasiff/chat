import React, {ReactElement} from 'react';

import {Divider, Tree, DataNode, DirectoryTreeProps, TreeProps} from 'ui-kit';
import {CarryOutOutlined, FormOutlined} from '@ant-design/icons';

const {DirectoryTree} = Tree;
export default {
  title: 'Example/Tree',
  component: Tree,
  argTypes: {},
};

const TreeTemplate = (args: TreeProps) => {
  return <Tree {...args} />;
};

const DirectoryTreeTemplate = (args: DirectoryTreeProps) => {
  return <DirectoryTree {...args} />;
};

const treeData: DataNode[] = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          {title: '0-0-0-0', key: '0-0-0-0'},
          {title: '0-0-0-1', key: '0-0-0-1'},
          {title: '0-0-0-2', key: '0-0-0-2'},
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          {title: '0-0-1-0', key: '0-0-1-0'},
          {title: '0-0-1-1', key: '0-0-1-1'},
          {title: '0-0-1-2', key: '0-0-1-2'},
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      {title: '0-1-0-0', key: '0-1-0-0'},
      {title: '0-1-0-1', key: '0-1-0-1'},
      {title: '0-1-0-2', key: '0-1-0-2'},
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];

export const TreeComponent = (args: TreeProps): ReactElement => <TreeTemplate {...args} />;

TreeComponent.args = {
  treeData,
  checkable: true,
};

const treeDataIcon: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        icon: <CarryOutOutlined />,
        children: [
          {title: 'leaf', key: '0-0-0-0', icon: <CarryOutOutlined />},
          {
            title: (
              <>
                <div>multiple line title</div>
                <div>multiple line title</div>
              </>
            ),
            key: '0-0-0-1',
            icon: <CarryOutOutlined />,
          },
          {title: 'leaf', key: '0-0-0-2', icon: <CarryOutOutlined />},
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        icon: <CarryOutOutlined />,
        children: [{title: 'leaf', key: '0-0-1-0', icon: <CarryOutOutlined />}],
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
        icon: <CarryOutOutlined />,
        children: [
          {title: 'leaf', key: '0-0-2-0', icon: <CarryOutOutlined />},
          {
            title: 'leaf',
            key: '0-0-2-1',
            icon: <CarryOutOutlined />,
            switcherIcon: <FormOutlined />,
          },
        ],
      },
    ],
  },
  {
    title: 'parent 2',
    key: '0-1',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'parent 2-0',
        key: '0-1-0',
        icon: <CarryOutOutlined />,
        children: [
          {title: 'leaf', key: '0-1-0-0', icon: <CarryOutOutlined />},
          {title: 'leaf', key: '0-1-0-1', icon: <CarryOutOutlined />},
        ],
      },
    ],
  },
];

export const TreeWithLineAndIcon = (args: TreeProps): ReactElement => <TreeTemplate {...args} />;

TreeWithLineAndIcon.args = {
  treeData: treeDataIcon,
  showLine: true,
  showIcon: true,
};

export const DirectoryTreeComponent = (args: DirectoryTreeProps): ReactElement => (
  <>
    <Divider>Press ctrl + tree</Divider>
    <DirectoryTreeTemplate {...args} />
  </>
);

DirectoryTreeComponent.args = {
  treeData,
  multiple: true,
  defaultExpandAll: true,
};
