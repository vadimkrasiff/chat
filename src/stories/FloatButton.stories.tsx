import React, {ReactElement} from 'react';
import {FloatButton, FloatButtonGroupProps, FloatButtonProps, BackTopProps} from 'ui-kit';

export default {
  title: 'Example/FloatButton',
  component: FloatButton,
  argTypes: {
    backgroundColor: {control: 'color'},
    type: {
      control: {
        type: 'select',
        options: ['primary', 'default'],
      },
    },
    shape: {
      control: {
        type: 'select',
        options: ['circle', 'square'],
      },
    },
  },
};

const Template = (args: FloatButtonProps) => <FloatButton {...args} />;

const TemplateGroup = (args: FloatButtonGroupProps) => (
  <FloatButton.Group {...args}>
    <FloatButton />
    <FloatButton />
    <FloatButton />
  </FloatButton.Group>
);

const TemplateBackTop = (args: BackTopProps) => (
  <div style={{height: '200vh'}}>
    <FloatButton.BackTop {...args} />
  </div>
);

export const Default = (args: FloatButtonProps): ReactElement => <Template {...args} />;
Default.args = {
  type: 'default',
};

export const Primary = (args: FloatButtonProps): ReactElement => <Template {...args} />;
Primary.args = {
  type: 'primary',
};

export const ShapeCircle = (args: FloatButtonProps): ReactElement => <Template {...args} />;
ShapeCircle.args = {
  shape: 'circle',
};

export const ShapeSquare = (args: FloatButtonProps): ReactElement => <Template {...args} />;
ShapeSquare.args = {
  shape: 'square',
};

export const Description = (args: FloatButtonProps): ReactElement => <Template {...args} />;
Description.args = {
  description: 'Help',
  shape: 'square',
};

export const Tooltip = (args: FloatButtonProps): ReactElement => <Template {...args} />;
Tooltip.args = {
  tooltip: <div>Documents</div>,
};

export const Badge = (args: FloatButtonProps): ReactElement => <Template {...args} />;
Badge.args = {
  badge: {count: 5, color: 'red'},
};

export const SquareGroup = (args: FloatButtonGroupProps): ReactElement => <TemplateGroup {...args} />;
SquareGroup.args = {
  shape: 'square',
};

export const CircleGroup = (args: FloatButtonGroupProps): ReactElement => <TemplateGroup {...args} />;
CircleGroup.args = {
  shape: 'circle',
};

export const TriggerGroup = (args: FloatButtonGroupProps): ReactElement => <TemplateGroup {...args} />;
TriggerGroup.args = {
  trigger: 'hover',
  type: 'primary',
};

export const BackTop = (args: BackTopProps): ReactElement => <TemplateBackTop {...args} />;
