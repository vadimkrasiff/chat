import React, {ReactElement, useRef, useState} from 'react';

import {Button, Divider, Space, Tour, TourProps} from 'ui-kit';
import {EllipsisOutlined} from '@ant-design/icons';

export default {
  title: 'Example/Tour',
  component: Tour,
  argTypes: {
    type: {control: 'radio', options: ['default', 'primary']},
  },
};

const TourTemplate = (args: TourProps) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour {...args} open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};

export const TourComponent = (args: TourProps): ReactElement => <TourTemplate {...args} />;

export const TourNonModal = (args: TourProps): ReactElement => <TourTemplate {...args} />;

TourNonModal.args = {
  mask: false,
};

export const TourType = (args: TourProps): ReactElement => <TourTemplate {...args} />;

TourType.args = {
  type: 'primary',
};

export const TourIndicatorsRender = (args: TourProps): ReactElement => <TourTemplate {...args} />;

TourIndicatorsRender.args = {
  indicatorsRender: (current: number, total: number) => (
    <span>
      {current + 1} / {total}
    </span>
  ),
};
