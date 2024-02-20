import React, {ReactElement} from 'react';

import {QRCode, QRCodeProps} from 'ui-kit';

export default {
  title: 'Example/QRCode',
  component: QRCode,
  argTypes: {
    status: {control: 'radio', options: ['loading', 'expired', 'active']},
    errorLevel: {control: 'radio', options: ['L', 'M', 'Q', 'H']},
    type: {control: 'radio', options: ['canvas', 'svg']},
    color: {control: 'color'},
    bgColor: {control: 'color'},
  },
};

const QRCodeTemplate = (args: QRCodeProps) => {
  return <QRCode {...args} />;
};

export const QRCodeComponent = (args: QRCodeProps): ReactElement => <QRCodeTemplate {...args} />;

QRCodeComponent.args = {
  value: 'http://localhost:6006/?path=/story/example-qrcode--qr-code-component',
};

export const QRCodeIcon = (args: QRCodeProps): ReactElement => <QRCodeTemplate {...args} />;

QRCodeIcon.args = {
  value: 'https://google.com',
  icon: 'https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/512/chrome.png',
};

export const QRCodeStatus = (args: QRCodeProps): ReactElement => <QRCodeTemplate {...args} />;

QRCodeStatus.args = {
  value: 'http://localhost:6006/?path=/story/example-qrcode--qr-code-component',
  status: 'loading',
};

export const QRCodeType = (args: QRCodeProps): ReactElement => <QRCodeTemplate {...args} />;

QRCodeType.args = {
  value: 'http://localhost:6006/?path=/story/example-qrcode--qr-code-component',
  type: 'svg',
};

export const QRCodeSize = (args: QRCodeProps): ReactElement => <QRCodeTemplate {...args} />;

QRCodeSize.args = {
  value: 'http://localhost:6006/?path=/story/example-qrcode--qr-code-component',
  size: 100,
};

export const QRCodeColor = (args: QRCodeProps): ReactElement => <QRCodeTemplate {...args} />;

QRCodeColor.args = {
  value: 'http://localhost:6006/?path=/story/example-qrcode--qr-code-component',
  color: '#ffffff',
  bgColor: '#000000',
};

export const QRCodeErrorLevel = (args: QRCodeProps): ReactElement => <QRCodeTemplate {...args} />;

QRCodeErrorLevel.args = {
  value: 'http://localhost:6006/?path=/story/example-qrcode--qr-code-component',
  errorLevel: 'M',
};
