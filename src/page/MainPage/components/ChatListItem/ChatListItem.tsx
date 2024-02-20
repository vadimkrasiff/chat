import { Avatar, Badge } from "ui-kit";
import style from "./ChatListItem.module.scss";
import readed from "./assests/readed.svg";
import noReaded from "./assests/noReaded.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import classNames from "classnames";

interface ChatListItemProps {
  chat: any;
}

const ChatListItem = ({ chat }: ChatListItemProps) => {
  const {
    fullName,
    online,
    timeLastMessage,
    lastMessage,
    isMe,
    statusMessage,
    chatId,
    login,
  } = chat;

  const { id } = useParams();

  useEffect(() => {}, [id]);

  return (
    <>
      <Link
        to={`/im/${chatId}`}
        className={classNames(
          style.chatListItem,
          id == chatId ? style.currentChat : ""
        )}
      >
        <Badge status="success" dot={online}>
          <Avatar size={50}>{fullName[0]}</Avatar>
        </Badge>
        <div className={style.chatInfo}>
          <div className={style.firtsInfo}>
            <span className={style.fullName}>{fullName}</span>
            <div className={style.statusMessage}>
              {!isMe ? "" : <img src={statusMessage ? readed : noReaded} />}
              {timeLastMessage}
            </div>
          </div>
          <div className={style.lastMessage}>{lastMessage}</div>
        </div>
      </Link>
    </>
  );
};

export default ChatListItem;
