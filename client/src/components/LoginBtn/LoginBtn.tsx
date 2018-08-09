import * as React from "react";
import Button from "@material-ui/core/Button";

interface IProps {
  color?: "inherit" | "primary" | "secondary" | "default" | undefined;
  name?: string;
  children?: any;
  onClick?: () => void;
}

const LoginBtn: React.SFC<IProps> = props => (
  <Button variant="contained" color={props.color} size="large" {...props}>
    {props.children ? props.children : `Log In With ${props.name}`}
  </Button>
);

LoginBtn.defaultProps = {
  color: "secondary",
  name: "Google"
};

export default LoginBtn;
