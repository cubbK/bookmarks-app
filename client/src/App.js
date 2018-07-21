import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Homepage from './pages/Homepage/Homepage'
import AppPage from './pages/AppPage/AppPage'

const App = props =>
        <React.Fragment>
          <Route
            exact
            path="/" 
            component={
              props.googleToken ? AppPage : Homepage
            } 
          />
        </React.Fragment>
     
export default connect(state =>(
  {
    googleToken: state.googleToken
  }
))(App)
