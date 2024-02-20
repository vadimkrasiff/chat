import React, {ReactElement} from 'react';
import {Statistic as AntdStatistic} from 'antd';
import styles from './Statistic.module.scss';
import classNames from 'classnames';
import {StatisticProps as AntdStatisticProps, CountdownProps as AntdCountdownProps} from 'antd/es/statistic';

export type StatisticProps = AntdStatisticProps;
export type CountdownProps = AntdCountdownProps;

export const Statistic = (props: StatisticProps): ReactElement => {
  return <AntdStatistic {...props} className={classNames(props.className, styles.statistic)} />;
};

Statistic.Countdown = AntdStatistic.Countdown;
