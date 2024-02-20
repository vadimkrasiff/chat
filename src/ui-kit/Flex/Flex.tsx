import React, {ReactElement} from 'react';
import {Flex as AntFlex} from 'antd';
import styles from './Flex.module.scss';
import classNames from 'classnames';
import {FlexProps as AntdFlexProps} from 'antd/es/flex/interface';

export type FlexProps = AntdFlexProps;

export const Flex = (props: FlexProps): ReactElement => {
  return <AntFlex {...props} className={classNames(props.className, styles.flex)} />;
};
