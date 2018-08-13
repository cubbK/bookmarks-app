import * as React from "react";
import { IStoreState } from "reducers";

import { connect } from "react-redux";
import { getUserDataFromServer } from "actions/tokenActions";
import userDataReducer, {
  IState as UserDataInterface
} from "reducers/userDataReducer";

import LinearProgress from "@material-ui/core/LinearProgress";
import LoginFailedContainer from "containers/LoginFailedContainer/LoginFailedContainer";

interface IProps {
  googleToken: string;
  userId: string;
  userData: UserDataInterface;
  getUserDataFromServer: (token: string, userId: string) => void;
}

class LinkListContainer extends React.Component<IProps> {
  componentDidMount() {
    console.log(this.props.googleToken);
    this.props.getUserDataFromServer(this.props.googleToken, this.props.userId);
  }

  mapLinks = () => {
    return this.props.userData.links.map((link, i) => (
      <div key={i}>{link}</div>
    ));
  };

  render() {
    if (this.props.userData.loading) {
      return <LinearProgress color="secondary" />;
    } else if (this.props.userData.hasErrored) {
      return <LoginFailedContainer />;
    } else {
      return (
        <div>
          Links
          {this.mapLinks()}
        </div>
      );
    }
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
