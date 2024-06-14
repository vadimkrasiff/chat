import React, { useState, useMemo } from "react";
import { EditOutlined, LeftOutlined } from "@ant-design/icons";
import style from "./DialogInfo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Image, SliceTabs, Tabs, Typography } from "ui-kit";
import classNames from "classnames";
import avatar from "./../../../../image/avatar.jpg";
import InfoTab from "./components/InfoTab/InfoTab";
import MediaTab from "./components/MediaTab/MediaTab";
import FileTab from "./components/FileTab/FileTab";
import dayjs from "dayjs";
import getColorAvatar from "Helpers/getColorAvatar";

interface DialogInfoProps {
  goTo: (slide: number) => void;
}

const DialogInfo = ({ goTo }: DialogInfoProps) => {
  const chat = useSelector((state: any) => state?.dialogs?.chat);

  const colors = useMemo(
    () => chat?._id && getColorAvatar(chat?._id),
    [chat?._id]
  );
  const avatarChards = useMemo(() => {
    if (chat?.name) {
      const [surname, firstname] = chat?.name?.split(" ");
      const avatarChard = surname[0] + (firstname?.[0] || "");
      return avatarChard;
    }
    return "";
  }, [chat?.name]);

  const [activeTab, setActiveTab] = useState<any>("1");
  return (
    <div className={style.DialogInfoContainer}>
      <div className={style.dialogHeader}>
        <div className={style.upperBlock}>
          <div className={style.leftInfo}>
            <Button
              size="small"
              onClick={() => goTo(0)}
              icon={<LeftOutlined />}
            />
            {chat?.photo ? (
              <Image
                src={"http://localhost:3000" + chat?.photo}
                className={style.avatar}
              />
            ) : (
              <Avatar
                style={{
                  background: `linear-gradient(135deg, ${colors?.color}, ${colors?.colorLighten})`,
                  border: "none",
                }}
                size={50}
              >
                {avatarChards}
              </Avatar>
            )}
            <div className={style.headerInfo}>
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
          </div>
          <Button
            type="primary"
            ghost
            onClick={() => goTo(0)}
            icon={<EditOutlined />}
          >
            Написать сообщение
          </Button>
        </div>
        <div className={style.tabs}>
          <SliceTabs.Switcher
            onChange={setActiveTab}
            activeKey={activeTab}
            items={[
              {
                key: "1",
                label: "Информация",
              },
              {
                key: "2",
                label: "Медиа",
              },
              {
                key: "3",
                label: "Файлы",
              },
              {
                key: "4",
                label: "Ссылки",
              },
            ]}
          />
        </div>
      </div>
      <div />
      <div className={classNames("whiteBlock", style.tabContent)}>
        <SliceTabs.Content activeKey={activeTab}>
          <SliceTabs.TabPane tab="Общая информация" key="1">
            <InfoTab />
          </SliceTabs.TabPane>
          <SliceTabs.TabPane className={style.mediaTab} tab="Медиа" key="2">
            <MediaTab />
          </SliceTabs.TabPane>
          <SliceTabs.TabPane tab="Файлы" key="3">
            <FileTab />
          </SliceTabs.TabPane>
          <SliceTabs.TabPane tab="Ссылки" key="4">
            <InfoTab />
          </SliceTabs.TabPane>
        </SliceTabs.Content>
      </div>
    </div>
  );
};

export default DialogInfo;
