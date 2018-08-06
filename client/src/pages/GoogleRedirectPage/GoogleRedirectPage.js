import React from "react";
import queryString from "query-string";
import { API_URL } from "globals.js";
import axios from "axios";
import { setGoogleToken } from "actions/tokenActions";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class GoogleRedirectPage extends React.Component {
  state = {
    toRedirect: false
  };

  async componentDidMount() {
    const params = queryString.parse(window.location.search);
    const requestUrl = `${API_URL}googleUser/`;
    try {
      const request = await axios.get(requestUrl, {
        headers: {
          code: params.code
        }
      });
      const user = request.data;

      this.props.setGoogleToken(user.googleAccessToken);
      this.setState({ toRedirect: true });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return this.state.toRedirect ? <Redirect to="/" />: 'Loading';
  }
}

export default connect(
  null,
  { setGoogleToken }
)(GoogleRedirectPage);
