import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

const IS_AUTHORIZED = true;
function PrivateRoute(props: RouteProps) {
  if (IS_AUTHORIZED) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
}

export default PrivateRoute;
