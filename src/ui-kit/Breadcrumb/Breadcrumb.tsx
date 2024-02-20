import React, {ReactElement} from 'react';
import {Breadcrumb as AntBreadcrumb} from 'antd';
import styles from './Breadcrumb.module.scss';
import classNames from 'classnames';
import {BreadcrumbProps as AntdBreadcrumbProps} from 'antd/es/breadcrumb';
import {ItemType as AntdItemType} from 'antd/es/breadcrumb/Breadcrumb';

export type ItemType = AntdItemType;

export type BreadcrumbProps = AntdBreadcrumbProps;

export const Breadcrumb = (props: BreadcrumbProps): ReactElement => {
  return <AntBreadcrumb {...props} className={classNames(props.className, styles.breadcrumb)} />;
};

Breadcrumb.Item = AntBreadcrumb.Item;
