import React, {ReactElement} from 'react';
import {Radio as AntRadio} from 'antd';
import styles from './Radio.module.scss';
import classNames from 'classnames';
import {RadioProps as AntdRadioProps} from 'antd/es/radio';
import type {RadioChangeEvent as AntdRadioChangeEvent} from 'antd';

export type RadioChangeEvent = AntdRadioChangeEvent;
export type RadioProps = AntdRadioProps;

export const Radio = (props: RadioProps): ReactElement => {
  return <AntRadio {...props} className={classNames(props.className, styles.radio)} />;
};

Radio.Group = AntRadio.Group;
Radio.Button = AntRadio.Button;
