import React, {ReactElement} from 'react';

import {Button, Popover, PopoverProps} from 'ui-kit';

export default {
  title: 'Example/Popover',
  component: Popover,
  argTypes: {
    trigger: {control: 'radio', options: ['hover', 'focus', 'click']},
    placement: {
      control: 'select',
      options: [
        'topLeft',
        'top',
        'topRight',
        'leftTop',
        'left',
        'leftBottom',
        'rightTop',
        'right',
        'rightBottom',
        'bottomLeft',
        'bottom',
        'bottomRight',
      ],
    },
  },
};

const PopoverTemplate = (args: PopoverProps) => {
  return (
    <div>
      <Popover {...args}>
        <Button>Trigger me</Button>
      </Popover>
    </div>
  );
};

export const PopoverComponent = (args: PopoverProps): ReactElement => <PopoverTemplate {...args} />;

PopoverComponent.args = {
  content: (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  ),
  title: 'Title',
};

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
export const PopoverTrigger = (args: PopoverProps): ReactElement => <PopoverTemplate {...args} />;

PopoverTrigger.args = {
  content,
  title: 'Title',
  trigger: 'click',
};

export const PopoverPlacement = (args: PopoverProps): ReactElement => (
  <div style={{width: '100%', height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <PopoverTemplate {...args} />
  </div>
);

PopoverPlacement.args = {
  content,
  title: 'Title',
  placement: 'top',
};

export const PopoverArrow = (args: PopoverProps): ReactElement => (
  <div style={{width: '100%', height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <PopoverTemplate {...args} />
  </div>
);

PopoverArrow.args = {
  content,
  title: 'Title',
  arrow: {
    pointAtCenter: true,
  },
};
