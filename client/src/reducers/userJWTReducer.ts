export default (state = null, action) => {
  switch (action.type) {
    case "SET_USER_JWT":
      return action.payload;

    default:
      return state;
  }
};
