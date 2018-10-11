import * as React from "react";
import styled from "styled-components";
import Feature from "./components/Feature/Feature";
import Typography from "@material-ui/core/Typography";

const icon0 = require("./img/icon0.svg");
const icon1 = require("./img/icon1.svg");
const icon2 = require("./img/icon2.svg");
const icon3 = require("./img/icon3.svg");

const Title = styled(Typography)`
  && {
    font-size: 24px;
    margin-bottom: 5px;
  }
`;

const ContainerList = styled.div`
  display: grid;
  row-gap: 30px;
`;

const Container = styled.div``;

const Features = () => (
  <Container>
    <Title variant="title">Features</Title>
    <ContainerList>
      <Feature
        icon={icon0}
        title="Automatic Group by Domain"
        description="No more need to create folders and group each link manually"
      />
      <Feature
        icon={icon1}
        title="Works Anywhere"
        description="It works well on any screen, from big to small, you don't even need to install an app for android or ios"
      />
      <Feature
        icon={icon2}
        title="PWA Ready"
        description="Works offline and feels like an app, just add a shortcut to the home screen if you're on a phone"
      />
      <Feature
        icon={icon3}
        title="Free"
        description="And it will always be. No tricks"
      />
    </ContainerList>
  </Container>
);

export default Features;
