import { all } from 'redux-saga/effects';
import authors from './authorsSaga';
import courses from './coursesSaga';

export default function* root() {
  yield all([authors(), courses()]);
}
