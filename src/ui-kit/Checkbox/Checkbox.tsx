import React, {ReactElement} from 'react';
import {Checkbox as AntCheckbox} from 'antd';
import styles from './Checkbox.module.scss';
import classNames from 'classnames';
import {CheckboxProps as AntdCheckboxProps, CheckboxGroupProps as AntdCheckboxGroupProps} from 'antd/es/checkbox';

export type CheckboxGroupProps = AntdCheckboxGroupProps;
export type CheckboxProps = AntdCheckboxProps;

export const Checkbox = (props: CheckboxProps): ReactElement => {
  return <AntCheckbox {...props} className={classNames(props.className, styles.checkbox)} />;
};

Checkbox.Group = AntCheckbox.Group;
