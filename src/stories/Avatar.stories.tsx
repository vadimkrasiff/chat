import React, {ReactElement} from 'react';

import {Avatar, Divider, Space, Tooltip} from 'ui-kit';
import {AvatarProps} from 'ui-kit';
import {UserOutlined, AntDesignOutlined} from '@ant-design/icons';

export default {
  title: 'Example/Avatar',
  component: Avatar,
  argTypes: {},
};

export const AvatarComponent = (args: AvatarProps[]): ReactElement => {
  return (
    <>
      <div>
        <Avatar {...args[0]} />
        <Avatar {...args[1]} />
      </div>
      <div>
        <Avatar {...args[2]} />
        <Avatar {...args[3]} />
      </div>
    </>
  );
};

AvatarComponent.args = [
  {size: 'small', icon: <UserOutlined />},
  {size: 'large', icon: <UserOutlined />},
  {size: 'small', icon: <UserOutlined />, shape: 'square'},
  {size: 'large', icon: <UserOutlined />, shape: 'square'},
];

export const AvatarType = (): ReactElement => {
  const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
  return (
    <>
      <Space size={16} wrap>
        <Avatar icon={<UserOutlined />} />
        <Avatar>U</Avatar>
        <Avatar size={40}>USER</Avatar>
        <Avatar src={url} />
        <Avatar src={<img src={url} alt="avatar" />} />
        <Avatar style={{backgroundColor: '#fde3cf', color: '#f56a00'}}>U</Avatar>
        <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined />} />
      </Space>
    </>
  );
};

export const AvatarGroup = (): ReactElement => {
  return (
    <>
      <Avatar.Group>
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
        <a href="https://ant.design">
          <Avatar style={{backgroundColor: '#f56a00'}}>K</Avatar>
        </a>
        <Tooltip title="Ant User" placement="top">
          <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined />} />
        </Tooltip>
        <Avatar style={{backgroundColor: '#1677ff'}} icon={<AntDesignOutlined />} />
      </Avatar.Group>
      <Divider />
      <Avatar.Group maxCount={2} maxStyle={{color: '#f56a00', backgroundColor: '#fde3cf'}}>
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
        <Avatar style={{backgroundColor: '#f56a00'}}>K</Avatar>
        <Tooltip title="Ant User" placement="top">
          <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined />} />
        </Tooltip>
        <Avatar style={{backgroundColor: '#1677ff'}} icon={<AntDesignOutlined />} />
      </Avatar.Group>
      <Divider />
      <Avatar.Group maxCount={2} size="large" maxStyle={{color: '#f56a00', backgroundColor: '#fde3cf'}}>
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
        <Avatar style={{backgroundColor: '#f56a00'}}>K</Avatar>
        <Tooltip title="Ant User" placement="top">
          <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined />} />
        </Tooltip>
        <Avatar style={{backgroundColor: '#1677ff'}} icon={<AntDesignOutlined />} />
      </Avatar.Group>
      <Divider />
      <Avatar.Group
        maxCount={2}
        maxPopoverTrigger="click"
        size="large"
        maxStyle={{color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer'}}
      >
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar style={{backgroundColor: '#f56a00'}}>K</Avatar>
        <Tooltip title="Ant User" placement="top">
          <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined />} />
        </Tooltip>
        <Avatar style={{backgroundColor: '#1677ff'}} icon={<AntDesignOutlined />} />
      </Avatar.Group>
      <Divider />
      <Avatar.Group shape="square">
        <Avatar style={{backgroundColor: '#fde3cf'}}>A</Avatar>
        <Avatar style={{backgroundColor: '#f56a00'}}>K</Avatar>
        <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined />} />
        <Avatar style={{backgroundColor: '#1677ff'}} icon={<AntDesignOutlined />} />
      </Avatar.Group>
    </>
  );
};
