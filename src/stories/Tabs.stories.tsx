import React, {ReactElement, useRef, useState} from 'react';

import {Button, Tabs, TabsProps} from 'ui-kit';

export default {
  title: 'Example/Tabs',
  component: Tabs,
  argTypes: {
    tabPosition: {control: 'radio', options: ['top', 'bottom', 'left', 'right']},
    size: {control: 'radio', options: ['middle', 'small', 'large']},
    type: {control: 'radio', options: ['line', 'card', 'editable-card']},
  },
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

export const TabsComponent = (args: TabsProps): ReactElement => <Tabs {...args} />;

TabsComponent.args = {
  items,
};

export const TabsCentered = (args: TabsProps): ReactElement => <Tabs {...args} />;

TabsCentered.args = {
  items,
  centered: true,
};

export const TabsTabPosition = (args: TabsProps): ReactElement => <Tabs {...args} />;

TabsTabPosition.args = {
  items,
  tabPosition: 'left',
};

export const TabsExtra = (args: TabsProps): ReactElement => <Tabs {...args} />;

TabsExtra.args = {
  items,
  tabBarExtraContent: <Button>Extra Action</Button>,
};

export const TabsType = (args: TabsProps): ReactElement => <Tabs {...args} />;

TabsType.args = {
  type: 'card',
  items,
};

export const TabsSize = (args: TabsProps): ReactElement => <Tabs {...args} />;

TabsSize.args = {
  size: 'large',
  items,
};

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const initialItems = [
  {label: 'Tab 1', children: 'Content of Tab 1', key: '1'},
  {label: 'Tab 2', children: 'Content of Tab 2', key: '2'},
  {
    label: 'Tab 3',
    children: 'Content of Tab 3',
    key: '3',
    closable: false,
  },
];

export const AddTab = (): ReactElement => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({label: 'New Tab', children: 'Content of new Tab', key: newActiveKey});
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (targetKey: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return <Tabs type="editable-card" onChange={onChange} activeKey={activeKey} onEdit={onEdit} items={items} />;
};
