import React, {ReactElement} from 'react';
import dayjs from 'dayjs';
import {DatePicker, DatePickerProps, RangePickerProps} from 'ui-kit';

export default {
  title: 'Example/DatePicker',
  component: DatePicker,
  argTypes: {},
};

const DatePickerTemplate = (args: DatePickerProps) => {
  return <DatePicker {...args} />;
};

const RangePickerTemplate = (args: RangePickerProps) => {
  return <DatePicker.RangePicker {...args} />;
};

export const DatePickerComponent = (args: DatePickerProps): ReactElement => <DatePickerTemplate {...args} />;

export const RangePicker = (args: RangePickerProps): ReactElement => <RangePickerTemplate {...args} />;

export const DatePickerFormat = (args: DatePickerProps): ReactElement => <DatePickerTemplate {...args} />;

DatePickerFormat.args = {
  format: 'YYYY/MM/DD',
};

export const DatePickerShowTime = (args: DatePickerProps): ReactElement => <DatePickerTemplate {...args} />;

DatePickerShowTime.args = {
  showTime: true,
};

export const DatePickerDisabled = (args: DatePickerProps): ReactElement => <DatePickerTemplate {...args} />;

DatePickerDisabled.args = {
  disabled: [true, true],
};

export const DisabledDateAndTime = (args: DatePickerProps): ReactElement => <DatePickerTemplate {...args} />;

const range = (start: number, end: number) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

const disabledDate: RangePickerProps['disabledDate'] = (current) => {
  return current && current < dayjs().endOf('day');
};

const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56],
});

DisabledDateAndTime.args = {
  showTime: true,
  disabledDate: disabledDate,
  disabledTime: disabledDateTime,
};

export const DatePickerSizes = (args: DatePickerProps): ReactElement => <DatePickerTemplate {...args} />;

DatePickerSizes.args = {
  size: 'large',
};

export const DatePickerExtraFooter = (args: DatePickerProps): ReactElement => <DatePickerTemplate {...args} />;

DatePickerExtraFooter.args = {
  renderExtraFooter: () => 'extra footer',
};

export const DatePickerStatus = (args: DatePickerProps): ReactElement => <DatePickerTemplate {...args} />;

DatePickerStatus.args = {
  status: 'error',
};

export const DatePickerBorderedLess = (args: DatePickerProps): ReactElement => <DatePickerTemplate {...args} />;

DatePickerBorderedLess.args = {
  bordered: false,
};

export const DatePickerPlacement = (args: DatePickerProps): ReactElement => (
  <div
    style={{
      width: 'calc(100vw - 2rem)',
      height: 'calc(100vh - 2rem)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '100px',
    }}
  >
    <DatePickerTemplate {...args} />
  </div>
);

DatePickerPlacement.args = {
  placment: 'topLeft',
};
