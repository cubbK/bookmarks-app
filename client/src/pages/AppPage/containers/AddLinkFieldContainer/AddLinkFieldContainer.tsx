import * as React from "react";
import AddLinkField from "components/AddLinkField/AddLinkField";
import { connect } from "react-redux";
import { addLink } from "actions/linkActions";

interface Props {
  addLink: (link: string) => void;
}

class AddLinkFieldContainer extends React.Component<Props> {
  state = {
    inputText: ""
  };

  handleInputChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  onButtonClick = event => {
    this.props.addLink(this.state.inputText);
  };

  render() {
    return (
      <AddLinkField
        value={this.state.inputText}
        handleInputChange={this.handleInputChange}
        onButtonClick={this.onButtonClick}
      />
    );
  }
}

export default connect(
  null,
  { addLink }
)(AddLinkFieldContainer);
