import React, {ReactElement, useState} from 'react';

import {Radio, RadioChangeEvent, RadioProps} from 'ui-kit';

export default {
  title: 'Example/Radio',
  component: Radio,
  argTypes: {
    optionType: {control: 'radio', options: ['default', 'button']},
    buttonStyle: {control: 'radio', options: ['outline', 'solid']},
    size: {control: 'radio', options: ['large', 'middle', 'small']},
  },
};

const RadioTemplate = (props: RadioProps) => {
  return <Radio {...props}>Radio</Radio>;
};

const RadioGroupTemplate = (props: RadioProps) => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group {...props} onChange={onChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  );
};

export const RadioComponent = (args: RadioProps): ReactElement => <RadioTemplate {...args} />;
export const RadioDisabled = (args: RadioProps): ReactElement => <RadioTemplate {...args} />;

RadioDisabled.args = {
  disabled: true,
};

export const RadioGroup = (args: RadioProps): ReactElement => <RadioGroupTemplate {...args} />;

export const RadioGroupOptionType = (args: RadioProps): ReactElement => <RadioGroupTemplate {...args} />;

RadioGroupOptionType.args = {
  optionType: 'button',
  buttonStyle: 'solid',
};

export const RadioGroupSize = (args: RadioProps): ReactElement => <RadioGroupTemplate {...args} />;

RadioGroupSize.args = {
  optionType: 'button',
  size: 'large',
};
