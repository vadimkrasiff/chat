import React, {ReactElement} from 'react';
import {Popconfirm as AntdPopconfirm} from 'antd';
import styles from './Popconfirm.module.scss';
import classNames from 'classnames';
import {PopconfirmProps as AntdPopconfirmProps} from 'antd/es/popconfirm';

export type PopconfirmProps = AntdPopconfirmProps;

export const Popconfirm = (props: PopconfirmProps): ReactElement => {
  return <AntdPopconfirm {...props} className={classNames(props.className, styles.popconfirm)} />;
};
