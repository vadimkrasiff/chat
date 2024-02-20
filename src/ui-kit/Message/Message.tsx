import React from 'react';
import {message as AntMessage} from 'antd';
import {ArgsProps as AntdArgsProps} from 'antd/es/message';

export type ArgsProps = AntdArgsProps;

export const message = (props: ArgsProps) => {
  return AntMessage;
};

message.useMessage = AntMessage.useMessage;
message.info = AntMessage.info;
message.error = AntMessage.error;
message.config = AntMessage.config;
message.success = AntMessage.success;
message.loading = AntMessage.loading;
message.open = AntMessage.open;
