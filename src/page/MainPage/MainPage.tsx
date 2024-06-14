import { Button, Carousel, Input } from "antd";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import style from "./MainPage.module.scss";
import { isEmpty, orderBy } from "lodash";
import ChatListItem from "./components/ChatListItem/ChatListItem";
import { useParams } from "react-router-dom";
import Dialog from "./components/Dialog/Dialog";
import DialogInfo from "./components/DialogInfo/DialogInfo";
import { useSelector, useDispatch } from "react-redux";
import { getChat, getChats } from "api";
import { setDialogAC, setDialogsAC } from "actions";
import { Modal, Spin } from "ui-kit";
import socket from "core/socket";
import { FormOutlined } from "@ant-design/icons";
import CreateChatForm from "./components/modal/CreateChatForm";

const MainPage = () => {
  const { Search } = Input;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loadingChat, setLoadingChat] = useState(true);
  const [searchDialogs, setSearchDialogs] = useState("");
  const { id } = useParams();
  const currentChat = useSelector((state: any) => state?.dialogs?.chat);

  const userId = useSelector((state: any) => state?.user?._id);

  const setDialog = useCallback(async () => {
    if (id) {
      const data = await getChat(id);

      if (data) {
        dispatch(setDialogAC(data));
      }
      setLoadingChat(false);
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      setLoadingChat(true);
      setDialog();
    }
  }, [dispatch, setDialog, id]);

  useEffect(() => {
    const onCreated = (data: any) => {
      console.log(data);
      if (
        data?.author == userId ||
        data?.participants?.includes(userId) ||
        data?.chat?.participants?.includes(userId) ||
        data?.chat?.chat?.participants?.includes(userId)
      ) {
        setDialogs();
      }
    };
    socket.on("SERVER:DIALOG_CREATED", onCreated);

    return () => {
      socket.off("SERVER:DIALOG_CREATED", onCreated);
    };
  }, [userId]);

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

  const goTo = (slide: number) => {
    ref.current.goTo(slide, false);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  const onOpenModal = () => {
    setOpenModal(true);
  };
  const onCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div className={style.chatContainer}>
        <div className={style.chatList}>
          <div className={style.headerList}>
            <Search value={searchDialogs} onChange={onChange} size="large" />
            <Button
              onClick={onOpenModal}
              style={{ width: "40px", height: "40px" }}
              icon={<FormOutlined style={{ fontSize: "16px" }} />}
            />
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
            filterDialogs
              .sort(function (a: any, b: any) {
                if (a.lastMessage.createdAt < b.lastMessage.createdAt) {
                  return 1;
                }
                if (a.lastMessage.createdAt > b.lastMessage.createdAt) {
                  return -1;
                }
                return 0;
              })
              .map((chat: any) => <ChatListItem key={chat._id} chat={chat} />)
          )}
        </div>
        <div className={style.dialogContainer}>
          {id ? (
            loadingChat ? (
              <div className={style.spin}>
                <Spin size="large" />
              </div>
            ) : isEmpty(currentChat) ? (
              <div className={style.noChooseChat}>Чат не найден</div>
            ) : (
              <Carousel infinite={false} dots={false} ref={ref}>
                <div onKeyDown={handleKeyDown} style={{ position: "relative" }}>
                  <Dialog goTo={goTo} />
                </div>
                <div onKeyDown={handleKeyDown}>
                  <DialogInfo goTo={goTo} />
                </div>
              </Carousel>
            )
          ) : (
            <div className={style.noChooseChat}>Выберите необходимый чат</div>
          )}
        </div>
      </div>

      <Modal
        onCancel={() => setOpenModal(false)}
        title={"Создание чата"}
        open={openModal}
        footer={[]}
      >
        <CreateChatForm setDialogs={setDialogs} onCloseModal={onCloseModal} />
      </Modal>
    </>
  );
};

export default MainPage;
