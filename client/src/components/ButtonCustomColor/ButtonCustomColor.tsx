import * as React from "react";
import Button from "@material-ui/core/Button";
import styled, { css } from "styled-components";
import { desaturate, transparentize } from "polished";

interface IProps {
  color: string;
  children: any;
  variant: "contained" | "outlined";
  [propName: string]: any;
}

interface IColorButton {
  customColor: string;
}

const ContainedButton = styled<IColorButton, any>(Button)`
  && {
    background-color: ${props => props.customColor};
    grid-column-start: right;
    &:hover {
      background-color: ${props => desaturate(0.3, props.customColor)};
    }
  }
`;

const OutlinedButton = styled<IColorButton, any>(Button)`
  && {
    color: ${props => props.customColor};
    border: 1px solid ${props => transparentize(0.5, props.customColor)};
    &:hover {
      border-color: ${props => props.customColor};
      background-color: ${props => transparentize(0.2, props.customColor)};
    }
  }
`;

const ButtonCustomColor = (props: IProps) => {
  if (props.variant === "contained") {
    return (
      <ContainedButton customColor={props.color} {...props}>
        {props.children}
      </ContainedButton>
    );
  }
  if (props.variant === "outlined") {
    return (
      <OutlinedButton customColor={props.color}>
        {props.children}
      </OutlinedButton>
    );
  }
  return <OutlinedButton customColor="black">{props.children}</OutlinedButton>;
};

export default ButtonCustomColor;
