import React, {ReactElement} from 'react';

import {Statistic, StatisticProps, CountdownProps} from 'ui-kit';
import {FileTextOutlined} from '@ant-design/icons';

const {Countdown} = Statistic;

export default {
  title: 'Example/Statistic',
  component: Statistic,
  argTypes: {},
};

const StatisticTemplate = (args: StatisticProps) => {
  return <Statistic {...args} />;
};

const StatisticCountdownTemplate = (args: CountdownProps) => {
  return <Countdown {...args} />;
};
export const StatisticComponent = (args: StatisticProps): ReactElement => <StatisticTemplate {...args} />;

StatisticComponent.args = {
  title: 'Balance',
  value: 112893,
  precision: 2,
};

export const StatisticPrefixSuffix = (args: StatisticProps): ReactElement => <StatisticTemplate {...args} />;

StatisticPrefixSuffix.args = {
  title: 'Catalog',
  prefix: <FileTextOutlined />,
  suffix: '/100',
  value: 22,
};

export const StatisticCountdown = (args: CountdownProps): ReactElement => <StatisticCountdownTemplate {...args} />;

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

StatisticCountdown.args = {
  title: 'Countdown',
  value: deadline,
};
