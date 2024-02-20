import React, {ReactElement} from 'react';
import {Tour as AntdTour} from 'antd';
import styles from './Tour.module.scss';
import classNames from 'classnames';
import type {TourProps as AntdTourProps} from 'antd';

export type TourProps = AntdTourProps;

export const Tour = (props: TourProps): ReactElement => {
  return <AntdTour {...props} className={classNames(props.className, styles.tour)} />;
};
