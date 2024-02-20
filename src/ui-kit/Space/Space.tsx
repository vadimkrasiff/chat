import React, {ReactElement} from 'react';
import {Space as AntSpace} from 'antd';
import styles from './Space.module.scss';
import classNames from 'classnames';
import {SpaceProps as AntdSpaceProps} from 'antd/es/space';
import {SpaceCompactProps as AntdSpaceCompactProps} from 'antd/es/space/Compact';

export type SpaceProps = AntdSpaceProps;
export type SpaceCompactProps = AntdSpaceCompactProps;

export const Space = (props: SpaceProps): ReactElement => {
  return <AntSpace {...props} className={classNames(props.className, styles.space)} />;
};

Space.Compact = AntSpace.Compact;
