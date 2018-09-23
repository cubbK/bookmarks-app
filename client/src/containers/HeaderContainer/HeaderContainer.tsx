import * as React from "react";
import Header from "components/Header/Header";
import { connect } from "react-redux";
import { setUserJWT } from "actions/authActions";

interface IProps {
  setUserJWT: (token: string | null) => void;
}

class HeaderContainer extends React.Component<IProps> {
  state = {
    drawerOpen: false
  };

  toggleDrawer = (isOpen: boolean) => () => {
    this.setState({
      drawerOpen: isOpen
    });
  };

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
      <Header>
        <Header.Logo />
        <Header.FilterField
          value="123"
          handleChange={this.onProfileClick}
          handleCleanField={this.onProfileClick}
        />
        <Header.DrawerButton onClick={this.toggleDrawer(true)} />
        <Header.Drawer
          open={this.state.drawerOpen}
          onOpen={this.toggleDrawer(true)}
          onClose={this.toggleDrawer(false)}
        >
          <Header.DrawerList
            onLogoutClick={this.onLogoutClick}
            onProfileClick={this.onProfileClick}
          />
        </Header.Drawer>
      </Header>
    );
  }
}

export default connect(
  null,
  { setUserJWT }
)(HeaderContainer);
