import { connect } from 'react-redux';
import about from './about';

function mapStateToProps(state) {
  return {
    locale: state.locale.locale,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(about);
