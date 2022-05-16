import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tests, { testsState } from "./reducers/tests";
import auth, { authState } from "./reducers/auth";
import user, { userState } from "./reducers/user";
import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export interface IStore {
  tests: testsState,
  auth: authState,
  user: userState,
}

const store = configureStore({
  reducer: combineReducers({
    tests,
    auth,
    user,
  }),
  middleware: [sagaMiddleware],
  devTools: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
});

sagaMiddleware.run(rootSaga);

export default store;