import React, {ReactElement} from 'react';

import {Watermark, WatermarkProps} from 'ui-kit';

export default {
  title: 'Example/Watermark',
  component: Watermark,
  argTypes: {},
};

const WatermarkTemplate = (args: WatermarkProps) => {
  return (
    <Watermark {...args}>
      <div style={{height: 500}} />
    </Watermark>
  );
};

export const WatermarkComponent = (args: WatermarkProps): ReactElement => <WatermarkTemplate {...args} />;

WatermarkComponent.args = {
  content: 'Watermark',
};

export const WatermarkMiltiLines = (args: WatermarkProps): ReactElement => <WatermarkTemplate {...args} />;

WatermarkMiltiLines.args = {
  content: ['Watermark 1', 'Watermark 2'],
};

export const WatermarkImage = (args: WatermarkProps): ReactElement => <WatermarkTemplate {...args} />;

WatermarkImage.args = {
  image: 'https://cdn-icons-png.flaticon.com/512/25/25333.png',
  height: 130,
  width: 130,
};
