import React from 'react'
import { Spring } from 'react-spring'
import styled from 'styled-components'
import { secondaryColor } from 'theme/theme'

const Circle = styled.div`
  border-radius: 50%;
  background: ${props => props.color ? props.color : 'black'}
  width: ${props => props.width ? props.width : '25vw'}
  height: ${props => props.height ? props.height : '25vw'} 
`

const AnimationBase = props =>
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {styles =>
      <div style={styles}>
        <Circle color={secondaryColor} />
      </div>}
  </Spring>

export default AnimationBase
