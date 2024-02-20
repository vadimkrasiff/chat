import React, {ReactElement} from 'react';
import {Skeleton as AntdSkeleton} from 'antd';
import styles from './Skeleton.module.scss';
import classNames from 'classnames';
import {SkeletonProps as AntdSkeletonProps} from 'antd/es/skeleton';
import {SkeletonButtonProps} from 'antd/es/skeleton/Button';
import {SkeletonInputProps} from 'antd/es/skeleton/Input';
import {SkeletonImageProps} from 'antd/es/skeleton/Image';
import {SkeletonNodeProps} from 'antd/es/skeleton/Node';
import {AvatarProps} from 'antd/es/skeleton/Avatar';

export type SkeletonProps = AntdSkeletonProps;

export type SkeletonComponentsProps = SkeletonButtonProps &
  SkeletonInputProps &
  SkeletonImageProps &
  SkeletonNodeProps &
  AvatarProps;
export const Skeleton = (props: SkeletonProps): ReactElement => {
  return <AntdSkeleton {...props} className={classNames(props.className, styles.skeleton)} />;
};

Skeleton.Input = AntdSkeleton.Input;
Skeleton.Avatar = AntdSkeleton.Avatar;
Skeleton.Button = AntdSkeleton.Button;
Skeleton.Image = AntdSkeleton.Image;
Skeleton.Node = AntdSkeleton.Node;
