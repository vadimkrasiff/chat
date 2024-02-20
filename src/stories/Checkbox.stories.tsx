import React, {ReactElement} from 'react';

import {Checkbox, CheckboxProps, CheckboxGroupProps} from 'ui-kit';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  argTypes: {},
};

const CheckboxTemplate = (args: CheckboxProps) => {
  return <Checkbox {...args}>Checkbox</Checkbox>;
};

const CheckboxGroupTemplate = (args: CheckboxGroupProps) => {
  return <Checkbox.Group {...args} />;
};

export const CheckboxComponent = (args: CheckboxProps): ReactElement => <CheckboxTemplate {...args} />;

export const CheckboxDisabled = (args: CheckboxProps): ReactElement => <CheckboxTemplate {...args} />;

CheckboxDisabled.args = {
  disabled: true,
};

export const CheckboxIndeterminate = (args: CheckboxProps): ReactElement => <CheckboxTemplate {...args} />;

CheckboxIndeterminate.args = {
  indeterminate: true,
};

export const CheckboxGroup = (args: CheckboxGroupProps): ReactElement => <CheckboxGroupTemplate {...args} />;

const options = ['Apple', 'Pear', 'Orange'];

CheckboxGroup.args = {
  options,
};
