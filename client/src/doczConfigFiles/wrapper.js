import * as React from "react";
import { muiTheme, styledTheme } from "theme/theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";

const Wrapper = props => (
  <MuiThemeProvider theme={muiTheme}>
    <ThemeProvider theme={styledTheme}>{props.children}</ThemeProvider>
  </MuiThemeProvider>
);

export default Wrapper;
