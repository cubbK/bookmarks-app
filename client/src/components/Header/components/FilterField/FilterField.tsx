import * as React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  AppBar,
  Toolbar
} from "@material-ui/core";
import {
  Clear as ClearIcon,
  ArrowBack as ArrowBackIcon
} from "@material-ui/icons";

import { Spring } from "react-spring";

import styled from "styled-components";



const InputStyled = styled(Input)`
  && {
    color: #fff;
    width: 100%;
    &::before {
      border-bottom-color: rgba(255, 255, 255, 0.4);
    }
    &::after {
      border-bottom-color: #fff !important;
    }
    &:hover {
      &::before {
        border-bottom: 2px solid rgba(255, 255, 255, 0.8) !important;
      }
    }
  }
`;

const IconButtonStyled = styled(IconButton)`
  && {
    color: #fff;
  }
`;

interface IAppBarStyled {
  left: string;
}

const AppBarStyled = styled<IAppBarStyled, any>(AppBar)`
  && {
    position: absolute;
    left: ${props => props.left};
    top: 0;
  }
`;

interface IProps {
  value: string;
  handleChange: () => void;
  handleCleanField: () => void;
  handleBack: () => void;
  isOpen: boolean;
}

class FilterField extends React.Component<IProps> {
  render() {
    if (this.props.isOpen) {
      return (
        <Spring from={{ left: "100%" }} to={{ left: "0%" }}>
          {({ left }) => (
            <AppBarStyled position="sticky" left={left}>
              <Toolbar>
                <InputStyled
                  id="filter"
                  type="text"
                  value={this.props.value}
                  onChange={this.props.handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButtonStyled
                        aria-label="reset filter"
                        onClick={this.props.handleCleanField}
                      >
                        {this.props.value.length > 0 ? <ClearIcon /> : null}
                      </IconButtonStyled>
                    </InputAdornment>
                  }
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButtonStyled
                        aria-label="back"
                        onClick={this.props.handleBack}
                      >
                        <ArrowBackIcon />
                      </IconButtonStyled>
                    </InputAdornment>
                  }
                />
              </Toolbar>
            </AppBarStyled>
          )}
        </Spring>
      );
    } else {
      return null;
    }
  }
}

export default FilterField;
