import * as React from "react";
import HeaderContainer from "containers/HeaderContainer/HeaderContainer";
import LinkListContainer from "./containers/LinkListContainer/LinkListContainer";
import AddLinkFieldContainer from "./containers/AddLinkFieldContainer/AddLinkFieldContainer";
import { connect } from "react-redux";
import { getUserFromJWTString } from "actions/authActions";
import { IStoreState } from "reducers";

interface IProps {
  userJWT: string;
  getUserFromJWTString: (JWTString: string) => void;
}

class AppPage extends React.Component<IProps> {
  componentDidMount() {
    this.props.getUserFromJWTString(this.props.userJWT);
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <AddLinkFieldContainer />
        <LinkListContainer />
      </div>
    );
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
)(AppPage);
