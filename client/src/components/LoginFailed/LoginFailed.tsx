import * as React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography
} from "@material-ui/core";
import styled from "styled-components";

const InlineCard = styled(Card)`
  display: block;
`;

export interface IProps {
  onLogoutClick?: () => any;
  message?: string;
}

const LoginFailed = (props: IProps) => (
  <InlineCard>
    <CardContent>
      <Typography gutterBottom={true} variant="headline" component="h2">
        Error: {props.message}
      </Typography>
      <Typography component="p">
        Login failed. Something went wrong :(
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="secondary" onClick={props.onLogoutClick}>
        Logout & Try Again
      </Button>
    </CardActions>
  </InlineCard>
);

export default LoginFailed;
