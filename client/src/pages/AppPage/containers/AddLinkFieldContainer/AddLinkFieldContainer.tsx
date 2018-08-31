import * as React from "react";
import AddLinkField from "components/AddLinkField/AddLinkField";
import { connect } from "react-redux";
import { addLink, resetAddLinkState } from "actions/linkActions";
import { IStoreState } from "reducers";
import { IState as IAddLinkState } from "reducers/addLinkReducer";
interface Props {
  addLink: (link: string, userJWT: string) => void;
  userJWT: string;
  addLinkState: IAddLinkState;
  resetAddLinkState: () => void;
}

class AddLinkFieldContainer extends React.Component<Props> {
  state = {
    inputText: ""
  };

  componentDidUpdate() {
    if (this.props.addLinkState.fulfilled === true) {
      this.props.resetAddLinkState();
      this.setState({
        inputText: ""
      });
    }
  }

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
        pending={this.props.addLinkState.pending}
      />
    );
  }
}

export default connect(
  (state: IStoreState) => ({
    userJWT: state.userJWT,
    addLinkState: state.addLinkState
  }),
  { addLink, resetAddLinkState }
)(AddLinkFieldContainer);
