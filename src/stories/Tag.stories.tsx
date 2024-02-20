import React, {ReactElement, useState} from 'react';

import {Space, Tag, TagProps} from 'ui-kit';
import {GitlabOutlined} from '@ant-design/icons';

const {CheckableTag} = Tag;

export default {
  title: 'Example/Tag',
  component: Tag,
  argTypes: {
    color: {control: 'color'},
  },
};

export const TagComponent = (args: TagProps): ReactElement => <Tag {...args}>Tag</Tag>;

export const TagColor = (args: TagProps): ReactElement => <Tag {...args}>Tag</Tag>;

TagColor.args = {
  color: 'red',
};

export const TagCloseIcon = (args: TagProps): ReactElement => <Tag {...args}>Tag</Tag>;

TagCloseIcon.args = {
  closeIcon: true,
};

const tagsData = ['Tag1', 'Tag2', 'Tag3', 'Tag4'];

export const CheckableTagComponent = (): ReactElement => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['Tag2']);
  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };
  return (
    <Space size={[0, 8]} wrap>
      {tagsData.map((tag) => (
        <CheckableTag key={tag} checked={selectedTags.includes(tag)} onChange={(checked) => handleChange(tag, checked)}>
          {tag}
        </CheckableTag>
      ))}
    </Space>
  );
};

export const TagIcon = (args: TagProps): ReactElement => <Tag {...args}>Gitlab</Tag>;

TagIcon.args = {
  icon: <GitlabOutlined />,
  color: '#F1A699',
};

export const TagStatus = (): ReactElement => (
  <Space size={[0, 8]} wrap>
    <Tag color="success">success</Tag>
    <Tag color="processing">processing</Tag>
    <Tag color="error">error</Tag>
    <Tag color="warning">warning</Tag>
    <Tag color="default">default</Tag>
  </Space>
);

export const TagBorderless = (args: TagProps): ReactElement => <Tag {...args}>bordered</Tag>;

TagBorderless.args = {
  bordered: false,
};
