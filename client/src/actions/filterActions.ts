import * as types from "constants/actionTypes";

export function setFilterString(filterString: string) {
  return {
    type: types.SET_FILTER_STRING,
    payload: filterString
  };
}
