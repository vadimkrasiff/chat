import React, {ReactElement} from 'react';

import {TimePicker, TimePickerProps, TimeRangePickerProps} from 'ui-kit';

const {RangePicker} = TimePicker;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TimePicker',
  component: TimePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {control: 'radio', options: ['default', 'small', 'large']},
    status: {control: 'radio', options: ['warning', 'error', '', 'success', 'validating']},
  },
};

const TimePickerTemplate = (args: TimePickerProps) => {
  return <TimePicker {...args} />;
};

export const TimePickerComponent = (args: TimePickerProps): ReactElement => <TimePickerTemplate {...args} />;

export const TimePickerSize = (args: TimePickerProps): ReactElement => <TimePickerTemplate {...args} />;

TimePickerSize.args = {
  size: 'large',
};

export const TimePickerDisabled = (args: TimePickerProps): ReactElement => <TimePickerTemplate {...args} />;

TimePickerDisabled.args = {
  disabled: true,
};

export const TimePickerFormat = (args: TimePickerProps): ReactElement => <TimePickerTemplate {...args} />;

TimePickerFormat.args = {
  format: 'HH:mm',
};

export const TimePickerIntervalOption = (args: TimePickerProps): ReactElement => <TimePickerTemplate {...args} />;

TimePickerIntervalOption.args = {
  minuteStep: 5,
  hourStep: 2,
  secondStep: 10,
};

export const TimePicker12Hourse = (args: TimePickerProps): ReactElement => <TimePickerTemplate {...args} />;

TimePicker12Hourse.args = {
  use12Hours: true,
};

export const RangePickerComponent = (args: TimeRangePickerProps): ReactElement => {
  return <RangePicker {...args} />;
};

export const TimePickerBorderless = (args: TimePickerProps): ReactElement => <TimePickerTemplate {...args} />;

TimePickerBorderless.args = {
  bordered: false,
};

export const TimePickerStatus = (args: TimePickerProps): ReactElement => <TimePickerTemplate {...args} />;

TimePickerStatus.args = {
  status: 'error',
};
