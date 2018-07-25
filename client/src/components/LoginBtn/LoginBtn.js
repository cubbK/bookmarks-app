// @flow
import React from 'react'
import Button from '@material-ui/core/Button'

type Props = {
  color: string,
  name: string,
}

const LoginBtn = (props: Props) =>
  <Button
    variant="contained"
    color={props.color}
    size="large"
    { ...props }
  >
    Log In With {props.name}
  </Button>

LoginBtn.defaultProps = {
  color: 'secondary',
  name: 'Google'
}

export default LoginBtn