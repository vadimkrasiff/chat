import React, {ReactElement} from 'react';
import {Watermark as AntdWatermark} from 'antd';
import styles from './Watermark.module.scss';
import classNames from 'classnames';
import {WatermarkProps as AntdWatermarkProps} from 'antd/es/watermark';

export type WatermarkProps = AntdWatermarkProps;

export const Watermark = (props: WatermarkProps): ReactElement => {
  return <AntdWatermark {...props} className={classNames(props.className, styles.watermark)} />;
};
