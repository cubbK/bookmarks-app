import produce from "immer";

export interface IState {
  loading: boolean;
  hasErrored: boolean;
  links: Array<string>;
}

const defaultState: IState = {
  loading: false,
  hasErrored: false,
  links: []
};

export default (state = defaultState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "GET_USER_DATA_FROM_SERVER_PENDING":
        draft.loading = true;
        break;
      case "GET_USER_DATA_FROM_SERVER_FULFILLED":
        draft.loading = false;
        draft.links = action.payload.data.links;
        break;
      case "GET_USER_DATA_FROM_SERVER_REJECTED":
        draft.loading = false;
        draft.hasErrored = true;
        break;
    }
  });
