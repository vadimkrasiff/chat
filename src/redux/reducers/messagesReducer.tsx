import {
  MESSAGES_SET_ITEMS,
  MESSAGE_SET_ITEM,
  REMOVE_MESSAGES,
} from "../../actions/actionTypes";

const initialState = {
  items: [],
};

const messagesReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case MESSAGES_SET_ITEMS:
      return {
        ...state,
        items: payload,
      };
    case MESSAGE_SET_ITEM:
      return {
        ...state,
        items: [...state.items, payload],
      };
    case REMOVE_MESSAGES:
      return {
        ...state,
        items: state.items.filter((item: any) => item?._id != payload),
      };
    default:
      return state;
  }
};

export default messagesReducer;
