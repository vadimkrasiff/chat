import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from '@ant-design/icons';
import React, {ReactElement, useMemo} from 'react';

import {Button, Divider, Space, notification, NotificationPlacement} from 'ui-kit';

export default {
  title: 'Example/Notification',
  component: notification,
  argTypes: {},
};

const Context = React.createContext({name: 'Default'});

export const NotificationComponent = (): ReactElement => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({name}) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };

  const contextValue = useMemo(() => ({name: 'Ant Design'}), []);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Space>
        <Button type="primary" onClick={() => openNotification('topLeft')} icon={<RadiusUpleftOutlined />}>
          topLeft
        </Button>
        <Button type="primary" onClick={() => openNotification('topRight')} icon={<RadiusUprightOutlined />}>
          topRight
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button type="primary" onClick={() => openNotification('bottomLeft')} icon={<RadiusBottomleftOutlined />}>
          bottomLeft
        </Button>
        <Button type="primary" onClick={() => openNotification('bottomRight')} icon={<RadiusBottomrightOutlined />}>
          bottomRight
        </Button>
      </Space>
    </Context.Provider>
  );
};

export const NotificationDuration = (): ReactElement => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
      duration: 0,
    });
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const NotificationType = (): ReactElement => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
        <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
        <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
        <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
      </Space>
    </>
  );
};
