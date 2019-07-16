import { connect } from 'react-redux';
import * as types from '../../constants/actionTypes';
import home from './home';

function mapStateToProps(state) {
  return {
    locale: state.locale.locale,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeLocale: payload => dispatch({ type: 'CHANGE_LOCALE', payload }),
    loadAuthors: () => dispatch({ type: `${types.LOAD_AUTHORS}_${types.REQUEST}` }),
    loadCourses: () => dispatch({ type: `${types.LOAD_COURSES}_${types.REQUEST}` }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(home);
