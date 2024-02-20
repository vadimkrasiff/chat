import React, {ReactElement} from 'react';
import {FloatButton as AntFloatButton} from 'antd';
import styles from './FloatButton.module.scss';
import classNames from 'classnames';
import {FloatButtonProps as AntdFloatButtonProps, FloatButtonGroupProps as AntdFloatButtonGroupProps, BackTopProps as AntdBackTopProps} from 'antd/es/float-button/interface';

export type FloatButtonProps = AntdFloatButtonProps;
export type FloatButtonGroupProps = AntdFloatButtonGroupProps;
export type BackTopProps = AntdBackTopProps;


export const FloatButton = (props: FloatButtonProps): ReactElement => {
  return <AntFloatButton {...props} className={classNames(props.className, styles.floatButton)} />;
};

FloatButton.Group = AntFloatButton.Group;
FloatButton.BackTop = AntFloatButton.BackTop;
