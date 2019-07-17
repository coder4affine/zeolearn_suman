import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';

export function* loadCourses() {
  try {
    const res = yield call(fetch, 'http://localhost:3004/courses');
    const courses = yield res.json();
    yield put({ type: `${types.LOAD_COURSES}_${types.SUCCESS}`, payload: courses });
  } catch (error) {
    yield put({ type: `${types.LOAD_COURSES}_${types.FAILURE}`, payload: error });
  }
}

export function* addCourse({ payload, actions }) {
  const { resetForm, setErrors, setSubmitting } = actions;
  try {
    const res = yield call(fetch, 'http://localhost:3004/courses', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const course = yield res.json();
    yield put({ type: `${types.ADD_COURSE}_${types.SUCCESS}`, payload: course });
    yield call(resetForm);
  } catch (error) {
    yield put({ type: `${types.ADD_COURSE}_${types.FAILURE}`, payload: error });
    yield call(setErrors, { general: error.message });
  } finally {
    yield call(setSubmitting, false);
  }
}

export function* editCourse({ payload, actions }) {
  const { resetForm, setErrors, setSubmitting } = actions;
  try {
    const res = yield call(fetch, `http://localhost:3004/courses/${payload.id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const course = yield res.json();
    yield put({ type: `${types.EDIT_COURSE}_${types.SUCCESS}`, payload: course });
    yield call(resetForm);
  } catch (error) {
    yield put({ type: `${types.EDIT_COURSE}_${types.FAILURE}`, payload: error });
    yield call(setErrors, { general: error.message });
  } finally {
    yield call(setSubmitting, false);
  }
}

export function* deleteCourse({ payload }) {
  try {
    yield call(fetch, `http://localhost:3004/courses/${payload.id}`, { method: 'DELETE' });
    yield put({ type: `${types.DELETE_COURSE}_${types.SUCCESS}`, payload });
  } catch (error) {
    yield put({ type: `${types.DELETE_COURSE}_${types.FAILURE}`, payload: error });
  }
}

export function* loadCoursesRequest() {
  yield takeEvery(`${types.LOAD_COURSES}_${types.REQUEST}`, loadCourses);
}

export function* addCourseRequest() {
  yield takeLatest(`${types.ADD_COURSE}_${types.REQUEST}`, addCourse);
}

export function* deleteCourseRequest() {
  yield takeLatest(`${types.DELETE_COURSE}_${types.REQUEST}`, deleteCourse);
}

export function* updateCourseRequest() {
  yield takeLatest(`${types.EDIT_COURSE}_${types.REQUEST}`, editCourse);
}

export default function* init() {
  yield all([
    loadCoursesRequest(),
    addCourseRequest(),
    deleteCourseRequest(),
    updateCourseRequest(),
  ]);
}
