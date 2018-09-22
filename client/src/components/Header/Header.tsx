import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";


import DrawerList from "./components/DrawerList/DrawerList";
import FilterField from "./components/FilterField/FilterField";
import DrawerButton from "./components/DrawerButton/DrawerButton";
import Logo from "./components/Logo/Logo";
import Drawer from "./components/Drawer/Drawer";

import styled from "styled-components";


const AppBarStyled = styled(AppBar)``;

const ToolbarStyled = styled(Toolbar)`
  && {
    display: grid;
    grid-template-columns: 70px 1fr 50px;
  }
`;



interface IProps {
}

interface IState {
  drawerOpen: boolean;
}

class Header extends React.Component<IProps, IState> {

  static Logo = Logo;
  static FilterField = FilterField;
  static DrawerButton = DrawerButton;
  static Drawer = Drawer;
  static DrawerList = DrawerList;

  public render() {
    return (
      <header>
        <AppBarStyled position="sticky">
          <ToolbarStyled>
            {this.props.children}
          </ToolbarStyled>
        </AppBarStyled>
      </header>
    );
  }

  
}

export default Header;