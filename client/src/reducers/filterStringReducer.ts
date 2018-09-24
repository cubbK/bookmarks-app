import * as types from "constants/actionTypes";

export type IState = string;

const defaultState: IState = "";

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_FILTER_STRING:
      return action.payload
  }
  return state
}