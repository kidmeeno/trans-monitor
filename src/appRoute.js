import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Admin from "./pages/adminPage/adminPage";
import Layout from "./components/layout/layout";
const MyRoute = ({ Component, path, exact }) => {
  return (
    <Route
      exact={exact || true}
      path={path}
      render={props => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <MyRoute path="/" Component={Admin} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
