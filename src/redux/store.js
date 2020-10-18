import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import user from "./user";

import sagas from "redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: combineReducers({
    user,
  }),
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(sagas);

export default store;
