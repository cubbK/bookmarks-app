import * as React from "react";
import Header from "components/Header/Header";
import { Spring, config } from "react-spring";
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
  isDrawerOpen: boolean;
  isFilterFieldOpen: boolean;
}

class HeaderContainer extends React.Component<IProps, IState> {
  state = {
    isDrawerOpen: false,
    isFilterFieldOpen: false
  };

  toggleDrawer = (isOpen: boolean) => () => {
    this.setState({
      isDrawerOpen: isOpen
    });
  };

  toggleFilterField = (isOpen: boolean) => () => {
    this.setState({
      isFilterFieldOpen: isOpen
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
    const initialFilterFieldOpacity = this.state.isFilterFieldOpen ? 0 : 1;
    const finalFilterFieldOpacity = this.state.isFilterFieldOpen ? 1 : 0;
    return (
      <Spring
        from={{
          filterFieldOpacity: initialFilterFieldOpacity,
          restOpacity: finalFilterFieldOpacity
        }}
        to={{
          filterFieldOpacity: finalFilterFieldOpacity,
          restOpacity: initialFilterFieldOpacity
        }}
        config={config.stiff}
      >
        {({ filterFieldOpacity, restOpacity }) => (
          <Header>
            <Header.Logo style={{ opacity: restOpacity, visibility: restOpacity === 0 ? "hidden" : "visible"}} />
            <Header.FilterField
              value={this.props.filterString}
              handleChange={this.handleFilterFieldChange}
              handleCleanField={this.handleFilterClean}
              handleBack={this.toggleFilterField(false)}
              style={{ opacity: filterFieldOpacity }}
            />
            <Header.FilterButton
              onClick={this.toggleFilterField(true)}
              style={{ opacity: restOpacity, visibility: restOpacity === 0 ? "hidden" : "visible" }}
            />
            <Header.DrawerButton
              onClick={this.toggleDrawer(true)}
              style={{ opacity: restOpacity, visibility: restOpacity === 0 ? "hidden" : "visible" }}
            />
            <Header.Drawer
              open={this.state.isDrawerOpen}
              onOpen={this.toggleDrawer(true)}
              onClose={this.toggleDrawer(false)}
            >
              <Header.DrawerList
                onLogoutClick={this.onLogoutClick}
                onProfileClick={this.onProfileClick}
              />
            </Header.Drawer>
          </Header>
        )}
      </Spring>
    );
  }
}

export default connect(
  (state: IStoreState) => ({
    filterString: state.filterString
  }),
  { setUserJWT, setFilterString }
)(HeaderContainer);
