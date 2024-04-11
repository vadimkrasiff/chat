import { Carousel, Input } from "antd";
import { useState, useEffect, useRef } from "react";
import style from "./MainPage.module.scss";
import { isEmpty, orderBy } from "lodash";
import ChatListItem from "./components/ChatListItem/ChatListItem";
import { useParams } from "react-router-dom";
import Dialog from "./components/Dialog/Dialog";
import { Button } from "ui-kit";
import { LeftOutlined } from "@ant-design/icons";
import DialogInfo from "./components/DialogInfo/DialogInfo";

const MainPage = () => {
  const { Search } = Input;
  const [chatList, setChatList] = useState([
    {
      fullname: "Красильников Вадим",
      online: true,
      created_at: new Date(),
      text: "Привет, как дела? \n Привет, как дела? Привет, как дела?",
      isMe: true,
      readed: true,
      chatId: 123,
      unreaded: 3,
      login: "v_krasiv",
      avatar: "https://images.ast.ru/upload/iblock/ba8/Gosling_752.jpg",
    },
    {
      fullname: "Красильникова Алина",
      online: false,
      created_at: new Date(2024, 1, 20, 8, 0, 0, 0),
      text: "Привет, как дела? \n Привет, как дела? Привет, как дела?",
      isMe: false,
      readed: false,
      chatId: 13,
      unreaded: 23,
      login: "alinka_KR",
    },
    {
      fullname: "Цыгвинцев Олег",
      online: true,
      created_at: new Date(2024, 1, 10, 8, 0, 0, 0),
      text: "Привет, как дела? \n Привет, как дела? Привет, как дела?",
      isMe: true,
      readed: true,
      chatId: 12,
      login: "alinka_KR",
    },
    {
      fullname: "Красильников Вадим",
      online: true,
      created_at: new Date(),
      text: "Привет, как дела? \n Привет, как дела? Привет, как дела?",
      isMe: true,
      readed: true,
      chatId: 11,
      unreaded: 3,
      login: "v_krasiv",
      avatar: "https://images.ast.ru/upload/iblock/ba8/Gosling_752.jpg",
    },
    {
      fullname: "Красильникова Алина",
      online: false,
      created_at: new Date(2024, 1, 20, 8, 0, 0, 0),
      text: "Привет, как дела? \n Привет, как дела? Привет, как дела?",
      isMe: false,
      readed: false,
      chatId: 10,
      unreaded: 23,
      login: "alinka_KR",
    },
    {
      fullname: "Мустафина Людмила",
      online: true,
      created_at: new Date(2024, 1, 10, 8, 0, 0, 0),
      text: "Привет, как дела? \n Привет, как дела? Привет, как дела?",
      isMe: true,
      readed: true,
      chatId: 9,
      login: "alinka_KR",
    },
    {
      fullname: "Красильников Вадим",
      online: true,
      created_at: new Date(),
      text: "Привет, как дела? \n Привет, как дела? Привет, как дела?",
      isMe: true,
      readed: true,
      chatId: 8,
      unreaded: 3,
      login: "v_krasiv",
      avatar: "https://images.ast.ru/upload/iblock/ba8/Gosling_752.jpg",
    },
    {
      fullname: "Красильникова Алина",
      online: false,
      created_at: new Date(2024, 1, 20, 8, 0, 0, 0),
      text: "Привет, как дела? \n Привет, как дела? Привет, как дела?",
      isMe: false,
      readed: false,
      chatId: 7,
      unreaded: 23,
      login: "alinka_KR",
    },
    {
      fullname: "Мустафина Людмила",
      online: true,
      created_at: new Date(2024, 1, 10, 8, 0, 0, 0),
      text: "Привет, как дела? \n Привет, как дела? Привет, как дела?",
      isMe: true,
      readed: true,
      chatId: 6,
      login: "alinka_KR",
    },
    {
      fullname: "Красильников Вадим",
      online: true,
      created_at: new Date(),
      text: "Привет, как дела? \n Привет, как дела? Привет, как дела?",
      isMe: true,
      readed: true,
      chatId: 5,
      unreaded: 3,
      login: "v_krasiv",
      avatar: "https://images.ast.ru/upload/iblock/ba8/Gosling_752.jpg",
    },
    {
      fullname: "Красильникова Алина",
      online: false,
      created_at: new Date(2024, 1, 20, 8, 0, 0, 0),
      text: "Привет, как дела? \n Привет, как дела? Привет, как дела?",
      isMe: false,
      readed: false,
      chatId: 4,
      unreaded: 23,
      login: "alinka_KR",
    },
    {
      fullname: "Мустафина Людмила",
      online: true,
      created_at: new Date(2024, 1, 10, 8, 0, 0, 0),
      text: "Привет, как дела? \n Привет, как дела? Привет, как дела?",
      isMe: true,
      readed: true,
      chatId: 3,
      login: "alinka_KR",
    },
  ]);
  const ref = useRef<any>();
  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);

  const goTo = (slide: number) => {
    ref.current.goTo(slide, false);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.stopPropagation();
      e.preventDefault();
    }
  };
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
            orderBy(chatList, ["created_at"], ["desc"]).map((chat) => (
              <ChatListItem key={chat.chatId + chat.login} chat={chat} />
            ))
          )}
        </div>
        <div className={style.dialogContainer}>
          {id ? (
            <Carousel infinite={false} dots={false} ref={ref}>
              <div onKeyDown={handleKeyDown} style={{ position: "relative" }}>
                <Dialog goTo={goTo} />
              </div>
              <div onKeyDown={handleKeyDown}>
                <DialogInfo goTo={goTo} />
              </div>
            </Carousel>
          ) : (
            <div className={style.noChooseChat}>Выберите необходимый чат</div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainPage;
