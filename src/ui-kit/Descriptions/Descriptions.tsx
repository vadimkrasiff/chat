import React, {ReactElement} from 'react';
import {Descriptions as AntdDescriptions} from 'antd';
import styles from './Descriptions.module.scss';
import classNames from 'classnames';
import {DescriptionsProps as AntdDescriptionsProps} from 'antd/es/descriptions';

export type DescriptionsProps = AntdDescriptionsProps;

export const Descriptions = (props: DescriptionsProps): ReactElement => {
  return <AntdDescriptions {...props} className={classNames(props.className, styles.descriptions)} />;
};

Descriptions.Item = AntdDescriptions.Item;
