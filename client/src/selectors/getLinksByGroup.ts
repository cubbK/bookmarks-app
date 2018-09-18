import { createSelector } from "reselect";
import { IStoreState } from "reducers";
import { groupBy } from "ramda";
import { ILinks } from "reducers/userDataReducer";

export interface ILinksGrouped {
  [index: string]: ILinks;
}

const getLinks = (state: IStoreState) => state.userData.links;

const getLinksByGroup = createSelector(
  getLinks,
  (links: ILinks): ILinksGrouped => {
    const linksGrouped = groupBy(link => link.groupName, links);
    return linksGrouped;
  }
);

export default getLinksByGroup;
