import * as React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import {
  Clear as ClearIcon,
  ArrowBack as ArrowBackIcon
} from "@material-ui/icons";

import styled from "styled-components";

interface IProps {
  value: string;
  handleChange: () => void;
  handleCleanField: () => void;
  isOpen: boolean;
}

const InputStyled = styled(Input)`
  && {
    color: #fff;
    grid-column-start: logo;
    grid-column-end: 5;
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

class FilterField extends React.Component<IProps> {
  render() {
    if (this.props.isOpen) {
      return (
        <InputStyled
          id="filter"
          type="text"
          value={this.props.value}
          onChange={this.props.handleChange}
          endAdornment={
            <IconButtonStyled
              aria-label="Reset Filter"
              onClick={this.props.handleCleanField}
            >
              <InputAdornment position="end">
                {this.props.value.length > 0 ? <ClearIcon /> : null}
              </InputAdornment>
            </IconButtonStyled>
          }
          startAdornment={
            <IconButtonStyled>
              <InputAdornment position="start">
                <ArrowBackIcon />
              </InputAdornment>
            </IconButtonStyled>
          }
        />
      );
    } else {
      return null;
    }
  }
}

export default FilterField;
