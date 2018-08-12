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
  display: inline-block;
`;

const LoginFailed = () => (
  <InlineCard>
    <CardContent>
      <Typography gutterBottom={true} variant="headline" component="h2">
        Error
      </Typography>
      <Typography component="p">
        Login failed. Something went wrong :(
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="secondary">
        Logout & Try Again
      </Button>
    </CardActions>
  </InlineCard>
);

export default LoginFailed;
