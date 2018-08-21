import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: [input] 6fr [button] 1fr;
  grid-column-gap: 20px;
`;

interface Props {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => any;
  value: string;
}

const AddLinkField = (props: Props) => (
  <Wrapper>
    <TextField
      id="new-link"
      label="Link"
      value={props.value}
      onChange={props.handleInputChange}
      margin="none"
      autoFocus={true}
      fullWidth={true}
    />
    <Button variant="contained" color="secondary" onClick={props.onButtonClick}>
      Add
    </Button>
  </Wrapper>
);

export default AddLinkField;
