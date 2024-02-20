import React, {ReactElement, useState} from 'react';

import {Alert, Badge, Calendar, BadgeProps, CalendarProps} from 'ui-kit';
import dayjs, {Dayjs} from 'dayjs';

export default {
  title: 'Example/Calendar',
  component: Calendar,
  argTypes: {},
};

const CalendarTemplate = (args: CalendarProps<any>) => {
  return <Calendar {...args}></Calendar>;
};

export const CalendarComponent = (args: CalendarProps<any>): ReactElement => <CalendarTemplate {...args} />;

const getListData = (value: Dayjs) => {
  let listData;
  switch (value.date()) {
    case 15:
      listData = [
        {type: 'warning', content: 'This is warning event'},
        {type: 'success', content: 'This is very long usual event......'},
        {type: 'error', content: 'This is error event 1.'},
        {type: 'error', content: 'This is error event 2.'},
        {type: 'error', content: 'This is error event 3.'},
        {type: 'error', content: 'This is error event 4.'},
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

export const NoticeCalendar = (args: CalendarProps<any>): ReactElement => {
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps['status']} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  return (
    <>
      <CalendarTemplate {...args} cellRender={cellRender} />
    </>
  );
};

export const CalendarCard = (args: CalendarProps<any>): ReactElement => (
  <div style={{width: 300, height: 400}}>
    <CalendarTemplate {...args} />
  </div>
);

CalendarCard.args = {
  fullscreen: false,
};

export const SelectableCalendar = (args: CalendarProps<any>): ReactElement => {
  const [value, setValue] = useState(() => dayjs('2017-01-25'));
  const [selectedValue, setSelectedValue] = useState(() => dayjs('2017-01-25'));

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };
  return (
    <>
      <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
      <CalendarTemplate value={value} onSelect={onSelect} onPanelChange={onPanelChange} {...args} />
    </>
  );
};
