import * as React from "react";
import { IStoreState } from "reducers";

import { connect } from "react-redux";
import getLinksByGroup from "selectors/getLinksByGroup";
import getFavoriteLinksGrouped from "selectors/getFavoriteLinksGrouped";

import LinearProgress from "@material-ui/core/LinearProgress";
import LoginFailedContainer from "containers/LoginFailedContainer/LoginFailedContainer";

import LinkList from "pages/AppPage/components/LinkList/LinkList";

import { ILinksGrouped } from "selectors/getLinksByGroup";
import { IState as IUserData } from "reducers/userDataReducer";

interface IProps {
  userData: IUserData;
  linksGrouped: ILinksGrouped;
  linksFavorite: ILinksGrouped;
}

class LinkListContainer extends React.Component<IProps> {
  render() {
    if (this.props.userData.loading) {
      return <LinearProgress color="secondary" />;
    } else if (this.props.userData.hasErrored) {
      return (
        <LoginFailedContainer message={this.props.userData.errorMessage} />
      );
    } else {
      return (
        <React.Fragment>
          <LinkList groups={this.props.linksFavorite} />
          <LinkList groups={this.props.linksGrouped} />
        </React.Fragment>
      );
    }
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    userData: state.userData,
    linksGrouped: getLinksByGroup(state),
    linksFavorite: getFavoriteLinksGrouped(state)
  };
}

export default connect(mapStateToProps)(LinkListContainer);
