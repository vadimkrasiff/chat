import React, {ReactElement, useState} from 'react';

import {Button, Popover, Steps, message, StepProps, StepsProps} from 'ui-kit';
import {UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined} from '@ant-design/icons';

export default {
  title: 'Example/Steps',
  component: Steps,
  argTypes: {
    items: {control: 'object'},
  },
};

const StepsTemplate = (args: StepsProps) => {
  return (
    <div style={{height: '200px'}}>
      <Steps {...args} />
    </div>
  );
};

interface SwitchStepsProps extends StepsProps {
  items: StepProps[];
}

const SwitchStepsTemplate = (args: SwitchStepsProps) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.45)',
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    borderRadius: '8px',
    marginTop: 16,
  };

  return (
    <>
      <Steps {...args} current={current} />
      <div style={contentStyle}>{args.items[current].title}</div>
      <div style={{marginTop: 24}}>
        {current < args.items.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === args.items.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{margin: '0 8px'}} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

const items = [
  {
    title: 'Finished',
    description: 'This is a description.',
  },
  {
    title: 'In Progress',
    description: 'This is a description.',
  },
  {
    title: 'Waiting',
    description: 'This is a description.',
  },
];

const itemsIcon = [
  {
    title: 'Login',
    status: 'finish',
    icon: <UserOutlined />,
  },
  {
    title: 'Verification',
    status: 'finish',
    icon: <SolutionOutlined />,
  },
  {
    title: 'Pay',
    status: 'process',
    icon: <LoadingOutlined />,
  },
  {
    title: 'Done',
    status: 'wait',
    icon: <SmileOutlined />,
  },
];

export const StepsComponent = (args: StepsProps): ReactElement => <StepsTemplate {...args} />;

StepsComponent.args = {
  items,
  current: 1,
};

export const StepsSmallComponent = (args: StepsProps): ReactElement => <StepsTemplate {...args} />;

StepsSmallComponent.args = {
  items,
  current: 1,
  size: 'small',
};

export const StepsIcon = (args: StepsProps): ReactElement => <StepsTemplate {...args} />;

StepsIcon.args = {
  items: itemsIcon,
  current: 1,
};

export const StepsSwitch = (args: SwitchStepsProps): ReactElement => <SwitchStepsTemplate {...args} />;

StepsSwitch.args = {
  items: items,
};

export const StepsVertical = (args: StepsProps): ReactElement => <StepsTemplate {...args} />;

StepsVertical.args = {
  items: items,
  current: 1,
  direction: 'vertical',
};

export const StepsErrorStatus = (args: StepsProps): ReactElement => <StepsTemplate {...args} />;

StepsErrorStatus.args = {
  items: items,
  current: 1,
  status: 'error',
};

export const StepsDotStyle = (args: StepsProps): ReactElement => (
  <>
    <StepsTemplate {...args} />
    <StepsTemplate {...args} direction="vertical" />
  </>
);

StepsDotStyle.args = {
  items: items,
  current: 1,
  progressDot: true,
};

const customDot: StepsProps['progressDot'] = (dot, {status, index}) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

export const StepsCustomDot = (args: StepsProps): ReactElement => <StepsTemplate {...args} />;

StepsCustomDot.args = {
  items: items,
  current: 1,
  progressDot: customDot,
};

export const StepsClickable = (args: StepsProps): ReactElement => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  return (
    <>
      <StepsTemplate {...args} current={current} onChange={onChange} />
      <StepsTemplate {...args} direction="vertical" current={current} onChange={onChange} />
    </>
  );
};

StepsClickable.args = {
  items: items,
};

export const NavigationSteps = (args: StepsProps): ReactElement => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  return <StepsTemplate {...args} current={current} onChange={onChange} />;
};

NavigationSteps.args = {
  items: items,
  current: 1,
  type: 'navigation',
};

export const StepsWithProgress = (args: StepsProps): ReactElement => <StepsTemplate {...args} />;

StepsWithProgress.args = {
  items: items,
  current: 1,
  percent: 60,
};

export const StepsLabelPlacement = (args: StepsProps): ReactElement => <StepsTemplate {...args} />;

StepsLabelPlacement.args = {
  items: items,
  current: 1,
  labelPlacement: 'vertical',
};

export const InlineSteps = (args: StepsProps): ReactElement => <StepsTemplate {...args} />;

InlineSteps.args = {
  items: items,
  current: 1,
  type: 'inline',
};
