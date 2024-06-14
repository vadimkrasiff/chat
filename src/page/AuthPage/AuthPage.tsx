import { Avatar, Button, Form, Input, Spin } from "ui-kit";
import style from "./AuthPage.module.scss";
import { LoginOutlined } from "@ant-design/icons";
import { authUser, authUserProps, getMe } from "api/user";
import { useEffect, useState, useCallback } from "react";

import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const onFinish = async (values: authUserProps) => {
    setLoading(true);
    const data = await authUser(values);
    if (!isEmpty(data)) {
      setLoading(false);
      navigate("/im");
    } else {
      setLoading(false);
    }
  };

  const getAuthMe = useCallback(async () => {
    const data = await getMe();
    setisLoading(false);
    if (data) {
      navigate("/im");
    }
  }, [navigate]);
  useEffect(() => {
    setisLoading(true);
    getAuthMe();
  }, [getAuthMe]);

  const requiredRule = { required: true, message: "Обязательное поле" };
  return isLoading ? (
    <>
      <div className={style.emptyChatList}>
        <Spin size="large" />
      </div>
    </>
  ) : (
    <>
      <div className={style.formBlock}>
        <div className={style.headerForm}>
          <Avatar size={50} src="src/image/KDpgvguMpGfqaHPjicRK.svg" />
          <div className={style.title}>Авторизация</div>
        </div>
        <Form onFinish={onFinish} layout="vertical" className={style.form}>
          <Form.Item label="Почта" rules={[requiredRule]} name={"email"}>
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Пароль" rules={[requiredRule]} name={"password"}>
            <Input.Password size="large" />
          </Form.Item>
          <Button
            size="large"
            className={style.formButton}
            icon={<LoginOutlined />}
            htmlType="submit"
            type="primary"
            loading={loading}
          >
            Войти
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AuthPage;
