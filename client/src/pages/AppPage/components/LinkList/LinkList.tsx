import * as React from "react";
import { mapObjIndexed, compose, map, curry } from "ramda";
import List from "@material-ui/core/List";

import LinkListGroup from "./components/LinkListGroup/LinkListGroup";

import { ILinksGrouped } from "selectors/getLinksByGroup";

interface IProps {
  groups: ILinksGrouped;
}

class LinkList extends React.Component<IProps> {
  mapGroups = (): Array<any> => {
    let groups = compose(
      map(([key, arr]) => (
        <LinkListGroup group={arr} groupName={key} key={key} />
      )),
      groups => Object.entries(groups)
    )(this.props.groups);

    return groups;
  };

  render() {
    console.log(this.props.groups);
    return (
      <div>
        <List component="nav">{this.mapGroups()}</List>
      </div>
    );
  }
}

export default LinkList;
