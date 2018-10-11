import * as React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

interface IProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "icon title"
    "icon description";
  column-gap: 7px;
  align-content: center;
`;

const Icon = styled.img`
  grid-area: icon;
  align-self: center;
  justify-self: center;
`;

const Title = styled(Typography)`
  && {
    font-size: 18px;
    line-height: 24px;
    word-break: break-all;
    word-wrap: break-word;
  }
`;

const Description = styled(Typography)`
  font-size: 14px;
  line-height: 14px;
`;

const Feature = (props: IProps) => (
  <FeatureContainer>
    <Icon src={props.icon} />
    <Title variant="title">{props.title}</Title>
    <Description variant="body1">{props.description}</Description>
  </FeatureContainer>
);

export default Feature;
