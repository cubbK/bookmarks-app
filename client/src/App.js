import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'

import Homepage from './pages/Homepage/Homepage'

const App = props =>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <React.Fragment>
          <CssBaseline />
          <Route exact path="/" component={Homepage} />
        </React.Fragment>
      </Router>
    </PersistGate>
  </Provider>

export default App
