import * as React from "react";
import LoginBtn from "components/LoginBtn/LoginBtn";
import withGoogleAuth from "hocs/withGoogleAuth";

const LoginBtnGoogle = withGoogleAuth(LoginBtn);

export default LoginBtnGoogle;
