import * as React from "react";
import AddLinkField from "components/AddLinkField/AddLinkField";
import { connect } from "react-redux";
import { addLink } from "actions/linkActions";
import { IStoreState } from "reducers";
interface Props {
  addLink: (link: string, userJWT: string) => void;
  userJWT: string;
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
    this.props.addLink(this.state.inputText, this.props.userJWT);
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
  (state: IStoreState) => ({
    userJWT: state.userJWT
  }),
  { addLink }
)(AddLinkFieldContainer);
