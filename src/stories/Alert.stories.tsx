import React, {ReactElement, useState} from 'react';

import {Alert, Button} from 'ui-kit';
import {AlertProps} from 'ui-kit';

const {ErrorBoundary} = Alert;
export default {
  title: 'Example/Alert',
  component: Alert,
  argTypes: {
    type: {control: 'radio', options: ['success', 'info', 'warning', 'error']},
    description: {control: 'text'},
    showIcon: {control: 'boolean'},
    banner: {control: 'boolean'},
  },
};

const AlertTemplate = (args: AlertProps) => {
  return <Alert {...args} />;
};

export const AlertComponent = (args: AlertProps): ReactElement => <AlertTemplate {...args} />;

AlertComponent.args = {
  message: 'Alert message',
};

export const AlertType = (args: AlertProps): ReactElement => <AlertTemplate {...args} />;

AlertType.args = {
  type: 'success',
  message: 'Alert message',
};

export const AlertClosable = (args: AlertProps): ReactElement => <AlertTemplate {...args} />;

AlertClosable.args = {
  closable: true,
  message: 'Alert message',
};

export const AlertDescription = (args: AlertProps): ReactElement => <AlertTemplate {...args} />;

AlertDescription.args = {
  description: 'Alert description',
  message: 'Alert message',
};

export const AlertIcon = (args: AlertProps): ReactElement => <AlertTemplate {...args} />;

AlertIcon.args = {
  showIcon: true,
  message: 'Alert message',
  description: 'Alert description',
};

export const AlertBanner = (args: AlertProps): ReactElement => <AlertTemplate {...args} />;

AlertBanner.args = {
  banner: true,
  message: 'Alert message',
};

const ThrowError = () => {
  const [error, setError] = useState<Error>();
  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };

  if (error) {
    throw error;
  }
  return (
    <Button danger onClick={onClick}>
      Click me to throw a error
    </Button>
  );
};

export const AlertErrorBoundary = (): ReactElement => (
  <ErrorBoundary>
    <ThrowError />
  </ErrorBoundary>
);
