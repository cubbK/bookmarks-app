import React from 'react'
import LoginBtn from 'components/LoginBtn/LoginBtn'
import { GoogleLogin } from 'react-google-login-component-improved'
import styled from 'styled-components'

const responseGoogle = googleUser => {
  var id_token = googleUser.getAuthResponse().id_token;
  var googleId = googleUser.getId();

  console.log({ googleId });
  console.log({ accessToken: id_token });
  //anything else you want to do(save to localStorage)...
}

const LoginBtnGoogle = () =>
  <GoogleLogin
    socialId="870438236090-8b8r45h1rkcfe0en949a4pqn35iougjo.apps.googleusercontent.com"
    scope="profile"
    prompt="select_account"
    fetchBasicProfile={false}
    responseHandler={responseGoogle}
  >
    <LoginBtn />
  </GoogleLogin>

export default LoginBtnGoogle