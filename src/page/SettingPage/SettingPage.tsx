import { Button, Typography } from "ui-kit";
import styles from "./SettingPage.module.scss";
import classNames from "classnames";
import {
  BellOutlined,
  FolderOutlined,
  LoadingOutlined,
  LogoutOutlined,
  MessageOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ExclamationPoint from "../../image/LanguageIcon.svg";
import { logout } from "api/user";
import { useNavigate } from "react-router-dom";

const SettingPage = () => {
  const navigate = useNavigate();

  const settingList = [
    { icon: <BellOutlined />, title: "Уведомления и звуки" },
    { icon: <MessageOutlined />, title: "Настройки учатов" },
    { icon: <FolderOutlined />, title: "Папки с чатами" },
    { icon: <img src={ExclamationPoint} />, title: "Язык" },
    {
      icon: <SafetyCertificateOutlined />,
      title: "Политика конфиденциальности",
    },
  ];
  return (
    <div className={classNames(styles.settingPage)}>
      <div className={classNames(styles.header, "whiteBlock")}>
        <Typography.Title level={2}>Настройки</Typography.Title>
      </div>
      <div className={classNames("whiteBlock", styles.settingList)}>
        {settingList.map((setting: any) => (
          <div key={setting.title} className={classNames(styles.settingItem)}>
            <div>{setting.icon}</div>
            <span>{setting.title}</span>
          </div>
        ))}
      </div>
      <div className={classNames("whiteBlock", styles.logout)}>
        <Button
          ghost
          type="text"
          onClick={() => {
            logout();
            setTimeout(() => navigate("/login"), 1000);
          }}
          className={classNames(styles.logoutItem)}
        >
          <LogoutOutlined />
          <span>Выйти из аккаунта</span>
        </Button>
      </div>
    </div>
  );
};

export default SettingPage;
