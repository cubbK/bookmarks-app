import * as React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { contains } from "ramda";

interface IProps {
  groups: Array<{
    id: string;
    groupName: string;
    links: Array<any>;
  }>;
}

class LinkList extends React.Component<IProps> {
  state = {
    openGroupsId: []
  };

  toggleGroupList = (groupId: string) => () => {
    const isOpen = contains(groupId, this.state.openGroupsId);
    if (isOpen) {
      const openGroupsId = [...this.state.openGroupsId];
      const openGroupsIdWithoutCurrentOne = openGroupsId.filter(
        stateGroupId => stateGroupId !== groupId
      );
      this.setState({
        openGroupsId: openGroupsIdWithoutCurrentOne
      });
    } else {
      const newOpenGroupsId = [...this.state.openGroupsId, groupId];
      this.setState({
        openGroupsId: newOpenGroupsId
      });
    }
  };

  isGroupOpen = groupId => contains(groupId, this.state.openGroupsId);

  mapGroups = () => {
    const mapLink = link => (
      <ListItem key={link._id}>
        <ListItemText primary={link.url} key={link._id} />
      </ListItem>
    );

    const mapGroup = group => (
      <React.Fragment key={group.id}>
        <ListItem button={true} onClick={this.toggleGroupList(group.id)}>
          <ListItemText primary={group.groupName} />
          {this.isGroupOpen(group.id) ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={this.isGroupOpen(group.id)}
          timeout="auto"
          unmountOnExit={true}
        >
          <List component="div" disablePadding={true} dense={true}>
            {group.links.map(mapLink)}
          </List>
        </Collapse>
      </React.Fragment>
    );

    const groups = this.props.groups.map(mapGroup);
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
