import React, {ReactElement} from 'react';
import {Alert as AntdAlert} from 'antd';
import styles from './Alert.module.scss';
import classNames from 'classnames';
import {AlertProps as AntdAlertProps} from 'antd/es/alert';

export type AlertProps = AntdAlertProps;

export const Alert = (props: AlertProps): ReactElement => {
  return (
    <AntdAlert
      {...props}
      className={classNames(props.className, styles.alert, {
        [styles.showIcon]: props.showIcon,
      })}
    />
  );
};

Alert.ErrorBoundary = AntdAlert.ErrorBoundary;
