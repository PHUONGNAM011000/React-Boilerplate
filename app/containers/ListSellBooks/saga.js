// import { take, call, put, select } from 'redux-saga/effects';

import { call, put, takeLatest } from 'redux-saga/effects';
import { callApiSuccess } from './actions';
import { LOAD_API } from './constants';
import request from './helper';

function* fetchApiBooks() {
  const responseUrl = 'https://jsonplaceholder.typicode.com/comments';

  try {
    const dataBooks = yield call(request, responseUrl);
    yield put(callApiSuccess(dataBooks));
  } catch (err) {
    console.error(err);
  }
}

// Individual exports for testing
export default function* listSellBooksSaga() {
  yield takeLatest(LOAD_API, fetchApiBooks);
}
