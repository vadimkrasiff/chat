import React, {ReactElement} from 'react';

import {App, Button, Space} from 'ui-kit';

export default {
  title: 'Example/App',
  component: App,
  argTypes: {},
};

const MyPage = () => {
  const {message, modal, notification} = App.useApp();

  const showMessage = () => {
    message.success('Success!');
  };

  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };

  const showNotification = () => {
    notification.info({
      message: `Notification topLeft`,
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };

  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Button type="primary" onClick={showNotification}>
        Open notification
      </Button>
    </Space>
  );
};

export const AppComponent = (): ReactElement => {
  return (
    <App>
      <MyPage />
    </App>
  );
};
