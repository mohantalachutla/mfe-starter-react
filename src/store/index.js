import { configureStore, combineReducers } from "@reduxjs/toolkit";

import rootReducer from "../reducers";
import rootSaga from "../sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const createInjectSaga = (store, runSaga) => {
  store.runningSagas = {};
  const getSaga = (key) => store.runningSagas[key];
  const injectSaga = (key, saga) => {
    if (store.runningSagas[key]) return store.runningSagas[key];
    store.runningSagas[key] = runSaga(saga);
    return store.runningSagas[key];
  };
  const cancelSaga = (key) => {
    if (store.runningSagas[key]) {
      store.runningSagas[key].cancel();
      delete store.runningSagas[key];
    }
  };
  store.injectSaga = injectSaga;
  store.getSaga = getSaga;
  store.cancelSaga = cancelSaga;
  return { injectSaga, getSaga, cancelSaga };
};

const createInjectReducer = (store) => {
  store.runningReducers = {};
  const getReducer = (key) => store.runningReducers[key];
  const injectReducer = (key, reducer) => {
    if (store.runningReducers[key]) return store.runningReducers[key];
    if (typeof reducer !== "function")
      throw new Error("Reducer must be a function");
    store.runningReducers[key] = reducer;
    store.replaceReducer(combineReducers(store.runningReducers));
    return store.runningReducers[key];
  };
  const cancelReducer = (key) => {
    if (store.runningReducers[key]) {
      delete store.runningReducers[key];
      store.replaceReducer(combineReducers(store.runningReducers));
    }
  };
  store.injectReducer = injectReducer;
  store.cancelReducer = cancelReducer;
  store.getReducer = getReducer;
  return { injectReducer, getReducer, cancelReducer };
};

const createReduxStore = ({ middlewares = [] }) => {
  if (!isStoreNull(window.__REDUX_STORE__)) {
    return window.__REDUX_STORE__;
  }
  window.__REDUX_STORE__ = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat([
        ...middlewares,
      ]),
  });
  return window.__REDUX_STORE__;
};
const store = createReduxStore({ middlewares: [sagaMiddleware] });
const { injectReducer } = createInjectReducer(store);
const { injectSaga } = createInjectSaga(store, sagaMiddleware.run);
Object.entries(rootReducer).forEach(([key, value]) => {
  injectReducer(key, value);
});
injectSaga("rootSaga", rootSaga);

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
if (isStoreNull(store)) {
  throw new Error("Failed to create store");
}
console.info({ store });
export default store;

function isStoreNull(store) {
  if (store && store?.dispatch) {
    return false;
  }
  return true;
}
