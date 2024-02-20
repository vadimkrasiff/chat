import {Tabs} from 'antd';
import {TabsContent} from './TabsContent';
import {TabsSwitcher} from './TabsSwitcher';

export const SliceTabs = {
  Switcher: TabsSwitcher,
  Content: TabsContent,
  TabPane: Tabs.TabPane,
};

export type {TabsContentProps} from './TabsContent';
export type {TabsSwitcherProps} from './TabsSwitcher';
