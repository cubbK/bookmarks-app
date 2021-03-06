import * as React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import Avatar from "@material-ui/core/Avatar";

import { Link as LinkIcon, Title as TitleIcon } from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";

import styled from "styled-components";

import { ILink } from "reducers/userDataReducer";
interface IProps {
  link: ILink;
}

interface IState {
  open: boolean;
}

const TitleLink = styled.a`
  color: inherit;
`;

const MainColorLink = styled.a`
  color: inherit;
`;

const AvatarStyled = styled(Avatar)`
  && {
    background-color: ${props => props.theme.mainColor};
  }
`;

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
        <ListItem key={link._id} onClick={this.toggleOpenState} button={true}>
          <ListItemText>
            <TitleLink href={link.url} target="_blank">
              {link.info.title || link.url}
            </TitleLink>
          </ListItemText>
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit={true}>
          <List dense={true}>
            <ListItem>
              <AvatarStyled>
                <TitleIcon />
              </AvatarStyled>
              <ListItemText primary="Full Title" secondary={link.info.title} />
            </ListItem>
            <li>
              <Divider inset={true} />
            </li>
            <ListItem>
              <AvatarStyled>
                <LinkIcon />
              </AvatarStyled>
              <ListItemText
                primary="Url"
                secondary={
                  <MainColorLink href={link.url} target="_blank">
                    {link.url}
                  </MainColorLink>
                }
              />
            </ListItem>
          </List>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default LinkListItem;
