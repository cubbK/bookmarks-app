import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "App";
import registerServiceWorker from "registerServiceWorker";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "store";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { muiTheme, styledTheme } from "theme/theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";

const AppWrapped = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={styledTheme}>
          <Router>
            <React.Fragment>
              <CssBaseline />
              <App />
            </React.Fragment>
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<AppWrapped />, document.getElementById("root"));
registerServiceWorker();
