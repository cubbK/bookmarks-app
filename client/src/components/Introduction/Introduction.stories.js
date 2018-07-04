import React from 'react'
import { storiesOf} from '@storybook/react'
import Introduction from './Introduction'

export default storiesOf(`Introduction`, module)
  .add(`stateless`, () => <Introduction />)