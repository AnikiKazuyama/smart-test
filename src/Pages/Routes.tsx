import * as React from 'react';
import AuthPage from './AuthPage';
import { Switch } from 'react-router-dom';
import { PrivateRoute, OnlyPublicRoute } from '../routes';
import HeaderWithFooterLayout from '../layouts/headerWithFooter';

function Routes() {
  return (
    <Switch>
      <PrivateRoute
        exact
        path="/"
        render={() => <HeaderWithFooterLayout>Hello</HeaderWithFooterLayout>}
      />
      <OnlyPublicRoute path="/login" component={AuthPage} />
    </Switch>
  );
}

export default Routes;
