import style from "./Message.module.scss";
import readedImage from "./../ChatListItem/assests/readed.svg";
import noReaded from "./../ChatListItem/assests/noReaded.svg";
import dayjs from "dayjs";
import { isEmpty } from "lodash";
import { Image } from "ui-kit";
import ReactPlayer from "react-player";
import Emoji from "react-emoji-render";

interface MessageProps {
  message: any;
}
interface Options {
  protocol?: 'http' | 'https';
  baseUrl?: string;
  /** On the format WxH, like `72x72`. */
  size?: string;
  ext?: 'svg' | 'png';
  className?: string;
}

const Message = ({ message }: MessageProps) => {
  const { isMe, readed, text, attachments, created_at } = message;

  function MyEmojiRenderer({ children, ...rest }:any) {
    const options:Options = {
      // baseUrl: "https://emojipedia.org/apple/ios-17.4",
      // ext: "png",
    };
  
    return <Emoji options={options} {...rest} />;
  }

  return (
    <>
      <div className={isMe ? style.myMessage : style.theirMessage}>
        <div className={style.messageBody}>
          {!isEmpty(attachments) && (
            <div className={style.attachments}>
              <Image.PreviewGroup
                preview={{
                  imageRender: (imageNode, { current }) => {
                    if (attachments[current].video) {
                      return (
                        <ReactPlayer
                          muted
                          controls
                          url={attachments[current].video}
                        />
                      );
                    }
                    return imageNode;
                  },
                }}
              >
                {attachments.map((item: any, index: any) => (
                  <Image
                    key={`image-${index}`}
                    className={style.image}
                    src={item.url}
                  />
                ))}
              </Image.PreviewGroup>
            </div>
            // <div className={style.attachments}>
            //   {attachments.map((attach: any) => (
            //     <img src={attach.url} alt={attach.filename} />
            //   ))}
            // </div>
          )}
          <MyEmojiRenderer text={text} />
          
          <div className={style.statusMessage}>
            {!isMe ? "" : <img src={readed ? readedImage : noReaded} />}
            {dayjs(created_at).format("HH:mm")}
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
