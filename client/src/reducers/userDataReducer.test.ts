import userDataReducer, { defaultState } from "./userDataReducer";
import * as types from "constants/actionTypes";

const pendingAction = {
  type: types.GET_USER_FROM_JWT_STRING + "_PENDING"
};

const fulfilledAction = {
  type: types.GET_USER_FROM_JWT_STRING + "_FULFILLED",
  payload: {
    data: {
      links: ["link1", "link2"]
    }
  }
};

const rejectedAction = {
  type: types.GET_USER_FROM_JWT_STRING + "_REJECTED",
  payload: {
    response: {
      data: "error msg"
    }
  }
};

const expectedPendingState = {
  loading: true,
  hasErrored: false,
  errorMessage: null,
  links: []
};

const expectedFulfilledState = {
  loading: false,
  hasErrored: false,
  errorMessage: null,
  links: ["link1", "link2"]
};

const expectedRejectedState = {
  loading: false,
  hasErrored: true,
  errorMessage: "error msg",
  links: []
};

describe("userDataReducer", () => {
  it("returns right state on pending", () => {
    const returnedState = userDataReducer(defaultState, pendingAction);

    expect(returnedState).toEqual(expectedPendingState);
  });

  it("returns right state on fulfilled", () => {
    const pendingState = userDataReducer(defaultState, pendingAction);
    const fulfilledState = userDataReducer(pendingState, fulfilledAction);

    expect(fulfilledState).toEqual(expectedFulfilledState);
  });

  it("returns right state on rejected", () => {
    const pendingState = userDataReducer(defaultState, pendingAction);
    const rejectedState = userDataReducer(pendingState, rejectedAction);

    expect(rejectedState).toEqual(expectedRejectedState);
  });
});
