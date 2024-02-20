import React, {ReactElement} from 'react';

import {Button, Result, ResultProps} from 'ui-kit';
import {RiseOutlined} from '@ant-design/icons';

export default {
  title: 'Example/Result',
  component: Result,
  argTypes: {
    status: {control: 'radio', options: ['success', 'error', 'info', 'warning', '404', '403', '500']},
  },
};

const ResultTemplate = (args: ResultProps) => {
  return <Result {...args} />;
};

export const ResultComponent = (args: ResultProps): ReactElement => <ResultTemplate {...args} />;

ResultComponent.args = {
  status: 'success',
  title: 'Title',
  subTitle: 'SubTitle',
};

export const ResultIcon = (args: ResultProps): ReactElement => <ResultTemplate {...args} />;

ResultIcon.args = {
  status: 'success',
  title: 'Icon',
  subTitle: 'SubTitle',
  icon: <RiseOutlined />,
};

export const ResultExtra = (args: ResultProps): ReactElement => <ResultTemplate {...args} />;

ResultExtra.args = {
  status: 'success',
  title: 'Extra',
  subTitle: 'SubTitle',
  extra: [
    <Button type="primary" key="console">
      Go Console
    </Button>,
    <Button key="buy">Buy Again</Button>,
  ],
};
