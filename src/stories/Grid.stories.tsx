import React, {ReactElement} from 'react';

import {Col, Row, ColProps, RowProps, Divider} from 'ui-kit';

export default {
  title: 'Example/Grid',
  component: (
    <Row>
      <Col></Col>
    </Row>
  ),
  argTypes: {
    span: {control: 'number'},
    flex: {control: 'text'},
    offset: {control: 'number'},
    order: {control: 'number'},
    pull: {control: 'number'},
    push: {control: 'number'},
    align: {control: 'text'},
    justify: {control: 'text'},
    wrap: {control: 'boolean'},
    gutter: {
      control: {
        type: 'object',
      },
    },
  },
};

const style: React.CSSProperties = {background: '#0092ff', padding: '8px', color: '#ffffff', borderRadius: '8px'};

const GridColTemplate = (props: ColProps) => {
  return (
    <>
      <Divider>Span</Divider>
      <Row>
        <Col style={style} span={props.span}>
          Col0
        </Col>
      </Row>
      <Divider>Offset</Divider>
      <Row>
        <Col style={style} offset={props.offset} span={8}>
          offset-{props.offset}
        </Col>
      </Row>
      <Divider>Push-Pull</Divider>
      <Row>
        <Col style={style} span={12} push={props.push}>
          span-12-push-{props.push}
        </Col>
        <Col style={style} span={12} pull={props.pull}>
          span-12-pull-{props.pull}
        </Col>
      </Row>
      <Divider>Order</Divider>
      <Row>
        <Col style={style} span={8} order={2}>
          Col1-order-2
        </Col>
        <Col style={style} span={8} order={3}>
          Col2-order-3
        </Col>
        <Col style={style} span={8} order={props.order}>
          Col3-order-{props.order}
        </Col>
      </Row>
      <Divider>Flex</Divider>
      <Row>
        <Col style={style} span={8} flex="200px">
          Col1-flex-200px
        </Col>
        <Col style={style} span={8} flex="200px">
          Col2-flex-200px
        </Col>
        <Col style={{...style, backgroundColor: '#a1ff11'}} span={8} flex={props.flex}>
          Col3-flex-{props.flex}
        </Col>
      </Row>
    </>
  );
};

const GridRowTemplate = (props: RowProps) => {
  return (
    <>
      <Divider>Gutter</Divider>
      <Row gutter={props.gutter}>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider>Align</Divider>
      <Row gutter={20} align={props.align}>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider>Justify</Divider>
      <Row gutter={20} justify={props.justify}>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider>Wrap</Divider>
      <Row gutter={[20, 20]} wrap={props.wrap}>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
    </>
  );
};

export const GridCol = (args: ColProps): ReactElement => <GridColTemplate {...args} />;
GridCol.args = {
  flex: 'auto',
  span: 24,
  offset: 4,
  pull: 12,
  push: 12,
  order: 1,
};

export const GridRow = (args: RowProps): ReactElement => <GridRowTemplate {...args} />;
GridRow.args = {
  gutter: 100,
  align: 'middle',
  justify: 'center',
  wrap: true,
};
