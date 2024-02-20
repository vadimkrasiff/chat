import React, {ReactElement} from 'react';
import {Collapse as AntdCollapse} from 'antd';
import styles from './Collapse.module.scss';
import classNames from 'classnames';
import {CollapseProps as AntdCollapseProps} from 'antd/es/collapse';

export type CollapseProps = AntdCollapseProps;

export const Collapse = (props: CollapseProps): ReactElement => {
  return <AntdCollapse {...props} className={classNames(props.className, styles.collapse)} />;
};

Collapse.Panel = AntdCollapse.Panel;
