import { takeEvery } from "redux-saga/effects";

import helloSaga from "./helloSaga";

export default rootSaga = function* () {
  yield takeEvery("*", helloSaga);
};
