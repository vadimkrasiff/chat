import React, {ReactElement} from 'react';
import {Divider as AntDivider} from 'antd';
import styles from './Divider.module.scss';
import classNames from 'classnames';
import {DividerProps as AntdDividerProps} from 'antd/es/divider';

export type DividerProps = AntdDividerProps;


export const Divider = (props: DividerProps): ReactElement => {
  return <AntDivider {...props} className={classNames(props.className, styles.divider)} />;
};
