import * as globals from "./globals";

describe("globals", () => {
  it("API_URL ends with a slash /", () => {
    const lastLetter = globals.API_URL[globals.API_URL.length - 1];
    expect(lastLetter).toBe("/");
  });
});
