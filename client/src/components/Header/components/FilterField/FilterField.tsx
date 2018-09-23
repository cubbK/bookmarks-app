import * as React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { Clear as ClearIcon } from "@material-ui/icons";

import styled from "styled-components";

interface IProps {
  value: string;
  handleChange: () => void;
  handleCleanField: () => void;
}

const InputStyled = styled(Input)`
  && {
    color: #fff;
    &::before {
      border-bottom-color: rgba(255, 255, 255, 0.40);
    }
    &::after {
      border-bottom-color: #fff !important;
    }
    &:hover {
      &::before {
        border-bottom: 2px solid rgba(255, 255, 255, 0.80) !important;
      }
    }
  }
`;

const IconButtonStyled = styled(IconButton)`
  && {
    color: #fff;
  }
`

class FilterField extends React.Component<IProps> {
  render() {
    return (
      <FormControl>
        <InputStyled
          id="filter"
          type="text"
          value={this.props.value}
          onChange={this.props.handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButtonStyled
                aria-label="Toggle password visibility"
                onClick={this.props.handleCleanField}
              >
                {this.props.value.length > 0 ? <ClearIcon /> : null}
              </IconButtonStyled>
            </InputAdornment>
          }
        />
      </FormControl>
    );
  }
}

export default FilterField;
