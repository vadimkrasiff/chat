import React, {ReactElement} from 'react';
import {Rate as AntdRate} from 'antd';
import styles from './Rate.module.scss';
import classNames from 'classnames';
import {RateProps as AntdRateProps} from 'antd/es/rate';

export type RateProps = AntdRateProps;

export const Rate = (props: RateProps): ReactElement => {
  return <AntdRate {...props} className={classNames(props.className, styles.rate)} />;
};
