import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import store from './store'


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker()


