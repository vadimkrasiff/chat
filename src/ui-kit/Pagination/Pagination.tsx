import React, {ReactElement} from 'react';
import {Pagination as AntPagination} from 'antd';
import styles from './Pagination.module.scss';
import classNames from 'classnames';
import {PaginationProps as AntdPaginationProps} from 'antd/es/pagination';

export type PaginationProps = AntdPaginationProps;

export const Pagination = (props: PaginationProps): ReactElement => {
  return <AntPagination {...props} className={classNames(props.className, styles.pagination)} />;
};
