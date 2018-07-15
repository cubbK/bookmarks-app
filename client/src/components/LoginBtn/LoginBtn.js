// @flow
import React from 'react'
import Button from '@material-ui/core/Button'
import SocialLogin from 'react-social-login'

type Props = {
  color: String,
  name: String,
  //triggerLogin: Function
}

const LoginBtn = (props: Props) =>
  <Button
    variant="contained"
    color={props.color}
    size="large"
    onClick={props.triggerLogin}
  >
    Log In With {props.name}
  </Button>

LoginBtn.defaultProps = {
  color: 'secondary',
  name: 'Google'
}

export default LoginBtn