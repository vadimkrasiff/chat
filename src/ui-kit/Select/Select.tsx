import React, {ReactElement} from 'react';
import {Select as AntdSelect} from 'antd';
import styles from './Select.module.scss';
import classNames from 'classnames';
import {SelectProps as AntdSelectProps} from 'antd/es/select';
import {DefaultOptionType as AntdDefaultOptionType} from 'antd/es/select';

export type SelectProps = AntdSelectProps;
export type SelectDefaultOptionType = AntdDefaultOptionType;

export const Select = (props: SelectProps): ReactElement => {
  return (
    <AntdSelect
      {...props}
      className={classNames(props.className, styles.select)}
      popupClassName={classNames(props.popupClassName, styles.popup)}
    />
  );
};

Select.Option = AntdSelect.Option;
