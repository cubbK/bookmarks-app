import { createMuiTheme } from "@material-ui/core/styles";

export const mainColor = "#121316";
export const secondaryColor = "#f22b29";
export const errorColor = "#545454";
export const whiteColor = "#eff1ed";
export const greyColor = "#212225";

export const muiTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: mainColor
    },
    secondary: {
      main: secondaryColor
    },
    error: {
      main: errorColor
    },
    background: {
      default: mainColor
    }
  },
  typography: {
    display1: {
      color: whiteColor
    },
    display2: {
      color: whiteColor
    },
    display3: {
      color: whiteColor
    },
    display4: {
      color: whiteColor
    }
  }
});

export const styledTheme = {
  mainColor,
  secondaryColor,
  errorColor,
  whiteColor,
  greyColor
};
