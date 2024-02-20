import React, {ReactElement} from 'react';

import {Select, SelectProps} from 'ui-kit';

export default {
  title: 'Example/Select',
  component: Select,
  argTypes: {
    size: {control: 'radio', options: ['large', 'middle', 'small']},
    status: {control: 'radio', options: ['warning', 'error', '']},
  },
};

const SelectTemplate = (args: SelectProps) => {
  return <Select {...args} style={{width: 200}} />;
};

const options: SelectProps['options'] = [
  {value: 'option1', label: 'Option 1'},
  {value: 'option2', label: 'Option 2'},
  {value: 'option3', label: 'Option 3'},
];

const optionsGroup: SelectProps['options'] = [
  {
    label: 'Group 1',
    options: [
      {label: 'Option 1', value: 'option1'},
      {label: 'Option 2', value: 'option2'},
    ],
  },
  {
    label: 'Group 2',
    options: [{label: 'Option 3', value: 'option3'}],
  },
];

export const SelectComponent = (args: SelectProps): ReactElement => <SelectTemplate {...args} />;

SelectComponent.args = {
  options,
};

const filterOption = (input: string, option?: {label: string; value: string}) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

export const SelectSearch = (args: SelectProps): ReactElement => <SelectTemplate {...args} />;

SelectSearch.args = {
  options,
  showSearch: true,
  filterOption,
};

export const SelectMultipleSelection = (args: SelectProps): ReactElement => <SelectTemplate {...args} />;

SelectMultipleSelection.args = {
  options,
  mode: 'multiple',
};

export const SelectSize = (args: SelectProps): ReactElement => <SelectTemplate {...args} />;

SelectSize.args = {
  options,
  size: 'large',
};

export const SelectOptionsGroup = (args: SelectProps): ReactElement => <SelectTemplate {...args} />;

SelectOptionsGroup.args = {
  options: optionsGroup,
};

export const SelectBorderless = (args: SelectProps): ReactElement => <SelectTemplate {...args} />;

SelectBorderless.args = {
  options,
  bordered: false,
};

export const SelectStatus = (args: SelectProps): ReactElement => <SelectTemplate {...args} />;

SelectStatus.args = {
  options,
  status: 'error',
};
