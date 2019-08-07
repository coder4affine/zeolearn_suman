import { all } from 'redux-saga/effects';
import authors from './authorsSaga';
import courses from './coursesSaga';
import items from './itemsSaga';

export default function* root() {
  yield all([authors(), courses(), items()]);
}
