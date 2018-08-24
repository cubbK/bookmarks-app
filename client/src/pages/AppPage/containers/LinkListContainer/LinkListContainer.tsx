import * as React from "react";
import { IStoreState } from "reducers";

import { connect } from "react-redux";
import { getUserFromJWTString } from "actions/authActions";
import userDataReducer, {
  IState as UserDataInterface
} from "reducers/userDataReducer";

import LinearProgress from "@material-ui/core/LinearProgress";
import LoginFailedContainer from "containers/LoginFailedContainer/LoginFailedContainer";

interface IProps {
  userJWT: string;
  userData: UserDataInterface;
  getUserFromJWTString: (JWTString: string) => void;
}

class LinkListContainer extends React.Component<IProps> {
  componentDidMount() {
    this.props.getUserFromJWTString(this.props.userJWT);
  }

  mapLinks = () => {
    return this.props.userData.links.map((link, i) => (
      <div key={link._id}>{link.url}</div>
    ));
  };

  render() {
    if (this.props.userData.loading) {
      return <LinearProgress color="secondary" />;
    } else if (this.props.userData.hasErrored) {
      return (
        <LoginFailedContainer message={this.props.userData.errorMessage} />
      );
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
    userJWT: state.userJWT,
    userData: state.userData
  };
}

export default connect(
  mapStateToProps,
  { getUserFromJWTString }
)(LinkListContainer);
