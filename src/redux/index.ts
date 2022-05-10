import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tests from "./reducers/tests";

const store = configureStore({
  reducer: combineReducers({
    tests,
  }),
  devTools: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
});

export const IStore = typeof store;

export default store;