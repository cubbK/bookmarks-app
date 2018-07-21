import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';

const AppWrapped = props => 
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <React.Fragment>
          <CssBaseline />
          <App />
        </React.Fragment>
      </Router>
    </PersistGate>
  </Provider>


ReactDOM.render(<AppWrapped />, document.getElementById('root'))
registerServiceWorker()


