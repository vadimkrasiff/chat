import React, {ReactElement} from 'react';
import {Mentions as AntdMentions} from 'antd';
import styles from './Mentions.module.scss';
import classNames from 'classnames';
import {MentionProps as AntdMentionProps} from 'antd/es/mentions';

export type MentionProps = AntdMentionProps;

export const Mentions = (props: MentionProps): ReactElement => {
  return <AntdMentions {...props} className={classNames(props.className, styles.mentions)} />;
};
