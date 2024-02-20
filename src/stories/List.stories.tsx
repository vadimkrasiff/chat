import React, {ReactElement} from 'react';

import {Avatar, List, Space, ListProps} from 'ui-kit';
import {LikeOutlined, MessageOutlined, StarOutlined} from '@ant-design/icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/List',
  component: List,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {control: 'radio', options: ['default', 'small', 'large']},
    itemLayout: {control: 'radio', options: ['horizontal', 'vertical']},
    bordered: {control: 'boolean'},
  },
};

const ListTemplate = (args: ListProps<any>) => {
  return <List {...args} />;
};

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

interface dataSourceType {
  title: string;
}

const dataSource: dataSourceType[] = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

export const ListComponent = (args: ListProps<string>): ReactElement => <ListTemplate {...args} />;

ListComponent.args = {
  size: 'small',
  header: <div>Header</div>,
  footer: <div>Footer</div>,
  bordered: true,
  dataSource: data,
  renderItem: (item: string) => <List.Item>{item}</List.Item>,
};

export const ListItemMeta = (args: ListProps<dataSourceType>): ReactElement => <ListTemplate {...args} />;

ListItemMeta.args = {
  dataSource,
  renderItem: (item: dataSourceType, index: number) => (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
        title={<a href="https://ant.design">{item.title}</a>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>
  ),
};

const IconText = ({icon, text}: {icon: React.FC; text: string}) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const ListItemLayout = (args: ListProps<dataSourceType>): ReactElement => <ListTemplate {...args} />;

ListItemLayout.args = {
  itemLayout: 'vertical',
  dataSource,
  renderItem: (item: dataSourceType, index: number) => (
    <List.Item
      actions={[
        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
      ]}
      extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
    >
      <List.Item.Meta
        avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
        title={<a href="https://ant.design">{item.title}</a>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>
  ),
};
const dateItem = [];
for (let i = 0; i < 20; i++) {
  dateItem.push({
    title: `Ant Design Title ${i}`,
  });
}

export const ListPagination = (args: ListProps<dataSourceType>): ReactElement => <ListTemplate {...args} />;

ListPagination.args = {
  pagination: {
    pageSize: 4,
    position: 'bottom',
    align: 'center',
  },
  dataSource: dateItem,
  renderItem: (item: dataSourceType, index: number) => (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
        title={<a href="https://ant.design">{item.title}</a>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>
  ),
};

export const ListGrid = (args: ListProps<dataSourceType>): ReactElement => <ListTemplate {...args} />;

ListGrid.args = {
  grid: {gutter: 16, column: 4},
  dataSource,
  renderItem: (item: dataSourceType, index: number) => (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
        title={<a href="https://ant.design">{item.title}</a>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>
  ),
};
