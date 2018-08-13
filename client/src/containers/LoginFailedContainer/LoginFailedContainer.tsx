import * as React from "react";
import LoginFailed from "components/LoginFailed/LoginFailed";
import { setUserJWT } from "actions/authActions";
import { connect } from "react-redux";

interface IProps {
  setUserJWT: (token: null) => void;
  message?: string;
}

class LoginFailedContainer extends React.Component<IProps> {
  private logOut = () => {
    this.props.setUserJWT(null);
  };

  render() {
    return (
      <LoginFailed onLogoutClick={this.logOut} message={this.props.message} />
    );
  }
}

export default connect(
  null,
  { setUserJWT }
)(LoginFailedContainer);
