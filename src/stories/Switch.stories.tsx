import React, {ReactElement} from 'react';

import {Switch, SwitchProps} from 'ui-kit';
import {CheckOutlined} from '@ant-design/icons';

export default {
  title: 'Example/Switch',
  component: Switch,
  argTypes: {
    size: {control: 'radio', options: ['default', 'small']},
  },
};

const SwitchTemplate = (args: SwitchProps) => {
  return <Switch {...args} />;
};

export const SwitchComponent = (args: SwitchProps): ReactElement => <SwitchTemplate {...args} />;

export const SwitchDisabled = (args: SwitchProps): ReactElement => <SwitchTemplate {...args} />;

SwitchDisabled.args = {
  disabled: true,
};

export const SwitchWidthTextAndIcon = (args: SwitchProps): ReactElement => <SwitchTemplate {...args} />;

SwitchWidthTextAndIcon.args = {
  checkedChildren: <CheckOutlined />,
  unCheckedChildren: 'Uncheck',
};

export const SwitchSize = (args: SwitchProps): ReactElement => <SwitchTemplate {...args} />;

SwitchSize.args = {
  size: 'small',
};

export const SwitchLoading = (args: SwitchProps): ReactElement => <SwitchTemplate {...args} />;

SwitchLoading.args = {
  loading: true,
};
