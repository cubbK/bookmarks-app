import produce from "immer";
import * as types from "constants/actionTypes";

export interface ILink {
  _id: string;
  url: string;
  groupName: string;
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

const defaultState: IState = {
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
    }
  });
