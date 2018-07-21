// @flow
import React from 'react'
import LoginBtn from 'components/LoginBtn/LoginBtn'
import { GoogleLogin } from 'react-google-login-component-improved'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'ramda'
import { setToken } from 'actions/tokenActions'

type Props = {
  setToken: (string) => mixed,
  history: any
}

class LoginBtnGoogle extends React.Component<Props> {

  responseGoogle = async googleUser => {
    const id_token: string = googleUser.getAuthResponse().id_token
    this.props.setToken(id_token)
    this.props.history.push('/hey')

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


export default compose(
  connect(null, { setToken }),
  withRouter
)(LoginBtnGoogle)