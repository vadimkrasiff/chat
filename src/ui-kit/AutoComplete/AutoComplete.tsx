import React, {ReactElement} from 'react';
import {AutoComplete as AntAutoComplete} from 'antd';
import styles from './AutoComplete.module.scss';
import classNames from 'classnames';
import {AutoCompleteProps as AntdAutoCompleteProps} from 'antd/es/auto-complete';
import {DefaultOptionType as AntdDefaultOptionType} from 'antd/es/select';

export type AutoCompleteDefaultOptionType = AntdDefaultOptionType;
export type AutoCompleteProps = AntdAutoCompleteProps;

export const AutoComplete = (props: AutoCompleteProps): ReactElement => {
  return <AntAutoComplete {...props} className={classNames(props.className, styles.autoComplete)} />;
};
