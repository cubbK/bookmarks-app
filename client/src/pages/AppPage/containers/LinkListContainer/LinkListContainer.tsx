import * as React from "react";
import { IStoreState } from "reducers";

import { connect } from "react-redux";
import { getUserDataFromServer } from "actions/tokenActions";

interface IProps {
  googleToken: string;
  userId: string;
  getUserDataFromServer: (token: string, userId: string) => void;
}

class LinkListContainer extends React.Component<IProps> {
  componentDidMount() {
    console.log(this.props.googleToken);
    this.props.getUserDataFromServer(this.props.googleToken, this.props.userId);
  }

  render() {
    return <div>LinkContainerList</div>;
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    googleToken: state.googleToken,
    userId: state.userId,
    userData: state.userData
  };
}

export default connect(
  mapStateToProps,
  { getUserDataFromServer }
)(LinkListContainer);
