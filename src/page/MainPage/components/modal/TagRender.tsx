import React from "react";
import { Tag, Avatar } from "antd";
import styles from "./CreateChatForm.module.scss";

const TagRender = (props: any) => {
  const { label, value, closable, onClose } = props;

  return (
    <Tag
      color="blue"
      closable={closable}
      onClose={onClose}
      className={styles.tag}
    >
      {label}
    </Tag>
  );
};

export default TagRender;
