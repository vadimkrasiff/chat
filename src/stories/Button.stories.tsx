import React, {ReactElement} from 'react';
import {SearchOutlined} from '@ant-design/icons';
import {Button, Flex, ButtonProps} from 'ui-kit';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'default', 'text', 'link'],
      },
    },
    loading: {control: 'boolean'},
    size: {
      control: {
        type: 'select',
        options: ['large', 'middle', 'small'],
      },
    },
    ghost: {control: 'boolean'},
    disabled: {control: 'boolean'},
    danger: {control: 'boolean'},
    block: {control: 'boolean'},
    shape: {
      control: {
        type: 'select',
        options: ['default', 'circle', 'round'],
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: ButtonProps) => <Button {...args}>Button</Button>;
const TemplateIcon = (args: ButtonProps) => (
  <Flex wrap="wrap" gap="small">
    <Button {...args} icon={<SearchOutlined />} />
    <Button icon={<SearchOutlined />}>Поиск</Button>
  </Flex>
);

export const Icon = (args: ButtonProps): ReactElement => <TemplateIcon {...args} />;
Icon.args = {
  shape: 'circle',
};

export const Default = (args: ButtonProps): ReactElement => <Template {...args} />;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  type: 'default',
};

export const Primary = (args: ButtonProps): ReactElement => <Template {...args} />;
Primary.args = {
  type: 'primary',
};

export const Text = (args: ButtonProps): ReactElement => <Template {...args} />;
Text.args = {
  type: 'text',
};

export const Dashed = (args: ButtonProps): ReactElement => <Template {...args} />;
Dashed.args = {
  type: 'dashed',
};

export const Link = (args: ButtonProps): ReactElement => <Template {...args} />;
Link.args = {
  type: 'link',
};

export const Large = (args: ButtonProps): ReactElement => <Template {...args} />;
Large.args = {
  size: 'large',
};

export const Small = (args: ButtonProps): ReactElement => <Template {...args} />;
Small.args = {
  size: 'small',
};

export const Block = (args: ButtonProps): ReactElement => <Template {...args} />;
Block.args = {
  block: true,
};

export const Disabled = (args: ButtonProps): ReactElement => <Template {...args} />;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  disabled: true,
};

export const Loading = (args: ButtonProps): ReactElement => <Template {...args} />;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Loading.args = {
  loading: true,
};

export const GhostButton = (args: ButtonProps): ReactElement => <Template {...args} />;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GhostButton.args = {
  ghost: true,
  type: 'primary',
};

export const DangerButtons = (args: ButtonProps): ReactElement => <Template {...args} />;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DangerButtons.args = {
  danger: true,
  type: 'default',
};
