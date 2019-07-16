import { all, takeEvery, call, put } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';

export function* loadAuthors() {
  try {
    const res = yield call(fetch, 'http://localhost:3004/authors');
    const authors = yield res.json();
    yield put({ type: `${types.LOAD_AUTHORS}_${types.SUCCESS}`, payload: authors });
  } catch (error) {
    yield put({ type: `${types.LOAD_AUTHORS}_${types.FAILURE}`, payload: error });
  }
}

export function* loadAuthorsRequest() {
  yield takeEvery(`${types.LOAD_AUTHORS}_${types.REQUEST}`, loadAuthors);
}

export default function* root() {
  yield all([loadAuthorsRequest()]);
}
