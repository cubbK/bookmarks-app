import * as React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import { ILink } from "reducers/userDataReducer";
interface IProps {
  link: ILink;
}

interface IState {
  open: boolean;
}

class LinkListItem extends React.Component<IProps, IState> {
  state = {
    open: false
  };

  toggleOpenState = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const link = this.props.link;
    return (
      <React.Fragment>
        <ListItem key={link._id} onClick={this.toggleOpenState}>
          <ListItemText primary={link.info.title || link.url} />
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit={true}>
          <div>{link.url}</div>
          <div>{link.info.iconHref}</div>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default LinkListItem;
