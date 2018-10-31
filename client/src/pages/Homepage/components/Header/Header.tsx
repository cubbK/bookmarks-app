import * as React from "react";
import styled from "styled-components";
import withGoogleAuth from "hocs/withGoogleAuth"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  font-family: "Roboto";
  color: ${props => props.theme.whiteColor};
`;

const SignIn = styled.a`
  font-size: 12px;
  font-family: "Roboto";
  color: ${props => props.theme.secondaryColor};
  cursor: pointer;
`;

const SignInWithGoogle = withGoogleAuth(SignIn);

const Header = () => (
  <Container>
    <Title>Bkmark</Title>
    <SignInWithGoogle>Sign in with Google</SignInWithGoogle>
  </Container>
);

export default Header;
