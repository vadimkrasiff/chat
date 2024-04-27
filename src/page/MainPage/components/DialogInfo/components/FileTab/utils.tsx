import {
  FileExcelOutlined,
  FileGifOutlined,
  FileJpgOutlined,
  FilePdfOutlined,
  FilePptOutlined,
  FileWordOutlined,
  FileZipOutlined,
  FileUnknownOutlined,
} from "@ant-design/icons";

export const getIcon = (name: string) => {
  const split = name.split(".");
  const typeName = split.pop();
  switch (typeName) {
    case "pdf":
      return <FilePdfOutlined />;
    case "jpg":
      return <FileJpgOutlined />;
    case "xls":
    case "xlsx":
      return <FileExcelOutlined />;
    case "doc":
    case "docx":
      return <FileWordOutlined />;
    case "zip":
      return <FileZipOutlined />;
    case "ppt":
    case "pptp":
      return <FilePptOutlined />;
    case "gif":
      return <FileGifOutlined />;
    default:
      return <FileUnknownOutlined />;
  }
};
