import React, {ReactElement} from 'react';
import {Carousel as AntdCarousel} from 'antd';
import styles from './Carousel.module.scss';
import classNames from 'classnames';
import {CarouselProps as AntdCarouselProps} from 'antd/es/carousel';

export type CarouselProps = AntdCarouselProps;

export const Carousel = (props: CarouselProps): ReactElement => {
  return <AntdCarousel {...props} className={classNames(props.className, styles.carousel)} />;
};
