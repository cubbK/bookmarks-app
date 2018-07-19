import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Homepage from './pages/Homepage/Homepage'

const App = props =>
  <Router>
    <React.Fragment>
      <CssBaseline />
      <Route exact path="/" component={Homepage} />
    </React.Fragment>
  </Router>

export default App
