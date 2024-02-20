import React, {ReactElement} from 'react';
import {Tree as AntdTree} from 'antd';
import styles from './Tree.module.scss';
import classNames from 'classnames';
import {
  DataNode as AntdDataNode,
  DirectoryTreeProps as AntdDirectoryTreeProps,
  TreeProps as AntdTreeProps,
} from 'antd/es/tree';

export type TreeProps = AntdTreeProps;
export type DataNode = AntdDataNode;
export type DirectoryTreeProps = AntdDirectoryTreeProps;

export const Tree = (props: TreeProps): ReactElement => {
  return <AntdTree {...props} className={classNames(props.className, styles.tree)} />;
};

Tree.DirectoryTree = AntdTree.DirectoryTree;
