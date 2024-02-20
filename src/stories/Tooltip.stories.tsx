import React, {ReactElement} from 'react';

import {Tooltip, TooltipProps} from 'ui-kit';

export default {
  title: 'Example/Tooltip',
  component: Tooltip,
  argTypes: {
    color: {control: 'color'},
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

export const TooltipComponent = (args: TooltipProps): ReactElement => (
  <Tooltip {...args}>Tooltip will show on mouse enter.</Tooltip>
);

TooltipComponent.args = {
  title: 'Tooltip text',
};

export const TooltipPlacement = (args: TooltipProps): ReactElement => (
  <div
    style={{
      width: '100%',
      height: 400,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Tooltip {...args}>Placement</Tooltip>
  </div>
);

TooltipPlacement.args = {
  placement: 'top',
  title: 'Tooltip text',
};

export const TooltipArrow = (args: TooltipProps): ReactElement => (
  <div
    style={{
      width: '100%',
      height: 400,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Tooltip {...args}>Placement</Tooltip>
  </div>
);

TooltipArrow.args = {
  arrow: {
    pointAtCenter: true,
  },
  title: 'Tooltip text',
};

export const TooltipColor = (args: TooltipProps): ReactElement => (
  <div
    style={{
      width: '100%',
      height: 400,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Tooltip {...args}>Placement</Tooltip>
  </div>
);

TooltipColor.args = {
  color: 'red',
  title: 'Tooltip text',
};
