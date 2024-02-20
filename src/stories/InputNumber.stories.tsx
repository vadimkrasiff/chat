import React, {ReactElement, useState} from 'react';
import {InputNumber, InputNumberProps, Select} from 'ui-kit';
import {UserOutlined} from '@ant-design/icons';

const {Option} = Select;

export default {
  title: 'Example/InputNumber',
  component: InputNumber,
  argTypes: {
    size: {control: 'radio', options: ['default', 'small', 'large']},
    status: {control: 'radio', options: ['warning', 'error', '']},
    bordered: {control: 'boolean'},
    disabled: {control: 'boolean'},
    keyboard: {control: 'boolean'},
  },
};

const InputNumberTemplate = (args: InputNumberProps) => {
  return <InputNumber {...args} />;
};

export const InputNumberComponent = (args: InputNumberProps): ReactElement => <InputNumberTemplate {...args} />;

InputNumberComponent.args = {
  min: 1,
  max: 10,
  defaultValue: 3,
};

export const InputNumberSize = (args: InputNumberProps): ReactElement => <InputNumberTemplate {...args} />;

InputNumberSize.args = {
  size: 'large',
};

export const InputNumberPrePostTab = (args: InputNumberProps): ReactElement => <InputNumberTemplate {...args} />;

const addonAfter = (
  <Select defaultValue="USD" style={{width: 60}}>
    <Option value="USD">$</Option>
    <Option value="EUR">€</Option>
    <Option value="GBP">£</Option>
    <Option value="CNY">¥</Option>
  </Select>
);

const addonBefore = (
  <Select defaultValue="add" style={{width: 60}}>
    <Option value="add">+</Option>
    <Option value="minus">-</Option>
  </Select>
);

InputNumberPrePostTab.args = {
  addonBefore,
  addonAfter,
};

export const InputNumberDisabled = (args: InputNumberProps): ReactElement => <InputNumberTemplate {...args} />;

InputNumberDisabled.args = {
  disabled: true,
};

export const InputNumberBorderless = (args: InputNumberProps): ReactElement => <InputNumberTemplate {...args} />;

InputNumberBorderless.args = {
  bordered: true,
};

export const InputNumberOutOfRange = (args: InputNumberProps): ReactElement => {
  const [value, setValue] = useState<string | number | null>('99');

  return <InputNumber {...args} value={value} onChange={setValue} />;
};

InputNumberOutOfRange.args = {
  min: 1,
  max: 10,
};

export const InputNumberHighPrecisionDecimals = (args: InputNumberProps): ReactElement => (
  <InputNumberTemplate {...args} />
);

InputNumberHighPrecisionDecimals.args = {
  stringMode: true,
  step: 0.00000000000001,
  min: 0,
  max: 10,
};

export const InputNumberFormatter = (args: InputNumberProps): ReactElement => <InputNumberTemplate {...args} />;

InputNumberFormatter.args = {
  formatter: (value: number | string): string => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  parser: (value: string) => value?.replace(/\$\s?|(,*)/g, ''),
};

export const InputNumberKeyboard = (args: InputNumberProps): ReactElement => <InputNumberTemplate {...args} />;

InputNumberKeyboard.args = {
  keyboard: true,
};

export const InputNumberPrefix = (args: InputNumberProps): ReactElement => <InputNumberTemplate {...args} />;

InputNumberPrefix.args = {
  prefix: <UserOutlined />,
};

export const InputNumberStatus = (args: InputNumberProps): ReactElement => <InputNumberTemplate {...args} />;

InputNumberStatus.args = {
  status: 'error',
};
