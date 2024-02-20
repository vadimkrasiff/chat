import React, {ReactElement} from 'react';
import {Spin as AntdSpin} from 'antd';
import styles from './Spin.module.scss';
import classNames from 'classnames';
import {SpinProps as AntdSpinProps} from 'antd/es/spin';

export type SpinProps = AntdSpinProps;

export const Spin = (props: SpinProps): ReactElement => {
  return <AntdSpin {...props} className={classNames(props.className, styles.spin)} />;
};

Spin.setDefaultIndicator = AntdSpin.setDefaultIndicator;
