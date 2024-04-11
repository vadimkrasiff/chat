import {
  AudioOutlined,
  DeleteOutlined,
  MoreOutlined,
  PaperClipOutlined,
  ProfileOutlined,
  ProfileTwoTone,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import style from "./Dialog.module.scss";
import { Button, Dropdown, Form, Input, ItemType, Modal } from "ui-kit";
import Message from "../Message/Message";
import dayjs from "dayjs";
import { castArray, orderBy } from "lodash";
import { Link, useParams } from "react-router-dom";
import type { MenuProps } from "antd";

interface DialogProps {
  goTo: (slide: number) => void;
}

const Dialog = ({ goTo }: DialogProps) => {
  const { TextArea } = Input;
  const { id } = useParams();

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
    console.log(e);
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
        <div className={style.dialogContent}>
          {orderBy(Messages, ["created_at"], ["asc"]).map(
            (message, i, array) => {
              const currentMessageDate = dayjs(array[i].created_at);

              if (i > 0) {
                const lastMessageDate = dayjs(array[i - 1].created_at);
                return !dayjs(currentMessageDate).isSame(
                  dayjs(lastMessageDate),
                  "day"
                ) ? (
                  <>
                    <div className={style.date}>
                      <span>
                        {" "}
                        {dayjs(currentMessageDate).format("DD MMMM")}
                      </span>
                    </div>
                    <Message message={message} />
                  </>
                ) : (
                  <Message message={message} />
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
          )}
        </div>
      </div>
      <div className={style.footerWrapper}>
        <Form className={style.dialogFooter}>
          <PaperClipOutlined />
          <Form.Item noStyle name="message">
            <TextArea
              size="large"
              placeholder="Написать сообщение..."
              autoSize={{ minRows: 1, maxRows: 6 }}
            />
          </Form.Item>
          <Button
            type="text"
            htmlType="submit"
            icon={<AudioOutlined />}
          ></Button>
        </Form>
      </div>
    </div>
  );
};

export default Dialog;
