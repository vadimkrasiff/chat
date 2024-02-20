import React, {ReactElement} from 'react';

import {Alert, Spin, SpinProps} from 'ui-kit';
import {LoadingOutlined} from '@ant-design/icons';

export default {
  title: 'Example/Spin',
  component: Spin,
  argTypes: {
    size: {control: 'radio', options: ['default', 'small', 'large']},
  },
};

export const SpinComponent = (args: SpinProps): ReactElement => {
  return <Spin {...args} />;
};

export const SpinSize = (args: SpinProps): ReactElement => {
  return <Spin {...args} />;
};

SpinSize.args = {
  size: 'large',
};

export const SpinSpinning = (args: SpinProps): ReactElement => {
  return (
    <Spin {...args}>
      <Alert type="info" message="Alert message title" description="Description." />
    </Spin>
  );
};

SpinSpinning.args = {
  spinning: true,
};

export const SpinDelay = (args: SpinProps): ReactElement => {
  return <SpinSpinning {...args} />;
};

SpinDelay.args = {
  delay: 500,
  spinning: true,
};

export const SpinIndicator = (args: SpinProps): ReactElement => {
  return <Spin {...args} />;
};

SpinIndicator.args = {
  indicator: <LoadingOutlined spin />,
};

export const SpinFullscreen = (args: SpinProps): ReactElement => {
  return <Spin {...args} />;
};

SpinFullscreen.args = {
  fullscreen: true,
};

export const SpinTip = (args: SpinProps): ReactElement => {
  return <SpinSpinning {...args} />;
};

SpinTip.args = {
  tip: 'loading',
};
