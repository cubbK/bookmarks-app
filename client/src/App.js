import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Homepage from './pages/Homepage/Homepage'
import AppPage from './pages/AppPage/AppPage'
import GoogleRedirectPage from './pages/GoogleRedirectPage/GoogleRedirectPage'

const App = props =>
        <React.Fragment>
          <Route
            exact
            path="/" 
            component={
              props.googleToken ? AppPage : Homepage
            } 
          />
          <Route
            exact
            path="/googleRedirect/"
            component={GoogleRedirectPage}
          />
        </React.Fragment>
     
export default connect(state =>(
  {
    googleToken: state.googleToken
  }
))(App)
