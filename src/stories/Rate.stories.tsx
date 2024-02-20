import React, {ReactElement, useState} from 'react';

import {Rate, Space, RateProps} from 'ui-kit';
import {HeartOutlined, FrownOutlined, MehOutlined, SmileOutlined} from '@ant-design/icons';

export default {
  title: 'Example/Rate',
  component: Rate,
  argTypes: {},
};

const RateTemplate = (args: RateProps) => {
  return <Rate {...args} />;
};

export const RateComponent = (args: RateProps): ReactElement => <RateTemplate {...args} />;

export const RateHalfStar = (args: RateProps): ReactElement => <RateTemplate {...args} />;

RateHalfStar.args = {
  allowHalf: true,
};

export const RateShowCopywriting = (args: RateProps): ReactElement => {
  const [value, setValue] = useState(3);
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  return (
    <Space>
      <Rate {...args} tooltips={desc} onChange={setValue} value={value} />
      {value ? <span>{desc[value - 1]}</span> : ''}
    </Space>
  );
};

export const RateReadOnly = (args: RateProps): ReactElement => <RateTemplate {...args} />;

RateReadOnly.args = {
  disabled: true,
  defaultValue: 3,
};

export const RateAllowClear = (args: RateProps): ReactElement => <RateTemplate {...args} />;

RateAllowClear.args = {
  allowClear: false,
  defaultValue: 3,
};

export const RateOtherCharacter = (args: RateProps): ReactElement => <RateTemplate {...args} />;

RateOtherCharacter.args = {
  character: <HeartOutlined />,
  defaultValue: 3,
};

export const RateCustomizeCharacter = (args: RateProps): ReactElement => <RateTemplate {...args} />;

const customIcons: Record<number, React.ReactNode> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

RateCustomizeCharacter.args = {
  character: ({index}: {index: number}) => customIcons[index + 1],
};
