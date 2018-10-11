import * as React from "react";
import Introduction from "./components/Introduction/Introduction";
import Features from "./components/Features/Features";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const Body = styled.div`
  margin: 13px 16px 0;
  color: ${props => props.theme.mainColor};
  display: grid;
  row-gap: 55px;
`;

const TextBlockContainer = styled.div`
  display: grid;
`;

const TextBlockTitle = styled(Typography)`
  && {
    font-size: 24px;
  }
`;

const TextBlockDesc = styled(Typography)`
  && {
    font-size: 14px;
  }
`;

const TextBlockItem = styled(Typography)`
  && {
    font-size: 14px;
    margin-top: 15px;
  }
`

const Homepage = () => (
  <Body>
    <Introduction />
    <Features />
    <TextBlockContainer>
      <TextBlockTitle variant="title">Host your own instance</TextBlockTitle>
      <TextBlockDesc variant="body1">
        <TextBlockItem>
          Do you want to have full control over your data? Sure thing😀 You can
          spin up your own instance and use it instead.
        </TextBlockItem>
        <TextBlockItem>
          All the code and the instructions are on GitHub. Follow the link for
          more details and instructions to set it up
        </TextBlockItem>
      </TextBlockDesc>
    </TextBlockContainer>
  </Body>
);

export default Homepage;
