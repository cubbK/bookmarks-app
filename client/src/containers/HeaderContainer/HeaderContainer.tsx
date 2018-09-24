import * as React from "react";
import Header from "components/Header/Header";
import { connect } from "react-redux";
import { setUserJWT } from "actions/authActions";
import { setFilterString } from "actions/filterActions";

import { IStoreState } from "reducers";

interface IProps {
  setUserJWT: (token: string | null) => void;
  setFilterString: (filterString: string) => void;
  filterString: string;
}

interface IState {
  drawerOpen: boolean;
  filterFieldOpen: boolean;
}

class HeaderContainer extends React.Component<IProps, IState> {
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
    this.props.setFilterString("");
  };

  handleFilterFieldChange = event => {
    const value = event.target.value;
    console.log(value);
    this.props.setFilterString(value);
  };

  handleFilterClean = () => {
    this.props.setFilterString("");
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
          value={this.props.filterString}
          handleChange={this.handleFilterFieldChange}
          handleCleanField={this.handleFilterClean}
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
  (state: IStoreState) => ({
    filterString: state.filterString
  }),
  { setUserJWT, setFilterString }
)(HeaderContainer);
