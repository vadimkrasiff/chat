import React, {ReactElement} from 'react';

import {Skeleton, SkeletonComponentsProps, Space, SkeletonProps} from 'ui-kit';

export default {
  title: 'Example/Skeleton',
  component: Skeleton,
  argTypes: {
    active: {control: 'boolean'},
  },
};

const SkeletonTemplate = (args: SkeletonProps) => {
  return <Skeleton {...args} />;
};

const SkeletonComponentsTemplate = (args: SkeletonComponentsProps) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <Space>
        <Skeleton.Avatar {...args} />
        <Skeleton.Button {...args} />
        <Skeleton.Input {...args} />
      </Space>
      <Space>
        <Skeleton.Image {...args} />
        <Skeleton.Node {...args} />
      </Space>
    </div>
  );
};

export const SkeletonComponent = (args: SkeletonProps): ReactElement => <SkeletonTemplate {...args} />;

export const SkeletonAvatarProp = (args: SkeletonProps): ReactElement => <SkeletonTemplate {...args} />;

SkeletonAvatarProp.args = {
  avatar: true,
};

export const SkeletonActive = (args: SkeletonProps): ReactElement => <SkeletonTemplate {...args} />;

SkeletonActive.args = {
  active: true,
};

export const SkeletonComponents = (args: SkeletonComponentsProps): ReactElement => (
  <SkeletonComponentsTemplate {...args} />
);
