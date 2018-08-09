import * as React from 'react'
import { IStoreState } from 'types'

import { connect } from 'react-redux'

class LinkListContainer extends React.Component {
 

  public render() {
    return (
      <div>LinkContainerList</div>
    )
  }
}

export default connect(
  (state: IStoreState) => ({
    googleToken: state.googleToken
  })
)(LinkListContainer)