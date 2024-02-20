import React, {ReactElement} from 'react';
import {Transfer as AntdTransfer} from 'antd';
import styles from './Transfer.module.scss';
import classNames from 'classnames';
import type {TransferDirection as AntdTransferDirection} from 'antd/es/transfer';
import {TransferProps as AntdTransferProps} from 'antd/es/transfer';

export type TransferProps<RecordType> = AntdTransferProps<RecordType>;
export type TransferDirection = AntdTransferDirection;

export const Transfer = (props: TransferProps<any>): ReactElement => {
  return <AntdTransfer {...props} className={classNames(props.className, styles.transfer)} />;
};
