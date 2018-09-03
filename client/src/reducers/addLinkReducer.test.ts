import addLinkReducer, { defaultState } from "./addLinkReducer";
import * as types from "constants/actionTypes";

const pendingAction = {
  type: types.ADD_LINK + "_PENDING"
};

const fulfilledAction = {
  type: types.ADD_LINK + "_FULFILLED",
  payload: {
    body: "data"
  }
};

const rejectedAction = {
  type: types.ADD_LINK + "_REJECTED",
  payload: {
    body: "error msg"
  }
};

const resetAction = {
  type: types.RESET_ADD_LINK_STATE
};

const expectedPendingState = {
  pending: true,
  errored: false,
  errorMsg: null,
  fulfilled: false
};

const expectedFulfilledState = {
  pending: false,
  errored: false,
  errorMsg: null,
  fulfilled: true
};

const expectedRejectedState = {
  pending: false,
  errored: true,
  errorMsg: "error msg",
  fulfilled: false
};

describe("addLinkReducer", () => {
  it("returns right state on pending", () => {
    const returnedState = addLinkReducer(defaultState, pendingAction);

    expect(returnedState).toEqual(expectedPendingState);
  });

  it("returns right state on fulfilled", () => {
    const pendingState = addLinkReducer(defaultState, pendingAction);
    const fulfilledState = addLinkReducer(pendingState, fulfilledAction);

    expect(fulfilledState).toEqual(expectedFulfilledState);
  });

  it("returns right state on rejected", () => {
    const pendingState = addLinkReducer(defaultState, pendingAction);
    const rejectedState = addLinkReducer(pendingState, rejectedAction);

    expect(rejectedState).toEqual(expectedRejectedState);
  });

  it("resets state on action", () => {
    const arbitraryState = {
      pending: true,
      errored: true,
      errorMsg: "hey yo",
      fulfilled: true
    };
    const returnedState = addLinkReducer(arbitraryState, resetAction);

    expect(returnedState).toEqual(defaultState);
  });
});
