import React, {ReactElement} from 'react';
import {List as AntdList} from 'antd';
import styles from './List.module.scss';
import classNames from 'classnames';
import {ListProps as AntdListProps} from 'antd/es/list';

export type ListProps<T> = AntdListProps<T>;

export const List = (props: ListProps<any>): ReactElement => {
  return <AntdList {...props} className={classNames(props.className, styles.list)} />;
};

List.Item = AntdList.Item;
