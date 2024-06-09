import {
  DIALOGS_SET_ITEMS,
  MESSAGES_SET_ITEMS,
  USER_SET_DATA,
} from "./actionTypes";

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

export const setUserAC = (value: any) => {
  return {
    type: USER_SET_DATA,
    payload: value,
  };
};
