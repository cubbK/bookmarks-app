import React from "react";
import LoginBtn from "components/LoginBtn/LoginBtn";

import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "globals.js";

const googleUrlWithSpaces = `
  https://accounts.google.com/o/oauth2/v2/auth?
  access_type=offline
  &scope=profile&
  prompt=consent&
  response_type=code&
  client_id=${GOOGLE_CLIENT_ID}&
  redirect_uri=${GOOGLE_REDIRECT_URI}
`;

const googleUrl = googleUrlWithSpaces.replace(/\s/g, "");

class LoginBtnGoogle extends React.Component {

  setHref = () => document.location.href = googleUrl

  render() {
    return (
      <LoginBtn name='Google' onClick={this.setHref} />
    );
  }
}

export default LoginBtnGoogle;
