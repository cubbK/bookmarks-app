import React from "react";
import { Route, withRouter, Switch } from "react-router";
import { connect } from "react-redux";
import { compose } from "redux";
import Homepage from "./pages/Homepage/Homepage";
import AppPage from "./pages/AppPage/AppPage";
import GoogleRedirectPage from "./pages/GoogleRedirectPage/GoogleRedirectPage";

const App = props => (
  <React.Fragment>
    <Switch>
    <Route
      exact
      path="/"
      component={props.googleToken ? AppPage : Homepage}
    />
    <Route exact path="/googleRedirect/" component={GoogleRedirectPage} />
    <Route component={props=> 'no match'} />
    </Switch>
  </React.Fragment>
);

export default withRouter(connect(state => ({
  googleToken: state.googleToken
}))(App));
