import produce from "immer";

export interface IState {
  loading: boolean;
  hasErrored: boolean;
  errorMessage: string | null;
  links: Array<string>;
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
        draft.links = action.payload;
        break;
      case "GET_USER_FROM_JWT_STRING_REJECTED":
        draft.loading = false;
        draft.hasErrored = true;
        draft.errorMessage = action.payload.response.data;
        break;
    }
  });
