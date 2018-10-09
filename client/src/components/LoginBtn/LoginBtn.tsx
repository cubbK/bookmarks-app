import * as React from "react";
import styled from "styled-components"
const googleBtnImage = require("./img/google-button.png");

const LinkImage = styled.img`
  cursor: pointer;
  max-width: 230px;
`

interface IProps {
  onClick?: () => void;
}

const LoginBtn: React.SFC<IProps> = props => (
  <LinkImage src={googleBtnImage} alt="Log In With Google" onClick={props.onClick}/>
);

export default LoginBtn;
