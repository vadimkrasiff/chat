import React, {ReactElement} from 'react';

import {ConfigProvider, Divider, Empty, Select, Space, ConfigProviderProps, EmptyProps} from 'ui-kit';

export default {
  title: 'Example/Empty',
  component: Empty,
  argTypes: {},
};

const EmptyTemplate = (args: EmptyProps) => {
  return <Empty {...args} />;
};

export const EmptyComponent = (args: EmptyProps): ReactElement => <EmptyTemplate {...args} />;

export const EmptyChoseImage = (args: EmptyProps): ReactElement => <EmptyTemplate {...args} />;

EmptyChoseImage.args = {
  image: Empty.PRESENTED_IMAGE_SIMPLE,
};

export const EmptyCastomize = (args: EmptyProps): ReactElement => <EmptyTemplate {...args} />;

EmptyCastomize.args = {
  image: 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg',
  imageStyle: {
    height: 60,
  },
  description: <span>Description text</span>,
};

export const ConfigProviderEmpty = (args: ConfigProviderProps): ReactElement => (
  <ConfigProvider {...args}>
    <Space direction="vertical" style={{width: '100%'}}>
      <Divider>Select</Divider>
      <Select style={{width: 200}} />
    </Space>
  </ConfigProvider>
);

ConfigProviderEmpty.args = {
  renderEmpty: () => <Empty />,
};

export const EmptyNoDescription = (args: EmptyProps): ReactElement => <EmptyTemplate {...args} />;

EmptyNoDescription.args = {
  description: false,
};
