import {
  AudioOutlined,
  CameraOutlined,
  DeleteOutlined,
  MoreOutlined,
  PaperClipOutlined,
  SearchOutlined,
  SendOutlined,
  SmileOutlined,
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
import { getChat, getMessages, sendMessage } from "api";
import {
  removeMessageAC,
  setDialogAC,
  setMessagesAC,
  setNewMessageAC,
} from "actions";
import { getIcon } from "../DialogInfo/components/FileTab/utils";
import classNames from "classnames";
import FileList from "./components/FileList";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import { EmojiClickData } from "emoji-picker-react/src/types/exposedTypes";
import ImageFiles from "./components/ImageFiles";
import socket from "core/socket";
import AudioRecorder from "audio-recorder-polyfill";

interface DialogProps {
  goTo: (slide: number) => void;
}

const Dialog = ({ goTo }: DialogProps) => {
  const { TextArea } = Input;
  const { id } = useParams();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const messages = useSelector((state: any) => state?.messages.items);
  const chat = useSelector((state: any) => state?.dialogs?.chat);
  const messagesRef = useRef<any>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [fileImages, setFileImages] = useState<UploadFile[]>([]);
  const [list, setList] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [form] = Form.useForm();
  const userId = useSelector((state: any) => state?.user?._id);

  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const mediaRecorderRef: any = useRef(null);
  const audioChunks = useRef<any[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event: any) => {
        audioChunks.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
        setAudioBlob(() => audioBlob);
        audioChunks.current = [];
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  const onRemove = (file: UploadFile) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  };

  const onRemoveImages = (file: UploadFile) => {
    const index = fileImages.indexOf(file);
    const newFileImages = fileImages.slice();
    newFileImages.splice(index, 1);
    setFileImages(newFileImages);
  };

  const propsFileList = {
    fileList,
    accept: ".jpeg,.jpg,.png,.gif,.pdf",
    onChange(info: any) {
      const newFileList = info.fileList.slice();

      setFileList(newFileList);
    },
    onRemove,
    beforeUpload(file: UploadFile) {
      if (!file?.type?.includes("image")) {
        setFileList([...fileList, file]);
      }
      return false;
    },
    showUploadList: false,
  };

  const propsFileImages = {
    accept: ".jpeg,.jpg,.png,.gif,.pdf",
    fileList: fileImages,
    onChange(info: any) {
      const newFileImages = info.fileList.slice();
      const images = newFileImages.filter((file: UploadFile) =>
        file?.type?.includes("image")
      );

      setFileImages(images);
    },
    onRemove: onRemoveImages,
    beforeUpload(file: UploadFile) {
      if (file?.type?.includes("image")) {
        setFileImages([...fileImages, file]);
      }
      return false;
    },
    showUploadList: false,
  };

  const setMessages = useCallback(async () => {
    if (id) {
      const data = await getMessages(id);

      if (data) {
        dispatch(setMessagesAC(data));
        setLoading(false);
      }
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      setLoading(true);
      setMessages();
    }
  }, [dispatch, setMessages, id]);

  useEffect(() => {
    const handleNewMessage = (data: any) => {
      if (data?.chat?.participants?.includes(userId)) {
        if (id === data.chat._id) setMessages();

        // dispatch(setNewMessageAC(data));
      }
    };

    socket.on("SERVER:MESSAGE_CREATED", handleNewMessage);

    return () => {
      socket.off("SERVER:MESSAGE_CREATED", handleNewMessage);
    };
  }, [id, dispatch, userId]);

  useEffect(() => {
    const onDeleted = (data: any) => {
      console.log(data);

      if (data?.message?.chat?.participants?.includes(userId)) {
        if (id === data.message.chat._id)
          dispatch(removeMessageAC(data.message._id));
      }
    };
    socket.on("SERVER:MESSAGE_DELETED", onDeleted);

    return () => {
      socket.off("SERVER:MESSAGE_DELETED", onDeleted);
    };
  }, [userId]);

  const onDeleteChat = () => {
    console.log("das");
  };

  const onSendMessage = async (value?: any) => {
    const formData = new FormData();
    formData.append("text", value?.message || "");
    formData.append("chat_id", id as string);
    console.log(audioBlob);

    if (audioBlob) {
      formData.append("audio", audioBlob, "audio.wav");
    }

    // Добавляем изображения (photos)
    fileImages.forEach((file, index) => {
      formData.append(`photos`, file.originFileObj as File);
    });

    // Добавляем файлы (files)
    fileList.forEach((file, index) => {
      formData.append(`files`, file.originFileObj as File);
    });

    console.log(formData);
    const data = await sendMessage(formData);
    setAudioBlob(null);
    form.setFieldValue("message", "");
    setFileList([]);
    setFileImages([]);
  };

  // Обработчик нажатия на кнопку отправки сообщения
  const handleSubmit = (values: any) => {
    if (recording) {
      stopRecording();
    }
    //   setTimeout(() => {
    //     onSendMessage(values);
    //   }, 1000); // Даем время для завершения записи и формирования audioBlob
    // } else {
    //   onSendMessage(values);
    // }
  };

  useEffect(() => {
    if (audioBlob) {
      onSendMessage();
    }
  }, [audioBlob]);

  const onKeyDown = (e: any) => {
    // if (e.keyCode == 13) {
    // }
    // console.log(e);
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
          onOk: onDeleteChat,
          content: <strong>Вы точно хотите удалить чат?</strong>,
          width: "300px",
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className={style.dialogContainer}>
      <div className={style.dialogHeader}>
        <div onClick={() => goTo(1)} className={style.headerInfo}>
          {chat != null && (
            <>
              <div className={style.fullname}>{chat?.name}</div>
              <div className={style.onlineStatus}>
                {chat.type == "private"
                  ? dayjs(new Date()).diff(
                      dayjs(new Date(chat?.last_seen)),
                      "minute"
                    ) < 5
                    ? "в сети"
                    : "был(а) недавно"
                  : `${chat?.participants?.length} участников`}
              </div>
            </>
          )}
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
            orderBy(messages, ["createdAt"], ["asc"]).map(
              (message, i, array) => {
                const currentMessageDate = dayjs(array[i].createdAt);

                if (i > 0) {
                  const lastMessageDate = dayjs(array[i - 1].createdAt);
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
                      {isEmpty(message.audio) ? (
                        <Message key={message._id} message={message} />
                      ) : (
                        <AudioMessage key={message._id} message={message} />
                      )}
                    </>
                  ) : (
                    <>
                      {isEmpty(message.audio) ? (
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
        <Form
          onKeyDownCapture={onKeyDown}
          form={form}
          onFinish={onSendMessage}
          initialValues={{ message: "" }}
          className={style.footerForm}
        >
          <div className={style.listWrap}>
            <div
              className={classNames(style.attachments, {
                [style.isNotEmpty]: !isEmpty(fileImages),
              })}
            >
              <ImageFiles
                onRemoveImages={onRemoveImages}
                fileImages={fileImages}
              />
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
            <Upload
              {...propsFileList}
              disabled={recording || fileList.length == 10}
              multiple
            >
              <Button type="text" icon={<PaperClipOutlined />} />
            </Upload>
            <Upload
              disabled={recording || fileImages.length == 10}
              {...propsFileImages}
              onRemove={onRemove}
              multiple
            >
              <Button type="text" icon={<CameraOutlined />} />
            </Upload>
            <Form.Item noStyle name="message">
              <TextArea
                disabled={recording}
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
                      content={
                        <EmojiPicker
                          style={{ border: "none" }}
                          onEmojiClick={onSetEmoji}
                        />
                      }
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
                return message.length > 0 ||
                  fileImages.length > 0 ||
                  fileList.length > 0 ? (
                  <Button
                    type="text"
                    htmlType="submit"
                    icon={<SendOutlined />}
                  ></Button>
                ) : (
                  <Button
                    onClick={recording ? handleSubmit : startRecording}
                    type={recording ? "primary" : "text"}
                    shape="circle"
                    icon={<AudioOutlined />}
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
