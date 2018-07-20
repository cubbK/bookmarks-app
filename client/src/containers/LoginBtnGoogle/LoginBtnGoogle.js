// @flow
import React from 'react'
import LoginBtn from 'components/LoginBtn/LoginBtn'
import { GoogleLogin } from 'react-google-login-component-improved'
import { connect } from 'react-redux'

import { setToken } from 'actions/tokenActions'

type Props = {
  setToken: () => mixed
}

class LoginBtnGoogle extends React.Component<Props> {

  responseGoogle = async googleUser => {
    const id_token: String = googleUser.getAuthResponse().id_token
    const googleId: String = googleUser.getId()
    
    this.props.setToken(id_token)

    const userRequest = await fetch('http://localhost:1337/auth/google', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ accessToken: id_token })
    })
    const user = await user.json()
    
    //anything else you want to do(save to localStorage)...
  }

  render() {
    console.log(this.props)
    return (
      <GoogleLogin
        socialId="870438236090-8b8r45h1rkcfe0en949a4pqn35iougjo.apps.googleusercontent.com"
        scope="profile"
        prompt="select_account"
        fetchBasicProfile={false}
        responseHandler={this.responseGoogle}
      >
        <LoginBtn />
      </GoogleLogin>
    )

  }
}


export default connect(null, { setToken })(LoginBtnGoogle)