import React, {ReactElement} from 'react';
import {Button as AntButton} from 'antd';
import styles from './Button.module.scss';
import classNames from 'classnames';
import {ButtonProps as AntdButtonProps} from 'antd/es/button';

export type ButtonRefProps = AntdButtonProps & React.RefAttributes<HTMLElement>;
export type ButtonProps = AntdButtonProps;

interface CustomButtonProps extends React.ForwardRefExoticComponent<ButtonRefProps> {
  Group: typeof AntButton.Group;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonRefProps>((props, ref): ReactElement => {
  return <AntButton className={classNames(props.className, styles.button)} {...props} ref={ref} />;
}) as CustomButtonProps;

Button.Group = AntButton.Group;
