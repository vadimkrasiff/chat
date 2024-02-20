import React, {ReactElement} from 'react';
import {Switch as AntdSwitch} from 'antd';
import styles from './Switch.module.scss';
import classNames from 'classnames';
import {SwitchProps as AntdSwitchProps} from 'antd/es/switch';

export type SwitchProps = AntdSwitchProps;

export const Switch = (props: SwitchProps): ReactElement => {
  return <AntdSwitch {...props} className={classNames(props.className, styles.switch)} />;
};
