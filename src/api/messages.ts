import { fetchFunc } from "./fetchFunc";

export const getMessages = async (id: string) => {
  try {
    const data = await fetchFunc({
      url: `/api/messages?chat=${id}`,
      method: "get",
    });
    return data;
  } catch (error) {}
};

export const sendMessage = async (post: any) => {
  try {
    const data = await fetchFunc({
      url: "/api/messages",
      method: "post",
      data: post,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {}
};

export const removeMessage = async (id: string) => {
  try {
    const data = await fetchFunc({
      url: `/api/messages/${id}`,
      method: "delete",
    });
    return data;
  } catch (error) {}
};
