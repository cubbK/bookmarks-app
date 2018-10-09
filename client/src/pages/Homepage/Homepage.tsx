import * as React from "react";
import Introduction from "./components/Introduction/Introduction";
import Features from './components/Features/Features'
import styled from 'styled-components';

const Body = styled.div`
  margin: 13px 16px 0;
  color: ${props => props.theme.mainColor};
`;

const Homepage = () => (
  <Body>
    <Introduction />
    <Features />
    asd
  </Body> 
);

export default Homepage;
