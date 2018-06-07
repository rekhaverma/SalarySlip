import React from "react";
import {
  Router,
  Route,
  browserHistory,
  DefaultRoute,
  IndexRoute
} from "react-router";
import Home from "./home";

export default (Routes = props => (
  <Router history={browserHistory}>
    <Route name="homepage" path="/" component={Home} />
  </Router>
));
