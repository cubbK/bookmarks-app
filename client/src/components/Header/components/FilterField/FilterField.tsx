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

import { Spring, config } from "react-spring";

import styled from "styled-components";

const InputStyled = styled(Input)`
  && {
    color: #fff;
    width: 100%;
    max-width: 640px;
    position: absolute;
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
  }
`;

interface IProps {
  value: string;
  handleChange: (event: any) => void;
  handleCleanField: () => void;
  handleBack: () => void;
  style?: object; 
}

class FilterField extends React.Component<IProps> {
  render() {
    return (
      <InputStyled
        style={this.props.style}
        id="filter"
        type="text"
        placeholder="Filter"
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
            <IconButtonStyled aria-label="back" onClick={this.props.handleBack}>
              <ArrowBackIcon />
            </IconButtonStyled>
          </InputAdornment>
        }
      />
    );
  }
}

export default FilterField;
