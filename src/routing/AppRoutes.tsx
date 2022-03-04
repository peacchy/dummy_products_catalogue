import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Login } from "app/containers/login/Login";

import { AppRoute } from "./AppRoute.enum";
import { ProductCataloguePage } from "app/containers/catalogue/ProductCataloguePage";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.home} exact component={ProductCataloguePage} />
      <Route path={AppRoute.login} component={Login} />

      <Redirect to={AppRoute.home} />
    </Switch>
  );
};
