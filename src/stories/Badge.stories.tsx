import React, {ReactElement, useState} from 'react';

import {Avatar, Badge, Card, Divider, Space, Switch} from 'ui-kit';
import {BadgeProps} from 'ui-kit';
import {ClockCircleOutlined} from '@ant-design/icons';

export default {
  title: 'Example/Badge',
  component: Badge,
  argTypes: {},
};

const BadgeTemplate = (args: BadgeProps) => {
  return (
    <Space size="large">
      <Badge {...args}>
        <Avatar shape="square" size="large" />
      </Badge>
    </Space>
  );
};

export const BadgeComponent = (): ReactElement => {
  return (
    <Space size="middle">
      <Badge count={5}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={0} showZero>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={<ClockCircleOutlined style={{color: '#f5222d'}} />}>
        <Avatar shape="square" size="large" />
      </Badge>
    </Space>
  );
};

export const BadgeStandalone = (): ReactElement => {
  const [show, setShow] = useState(true);

  return (
    <Space>
      <Switch checked={show} onChange={() => setShow(!show)} />
      <Badge count={show ? 11 : 0} showZero color="#faad14" />
      <Badge count={show ? 25 : 0} />
      <Badge count={show ? <ClockCircleOutlined style={{color: '#f5222d'}} /> : 0} />
      <Badge className="site-badge-count-109" count={show ? 109 : 0} style={{backgroundColor: '#52c41a'}} />
    </Space>
  );
};

export const BadgeOverflowCount = (args: BadgeProps): ReactElement => <BadgeTemplate {...args} />;

BadgeOverflowCount.args = {
  count: 100,
  overflowCount: '10',
};

export const BadgeDot = (args: BadgeProps): ReactElement => <BadgeTemplate {...args} />;

BadgeDot.args = {
  dot: true,
};

export const BadgeOffset = (args: BadgeProps): ReactElement => <BadgeTemplate {...args} />;

BadgeOffset.args = {
  count: 100,
  offset: [10, 20],
};

export const BadgeSize = (args: BadgeProps): ReactElement => <BadgeTemplate {...args} />;

BadgeSize.args = {
  count: 10,
  size: 'small',
};

export const BadgeStatus = (): ReactElement => {
  return (
    <>
      <Space>
        <Badge status="success" />
        <Badge status="error" />
        <Badge status="default" />
        <Badge status="processing" />
        <Badge status="warning" />
      </Space>
      <br />
      <Space direction="vertical">
        <Badge status="success" text="Success" />
        <Badge status="error" text="Error" />
        <Badge status="default" text="Default" />
        <Badge status="processing" text="Processing" />
        <Badge status="warning" text="Warning" />
      </Space>
    </>
  );
};

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];

export const ColorfulBadge = (): ReactElement => {
  return (
    <>
      <Divider orientation="left">Presets</Divider>
      <Space direction="vertical">
        {colors.map((color) => (
          <Badge key={color} color={color} text={color} />
        ))}
      </Space>
      <Divider orientation="left">Custom</Divider>
      <Space direction="vertical">
        <Badge color="#f50" text="#f50" />
        <Badge color="rgb(45, 183, 245)" text="rgb(45, 183, 245)" />
        <Badge color="hsl(102, 53%, 61%)" text="hsl(102, 53%, 61%)" />
        <Badge color="hwb(205 6% 9%)" text="hwb(205 6% 9%)" />
      </Space>
    </>
  );
};

export const BadgeRibbon = (args: BadgeProps): ReactElement => {
  return (
    <>
      <Badge.Ribbon {...args}>
        <Card title="Header card" size="small">
          Content.
        </Card>
      </Badge.Ribbon>
    </>
  );
};

BadgeRibbon.args = {
  color: 'red',
  text: 'Ribbon',
};
