import React, {ReactElement} from 'react';

import {Card, CardProps} from 'ui-kit';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
const {Meta} = Card;

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {},
};

const CardTemplate = (args: CardProps) => {
  return <Card {...args}>Card content</Card>;
};

export const CardComponent = (args: CardProps): ReactElement => <CardTemplate {...args} />;

CardComponent.args = {
  title: 'Card title',
  extra: <a>More</a>,
  style: {width: 300},
};

export const CardNoBordered = (args: CardProps): ReactElement => <CardTemplate {...args} />;

CardNoBordered.args = {
  title: 'Card title',
  bordered: false,
  style: {width: 300},
};

export const SimpleCard = (args: CardProps): ReactElement => <CardTemplate {...args} />;

SimpleCard.args = {
  style: {width: 300},
};

export const CardMeta = (args: CardProps): ReactElement => (
  <Card {...args}>
    <Meta title="Meta title" description="Meta description" />
  </Card>
);

CardMeta.args = {
  style: {width: 300},
  cover: (
    <img alt="example" src="https://masterpiecer-images.s3.yandex.net/5bcac687586611eeb1715a1112d6d6c5:upscaled" />
  ),
};

export const LoadingCard = (args: CardProps): ReactElement => <CardTemplate {...args} />;

LoadingCard.args = {
  title: 'Card title',
  style: {width: 300},
  loading: true,
};

export const CardActions = (args: CardProps): ReactElement => <CardTemplate {...args} />;

CardActions.args = {
  title: 'Card title',
  style: {width: 300},
  actions: [<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
};

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};

export const CardGrid = (): ReactElement => (
  <Card title="Card Title">
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
  </Card>
);
