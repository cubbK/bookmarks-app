import * as React from 'react'
import { storiesOf} from '@storybook/react'
import Header from './Header'

export default storiesOf(`Header`, module)
  .add(`default`, () => <Header />)