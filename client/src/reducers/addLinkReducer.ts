import produce from "immer";

export interface IState {
  pending: boolean;
  errored: boolean;
  errorMsg: string | null;
  fulfilled: boolean;
}

const defaultState: IState = {
  pending: false,
  errored: false,
  errorMsg: null,
  fulfilled: false
};

export default (state = defaultState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "ADD_LINK_PENDING":
        draft.pending = true;
        return;
      case "ADD_LINK_FULFILLED":
        draft.pending = false;
        draft.fulfilled = true;
        return;
      case "ADD_LINK_REJECTED":
        draft.pending = false;
        draft.errored = true;
        draft.errorMsg = action.payload.body;
        return;
      case "RESET_ADD_LINK_STATE":
        return defaultState;
    }
    return;
  });
