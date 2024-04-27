import { DIALOGS_SET_ITEMS } from "../../actions/actionTypes";

const initialState = {
  items: [],
};

const dialogReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case DIALOGS_SET_ITEMS:
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
};

export default dialogReducer;
