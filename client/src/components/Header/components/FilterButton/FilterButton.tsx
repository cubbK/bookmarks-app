import * as React from "react";
import { Search as SearchIcon } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

import styled from "styled-components";
import { whiteColor } from "theme/theme";

const IconButtonStyled = styled(IconButton)`
  && {
    color: ${whiteColor};
    grid-area: filter;
  }
`

interface IProps {
  onClick: () => void;
  style?: object;
}

class FilterButton extends React.Component<IProps> {
  render() {
    return (
      <IconButtonStyled onClick={this.props.onClick} style={this.props.style}>
        <SearchIcon />
      </IconButtonStyled>
    );
  }
}

export default FilterButton;
