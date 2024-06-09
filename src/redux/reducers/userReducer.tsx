import { USER_SET_DATA } from "../../actions/actionTypes";

const initialState = { 
  isAuth:false
};

const userReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case USER_SET_DATA:
      return {
        ...state,
        ...payload,
        isAuth:true
      };
    default:
      return state;
  }
};

export default userReducer;
