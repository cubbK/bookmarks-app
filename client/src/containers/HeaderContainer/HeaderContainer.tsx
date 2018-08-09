import * as React from "react";
import Header from "components/Header/Header";
import { connect } from "react-redux";
import { setGoogleToken } from "actions/tokenActions";

interface IProps {
  setGoogleToken: (token: string | null) => void;
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
    this.props.setGoogleToken(null);
  };

  private onProfileClick = () => {
    console.log("profile");
    console.log("does nothing yet");
  };
}

export default connect(
  null,
  { setGoogleToken }
)(HeaderContainer);
