import React, {ReactElement} from 'react';

import {Button, Space, message} from 'ui-kit';

export default {
  title: 'Example/Message',
  component: message,
  argTypes: {},
};

export const MessageInfo = (): ReactElement => {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info('Message Info!');
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display message
      </Button>
    </>
  );
};

export const MessageType = (): ReactElement => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };

  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'This is a warning message',
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </Space>
    </>
  );
};

export const MessageDuration = (): ReactElement => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a prompt message for success, and it will disappear in 10 seconds',
      duration: 10,
    });
  };

  return (
    <>
      {contextHolder}
      <Button onClick={success}>Customized display duration</Button>
    </>
  );
};

export const MessagePromiseInterface = (): ReactElement => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi
      .open({
        type: 'loading',
        content: 'Action in progress..',
        duration: 2.5,
      })
      .then(() => message.success('Loading finished', 2.5))
      .then(() => message.info('Loading finished', 2.5));
  };

  return (
    <>
      {contextHolder}
      <Button onClick={success}>Display sequential messages</Button>
    </>
  );
};

export const MessageCustomizedStyle = (): ReactElement => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a prompt message with custom className and style',
      className: 'custom-class',
      style: {
        marginTop: '20vh',
      },
    });
  };

  return (
    <>
      {contextHolder}
      <Button onClick={success}>Customized style</Button>
    </>
  );
};
