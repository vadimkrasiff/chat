import { Menu, MenuProps, Layout, MenuItemType } from "ui-kit";
import style from "./Sider.module.scss";
import { MessageFilled, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Sider = () => {
  const menuItems: MenuItemType[] = [
    {
      key: 1,
      label: "Чаты",
      icon: (
        <Link to="/im">
          <MessageFilled />
        </Link>
      ),
    },
    {
      key: 2,
      label: "Настройки",
      icon: (
        <Link to="/settings">
          <SettingOutlined />
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

        <Menu className={style.menu} items={menuItems} mode="inline" />
      </Layout.Sider>
    </>
  );
};

export default Sider;
