import { DIALOGS_SET_ITEMS, DIALOG_SET_ITEM } from "../../actions/actionTypes";

const initialState = {
  items: [],
  chat: null,
};

const dialogReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case DIALOGS_SET_ITEMS:
      return {
        ...state,
        items: payload,
      };
    case DIALOG_SET_ITEM:
      return {
        ...state,
        chat: payload,
      };
    default:
      return state;
  }
};

export default dialogReducer;
