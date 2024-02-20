import React, {ReactElement} from 'react';

import {Divider, Progress, ProgressProps} from 'ui-kit';

export default {
  title: 'Example/Progress',
  component: Progress,
  argTypes: {
    percent: {control: 'number'},
    status: {control: 'radio', options: ['success', 'exception', 'normal', 'active']},
    type: {control: 'radio', options: ['line', 'circle', 'dashboard']},
  },
};

const ProgressTemplate = (args: ProgressProps) => {
  return <Progress {...args} />;
};

export const ProgressComponent = (args: ProgressProps): ReactElement => <ProgressTemplate {...args} />;

ProgressComponent.args = {
  percent: 30,
};

export const ProgressStatus = (args: ProgressProps): ReactElement => <ProgressTemplate {...args} />;

ProgressStatus.args = {
  status: 'success',
  percent: 100,
};

export const ProgressType = (args: ProgressProps): ReactElement => <ProgressTemplate {...args} />;

ProgressType.args = {
  type: 'circle',
  percent: 100,
};

export const ProgressSize = (args: ProgressProps): ReactElement => (
  <>
    <Divider>{args.size}</Divider>
    <ProgressTemplate {...args} />
  </>
);

ProgressSize.args = {
  size: 'small',
  percent: 100,
};

export const ProgressResponsiveCircular = (args: ProgressProps): ReactElement => (
  <>
    <ProgressTemplate {...args} />
  </>
);

ProgressResponsiveCircular.args = {
  type: 'circle',
  trailColor: '#e6f4ff',
  percent: 60,
  strokeWidth: 4,
  size: 124,
};

export const ProgressFormat = (args: ProgressProps): ReactElement => (
  <>
    <ProgressTemplate {...args} />
  </>
);

ProgressFormat.args = {
  type: 'circle',
  percent: 60,
  format: (number: number) => `${100 - number} багов`,
};

export const ProgressSuccess = (args: ProgressProps): ReactElement => (
  <>
    <ProgressTemplate {...args} />
  </>
);

ProgressSuccess.args = {
  type: 'circle',
  percent: 60,
  success: {percent: 30},
};

export const ProgressSteps = (args: ProgressProps): ReactElement => (
  <>
    <ProgressTemplate {...args} />
  </>
);

ProgressSteps.args = {
  steps: 3,
  percent: 60,
};

export const ProgressStrokeColor = (args: ProgressProps): ReactElement => (
  <>
    <ProgressTemplate {...args} />
  </>
);

ProgressStrokeColor.args = {
  strokeColor: {from: '#108ee9', to: '#87d068'},
  percent: 60,
};
