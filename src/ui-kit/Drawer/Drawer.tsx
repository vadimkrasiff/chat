import React, {ReactElement} from 'react';
import {Drawer as AntdDrawer} from 'antd';
import styles from './Drawer.module.scss';
import classNames from 'classnames';
import {DrawerProps as AntdDrawerProps} from 'antd/es/drawer';

export type DrawerProps = AntdDrawerProps;

export const Drawer = (props: DrawerProps): ReactElement => {
  return <AntdDrawer {...props} className={classNames(props.className, styles.drawer)} />;
};
