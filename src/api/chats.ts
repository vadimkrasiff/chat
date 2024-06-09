import { fetchFunc } from "./fetchFunc";

export const getChats = async () => {
  try {
    const data = await fetchFunc({ url: "/api/chats", method: "get" });
    return data;
  } catch (error) {}
};
