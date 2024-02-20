import React, {ReactElement} from 'react';
import {Slider as AntdSlider} from 'antd';
import styles from './Slider.module.scss';
import classNames from 'classnames';
import {
  SliderBaseProps,
  SliderRangeProps,
  SliderSingleProps,
  SliderTooltipProps,
  SliderMarks as AntdSliderMarks,
} from 'antd/es/slider';

export type SliderProps = SliderBaseProps | SliderRangeProps | SliderSingleProps | SliderTooltipProps;

export type SliderMarks = AntdSliderMarks;

export const Slider = (props: SliderProps): ReactElement => {
  return <AntdSlider {...props} className={classNames(props.className, styles.slider)} />;
};
