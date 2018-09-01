import * as React from "react";
import LinkListItem from "./components/LinkListItem/LinkListItem";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import styled from "styled-components";

import { ILinks } from "reducers/userDataReducer";

interface IProps {
  group: ILinks;
  groupName: string;
}

interface IState {
  open: boolean;
}

const WrappedListItemText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

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
    return (
      <React.Fragment>
        <ListItem button={true} onClick={this.toggleOpenState}>
          <ListItemText>
            <WrappedListItemText>{groupName}</WrappedListItemText>
          </ListItemText>
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit={true}>
          <List component="ul" disablePadding={true} dense={true}>
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
