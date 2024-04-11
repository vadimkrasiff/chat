import { ImageProps } from "ui-kit";
import styles from "./Video.module.scss";
import { Image } from "antd";
import ReactPlayer from "react-player";

interface VideoProps extends ImageProps {
  photo?: string;
  video: string;
  key?: string;
}

export const Video = ({ photo, video, ...props }: VideoProps) => {
  console.log("da");
  return (
    <>
      <Image
        {...props}
        className={styles.video}
        preview={{
          imageRender: (photo) => <ReactPlayer url={video} />,
          toolbarRender: () => null,
        }}
        src={photo}
      />
    </>
  );
};
