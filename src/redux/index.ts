import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

import tests from "./reducers/tests";
import auth from "./reducers/auth";
import user from "./reducers/user";
import rootSaga from "./sagas";
import localTest from "./reducers/localTest";
import questions from "./reducers/questions";

const sagaMiddleware = createSagaMiddleware();

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer,
} = createReduxHistoryContext({history: createBrowserHistory()})

const rootReducer = combineReducers({
  router: routerReducer,
    tests,
    auth,
    user,
    localTest,
    questions,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware,routerMiddleware],
  devTools: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
export type State = ReturnType<typeof rootReducer>;
export default store;