import * as React from "react";
import LinkListItem from "../../components/LinkListItem/LinkListItem";

import { ILink } from "reducers/userDataReducer";
interface IProps {
  link: ILink;
}

class LinkListItemContainer extends React.Component<IProps> {

  setFavorite = (toFavorite: boolean) => () => {
    console.log("set Favorite: ", toFavorite)
  }

  render() {
    return <LinkListItem link={this.props.link} setFavorite={this.setFavorite}/>;
  }
}

export default LinkListItemContainer;
