import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Login } from "app/containers/login/Login";
import { ProductCatalogue } from "app/containers/products/ProductCatalogue";

import { AppRoute } from "./AppRoute.enum";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.home} exact component={ProductCatalogue} />
      <Route path={AppRoute.login} component={Login} />

      <Redirect to={AppRoute.home} />
    </Switch>
  );
};
