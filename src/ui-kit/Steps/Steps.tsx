import React, {ReactElement} from 'react';
import {Steps as AntSteps} from 'antd';
import styles from './Steps.module.scss';
import classNames from 'classnames';
import {StepsProps as AntdStepsProps, StepProps as AntdStepProps} from 'antd/es/steps';

export type StepsProps = AntdStepsProps;
export type StepProps = AntdStepProps;

export const Steps = (props: StepsProps): ReactElement => {
  return <AntSteps {...props} className={classNames(props.className, styles.steps)} />;
};
