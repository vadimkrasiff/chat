import React, {ReactElement} from 'react';
import {Affix as AntdAffix} from 'antd';
import styles from './Affix.module.scss';
import classNames from 'classnames';
import {AffixProps as AntdAffixProps} from 'antd/es/affix';

export type AffixProps = AntdAffixProps;

export const Affix = (props: AffixProps): ReactElement => {
  return <AntdAffix {...props} className={classNames(props.className, styles.affix)} />;
};
