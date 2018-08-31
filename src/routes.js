import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Leonard from "./components/Leonard";

const Routes = props => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => <Home {...props} projects={props.projects} />}
    />
    <Route exact path="/about" component={About} />
    <Route exact path="/leonard" component={Leonard} />
  </Switch>
);

export default Routes;
