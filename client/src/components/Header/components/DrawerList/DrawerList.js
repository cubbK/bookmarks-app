import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FaceIcon from '@material-ui/icons/Face'
import LogoutIcon from '@material-ui/icons/ExitToApp'


const DrawerList = props =>
  <List component="nav">
    <ListItem button>
      <ListItemIcon>
        <FaceIcon />
      </ListItemIcon>
      <ListItemText>
        Account
      </ListItemText>
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText>
        Logout
      </ListItemText>
    </ListItem>
  </List>

export default DrawerList