import * as React from "react";
import { mapObjIndexed, compose, map, curry } from "ramda";
import List from "@material-ui/core/List";

import LinkListGroup from "./components/LinkListGroup/LinkListGroup";

import { ILinksGrouped } from "selectors/getLinksByGroup";

interface IProps {
  groups: any;
}

class LinkList extends React.Component<IProps> {
  state = {
    openGroupsId: []
  };

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
    return (
      <div>
        <List component="nav">{this.mapGroups()}</List>
        123
      </div>
    );
  }
}

export default LinkList;
