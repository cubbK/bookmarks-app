// @flow
import React from 'react'
import LoginBtn from 'components/LoginBtn/LoginBtn'
import { GoogleLogin } from 'react-google-login'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'ramda'
import { setToken } from 'actions/tokenActions'

import axios from 'axios'
import { apiUrl, CLIENT_ID } from 'globals.js'

type Props = {
  setToken: (string) => mixed,
  history: any
}

class LoginBtnGoogle extends React.Component<Props> {

  onSuccess = async ({ code }) => {
    // const id_token: string = googleUser.getAuthResponse().id_token
    // console.log(googleUser.getAuthResponse())
    // this.props.setToken(id_token)
    console.log(code)
    try {
      const result = await axios.get(`${apiUrl}googleUser/`, {
        headers: {
          code: code
        }
      })
      console.log(result)
    } catch (err) {
      console.log(err.response)
    }
  }

  onFailure = err => console.log(err)

  renderBtn = props => <LoginBtn onClick={props.onClick} />

  render() {
    return (
      <GoogleLogin
        clientId={CLIENT_ID}
        scope="profile"
        responseType="code"
        onSuccess={this.onSuccess}
        onFailure={this.onFailure}
        render={this.renderBtn}

        uxMode="redirect"
        redirectUri={`${apiUrl}googleUser/redirect`}
      >
      </GoogleLogin>
    )

  }
}


export default connect(null, { setToken })(LoginBtnGoogle)