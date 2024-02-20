import React, {ReactElement} from 'react';
import {Progress as AntdProgress} from 'antd';
import styles from './Progress.module.scss';
import classNames from 'classnames';
import {ProgressProps as AntdProgressProps} from 'antd/es/progress';

export type ProgressProps = AntdProgressProps;

export const Progress = (props: ProgressProps): ReactElement => {
  return <AntdProgress {...props} className={classNames(props.className, styles.progress)} />;
};
