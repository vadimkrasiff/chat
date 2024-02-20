import React, {ReactElement} from 'react';
import {DatePicker as AntDatePicker} from 'antd';
import styles from './DatePicker.module.scss';
import classNames from 'classnames';
import {DatePickerProps as AntdDatePickerProps, RangePickerProps as AntdRangePickerProps} from 'antd/es/date-picker';
import antdLocale from 'antd/es/date-picker/locale/ru_RU';

export const locale = antdLocale;

export type DatePickerProps = AntdDatePickerProps;
export type RangePickerProps = AntdRangePickerProps;

export const DatePicker = (props: DatePickerProps): ReactElement => {
  return <AntDatePicker {...props} className={classNames(props.className, styles.datePicker)} />;
};

DatePicker.RangePicker = AntDatePicker.RangePicker;
