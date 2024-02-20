import {Tabs, TabsProps} from 'antd';
import {ReactElement, ReactNode, useCallback, useMemo} from 'react';
import type {Tab} from 'rc-tabs/lib/interface';
import styles from './sliceTabs.module.scss';
export interface TabContentItem {
  key: string;
  children: ReactNode;
}

export interface TabsContentProps {
  activeKey?: string | number;
  items?: TabContentItem[];
  children: ReactNode;
}

export const TabsContent = (props: TabsContentProps): ReactElement => {
  const prepareItems = useCallback((items: TabContentItem[]): Tab[] => {
    return items.map((item): Tab => ({...item, label: item.key}));
  }, []);

  const preparedProps = useMemo(() => {
    const preparedProps = {...props} as TabsProps;
    const activeKey = `${props.activeKey}`;
    if (preparedProps.items) {
      preparedProps.items = prepareItems(preparedProps.items as TabContentItem[]);
    }
    return {...preparedProps, activeKey};
  }, [prepareItems, props]);

  // return <div>{items.find(item => item.key === activeKey)?.children}</div>;
  return <Tabs {...preparedProps} className={styles.tabs} />;
};
