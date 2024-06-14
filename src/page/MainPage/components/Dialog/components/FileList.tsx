import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import style from "./FileList.module.scss";
import { getIcon } from "../../DialogInfo/components/FileTab/utils";
import { Button, UploadFile } from "ui-kit";
import { getSizeFile } from "Helpers/getSizeFile";

interface FileListPropsType {
  fileList: UploadFile[];
  onRemove?: (value: UploadFile) => void;
}

const FileList = ({ fileList, onRemove }: FileListPropsType) => {
  return fileList.map((file) => {
    const onClick = () => {
      onRemove && onRemove(file);
    };
    return (
      <div className={style.fileWrap} key={file.name + file.size}>
        <div className={style.fileContainer}>
          <div className={style.fileIcon}>
            <span className={style.icon}>{getIcon(file.name)}</span>
            <UploadOutlined className={style.uploadIcon} />
          </div>
          <div className={style.fileInfo}>
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              {file.name}
            </a>
            <div style={{ color: "#747474" }}>
              {getSizeFile(file.size || 0)}
            </div>
          </div>
        </div>
        {onRemove && (
          <Button
            onClick={onClick}
            type="text"
            danger
            icon={<DeleteOutlined style={{ fontSize: "18px" }} />}
          />
        )}
      </div>
    );
  });
};

export default FileList;
