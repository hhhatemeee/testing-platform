import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import tests, { testsState } from "./reducers/tests";
import auth, { authState } from "./reducers/auth";
import user, { userState } from "./reducers/user";
import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";
import { createReduxHistoryContext, RouterState } from "redux-first-history";
import { createBrowserHistory } from "history";
import localTest, { localTestState } from "./reducers/localTest";
import questions, { questionsState } from "./reducers/questions";

const sagaMiddleware = createSagaMiddleware();

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer,
} = createReduxHistoryContext({history: createBrowserHistory()})

export interface IStore {
  router: Reducer<RouterState>,
  tests: testsState,
  auth: authState,
  user: userState,
  localTest: localTestState,
  questions: questionsState,
};


const store = configureStore({
  reducer: combineReducers({
    router: routerReducer,
    tests,
    auth,
    user,
    localTest,
    questions,
  }),
  middleware: [sagaMiddleware,routerMiddleware],
  devTools: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
});

export const history = createReduxHistory(store);

sagaMiddleware.run(rootSaga);

export default store;