import * as React from "react";
import { IStoreState } from "reducers";

import { connect } from "react-redux";
import getLinksByGroup from "selectors/getLinksByGroup";
import { IState as UserDataInterface } from "reducers/userDataReducer";

import LinearProgress from "@material-ui/core/LinearProgress";
import LoginFailedContainer from "containers/LoginFailedContainer/LoginFailedContainer";

import LinkList from "pages/AppPage/components/LinkList/LinkList";

interface IProps {
  userData: UserDataInterface;
}

class LinkListContainer extends React.Component<IProps> {
  mapLinks = () => {
    return this.props.userData.links.map(link => (
      <div key={link._id}>{link.url}</div>
    ));
  };

  render() {
    if (this.props.userData.loading) {
      return <LinearProgress color="secondary" />;
    } else if (this.props.userData.hasErrored) {
      return (
        <LoginFailedContainer message={this.props.userData.errorMessage} />
      );
    } else {
      return (
        <LinkList
          groups={[
            {
              id: "newId1",
              groupName: "youtube.com",
              links: [
                {
                  _id: "5b813f8a0bb0b2596c5faeaa",
                  url: "https://www.youtube.com/watch?v=UXt0AEkQmWU&t=1376s"
                },
                {
                  _id: "5b813f9b0bb0b2596c5faeab",
                  url: "https://www.youtube.com/watch?v=UXt0AEkQmWU&t=1376s"
                },
                {
                  _id: "5b813fbb0bb0b2596c5faeac",
                  url: "https://www.youtube.com/watch?v=3pSuxyigKto"
                }
              ]
            },
            {
              id: "newId2",
              groupName: "ycombinator.com",
              links: [
                {
                  _id: "5b8140b10bb0b2596c5faeae",
                  url: "https://news.ycombinator.com/item?id=17838887"
                },
                {
                  _id: "5b8140c50bb0b2596c5faeaf",
                  url: "news.ycombinator.com/item?id=17834266"
                },
                {
                  _id: "5b8140d10bb0b2596c5faeb0",
                  url: "https://news.ycombinator.com/item?id=17834380"
                }
              ]
            }
          ]}
        />
      );
    }
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    userData: state.userData,
    links: getLinksByGroup(state)
  };
}

export default connect(mapStateToProps)(LinkListContainer);
