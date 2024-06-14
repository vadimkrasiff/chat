import {
  Avatar,
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Skeleton,
} from "ui-kit";
import { useEffect, useCallback, useState } from "react";
import { getUsers } from "api/user";
import { CloseOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import TagRender from "./TagRender";
import styles from "./CreateChatForm.module.scss";
import { useSelector } from "react-redux";
import { createChat } from "api";

interface CreateChatFormType {
  onCloseModal: () => void;
  setDialogs: () => void;
}

const CreateChatForm = ({ onCloseModal, setDialogs }: CreateChatFormType) => {
  const [from] = Form.useForm();
  const { Option } = Select;
  const [users, setUsers] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const userId = useSelector((state: any) => state?.user?._id);

  const getUserData = useCallback(async () => {
    const data = await getUsers();
    if (data) {
      setUsers(data);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getUserData();
    setLoading(true);
  }, [getUserData]);

  const filterOption = (input: string, option?: any) => {
    if (option) {
      const optionText = option.children as string | React.ReactNode[];
      if (Array.isArray(optionText)) {
        return optionText.join("").toLowerCase().includes(input.toLowerCase());
      } else if (typeof optionText === "string") {
        return optionText.toLowerCase().includes(input.toLowerCase());
      }
    }
    return false;
  };

  const onFinish = async (value: any) => {
    setLoadingButton(true);
    const postData: any = {
      participants: [...value.participants, userId],
      isGroup: value.isGroup,
    };
    if (value.isGroup) {
      postData["groupInfo"] = { name: value.name };
    }

    const data = await createChat(postData);
    console.log(postData);
    if (data) {
      getUserData();
      //   setDialogs();
      onCloseModal();
    }
    setLoadingButton(false);
  };

  return (
    <>
      <Skeleton loading={loading}>
        <Form
          onFinish={onFinish}
          initialValues={{ isGroup: false }}
          layout="vertical"
          form={from}
        >
          <Form.Item valuePropName="checked" name="isGroup">
            <Checkbox>Групповой чат</Checkbox>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevState, nextState) =>
              prevState.isGroup !== nextState.isGroup
            }
          >
            {({ getFieldValue, setFieldValue }) => {
              const isGroup = getFieldValue("isGroup");
              setFieldValue("name", "");
              return (
                isGroup && (
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Обязательное поле!",
                      },
                    ]}
                    name="name"
                    label="Название чата"
                  >
                    <Input />
                  </Form.Item>
                )
              );
            }}
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevState, nextState) =>
              prevState.isGroup !== nextState.isGroup
            }
          >
            {({ getFieldValue, setFieldValue }) => {
              const isGroup = getFieldValue("isGroup");
              setFieldValue("participants", []);
              return (
                <Form.Item
                  name="participants"
                  label={
                    isGroup ? "Выберите пользователей" : "Выберите пользователя"
                  }
                  rules={[
                    {
                      required: true,
                      message: "Выберите пользователей!",
                    },
                  ]}
                >
                  <Select
                    mode="multiple"
                    showSearch
                    placeholder={
                      isGroup
                        ? "Выберите пользователей"
                        : "Выберите пользователя"
                    }
                    optionFilterProp="children"
                    maxCount={!isGroup ? 1 : undefined}
                    maxTagCount={10}
                    tagRender={(props) => <TagRender {...props} />}
                    filterOption={filterOption}
                  >
                    {isGroup
                      ? users?.groupUsers?.map((user: any) => (
                          <Option key={user._id} value={user._id}>
                            <Avatar
                              src={user.avatar}
                              icon={<UserOutlined />}
                              style={{ marginRight: 8 }}
                            />
                            {user.name}
                          </Option>
                        ))
                      : users?.privateUsers?.map((user: any) => (
                          <Option key={user._id} value={user._id}>
                            <Avatar
                              src={user.avatar}
                              icon={<UserOutlined />}
                              style={{ marginRight: 8 }}
                            />
                            {user.name}
                          </Option>
                        ))}
                  </Select>
                </Form.Item>
              );
            }}
          </Form.Item>
          <div className={styles.buttons}>
            <Button
              loading={loadingButton}
              onClick={onCloseModal}
              icon={<CloseOutlined />}
            >
              Отмена
            </Button>
            <Button
              loading={loadingButton}
              icon={<PlusOutlined />}
              ghost
              type="primary"
              htmlType="submit"
            >
              Создать
            </Button>
          </div>
        </Form>
      </Skeleton>
    </>
  );
};

export default CreateChatForm;
