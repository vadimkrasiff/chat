import { AxiosRequestConfig } from "axios";
import { axios } from "core";
import { Modal } from "ui-kit";

export function errorModalCreate(text: string) {
  Modal.error({
    title: "Ошибка",
    zIndex: 2000,
    content: text.replace(/[:"]/g, ""),
  });
}

interface fetchFuncType {
  fetchFunc: AxiosRequestConfig;
  onError: () => void;
}
export const fetchFunc = async (
  fetchOptions: AxiosRequestConfig,
  onError?: any
) => {
  try {
    let { url, method, data, responseType, params, headers } = fetchOptions;
    const response = await axios.create()({
      url,
      method,
      data,
      responseType,
      params,
      headers,
    });
    const { status } = response;
    if (status === 200 || status === 201 || status === 204 || status === 202) {
      if (response.data) {
        return response.data;
      } else return status;
    }
  } catch (error: any) {
    if (error.response.status !== 403) {
      if (onError) onError(error.response.data.message || error.message);
      else errorModalCreate(error.response.data.message || error.message);
    }
  }
};
