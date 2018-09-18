import produce from "immer";
import * as types from "constants/actionTypes";
import { linkSync } from "fs";

export interface ILink {
  _id: string;
  url: string;
  groupName: string;
  isFavorite: boolean;
  info: ILinkInfo;
}

export interface ILinks extends Array<ILink> {}

export interface ILinkInfo {
  _id: string;
  title?: string;
  iconHref?: string;
  err?: string;
}

export interface IState {
  loading: boolean;
  hasErrored: boolean;
  errorMessage: string | null;
  links: ILinks;
}

export const defaultState: IState = {
  loading: false,
  hasErrored: false,
  errorMessage: null,
  links: []
};

export default (state = defaultState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.GET_USER_FROM_JWT_STRING + "_PENDING":
        draft.loading = true;
        break;
      case types.GET_USER_FROM_JWT_STRING + "_FULFILLED":
        draft.loading = false;
        draft.links = action.payload.data.links;
        break;
      case types.GET_USER_FROM_JWT_STRING + "_REJECTED":
        draft.loading = false;
        draft.hasErrored = true;
        draft.errorMessage = action.payload.response.data;
        break;
      case types.ADD_LINK + "_FULFILLED":
        draft.links.push(action.payload.data);
        break;

      case types.SET_LINK_FAVORITE + "_PENDING":
        break;
      case types.SET_LINK_FAVORITE + "_FULFILLED":

        draft.links = draft.links.map(link => {
          if (link._id === action.payload.data.linkId) {
            link.isFavorite = action.payload.data.toFavorite;
          }
          return link;
        });
    }
  });
