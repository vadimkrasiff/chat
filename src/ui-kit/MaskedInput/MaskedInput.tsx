import React, { ReactElement } from "react";
import { MaskedInput as AntMaskedInput } from "antd-mask-input";
import styles from "./MaskedInput.module.scss";
import classNames from "classnames";
import { MaskedInputProps as AntdMaskedInputProps } from "antd-mask-input/build/main/lib/MaskedInput";

export type MaskedInputProps = AntdMaskedInputProps;

export const MaskedInput = (props: MaskedInputProps): ReactElement => {
  return (
    <AntMaskedInput
      {...props}
      className={classNames(props.className, styles.maskedInput)}
    />
  );
};
