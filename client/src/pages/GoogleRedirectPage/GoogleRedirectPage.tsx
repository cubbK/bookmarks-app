import * as React from "react";
import queryString from "query-string";
import { API_URL } from "globals.js";
import axios from "axios";
import { setGoogleToken, setUserId } from "actions/tokenActions";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

interface IProps {
  setGoogleToken: (token: string) => void;
  setUserId: (token: string) => void;
}

class GoogleRedirectPage extends React.Component<IProps> {
  public state = {
    toRedirect: false
  };

  public render() {
    return this.state.toRedirect ? <Redirect to="/" /> : "Loading";
  }

  public async componentDidMount() {
    const params = queryString.parse(window.location.search);
    try {
      const request = await axios.post(
        `${API_URL}google/getUserByCodeAndSetRefreshToken`,
        {
          code: params.code
        }
      );
      const user = request.data;

      console.log(user);
      this.props.setGoogleToken(user.googleAccessToken);
      this.props.setUserId(user.userId);

      this.setState({ toRedirect: true });
    } catch (err) {
      console.log(err);
    }
  }
}

export default connect(
  null,
  { setGoogleToken, setUserId }
)(GoogleRedirectPage);
