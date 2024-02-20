import React, {ReactElement} from 'react';
import {Tag as AntdTag} from 'antd';
import styles from './Tag.module.scss';
import classNames from 'classnames';
import {TagProps as AntdTagProps} from 'antd/es/tag';

export type TagProps = AntdTagProps;

export const Tag = (props: TagProps): ReactElement => {
  return <AntdTag {...props} className={classNames(props.className, styles.tag)} />;
};

Tag.CheckableTag = AntdTag.CheckableTag;
