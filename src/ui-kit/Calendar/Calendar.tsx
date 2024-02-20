import React, {ReactElement} from 'react';
import {Calendar as AntdCalendar} from 'antd';
import styles from './Calendar.module.scss';
import classNames from 'classnames';
import {CalendarProps as AntdCalendarProps} from 'antd/es/calendar';

export type CalendarProps<DateType> = AntdCalendarProps<DateType>;


export const Calendar = (props: CalendarProps<any>): ReactElement => {
  return <AntdCalendar {...props} className={classNames(props.className, styles.calendar)} />;
};
