import userJWTReducer, { defaultState } from "./userJWTReducer";

it("sets JWT string", () => {
  expect(
    userJWTReducer(defaultState, {
      type: "SET_USER_JWT",
      payload: "jwtlongkey"
    })
  ).toBe("jwtlongkey");

  expect(
    userJWTReducer(defaultState, {
      type: "SET_USER_JWT",
      payload: null
    })
  ).toBe(null);
});
