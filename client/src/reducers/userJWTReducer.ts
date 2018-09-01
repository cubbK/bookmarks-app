export const defaultState = null;

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER_JWT":
      return action.payload;

    default:
      return state;
  }
};
