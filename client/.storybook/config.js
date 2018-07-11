import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import theme from '../src/theme/theme'
import { MuiThemeProvider } from '@material-ui/core/styles';

const req = require.context('../src/', true, /\.stories\.js$/)

const addTheme = storyFn => <MuiThemeProvider theme={theme}>{storyFn()}</MuiThemeProvider>
addDecorator(addTheme)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}


configure(loadStories, module);
