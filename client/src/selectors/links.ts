import { createSelector } from "reselect";
import { IStoreState } from "reducers";
import { groupBy, filter, curry } from "ramda";
import { ILinks, ILink } from "reducers/userDataReducer";

export interface ILinksGrouped {
  [index: string]: ILinks;
}

const linksSelector = (state: IStoreState) => state.userData.links;
const filterStringSelector = (state: IStoreState) => state.filterString;

const groupLinksByGroupName = (links: ILinks): ILinksGrouped =>
  groupBy(link => link.groupName, links);

export const linksGroupedSelector = createSelector(
  linksSelector,
  groupLinksByGroupName
);

const isStringInLink = (link: ILink, filterString: string) => {
  const inTitle = isStringInLinkTitle(link.info.title, filterString)
  return inTitle;
};

const isStringInLinkTitle = (title: string | undefined, filterString: string) => {
  if(!title) {
    return false
  }
  const regex = new RegExp(filterString, "gi");
  return regex.test(title)
};

export const linksGroupedFilteredSelector = createSelector(
  [linksSelector, filterStringSelector],
  (links, filterString) => {
    const filteredLinks = links.filter(link => isStringInLink(link, filterString))
    const groupedFilteredLinks = groupLinksByGroupName(filteredLinks);
    console.log(groupedFilteredLinks);
    return groupedFilteredLinks;
  }
);
