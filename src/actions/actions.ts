import {
  DIALOGS_SET_ITEMS,
  DIALOG_SET_ITEM,
  MESSAGES_SET_ITEMS,
  MESSAGE_SET_ITEM,
  REMOVE_MESSAGES,
  USER_SET_DATA,
} from "./actionTypes";

export const setDialogsAC = (value: any) => {
  return {
    type: DIALOGS_SET_ITEMS,
    payload: value,
  };
};

export const setDialogAC = (value: any) => {
  return {
    type: DIALOG_SET_ITEM,
    payload: value,
  };
};

export const setMessagesAC = (value: any) => {
  return {
    type: MESSAGES_SET_ITEMS,
    payload: value,
  };
};

export const removeMessageAC = (value: string) => {
  return {
    type: REMOVE_MESSAGES,
    payload: value,
  };
};

export const setNewMessageAC = (value: any) => {
  return {
    type: MESSAGE_SET_ITEM,
    payload: value,
  };
};

export const setUserAC = (value: any) => {
  return {
    type: USER_SET_DATA,
    payload: value,
  };
};
