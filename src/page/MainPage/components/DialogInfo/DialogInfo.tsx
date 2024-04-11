import React, { useState } from "react";
import { EditOutlined, LeftOutlined } from "@ant-design/icons";
import style from "./DialogInfo.module.scss";
import { Avatar, Button, Image, SliceTabs, Tabs, Typography } from "ui-kit";
import classNames from "classnames";
import avatar from "./../../../../image/avatar.jpg";
import InfoTab from "./components/InfoTab/InfoTab";
import MediaTab from "./components/MediaTab/MediaTab";
import FileTab from "./components/FileTab/FileTab";

interface DialogInfoProps {
  goTo: (slide: number) => void;
}

const DialogInfo = ({ goTo }: DialogInfoProps) => {
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
            <Image src={avatar} className={style.avatar} />
            <div className={style.headerInfo}>
              <div className={style.fullname}>Красильников Вадим</div>
              <div className={style.onlineStatus}>в сети</div>
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
