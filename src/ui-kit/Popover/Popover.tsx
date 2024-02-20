import React, {ReactElement} from 'react';
import {Popover as AntdPopover} from 'antd';
import styles from './Popover.module.scss';
import classNames from 'classnames';
import {PopoverProps as AntdPopoverProps} from 'antd/es/popover';

export type PopoverProps = AntdPopoverProps;

export const Popover = (props: PopoverProps): ReactElement => {
  return <AntdPopover {...props} className={classNames(props.className, styles.popover)} />;
};
