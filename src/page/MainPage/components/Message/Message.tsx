import style from "./Message.module.scss";
import readedImage from "./../ChatListItem/assests/readed.svg";
import noReaded from "./../ChatListItem/assests/noReaded.svg";
import dayjs from "dayjs";
import { isEmpty } from "lodash";
interface MessageProps {
  message: any;
}

const Message = ({ message }: MessageProps) => {
  const { isMe, readed, text, attachments, created_at } = message;
  return (
    <>
      <div className={isMe ? style.myMessage : style.theirMessage}>
        <div className={style.messageBody}>
          {!isEmpty(attachments) && (
            <div className={style.attachments}>
              {attachments.map((attach: any) => (
                <img src={attach.url} alt={attach.filename} />
              ))}
            </div>
          )}
          {text}
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
