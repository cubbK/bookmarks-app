// @flow
import * as React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import FaceIcon from "@material-ui/icons/Face";
import LogoutIcon from "@material-ui/icons/ExitToApp";

interface IProps {
  onLogoutClick: () => void;
  onProfileClick: () => void;
}

const DrawerList = (props: IProps) => (
  <List component="nav">
    <ListItem button={true} onClick={props.onProfileClick}>
      <ListItemIcon>
        <FaceIcon />
      </ListItemIcon>
      <ListItemText>Account</ListItemText>
    </ListItem>
    <Divider />
    <ListItem button={true} onClick={props.onLogoutClick}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText>Logout</ListItemText>
    </ListItem>
  </List>
);

export default DrawerList;
