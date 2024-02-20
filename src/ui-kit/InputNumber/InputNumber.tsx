import React, {ReactElement} from 'react';
import {InputNumber as AntInputNumber} from 'antd';
import styles from './InputNumber.module.scss';
import classNames from 'classnames';
import {InputNumberProps as AntdInputNumberProps} from 'antd/es/input-number';

export type InputNumberProps = AntdInputNumberProps;


export const InputNumber = (props: InputNumberProps): ReactElement => {
  return <AntInputNumber {...props} className={classNames(props.className, styles.inputNumber)} />;
};
