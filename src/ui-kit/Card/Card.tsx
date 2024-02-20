import React, {ReactElement} from 'react';
import {Card as AntdCard} from 'antd';
import styles from './Card.module.scss';
import classNames from 'classnames';
import {CardProps as AntdCardProps} from 'antd/es/card';

export type CardProps = AntdCardProps;

export const Card = (props: CardProps): ReactElement => {
  return <AntdCard {...props} className={classNames(props.className, styles.card)} />;
};
Card.Meta = AntdCard.Meta;
Card.Grid = AntdCard.Grid;
