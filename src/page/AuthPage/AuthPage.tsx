import { Avatar, Button, Form, Input } from "ui-kit";
import style from "./AuthPage.module.scss";
import { LoginOutlined } from "@ant-design/icons";

const AuthPage = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  const requiredRule = {required: true, message: 'Обязательное поле'};
  return (
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
          >
            Войти
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AuthPage;
