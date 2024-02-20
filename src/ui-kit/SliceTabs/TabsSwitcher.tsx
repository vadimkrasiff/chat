import {Tabs} from 'antd';
import React, {ReactElement, useMemo} from 'react';

export interface TabsSwitcherProps {
  items: {
    key: string;
    label: string;
    hide?: boolean;
  }[];
  activeKey?: string | number;
  onChange: (activeKey: string) => void;
}

export const TabsSwitcher = ({items, activeKey, onChange}: TabsSwitcherProps): ReactElement => {
  const filteredItems = useMemo(() => {
    return items.filter((item) => !item.hide);
  }, [items]);
  return <Tabs items={filteredItems} activeKey={`${activeKey}`} onChange={onChange}></Tabs>;
};
