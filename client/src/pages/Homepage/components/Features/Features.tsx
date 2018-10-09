import * as React from "react";
import styled from "styled-components";
import Feature from "./components/Feature/Feature";

const icon0 = require("./img/icon0.svg");
const icon1 = require("./img/icon1.svg");
const icon2 = require("./img/icon2.svg");
const icon3 = require("./img/icon3.svg");

const Container = styled.div`
  display: grid;
`;

const Features = () => (
  <Container>
    <Feature
      icon={icon0}
      title="ttile"
      desc="desc"
    />
  </Container>
)

export default Features;