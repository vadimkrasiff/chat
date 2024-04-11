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

const typeFile = [
  {
    id: "pdf",
    icon: FilePdfOutlined,
  },
  {
    id: "jpg",
    icon: FileJpgOutlined,
  },
  {
    id: "xlsx",
    icon: FileExcelOutlined,
  },
  {
    id: "doc",
    icon: FileWordOutlined,
  },
  {
    id: "zip",
    icon: FileZipOutlined,
  },
  {
    id: "ppt",
    icon: FilePptOutlined,
  },
];

export const getIcon = (name: string) => {
  const split = name.split(".");
  const typeName = split.pop();
  const icon = typeFile.find((type) => type.id == typeName)?.icon;
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
