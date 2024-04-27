import { MESSAGES_SET_ITEMS } from "../../actions/actionTypes";

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
    default:
      return state;
  }
};

export default messagesReducer;
