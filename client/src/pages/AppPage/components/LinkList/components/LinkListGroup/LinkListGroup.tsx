import * as React from "react";
import LinkListItemContainer from "./containers/LinkListItemContainer/LinkListItemContainer";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";

import TitleLeftIndicator from "./components/TitleLeftIndicator/TitleLeftIndicator";

import styled from "styled-components";

import { ILinks } from "reducers/userDataReducer";

interface IProps {
  group: ILinks;
  groupName: string;
}

interface IState {
  open: boolean;
}

interface IWrappedListItemText {
  isOpen: boolean;
}

const WrappedListItemText = styled<IWrappedListItemText, "div">("div")`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  color: ${props => (props.isOpen ? props.theme.secondaryColor : "inherit")};
`;

const LinksList = styled(List)`
  border-left: 2px solid ${props => props.theme.mainColor};
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
          <TitleLeftIndicator isOpen={this.state.open} />
          <ListItemText>
            <WrappedListItemText isOpen={this.state.open}>
              {groupName}
            </WrappedListItemText>
          </ListItemText>
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Divider />
        <Collapse in={this.state.open} timeout="auto" unmountOnExit={true}>
          <LinksList component="ul" disablePadding={true} dense={true}>
            {group.map(link => (
              <LinkListItemContainer link={link} key={link._id} />
            ))}
          </LinksList>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default LinkListGroup;
