import React, {ReactElement} from 'react';

import {Affix, AffixProps, Button} from 'ui-kit';

export default {
  title: 'Example/Affix',
  component: Affix,
  argTypes: {},
};

const AffixTemplate = (args: AffixProps) => {
  return (
    <div
      style={{
        height: 1000,
      }}
    >
      <Affix {...args}>
        <Button>Affix</Button>
      </Affix>
    </div>
  );
};

export const AffixOffsetTop = (args: AffixProps): ReactElement => (
  <>
    <div
      style={{
        height: 300,
        background: '#dddddd',
        borderRadius: 12,
      }}
    />
    <AffixTemplate {...args} />
  </>
);

AffixOffsetTop.args = {
  offsetTop: 100,
};

export const AffixOffsetBottom = (args: AffixProps): ReactElement => (
  <>
    <div
      style={{
        height: 800,
        background: '#dddddd',
        borderRadius: 12,
      }}
    />
    <AffixTemplate {...args} />
  </>
);

AffixOffsetBottom.args = {
  offsetBottom: 100,
};
