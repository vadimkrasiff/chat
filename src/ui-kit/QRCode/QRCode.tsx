import React, {ReactElement} from 'react';
import {QRCode as AntdQRCode} from 'antd';
import styles from './QRCode.module.scss';
import classNames from 'classnames';
import {QRCodeProps as AntdQRCodeProps} from 'antd/es/qr-code/interface';

export type QRCodeProps = AntdQRCodeProps;

export const QRCode = (props: QRCodeProps): ReactElement => {
  return <AntdQRCode {...props} className={classNames(props.className, styles.qrCode)} />;
};
