import React, {ReactElement} from 'react';
import {Badge as AntdBadge} from 'antd';
import styles from './Badge.module.scss';
import classNames from 'classnames';
import {BadgeProps as AntdBadgeProps} from 'antd/es/badge';

export type BadgeProps = AntdBadgeProps;

export const Badge = (props: BadgeProps): ReactElement => {
  return <AntdBadge {...props} className={classNames(props.className, styles.badge)} />;
};

Badge.Ribbon = AntdBadge.Ribbon;
