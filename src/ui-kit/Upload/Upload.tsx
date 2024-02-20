import React, {ReactElement} from 'react';
import {Upload as AntdUpload} from 'antd';
import styles from './Upload.module.scss';
import classNames from 'classnames';
import {
  RcFile as AntdRcFile,
  UploadChangeParam as AntdUploadChangeParam,
  UploadFile as AntdUploadFile,
  UploadProps as AntdUploadProps,
} from 'antd/es/upload';

export type UploadProps = AntdUploadProps;
export type RcFile = AntdRcFile;
export type UploadChangeParam<T> = AntdUploadChangeParam<T>;
export type UploadFile = AntdUploadFile;

export const Upload = (props: UploadProps): ReactElement => {
  return <AntdUpload {...props} className={classNames(props.className, styles.upload)} />;
};

Upload.Dragger = AntdUpload.Dragger;
