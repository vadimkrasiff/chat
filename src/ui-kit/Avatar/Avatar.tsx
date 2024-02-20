import React, {ReactElement} from 'react';
import {Avatar as AntdAvatar} from 'antd';
import styles from './Avatar.module.scss';
import classNames from 'classnames';
import {AvatarProps as AntdAvatarProps} from 'antd/es/avatar';

export type AvatarProps = AntdAvatarProps;

export const Avatar = (props: AvatarProps): ReactElement => {
  return <AntdAvatar {...props} className={classNames(props.className, styles.avatar)} />;
};

Avatar.Group = AntdAvatar.Group;
