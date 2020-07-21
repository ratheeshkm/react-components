import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
