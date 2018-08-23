import * as React from "react";
import HeaderContainer from "containers/HeaderContainer/HeaderContainer";
import LinkListContainer from "./containers/LinkListContainer/LinkListContainer";
import AddLinkFieldContainer from "./containers/AddLinkFieldContainer/AddLinkFieldContainer";

const AppPage = () => (
  <div>
    <HeaderContainer />
    <AddLinkFieldContainer />
    <LinkListContainer />
    AppPage
  </div>
);

export default AppPage;
