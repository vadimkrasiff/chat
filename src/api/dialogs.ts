import { fetchFunc } from "./fetchFunc";

export const getDialogs = async () => {
  try {
    const data = await fetchFunc({ url: "/dialogs", method: "get" });
    return data;
  } catch (error) {}
};
