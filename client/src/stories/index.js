import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Provider } from "rebass";



// A decorator is a way to wrap a story with a common set of component(s).
// Here we add the theme decorator to incoporate the Rebass and our custom theme
const ThemeDecorator = storyFn => <Provider>{storyFn()}</Provider>;
addDecorator(ThemeDecorator);

function loadStories() {
  require('./Introduction.story');
  // You can require as many stories as you need.
}

configure(loadStories, module);

