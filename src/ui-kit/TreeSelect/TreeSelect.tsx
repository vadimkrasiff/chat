import React, {ReactElement} from 'react';
import {TreeSelect as AntdTreeSelect} from 'antd';
import styles from './TreeSelect.module.scss';
import classNames from 'classnames';
import {TreeSelectProps as AntdTreeSelectProps} from 'antd/es/tree-select';

export type TreeSelectProps = AntdTreeSelectProps;

export const TreeSelect = (props: TreeSelectProps): ReactElement => {
  return <AntdTreeSelect {...props} className={classNames(props.className, styles.treeSelect)} />;
};
