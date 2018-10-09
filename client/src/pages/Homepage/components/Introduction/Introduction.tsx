import * as React from "react";
import Typography from "@material-ui/core/Typography";
import LoginBtnGoogle from "containers/LoginBtnGoogle/LoginBtnGoogle";
import styled from "styled-components";
const devicesImage = require("./img/devices.png");

const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
`;

const CatchPhrase = styled(Typography)`
  && {
    line-height: 29px;
  }
`;

const DevicesImage = styled.img`
  margin: 55px auto;
  display: block;
`;

const Introduction = () => (
  <Container>
    <CatchPhrase variant="headline">
      A place to store and group your links in just one click.
    </CatchPhrase>
    <DevicesImage src={devicesImage} alt=""/> 
    <LoginBtnGoogle />
  </Container>
);

export default Introduction;
