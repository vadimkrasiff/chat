import { combineReducers } from "redux";
import dialogReducer from "./dialogReducer";
import messagesReducer from "./messagesReducer";

export const rootReducer = combineReducers({
  dialogs: dialogReducer,
  messages: messagesReducer,
});
