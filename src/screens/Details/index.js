import { connect } from 'react-redux';
import details from './details';

function mapStateToProps(state) {
  return {
    theme: state.theme1,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeTheme: payload => dispatch({ type: 'CHANGE_THEME', payload }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(details);
