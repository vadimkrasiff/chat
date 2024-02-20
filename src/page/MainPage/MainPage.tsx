import { Input, Layout } from "ui-kit";
import { useState, useEffect } from "react";
import style from "./MainPage.module.scss";
import { isEmpty } from "lodash";
import ChatListItem from "./components/ChatListItem/ChatListItem";
import { useParams } from "react-router-dom";

const MainPage = () => {
  const { Search } = Input;
  const [chatList, setChatList] = useState([
    {
      fullName: "Красильников Вадим",
      online: true,
      timeLastMessage: "00:00",
      lastMessage: "Привет, как дела?",
      isMe: true,
      statusMessage: "readed",
      chatId: 123,
      login: "v_krasiv",
    },
  ]);

  const { id } = useParams();

  useEffect(() => {}, [id]);

  return (
    <>
      <div className={style.chatContainer}>
        <div className={style.chatList}>
          <div className={style.headerList}>
            <Search size="large" />
          </div>
          {isEmpty(chatList) ? (
            <div className={style.emptyChatList}>Нет чатов</div>
          ) : (
            chatList.map((chat) => (
              <ChatListItem key={chat.chatId + chat.login} chat={chat} />
            ))
          )}
        </div>
        {id ? <div>{id}</div> : <div>Выберите необходимый чат</div>}
      </div>
    </>
  );
};

export default MainPage;
