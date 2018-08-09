import * as React from 'react';
import HeaderContainer from "containers/HeaderContainer/HeaderContainer";
import LinkListContainer from "./containers/LinkListContainer/LinkListContainer";

class AppPage extends React.Component {
  public render() {
    return (
      <div>
        <HeaderContainer />
        <LinkListContainer />
        AppPage
      </div>
    );
  }
}

export default AppPage;
