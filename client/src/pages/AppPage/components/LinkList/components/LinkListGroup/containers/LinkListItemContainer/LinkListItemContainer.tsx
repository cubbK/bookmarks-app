import * as React from "react";
import LinkListItem from "../../components/LinkListItem/LinkListItem";
import { setLinkFavorite } from "actions/linkActions";
import { connect } from "react-redux";
import { IStoreState as IStoreState } from 'reducers'

import { ILink } from "reducers/userDataReducer";
interface IProps {
  link: ILink;
  userJWT: string;
  setLinkFavorite: (linkId: string, toFavorite: boolean, userJWT: string) => void;
}

class LinkListItemContainer extends React.Component<IProps> {
  setFavorite = (toFavorite: boolean) => () => {
    console.log(this.props.link)
    this.props.setLinkFavorite(this.props.link._id, toFavorite, this.props.userJWT);
  };

  render() {
    return (
      <LinkListItem link={this.props.link} setFavorite={this.setFavorite} />
    );
  }
}

export default connect(
  (state: IStoreState) => ({
    userJWT: state.userJWT
  }),
  { setLinkFavorite }
)(LinkListItemContainer);
