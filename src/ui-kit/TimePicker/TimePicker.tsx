import React, {ReactElement} from 'react';
import {TimePicker as AntdTimePicker} from 'antd';
import styles from './TimePicker.module.scss';
import classNames from 'classnames';
import {
  TimePickerProps as AntdTimePickerProps,
  TimeRangePickerProps as AntdTimeRangePickerProps,
} from 'antd/es/time-picker';

export type TimePickerProps = AntdTimePickerProps;
export type TimeRangePickerProps = AntdTimeRangePickerProps;

export const TimePicker = (props: TimePickerProps): ReactElement => {
  return <AntdTimePicker {...props} className={classNames(props.className, styles.timePicker)} />;
};

TimePicker.RangePicker = AntdTimePicker.RangePicker;
