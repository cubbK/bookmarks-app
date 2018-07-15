import React from 'react'
import LoginBtn from 'components/LoginBtn/LoginBtn'

const handleSocialLogin = response => console.log(response)
const handleSocialLoginFailure = response => console.log(response)

const GoogleLogin =
  <LoginBtn
    provider='google'
    appId='870438236090-8b8r45h1rkcfe0en949a4pqn35iougjo.apps.googleusercontent.com'
    onLoginSuccess={handleSocialLogin}
    onLoginFailure={handleSocialLoginFailure}
    name='Googleeee'
  />

  export default GoogleLogin