import * as React from "react";
import LoginFailed from "components/LoginFailed/LoginFailed";
import { setGoogleToken } from "actions/tokenActions";
import { connect } from "react-redux";

interface IProps {
  setGoogleToken: (token: null) => void;
}

class LoginFailedContainer extends React.Component<IProps> {
  private logOut = () => {
    this.props.setGoogleToken(null);
  };

  render() {
    return <LoginFailed onLogoutClick={this.logOut} />;
  }
}

export default connect(
  null,
  { setGoogleToken }
)(LoginFailedContainer);
