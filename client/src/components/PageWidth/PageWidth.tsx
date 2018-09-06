import * as React from "react";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

const Container = styled(Paper)`
  padding: 10px 5px 40px;
  margin: 10px 0 0;
  @media (min-width: 420px) {
    padding: 10px 20px 40px;
  }
  @media (min-width: 640px) {
    width: 640px;
    margin: 20px auto 0;
  }
`;

class PageWidth extends React.Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default PageWidth;
