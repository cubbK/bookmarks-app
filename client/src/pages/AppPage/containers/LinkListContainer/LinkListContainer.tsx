import * as React from "react";
import { IStoreState } from "reducers";

import { connect } from "react-redux";
import {
  linksGroupedSelector,
  linksGroupedFilteredSelector
} from "selectors/links";
import getFavoriteLinksGrouped from "selectors/getFavoriteLinksGrouped";

import LinearProgress from "@material-ui/core/LinearProgress";
import LoginFailedContainer from "containers/LoginFailedContainer/LoginFailedContainer";

import LinkList from "pages/AppPage/components/LinkList/LinkList";

import { ILinksGrouped } from "selectors/links";
import { IState as IUserData } from "reducers/userDataReducer";

interface IProps {
  userData: IUserData;
  linksGrouped: ILinksGrouped;
  linksGroupedFiltered: any;
  linksFavorite: ILinksGrouped;
}

class LinkListContainer extends React.Component<IProps> {
  render() {
    // console.log(this.props.linksGroupedFiltered)
    if (this.props.userData.loading) {
      return <LinearProgress color="secondary" />;
    } else if (this.props.userData.hasErrored) {
      return (
        <LoginFailedContainer message={this.props.userData.errorMessage} />
      );
    } else {
      return (
        <React.Fragment>
          {this.props.linksFavorite.Favorites.length > 0 ? (
            <LinkList groups={this.props.linksFavorite} />
          ) : null}
          <LinkList groups={this.props.linksGroupedFiltered} />
        </React.Fragment>
      );
    }
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    userData: state.userData,
    linksGrouped: linksGroupedSelector(state),
    linksGroupedFiltered: linksGroupedFilteredSelector(state),
    linksFavorite: getFavoriteLinksGrouped(state)
  };
}

export default connect(mapStateToProps)(LinkListContainer);
