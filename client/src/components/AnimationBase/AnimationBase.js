import React from 'react'
import { Spring } from 'react-spring'
import styled from 'styled-components'
import { secondaryColor } from 'theme/theme'
import Notebook from './Notebook'

const AnimationBase = props =>
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {styles =>
      <div style={styles}>
        <Notebook />
      </div>}
  </Spring>

export default AnimationBase
