import React, {ReactElement} from 'react';

import {Button, Popconfirm, message, PopconfirmProps} from 'ui-kit';

export default {
  title: 'Example/Popconfirm',
  component: Popconfirm,
  argTypes: {},
};

const confirm = (e: React.MouseEvent<HTMLElement> | undefined) => {
  console.log(e);
  message.success('Click on Yes');
};

const cancel = (e: React.MouseEvent<HTMLElement> | undefined) => {
  console.log(e);
  message.error('Click on No');
};
const PopconfirmTemplate = (args: PopconfirmProps) => {
  return (
    <Popconfirm {...args}>
      <Button danger>Delete</Button>
    </Popconfirm>
  );
};

export const PopconfirmComponent = (args: PopconfirmProps): ReactElement => <PopconfirmTemplate {...args} />;

PopconfirmComponent.args = {
  title: 'Delete the task',
  description: 'Are you sure to delete this task?',
  onConfirm: confirm,
  onCancel: cancel,
  okText: 'Yes',
  cancelText: 'No',
};
