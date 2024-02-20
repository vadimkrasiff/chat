import React, {ReactElement} from 'react';

import {Divider, DividerProps} from 'ui-kit';

export default {
  title: 'Example/Divider',
  component: Divider,
  argTypes: {
    dashed: {control: 'boolean'},
    plain: {control: 'boolean'},
    orientation: {
      control: 'select',
      options: ['center', 'left', 'right'],
    },
    title: {control: 'text'},
    type: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

const DividerTemplate = (args: DividerProps) => (
  <>
    Текст для проверки
    <Divider {...args}>Text</Divider>
    Текст для проверки
  </>
);

export const DividerComponent = (args: DividerProps): ReactElement => <Divider {...args} />;

export const DividerText = (args: DividerProps): ReactElement => <DividerTemplate {...args} />;

export const DividerPlainText = (args: DividerProps): ReactElement => <DividerTemplate {...args} />;
DividerPlainText.args = {
  plain: true,
};

export const DividerTypeText = (args: DividerProps): ReactElement => <DividerTemplate {...args} />;
DividerTypeText.args = {
  type: 'vertical',
};
