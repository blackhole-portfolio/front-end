// Imports

import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  token,
  errorStatusCode,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        token && errorStatusCode !== 403 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

// State Mapping

const mapStateToProps = ({ token, errorStatusCode }) => ({
  token,
  errorStatusCode
});

// Export

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(PrivateRoute)
);