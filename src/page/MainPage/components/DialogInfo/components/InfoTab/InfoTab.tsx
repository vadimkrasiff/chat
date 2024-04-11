import { useState } from "react";
import { Form, Typography } from "ui-kit";
import styles from "./InfoTab.module.scss";

const InfoTab = () => {
  const [info] = useState({
    username: "v_krasiv",
    fullname: "Красильников Вадим",
    post: "Разработчик",
    email: "vkrasiv@mail.com",
  });
  return (
    <div className={styles.tabInfo}>
      <Typography.Title level={3}>Подробная информация</Typography.Title>
      <Form layout="vertical">
        <Form.Item label="Имя польлзователя">{info.username}</Form.Item>
        <Form.Item label="Полное имя">{info.fullname}</Form.Item>
        <Form.Item label="Должность">{info.post}</Form.Item>
        <Form.Item label="Почта">{info.email}</Form.Item>
      </Form>
    </div>
  );
};

export default InfoTab;
