import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import CssBaseline from '@material-ui/core/CssBaseline';

const req = require.context('../components', true, /\.stories\.js$/)

const addCssBaseline = storyFn =>
  <React.Fragment>
    <CssBaseline />
    {storyFn()}
  </React.Fragment >

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);

