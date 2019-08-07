import { all, takeEvery, call, put } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';

export function* loadItems() {
  try {
    const res = yield call(fetch, 'http://localhost:3004/items');
    const items = yield res.json();
    yield put({ type: `${types.LOAD_ITEMS}_${types.SUCCESS}`, payload: items });
  } catch (error) {
    yield put({ type: `${types.LOAD_ITEMS}_${types.FAILURE}`, payload: error });
  }
}

export function* loadItemsRequest() {
  yield takeEvery(`${types.LOAD_ITEMS}_${types.REQUEST}`, loadItems);
}

export default function* root() {
  yield all([loadItemsRequest()]);
}
