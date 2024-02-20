import React, {ReactElement} from 'react';
import {App as AntdApp} from 'antd';
import styles from './App.module.scss';
import classNames from 'classnames';
import {AppProps as AntdAppProps} from 'antd/es/app';

export type AppProps = AntdAppProps;

export const App = (props: AppProps): ReactElement => {
  return <AntdApp {...props} className={classNames(props.className, styles.app)} />;
};

App.useApp = AntdApp.useApp;
