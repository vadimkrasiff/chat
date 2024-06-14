import React, { useMemo } from "react";
import { Avatar, Badge } from "ui-kit";
import style from "./ChatListItem.module.scss";
import readedImage from "./assests/readed.svg";
import noReaded from "./assests/noReaded.svg";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";
import dayjs from "dayjs";
import { TinyColor } from "@ctrl/tinycolor";
import { TeamOutlined } from "@ant-design/icons";
import { isEmpty } from "lodash";

interface ChatListItemProps {
  chat: any;
}

const ChatListItem = ({ chat }: ChatListItemProps) => {
  const { name, lastMessage, type, _id, unreaded, photo, last_seen } = chat;

  const {
    author,
    text,
    unread,
    isMe,
    createdAt,
    isSystem,
    attachments,
    audio,
  } = lastMessage as any;
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
  const colors = useMemo(() => getColorAvatar(_id), [_id]);
  const avatarChards = useMemo(() => {
    const [surname, firstname] = name.split(" ");
    const avatarChard = surname[0] + (firstname?.[0] || "");
    return avatarChard;
  }, [name]);

  const textMessage = () => {
    if (text) {
      return text;
    }

    if (!isEmpty(attachments?.photos)) {
      return "Фото";
    }

    if (!isEmpty(attachments?.files)) {
      return "Файл";
    }

    if (!isEmpty(audio)) {
      return "Голосовое сообщение";
    }
    return "";
  };

  return (
    <>
      <Link
        to={`/im/${_id}`}
        className={classNames(style.chatListItem, {
          [style.currentChat]: id == _id,
        })}
      >
        <Badge
          status="success"
          dot={dayjs(new Date()).diff(dayjs(new Date(last_seen)), "minute") < 5}
        >
          {photo ? (
            <Avatar src={"http://localhost:3000" + photo} size={50} />
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
            <span className={style.fullName}>
              {type === "group" && (
                <TeamOutlined
                  style={{ marginRight: "5px", color: "rgb(0, 0, 0, 0.45)" }}
                />
              )}
              {name}
            </span>
            <div className={style.statusMessage}>
              {!isMe || isSystem ? (
                ""
              ) : (
                <img src={!unread ? readedImage : noReaded} />
              )}
              {formatDate(new Date(createdAt))}
            </div>
          </div>
          <div className={style.message}>
            <div className={style.lastMessage}>
              {!isSystem && type == "group" && `${author}: `}
              {textMessage()}
            </div>
            <Badge className={style.countMessage} count={unreaded} />
          </div>
        </div>
      </Link>
    </>
  );
};

export default ChatListItem;
