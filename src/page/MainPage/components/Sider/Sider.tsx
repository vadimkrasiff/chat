import { Menu, MenuProps, Layout, MenuItemType, Avatar } from "ui-kit";
import style from "./Sider.module.scss";
import {
  MessageFilled,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Sider = () => {
  const pathname = window.location.pathname.split("/");

  const menuItems: MenuItemType[] = [
    {
      key: "im",
      label: "Чаты",
      icon: (
        <Link to="/im">
          <MessageFilled />
        </Link>
      ),
    },
    {
      key: "settings",
      label: "Настройки",
      icon: (
        <Link to="/settings">
          <SettingOutlined />
        </Link>
      ),
    },
    {
      key: "profile",
      label: "Профиль",
      icon: (
        <Link to="/profile">
          <Avatar size={40} icon={<UserOutlined />} />
        </Link>
      ),
    },
  ];
  return (
    <>
      <Layout.Sider collapsed className={style.layout}>
        <div className={style.header}>
          <div className={style.logo}></div>
        </div>

        <Menu
          defaultSelectedKeys={[pathname[1] ? pathname[1] : "im"]}
          className={style.menu}
          items={menuItems}
          mode="inline"
        />
      </Layout.Sider>
    </>
  );
};

export default Sider;
