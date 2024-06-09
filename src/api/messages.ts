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
