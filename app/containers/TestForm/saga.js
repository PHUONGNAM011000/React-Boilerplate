// import { take, call, put, select } from 'redux-saga/effects';

import { call, put, takeLatest } from 'redux-saga/effects';
import { callApiSuccess } from './actions';
import { LOAD_API_TEST } from './constants';
import request from './helper';

function* fetchAPITest() {
  const requestUrl = 'https://jsonplaceholder.typicode.com/posts';

  try {
    const data = yield call(request, requestUrl);

    yield put(callApiSuccess(data));
  } catch (err) {
    yield put(callApiError(err));
  }
}

// Individual exports for testing
export default function* testFormSaga() {
  yield takeLatest(LOAD_API_TEST, fetchAPITest);
}
