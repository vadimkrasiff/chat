import {
  AudioOutlined,
  DeleteOutlined,
  MoreOutlined,
  PaperClipOutlined,
  ProfileOutlined,
  ProfileTwoTone,
  SearchOutlined,
  SendOutlined,
  SmileOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import style from "./Dialog.module.scss";
import {
  Button,
  Dropdown,
  Form,
  Input,
  ItemType,
  List,
  Modal,
  Popover,
  Spin,
  Upload,
  UploadFile,
  UploadProps,
  message,
} from "ui-kit";
import Message from "../Message/Message";
import dayjs from "dayjs";
import { castArray, clamp, isEmpty, orderBy } from "lodash";
import { Link, useParams } from "react-router-dom";
import type { MenuProps } from "antd";
import AudioMessage from "../AudioMessage/AudioMessage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback, useRef } from "react";
import { getMessages } from "api";
import { setMessagesAC } from "actions";
import { getIcon } from "../DialogInfo/components/FileTab/utils";
import classNames from "classnames";
import FileList from "./components/FileList";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import { EmojiClickData } from "emoji-picker-react/src/types/exposedTypes";
import ImageFiles from "./components/ImageFiles";

interface DialogProps {
  goTo: (slide: number) => void;
}

const Dialog = ({ goTo }: DialogProps) => {
  const { TextArea } = Input;
  const { id } = useParams();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const messages = useSelector((state: any) => state?.messages.items);
  const messagesRef = useRef<any>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [fileImages, setFileImages] = useState<UploadFile[]>([]);
  const [list, setList] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  // const fileRef = useRef<any>();

  // console.log(fileList);

  const onRemove = (file: UploadFile) => {
    const index = fileList.indexOf(file);
    console.log(index)
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  };

  const onRemoveImages = (file: any) => {
    const index = fileImages.indexOf(file);
    console.log(index)
    const newFileImages = fileImages.slice();
    newFileImages.splice(index, 1);
    setFileImages(newFileImages);
  };

  const props = {
    fileList,
// Привязываем состояние списка файлов к компоненту Upload
    onChange(info: any) {
      const fileList = info.fileList; 
      
      if(fileList[fileList.length - 1].type.includes("image")){
      console.log(info)

        const imageFile = fileList.pop();
        setFileImages(prev => [...prev, imageFile]);
      }

      setFileList(fileList); // Обновляем состояние списка файлов при изменении
    },
    onRemove: (file: UploadFile) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file: UploadFile) => {
      setFileList([...fileList, file]);

      return false;
    },
    showUploadList: false, // Отключаем автоматический список загруженных файлов
  };

  const setMessages = useCallback(async () => {
    if (id) {
      const data = await getMessages(id);

      if (data) {
        dispatch(setMessagesAC(data));
        setLoading(false);
      }
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      setLoading(true);
      setMessages();
    }
  }, [setMessages, id]);

  useEffect(() => {
    messagesRef.current.scrollTo(0, 999999);
  }, [messages]);

  const onOk = () => {
    console.log("das");
  };

  const items = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Посмотреть профиль",
    },
    {
      key: "delete",
      icon: <DeleteOutlined />,
      label: "Удалить чат",
      danger: true,
    },
  ];

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "profile":
        goTo(1);
        break;
      case "delete":
        Modal.confirm({
          onOk,
          content: <strong>Вы точно хотите удалить чат?</strong>,
          width: "300px",
        });
        break;
      default:
        break;
    }
  };

  const Messages = [
    {
      isMe: false,
      text: `Привет! Как дела?`,
      created_at: new Date(2024, 1, 20, 8, 1, 0, 0),
      attachments: [
        {
          filename: "file.jpg",
          url: "https://trikky.ru/wp-content/blogs.dir/1/files/2023/03/23/zyro-image-11.jpg",
        },
        {
          filename: "file.jpg",
          url: "https://s0.rbk.ru/v6_top_pics/media/img/4/04/346843326750044.jpg",
        },
        {
          filename: "file.jpg",
          url: "https://trikky.ru/wp-content/blogs.dir/1/files/2023/03/23/zyro-image-11.jpg",
        },
        {
          filename: "file.jpg",
          url: "https://trikky.ru/wp-content/blogs.dir/1/files/2023/03/23/zyro-image-11.jpg",
        },
        {
          filename: "file.jpg",
          url: "https://i.pinimg.com/236x/bb/58/bd/bb58bdbfd72620db733518937bb58fb7.jpg",
        },
        {
          filename: "file.jpg",
          url: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1708516800&semt=ais",
        },
      ],
    },
    {
      isMe: true,
      readed: false,
      text: `Привет! 
      У меня хорошо, дети тоже здоровы, играют во дворе 
      А как твои?`,
      created_at: new Date(2024, 1, 21, 8, 0, 0, 0),
    },
    {
      isMe: true,
      readed: true,
      audio:
        "https://cdn.uppbeat.io/audio-files/d927511931994ce45cf5b95b34e23536/4154476e103be979a4c9a04187694329/3c24a04929b86964e65943c905f67364/STREAMING-glock-new-idea-twinkle-om-fx-1-00-04.mp3",
      created_at: new Date(2024, 1, 21, 8, 0, 0, 0),
    },
    {
      isMe: false,
      readed: true,
      text: `Привет! 
      У меня хорошо, дети тоже здоровы, играют во дворе 
      А как твои?`,
      created_at: new Date(2024, 1, 21, 8, 0, 0, 0),
    },

    {
      isMe: true,
      readed: true,
      text: `Привет! 
      У меня хорошо, дети тоже здоровы, играют во дворе 
      А как твои?`,
      created_at: new Date(2024, 1, 21, 8, 0, 0, 0),
    },

    {
      isMe: false,
      readed: true,
      text: `Привет! 
      У меня хорошо, дети тоже здоровы, играют во дворе 
      А как твои?`,
      created_at: new Date(2024, 1, 21, 8, 0, 0, 0),
    },
  ];
  return (
    <div className={style.dialogContainer}>
      <div className={style.dialogHeader}>
        <div onClick={() => goTo(1)} className={style.headerInfo}>
          <div className={style.fullname}>Красильников Вадим</div>
          <div className={style.onlineStatus}>в сети</div>
        </div>
        <div className={style.headerButtons}>
          <Button
            type="text"
            onClick={() => {
              console.log("adsd");
            }}
            icon={<SearchOutlined />}
          />
          <Dropdown
            menu={{ items, onClick: handleMenuClick }}
            trigger={["click"]}
          >
            <Button type="text" icon={<MoreOutlined />} />
          </Dropdown>
        </div>
      </div>
      <div className={style.dialogWrapper}>
        <div ref={messagesRef} className={style.dialogContent}>
          {loading ? (
            <div className={style.emptyChatList}>
              <Spin size="large" />
            </div>
          ) : !isEmpty(messages) ? (
            orderBy(messages, ["created_at"], ["asc"]).map(
              (message, i, array) => {
                const currentMessageDate = dayjs(array[i].created_at);

                if (i > 0) {
                  const lastMessageDate = dayjs(array[i - 1].created_at);
                  return !dayjs(currentMessageDate).isSame(
                    dayjs(lastMessageDate),
                    "day"
                  ) ? (
                    <>
                      <div
                        key={message._id + currentMessageDate}
                        className={style.date}
                      >
                        <span>
                          {" "}
                          {dayjs(currentMessageDate).format("DD MMMM")}
                        </span>
                      </div>
                      {!message.audio ? (
                        <Message key={message._id} message={message} />
                      ) : (
                        <AudioMessage key={message._id} message={message} />
                      )}
                    </>
                  ) : (
                    <>
                      {!message.audio ? (
                        <Message key={message._id} message={message} />
                      ) : (
                        <AudioMessage key={message._id} message={message} />
                      )}
                    </>
                  );
                }

                return (
                  <>
                    <div className={style.date}>
                      <span>{dayjs(currentMessageDate).format("DD MMMM")}</span>
                    </div>
                    <Message message={message} />
                  </>
                );
              }
            )
          ) : (
            <div className={style.noChooseChat}>В чате нет сообщений</div>
          )}
        </div>
      </div>
      <div className={style.footerWrapper}>
        <Form initialValues={{ message: "" }} className={style.footerForm}>
          <div className={style.listWrap}>
        <div
            className={classNames(style.attachments, {
              [style.isNotEmpty]: !isEmpty(fileImages),
            })}
          >
        <ImageFiles onRemoveImages={onRemoveImages} fileImages={fileImages} />
          </div>
          <div
            className={classNames(style.fileList, {
              [style.isNotEmpty]: !isEmpty(fileList),
            })}
          >
            <FileList fileList={fileList} onRemove={onRemove} />
          </div>
          </div>
          <div className={style.dialogFooter}>
            <Upload {...props}>
              <Button type="text" icon={<PaperClipOutlined />} />
            </Upload>
            <Form.Item noStyle name="message">
              <TextArea
                size="large"
                placeholder="Написать сообщение..."
                autoSize={{ minRows: 1, maxRows: 6 }}
              />
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevState, nextState) =>
                prevState.message !== nextState.message
              }
            >
              {({ setFieldValue, getFieldValue }) => {
                const message = getFieldValue("message");
                const onSetEmoji = (e: EmojiClickData) =>
                  setFieldValue("message", message + e.emoji);
                return (
                  <Form.Item noStyle>
                    <Popover
                      placement="topRight"
                      trigger="click"
                      
                      content={<EmojiPicker style={{border:'none'}} onEmojiClick={onSetEmoji} />}
                    >
                      <SmileOutlined style={{ cursor: "pointer" }} />
                    </Popover>
                  </Form.Item>
                );
              }}
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevState, nextState) =>
                prevState.message !== nextState.message
              }
            >
              {({ getFieldValue }) => {
                const message = getFieldValue("message");
                console.log(message);
                return (
                  <Button
                    type="text"
                    htmlType="submit"
                    icon={
                      message.length > 0 || fileList.length > 0 ? (
                        <SendOutlined />
                      ) : (
                        <AudioOutlined />
                      )
                    }
                  ></Button>
                );
              }}
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Dialog;
