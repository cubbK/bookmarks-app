import { createSelector } from "reselect";
import { IStoreState } from "reducers";
import { filter } from "ramda";
import { ILinks } from "reducers/userDataReducer";

export interface ILinksGrouped {
  [index: string]: ILinks;
}

const getLinks = (state: IStoreState) => state.userData.links;

const getFavoriteLinksGrouped = createSelector(
  getLinks,
  (links: ILinks): ILinksGrouped => {
    const favoriteLinks = filter((link => link.isFavorite), links)
    return {
      Favorites: favoriteLinks
    }
  }
);

export default getFavoriteLinksGrouped;
