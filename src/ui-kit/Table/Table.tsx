import React, {ReactElement, useCallback, useMemo, useState} from 'react';
import {Table as AntTable} from 'antd';
import styles from './Table.module.scss';
import classNames from 'classnames';
import {TableProps as AntdTableProps, ColumnsType as AntdColumnsType} from 'antd/es/table';

export type TableProps<T> = AntdTableProps<T>;
export type ColumnsType<RecordType> = AntdColumnsType<RecordType>;

export const Table = ({pagination: propsPagination, ...props}: TableProps<any>): ReactElement => {
  const [paginationSize, setPaginationSize] = useState((propsPagination && propsPagination.pageSize) || 10);
  const paginationTotal = useMemo(
    () => (propsPagination && propsPagination.total) || (props.dataSource && props.dataSource.length) || 0,
    [props.dataSource, propsPagination]
  );

  const onChangePagination = useCallback(
    (page: number, pageSize: number) => {
      setPaginationSize(pageSize);
      if (propsPagination && propsPagination.onChange) {
        propsPagination.onChange(page, pageSize);
      }
    },
    [propsPagination]
  );
  const pagination = useMemo(() => {
    console.log('pagination', paginationSize, paginationTotal);
    if (paginationTotal <= paginationSize) {
      return {
        ...propsPagination,
        className: styles.hidePagination,
      };
    }
    return propsPagination;
  }, [paginationSize, paginationTotal, propsPagination]);

  return (
    <AntTable
      {...props}
      className={classNames(props.className, styles.tabs)}
      pagination={{...pagination, onChange: onChangePagination}}
    />
  );
};

const {Column, ColumnGroup, Summary, SELECTION_ALL, SELECTION_COLUMN, SELECTION_INVERT, SELECTION_NONE, EXPAND_COLUMN} =
  AntTable;

Table.Column = Column;
Table.ColumnGroup = ColumnGroup;
Table.Summary = Summary;
Table.SELECTION_ALL = SELECTION_ALL;
Table.SELECTION_COLUMN = SELECTION_COLUMN;
Table.SELECTION_INVERT = SELECTION_INVERT;
Table.SELECTION_NONE = SELECTION_NONE;
Table.EXPAND_COLUMN = EXPAND_COLUMN;
