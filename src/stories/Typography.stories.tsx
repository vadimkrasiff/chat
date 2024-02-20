import React, {ReactElement, useState} from 'react';

import {Flex, LinkProps, ParagraphProps, Switch, TextProps, Typography} from 'ui-kit';

const {Title, Text, Link, Paragraph} = Typography;

export default {
  title: 'Example/Typography',
  component: Typography,
  argTypes: {
    backgroundColor: {control: 'color'},
    type: {
      control: {
        type: 'select',
        options: ['secondary', 'success', 'warning', 'danger', 'default'],
      },
    },
    triggerType: {
      control: {
        type: 'select',
        options: ['icon', 'text', 'both'],
      },
    },
  },
};

const TitleComponentTemplate = () => (
  <Flex vertical>
    <Title>h1. Ant Design</Title>
    <Title level={2}>h2. Ant Design</Title>
    <Title level={3}>h3. Ant Design</Title>
    <Title level={4}>h4. Ant Design</Title>
    <Title level={5}>h5. Ant Design</Title>
  </Flex>
);

const TextTemplate = (args: TextProps) => <Text {...args}>Текст для проверки</Text>;

const LinkTemplate = (args: LinkProps) => <Link {...args}>Текст для проверки</Link>;

type EditParagraphProps = ParagraphProps & {
  triggerType: ('text' | 'icon')[] | undefined;
};

const EditParagraphTemplate = ({triggerType, ...args}: EditParagraphProps) => {
  const [editableStr, setEditableStr] = useState('Это текст для проверки.');

  return (
    <Paragraph {...args} editable={{onChange: setEditableStr, triggerType}}>
      {editableStr}
    </Paragraph>
  );
};

const EllipsisParagraphTemplate = () => {
  const [isEllipsis, setEllipsis] = useState(true);

  return (
    <>
      <Switch onChange={() => setEllipsis(!isEllipsis)} />
      <Paragraph ellipsis={isEllipsis}>
        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design
        language for background applications, is refined by Ant UED Team. Ant Design, a design language for background
        applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined
        by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team.
      </Paragraph>
    </>
  );
};

export const TitleComponent = TitleComponentTemplate.bind({});

export const TextType = (args: TextProps): ReactElement => <TextTemplate {...args} />;
TextType.args = {
  type: 'default',
};

export const DisabledText = (args: TextProps): ReactElement => <TextTemplate {...args} />;
DisabledText.args = {
  disabled: true,
};

export const MarkText = (args: TextProps): ReactElement => <TextTemplate {...args} />;
MarkText.args = {
  mark: true,
};

export const CodeText = (args: TextProps): ReactElement => <TextTemplate {...args} />;
CodeText.args = {
  code: true,
};

export const KeyboardText = (args: TextProps): ReactElement => <TextTemplate {...args} />;
KeyboardText.args = {
  keyboard: true,
};

export const UnderlineText = (args: TextProps): ReactElement => <TextTemplate {...args} />;
UnderlineText.args = {
  underline: true,
};

export const DeleteText = (args: TextProps): ReactElement => <TextTemplate {...args} />;
DeleteText.args = {
  delete: true,
};

export const StrongText = (args: TextProps): ReactElement => <TextTemplate {...args} />;
StrongText.args = {
  strong: true,
};

export const ItalicText = (args: TextProps): ReactElement => <TextTemplate {...args} />;
ItalicText.args = {
  italic: true,
};

export const LinkComponent = (args: LinkProps): ReactElement => <LinkTemplate {...args} />;
LinkComponent.args = {};

export const EditParagraph = (args: EditParagraphProps): ReactElement => <EditParagraphTemplate {...args} />;
EditParagraph.args = {
  triggerType: 'icon',
};

export const EllipsisText = (): ReactElement => <EllipsisParagraphTemplate />;
