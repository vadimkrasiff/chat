import { Modal } from "antd";

export function showDeleteConfirm({
  content,
  onOk,
  okText = "Да",
  cancelText = "Нет",
}: any) {
  Modal.confirm({
    content,
    okType: "primary",
    onOk,
    okText,
    cancelText,
  });
}
