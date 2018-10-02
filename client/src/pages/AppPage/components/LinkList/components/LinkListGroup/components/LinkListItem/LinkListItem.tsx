import * as React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import {
  Link as LinkIcon,
  Title as TitleIcon
} from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";

import Modal from "components/Modal/Modal";

import styled from "styled-components";

import { ILink } from "reducers/userDataReducer";

const TitleLink = styled.a`
  color: inherit;
`;

const FullLink = styled.a`
  color: inherit;
  word-break: break-all;
`;

const AvatarStyled = styled(Avatar)`
  && {
    background-color: ${props => props.theme.mainColor};
  }
`;

interface IWrappedListItemText {
  isOpen: boolean;
}

const WrappedListItemText = styled<IWrappedListItemText, "div">("div")`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props => (props.isOpen ? props.theme.secondaryColor : "inherit")};
  font-size: 0.9rem;
`;

const ButtonsContainer = styled(ListItem)`
  && {
    display: grid;
    grid-template-columns: [left] 1fr [right] 1fr;
    column-gap: 5%;
  }
`;

const StarIconStyled = styled.div`
  && {
    cursor: pointer;
    margin-right: 19px;
    background-color: ${props => props.theme.mainColor};
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
`;

const ListItemTextZoomed = styled(ListItemText)`
&& {
  font-size: 0.9rem;
}
`;

interface IProps {
  link: ILink;
  setFavorite: (toFavorite: boolean) => () => void;
  open: boolean;
  toggleOpenState: () => void;
  deleteModalOpen: boolean;
  toggleDeleteModalOpen: () => void;
  deleteLink: () => void;
}

class LinkListItem extends React.Component<IProps> {
  renderStar = () => {
    if (this.props.link.isFavorite) {
      return <StarIconStyled onClick={this.props.toggleOpenState} />;
    } else {
      return null;
    }
  };

  render() {
    const link = this.props.link;
    return (
      <React.Fragment>
        <ListItem
          key={link._id}
          onClick={this.props.toggleOpenState}
          button={true}
        >
          <ListItemText>
            <WrappedListItemText isOpen={this.props.open}>
              <TitleLink href={link.url} target="_blank">
                {link.info.title || link.url}
              </TitleLink>
            </WrappedListItemText>
          </ListItemText>
          <ListItemSecondaryAction>
            {this.renderStar()}
          </ListItemSecondaryAction>
        </ListItem>
        <Collapse in={this.props.open} timeout="auto" unmountOnExit={true}>
          <List dense={true}>
            <ListItem>
              <AvatarStyled>
                <TitleIcon />
              </AvatarStyled>
              <ListItemTextZoomed primary="Full Title" secondary={link.info.title} />
            </ListItem>
            <li>
              <Divider inset={true} />
            </li>
            <ListItem>
              <AvatarStyled>
                <LinkIcon />
              </AvatarStyled>
              <ListItemTextZoomed
                primary="Url"
                secondary={
                  <FullLink href={link.url} target="_blank">
                    {link.url}
                  </FullLink>
                }
              />
            </ListItem>
            <ButtonsContainer>
              <Modal
                title="Do You Really Want to Delete This Link?"
                isOpen={this.props.deleteModalOpen}
                okText="Yes"
                cancelText="No"
                description="This action is irreversible."
                onSuccess={this.props.deleteLink}
                onClose={this.props.toggleDeleteModalOpen}
              />
              <Button
                variant="outlined"
                color="secondary"
                onClick={this.props.toggleDeleteModalOpen}
              >
                Delete
              </Button>
              {this.props.link.isFavorite ? (
                <Button
                  variant="outlined"
                  color={"primary"}
                  onClick={this.props.setFavorite(false)}
                >
                  Unstar
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  color={"primary"}
                  onClick={this.props.setFavorite(true)}
                >
                  Star
                </Button>
              )}
            </ButtonsContainer>
          </List>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default LinkListItem;
