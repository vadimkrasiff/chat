import { applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: rootReducer });

export default store;
