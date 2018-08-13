import * as React from "react";
import { Route, withRouter, Switch } from "react-router";
import { connect } from "react-redux";
import { compose } from "redux";
import Homepage from "pages/Homepage/Homepage";
import AppPage from "pages/AppPage/AppPage";
import GoogleRedirectPage from "pages/GoogleRedirectPage/GoogleRedirectPage";
import { IStoreState } from "reducers";

interface IProps {
  userJWT: string | null;
}

const NoMatch = () => <div>No match</div>;

const App = (props: IProps) => (
  <React.Fragment>
    <Switch>
      <Route
        exact={true}
        path="/"
        component={props.userJWT ? AppPage : Homepage}
      />
      <Route
        exact={true}
        path="/googleRedirect/"
        component={GoogleRedirectPage}
      />
      <Route component={NoMatch} />
    </Switch>
  </React.Fragment>
);

export default compose<any>(
  withRouter,
  connect((state: IStoreState) => ({
    userJWT: state.userJWT
  }))
)(App);
