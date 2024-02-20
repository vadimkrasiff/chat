import React from 'react';
import {notification as antdNotification} from 'antd';
import {NotificationPlacement as AntdNotificationPlacement} from 'antd/es/notification/interface';
export type NotificationPlacement = AntdNotificationPlacement;

export const notification = antdNotification;
