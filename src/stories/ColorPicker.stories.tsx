import React, {ReactElement} from 'react';

import {ColorPicker, Divider, ColorPickerProps} from 'ui-kit';

export default {
  title: 'Example/ColorPicker',
  component: ColorPicker,
  argTypes: {},
};

const ColorPickerTemplate = (args: ColorPickerProps) => {
  return (
    <div
      style={{
        width: 'calc(100vw - 2rem)',
        height: 'calc(100vh - 60px - 2rem)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ColorPicker {...args} />
    </div>
  );
};

export const ColorPickerComponent = (args: ColorPickerProps): ReactElement => <ColorPickerTemplate {...args} />;

export const ColorPickerSize = (args: ColorPickerProps): ReactElement => {
  return (
    <>
      <Divider>{args.size}</Divider>
      <ColorPickerTemplate {...args} />
    </>
  );
};

ColorPickerSize.args = {
  size: 'small',
};

export const ColorPickerShowText = (args: ColorPickerProps): ReactElement => <ColorPickerTemplate {...args} />;

ColorPickerShowText.args = {
  showText: true,
};

export const ColorPickerDisable = (args: ColorPickerProps): ReactElement => <ColorPickerTemplate {...args} />;

ColorPickerDisable.args = {
  disabled: true,
};

export const ColorPickerClearColor = (args: ColorPickerProps): ReactElement => <ColorPickerTemplate {...args} />;

ColorPickerClearColor.args = {
  allowClear: true,
};

export const ColorPickerHoverTrigger = (args: ColorPickerProps): ReactElement => <ColorPickerTemplate {...args} />;

ColorPickerHoverTrigger.args = {
  trigger: 'hover',
};

export const ColorPickerFormat = (args: ColorPickerProps): ReactElement => {
  return (
    <>
      <ColorPickerTemplate {...args} format={'hex'} />
      <ColorPickerTemplate {...args} format={'hsb'} />
      <ColorPickerTemplate {...args} format={'rgb'} />
    </>
  );
};

ColorPickerFormat.args = {
  showText: true,
};

const presets = [
  {
    label: 'Recommended',
    colors: [
      '#000000',
      '#000000E0',
      '#000000A6',
      '#00000073',
      '#00000040',
      '#00000026',
      '#0000001A',
      '#00000012',
      '#0000000A',
      '#00000005',
      '#F5222D',
      '#FA8C16',
      '#FADB14',
      '#8BBB11',
      '#52C41A',
      '#13A8A8',
      '#1677FF',
      '#2F54EB',
      '#722ED1',
      '#EB2F96',
      '#F5222D4D',
      '#FA8C164D',
      '#FADB144D',
      '#8BBB114D',
      '#52C41A4D',
      '#13A8A84D',
      '#1677FF4D',
      '#2F54EB4D',
      '#722ED14D',
      '#EB2F964D',
    ],
  },
  {
    label: 'Recent',
    colors: [],
  },
];

export const ColorPickerPresets = (args: ColorPickerProps): ReactElement => <ColorPickerTemplate {...args} />;

ColorPickerPresets.args = {
  presets,
};
