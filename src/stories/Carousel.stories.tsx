import React, {ReactElement} from 'react';

import {CarouselProps, Carousel} from 'ui-kit';

export default {
  title: 'Example/Carousel',
  component: Carousel,
  argTypes: {
    dotPosition: {control: 'radio', options: ['top', 'bottom', 'left', 'right']},
    effect: {control: 'radio', options: ['scrollx', 'fade']},
  },
};

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselTemplate = (args: CarouselProps) => {
  return (
    <Carousel {...args}>
      {Array.from({length: 4}).map((_, i) => (
        <div key={i}>
          <div style={{...contentStyle}}>{i}</div>
        </div>
      ))}
    </Carousel>
  );
};

export const CarouselComponent = (args: CarouselProps): ReactElement => <CarouselTemplate {...args} />;

export const CarouselPosition = (args: CarouselProps): ReactElement => <CarouselTemplate {...args} />;

CarouselPosition.args = {
  dotPosition: 'top',
};

export const CarouselAutoplay = (args: CarouselProps): ReactElement => <CarouselTemplate {...args} />;

CarouselAutoplay.args = {
  autoplay: true,
};

export const CarouselEffect = (args: CarouselProps): ReactElement => <CarouselTemplate {...args} />;

CarouselEffect.args = {
  effect: 'fade',
};
