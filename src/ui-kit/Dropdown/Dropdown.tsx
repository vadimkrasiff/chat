import React, {ReactElement} from 'react';
import {Dropdown as AntDropdown} from 'antd';
import {DropdownProps as AntdDropdownProps} from 'antd/es/dropdown';
import classNames from 'classnames';
import styles from './Dropdown.module.scss';

export type DropdownProps = AntdDropdownProps;

export const Dropdown = (props: DropdownProps): ReactElement => {
  return <AntDropdown {...props} className={classNames(props.className, styles.drawer)} />;
};

Dropdown.Button = AntDropdown.Button;
