import { Avatar, Badge } from "ui-kit";
import style from "./ChatListItem.module.scss";
import readedImage from "./assests/readed.svg";
import noReaded from "./assests/noReaded.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import classNames from "classnames";
import dayjs from "dayjs";

interface ChatListItemProps {
  chat: any;
}

const ChatListItem = ({ chat }: ChatListItemProps) => {
  const {
    fullname,
    online,
    created_at,
    text,
    isMe,
    readed,
    chatId,
    avatar,
    login,
    unreaded,
  } = chat;

  const { id } = useParams();

  useEffect(() => {}, [id]);

  const formatDate = (date: Date): string => {
    const today = dayjs().locale("ru");
    const inputDate = dayjs(date).locale("ru");

    if (inputDate.isSame(today, "day")) {
      // Если дата сегодняшняя, возвращаем время в формате HH:mm
      return inputDate.format("HH:mm");
    } else if (inputDate.isSame(today, "week")) {
      // Если дата на этой неделе, возвращаем день недели (две буквы)
      return inputDate.format("dd");
    } else {
      // Возвращаем дату в формате dd.MM.yyyy
      return inputDate.format("DD.MM.YYYY");
    }
  };

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
          {avatar ? (
            <Avatar src={avatar} size={50} />
          ) : (
            <Avatar size={50}>{fullname[0]}</Avatar>
          )}
        </Badge>
        <div className={style.chatInfo}>
          <div className={style.firtsInfo}>
            <span className={style.fullName}>{fullname}</span>
            <div className={style.statusMessage}>
              {isMe ? "" : <img src={readed ? readedImage : noReaded} />}
              {formatDate(created_at)}
            </div>
          </div>
          <div className={style.message}>
            <div className={style.lastMessage}>{text}</div>
            <Badge className={style.countMessage} count={unreaded} />
          </div>
        </div>
      </Link>
    </>
  );
};

export default ChatListItem;
