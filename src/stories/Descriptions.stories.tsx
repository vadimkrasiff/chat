import React, {ReactElement} from 'react';

import {Descriptions, DescriptionsProps} from 'ui-kit';

export default {
  title: 'Example/Descriptions',
  component: Descriptions,
  argTypes: {
    size: {control: 'radio', options: ['middle', 'small', 'default']},
    layout: {control: 'radio', options: ['horizontal', 'vertical']},
    bordered: {control: 'boolean'},
  },
};

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'UserName',
    children: 'Zhou Maomao',
  },
  {
    key: '2',
    label: 'Telephone',
    children: '1810000000',
  },
  {
    key: '3',
    label: 'Live',
    children: 'Hangzhou, Zhejiang',
  },
  {
    key: '4',
    label: 'Remark',
    children: 'empty',
  },
  {
    key: '5',
    label: 'Address',
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
  },
];

const DescriptionsTemplate = (args: DescriptionsProps) => {
  return <Descriptions {...args} />;
};

export const DescriptionsComponent = (args: DescriptionsProps): ReactElement => <DescriptionsTemplate {...args} />;

DescriptionsComponent.args = {
  items,
  title: 'User Info',
};

export const DescriptionsBordered = (args: DescriptionsProps): ReactElement => <DescriptionsTemplate {...args} />;

DescriptionsBordered.args = {
  items,
  title: 'User Info',
  bordered: true,
};

export const DescriptionsSize = (args: DescriptionsProps): ReactElement => <DescriptionsTemplate {...args} />;

DescriptionsSize.args = {
  items,
  title: 'User Info',
  size: 'small',
  bordered: true,
};

export const DescriptionsResponsive = (args: DescriptionsProps): ReactElement => <DescriptionsTemplate {...args} />;

DescriptionsResponsive.args = {
  items,
  title: 'Responsive Descriptions',
  bordered: true,
  column: {xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4},
};

export const DescriptionsLayout = (args: DescriptionsProps): ReactElement => <DescriptionsTemplate {...args} />;

DescriptionsLayout.args = {
  items,
  title: 'Layout Descriptions',
  layout: 'vertical',
};
