import { fetchFunc } from "./fetchFunc";

export const getMessages = async (id: string) => {
  try {
    const data = await fetchFunc({ url: `/messages?_id=${id}`, method: "get" });
    return data;
  } catch (error) {}
};
