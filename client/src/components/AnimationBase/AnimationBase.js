import React from 'react'
import { Spring } from 'react-spring'
import styled from 'styled-components'
import { secondaryColor } from 'theme/theme'
import Notebook from './components/Notebook/Notebook'

const Wrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  width: 100%;
  max-height: 50vh;
  min-height: 50vh
`

const AnimationBase = props =>
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {styles =>
      <div style={styles}>
        <Wrapper>
          <Notebook />
        </Wrapper>
      </div>}
  </Spring>

export default AnimationBase
