import React, {ReactElement} from 'react';
import {Segmented as AntdSegmented} from 'antd';
import styles from './Segmented.module.scss';
import classNames from 'classnames';
import {SegmentedProps as AntdSegmentedProps} from 'antd/es/segmented';

export type SegmentedProps = AntdSegmentedProps;

export const Segmented = (props: Omit<SegmentedProps, 'ref'>): ReactElement => {
  return <AntdSegmented {...props} className={classNames(props.className, styles.segmented)} />;
};
