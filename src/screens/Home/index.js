import { connect } from 'react-redux';
import * as types from '../../constants/actionTypes';
import home from './home';

function mapStateToProps(state) {
  return {
    locale: state.locale.locale,
    courses: state.courses,
    authors: state.authors,
    loading:
      !!state.loading[types.LOAD_AUTHORS] ||
      !!state.loading[types.LOAD_COURSES] ||
      !!state.loading[types.DELETE_COURSE],
    error:
      state.error[types.LOAD_AUTHORS] ||
      state.error[types.LOAD_COURSES] ||
      state.error[types.EDIT_COURSE] ||
      state.error[types.ADD_COURSE] ||
      state.error[types.DELETE_COURSE],
    modalLoading: !!state.loading[types.ADD_COURSE] || !!state.loading[types.EDIT_COURSE],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeLocale: payload => dispatch({ type: 'CHANGE_LOCALE', payload }),
    loadAuthors: () => dispatch({ type: `${types.LOAD_AUTHORS}_${types.REQUEST}` }),
    loadCourses: () => dispatch({ type: `${types.LOAD_COURSES}_${types.REQUEST}` }),
    submitCourseForm: (payload, actions) => {
      if (payload.id) {
        dispatch({ type: `${types.EDIT_COURSE}_${types.REQUEST}`, payload, actions });
      } else {
        dispatch({ type: `${types.ADD_COURSE}_${types.REQUEST}`, payload, actions });
      }
    },
    deleteCourse: payload => dispatch({ type: `${types.DELETE_COURSE}_${types.REQUEST}`, payload }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(home);
