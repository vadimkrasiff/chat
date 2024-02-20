import React, {ReactElement} from 'react';
import {Timeline as AntdTimeline} from 'antd';
import styles from './Timeline.module.scss';
import classNames from 'classnames';
import {TimelineProps as AntdTimelineProps} from 'antd/es/timeline';

export type TimelineProps = AntdTimelineProps;

export const Timeline = (props: TimelineProps): ReactElement => {
  return <AntdTimeline {...props} className={classNames(props.className, styles.timeline)} />;
};
