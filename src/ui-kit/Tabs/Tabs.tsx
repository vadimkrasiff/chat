import React, {ReactElement} from 'react';
import {Tabs as AntTabs} from 'antd';
import styles from './Tabs.module.scss';
import classNames from 'classnames';
import type {TabsProps as AntdTabsProps} from 'antd';

export type TabsProps = AntdTabsProps;

export const Tabs = (props: TabsProps): ReactElement => {
  return <AntTabs {...props} className={classNames(props.className, styles.tabs)} />;
};
Tabs.TabPane = AntTabs.TabPane;
