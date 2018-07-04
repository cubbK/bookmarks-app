import React from 'react'
// A decorator is a way to wrap a story with a common set of component(s).
// Here we add the theme decorator to incoporate the Rebass and our custom theme
import { configure } from '@storybook/react';

const req = require.context('../components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);

