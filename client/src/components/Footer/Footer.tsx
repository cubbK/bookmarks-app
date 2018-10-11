import * as React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const emailIcon = require("./img/email.svg");
const githubIcon = require("./img/github.svg");
const linkedInIcon = require("./img/linkedin.svg");

const Container = styled.div`
  padding: 0 16px;
  min-height: 33px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${props => props.theme.greyColor};
`;

const Link = styled.a`
  color: ${props => props.theme.whiteColor};
  margin-left: 10px;
  img {
    height: 16px;
    width: auto;
  }
`;

const Author = styled(Typography)`
  && {
    font-size: 14px;
  }
`;

const Footer = () => (
  <Container>
    <Author variant="body1">By Dan</Author>
    <Link href="https://github.com/cubbK">
      <img src={githubIcon} alt="github" />
    </Link>
    <Link href="https://www.linkedin.com/in/cubbic/">
      <img src={linkedInIcon} alt="linkedin" />
    </Link>
    <Link href="mailto:danpopa1998@gmail.com">
      <img src={emailIcon} alt="email" />
    </Link>
  </Container>
);

export default Footer;
