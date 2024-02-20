import React, {ReactElement} from 'react';
import {Tooltip as AntdTooltip} from 'antd';
import styles from './Tooltip.module.scss';
import classNames from 'classnames';
import {TooltipProps as AntdTooltipProps} from 'antd/es/tooltip';

export type TooltipProps = AntdTooltipProps;

export const Tooltip = (props: TooltipProps): ReactElement => {
  return <AntdTooltip {...props} className={classNames(props.className, styles.tooltip)} />;
};
