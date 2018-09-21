import * as React from "react";
import LinkListItem from "../../components/LinkListItem/LinkListItem";
import { setLinkFavorite } from "actions/linkActions";
import { connect } from "react-redux";
import { IStoreState } from "reducers";

import { ILink } from "reducers/userDataReducer";
interface IProps {
  link: ILink;
  userJWT: string;
  setLinkFavorite: (
    linkId: string,
    toFavorite: boolean,
    userJWT: string
  ) => void;
}

interface IState {
  open: boolean;
  deleteModalOpen: boolean;
}

class LinkListItemContainer extends React.Component<IProps, IState> {
  state = {
    open: false,
    deleteModalOpen: false
  };

  setFavorite = (toFavorite: boolean) => () => {
    console.log(this.props.link);
    this.props.setLinkFavorite(
      this.props.link._id,
      toFavorite,
      this.props.userJWT
    );
  };

  toggleOpenState = () => {
    this.setState({
      open: !this.state.open
    });
  };

  toggleDeleteModalOpenState = () => {
    this.setState({
      deleteModalOpen: !this.state.deleteModalOpen
    });
  };

  deleteLink = () => {
    this.toggleDeleteModalOpenState()
    console.log("delete link")
  }

  render() {
    return (
      <LinkListItem
        link={this.props.link}
        setFavorite={this.setFavorite}
        toggleOpenState={this.toggleOpenState}
        open={this.state.open}
        deleteModalOpen={this.state.deleteModalOpen}
        toggleDeleteModalOpen={this.toggleDeleteModalOpenState}
        deleteLink={this.deleteLink}
      />
    );
  }
}

export default connect(
  (state: IStoreState) => ({
    userJWT: state.userJWT
  }),
  { setLinkFavorite }
)(LinkListItemContainer);
