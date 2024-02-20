import React, {ReactElement} from 'react';
import {Typography as AntTypography} from 'antd';
import styles from './Typography.module.scss';
import classNames from 'classnames';
import {LinkProps as AntdLinkProps} from 'antd/es/typography/Link';
import {ParagraphProps as AntdParagraphProps} from 'antd/es/typography/Paragraph';
import {TextProps as AntdTextProps} from 'antd/es/typography/Text';
import {TypographyProps as AntdTypographyProps} from 'antd/es/typography';

export type TypographyProps = AntdTypographyProps;
export type LinkProps = AntdLinkProps;
export type ParagraphProps = AntdParagraphProps;
export type TextProps = AntdTextProps;

export const Typography = (props: TypographyProps): ReactElement => {
  return <AntTypography {...props} className={classNames(styles.typography)} />;
};

Typography.Title = AntTypography.Title;
Typography.Paragraph = AntTypography.Paragraph;
Typography.Text = AntTypography.Text;
Typography.Link = AntTypography.Link;
