import React, { useMemo } from "react";
import { Avatar, Badge } from "ui-kit";
import style from "./ChatListItem.module.scss";
import readedImage from "./assests/readed.svg";
import noReaded from "./assests/noReaded.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import { TinyColor } from "@ctrl/tinycolor";

interface ChatListItemProps {
  chat: any;
}

const ChatListItem = ({ chat }: ChatListItemProps) => {
  const { user, created_at, text, isMe, readed, _id, unreaded } = chat;

  const { id } = useParams();

  // useEffect(() => {}, [id]);

  const getColorAvatar = (hash: string) => {
    const [r, g, b] = hash
      .slice(0, 3)
      .split("")
      .map((char) =>
        char.charCodeAt(0) > 255
          ? 255
          : char.charCodeAt(0) < 0
            ? 0
            : char.charCodeAt(0)
      );
    const color = new TinyColor({ r, g, b });
    return {
      color: color.toHexString(),
      colorLighten: color.lighten(40).saturate(20).toHexString(),
    };
  };
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

  const colors = useMemo(() => getColorAvatar(user.login), [user.login]);
  const avatarChards = useMemo(() => {
    const [surname, name] = user.fullname.split(" ");
    const avatarChard = surname[0] + (name?.[0] || "");
    return avatarChard;
  }, [user.fullname]);
  return (
    <>
      <Link
        to={`/im/${_id}`}
        className={classNames(style.chatListItem, {
          [style.currentChat]: id == _id,
        })}
      >
        <Badge status="success" dot={user.online}>
          {user.avatar ? (
            <Avatar src={user.avatar} size={50} />
          ) : (
            <Avatar
              style={{
                background: `linear-gradient(135deg, ${colors.color}, ${colors.colorLighten})`,
                border: "none",
              }}
              size={50}
            >
              {avatarChards}
            </Avatar>
          )}
        </Badge>
        <div className={style.chatInfo}>
          <div className={style.firtsInfo}>
            <span className={style.fullName}>{user.fullname}</span>
            <div className={style.statusMessage}>
              {!isMe ? "" : <img src={readed ? readedImage : noReaded} />}
              {formatDate(new Date(created_at))}
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
