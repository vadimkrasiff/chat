import React, {ReactElement} from 'react';

import {Mentions, MentionProps} from 'ui-kit';

export default {
  title: 'Example/Mentions',
  component: Mentions,
  argTypes: {
    status: {control: 'radio', options: ['warning', 'error', '']},
  },
};

const MentionsTemplate = (args: MentionProps) => {
  return <Mentions {...args} />;
};

const options = [
  {
    value: 'user1',
    label: 'user1',
  },
  {
    value: 'user2',
    label: 'user2',
  },
  {
    value: 'user3',
    label: 'user3',
  },
];

export const MentionsComponent = (args: MentionProps): ReactElement => <MentionsTemplate {...args} />;

MentionsComponent.args = {
  defaultValue: '@user1',
  options,
};

export const MentionsDisabled = (args: MentionProps): ReactElement => <MentionsTemplate {...args} />;

MentionsDisabled.args = {
  defaultValue: '@user1',
  options,
  disabled: true,
};

export const MentionsReadOnly = (args: MentionProps): ReactElement => <MentionsTemplate {...args} />;

MentionsReadOnly.args = {
  defaultValue: '@user1',
  options,
  readOnly: true,
};

export const MentionsAutoSize = (args: MentionProps): ReactElement => <MentionsTemplate {...args} />;

MentionsAutoSize.args = {
  defaultValue: '@user1',
  options,
  autoSize: true,
};

export const MentionsStatus = (args: MentionProps): ReactElement => <MentionsTemplate {...args} />;

MentionsStatus.args = {
  defaultValue: '@user1',
  options,
  status: 'error',
};
