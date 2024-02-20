import React, {ReactElement, useState} from 'react';

import {Button, Drawer, Space, DrawerProps} from 'ui-kit';

export default {
  title: 'Example/Drawer',
  component: Drawer,
  argTypes: {
    placement: {control: 'radio', options: ['left', 'right', 'top', 'bottom']},
    size: {control: 'radio', options: ['default', 'large']},
  },
};

const DrawerTemplate = (args: DrawerProps) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer {...args} onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export const DrawerComponent = (args: DrawerProps): ReactElement => <DrawerTemplate {...args} />;

DrawerComponent.args = {
  title: 'Basic Drawer',
  placement: 'right',
};

export const DrawerSize = (args: DrawerProps): ReactElement => <DrawerTemplate {...args} />;

DrawerSize.args = {
  size: 'large',
  title: 'Basic Drawer',
  placement: 'right',
};

export const DrawerExtra = (args: DrawerProps): ReactElement => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        {...args}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              OK
            </Button>
          </Space>
        }
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

DrawerExtra.args = {
  title: 'Basic Drawer',
  placement: 'right',
};

const containerStyle: React.CSSProperties = {
  position: 'relative',
  height: 200,
  width: 400,
  padding: 48,
  overflow: 'hidden',
  textAlign: 'center',
  border: '1px solid #dddddd',
};

export const DrawerGetContainer = (args: DrawerProps): ReactElement => (
  <div style={containerStyle}>
    <DrawerTemplate {...args} />
  </div>
);

DrawerGetContainer.args = {
  title: 'Basic Drawer',
  placement: 'right',
  getContainer: false,
};
