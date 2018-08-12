import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { muiTheme, styledTheme } from "../src/theme/theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";

const req = require.context("../src/", true, /\.stories\.js$/);

//

const addTheme = storyFn => (
  <MuiThemeProvider theme={muiTheme}>
    <ThemeProvider theme={styledTheme}>{storyFn()}</ThemeProvider>
  </MuiThemeProvider>
);

addDecorator(addTheme);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
