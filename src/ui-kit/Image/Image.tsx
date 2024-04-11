import React, { ReactElement } from "react";
import { Image as AntdImage } from "antd";
import styles from "./Image.module.scss";
import classNames from "classnames";
import {
  ImageProps as AntdImageProps,
  CompositionImage as AntdCompositionImage,
} from "antd/es/image";

export type ImageProps = AntdImageProps;
export type CompositionImage<P> = AntdCompositionImage<P>;

export const Image = (props: ImageProps): ReactElement => {
  return (
    <AntdImage
      {...props}
      className={classNames(props.className, styles.image)}
    />
  );
};

Image.PreviewGroup = AntdImage.PreviewGroup;
