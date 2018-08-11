import * as React from "react";
import { IStoreState } from "types";

import { connect } from "react-redux";
import { getUserDataFromServer } from "actions/tokenActions";

interface IProps {
  googleToken: string;
  getUserDataFromServer: (token: string) => void;
}

class LinkListContainer extends React.Component<IProps> {
  componentDidMount() {
    console.log(this.props.googleToken);
    this.props.getUserDataFromServer(this.props.googleToken);
  }

  render() {
    return <div>LinkContainerList</div>;
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    googleToken: state.googleToken
  };
}

export default connect(
  mapStateToProps,
  { getUserDataFromServer }
)(LinkListContainer);
