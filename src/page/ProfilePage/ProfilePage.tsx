import classNames from "classnames";
import styles from "./ProfilePage.module.scss";
import {
  LogoutOutlined,
  PictureOutlined,
  UserOutlined,
} from "@ant-design/icons";
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
import { useEffect, useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { getMe, logout } from "api/user";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFunc } from "api/fetchFunc";
import { setUserAC } from "actions";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<any>(null);
  const [scale, setScale] = useState(1.2);
  const [modalVisible, setModalVisible] = useState(false);
  const editorRef = useRef<any>(null);
  const user = useSelector((state: any) => state?.user);
  const dispatch = useDispatch();

  const handleImageChange = (info: any) => {
    if (info.fileList.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setModalVisible(true);
      };
      reader.readAsDataURL(
        info.fileList[info.fileList.length - 1].originFileObj
      );
    }
  };

  const handleScaleChange = (value: number) => {
    setScale(value);
  };

  const handleSave = async () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      canvas.toBlob(
        async (blob: Blob) => {
          const formData = new FormData();
          formData.append("avatar", blob, "avatar.jpg");

          try {
            const response = await fetchFunc({
              url: "/api/user/avatar",
              method: "POST",
              data: formData,
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });

            if (response.avatar) {
              const data = await getMe();
              if (!!data) {
                dispatch(setUserAC(data));
              }
            }
          } catch (error) {
            console.error("Error uploading avatar", error);
          }
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
          {user && (
            <>
              {user?.avatar ? (
                <ComponentImage
                  src={"http://localhost:3000" + user?.avatar}
                  className={styles.avatar}
                />
              ) : (
                <Avatar size={80} icon={<UserOutlined />} />
              )}
              <div className={styles.textBlock}>
                <Typography.Title
                  level={3}
                >{`${user?.surname} ${user?.name} ${user?.patronymic}`}</Typography.Title>
              </div>
            </>
          )}
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
          <Form.Item label="Полное имя">{`${user?.surname} ${user?.name} ${user?.patronymic}`}</Form.Item>
          <Form.Item label="Почта">{user?.email}</Form.Item>
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
