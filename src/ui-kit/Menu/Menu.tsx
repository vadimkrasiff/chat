import React, {ReactElement} from 'react';
import {Menu as AntMenu} from 'antd';
import styles from './Menu.module.scss';
import classNames from 'classnames';
import {MenuProps as AntdMenuProps} from 'antd/es/menu';
import {
  MenuItemGroupType as AntdMenuItemGroupType,
  MenuItemType as AntdMenuItemType,
} from 'antd/es/menu/hooks/useItems';

export type MenuItemGroupType = AntdMenuItemGroupType;
export type MenuItemType = AntdMenuItemType;

export type MenuProps = AntdMenuProps;

export const Menu = (props: MenuProps): ReactElement => {
  return <AntMenu {...props} className={classNames(props.className, styles.menu)} />;
};

Menu.Item = AntMenu.Item;
