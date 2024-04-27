import React, { useState } from "react";
import { getIcon } from "./utils";
import styles from "./FileTab.module.scss";
import { UploadOutlined } from "@ant-design/icons";

const FileTab = () => {
  const [files, setFiles] = useState([
    {
      name: "file.pdf",
      size: "16.4KB",
    },
  ]);
  return (
    <>
      {files.map((file) => (
        <div className={styles.fileContainer} key={file.name + file.size}>
          <div className={styles.fileIcon}>
            <div className={styles.icon}>{getIcon(file.name)}</div>
            <UploadOutlined className={styles.uploadIcon} />
          </div>
          <div className={styles.fileInfo}>
            <span className={styles.fileName}>{file.name}</span>
            <div className={styles.fileSize}>{file.size}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FileTab;
