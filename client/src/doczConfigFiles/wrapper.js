import * as React from "react";
import { muiTheme, styledTheme } from "theme/theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "store";

const Wrapper = props => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={styledTheme}>{props.children}</ThemeProvider>
      </MuiThemeProvider>
    </PersistGate>
  </Provider>
);

export default Wrapper;
