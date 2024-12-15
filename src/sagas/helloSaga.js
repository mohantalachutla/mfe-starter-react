import { call, put, takeLatest } from 'redux-saga/effects';

import { hello } from '../api';
import { loadingOff, loadingOn } from '../reducers/loader';
import { helloSuccess, helloFailure } from '../reducers/hello';
import { showAlert } from '../reducers/modal';
import { helloAction } from '../actions';
import { ALERT_TYPES } from '../constants';

const helloSagaHandler = function* ({ payload }) {
  yield put(loadingOn());
  try {
    const { data } = yield call(hello, payload);
    yield put(helloSuccess(data));
  } catch (error) {
    yield put(helloFailure());
    yield put(showAlert({ type: ALERT_TYPES.ERROR, message: error.message }));
  }
  yield put(loadingOff());
};

const helloSaga = function* () {
  yield takeLatest(helloAction.type, helloSagaHandler);
};

export default helloSaga;
