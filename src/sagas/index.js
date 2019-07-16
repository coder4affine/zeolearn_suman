import { all } from 'redux-saga/effects';
import authors from './authorsSaga';

export default function* root() {
  yield all([authors()]);
}
