import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import DrawerList from "./components/DrawerList/DrawerList";
import FilterField from "./components/FilterField/FilterField";
import FilterButton from "./components/FilterButton/FilterButton";
import DrawerButton from "./components/DrawerButton/DrawerButton";
import Logo from "./components/Logo/Logo";
import Drawer from "./components/Drawer/Drawer";

import styled from "styled-components";

const AppBarStyled = styled(AppBar)`
  overflow: hidden;
`;

const ToolbarStyled = styled(Toolbar)`
  && {
    display: grid;
    justify-items: center;
    grid-template-columns: 50px auto 50px 50px;
    grid-template-rows: auto;
    grid-template-areas: "logo . filter menu";
  }
`;

interface IProps {}

interface IState {}

class Header extends React.Component<IProps, IState> {
  static Logo = Logo;
  static FilterField = FilterField;
  static DrawerButton = DrawerButton;
  static Drawer = Drawer;
  static DrawerList = DrawerList;
  static FilterButton = FilterButton;

  public render() {
    return (
      <header>
        <AppBarStyled position="sticky">
          <ToolbarStyled>{this.props.children}</ToolbarStyled>
        </AppBarStyled>
      </header>
    );
  }
}

export default Header;
