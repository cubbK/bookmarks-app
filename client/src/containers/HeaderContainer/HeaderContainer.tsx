import * as React from "react";
import Header from "components/Header/Header";
import { connect } from "react-redux";
import { setUserJWT } from "actions/authActions";

interface IProps {
  setUserJWT: (token: string | null) => void;
}

interface IState {
  drawerOpen: boolean;
  filterFieldOpen: boolean;
}

class HeaderContainer extends React.Component<IProps> {
  state = {
    drawerOpen: false,
    filterFieldOpen: false
  };

  toggleDrawer = (isOpen: boolean) => () => {
    this.setState({
      drawerOpen: isOpen
    });
  };

  toggleFilterField = (isOpen: boolean) => () => {
    this.setState({
      filterFieldOpen: isOpen
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
          handleBack={this.toggleFilterField(false)}
          isOpen={this.state.filterFieldOpen}
        />
        <Header.FilterButton onClick={this.toggleFilterField(true)} />
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
