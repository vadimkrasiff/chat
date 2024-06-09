import classNames from "classnames";
import styles from "./ProfilePage.module.scss";
import { LogoutOutlined, PictureOutlined } from "@ant-design/icons";
import avatar from "../../../src/image/avatar.jpg";
import {
  Avatar,
  Button,
  Descriptions,
  Form,
  Image as ComponentImage,
  Modal,
  Typography,
  Upload,
  Slider,
} from "ui-kit";
import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { logout } from "api/user";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [userData] = useState({
    fullname: "Красильников Вадим",
    username: "v_krasiv",
    post: "Младший разработчик",
    email: "v_krasiv@gmail.com",
  });
  const navigate = useNavigate();
  const [image, setImage] = useState<any>(null);
  const [scale, setScale] = useState(1.2);
  const [modalVisible, setModalVisible] = useState(false);
  const editorRef = useRef<any>(null);

  const handleImageChange = (info: any) => {
    console.log(info.file);

    if (info.fileList.length > 0) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
        console.log("ads");

        setModalVisible(true);
      };
      reader.readAsDataURL(
        info.fileList[info.fileList.length - 1].originFileObj
      );
    }
  };

  const handleScaleChange = (e: any) => {
    setScale(e);
  };

  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      canvas.toBlob(
        (blob: any) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "avatar.jpg";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        },
        "image/jpeg",
        1
      );
      setModalVisible(false);
    }
  };

  return (
    <div className={classNames(styles.profilePage)}>
      <div className={classNames("whiteBlock", styles.headerPorfile)}>
        <div className={styles.firstInfo}>
          <ComponentImage src={avatar} className={styles.avatar} />
          <div className={styles.textBlock}>
            <Typography.Title level={3}>Красильников Вадим</Typography.Title>
            <Typography.Text type="secondary">
              Младший разработчик
            </Typography.Text>
          </div>
        </div>
        <div className={styles.buttonsGroup}>
          <Upload
            beforeUpload={() => false}
            onChange={handleImageChange}
            showUploadList={false}
          >
            <Button ghost icon={<PictureOutlined />} type="primary">
              Изменить фото
            </Button>
          </Upload>
        </div>
      </div>
      <div className={classNames("whiteBlock", styles.detailedInfo)}>
        <Typography.Title level={3}>Подробная информация</Typography.Title>
        <Form layout="vertical">
          <Form.Item label="Имя пользователя">{userData.username}</Form.Item>
          <Form.Item label="Полное имя">{userData.fullname}</Form.Item>
          <Form.Item label="Должность">{userData.post}</Form.Item>
          <Form.Item label="Почта">{userData.email}</Form.Item>
        </Form>
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
      <Modal
        width={500}
        title={
          <Typography.Title level={4}>Редактирование фото</Typography.Title>
        }
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setModalVisible(false)}>
            Отмена
          </Button>,
          <Button key="save" type="primary" onClick={handleSave}>
            Сохранить
          </Button>,
        ]}
      >
        {image && (
          <div className={styles.modalContent}>
            <AvatarEditor
              className={styles.avatarEditor}
              ref={editorRef}
              image={image}
              width={350}
              height={350}
              border={50}
              borderRadius={175}
              scale={scale}
            />
            <Slider
              min={1}
              max={2}
              step={0.01}
              value={scale}
              onChange={handleScaleChange}
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ProfilePage;
