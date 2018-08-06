import * as React from 'react'
import { storiesOf} from '@storybook/react'
import AnimationBase from './AnimationBase'

export default storiesOf(`AnimationBase`, module)
  .add(`stateless`, () => <AnimationBase />)