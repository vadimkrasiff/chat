import React, {ReactElement} from 'react';
import {ColorPicker as AntColorPicker} from 'antd';
import styles from './ColorPicker.module.scss';
import classNames from 'classnames';
import {ColorPickerProps as AntdColorPickerProps} from 'antd/es/color-picker';

export type ColorPickerProps = AntdColorPickerProps;

export const ColorPicker = (props: ColorPickerProps): ReactElement => {
  return <AntColorPicker {...props} className={classNames(props.className, styles.colorPicker)} />;
};
