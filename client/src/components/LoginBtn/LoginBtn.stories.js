import React from 'react'
import { storiesOf} from '@storybook/react'
import LoginBtn from './LoginBtn'

export default storiesOf(`LoginBtn`, module)
  .add(`stateless`, () => <LoginBtn />)
  .add(`with different name and color`, () => <LoginBtn color="primary" name="Github" />)
 