import React, {ReactElement} from 'react';

import {Anchor} from 'ui-kit';
import {AnchorProps} from 'ui-kit';

export default {
  title: 'Example/Anchor',
  component: Anchor,
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    affix: {control: 'boolean'},
    showInkInFixed: {control: 'boolean'},
    replace: {control: 'boolean'},
    bounds: {control: 'number'},
    offsetTop: {control: 'number'},
    targetOffset: {control: 'number'},
  },
};

const items = [
  {
    key: 'part-1',
    href: '#part-1',
    title: 'Part 1',
  },
  {
    key: 'part-2',
    href: '#part-2',
    title: 'Part 2',
  },
  {
    key: 'part-3',
    href: '#part-3',
    title: 'Part 3',
  },
];

const AnchorTemplate = (args: AnchorProps) => {
  return (
    <>
      <div style={{padding: '20px'}}>
        <Anchor {...args} />
      </div>
      <div>
        <div
          id="part-1"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: 'rgba(0,255,0,0.02)',
          }}
        />
        <div
          id="part-2"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: 'rgba(0,0,255,0.02)',
          }}
        />
        <div id="part-3" style={{width: '100vw', height: '100vh', textAlign: 'center', background: '#FFFBE9'}} />
      </div>
    </>
  );
};

export const AnchorComponent = (args: AnchorProps): ReactElement => <AnchorTemplate {...args} />;

AnchorComponent.args = {
  items,
};
