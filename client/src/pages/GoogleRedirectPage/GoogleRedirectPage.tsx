import * as React from "react";
import queryString from "query-string";
import { API_URL } from "constants/globals";
import axios from "axios";
import { setUserJWT } from "actions/authActions";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

interface IProps {
  setUserJWT: (JWTString: string) => void;
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
    const requestUrl = `${API_URL}google/getUserByCodeAndSetRefreshToken`;
    try {
      const request = await axios.post(requestUrl, {
        code: params.code
      });
      const JWTSTring = request.data;

      this.props.setUserJWT(JWTSTring);

      this.setState({ toRedirect: true });
    } catch (err) {
      console.log(err);
    }
  }
}

export default connect(
  null,
  { setUserJWT }
)(GoogleRedirectPage);
