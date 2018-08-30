import { createSelector } from "reselect";
import { IStoreState } from "reducers";
import { groupBy } from "ramda";
import { ILinks } from "reducers/userDataReducer";

export interface LinksByGroupOutput {
  [index: string]: ILinks;
}

const getLinks = (state: IStoreState) => state.userData.links;

const getLinksByGroup = createSelector(
  getLinks,
  (links: ILinks): LinksByGroupOutput => {
    const linksGrouped = groupBy(link => link.groupName, links);
    console.log(linksGrouped);
    return linksGrouped;
  }
);

export default getLinksByGroup;
