import * as React from "react";
import styled from "styled-components";
import { whiteColor } from "theme/theme";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/IconButton";

const WhiteButton = styled(Button)`
  && {
    color: ${whiteColor};
    grid-area: menu;
  }
`;

interface IProps {
  onClick: () => void;
  style?: object;
}

class DrawerButton extends React.Component<IProps> {
  render() {
    return (
      <WhiteButton aria-haspopup="true" onClick={this.props.onClick} style={this.props.style}>
        <MenuIcon />
      </WhiteButton>
    );
  }
}

export default DrawerButton;
