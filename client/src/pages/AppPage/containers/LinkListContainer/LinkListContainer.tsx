import * as React from "react";
import { IStoreState } from "reducers";

import { connect } from "react-redux";
import getLinksByGroup from "selectors/getLinksByGroup";

import LinearProgress from "@material-ui/core/LinearProgress";
import LoginFailedContainer from "containers/LoginFailedContainer/LoginFailedContainer";

import LinkList from "pages/AppPage/components/LinkList/LinkList";

import { ILinksGrouped } from "selectors/getLinksByGroup";
import { IState as IUserData } from "reducers/userDataReducer";

interface IProps {
  userData: IUserData;
  linksGrouped: ILinksGrouped;
}

class LinkListContainer extends React.Component<IProps> {
  mapLinks = () => {
    return this.props.userData.links.map(link => (
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
      return <LinkList groups={this.props.linksGrouped} />;
    }
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    userData: state.userData,
    linksGrouped: getLinksByGroup(state)
  };
}

export default connect(mapStateToProps)(LinkListContainer);
