import axios from "axios";
import { fetchFunc } from "./fetchFunc";

export interface authUserProps {
  email: string;
  password: string;
}

export const authUser = async (post: authUserProps) => {
  try {
    const data = await fetchFunc({
      url: "/api/user/login",
      method: "post",
      data: post,
    });
    if (data) {
      localStorage.setItem("token", data.token);
      axios.defaults.headers.common["token"] = data.token;
    }
    return data;
  } catch (error) {}
};

export const getMe = async () => {
  try {
    const data = await fetchFunc({
      url: "/api/user/me",
    });
    return data;
  } catch (error) {}
};

export const logout = () => {
  localStorage.removeItem("token");
  axios.defaults.headers.common["token"] = "";
};

export const getUsers = async () => {
  try {
    const data = await fetchFunc({
      url: "/api/users",
    });
    return data;
  } catch (error) {}
};
