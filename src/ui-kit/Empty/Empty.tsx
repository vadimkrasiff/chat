import React, {ReactElement} from 'react';
import {Empty as AntdEmpty} from 'antd';
import styles from './Empty.module.scss';
import classNames from 'classnames';
import {EmptyProps as AntdEmptyProps} from 'antd/es/empty';

export type EmptyProps = AntdEmptyProps;

export const Empty = (props: EmptyProps): ReactElement => {
  return <AntdEmpty {...props} className={classNames(props.className, styles.empty)} />;
};

Empty.PRESENTED_IMAGE_SIMPLE = AntdEmpty.PRESENTED_IMAGE_SIMPLE;
