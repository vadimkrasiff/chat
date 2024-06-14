import { fetchFunc } from "./fetchFunc";

export const getChats = async () => {
  try {
    const data = await fetchFunc({ url: "/api/chats", method: "get" });
    return data;
  } catch (error) {}
};

export const getChat = async (chatId: string) => {
  try {
    const data = await fetchFunc({
      url: `/api/chat?id=${chatId}`,
      method: "get",
    });
    return data;
  } catch (error) {}
};

export const createChat = async (post: any) => {
  try {
    const data = await fetchFunc({
      url: `/api/chat`,
      method: "post",
      data: post,
    });
    return data;
  } catch (error) {}
};
