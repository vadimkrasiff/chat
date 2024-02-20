import React, {ReactElement} from 'react';
import {Layout as AntLayout} from 'antd';
import styles from './Layout.module.scss';
import classNames from 'classnames';
import {SiderProps as AntdSiderProps} from 'antd/lib';
import {LayoutProps as AntdLayoutProps} from 'antd/es/layout';

export type LayoutProps = AntdLayoutProps;
export type SiderProps = AntdSiderProps;

export const Layout = (props: LayoutProps): ReactElement => {
  return <AntLayout {...props} className={classNames(props.className, styles.layout)} />;
};

Layout.Sider = AntLayout.Sider;
