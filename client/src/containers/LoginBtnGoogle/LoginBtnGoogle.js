// @flow
import React from 'react'
import LoginBtn from 'components/LoginBtn/LoginBtn'
import GoogleLogin from 'containers/GoogleLogin/GoogleLogin'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'ramda'
import { setToken } from 'actions/tokenActions'

import axios from 'axios'
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from 'globals.js'

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
  client_id=${GOOGLE_CLIENT_ID}&
  redirect_uri=${GOOGLE_REDIRECT_URI}
`

const googleUrl = googleUrlWithSpaces.replace(/\s/g, '')

class LoginBtnGoogle extends React.Component<Props> {

  render() {
    return (
      <a
        href={googleUrl}
      >login</a>
    )

  }
}


export default connect(null, { setToken })(LoginBtnGoogle)