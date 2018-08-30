import * as React from "react";
import LinkListItem from "./components/LinkListItem/LinkListItem";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import { ILinks } from "reducers/userDataReducer";

interface IProps {
  group: any;
  groupName: string;
}

interface IState {
  open: boolean;
}

class LinkListGroup extends React.Component<IProps, IState> {
  state = {
    open: false
  };

  toggleOpenState = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const group = this.props.group;
    const groupName = this.props.groupName;

    console.log("LinkListGroup", group, groupName);
    return (
      <React.Fragment>
        <ListItem button={true} onClick={this.toggleOpenState}>
          <ListItemText primary={groupName} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit={true}>
          <List component="div" disablePadding={true} dense={true}>
            {group.map(link => (
              <LinkListItem link={link} key={link._id} />
            ))}
          </List>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default LinkListGroup;
