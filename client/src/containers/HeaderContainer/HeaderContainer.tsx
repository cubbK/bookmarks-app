import * as React from "react";
import Header from "components/Header/Header";
import { connect } from "react-redux";
import { setUserJWT } from "actions/authActions";

interface IProps {
  setUserJWT: (token: string | null) => void;
}

class HeaderContainer extends React.Component<IProps> {
  public render() {
    return (
      <Header
        onLogoutClick={this.onLogoutClick}
        onProfileClick={this.onProfileClick}
      />
    );
  }

  private onLogoutClick = () => {
    console.log("logout");
    this.props.setUserJWT(null);
  };

  private onProfileClick = () => {
    console.log("profile");
    console.log("does nothing yet");
  };
}

export default connect(
  null,
  { setUserJWT }
)(HeaderContainer);
