import * as React from "react";
import List from "@material-ui/core/List";

import LinkListGroup from "./components/LinkListGroup/LinkListGroup";

interface IProps {
  groups: Array<{
    id: string;
    groupName: string;
    links: Array<{ _id: string; url: string }>;
  }>;
}

class LinkList extends React.Component<IProps> {
  state = {
    openGroupsId: []
  };

  mapGroups = () => {
    const groups = this.props.groups.map(group => (
      <LinkListGroup group={group} key={group.groupName} />
    ));
    return groups;
  };

  render() {
    return (
      <div>
        <List component="nav">{this.mapGroups()}</List>
      </div>
    );
  }
}

export default LinkList;
