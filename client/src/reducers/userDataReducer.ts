import produce from "immer";

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
      case "GET_USER_FROM_JWT_STRING_PENDING":
        draft.loading = true;
        break;
      case "GET_USER_FROM_JWT_STRING_FULFILLED":
        draft.loading = false;
        draft.links = action.payload.data.links;
        break;
      case "GET_USER_FROM_JWT_STRING_REJECTED":
        draft.loading = false;
        draft.hasErrored = true;
        draft.errorMessage = action.payload.response.data;
        break;
      case "ADD_LINK_FULFILLED":
        draft.links.push(action.payload.data);
    }
  });
