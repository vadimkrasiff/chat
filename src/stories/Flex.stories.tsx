import React, {ReactElement} from 'react';

import {Flex, FlexProps} from 'ui-kit';

export default {
  title: 'Example/Flex',
  component: Flex,
  argTypes: {
    vertical: {control: 'boolean'},
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    justify: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
    align: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
    flex: {control: 'text'},
    gap: {control: 'text'},
  },
};

const baseStyle: React.CSSProperties = {
  width: '50px',
  height: '50px',
};

const FlexTemplate = (args: FlexProps) => {
  return (
    <Flex {...args}>
      {Array.from({length: 4}).map((_, i) => (
        <div key={i} style={{...baseStyle, backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf'}} />
      ))}
    </Flex>
  );
};

export const FlexComponent = (args: FlexProps): ReactElement => <FlexTemplate {...args} />;
