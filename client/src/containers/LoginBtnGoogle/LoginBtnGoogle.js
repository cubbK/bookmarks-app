// @flow
import React from 'react'
import LoginBtn from 'components/LoginBtn/LoginBtn'
import { GoogleLogin } from 'react-google-login'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'ramda'
import { setToken } from 'actions/tokenActions'

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
  }

  onFailure = err => console.log(err)

  renderBtn = props => <LoginBtn onClick={ props.onClick }/>

  render() {
    console.log(this.props)
    return (
      <GoogleLogin
        clientId="870438236090-8b8r45h1rkcfe0en949a4pqn35iougjo.apps.googleusercontent.com"
        scope="profile"
        prompt= "consent"
        fetchBasicProfile={false}
        accessType="offline"
        responseType="code"
        onSuccess={this.onSuccess}
        onFailure={this.onFailure}
        render={this.renderBtn}
      >
      </GoogleLogin>
    )

  }
}


export default connect(null, { setToken })(LoginBtnGoogle)