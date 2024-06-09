import { Carousel, Input } from "antd";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import style from "./MainPage.module.scss";
import { isEmpty, orderBy } from "lodash";
import ChatListItem from "./components/ChatListItem/ChatListItem";
import { useParams } from "react-router-dom";
import Dialog from "./components/Dialog/Dialog";
import DialogInfo from "./components/DialogInfo/DialogInfo";
import { useSelector, useDispatch } from "react-redux";
import { getChats } from "api";
import { setDialogsAC } from "actions";
import { Spin } from "ui-kit";

const MainPage = () => {
  const { Search } = Input;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [searchDialogs, setSearchDialogs] = useState("");

  const onChange = (e: any) => {
    setSearchDialogs(e.target.value);
  };
  const dialogs = useSelector((state: any) => state?.dialogs.items);

  const filterDialogs = useMemo(
    () =>
      dialogs.filter((dialog: any) =>
        dialog.name.toLowerCase().includes(searchDialogs.toLowerCase())
      ),
    [dialogs, searchDialogs]
  );

  const setDialogs = useCallback(async () => {
    const data = await getChats();

    if (data) {
      dispatch(setDialogsAC(data));
    }
    setLoading(false);

  }, []);

  useEffect(() => {
    setLoading(true);
    setDialogs();
  }, []);

  const ref = useRef<any>();
  const { id } = useParams();

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
            <Search value={searchDialogs} onChange={onChange} size="large" />
          </div>
          {loading ? (
            <div className={style.emptyChatList}>
              <Spin size="large" />
            </div>
          ) : isEmpty(dialogs) ? (
            <div className={style.emptyChatList}>Нет чатов</div>
          ) : isEmpty(filterDialogs) ? (
            <div className={style.emptyChatList}>Чат не найден</div>
          ) : (
            orderBy(filterDialogs, ["created_at"], ["desc"]).map((chat) => (
              <ChatListItem key={chat._id} chat={chat} />
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
