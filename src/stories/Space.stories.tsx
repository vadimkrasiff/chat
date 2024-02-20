import React, {ReactElement} from 'react';

import {Button, Input, Space, SpaceCompactProps, SpaceProps} from 'ui-kit';

const {Compact} = Space;

export default {
  title: 'Example/Space',
  component: Space,
  argTypes: {
    align: {
      control: 'select',
      options: ['start', 'end', 'center', 'baseline', ''],
    },
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    size: {control: 'text'},
    wrap: {control: 'boolean'},
    block: {control: 'boolean'},
  },
};

const baseStyle: React.CSSProperties = {
  height: '100px',
  textAlign: 'center',
  color: '#ffffff',
};

const SpaceTemplate = (args: SpaceProps) => {
  return (
    <>
      <Space {...args}>
        {Array.from({length: 4}).map((_, i) => (
          <div key={i} style={{...baseStyle, backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf', height: 20 * (i + 1)}}>
            Space-{i}
          </div>
        ))}
      </Space>
    </>
  );
};

const CompactTemplate = (args: SpaceCompactProps) => {
  return (
    <>
      <div style={{width: '1000px'}}>
        <Compact {...args}>
          <Input defaultValue="0571" />
          <Input defaultValue="26888888" />
          <Button>Кнопка</Button>
        </Compact>
      </div>
    </>
  );
};

export const SpaceComponent = (args: SpaceProps): ReactElement => <SpaceTemplate {...args} />;

export const CompactComponent = (args: SpaceCompactProps): ReactElement => <CompactTemplate {...args} />;

CompactComponent.args = {
  block: true,
};
