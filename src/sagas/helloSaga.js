import { call, put, takeLatest } from "redux-saga/effects";

import { getHello } from "../api";
import { loadingOff, loadingOn, a } from "../reducers/loader";
import { setMessage } from "../reducers/hello";
import { showError } from "../reducers/modal";
import { hello } from "../actions";

const helloSagaHandler = function* (payload) {
  yield put(loadingOn());
  try {
    const { data } = yield call(getHello, payload);
    yield put(setMessage(data));
  } catch (error) {
    yield put(showError({ message: error.message }));
  }
  yield put(loadingOff());
};

export default helloSaga = function* (payload) {
  yield takeLatest(hello.type, helloSagaHandler, payload);
};
