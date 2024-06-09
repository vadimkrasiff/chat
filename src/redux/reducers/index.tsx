import { combineReducers } from "redux";
import dialogReducer from "./dialogReducer";
import messagesReducer from "./messagesReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  dialogs: dialogReducer,
  messages: messagesReducer,
  user: userReducer
});
