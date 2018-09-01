import produce from "immer";
import * as types from "constants/actionTypes";

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
      case types.ADD_LINK + "_PENDING":
        draft.pending = true;
        return;
      case types.ADD_LINK + "_FULFILLED":
        draft.pending = false;
        draft.fulfilled = true;
        return;
      case types.ADD_LINK + "_REJECTED":
        draft.pending = false;
        draft.errored = true;
        draft.errorMsg = action.payload.body;
        return;
      case types.RESET_ADD_LINK_STATE:
        return defaultState;
    }
    return;
  });
