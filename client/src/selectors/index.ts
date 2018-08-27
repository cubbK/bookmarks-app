import { createSelector } from "reselect";
import { IStoreState } from "reducers";

const getLinks = (state: IStoreState) => state.userData.links;

export const getLinksByGroup = createSelector(getLinks, links => {
  console.log("links: ", links);
  return links;
});
