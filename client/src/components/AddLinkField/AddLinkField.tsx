import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: [input] 6fr [button] 1fr;
  grid-column-gap: 20px;
`;

const TextFieldStyled = styled(TextField)`
  font-size: 1.5em;
`;

interface IProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => any;
  value: string;
  toAutoFocus?: boolean;
  pending: boolean;
}

class AddLinkField extends React.Component<IProps> {
  static defaultProps: Partial<IProps> = {
    toAutoFocus: false
  };

  onEnterPress = handle => event => (event.key === "Enter" ? handle() : null);

  render() {
    return (
      <Wrapper>
        <TextFieldStyled
          id="new-link"
          label="Link"
          value={this.props.value}
          onChange={this.props.handleInputChange}
          margin="none"
          autoFocus={this.props.toAutoFocus}
          fullWidth={true}
          onKeyPress={this.onEnterPress(this.props.onButtonClick)}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={this.props.onButtonClick}
          disabled={this.props.pending}
        >
          Add
        </Button>
      </Wrapper>
    );
  }
}

export default AddLinkField;
