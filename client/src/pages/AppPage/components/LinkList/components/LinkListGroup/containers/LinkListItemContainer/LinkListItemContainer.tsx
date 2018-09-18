import * as React from "react";
import LinkListItem from "../../components/LinkListItem/LinkListItem";
import { setLinkFavorite } from "actions/linkActions";
import { connect } from "react-redux";

import { ILink } from "reducers/userDataReducer";
interface IProps {
  link: ILink;
  setLinkFavorite: (linkId: string, toFavorite: boolean) => void;
}

class LinkListItemContainer extends React.Component<IProps> {
  setFavorite = (toFavorite: boolean) => () => {
    this.props.setLinkFavorite(this.props.link._id, toFavorite);
  };

  render() {
    return (
      <LinkListItem link={this.props.link} setFavorite={this.setFavorite} />
    );
  }
}

export default connect(
  null,
  { setLinkFavorite }
)(LinkListItemContainer);
