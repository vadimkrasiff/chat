import React, {ReactElement} from 'react';
import {Input as AntInput} from 'antd';
import styles from './Input.module.scss';
import classNames from 'classnames';
import {SearchProps as AntdSearchProps} from 'antd/es/input';
import {TextAreaProps as AntdTextAreaProps} from 'antd/es/input/TextArea';
import {PasswordProps as AntdPasswordProps} from 'antd/es/input/Password';
import {InputProps as AntdInputProps} from 'antd/es/input';

export type SearchProps = AntdSearchProps;
export type TextAreaProps = AntdTextAreaProps;
export type PasswordProps = AntdPasswordProps;
export type InputProps = AntdInputProps;

export const Input = (props: InputProps): ReactElement => {
  return <AntInput {...props} className={classNames(props.className, styles.input)} />;
};

Input.Password = AntInput.Password;
Input.Search = AntInput.Search;
Input.TextArea = AntInput.TextArea;
