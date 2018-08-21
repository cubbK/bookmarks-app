import * as React from "react";
import AddLinkField from "components/AddLinkField/AddLinkField";

class AddLinkFieldContainer extends React.Component {
  state = {
    inputText: ""
  };

  handleInputChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  onButtonClick = event => {
    console.log(123);
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

export default AddLinkFieldContainer;
