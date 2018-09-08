import * as React from "react";
import styled from "styled-components";
import { Spring, config } from "react-spring";

const Container = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  bottom: 0;
`;

interface ILine {
  width: string;
  height: string;
}

const Line = styled<ILine, "div">("div")`
  position: absolute;
  left: 0;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.theme.mainColor};
  bottom: calc(50% - ${props => props.height});
`;

const TitleLeftIndicator = (props: { isOpen: boolean }) => (
  <Container>
    {/* horizontal div */}
    <Spring
      config={config.stiff}
      delay={props.isOpen ? 150 : 0}
      from={{ width: "0px" }}
      to={{
        width: props.isOpen ? "15px" : "0px"
      }}
    >
      {(styles: { width: string }) => (
        <Line width="15px" height="5px" style={{ width: styles.width }} />
      )}
    </Spring>
    {/* vertical div */}
    <Spring
      config={config.stiff}
      delay={props.isOpen ? 0 : 150}
      from={{ height: "0%" }}
      to={{
        height: props.isOpen ? "55%" : "0%"
      }}
    >
      {(styles: { height: string }) => (
        <Line width="5px" height="55%" style={{ height: styles.height }} />
      )}
    </Spring>
  </Container>
);

export default TitleLeftIndicator;
