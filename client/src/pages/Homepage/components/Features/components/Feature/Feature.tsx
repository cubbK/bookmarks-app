import * as React from 'react';
import styled from "styled-components";

interface IProps {
  icon: string;
  title: string;
  desc: string;
}

const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr 3fr; 
  grid-template-areas: 
    "icon title"
    "icon description";
`;

const Icon = styled.img`
  grid-area: icon;
`;

const Title = styled.div`
  font-family: Roboto 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
`;

const Feature = (props: IProps) => (
  <FeatureContainer>
    <Icon src={props.icon} />
    <Title>
      {props.title}
    </Title>
  </FeatureContainer>
)

export default Feature