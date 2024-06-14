import style from "./Message.module.scss";
import readedImage from "./../ChatListItem/assests/readed.svg";
import noReaded from "./../ChatListItem/assests/noReaded.svg";
import dayjs from "dayjs";
import { isEmpty } from "lodash";
import { Dropdown, Image, MenuProps } from "ui-kit";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";
import { showDeleteConfirm } from "Helpers";
import { removeMessage } from "api";
import { useMemo } from "react";
import FileList from "../Dialog/components/FileList";

interface MessageProps {
  message: any;
}
interface Options {
  protocol?: "http" | "https";
  baseUrl?: string;
  /** On the format WxH, like `72x72`. */
  size?: string;
  ext?: "svg" | "png";
  className?: string;
}

const Message = ({ message }: MessageProps) => {
  const { isSystem, _id, unread, author, text, chat, attachments, createdAt } =
    message;

  const user = useSelector((state: any) => state?.user);

  const files = useMemo(
    () =>
      attachments?.files
        ? attachments.files.map((file: any) => ({
            ...file,
            url: "http://localhost:3000" + file.url,
            name: file.filename,
          }))
        : [],
    [attachments?.files]
  );
  const isMe = author._id === user._id;

  const onRemoveMessage = async () => {
    const deletedMessage = await removeMessage(_id);
  };

  const items: MenuProps["items"] = [
    {
      label: "Удалить сообщение",
      key: "1",
      danger: true,
      icon: <DeleteOutlined />,
      onClick: () => {
        showDeleteConfirm({
          content: "Вы действительно хотите удалить сообщение?",
          onOk: () => onRemoveMessage(),
        });
      },
    },
  ];

  const messageContent = () => (
    <div className={isMe ? style.myMessage : style.theirMessage}>
      <div className={style.messageBody}>
        {chat?.type == "group" && (
          <div className={style.messageAuthor}>{author?.name}</div>
        )}
        {!isEmpty(attachments?.photos) && (
          <div className={style.attachments}>
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
              {attachments?.photos?.map((item: any, index: any) => (
                <Image
                  key={`image-${index}`}
                  className={style.image}
                  src={"http://localhost:3000" + item.url}
                />
              ))}
            </Image.PreviewGroup>
          </div>
        )}
        {!isEmpty(files) && <FileList fileList={files} />}
        {text}
        <div className={style.statusMessage}>
          {!isMe ? "" : <img src={!unread ? readedImage : noReaded} />}
          {dayjs(new Date(createdAt)).format("HH:mm")}
        </div>
      </div>
    </div>
  );
  return isSystem ? (
    <>
      <div className={style.systemMessage}>{text}</div>
    </>
  ) : isMe ? (
    <Dropdown menu={{ items }} trigger={["contextMenu"]}>
      {messageContent()}
    </Dropdown>
  ) : (
    messageContent()
  );
};

export default Message;
