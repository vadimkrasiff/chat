import React, {ReactElement} from 'react';
import {Anchor as AntAnchor} from 'antd';
import styles from './Anchor.module.scss';
import classNames from 'classnames';
import {AnchorProps as AntdAnchorProps} from 'antd/es/anchor';

export type AnchorProps = AntdAnchorProps;

export const Anchor = (props: AnchorProps): ReactElement => {
  return <AntAnchor {...props} className={classNames(props.className, styles.anchor)} />;
};
