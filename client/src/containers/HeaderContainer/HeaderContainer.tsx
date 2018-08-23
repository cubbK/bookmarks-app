import * as React from "react";
import Header from "components/Header/Header";
import { connect } from "react-redux";
import { setUserJWT } from "actions/authActions";

interface IProps {
  setUserJWT: (token: string | null) => void;
}

class HeaderContainer extends React.Component<IProps> {
  onLogoutClick = () => {
    console.log("logout");
    this.props.setUserJWT(null);
  };

  onProfileClick = () => {
    console.log("profile");
    console.log("does nothing yet");
  };

  render() {
    return (
      <Header
        onLogoutClick={this.onLogoutClick}
        onProfileClick={this.onProfileClick}
      />
    );
  }
}

export default connect(
  null,
  { setUserJWT }
)(HeaderContainer);
