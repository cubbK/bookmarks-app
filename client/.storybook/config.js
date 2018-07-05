import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import theme from '../src/theme/theme'
import { MuiThemeProvider } from '@material-ui/core/styles';

const addTheme = storyFn => <MuiThemeProvider theme={theme}>{storyFn()}</MuiThemeProvider>
addDecorator(addTheme)

function loadStories() {
  require('../src/stories');
}


configure(loadStories, module);
