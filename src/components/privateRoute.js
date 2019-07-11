/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const privateRoute = ({ component: Component, authRequire, ...rest }) => {
  if (authRequire) {
    const authenticated = sessionStorage.getItem('token');

    return (
      <Route
        {...rest}
        render={props =>
          authenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/',
                // eslint-disable-next-line react/prop-types
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  }
  return <Route component={Component} {...rest} />;
};

privateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  authRequire: PropTypes.bool,
};

privateRoute.defaultProps = {
  authRequire: false,
};

export default privateRoute;
