import { Button, Image, UploadFile } from "ui-kit";
import style from "../Dialog.module.scss";
import { DeleteOutlined } from "@ant-design/icons";

interface ImageFilesProps {
  fileImages: UploadFile[];
  onRemoveImages: (value: any) => void;
}

const ImageFiles = ({ fileImages, onRemoveImages }: ImageFilesProps) => {
  return (
    <Image.PreviewGroup
      preview={{
        imageRender: (imageNode, { current }) => {
          //   if (fileImages[current].video) {
          //     return (
          //       <ReactPlayer muted controls url={attachments[current].video} />
          //     );
          //   }
          return imageNode;
        },
      }}
    >
      {fileImages.map((file, index) => {
        const url =
          file.originFileObj && URL.createObjectURL(file.originFileObj);
        const curl = "https://images.ast.ru/upload/iblock/ba8/Gosling_752.jpg";
        return (
          <div className={style.imageWrap}>
            <Image
              key={`image-${index}`}
              className={style.image}
              src={url || curl}
            />
            <Button className={style.deleteButton} ghost type="text" onClick={() => onRemoveImages(file)} icon={<DeleteOutlined />} />
          </div>
        );
      })}
    </Image.PreviewGroup>
  );
};

export default ImageFiles;
