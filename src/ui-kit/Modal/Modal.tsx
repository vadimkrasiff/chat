import React, {ReactElement} from 'react';
import {Modal as AntdModal} from 'antd';
import styles from './Modal.module.scss';
import classNames from 'classnames';
import {ModalProps as AntdModalProps} from 'antd/es/modal';

export type ModalProps = AntdModalProps;

export const Modal = (props: ModalProps): ReactElement => {
  return <AntdModal {...props} className={classNames(props.className, styles.modal)} />;
};

Modal.info = AntdModal.info;
Modal.success = AntdModal.success;
Modal.error = AntdModal.error;
Modal.warning = AntdModal.warning;
Modal.confirm = AntdModal.confirm;
Modal.useModal = AntdModal.useModal;
