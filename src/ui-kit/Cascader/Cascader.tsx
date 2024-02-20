import React, {ReactElement} from 'react';
import {Cascader as AntCascader} from 'antd';
import styles from './Cascader.module.scss';
import classNames from 'classnames';
import {CascaderProps as AntdCascaderProps} from 'antd/es/cascader';

export type CascaderProps = AntdCascaderProps;

export const Cascader = (props: CascaderProps): ReactElement => {
  return <AntCascader {...props} className={classNames(props.className, styles.cascader)} />;
};

Cascader.Panel = AntCascader.Panel;
Cascader.SHOW_CHILD = AntCascader.SHOW_CHILD;
Cascader.SHOW_PARENT = AntCascader.SHOW_PARENT;
