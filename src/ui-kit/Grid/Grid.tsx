import React, {ReactElement} from 'react';
import {Col as AntCol, Row as AntRow, Grid as AntdGrid} from 'antd';
import styles from './Grid.module.scss';
import classNames from 'classnames';
import {ColProps as AntColProps, RowProps as AntdRowProps} from 'antd/es/grid';

export type RowProps = AntdRowProps;

export type ColProps = AntColProps;


export const Col = (props: ColProps): ReactElement => {
  return <AntCol {...props} className={classNames(props.className, styles.col)} />;
};

export const Row = (props: RowProps): ReactElement => {
  return <AntRow {...props} className={classNames(props.className, styles.row)} />;
};

export const Grid = AntdGrid;
