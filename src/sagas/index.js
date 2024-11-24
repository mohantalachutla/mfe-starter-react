import { all } from "redux-saga/effects";

import helloSaga from "./helloSaga";

export const rootSaga = function* () {
  yield all([helloSaga()]);
};

export default rootSaga;
