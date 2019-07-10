import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class child extends PureComponent {
  state = {};

  render() {
    const { user } = this.props;
    console.log('child component');
    return (
      <>
        <h1>CHild Component</h1>
        <span>{user.name}</span>
      </>
    );
  }
}

child.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default child;
