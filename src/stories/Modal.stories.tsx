import React, {ReactElement, useState} from 'react';

import {Button, Modal, ModalProps} from 'ui-kit';

export default {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {},
};

const ModalTemplate = (args: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal {...args} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export const ModalComponent = (args: ModalProps): ReactElement => <ModalTemplate {...args} />;
