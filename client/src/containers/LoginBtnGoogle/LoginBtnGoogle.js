// @flow
import React from 'react'
import LoginBtn from 'components/LoginBtn/LoginBtn'
import GoogleLogin from 'containers/GoogleLogin/GoogleLogin'
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

const googleUrlWithSpaces = `
  https://accounts.google.com/o/oauth2/v2/auth?
  access_type=offline
  &scope=profile&
  prompt=consent&
  response_type=code&
  client_id=${CLIENT_ID}&
  redirect_uri=http://localhost:3000/
`

const googleUrl = googleUrlWithSpaces.replace(/\s/g, '')

console.log(googleUrl)

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
      <a
        href={googleUrl}
      >login</a>
    )

  }
}


export default connect(null, { setToken })(LoginBtnGoogle)