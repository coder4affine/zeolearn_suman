import { connect } from 'react-redux';
import about from './about';
import * as types from '../../constants/actionTypes';

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadItems: () => dispatch({ type: `${types.LOAD_ITEMS}_${types.REQUEST}` }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(about);
