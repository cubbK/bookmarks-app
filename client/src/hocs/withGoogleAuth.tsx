import * as React from "react";
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "constants/globals";

const googleUrlWithSpaces = `
  https://accounts.google.com/o/oauth2/v2/auth?
  access_type=offline
  &scope=profile&
  prompt=consent&
  response_type=code&
  client_id=${GOOGLE_CLIENT_ID}&
  redirect_uri=${GOOGLE_REDIRECT_URI}
`;

const googleUrl = googleUrlWithSpaces.replace(/\s/g, "");

export default function withSubscription(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props)
    }

    private setHref = () => {
      // exclamation mark is an  Non-null assertion operator.
      document!.location!.href = googleUrl;
    };

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent onClick={this.setHref} {...this.props}/>;
    }
  };
}
