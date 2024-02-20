import React, {ReactElement} from 'react';

import {Divider, Slider, SliderMarks, SliderProps, message} from 'ui-kit';

export default {
  title: 'Example/Slider',
  component: Slider,
  argTypes: {},
};
const SliderTemplate = (args: SliderProps) => {
  return (
    <div style={{marginTop: 100}}>
      <Slider {...args} />
    </div>
  );
};

export const SliderComponent = (args: SliderProps): ReactElement => <SliderTemplate {...args} />;

export const SliderTooltip = (args: SliderProps): ReactElement => <SliderTemplate {...args} />;

SliderTooltip.args = {
  tooltip: (value: number) => `${value}%`,
};

export const SliderEvent = (args: SliderProps): ReactElement => {
  return <SliderTemplate {...args} />;
};

const onChange = (value: number | number[]) => {
  message.info('onChange: ' + value);
};

const onChangeComplete = (value: number | number[]) => {
  console.log('onChangeComplete: ' + value);
};

SliderEvent.args = {
  onChange,
  onChangeComplete,
  defaultValue: [20, 50],
  step: 10,
  range: true,
};

export const SliderGraduated = (args: SliderProps[]): ReactElement => {
  return (
    <div>
      <Divider>included=true</Divider>
      <Slider {...args[0]} />
      <Slider {...args[1]} />
      <Divider>included=false</Divider>
      <Slider {...args[2]} />
      <Divider>marks & step</Divider>
      <Slider {...args[3]} />
      <Divider>step=null</Divider>
      <Slider {...args[4]} />
    </div>
  );
};

const marks: SliderMarks = {
  0: '0',
  26: '26',
  37: '37',
  100: {
    style: {
      color: '#f50',
    },
    label: <b>100</b>,
  },
};

SliderGraduated.args = [
  {marks, defaultValue: 37},
  {marks, defaultValue: [26, 37], range: true},
  {marks, defaultValue: 37, included: false},
  {marks, defaultValue: 37, step: 10},
  {marks, defaultValue: 37, step: null},
];

export const SliderVertical = (args: SliderProps): ReactElement => <SliderTemplate {...args} />;
const style: React.CSSProperties = {
  display: 'inline-block',
  height: 300,
  marginLeft: 70,
};

SliderVertical.args = {
  vertical: true,
  style,
};

export const SliderVisibleTooltip = (args: SliderProps): ReactElement => <SliderTemplate {...args} />;

SliderVisibleTooltip.args = {
  tooltip: {open: true},
};

export const SliderReverse = (args: SliderProps): ReactElement => <SliderTemplate {...args} />;

SliderReverse.args = {
  reverse: true,
};

export const SliderDraggableTrack = (args: SliderProps): ReactElement => <SliderTemplate {...args} />;

SliderDraggableTrack.args = {
  range: {draggableTrack: true},
  defaultValue: [20, 50],
};
