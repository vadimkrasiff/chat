import React, {ReactElement} from 'react';

import {Segmented, SegmentedProps} from 'ui-kit';
import {AppstoreOutlined, BarsOutlined} from '@ant-design/icons';

export default {
  title: 'Example/Segmented',
  component: Segmented,
  argTypes: {
    size: {control: 'radio', options: ['default', 'small', 'large']},
  },
};

const SegmentedTemplate = (args: SegmentedProps) => {
  return <Segmented {...args} />;
};

const options = [
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'long-text long-text long-text long-text long-text long-text option 5',
];

const optionsIcon = [
  {label: 'List', value: 'List', icon: <BarsOutlined />},
  {label: 'Kanban', value: 'Kanban', icon: <AppstoreOutlined />},
];

const optionsOnlyIcon = [
  {value: 'List', icon: <BarsOutlined />},
  {value: 'Kanban', icon: <AppstoreOutlined />},
];
export const SegmentedComponent = (args: SegmentedProps): ReactElement => <SegmentedTemplate {...args} />;

SegmentedComponent.args = {
  options,
};

export const SegmentedBlock = (args: SegmentedProps): ReactElement => <SegmentedTemplate {...args} />;

SegmentedBlock.args = {
  block: true,
  options,
};

export const SegmentedSize = (args: SegmentedProps): ReactElement => <SegmentedTemplate {...args} />;

SegmentedSize.args = {
  size: 'small',
  options,
};

export const SegmentedIcon = (args: SegmentedProps): ReactElement => <SegmentedTemplate {...args} />;

SegmentedIcon.args = {
  options: optionsIcon,
};

export const SegmentedOnlyIcon = (args: SegmentedProps): ReactElement => <SegmentedTemplate {...args} />;

SegmentedOnlyIcon.args = {
  options: optionsOnlyIcon,
};
