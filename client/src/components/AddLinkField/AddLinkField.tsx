import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: [input] 6fr [button] 1fr;
  grid-column-gap: 20px;
`;

class AddLinkField extends React.Component {
  state = {
    inputText: ""
  };
  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  render() {
    return (
      <Wrapper>
        <TextField
          id="new-link"
          label="Link"
          value={this.state.inputText}
          onChange={this.handleChange}
          margin="none"
          autoFocus={true}
          fullWidth={true}
        />
        <Button variant="contained" color="secondary">
          Add
        </Button>
      </Wrapper>
    );
  }
}

export default AddLinkField;
