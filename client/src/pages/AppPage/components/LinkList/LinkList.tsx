import * as React from "react";
import { mapObjIndexed, compose, map, curry } from "ramda";
import List from "@material-ui/core/List";

import LinkListGroup from "./components/LinkListGroup/LinkListGroup";

import { ILinksGrouped } from "selectors/links";

import styled from "styled-components";

interface IProps {
  groups: ILinksGrouped;
}

const ListWithoutPadding = styled(List)`
  && {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

class LinkList extends React.Component<IProps> {
  mapGroups = (): Array<any> => {
    let groups = compose(
      map(([key, arr]) => (
        <LinkListGroup group={arr} groupName={key} key={key} />
      )),
      groups => Object.entries(groups)
    )(this.props.groups);

    return groups;
  };

  render() {
    return (
        <ListWithoutPadding component="nav">{this.mapGroups()}</ListWithoutPadding>
    );
  }
}

export default LinkList;
