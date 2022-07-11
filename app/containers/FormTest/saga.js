// import { take, call, put, select } from 'redux-saga/effects';

import { call, put, takeLatest } from 'redux-saga/effects';
import { callApiError, callApiSuccess } from './actions';
import { CALL_API_LOAD } from './constants';
import request from './helper';

function* fetchAPITest() {
  const requestUrl = 'https://jsonplaceholder.typicode.com/todos';

  try {
    const data = yield call(request, requestUrl);

    yield put(callApiSuccess(data));
  } catch (err) {
    yield put(callApiError(err));
  }
}

// Individual exports for testing
export default function* formTestSaga() {
  yield takeLatest(CALL_API_LOAD, fetchAPITest);
}
