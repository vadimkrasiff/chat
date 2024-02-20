import React, {ReactElement} from 'react';

import {Timeline, TimelineProps} from 'ui-kit';
import {SmileOutlined} from '@ant-design/icons';

export default {
  title: 'Example/Timeline',
  component: Timeline,
  argTypes: {
    mode: {control: 'radio', options: ['alternate', 'left', 'right']},
  },
};

const items = [
  {
    children: 'Create a services site 2015-09-01',
  },
  {
    children: 'Solve initial network problems 2015-09-01',
  },
  {
    children: 'Technical testing 2015-09-01',
  },
  {
    children: 'Network problems being solved 2015-09-01',
  },
];

export const TimelineComponent = (args: TimelineProps): ReactElement => <Timeline {...args} />;

TimelineComponent.args = {
  items,
};

const itemsColor = [
  {
    color: 'green',
    children: 'Create a services site 2015-09-01',
  },
  {
    color: 'green',
    children: 'Create a services site 2015-09-01',
  },
  {
    color: 'red',
    children: (
      <>
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </>
    ),
  },
  {
    children: (
      <>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </>
    ),
  },
  {
    color: 'gray',
    children: (
      <>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </>
    ),
  },
  {
    color: 'gray',
    children: (
      <>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </>
    ),
  },
  {
    color: '#00CCFF',
    dot: <SmileOutlined />,
    children: <p>Custom color testing</p>,
  },
];

export const TimelineColor = (args: TimelineProps): ReactElement => <Timeline {...args} />;

TimelineColor.args = {
  items: itemsColor,
};

export const TimelineMode = (args: TimelineProps): ReactElement => <Timeline {...args} />;

TimelineMode.args = {
  mode: 'alternate',
  items,
};

export const TimelineLabel = (args: TimelineProps): ReactElement => <Timeline {...args} />;

TimelineLabel.args = {
  mode: 'left',
  items: [
    {
      label: '2015-09-01',
      children: 'Create a services',
    },
    {
      label: '2015-09-01 09:12:11',
      children: 'Solve initial network problems',
    },
    {
      children: 'Technical testing',
    },
    {
      label: '2015-09-01 09:12:11',
      children: 'Network problems being solved',
    },
  ],
};
