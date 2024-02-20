import React, {ReactElement} from 'react';
import {Result as AntdResult} from 'antd';
import styles from './Result.module.scss';
import classNames from 'classnames';
import {ResultProps as AntdResultProps} from 'antd/es/result';

export type ResultProps = AntdResultProps;

export const Result = (props: ResultProps): ReactElement => {
  return <AntdResult {...props} className={classNames(props.className, styles.result)} />;
};
