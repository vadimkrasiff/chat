import { DIALOGS_SET_ITEMS, MESSAGES_SET_ITEMS } from "./actionTypes";

export const setDialogsAC = (value: any) => {
  return {
    type: DIALOGS_SET_ITEMS,
    payload: value,
  };
};

export const setMessagesAC = (value: any) => {
  return {
    type: MESSAGES_SET_ITEMS,
    payload: value,
  };
};
